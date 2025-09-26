import React, { useEffect, useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";

function NavigationBar() {
  const navRef = useRef();

  useEffect(() => {
    navRef.current.classList.add("navbar-appear");
  }, []);

  return (
    <Navbar expand="lg" className="p-3 nav-bar" sticky="top" ref={navRef}>
      <Container>
        {/* Logo and brand */}
        <Navbar.Brand href="/" className="brand-logo">
          NK
        </Navbar.Brand>
        <Navbar.Brand href="/" className="brand-name">
          Naveenkumar
        </Navbar.Brand>
        {/* Toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-lg-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
