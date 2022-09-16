import {useEffect, useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api';
function TeacherLogin() {
  const [teacherLoginData, setteacherLoginData]=useState({
    email:'',
    password:''
  });

  const [errorMsg, seterrorMsg]=useState('')

  const handleChange=(event)=>{
    setteacherLoginData({
      ...teacherLoginData,
      [event.target.name]:event.target.value
    });
  }

  const submitForm=()=>{
    const teacherFormData=new FormData;
    teacherFormData.append('email', teacherLoginData.email)
    teacherFormData.append('password', teacherLoginData.password)
    try{
        axios.post(baseUrl+'/teacher-login', teacherFormData)
        .then((res)=>{
          if(res.data.bool==true){
            localStorage.setItem('teacherLoginStatus', true);
            localStorage.setItem('teacherId',res.data.teacher_id);
            window.location.href='/teacher-dashboard';
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
    document.title='Teacher Login'
  })
  return (
    <section className='login'>

      {errorMsg && <p className="text-danger">{errorMsg}</p>}

      <div className='form'>
        <h3>Staff Login</h3>
        <input type='email' name='email' placeholder='Enter your email' value={teacherLoginData.email} onChange={handleChange} className='box' />
        <input type='password' name='password' placeholder='Enter your password' value={teacherLoginData.password} onChange={handleChange} className='box' />
        <input type='submit' value='Login' onClick={submitForm} className='btn' />
      </div>

    </section>
  )
}

export default TeacherLogin