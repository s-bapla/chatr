import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col, Card } from "react-bootstrap";

const NavbarLoggedOut = () => {
  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="me-3">
              <a href="/authentication">Login</a>
            </Navbar.Text>
            <Navbar.Text className="me-3">
              <a href="/authentication">Signup</a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="/features">Features</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLoggedOut
