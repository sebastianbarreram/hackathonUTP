import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import Logo from "../../assets/CraftCol_fwhite.png";
function navbar() {
  return (
    <div>
      <Navbar  expand="xl" style={{fontFamily:"cursive", backgroundColor:"#f6d0b2"}}>
    <Container>
      <Navbar.Brand href="/">
        <img
          src={Logo }
           width=""
           height="150px"
          //  className="d-inline align-top"
          className="d-inline-block align-center me-5  "
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
          <Container style={{maxWidth:"500px"}}>
      <form class="d-flex form-inline my-3">
            <input class="form-control mr-sm-2 " type="search" placeholder="¿Que Artesanía estás buscando?" aria-label="Search"/>
            <Button className="my-sm-0 " type="submit"><i className="fas fa-search"></i></Button>
            
        </form>
        </Container>
        <Container>
          <Nav className="justify-content-center ">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/catalogo">Catalogo</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
          <Nav.Link href="/conocenos">Conocenos</Nav.Link>
          </Nav>
        </Container>         
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  );
}

export default navbar;
