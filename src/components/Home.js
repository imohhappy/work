import { Link } from "react-router-dom";
 import AllCourses from './AllCourses'
 import {useEffect, useState} from 'react'
 import axios from 'axios'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'

function Home() {
  const [courseData, setCourseData]=useState([]);
    // fetch course when page loads
   useEffect(()=>{
    try{
      axios.get(baseUrl+'/course/?result=4').then((res)=>{
            setCourseData(res.data.results)
      });
    }catch(error){
      console.log(error)
    }
  },[]);
  return (
   <div className="container mt-4">
    {/* Latest Course */}
    <h3 className="pb-1 mb-4">Latest Courses<Link to="/all-courses" class="float-end">See all</Link></h3>
    <div className="row mb-4">
      {courseData && courseData.map((course, index)=>
      <div className="col-md-3 mt-4">
        <div className="card">
          <img src={course.featured_img} className="card-img-top" alt={course.title} />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text"></p>
          <h5 className="card-ttle"><Link to={"/detail/"+course.id} className="btn btn-primary">{course.title}</Link></h5>
          </div>
        </div>
      </div>
      )}
    </div>
    {/* End Latest Course */}

    {/* Other Course */}
    <h3 className="pb-1 mb-4 mt-5">Other Courses<Link to="/popular-courses" class="float-end">See all</Link></h3>
    <div className="row mb-4">
      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Details</a>
          </div>
          <div className="card-footer">
            <div className="title">
              <span>Ratting:4/5</span>
              <span className="float-end">Views: 3443</span></div>
          </div>
        </div>
      </div>


      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div>

      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div>

      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
    </div>
    {/* End other Course */}


    {/* Popular Teachers */}
    <h3 className="pb-1 mb-4 mt-5">Popular Teachers<Link to="/popular-teachers" class="float-end">See all</Link></h3>
    <div className="row mb-4">
      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/teacher-detail/1" className="btn btn-primary">Details</Link>
          
          </div>
        </div>
      </div>


      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Teachers Name</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/teacher-detail/1" className="btn btn-primary">Details</Link>
          
          </div>
        </div>
      </div>

      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Teachers Name</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/teacher-detail/1" className="btn btn-primary">Details</Link>
      
          </div>
        </div>
      </div>

      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Teachers Name</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/teacher-detail/1" className="btn btn-primary">Details</Link>
          
          </div>
        </div>
      </div>
    </div>
    {/* End Popular Teachers */}


     {/* Student Testimonial */}
    <h3 className="pb-1 mb-4 mt-5">Student Testimonial</h3>

    <div id="carouselExampleIndicators" class="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
    <div className="carousel-item">
      <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
    <div className="carousel-item">
      <figure className="text-center">
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    {/* End Student Testimonial */}
  </div>

  );
}

export default Home;
