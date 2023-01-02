import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Weather App</h1>
        <h2>Keep yourself up to date on conditions</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Cloudster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Today"s Weather:
            </p>
            <p>
              Tomorrow's Weather:
            </p>
            <p>
              Five Day Forecast:
             
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
