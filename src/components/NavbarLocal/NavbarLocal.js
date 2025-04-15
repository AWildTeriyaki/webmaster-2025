import './NavbarLocal.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/transparent_logo.png'

function Navbar_Local() {
    const navbarRef = useRef(null);
    useEffect(() => {
      const tl = gsap.timeline();
      tl.to(navbarRef.current, {
        opacity: 1,
        duration: 2,
        delay: 1.5,
      })
    }, []);

  const [buttonVisible, setButtonVisible] = useState(true);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const handleLogoClick = () => {
    setButtonVisible(!buttonVisible);
  };

  const handleNavbarCollapse = () => {
    setIsNavbarCollapsed(prevState => !prevState);
  };

  const handleTransitionEnd = () => {

    if (!isNavbarCollapsed) {
      setButtonVisible(false);
    }
    else {
      setButtonVisible(true);
    }
  };

  return (
    <Navbar fixed="top" expand="md" data-bs-theme="dark" className="bg-body-tertiary" id="navbar" ref={ navbarRef }>
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
          onClick={handleNavbarCollapse}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          onTransitionEnd={handleTransitionEnd}
        >
          <Nav className="me-auto w-100 nav-justified">
            <Nav.Link>
              <NavLink to="/" style={{ color: "#fffefd", fontFamily: "Raleway", textDecoration: "none" }}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/gallery" style={{ color: "#fffefd", fontFamily: "Raleway", textDecoration: "none" }}>Gallery</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about" style={{ color: "#fffefd", fontFamily: "Raleway", textDecoration: "none" }}>About</NavLink>
            </Nav.Link>
            <Nav.Link style={{ color: "#fffefd", fontFamily: "Raleway" }}>
              <NavLink to="/references" style={{ color: "#fffefd", fontFamily: "Raleway", textDecoration: "none" }}>References Page</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

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