import { Link } from "react-router-dom";
import {Carousel, Card, Button, Placeholder} from 'react-bootstrap'

function Masters() {

  const listStyle={
    'list-style':'none'
  }

  return (
    <>
      <section className='program'>
        <h1 className='heading-title'>International Masters Programme</h1>

        <h3>Admission Requirements</h3>

        <ul>
          <li>International passport</li>
          <li>Curriculum vitae (stating personal details)</li>
          <li>High School Result (WAEC / NECO / KSCE)</li>
          <li>Academic Reference Letters</li>
          <li>Degree / HND Certificate / Result</li>
          <li>Degree Transcript</li>
          <li>Proof of C1 proficiency in English (depends on place of study)</li>
        </ul>

        <h3>Language Requirements</h3>

        <ul>
          <li>English - minimum test results (C1 level): TOEFL IBT score 100</li>
          <li>IELTS 7.0 or equivalent test results German:</li>
          <li>Basic knowledge of German: a minimum of 120 hours of classes attended</li>
          <li>(equivalent to the A1 level of the Goethe Institute) Please refer to our website for details.</li>
        </ul>

        <h3>Application Deadline</h3>

        <ul>
          <li>For the winter semester, which starts on 1 October: 2 May to 15 June For the summer semester, which starts on 15 March: 15 November to 15 December</li>
        </ul>

        <Link to='/searchs' className='btn'>Apply Now</Link>
      </section>
    </>
  );
}

export default Masters;
