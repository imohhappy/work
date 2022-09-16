import { Link } from "react-router-dom";
 import {useEffect, useState} from 'react'
 import axios from 'axios'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api/course/'
function AllCourses() {
  const [courseData, setCourseData]=useState([]);
  const [nextUrl, setnextUrl]=useState();
  const [previousUrl, setpreviousUrl]=useState();
    // fetch course when page loads
   useEffect(()=>{
    try{
      axios.get(baseUrl).then((res)=>{
          setnextUrl(res.data.next)
          setpreviousUrl(res.data.previous)
          setCourseData(res.data.results);
      });
    }catch(error){
      console.log(error)
    }
  },[]);

  const paginationHandler=(url)=>{
    try{
      axios.get(url).then((res)=>{
        setnextUrl(res.data.next)
        setpreviousUrl(res.data.previous)
        setCourseData(res.data.results);
      });
    }catch(error){
      console.log(error)
    }
  };
  return (
    <section className='all-courses'>
      <h1 className='heading-title'>Universities</h1>
      
      <div className='box-container'>
        {courseData && courseData.map((course, index)=>
          <div className='box'>
            <div className="image">
                <img src={course.featured_img} alt={course.title} />
            </div>
            <div class="content">
              <h3>{course.title}</h3>
              {/* <p>{course.title} is a good university to study any of </p> */}
              <a href={course.university} className='btn'>Learn More</a>
              {/* <Link to={"/detail/"+course.id} className='btn'>{course.university}</Link> */}
            </div>
          </div>
        )}
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {previousUrl &&
          <li className="page-item"><button className="page-link" onClick={()=>paginationHandler(previousUrl)}><i className="bi bi-arrow-left"></i>Previous</button></li>
          }
          {nextUrl &&
          <li className="page-item"><button className="page-link" onClick={()=>paginationHandler(nextUrl)}>Next<i className="bi bi-arrow-right"></i></button></li>
          }
        </ul>
      </nav>
    </section>
    // {/* Pagination start */}

//     <nav aria-label="Page navigation example">
//   <ul className="pagination justify-content-center">
//     {previousUrl &&
//     <li className="page-item"><button className="page-link" onClick={()=>paginationHandler(previousUrl)}><i className="bi bi-arrow-left"></i>Previous</button></li>
//     }
//     {nextUrl &&
//     <li className="page-item"><button className="page-link" onClick={()=>paginationHandler(nextUrl)}>Next<i className="bi bi-arrow-right"></i></button></li>
//     }
//   </ul>
// </nav>

// {/* End */} 
//     </div>
  );
}

export default AllCourses;
