import React from 'react';
import wallpaper from './books.jpg';
import { Col, Container, Row, Card } from 'react-bootstrap';
// import { Nav, Navbar, Container } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const HomeScreen = ( ) => {
 

  return (
    <div className="bgcolor">
      <img src={wallpaper} style={{ width: '100%', height: '100vh' }} />
      <div
        style={{
          position:'absolute',
          top: '510px',
          left: '16px',
          color: 'white',
          fontSize: '60px',
        }}
      >
        Write Online..
        <br />
        Digital Examination System
      </div>
      <Container className="my-3 ">
        <Row>
          <Col>
            <h2 style={{ color: 'black' }}>FEATURES</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: '#b00626' }}  >
                <Card.Title as="div">
                  <i className="fas fa-microphone fa-3x"></i>
                  <br />
                  <strong>Audio Proctoring</strong>
                </Card.Title>
              </Card.Header>
              <Card.Body>Record Audio around candidate during exam</Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: '#b00626' }}>
                <Card.Title as="div">
                  <i className="fas fa-camera fa-3x"></i>
                  <br />
                  <strong>Snapshots</strong>
                </Card.Title>
              </Card.Header>
              <Card.Body>Capture Images during exam</Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: '#b00626' }}>
                <Card.Title as="div">
                  <i className="fas fa-file-download fa-3x"></i>
                  <br />
                  <strong>Download Result</strong>
                </Card.Title>
              </Card.Header>
              <Card.Body>Download Result in excel format</Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: '#b00626' }}>
                <Card.Title as="div">
                  <i className="fas fa-chart-bar fa-3x"></i>
                  <br />
                  
                  
                     
                      <Link to="/LineGraph" style={{ color: '#b00626' }} >Graphical Form</Link>
                      
              
                </Card.Title>
              </Card.Header>
              <Card.Body>Check Result in graphical format</Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: '#b00626' }}>
                <Card.Title as="div">
                  <i className="fas fa-file-pdf fa-3x"></i>
                  <br />
                  <strong>Pdf upload</strong>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                For Theory exam Candidate can upload Responsesheet in Pdf format
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: '#b00626' }}>
                <Card.Title as="div">
                  <i className="fas fa-file fa-3x"></i>
                  <br />
                  <strong>Assignment</strong>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                Supervisor can assign Assignment to students
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: '#b00626' }}>
                <Card.Title as="div">
                  <i className="fas fa-users fa-3x"></i>
                  <br />
                  
                  <Link to="/Teaching" style={{ color: '#b00626' }}>Teaching </Link>
                </Card.Title>
              </Card.Header>
              <Card.Body>
               Highly Intractive interface ,Easy to Learn
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: '#b00626' }}>
                <Card.Title as="div">
                  <i className="fas fa-chart-line fa-3x"></i>
                  <br />
                  
                  <Link to="/track" style={{ color: '#b00626' }}>Track Progress </Link>
                </Card.Title>
              </Card.Header>
              <Card.Body>Candidates can track their progress</Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: '#b00626' }}>
                <Card.Title as="div">
                  <i className="fas fa-file-signature fa-3x"></i>
                  <br />
                 
                  <Link to="/Exam" style={{ color: '#b00626' }}>Take your Test/Exam </Link>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                Candidate can register for the test by the registration link
                provided by the Supervisor
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: '#b00626' }}>
                <Card.Title as="div">
                  <i className="fas fa-check-square fa-3x"></i>
                  <br />
                  
                  <Link to="/GenerateResult" style={{ color: '#b00626' }}>Automatic Result Generate</Link>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                After exam ends Result generate automatically{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default HomeScreen;
