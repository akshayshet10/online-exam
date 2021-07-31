import React from 'react';
import { Carousel , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const GenerateAutomaticResult=()=> {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2018/03/18/10/49/result-3236285_960_720.jpg" height="700px"
      alt="hope for best"
    />
    <Carousel.Caption>
      <h2>Sucess is the Result of Perfection</h2>
      <p>Three is No secrets to success . its the result of Prepration </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/05/15/14/38/computer-768608_960_720.jpg" height="700px"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2>“All our dreams can come true, if we have the courage to pursue them.”</h2>
      <p>Dear Math, please grow up and solve your own problems, I’m tired of solving them for you.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/03/27/08/51/faust-1282372__340.jpg" height="700px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>“Stress less and enjoy the best.”</h2>
      <p>You've run the course and passed the exams! There are no secret of success. It is the result of preparation, hard work and learning from failure. Well done!"</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Button variant="outline-dark" style={{marginLeft:"94%",color:"green"}} > 
      <Link to="/">Back..</Link>
      </Button>
    
        </div>
    )
}

export default GenerateAutomaticResult;
