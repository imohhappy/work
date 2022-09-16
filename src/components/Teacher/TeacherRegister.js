import { Link } from "react-router-dom";
import React from 'react'
import {useEffect, useState} from 'react'
import axios from "axios";

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api/teacher/';
function TeacherRegister() {
  const [teacherData,setteacherData] = useState({
    'full_name':'',
    'email':'',
    'password':'',
    'qualification':'',
    'mobile_no':'',
    'skills':'',
    'country':'',
    'status':'',
    'otp_digit':'',
  });

  // Change Element value
  const handleChange=(event)=>{
    setteacherData({
      ...teacherData,
      [event.target.name]:event.target.value
    });
  }
  // End

  // Submit Form
  const submitForm=()=>{
      const otp_digit=Math.floor(1000000 + Math.random() * 9000000)
      const teacherFormData=new FormData();
      teacherFormData.append("full_name", teacherData.full_name)
      teacherFormData.append("email", teacherData.email)
      teacherFormData.append("password", teacherData.password)
      teacherFormData.append("qualification", teacherData.qualification)
      teacherFormData.append("mobile_no", teacherData.mobile_no)
      teacherFormData.append("country", teacherData.country)
      teacherFormData.append("skills", teacherData.skills)
      teacherFormData.append("otp_digit", otp_digit)
      try{
          axios.post(baseUrl, teacherFormData).then((response)=>{
            window.location.href='/verify-teacher/'+response.data.id;
            // setteacherData({
            //   'full_name':'',
            //   'email':'',
            //   'password':'',
            //   'qualification':'',
            //   'mobile_no':'',
            //   'skills':'',
            //   'status':'success',
            // });
      });
      }catch(error){
        console.log(error);
        setteacherData({'status':'error'})
      }

  };
  // End

  useEffect(()=>{
    document.title='Teacher Register'
  })
  
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          {teacherData.status=='success' && <p class="text-success"> Thanks for registration</p>}
          {teacherData.status=='error' && <p class="text-danger"> Something wrong happened</p>}
          <div className="card">
            <h5 className="card-header">Teacher Register</h5>
            <div className="card-body">
             <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Fullname</label>
                    <input value={teacherData.full_name} onChange={handleChange} name="full_name" type="full_name" className="form-control" />
                    </div>

                    <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input value={teacherData.email} onChange={handleChange} name="email" type="email" className="form-control" />
                    </div>

                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input value={teacherData.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                  </div>

                        <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Qualification</label>
                    <input value={teacherData.qualification} onChange={handleChange} name="qualification" type="qualification" className="form-control" id="exampleInputPassword1" />
                  </div>

                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Mobile Number</label>
                    <input value={teacherData.mobile_no} onChange={handleChange} name="mobile_no" type="number" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Skills</label>
                    <textarea value={teacherData.skills} onChange={handleChange} name="skills" className="form-control"></textarea>
                        <div id="emailHelp" class="form-text">Engineering, Art, Medicals, Science, ETC</div>
                        </div>

                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Country</label>
                    <textarea value={teacherData.country} onChange={handleChange} name="country" className="form-control"></textarea>
                        <div id="emailHelp" class="form-text">Please input your country</div>

                  </div>

                  <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherRegister