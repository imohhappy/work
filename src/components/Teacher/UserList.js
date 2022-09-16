import { Link, useParams } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'
 import {useEffect, useState} from 'react'
 import axios from 'axios'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function UserList(){
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
      <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
         <TeacherSideBar />
        </aside>
        <section className='col-md-9'>
        <div className="card">
          <h5 className="card-header">Enrolledhugui Students
          <button type="button" class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#groupMsgModal">
            send message
          </button>
          </h5>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Interested Categories</th>
                </tr>
              </thead>
                <tbody>
                  {StudentData.map((row, index) =>
                  <tr>
                    <td>{row.student.full_name}</td>
                    <td>{row.student.email}</td>
                    <td>{row.student.username}</td>
                    <td>
                      {row.student.interested_categories}
                    </td>
                  </tr>
                  )}
                </tbody>
    
            </table>
          </div>
        </div>
        </section>
      </div>
    </div>
  )
}

export default UserList;