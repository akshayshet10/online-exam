import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TrackProgress =()=> {
    return (
        <div>
            <Card className="bg-dark text-white">
  <Card.Img src="https://cdn.pixabay.com/photo/2019/11/02/21/45/maple-leaf-4597501_960_720.jpg" height="700px" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title  style={{color:"rgb(230 207 207)"}}>Your Progress..</Card.Title>
    <Card.Text style={{color:"rgb(208 210 209)"}}>
    To understand why formal exams are an issue it must first be made clear
     what the purpose of education is. In terms of political rhetoric the message for 
     selling education is that it will maximise opportunity, ensure better jobs, create 
     greater social status and raise living standards (Pring, 2013). Academic skills are not
      the only outcomes of education, there are social skills as well, yet academic skills are 
      the only skills considered to be worthy and therefore the only skills that are tested or examined. The aim of our educational institutes is to promote and improve social,
     mental and physical well being whilst transferring academic knowledge.
    </Card.Text>
    <br />
    <br />
    <Card.Text style={{color:"rgb(230 207 207)"}}>Build Your Bright Future..</Card.Text>
  </Card.ImgOverlay>
</Card>
<Button variant="outline-dark" style={{marginLeft:"94%",color:"green"}} > 
      <Link to="/">Back..</Link>
      </Button>
        </div>
    )
}

export default TrackProgress;

