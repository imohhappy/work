import React from 'react'
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Carousel, Card, Button, Placeholder, Col, Row} from 'react-bootstrap'
import Swal from "sweetalert2";

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function CourseDetail() {
  const [chapterData, setchapterData]=useState([]);
  const [teacherData, setteacherData]=useState([]);
  const [courseData, setcourseData]=useState([]);
  const [techListData, settechListData]=useState([]);
  const [relatedcourseData, setrelatedcourseData]=useState([]);
  const [userLoginStatus, setuserLoginStatus]=useState();
  const [enrollStatus, setenrollStatus]=useState();
  let {course_id}=useParams();
  const studentId=localStorage.getItem("studentId")
    // fetch course when page loads

  useEffect(()=>{
  try{
    axios.get(baseUrl+'/course/'+course_id).then((res)=>{
          setcourseData(res.data);
          setchapterData(res.data.course_chapters);
          setteacherData(res.data.teacher);
          setrelatedcourseData(JSON.parse(res.data.related_videos));
          settechListData(res.data.tech_list);
    });
  }catch(error){
    console.log(error)
  }
// fetch enroll status
  try{
    axios.get(baseUrl+'/fetch-enroll-status/'+studentId+'/'+course_id).then((res)=>{
          if(res.data.bool==true){
            setenrollStatus('success')
          }
    });
  }catch(error){
    console.log(error)
  }

  const studentLoginStatus=localStorage.getItem("studentLoginStatus");
  if(studentLoginStatus=='true'){
    setuserLoginStatus('success')
  }
  },[]);

  
  const enrollCourse=()=>{
    const studentId=localStorage.getItem('studentId')
    const _formData=new FormData();
    _formData.append("course", course_id);
    _formData.append('student',studentId);
    try{
       axios.post(baseUrl+'/student-enroll-course/', _formData,{
        headers: {
          'content-type': 'multipart/form-data'
        }
       })
       .then((res)=>{
            if(res.status==200||res.status==201){
              Swal.fire({
                title: 'you have suceesfully enrolled in this course',
                toast: true,
                icon: 'success',
                timer:300000000,
                position:'Top right',
                timerProgressBar: 'true',
                showConfirmButton:false
              })
            window.location.reload()
            setenrollStatus('success')
            }
              
            });
          }catch(error){
        console.log(error);
          }
    }

  // console.log(relatedcourseData)
  return (
    <section className='course-detail'>

      <img src={courseData.featured_img} />

      <h1 className='heading-title'>Admission Details</h1>
      <p>When you are thinking about studying overseas, it is important that you understand all 
      the costs involved and budget accordingly. It is essential to budget for your studies prior to leaving your home country 
      and to arrange all your funding for BOTH your tuition fees and your living costs. The  list of documents are found bellow</p>
      <ul>
        <li>{courseData.bird}</li>
        <li>{courseData.table}</li>
        <li>{courseData.chick}</li>
        <li>{courseData.fowl}</li>
        <li>{courseData.eagle}</li>
      </ul>

      <h3>UK university for {courseData.title} {courseData.section}</h3>
      <ul>
        <li>{courseData.schooldescription}-</li>
        <li>{courseData.schooldescription}</li>
        <li>{courseData.university}</li>
        <li>{courseData.title}</li>
      </ul>
      <p>Students who want to earn a degree in {courseData.title} in the {courseData.university} 
      will run the program through different ways</p>
      <ul>
        <li>{courseData.intake}</li>
        <li>{courseData.duration}</li>
        <li>{courseData.studymode}</li>
        <li>{courseData.tuitionfees} (full-time)</li>
      </ul>

      <h3>Application Deadline</h3>
      <p>{courseData.deadline}</p>
      <p>This is the deadline for applications to be completed and sent for this course. If the university or college still has places 
      available you can apply after this date, but your application is not guaranteed to be considered</p>
      <p>There will be a variety of career paths for skilled graduates of {courseData.title}. Again, they 
      can go for further study and research after completing the course</p>

      {enrollStatus==='success' && userLoginStatus=='success' &&
        <p><span className='btn btn-success'>Enrolled Awaiting Admission</span></p>
      }
      {userLoginStatus==='success' && enrollStatus!=='success' &&
        <p><button type="button" onClick={enrollCourse} className='btn btn-success'>Enroll In This Course</button></p>
      }
      {userLoginStatus!=='success' &&
        <Link to="/user-login">Please Loging To Enroll In This Course</Link>
      }

    </section>
  )
}

export default CourseDetail
