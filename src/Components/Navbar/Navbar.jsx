import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Navbar/Navbar.css";
import { CgProfile } from "react-icons/cg";

const Navbarr = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><img src="../Images/logo.png" alt="" style={{width:"100px"}}  /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div class="dropdown">
                <span class="dropbtn">
                  <CgProfile color="#fff" /> <span className="fs-6 text-light">Amandeep Singh</span>
                </span>
                <div class="dropdown-content">
                  <a href="/profile">Profile</a>
                  <a href="/login">Logout</a>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
