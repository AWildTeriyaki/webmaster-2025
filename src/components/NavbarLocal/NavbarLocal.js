import './NavbarLocal.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/logo.png'

function Navbar_Local() {
    return (
      <Navbar fixed="top" expand="md" className="bg-body-tertiary" id="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Leaf to Ladle"
            src={ logo }
            className="d-inline-block align-top"
            id="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#menu">Menus</Nav.Link>
            <Nav.Link href="#references">References</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navbar_Local;