import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs, Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import NavbarLoggedOut from '../components/NavbarLoggedOut'
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup'

const Loginpage = () => {
  return (
    <>
      <NavbarLoggedOut />
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Row>
          <Col xs={12} md={8} lg={6}>
            <Card style={{ width: "40vw" }}>
              <Card.Body>
                <Tabs
                  defaultActiveKey="Signup"
                  id="uncontrolled-tab-example"
                  className="mb-3 d-flex justify-content-center"
                >
                  <Tab eventKey="Login" title="Login">
                    <Login/>
                  </Tab>
                  <Tab eventKey="Signup" title="Signup">
                    <Signup/>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Loginpage;
