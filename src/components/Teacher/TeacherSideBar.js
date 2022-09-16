import { Link } from "react-router-dom";


function TeacherSideBar(){
  return (
          <div className="card">
          <div className="list-group list-group-flush">
            <Link to="/teacher-dashboard" className="list-group-item list-group-item-action">DashBoard</Link>
            <Link to="/teacher-mycourses" className="list-group-item list-group-item-action">My Courses</Link>
             {/* <Link to="/teacher-addcourses" className="list-group-item list-group-item-action">Add Courses</Link> */}
             {/* <Link to="/add-course" className="list-group-item list-group-item-action">Add Courses</Link> */}
              <Link to="/teacher-users" className="list-group-item list-group-item-action">My Users</Link>
            {/* <Link to="/recommended-courses" className="list-group-item list-group-item-action">Recommended Courses</Link> */}
            <Link to="/teacher-password" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/teacher-profilesetting" className="list-group-item list-group-item-action">Profile Setting</Link>
            <Link to="/teacher-logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
          </div>
          </div>
  )
}

export default TeacherSideBar;