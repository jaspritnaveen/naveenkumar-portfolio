import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import "./Navbar.css";

// OffCanvasExample component
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant=""
        onClick={handleShow}
        className="me-2 d-flex align-items-center nav-menu-toggle-btn"
      >
        <i className="bi bi-list"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// Main NavigationBar component
function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3">
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

        {/* Offcanvas example button */}
        <OffCanvasExample placement="end" name="Open Menu" />
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
