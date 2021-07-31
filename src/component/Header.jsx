import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
  
  return (
    <header>
      
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:"rgb(197 129 3)"}} >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
           
            <Nav>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-sign-in-alt" />
                      &nbsp;Login
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register">
                    <Nav.Link>
                      <i className="fas fa-user-edit" />
                      &nbsp;Sign Up
                    </Nav.Link>
                  </LinkContainer>

                 
                
            
            </Nav>
           
          </Container>
        </Navbar>
    
    </header>
  );
};

export default Header;
