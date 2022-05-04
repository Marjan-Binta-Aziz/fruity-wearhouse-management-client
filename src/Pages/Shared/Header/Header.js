import React from 'react';
import './Header.css'
import logo from '../../../images/logo1.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (

            <>
        <Navbar className="navbar text-black" collapseOnSelect expand="lg" sticky="top">
          <Container>
          <Navbar.Brand as={Link} to="/">
              <img
                className="ms-auto"
                width={80}
                src='https://i.ibb.co/zm7pBkk/logo1.png'
                alt=""
                srcSet=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                  Blogs
                </Nav.Link>
                <Nav.Link as={Link} to="/blogs">
                  About
                </Nav.Link>

            </Nav>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/blogs">
                  Login
                </Nav.Link>
                
                {/* {
                user ? (
                  <Nav.Link onClick={logout}>Log Out</Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                )} */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            </>
    );
};

export default Header;