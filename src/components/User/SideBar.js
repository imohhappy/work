import { Link } from "react-router-dom";


function SideBar(){
  return (
    <div className="card">
    <div className="list-group list-group-flush">
      <Link to="/user-dashboard" className="list-group-item list-group-item-action">DashBoard</Link>
      {/* <Link to="/my-courses" className="list-group-item list-group-item-action">My Courses</Link> */}
      {/* <Link to="/recommended-courses" className="list-group-item list-group-item-action">Recommended Courses</Link> */}
      <Link to="/change-password" className="list-group-item list-group-item-action">Change Password</Link>
      <Link to="/profile-setting" className="list-group-item list-group-item-action">Document Upload</Link>
      <Link to="/logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
    </div>
    </div>
  )
}

export default SideBar;