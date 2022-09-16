import { Link } from "react-router-dom";
import SideBar from './SideBar'
import {useState, useEffect} from 'react'
import axios from "axios";

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function DashBoard(){
  const [dashboardData,setdashboardData] = useState([]);
  const studentId=localStorage.getItem('studentId')

  useEffect(()=>{
    try{
      axios.get(baseUrl+'/student/dashboard/'+studentId).then((res)=>{
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
         <SideBar />
        </aside>
        <div className='col-md-9'>
        <div className="card">
          {/* <div className="list-group list-group-flush">
            <li className="list-group-item list-group-item-action">Enrollled Courses</li>
            <Link to="/my-courses" className="list-group-item list-group-item-action">{dashboardData.enrolled_courses}</Link>
          </div> */}
        </div>
        </div>
      </div>
    </section>
  )
}

export default DashBoard