import React, { useState } from "react";
import { InputGroup, Modal, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "../LoginPage3/LoginPage3.css";
import axios from "axios";
import swal from "sweetalert";
import logo from "./../../assets/logo.png";
import Button1 from "../Button1";

const SignUp = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //Post
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [termndcond, setTermndcond] = useState("");

  const TeacherRegister = async () => {
    try {
      const config = {
        url: "/admin/registerTeacher",
        method: "post",
        baseURL: "https://guru-resorce-backend.onrender.com/api",
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
          whatsAppNumber: whatsAppNumber,
          CPassword: CPassword,
          termndcond: termndcond,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        handleClose();
        swal({
          title: "yeah!",
          text: res.data.success,
          icon: "success",
          button: "Ok!",
        });
      }
      setTimeout(() => {
        return navigate("/login");
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
                <h4
                  style={{ textAlign: "center" }}
                  className="space-mono-bolder"
                >
                  Register Here
                </h4>
                <hr></hr>

                <Row>
                  <Col>
                    <div className="col-12">
                      <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label className="lato-regular">
                          First Name<span style={{ color: "red" }}>*</span>
                        </Form.Label>
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
                        <Form.Label className="lato-regular">
                          Last Name<span style={{ color: "red" }}>*</span>
                        </Form.Label>
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
                      <Form.Label className="lato-regular">
                        Mobile Number<span style={{ color: "red" }}>*</span>
                      </Form.Label>
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
                      <Form.Label className="lato-regular">
                        WhatsApp Number<span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Your WhatsApp Number"
                        onChange={(e) => setWhatsAppNumber(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </Row>
                <Row>
                  <div className="col-12">
                    <Form.Label className="lato-regular">
                      Email ID<span style={{ color: "red" }}>*</span>
                    </Form.Label>
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
                      <Form.Label className="lato-regular">
                        Password<span style={{ color: "red" }}>*</span>
                      </Form.Label>
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
                      <Form.Label className="lato-regular">
                        Confirm Password<span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <InputGroup className="col-lg-3 mb-2">
                        <Form.Control
                          type={PasswordShow1 ? "text" : "password"}
                          className="login-input"
                          placeholder="Password"
                          aria-describedby="basic-addon1"
                          onChange={(e) => setCPassword(e.target.value)}
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
                    {/* {["checkbox"].map((type) => ( */}
                    <div className="mb-3">
                      <Form.Check
                        inline
                        label="I agree the terms and conditions"
                        name="group1"
                        // type={type}
                        // id={`inline-${type}-1`}
                        onChange={(e) => setTermndcond(e.target.value)}
                      />
                    </div>
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
                    <a
                      onClick={() => {
                        TeacherRegister();
                      }}
                    >
                      <Button1 text={"Register"} />
                    </a>
                  </div>
                </Row>
              </div>
            </div>
            <div className="col-md-6">
              <div className="signup-bg-img">
                <div className="line-1">
                  <h2 className="alfa-slab " style={{ color: "#5140EB" }}>
                    Welcome To,
                  </h2>
                  <img src={logo} alt=" " className="w-50" />
                  <h3>
                    {/* Welcome To <br></br>
                      Question Paper Generator */}
                  </h3>
                  <span
                    className="fs-6 space-mono-regular fw-normal"
                    style={{ textAlign: "center" }}
                  >
                    If you have already an account Login Here
                  </span>

                  <div>
                    {/* <a href="/login">
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
                    </a> */}
                    <a href="/login" style={{textDecoration:"none"}} className="d-flex justify-content-center align-items-center">
                      <Button1 text={"Log In"} />
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
