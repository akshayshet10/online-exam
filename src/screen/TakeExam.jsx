import React from 'react';
import { Carousel, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TakeExam=() =>{
    return (
        <div>
                <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2019/06/03/17/43/office-4249395_960_720.jpg" height="700px"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 style={{color:"brown"}}>Follow the Formalits,Step by step...</h2>
      <p  style={{color:"brown"}}> Do not bring any unauthorized material, They enable pupils to behave well and achieve success in their Studies. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2018/09/04/10/23/boy-3653385_960_720.jpg" height="700px"
      alt="Second slide"
    />
    <Carousel.Caption  style={{color:"black"}}>
      <h2>Manage Your Time...</h2>
      <p>Students must not talk, whisper, do hand signal or any other form of verbal or non-verbal communication during the Common Test.  Such actions will be considered as having the intention to cheat.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2018/09/02/20/06/graduation-3649717_960_720.jpg" height="700px"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2>immediate result..</h2>
      <p> A certificate is an official document that you receive when you have completed a course of study or training.</p>
    </Carousel.Caption>
    
  </Carousel.Item>
 
</Carousel>
<Button variant="outline-dark" style={{marginLeft:"93%",color:"green"}} > 
      <Link to="/">Back..</Link>
      </Button>
        </div>
    )
}

export default TakeExam;

