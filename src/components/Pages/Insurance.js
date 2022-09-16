import { Link } from "react-router-dom";
import {Carousel, Card, Button, Placeholder, Col, Row} from 'react-bootstrap'

  const listStyle={
    'list-style':'none'
  }

function Insurance() {

  return (
    <>
    <div className="container mt-4">
<div className="card">
      <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Text>
          Comprehensive but affordable, international student health insurance plans are designed to meet visa 
          requirements and provide key coverage that schools want, 
          like mental health, sports and maternity. With multiple plans and levels offered, 
          we have a plan for every international student budget and need.
          <hr/>
          For international travelers around the world, travel medical plans offer instant coverage up to $5 million for 
          trips from 5 days to a year outside of your home country. With your choice of deductibles and plan levels, travel 
          medical insurance is very flexible to meet the needs of travelers and students.
          <hr/>
          For expatriates, families and students that need long-term, more permanent coverage, we offer international 
          major medical plans. Once purchased, you can renew these benefit-rich plans annually for as long as you remain eligible.
          <hr/>
        </Card.Text>
        <Button variant="primary"><a href="https://www.internationalstudentinsurance.com/" className="text-white">Check Insurance</a></Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
    </div>
    </>


  );
}

export default Insurance;
