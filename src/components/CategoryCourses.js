import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function CategoryCourses() {
  const [courseData, setCourseData]=useState([]);
  const {category_slug}=useParams();
    // fetch course when page loads
  useEffect(()=>{
    try{
      axios.get(baseUrl+'/course/?category='+category_slug).then((res)=>{
            setCourseData(res.data);
      });
    }catch(error){
      console.log(error)
    }
  },[]);
  return (
    <div className="container mt-3">
   {/* Latest Course */}

    <h3 className="pb-1 mb-4">{category_slug}</h3>
    <div className="row mb-4">
      {courseData && courseData.map((course, index)=>
      <div className="col-md-3 mt-4">
        <div className="card">
          <img src={course.featured_img} className="card-img-top" alt={course.title} />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h5 className="card-ttle"><Link to={"/detail/"+course.id} className="btn btn-primary">{course.title}</Link></h5>
          </div>
        </div>
      </div>
      )}
    </div>
    {/* End Latest Course */}
    {/* Pagination start */}

    {/* <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav> */}

{/* End */}
    </div>
  );
}

export default CategoryCourses;
