import React from "react";
import "./Home.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hi, I'm Naveenkumar R</h1>
          <p>
            Motivated Computer Science Engineer and Frontend Developer
            passionate about building responsive, user-friendly web applications
            and innovative solutions. Skilled in React.js, JavaScript, and
            modern web technologies, with a strong drive to learn and contribute
            to impactful projects.
          </p>

          <div className="home-button">
            <Button variant="outline-primary">MyProjects</Button>
            <Button variant="outline-primary">Contact Me</Button>
          </div>

          <div className="contact-iocn-part">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/jaspritnaveen/">
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>

              <li>
                <a href="https://github.com/jaspritnaveen">
                  <i class="bi bi-github"></i>
                </a>
              </li>

              <li>
                <i class="bi bi-envelope-fill"></i>
              </li>

              <li>
                <i class="bi bi-telephone"></i>
              </li>
            </ul>
          </div>
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default Home;
