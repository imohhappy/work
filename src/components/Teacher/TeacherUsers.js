import { Link, useParams } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'
 import {useEffect, useState} from 'react'
 import axios from 'axios'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function TeacherUsers(){
  const [StudentData, setStudentData]=useState([]);
  const teacherId=localStorage.getItem('teacherId')
    // fetch course when page loads

   useEffect(()=>{
    try{
      axios.get(baseUrl+'/fetch-all-enrolled-students/'+teacherId).then((res)=>{
            setStudentData(res.data);
      });
    }catch(error){
      console.log(error)
    }
  },[]);
  return (
    <section className="container mt-4 dashboard">
      <div className="row">
        <aside className="col-md-3">
         <TeacherSideBar />
        </aside>
        <div className='col-md-9'>
        <div className="card-body">
          <div className="card-header">Enrolled Students</div>
          
            <table className="table table-bordered">
              <thead>
                 <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Total Enrolled</th>
                  <th>Action</th>
                </tr>
              </thead>
                <tbody>
                  {StudentData.map((row, index) =>
                  <tr>
                    <td>{row.student.full_name}</td>
                    <td>{row.student.email}</td>
                    <td>{row.student.username}</td>
                    <td>{row.student.interested_categories}</td>
                   
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

export default TeacherUsers;