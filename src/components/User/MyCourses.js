import { Link } from "react-router-dom";
import SideBar from './SideBar'
 import {useEffect, useState} from 'react'
 import axios from 'axios'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function MyCourses(){
  const [courseData, setcourseData]=useState([]);
  const studentId=localStorage.getItem('studentId')

   // fetch course when page loads

   useEffect(()=>{
    try{
      axios.get(baseUrl+'/fetch-enrolled-courses/'+studentId).then((res)=>{
        console.log(res.data)
        setcourseData(res.data);
      });
    }catch(error){
      console.log(error)
    }
  },[]);

  return (
    <section className="container mt-4 dashboard">
      <div className="row">
        <aside className="col-md-3">
         <SideBar />
        </aside>
        <div className='col-md-9'>
        <div className="card-body">
          <div className="card-header">My Courses</div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>School</th>
                  <th>Time</th>
                  <th>Status</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
                <tbody>
                  {courseData.map((row, index) =>
                  <tr>
                    <td><Link Link to={"/detail/"+row.course.id}>{row.course.title}</Link></td>
                    <td>{row.course.university}</td>
                    <td>{row.enrolled_time}</td>
                    <td>Admission</td>
                </tr>
                  )}
                </tbody>
    
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyCourses;