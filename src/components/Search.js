import { Link, useParams } from "react-router-dom";
 import {useEffect, useState} from 'react'
 import axios from 'axios'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function Search() {
  const [courseData, setCourseData]=useState([]);
  const [nextUrl, setnextUrl]=useState();
  const [previousUrl, setpreviousUrl]=useState();
  const{searchstring}=useParams()
    // fetch course when page loads
   useEffect(()=>{
    try{
      axios.get(baseUrl+'/search-courses/'+searchstring).then((res)=>{
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
      <h1 className='heading-title'>Searched for {searchstring}</h1>
      
      <div className='box-container'>
        {courseData && courseData.map((course, index)=>
          <div className='box'>
            <div className="image">
                <img src={course.featured_img} alt={course.title} />
            </div>
            <div class="content">
              <h3>{course.title}</h3>
              <p>{course.type} is a good a university to study {course.title}</p>
              <a href={course.university} className='btn'>Learn More</a>
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
  );
}

export default Search;
