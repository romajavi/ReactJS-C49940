import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">PetXpress</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#alimentos">Alimentos</Nav.Link>
                    <Nav.Link href="#juguetes">Juguetes</Nav.Link>
                    <Nav.Link href="#accesorios">Accesorios</Nav.Link>
                    <Nav.Link href="#salud">Salud, Higiene y Bienestar</Nav.Link>
                    <Nav.Link href="#viajes">Viajes y Transporte</Nav.Link>
                    <Nav.Link href="#entrenamiento">Entrenamiento</Nav.Link>
                    <Nav.Link href="#tecnologia">Tecnología Pet</Nav.Link>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
