import React from 'react';
import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">PetXpress</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/Alimentos">Alimentos</Nav.Link>
        <Nav.Link as={Link} to="/Juguetes">Juguetes</Nav.Link>
        <Nav.Link as={Link} to="/Accesorios">Accesorios</Nav.Link>
        <Nav.Link as={Link} to="/Salud">Salud, Higiene y Bienestar</Nav.Link>
        <Nav.Link as={Link} to="/Viajes">Viajes y Transporte</Nav.Link>
        <Nav.Link as={Link} to="/Entrenamiento">Entrenamiento</Nav.Link>
        <Nav.Link as={Link} to="/Tecnologia">Tecnología Pet</Nav.Link>
        </Nav>
        <CartWidget />
    </Navbar.Collapse>
    </Navbar>
);
};

export default NavBar;

