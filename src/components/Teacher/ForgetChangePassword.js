import {useEffect, useState} from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api';
function ForgetChangePassword() {
  const [teacherData, setteacherData]=useState({
    password:'',
  });

  const {teacher_id}=useParams();

  const [successMsg, setsuccessMsg]=useState('')
  const [errorMsg, seterrorMsg]=useState('')

  const handleChange=(event)=>{
    setteacherData({
      ...teacherData,
      [event.target.name]:event.target.value
    });
  }

  const submitForm=()=>{
    const teacherFormData=new FormData;
    teacherFormData.append('password', teacherData.password)
    try{
        axios.post(baseUrl+'/teacher-change-password/'+teacher_id+'/', teacherFormData)
        .then((res)=>{
          if(res.data.bool===true){
            setsuccessMsg(res.data.msg)
          }else{
            seterrorMsg(res.data.msg)
          }
        })

    }catch(error){
      console.log(error)
    }
  }

  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  if(teacherLoginStatus=='true'){
    window.location.href='/teacher-dashboard';
  }



  useEffect(()=>{
    document.title='Change Password'
  })
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h5 className="card-header">Enter New Password</h5>
            <div className="card-body">
              {successMsg && <p className="text-success">{successMsg}</p>}
              {errorMsg && <p className="text-danger">{errorMsg}</p>}
             <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Password</label>
                  <input value={teacherData.password} onChange={handleChange} name="password" type="password" className="form-control" />
                </div>
                <button type="submit" onClick={submitForm} className="btn btn-primary">Change</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetChangePassword