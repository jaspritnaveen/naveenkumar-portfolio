import React from "react";
import "./Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <div className="footer p-4 bg-dark  text-white">
        

        

        <div>
          <Row xs={12} className="text-center m-3">
            <Col>© 2025 Naveenkumar R. All Rights Reserved</Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
