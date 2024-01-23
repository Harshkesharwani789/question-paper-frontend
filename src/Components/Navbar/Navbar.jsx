import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Navbar/Navbar.css";
import { CgProfile } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import swal from "sweetalert";

const Navbarr = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const logOut = () => {
    window.location.assign("/login");
    swal({
      title: "yeah!",
      text: "Successfully logged Out!",
      icon: "success",
      button: "Ok!",
    });

    sessionStorage.removeItem("user");
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src="../Images/logo.png" alt="" style={{ width: "100px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div class="dropdown">
                <span class="dropbtn">
                  <CgProfile color="#fff" />{" "}
                  <span className="fs-6 text-light">
                    {user?.FirstName} {user?.LastName}
                  </span>
                </span>
                <div class="dropdown-content">
                  <a href="/profile">Profile</a>
                  <a href="#" onClick={()=>{logOut()}}>Logout</a>
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
