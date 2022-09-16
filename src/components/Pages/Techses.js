import { Link } from "react-router-dom";
import {Carousel, Card, Button, Placeholder, Col, Row} from 'react-bootstrap'

function Techses() {

  return (
<>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.saultcollege.ca/sites/default/files/styles/large_media_embed_image_video_virtual_tour/public/2020-08/engineering-4039-hero.jpg?itok=2cf6yGnF"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
{/* 2 */}
        <Row xs={1} md={3} className="g-4 mt-2">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://www.careertoolkit.com/wp-content/uploads/2017/01/environmental-scientist-500.jpg" />
            <Card.Body>
              <Button variant="primary">Engineering</Button>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://www.eco.ca/wp-content/uploads/Env-Scientist.jpg" />
            <Card.Body>
              <Button variant="primary">International students</Button>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://environmentalscience.cals.arizona.edu/sites/swes.cals.arizona.edu/files/Jones_labwork.png" />
            <Card.Body>
              <Button variant="primary"><Link to="/all-courses" className="text-white">AllCourses</Link></Button>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

{/* 3 */}
        <div className="d-flex justify-content-around mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Ln6PZfv4WBw_bICehVKUTwHaE8?pid=ImgDet&rs=1" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Research</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.primetake.com/wp-content/uploads/2020/10/ResearchDevelopmentHero_1.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary"><Link to="/faq" className="text-white">Faq</Link></Button>
        </Card.Body>
      </Card>
    </div>
    </>


  );
}

export default Techses;
