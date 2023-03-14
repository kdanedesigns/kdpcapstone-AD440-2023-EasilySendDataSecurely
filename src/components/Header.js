import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../images/lightlogo.png"
import "./header.css";

function HeaderExample() {
  return (
    <Container className="logoContainer" >
      <Row>
        <Col>
          <img
            className="logo"
            src={logo}
            alt="application logo"
          />
        </Col>
      </Row>
    </ Container>
  );
}
export default HeaderExample;
