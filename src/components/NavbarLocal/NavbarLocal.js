import './NavbarLocal.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/transparent_logo.png'

function Navbar_Local() {
    return (
      <Navbar fixed="top" expand="sm" data-bs-theme="dark" className="bg-body-tertiary" id="navbar">
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
          <Nav className="me-auto w-100 nav-fill">
            <Nav.Link style={{color: "#fffefd", fontFamily: "Raleway"}}>
              <NavLink to='/'>Home</NavLink>
            </Nav.Link>
            <Nav.Link style={{color: "#fffefd", fontFamily: "Raleway"}}>
              <NavLink to='/about'>About</NavLink>
            </Nav.Link>
            <Nav.Link style={{color: "#fffefd", fontFamily: "Raleway"}}>
              <NavLink to='/reservations'>Reservations</NavLink>
            </Nav.Link>
            <Nav.Link style={{color: "#fffefd", fontFamily: "Raleway"}}>
              <NavLink to='/references'>References</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navbar_Local;