import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Logo from "../../../Assets/logo.png";
import "./Navbar.css";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary p-3">
        <Container className="d-flex justify-content-around">
          <Navbar.Brand href="#home" className="brand-logo">
            NK
          </Navbar.Brand>
          <Navbar.Brand href="#home" className="brand-name">
            Naveenkumar
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link href="#link">Project</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
