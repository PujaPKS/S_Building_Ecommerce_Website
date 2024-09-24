import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="margin"> {/* Centering the Nav using mx-auto */}
          <Nav.Link href="#home" className="mx-3">HOME</Nav.Link>
          <Nav.Link href="#store" className="mx-3">STORE</Nav.Link>
          <Nav.Link href="#about" className="mx-3">ABOUT</Nav.Link>
        </Nav>
        <Nav className="ms-auto"> {/* Right-aligning the cart icon */}
          <Nav.Link href="#cart" className="cart-icon mx-4">
            <FaShoppingCart style={{ fontSize: '1.5rem' }} /> Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
