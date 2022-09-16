import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactUs from "../ContactUs";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Carousel, Card, Button, Placeholder} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function About() {

  return (
    <>
      <section class="about">

        <div class="image">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMGNvbnN1bHRhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>

        <div class="content">
          <h3>Why Choose Us</h3>
          <p>Our services are free to students.</p>
          <p>We support and guide students seeking to gain admission into colleges, universities and other higher institutions in the United Kingdom, the European Union, United States of America, Canada, Australia and other parts of the world.</p>
          <p>We offer guidance on appropriate courses to enable career progression, advise on the most suitable universities, based on students’ academic strengths, interests and financial capability. Our guidance empowers students to make informed decisions.</p>
          <p>We assist and encourage students to unveil their hidden potential through education in world renowned institutions.</p>
          <p>We are committed to encouraging and supporting future generations to acquire the skills, education and knowledge available in tertiary institutions; to be advantageously positioned in the diverse, innovative and intellectual global community; and to build and lead a safe and prosperous world.</p>
          <p>Though we are currently based in the United Kingdom and in Nigeria, our services have no boundaries. Prospective students anywhere in the world can reach out to us for support and counselling.</p>
        </div>

      </section>
    </>
  );
}

export default About;
