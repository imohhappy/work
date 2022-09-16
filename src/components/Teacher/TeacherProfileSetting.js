import { Link } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'
import {useState, useEffect} from 'react'
import axios from "axios";
import TeacherLogin from "./TeacherLogin";
import Swal from 'sweetalert2'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function TeacherProfileSetting(){
  const [teacherData,setteacherData] = useState({
    'full_name':'',
    'email':'',
    'qualification':'',
    'mobile_no':'',
    'skills':'',
    'country':'',
    'status':'',
    'profile_img':'',
    'p_img':'',
  });  
  const teacherId=localStorage.getItem('teacherId')
   useEffect(()=>{
  // Fetch Current Teacher Data
  try{
      axios.get(baseUrl+'/teacher/'+teacherId).then((res)=>{
            setteacherData({
                full_name:res.data.full_name,
                email:res.data.email,
                qualification:res.data.qualification,
                mobile_no:res.data.mobile_no,
                skills:res.data.skills,
                country:res.data.country,
                profile_img:res.data.profile_img,
                p_img:'',
            });
      });
    }catch(error){
      console.log(error)
    }
  // End
  },[]);

  // Change Element value
  const handleChange=(event)=>{
    setteacherData({
      ...teacherData,
      [event.target.name]:event.target.value
    });
  }
  // End

  const handleFileChange=(event)=>{
    setteacherData({
      ...teacherData,
      [event.target.name]:event.target.files[0]
    })
  }

  // Submit Form
  const submitForm=()=>{
      const teacherFormData=new FormData();
      teacherFormData.append("full_name", teacherData.full_name)
      teacherFormData.append("email", teacherData.email)
      teacherFormData.append("qualification", teacherData.qualification)
      teacherFormData.append("mobile_no", teacherData.mobile_no)
      teacherFormData.append("skills", teacherData.skills)
      teacherFormData.append("country", teacherData.country)

      if(teacherData.p_img!==''){
        teacherFormData.append("profile_img", teacherData.p_img,teacherData.p_img.name);
        }
      try{
          axios.put(baseUrl+'/teacher/'+teacherId+'/', teacherFormData,{
            headers: {
                'content-type': 'multipart/form-data'
        }
          }).then((response)=>{
            if(response.status==200){
              Swal.fire({
                title: 'Confirm',
                text: 'data has been updated',
                icon: 'success',
                position:'Top right',
                timerProgressBar: 'continue',
                showConfirmButton:false
              })

            }
      });
      }catch(error){
        console.log(error);
        setteacherData({'status':'error'})
      }

  };
  // End

    useEffect(()=>{
    document.title='Teacher Profile'
  })
  
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  if(teacherLoginStatus!=='true'){
    window.location.href='/teacher-login';
  }
  return (
    <section className="container mt-4 dashboard">
      <div className="row">
        <aside className="col-md-3">
         <TeacherSideBar />
        </aside>
        <div className='col-md-9'>
        <div className="row">
        <div className="card">
                <h5 className="card-header">Profile Setting</h5>
                <div className="card-body">
                    
                    <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Full Name</label>
            <div class="col-sm-10">
            <input value={teacherData.full_name} onChange={handleChange} name="full_name"  type="text" class="form-control" id="staticEmail"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input value={teacherData.email} onChange={handleChange} name="emal"  type="text" class="form-control" id="staticEmail"/>
            </div>
        </div>

        <div className="mb-3 row">
        <label for="file" class="col-sm-2 col-form-label">Profile Image</label>
        <div class="col-sm-10">
        <input type="file" onChange={handleFileChange} name='p_img'
        className="form-control" id="video" />
        {teacherData.profile_img &&
            <p className="mt-2"><img src={teacherData.profile_img} width="300" alt={teacherData.full_name} /></p>
        }
        </div>
        </div>
        <div className="mb-3 row">
          <label for="exampleInputPassword1" className="col-sm-2 col-form-label">Country</label>
          <div class="col-sm-10">
          <textarea value={teacherData.country} onChange={handleChange} name="country" className="form-control"></textarea>
              <div id="emailHelp" class="form-text">Please input your country</div>
            </div>
        </div>

         <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Skills</label>
            <div class="col-sm-10">
            <textarea value={teacherData.skills} onChange={handleChange} name="skills"  class="form-control"></textarea>
            </div>
        </div>

          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Mobile no</label>
            <div class="col-sm-10">
            <textarea value={teacherData.mobile_no} onChange={handleChange} name="mobile_no"  class="form-control"></textarea>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Qualification</label>
            <div class="col-sm-10">
            <textarea value={teacherData.qualification} onChange={handleChange} name="qualification"  class="form-control"></textarea>
            <div id="emailHelp" class="form-text">Bsc, PHD</div>
            </div>
        </div>
        <hr/>
            <button className="btn btn-primary" onClick={submitForm}>Update</button>
        
        </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default TeacherProfileSetting