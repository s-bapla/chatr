import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col, Card } from "react-bootstrap";
import {useState} from 'react';
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import NavbarLoggedOut from "../components/NavbarLoggedOut";

const Homepage = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <>
      {isLoggedIn && (
        <NavbarLoggedIn/>
      )}
      {!isLoggedIn && (
       <NavbarLoggedOut/>
      )}
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Row>
          <Col xs={12} md={8} lg={6}>
            <Card
              style={{
                width: "40vw",
                height: "40Vh",
                backgroundColor: "lightblue",
              }}
            >
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title
                  style={{ fontSize: "4rem", color: "white" }}
                  className="text-center"
                >
                  Chatr
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
