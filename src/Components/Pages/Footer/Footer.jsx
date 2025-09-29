import React from "react";
import "./Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // dynamic yearzz

  return (
    <footer className="footer">
      <div className="footer-inner">
        <Row xs={12} className="text-center">
          <Col>
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
              <a href="tel:+916383146128">
                <i className="bi bi-telephone-fill"></i>
              </a>
            </div>
            <p className="footer-copyright">
              © {currentYear} All Rights Reserved | Designed by{" "}
              <span className="footer-name">Naveenkumar R</span>
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
