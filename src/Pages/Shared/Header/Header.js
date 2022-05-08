import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
    return (

            <>
        <Navbar className="navbar text-black" collapseOnSelect expand="lg" sticky="top">
          <Container>
          <Navbar.Brand as={Link} to="/">
              <img
                className="ms-auto"
                width={80}
                src='https://i.ibb.co/2390WH5/logo.png'
                alt=""
                srcSet=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/blog">
                  Blogs
                </Nav.Link>
                <Nav.Link href='home#cat'>
                  Category
                </Nav.Link>
                <Nav.Link href='home#contact'>
                  Contact Us
                </Nav.Link>

            </Nav>
              <Nav className="ms-auto">
              {
                user && 
                <>
                <Nav.Link as={Link} to="/additems">Add Item</Nav.Link>
                <Nav.Link as={Link} to="/manage">Manage Items</Nav.Link>
                <Nav.Link as={Link} to="/myitems">My items</Nav.Link>
                </>

              }
              {
                user ? (
                  <Nav.Link onClick={logout}>Log Out</Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            </>
    );
};

export default Header;