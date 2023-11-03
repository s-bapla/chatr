import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col, Card } from "react-bootstrap";

const NavbarLoggedIn = () => {
  return (
    <>
      <Navbar className="bg-info fixed">
        <Container>
          <Navbar.Brand href="/">
            <a style={{ color: "black" }} href="/">
              Home
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="me-3">Signed in as: Mark Otto</Navbar.Text>
            <Navbar.Text>
              <a href="/features">Features</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLoggedIn;
