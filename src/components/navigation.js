import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = ({ link }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Gurmanpreet Nagra</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about-me">
              <Nav.Link>About Me</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <LinkContainer to="/full-stack-projects">
                <NavDropdown.Item>Full Stack Projects</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/backend-projects">
                <NavDropdown.Item>Backend Focused Projects</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/frontend-projects">
                <NavDropdown.Item>Frontend Focused Projects</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <LinkContainer to="/resume">
              <Nav.Link>CV</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
