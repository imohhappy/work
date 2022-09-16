import { Link } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'
import {useState, useEffect} from 'react'
import axios from "axios";
import TeacherLogin from "./TeacherLogin";
import Swal from 'sweetalert2'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function TeacherPassword(){
  const [teacherData,setteacherData] = useState({
    'password':'',
  });  
  const teacherId=localStorage.getItem('teacherId')

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
      const teacherFormData=new FormData();
      teacherFormData.append("password", teacherData.password)
      try{
          axios.post(baseUrl+'/teacher/change-password/'+teacherId+'/', teacherFormData).then((response)=>{
            if(response.status==200){
              Swal.fire({
                title: 'Confirm',
                text: 'Password Changed',
                icon: 'success',
                position:'Top right',
                timerProgressBar: 'continue',
                showConfirmButton:false
              })
                window.location.href='/teacher-logout';
            }else{
              alert('opps...... something went wrong')
            }
      });
      }catch(error){
        console.log(error);
        setteacherData({'status':'error'})
      }

  };
  // End

    useEffect(()=>{
    document.title='Teacher Change Password'
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
        <div className="card">
                <h5 className="card-header">Change Password</h5>
                <div className="card-body">
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                    <input type="text" value={teacherData.password} onChange={handleChange} name="password"  class="form-control" id="inputPassword"/>
                    </div>
                </div>
                <hr/>
            <button onClick={submitForm} className="btn btn-primary">Update</button>
        
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default TeacherPassword