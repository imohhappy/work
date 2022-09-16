import React from 'react'
import {useEffect, useState} from 'react'
import axios from "axios";

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api';
function Login() {
  const [studentLoginData, setstudentLoginData]=useState({
    email:'',
    password:''
  });

  const [errorMsg, seterrorMsg]=useState('')

  const handleChange=(event)=>{
    setstudentLoginData({
      ...studentLoginData,
      [event.target.name]:event.target.value
    });
  }

    const submitForm=()=>{
    const StudentFormData=new FormData;
    StudentFormData.append('email', studentLoginData.email)
    StudentFormData.append('password', studentLoginData.password)
    try{
        axios.post(baseUrl+'/student-login', StudentFormData)
        .then((res)=>{
          if(res.data.bool==true){
            localStorage.setItem('studentLoginStatus', true);
            localStorage.setItem('studentId',res.data.student_id);
            window.location.href='/user-dashboard';
          }else{
            seterrorMsg('invalid email or password')
          }
        })

    }catch(error){
      console.log(error)
    }
  }

  const studentLoginStatus=localStorage.getItem('studentLoginStatus')
  if(studentLoginStatus==='true'){
    window.location.href='/user-dashboard';
  }



  useEffect(()=>{
    document.title='Student Login'
  })

  return (
    <section className='login'>

      {errorMsg && <p className="text-danger">{errorMsg}</p>}

      <div className='form'>
        <h3>User Login</h3>
        <input type='email' name='email' placeholder='Enter your email' value={studentLoginData.email} onChange={handleChange} className='box' />
        <input type='password' name='password' placeholder='Enter your password' value={studentLoginData.password} onChange={handleChange} className='box' />
        <input type='submit' value='Login' onClick={submitForm} className='btn' />
      </div>

    </section>
  )
}

export default Login