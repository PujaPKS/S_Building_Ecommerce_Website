import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto"> {/* Centering the Nav using mx-auto */}
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#store">STORE</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
