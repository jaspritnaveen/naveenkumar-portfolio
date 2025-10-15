import React, { useState, useEffect, useRef, useCallback } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

function NavigationBar() {
  const navRef = useRef();
  // 1. Add state to manage the expanded (open/closed) state of the Navbar
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    navRef.current.classList.add("navbar-appear");
  }, []);

  // 2. Function to close the menu
  const closeNav = useCallback(() => setExpanded(false), []);

  // 3. Function to toggle the menu (for the hamburger button)
  const toggleNav = () => setExpanded((prevExpanded) => !prevExpanded);

  return (
    // 4. Pass the 'expanded' state and 'toggleNav' function to Navbar
    <Navbar
      expand="lg"
      className="p-3 nav-bar"
      sticky="top"
      ref={navRef}
      expanded={expanded} // Controlled component: pass the state
      onToggle={toggleNav} // Tell Navbar what to do when the Toggle button is clicked
    >
      <Container>
        {/* Logo and brand */}
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          NK
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/" className="brand-name">
          Naveenkumar
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-lg-4">
            {/* 5. Add onClick={closeNav} to each Nav.Link */}
            <Nav.Link as={Link} to="/" onClick={closeNav}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeNav}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={closeNav}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/project" onClick={closeNav}>
              Project
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={closeNav}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
