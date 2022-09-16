import { Link } from "react-router-dom";
import SideBar from './SideBar'
import {useState, useEffect} from 'react'
import axios from "axios";
import Login from "./Login";
import Swal from 'sweetalert2'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function ProfileSetting(){
  const [studentData,setstudentData] = useState({
    'full_name':'',
    'email':'',
    'username':'',
    'academic_level':'',
    'academics':'',
    'country':'',
    'english_language':'',
    'english':'',
    'academic':'',
    'aca':'',
    'others':'',
    'other':'',
    'interested_categories':'',
    'profile_img':'',
    'p_img':'',
  });  
  const studentId=localStorage.getItem('studentId')
   useEffect(()=>{
  // Fetch Current Teacher Data
  try{
      axios.get(baseUrl+'/student/'+studentId).then((res)=>{
            setstudentData({
                full_name:res.data.full_name,
                email:res.data.email,
                username:res.data.username,
                academic_level:res.data.academic_level,
                academic:res.data.academic,
                country:res.data.country,
                others:res.data.others,
                english_language:res.data.english_language,
                interested_categories:res.data.interested_categories,
                profile_img:res.data.profile_img,
                other:'',
                english:'',
                academics:'',
                aca:'',
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
    setstudentData({
      ...studentData,
      [event.target.name]:event.target.value
    });
  }
  // End

  const handleFileChange=(event)=>{
    setstudentData({
      ...studentData,
      [event.target.name]:event.target.files[0]
    })
  }

  // Submit Form
  const submitForm=()=>{
      const studentFormData=new FormData();
      studentFormData.append("full_name", studentData.full_name)
      studentFormData.append("email", studentData.email)
      studentFormData.append("username", studentData.username)
      studentFormData.append("interested_categories", studentData.interested_categories)
      if(studentData.academics!==''){
        studentFormData.append("academic_level", studentData.academics, studentData.academics.name)
        }
        if(studentData.other!==''){
        studentFormData.append("others", studentData.other, studentData.other.name)
        }
      if(studentData.aca!==''){
        studentFormData.append("academic", studentData.aca, studentData.aca.name)
        }
      studentFormData.append("country", studentData.country)

      if(studentData.english!==''){
        studentFormData.append("english_language", studentData.english,studentData.english.name)
        }

      if(studentData.p_img!==''){
        studentFormData.append("profile_img", studentData.p_img,studentData.p_img.name);
        }
      try{
          axios.put(baseUrl+'/student/'+studentId+'/', studentFormData,{
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
        setstudentData({'status':'error'})
      }

  };
  // End

    useEffect(()=>{
    document.title='Student Profile'
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
          <h5 className="card-header">Document Upload</h5>
          <div className="card-body">
                    
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Full Name</label>
            <div class="col-sm-10">
              <input value={studentData.full_name} onChange={handleChange} name="full_name"  type="text" class="form-control" id="staticEmail"/>
            </div>
          </div>

          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input value={studentData.email} onChange={handleChange} name="emal"  type="text" class="form-control" id="staticEmail"/>
            </div>
          </div>

          <div className="mb-3 row">
            <label for="file" class="col-sm-2 col-form-label">Passport</label>
            <div class="col-sm-10">
              <input type="file" onChange={handleFileChange} name='p_img'
                className="form-control" id="video" />
                {studentData.profile_img &&
                  <p className="mt-2"><img src={studentData.profile_img} width="300" alt={studentData.full_name} /></p>
                }
                <div id="emailHelp" class="form-text">Upload only jpeg</div>
            </div>
          </div>

          <div className="mb-3 row">
            <label for="file" class="col-sm-2 col-form-label">Academic Transcript</label>
            <div class="col-sm-10">
              <input type="file" onChange={handleFileChange} name='academics'
                className="form-control" id="video" />
              {studentData.academic_level &&
                <p className="mt-2"><iframe src={studentData.academic_level}></iframe></p>
              }
            </div>
          </div>

          <div className="mb-3 row">
            <label for="file" class="col-sm-2 col-form-label">Certificate of Graduation</label>
            <div class="col-sm-10">
              <input type="file" onChange={handleFileChange} name='aca'
                className="form-control" id="video" />
              {studentData.academic &&
                <p className="mt-2"><iframe src={studentData.academic}/></p>
              }
              <div id="emailHelp" class="form-text">WAEC/NECO/GCE/Bachelors Degree/Masters Degree/Others</div>
            </div>
          </div>

          <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Country</label>
              <div class="col-sm-10">
                <input type="text" value={studentData.country} onChange={handleChange} name="country"  class="form-control"></input>
                <div id="emailHelp" class="form-text">Input Your Country</div>
              </div>
          </div>

          <div className="mb-3 row">
            <label for="file" class="col-sm-2 col-form-label">Certificate of English Proficiency</label>
            <div class="col-sm-10">
              <input type="file" onChange={handleFileChange} name='english'
              className="form-control" id="video" />
              {studentData.english_language &&
                <p className="mt-2"><iframe src={studentData.english_language}></iframe></p>
              }
              <div id="emailHelp" class="form-text">IELTS/TOEFL/PTE Test</div>
            </div>
          </div>

          <div className="mb-3 row">
            <label for="file" class="col-sm-2 col-form-label">Others</label>
            <div class="col-sm-10">
              <input type="file" onChange={handleFileChange} name='other'
              className="form-control" id="video" />
              {studentData.others &&
                <p className="mt-2"><iframe src={studentData.others}></iframe></p>
              }
            </div>
          </div>

          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-10">
              <input type="text" value={studentData.username} onChange={handleChange} name="username"  class="form-control"></input>
            </div>
          </div>

          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Interested Categories</label>
            <div class="col-sm-10">
              <textarea value={studentData.interested_categories} onChange={handleChange} name="interested_categories"  class="form-control"></textarea>
              <div id="emailHelp" class="form-text">Engineering, Art, Science</div>
            </div>
          </div>

          <button className="btn btn-primary" onClick={submitForm}>Update</button>
        
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ProfileSetting