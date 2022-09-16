import { Link } from "react-router-dom";
import SideBar from './SideBar'
import {useState, useEffect} from 'react'
import axios from "axios";
import Login from "./Login";
import Swal from 'sweetalert2'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function ChangePassword(){
  const [studentData,setstudentData] = useState({
    'password':'',
  });  
  const studentId=localStorage.getItem('studentId')

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
      const studentFormData=new FormData();
      studentFormData.append("password", studentData.password)
      try{
          axios.post(baseUrl+'/student/change-password/'+studentId+'/', studentFormData).then((response)=>{
            if(response.status==200){
              Swal.fire({
                title: 'Confirm',
                text: 'Password Changed',
                icon: 'success',
                position:'Top right',
                timerProgressBar: 'continue',
                showConfirmButton:false
              })
                window.location.href='/logout';
            }else{
              alert('opps...... something went wrong')
            }
      });
      }catch(error){
        console.log(error);
        setstudentData({'status':'error'})
      }

  };
  // End

    useEffect(()=>{
    document.title='Student Change Password'
  })
  
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')
  if(studentLoginStatus!=='true'){
    window.location.href='/user-login';
  }
  return (
    <section className="container mt-4 dashboard">
      <div className="row">
        <aside className="col-md-3">
         <SideBar />
        </aside>
        <div className='col-md-9'>
        <div className="card">
          <div className="list-group list-group-flush">
            <li className="list-group-item list-group-item-action">Changed Password</li>
            <div className="card-body">
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                    <input type="text" value={studentData.password} onChange={handleChange} name="password"  class="form-control" id="inputPassword"/>
                    </div>
                </div>
                <hr/>
            <button onClick={submitForm} className="btn btn-primary">Update</button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ChangePassword