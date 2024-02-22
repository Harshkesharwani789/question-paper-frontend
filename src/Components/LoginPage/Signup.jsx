import React, { useState } from "react";
import { InputGroup, Modal, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import "../LoginPage3/LoginPage3.css";
import axios from "axios";
import swal from "sweetalert";

const SignUp = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //post
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
const [whatsAppNumber,setWhatsAppNumber]=useState("");

  const TeacherRegister = async () => {
    try {
      const config = {
        url: "/admin/registerTeacher",
        method: "post",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          FirstName: FirstName,
          LastName: LastName,
          Mobile: Mobile,
          Email: Email,
          Password: Password,
          authId: user?.id,
          whatsAppNumber:whatsAppNumber
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose();
         swal({
          title: "yeah!",
          text: res.data.success,
          icon: "success",
          button: "Ok!",
        });
      }
      setTimeout(() => {
         return navigate("/login")
      }, 1000);
     
      // window.location.assign("/login");
    } catch (error) {
      console.log(error);
      return swal({
        title: "oops!",
        text: error.response.data.error,
        icon: "error",
        buttons: "Ok!",
      });
    }
  };

  const [PasswordShow, setPasswordShow] = useState(false);

  const [PasswordShow1, setPasswordShow1] = useState(false);
 


  return (
    <div>
      

      {/* new Register form  */}
      <div className="container p-3">
        <div className="box">
          <div className="row">
            <div className="col-6">
              <div className="page2-content-display p-4">
                <h4 style={{ textAlign: "center" }}>Register Here</h4>
                <hr></hr>

                <Row>
                  <Col>
                    <div className="col-12">
                      <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your First Name"
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </Col>
                  <Col>
                    <div className="col-12">
                      <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Last Name"
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className="col-12">
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Your Number"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </Row>
                <Row>
                  <div className="col-12">
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                      <Form.Label>Whats App Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Your Whats App Number"
                        onChange={(e) => setWhatsAppNumber(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </Row>
                <Row>
                  <div className="col-12">
                    <Form.Label>Email ID</Form.Label>
                    <InputGroup className="mb-2">
                      <Form.Control
                        className="login-input"
                        type="email"
                        placeholder="Enter Email id"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </div>
                </Row>
                <Row>
                  <div className="col-12">
                    <Form.Group className="mb-2" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <InputGroup className="col-lg-3 mb-2">
                        <Form.Control
                          type={PasswordShow ? "text" : "password"}
                          className="login-input"
                          placeholder="Password"
                          aria-describedby="basic-addon1"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {PasswordShow ? (
                          <button
                            onClick={() => setPasswordShow(!PasswordShow)}
                            className="passbtn"
                          >
                            <FaEye style={{ color: "white" }} />
                          </button>
                        ) : (
                          <button
                            onClick={() => setPasswordShow(!PasswordShow)}
                            className="passbtn"
                          >
                            <FaEyeSlash style={{ color: "white" }} />
                          </button>
                        )}
                      </InputGroup>
                    </Form.Group>
                  </div>
                </Row>

                <Row>
                  <div className="col-12 ">
                    <Form.Group className="mb-2" controlId="formGroupPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <InputGroup className="col-lg-3 mb-2">
                        <Form.Control
                          type={PasswordShow1 ? "text" : "password"}
                          className="login-input"
                          placeholder="Password"
                          aria-describedby="basic-addon1"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {PasswordShow1 ? (
                          <button
                            onClick={() => setPasswordShow1(!PasswordShow1)}
                            className="passbtn"
                          >
                            <FaEye style={{ color: "white" }} />
                          </button>
                        ) : (
                          <button
                            onClick={() => setPasswordShow1(!PasswordShow1)}
                            className="passbtn"
                          >
                            <FaEyeSlash style={{ color: "white" }} />
                          </button>
                        )}
                      </InputGroup>
                    </Form.Group>
                  </div>
                </Row>
                <div>
                  <Form style={{ display: "flex", padding: "0 4px" }}>
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="I agree the terms and conditions"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
                <Row>
                  <div
                    style={{
                      float: "right",
                      display: "flex",
                      justifyContent: "center",
                      padding: "0px 100px",
                    }}
                  >
                    <Button
                      variant=""
                      style={{ backgroundColor: "green", color: "white" }}
                      onClick={() => {
                        TeacherRegister();
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </Row>
              </div>
            </div>
            <div className="col-md-6">
              <div className="signup-bg-img">
                <div className="line-1">
                  <h3>
                    Welcome To <br></br>
                    Question Paper Generator
                  </h3>
                  <span className="fs-6" style={{ textAlign: "center" }}>
                    If you have already an account Login Here
                  </span>
                  <div>
                    <a href="/login">
                      <Button
                        style={{
                          padding: "7px 30px",
                          backgroundColor: "green",
                          border: "1px solid green",
                          color: "white",
                        }}
                      >
                        Log in
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration OTP  */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ zIndex: "9999999", borderRadius: "none" }}
      >
        <Modal.Header
          style={{ backgroundColor: "navy", borderRadius: "unset" }}
        >
          <Modal.Title style={{ color: "white" }}> Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Enter OTP" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant=""
            style={{
              backgroundColor: "green",
              border: "1px solid green",
              color: "white",
            }}
            onClick={() => navigate("/login")}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUp;
