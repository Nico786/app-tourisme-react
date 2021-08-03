import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';


const NavBar = (props) => (
    <>
        <Navbar bg="dark" variant="dark" expand="lg">

            <Navbar.Brand href="#home">Ariège MGA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer exact to='/'>
                        <Nav.Link>Accueil</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/location'>
                        <Nav.Link>Location</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>

        </Navbar>

      
    </>
)

export default NavBar;