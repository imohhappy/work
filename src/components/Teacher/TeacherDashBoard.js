import { Link } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'
import {useState, useEffect} from 'react'
import axios from "axios";
import TeacherLogin from "./TeacherLogin";
import Swal from 'sweetalert2'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function TeacherDashBoard(){
  const [dashboardData,setdashboardData] = useState([]);
  const teacherId=localStorage.getItem('teacherId')

  useEffect(()=>{
    try{
      axios.get(baseUrl+'/teacher/dashboard/'+teacherId).then((res)=>{
        console.log(res)
        setdashboardData(res.data);
      });
    }catch(error){
      console.log(error)
    }
},[])
  return (
    <section className="container mt-4 dashboard">
      <div className="row">
        <aside className="col-md-3">
         <TeacherSideBar />
        </aside>
        <div className='col-md-9'>
        <div className="row">
            {/* <div className="col-md-4">
              <div className="card border-primary">
                <h5 className="card-header bg-primary text-white">Total Courses</h5>
                <div className="card-body">
                  <h3><Link to="/teacher-mycourses">{dashboardData.total_teacher_courses}</Link></h3>
                </div>
              </div>
            </div>  

            <div className="col-md-4">
              <div className="card border-success">
                <h5 className="card-header bg-success text-white">Total Students</h5>
                <div className="card-body">
                  <h3><Link to="/teacher-users">{dashboardData.total_teacher_students}</Link></h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-info">
                <h5 className="card-header bg-info text-white">Total chapter</h5>
                <div className="card-body">
                  <h3><Link to="/teacher-mycourses">{dashboardData.total_teacher_chapters}</Link></h3>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeacherDashBoard