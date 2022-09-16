import { Link } from "react-router-dom";
import React from 'react'
import {useEffect, useState} from 'react'
import axios from "axios";

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api/student/';
function Register() {
  const [studentData,setstudentData] = useState({
    'full_name':'',
    'email':'',
    'password':'',
    'username':'',
    'interested_categories':'',
    'status':'',
    // 'otp_digit':'',
  });

  // Change Element value
  const handleChange=(event)=>{
    setstudentData({
      ...studentData,
      [event.target.name]:event.target.value
    });
  }
  // End

    // Submit Form
  const submitForm=()=>{
      // const otp_digit=Math.floor(1000000 + Math.random() * 9000000)
      const studentFormData=new FormData();
      studentFormData.append("full_name", studentData.full_name)
      studentFormData.append("email", studentData.email)
      studentFormData.append("password", studentData.password)
      studentFormData.append("username", studentData.username)
      studentFormData.append("interested_categories", studentData.interested_categories)
      // studentFormData.append("otp_digit", otp_digit)
      try{
          axios.post(baseUrl, studentFormData).then((response)=>{
            window.location.href='/user-login/';
            setstudentData({
              'full_name':'',
              'email':'',
              'password':'',
              'username':'',
              'interested_categories':'',
              'status':'success',
            });
      });
      }catch(error){
        console.log(error);
        setstudentData({'status':'error'})
      }

  };
  // End

  useEffect(()=>{
    document.title='User Register'
  })

  return (
      <section className='register'>

        {studentData.status=='success' && <p class="text-success"> Thanks for registration</p>}
        {studentData.status=='error' && <p class="text-danger"> Something wrong happened</p>}

        <div className='form'>
          <h3>User Register</h3>
          <input type='text' name='full_name' placeholder='Enter your full name' value={studentData.full_name} onChange={handleChange} className='box' />
          <input type='email' name='email' placeholder='Enter your email' value={studentData.email} onChange={handleChange} className='box' />
          <input type='text' name='username' placeholder='Enter your username' value={studentData.username} onChange={handleChange} className='box' />
          <input type='password' name='password' placeholder='Enter your password' value={studentData.password} onChange={handleChange} className='box' />
          <input type='text' name='interested_categories' placeholder='Interests e.g. Engineering, Art, Medicals, Science, etc' value={studentData.interested_categories} onChange={handleChange} className='box' />
          <input type='submit' value='Register' onClick={submitForm} className='btn' />
        </div>

      </section>

    // <div className="container mt-4">
    //   <div className="row">
    //     <div className="col-6 offset-3">
    //       {studentData.status=='success' && <p class="text-success"> Thanks for registration</p>}
    //       {studentData.status=='error' && <p class="text-danger"> Something wrong happened</p>}
    //       <div className="card">
    //         <h5 className="card-header">User Register</h5>
    //         <div className="card-body">
    //             <div className="mb-3">
    //               <label for="exampleInputEmail1" className="form-label">Fullname</label>
    //               <input value={studentData.full_name} type="text" name="full_name" onChange={handleChange} className="form-control" />
    //               </div>

    //               <div className="mb-3">
    //               <label for="exampleInputEmail1" className="form-label">email</label>
    //               <input type="email" value={studentData.email} name="email" onChange={handleChange} className="form-control" />
    //               </div>

    //             <div className="mb-3">
    //               <label for="exampleInputPassword1" className="form-label">Password</label>
    //               <input type="password" value={studentData.password} name="password" onChange={handleChange} className="form-control" id="password" />
    //             </div>

    //             <div className="mb-3">
    //               <label for="exampleInputPassword1" className="form-label">Username</label>
    //               <input type="text" value={studentData.username} name="username" onChange={handleChange} className="form-control" />
    //             </div>

    //             <div className="mb-3">
    //               <label for="exampleInputPassword1" className="form-label">Interest</label>
    //               <textarea name="interested_categories" onChange={handleChange} value={studentData.interested_categories} className="form-control"></textarea>
    //                   <div id="emailHelp" class="form-text">Engineering, Art, Medicals, Science, ETC</div>

    //             </div>

    //             <button type="submit" onClick={submitForm} className="btn btn-primary">Register</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Register