import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import { FaWandSparkles } from "react-icons/fa6";

const Navbars = () => {
  return (
    <Navbar expand="lg bg-light py-3" >
      <Container  className="navbars ">
        <Navbar.Brand href="/" className="brand fw-bold "><FaWandSparkles className="text-warning"/> KWAMRA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#company" className="mx-3 links">
              company
            </Nav.Link>
            <Nav.Link href="#team" className="mx-3 links">
              services
            </Nav.Link>
            <Nav.Link href="#design" className="mx-3 links">
              designs
            </Nav.Link>
            <Nav.Link href="#review" className="mx-3 links">
              review
            </Nav.Link>
            <Nav.Link href="#contact" className="mx-3 links">
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>        
      </Container>
    </Navbar>
  );
};

export default Navbars;
