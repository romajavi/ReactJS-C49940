import './NavBar.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">PetXpress</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Alimentos" className="nav-link">Alimentos</Nav.Link>
          <Nav.Link as={Link} to="/Juguetes" className="nav-link">Juguetes</Nav.Link>
          <Nav.Link as={Link} to="/Accesorios" className="nav-link">Accesorios</Nav.Link>
          <Nav.Link as={Link} to="/Salud" className="nav-link">Salud, Higiene y Bienestar</Nav.Link>
          <Nav.Link as={Link} to="/Viajes" className="nav-link">Viajes y Transporte</Nav.Link>
          <Nav.Link as={Link} to="/Entrenamiento" className="nav-link">Entrenamiento</Nav.Link>
          <Nav.Link as={Link} to="/Tecnologia" className="nav-link">Tecnología Pet</Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
