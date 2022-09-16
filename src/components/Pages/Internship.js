import { Link } from "react-router-dom";

import {Carousel, Card, Button, Placeholder} from 'react-bootstrap'

function Internship() {

  return (
<>
          <div className="d-flex justify-content-around mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Ln6PZfv4WBw_bICehVKUTwHaE8?pid=ImgDet&rs=1" />
        <Card.Body>
          <Card.Text>
            An internship abroad brings you many advantages: You will become fit for the international world of work, 
                make valuable contacts and immerse yourself intensively in the culture and life in another country.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/R.4d35d5e5e960299c93e23a9e7123c4a3?rik=KMP5bcw6ItwMzQ&pid=ImgRaw&r=0" />
        <Card.Body>
          <Card.Text>
            Good reasons for an internship abroad
          </Card.Text>
          <Button variant="primary"><a href="#" className="text-white">Faq</a></Button>
        </Card.Body>
      </Card>
    </div>
              
     <div className="container mt-3">
    <h5 className="card mt-3">Of course, there are also many internships in UK – </h5>
                  
                 <Card> but an internship abroad can offer you much more.

                  You will not only get to know an exciting, new culture. They also acquire many skills that are becoming 
                  increasingly important in a globalized world.

                  On the one hand, you will strengthen your social and intercultural skills abroad. Because you 
                  gain experience with new ways of working and rules of conduct. This helps you later in your day-to-day work, 
                  when working in international teams and in contact with international partners or customers. Many former interns 
                  report that their stay has made them more independent and confident. In addition, you can develop linguistically 
                  enormously. And you have the chance to do something meaningful and contribute your skills to exciting projects – 
                  you will benefit from this not only in your professional life.

                  Of course, all these experiences can give you advantages in your job search later on. Because an experience abroad is no 
                  longer only a plus for large companies. You also score points with medium-sized companies, in research anyway. And who knows: 
                  Maybe you will make a contact during the internship, through which you will later get a job. The international network you build up can help you in any case.

                  In addition to the professional experience, the stay abroad offers you above all the great opportunity to immerse yourself 
                  in a foreign culture. Through your colleagues and roommates in a shared flat or dormitory, you are constantly together with 
                  locals. In this way, you get to know the culture and the people in everyday life – and gain unique insights.
                  </Card>
                  </div>

      <Card className="bg-dark text-white mt-4">
      <Card.Img src="https://d30i16bbj53pdg.cloudfront.net/students/business-career-services/wp-content/uploads/2020/08/marketing-internship-pic.png" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-dark bg-bold"><h2>SCHOOLS INTERNSHIPS</h2></Card.Title>
        <Card.Text className="text-dark bg-bold">
          An internship abroad is too expensive
        
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    <div className="container mt-3">
      <div className="card">
        <h2 className="text-danger">"An internship abroad is too expensive for me!"</h2>
        Flight ticket, accommodation, meals – some costs cannot be avoided. However, there are many ways to master the financing. 
        And a paid internship is an option anyway.
        <br/>
        "The internship costs me too much time!"
        Quite a few students fear that an internship abroad will extend their period of study. But that doesn't have to be the case. 
        You can complete your internship during the lecture-free period. And even if not, the stay is very well spent time. Hr managers 
        also see it that way. If you receive BAföG, however, you should clarify whether the internship affects the funding period.
        
        "That doesn't help me for my studies and my future job!"
        Studies show that an internship abroad is not only a personal but also a professional benefit. According to a survey 
        conducted by the German Center for Higher Education and Science Studies, 70 percent of interns stated that they had 
        expanded their professional knowledge through their internship abroad. And company surveys conducted by the Institute 
        of the German Economy showed that two-thirds of companies active abroad attest to better employment opportunities for 
        graduates with international experience than those without.
        </div>
    </div>

    <div className="container mt-3">
      <div className="card">
        <h2 className="text-danger"></h2>
        "The organization is too complex for me!"
        There are many offers to help you. For example, funding programs such as the International Association for the Exchange of 
        Students for Technical Experience (IAESTE) or Research Internship in Science and Engineering (RISE) provide you with internships 
        worldwide. And your commitment pays off in any case. For example, you can expand your private and professional network through 
        an internship abroad.
        
        "I don't want to be so far away from friends and family!"
        Homesickness is quite normal. However, through colleagues, roommates or during sports and other hobbies, you can quickly 
        make new friends abroad. You will see how quickly time passes through the many new experiences – and how quickly you will 
        see your family and friends again, who will be as happy about your experiences as you are.
 </div>
    </div>
    </>


  );
}

export default Internship;
