import {useEffect, useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api';
function ForgetPassword() {
  const [teacherData, setteacherData]=useState({
    email:'',
  });

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
    teacherFormData.append('email', teacherData.email)
    try{
        axios.post(baseUrl+'/teacher-forgot-password/', teacherFormData)
        .then((res)=>{
          if(res.data.bool==true){
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
    document.title='Forget Password'
  })
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h5 className="card-header">Enter Registered Email</h5>
            <div className="card-body">
              {successMsg && <p className="text-success">{successMsg}</p>}
              {errorMsg && <p className="text-danger">{errorMsg}</p>}
             <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <input value={teacherData.email} onChange={handleChange} name="email" type="email" className="form-control" />
                </div>
                <button type="submit" onClick={submitForm} className="btn btn-primary">Send</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword