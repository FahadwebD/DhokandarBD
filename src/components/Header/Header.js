import React from 'react';
import { Container, Form, Nav, Navbar, NavDropdown ,Button, InputGroup, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebas from '../../hooks/useFirebase';


const Header = () => {
 
 const {user ,logOut} = useFirebas()
 const {displayName}= user;
    return (
        <div>
             <Navbar bg="light" fixed="top" expand="lg">
  <Container fluid>
    <Navbar.Brand   >Dhokandar BD</Navbar.Brand>
    <Navbar.Toggle  aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
     
      <Form  className="d-flex ms-auto">
        
      <FormControl
          type="search"
          placeholder="Search"
          className=""
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
 
        

      </Form>
      <Nav
        className="ms-auto"
        style={{ maxHeight: '100px'  }}
        navbarScroll
      >
          

        
        
        <Nav.Link   to='/services' >{displayName}</Nav.Link>
          
        <Nav.Link as={Link}    to='/sign' >Blogs</Nav.Link>
        
       {user.displayName?  <Button onClick={logOut}>Sign Out</Button>: <Link to='/sign'> <Button>JOIN</Button> </Link>}
        
       
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;