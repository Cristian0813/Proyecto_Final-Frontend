import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

import './styles/NavBar.css'

const NavBarMalla = () => {
  return (
    <>
      <Navbar className=" navBg " variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">Mallas JF</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/SobreNosotros">Sobre nosotros</Nav.Link>
                    <Nav.Link as={Link} to="/NuestrosProductos">Nuestros productos</Nav.Link>
                    <Nav.Link as={Link} to="/Contactanos">Contáctanos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavBarMalla;