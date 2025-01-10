import './NavbarLocal.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';  // Import useState

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/transparent_logo.png'

function Navbar_Local() {
  const [buttonVisible, setButtonVisible] = useState(true);  // State to track visibility of the button
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);  // State to track collapse state

  const handleLogoClick = () => {
    setButtonVisible(!buttonVisible);  // Toggle the visibility of the button when the logo is clicked
  };

  const handleNavbarCollapse = () => {
    setIsNavbarCollapsed(prevState => !prevState);  // Toggle the collapse state
  };

  const handleTransitionEnd = () => {
    // Hide the button only after the collapse transition ends and the navbar is collapsed
    if (!isNavbarCollapsed) {
      setButtonVisible(false);
    }
    else {
      setButtonVisible(true);
    }
  };

  return (
    <Navbar fixed="top" expand="sm" data-bs-theme="dark" className="bg-body-tertiary" id="navbar">
      <Container>
        <Navbar.Brand href="#home" onClick={handleLogoClick}>
          <NavLink to='/'>
            <img
              alt="Leaf to Ladle"
              src={logo}
              className="d-inline-block align-top"
              id="navbar-logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto"
          onClick={handleNavbarCollapse}  // Track when the navbar is toggled
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          onTransitionEnd={handleTransitionEnd} // Detect when the collapse transition ends
        >
          <Nav className="me-auto w-100 nav-fill">
            <Nav.Link>
              <NavLink to="/" style={{ color: "#fffefd", fontFamily: "Raleway", textDecoration: "none" }}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/menu" style={{ color: "#fffefd", fontFamily: "Raleway", textDecoration: "none" }}>Menu</NavLink>
            </Nav.Link>
            <Nav.Link style={{ color: "#fffefd", fontFamily: "Raleway" }}>
              <NavLink to="/about" style={{ color: "#fffefd", fontFamily: "Raleway", textDecoration: "none" }}>About</NavLink>
            </Nav.Link>
            <Nav.Link style={{ color: "#fffefd", fontFamily: "Raleway" }}>
              <NavLink to="/reservations" style={{ color: "#fffefd", fontFamily: "Raleway", textDecoration: "none" }}>Reservations</NavLink>
            </Nav.Link>
            <Nav.Link style={{ color: "#fffefd", fontFamily: "Raleway" }}>
              <NavLink to="/references" style={{ color: "#fffefd", fontFamily: "Raleway", textDecoration: "none" }}>References</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Conditionally render the button based on the navbar collapse state */}
        {buttonVisible && isNavbarCollapsed && (
          <NavLink to="/orderform.html" target="_blank" rel="noopener noreferrer">
            <button className="btn navbar-button">Order Online</button>
          </NavLink>
        )}
      </Container>
    </Navbar>
  );
}

export default Navbar_Local;