import React from "react";
import "./Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // dynamic year

  return (
    <footer className="footer">
      <div className="footer-inner">
        <Row xs={12} className="text-center">
          <Col>
            <p>
              © {currentYear}{" "}
              <span className="footer-name">Naveenkumar R.</span> All Rights
              Reserved
            </p>
          </Col>
        </Row>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/jaspritnaveen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/jaspritnaveen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a href="mailto:jaspritnaveen@gmail.com">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
