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
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div class="dropdown">
                <span class="dropbtn">
                  <CgProfile /> <span className="fs-6">Amandeep Singh</span>
                </span>
                <div class="dropdown-content">
                  <a href="/profile">Profile</a>
                  <a href="/">Logout</a>
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
