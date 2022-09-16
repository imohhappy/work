import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Carousel, Card, Button, Placeholder} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Homepage() {

  return (
    <>
      <section className='home' id='home'>

        <h1>Admission Support Worldwide</h1>
        <h3>Study Abroad. Unveil Your Potential.</h3>
        <Link to='/user-register'><button className='btn'>Join Us</button></Link>

      </section>

      <section className="services">

        <h1 className="heading-title">Our Services</h1>

        <div className="box-container">

          <div className="box">
              <img src="https://cdn-icons-png.flaticon.com/512/1651/1651707.png" alt="" />
              <h3>Education Consulting</h3>
          </div>

          <div className="box">
              <img src="https://cdn-icons-png.flaticon.com/512/1157/1157044.png" alt="" />
              <h3>College Admission</h3>
          </div>

          <div className="box">
              <img src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png" alt="" />
              <h3>Student Support</h3>
          </div>

          <div className="box">
              <img src="https://cdn-icons-png.flaticon.com/512/1786/1786971.png" alt="" />
              <h3>Partnering Institutions</h3>
          </div>

        </div>

      </section>

      <section className="home-about">

        <div className="image">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMGNvbnN1bHRhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>

        <div className="content">
            <h3>About Us</h3>
            <p>Study abroad. Unveil your potential.</p>
            <p>We offer free admission support services to students wishing to study abroad.</p>
            <Link to='/about' className="btn">Read More</Link>
        </div>

      </section>

      <section className="services home-courses">

        <h1 className="heading-title">Our Programs</h1>

        <div className="box-container">

          <div className="box">
              <img src="https://cdn-icons-png.flaticon.com/512/2153/2153494.png" alt="" />
              <h3>Bachelor</h3>
              <Link to='/all-courses' className="btn">Apply Now</Link>
          </div>

          <div className="box">
              <img src="https://cdn-icons-png.flaticon.com/512/6050/6050822.png" alt="" />
              <h3>Masters</h3>
              <Link to='/all-courses' className="btn">Apply Now</Link>
          </div>

          <div className="box">
              <img src="https://cdn-icons-png.flaticon.com/512/3965/3965011.png" alt="" />
              <h3>PHD</h3>
              <Link to='/all-courses' className="btn">Apply Now</Link>
          </div>

        </div>

      </section>

      <section className="home-contact">
        <div className="content">
            <h3>Contact Us</h3>
            <p>We are here to answer any of your queries on how to work towards gaining admission into your universities of choice.</p>
            <Link to='/contact-us' className="btn">Contact Now</Link>
        </div>
      </section>
    </>
  );
}

export default Homepage;
