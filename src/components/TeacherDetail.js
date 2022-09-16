import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function TeacherDetail() {
  const [courseData, setcourseData]=useState([]);
  const [teacherData, setteacherData]=useState([]);
  let {teacher_id}=useParams();

  useEffect(()=>{
    try{
      axios.get(baseUrl+'/teacher/'+teacher_id).then((res)=>{
        setcourseData(res.data.teacher_courses);
        setteacherData(res.data);
      });
    }catch(error){
      console.log(error)
    }
  },[]);
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-3'>
            <img src="/IMG_20220701_113851.jpg" className="img-thumbnail" alt="Course Image" />

            </div>
        <div className='col-8'>
          <h3>{teacherData.full_name}<Link to="/category/imoh">imoh</Link></h3>
          <p>{teacherData.detail}</p>
          <p className='fw-bold'>Duration: 7 Semesters</p>
          <p className='fw-bold'>Total Enrolled: 456 students</p>
          <p className='fw-bold'>Rating:4/5</p>
          </div>
          </div>

          {/* Course List */}
          <div className='card mt-4'>
            <h5 className='card-header'>
              Course List
            </h5>
            <div className="list-group-item list-group-item-action">
              {courseData.map((course, index)=>
               <Link to={"/detail/"+course.id} className="list-group-item list-group-item-action">{course.title}</Link>
                )}
            </div>
          </div>
          </div>
    
  )
}

export default TeacherDetail
