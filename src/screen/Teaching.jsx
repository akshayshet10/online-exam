import React from 'react';
import { Fragment } from 'react';
import {Card ,CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Teaching =()=> {
    return (

        <Fragment>
            <div>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" />
    <Card.Body style={{backgroundColor:"rgb(219, 144, 5)"}}>
      <Card.Title>Skilled Trainers</Card.Title>
      <Card.Text>
      Prepare candidates to perform extraordinarily with an easy to use highly interactive platform and
simplify the assessment cycle.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/04/26/18/41/books-4158244_960_720.jpg" />
    <Card.Body style={{backgroundColor:"rgb(219, 144, 5)"}}>
      <Card.Title>Splendid Support</Card.Title>
      <Card.Text>
      A dedicated team is working round the clock to provide 24 X 7 streamlined access to our technical experts.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/01/10/01/32/teach-1968076_960_720.jpg" />
    <Card.Body style={{backgroundColor:"rgb(219, 144, 5)"}}>
      <Card.Title>A new Innovation in Online Examination</Card.Title>
      <Card.Text>
      One-stop-destination for examination, preparation, recruitment, and more.
      Specially designed online examination system to solve all your preparation worries. 
        
      </Card.Text>
      <Button variant="outline-dark" style={{marginLeft:"87%",color:"green"}} > 
      <Link to="/">Back..</Link>
      </Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </div>
            
                 
        
            </Fragment>



    )
}

export default Teaching;
