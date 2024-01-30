import React, { useState } from "react";
import { Button, InputGroup, Modal, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import "../LoginPage3/LoginPage3.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate("");
  //ForgotPassword
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //post
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const TeacherLogin = async () => {
    try {
     
      if(!Email) return swal({
        title:"oops!",
        text:"Please Enter the Email ID",
        icon:"error",
        button:"Ok!"
      })
      if(!Password) return swal({
        title:"oops!",
        text:"Please Enter Password",
        icon:"error",
        button:"Ok!"
      })
      const config={
        url:"/admin/loginTeacher",
        method:"post",
        baseURL:"http://localhost:8000/api",
        headers:{
          "Content-type":"application/json",
          // Authorization:`Bearer ${token}`,
        },
        data: {
          Mobile: Mobile,
          Email: Email,
          Password: Password,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        swal({
          title: "Yeah!!",
          text: "Successfully Logged In",
          icon: "success",
          button: "OK!",
        });
        sessionStorage.setItem("user", JSON.stringify(res.data.success));
        sessionStorage.setItem("token", res.data.token);
        setTimeout(() => {
          return navigate("/examboard");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      return swal({
        title: "oops",
        text: error.response.data.error,
        icon: "error",
        button: "Try Again",
      });
    }
  };

  const [PasswordShow, setPasswordShow] = useState(false);
  const [confirmpasswordshow, setconfirmpasswordshow] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div>


      {/* New Login  */}
      <div className="container p-3">
        <div>
          <div className="box">
            <div className="row">
              <div className="col-md-6">
                <div className="bg-img">
                  <div className="line-1">
                    <h3>
                      Welcome To <br></br>
                      Question Paper Generator
                    </h3>
                    <span className="fs-6" style={{ textAlign: "center" }}>
                      If you are a New User Please Register Here
                    </span>
                    <div>
                      <a href="/signup">
                        <Button
                          style={{
                            padding: "7px 30px",
                            backgroundColor: "green",
                            border: "1px solid green",
                            color: "white",
                          }}
                        >
                          Register
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="page2-content-display">
                  <h4 style={{ textAlign: "center" }}>Sign In</h4>
                  <hr></hr>

                  <Row>
                    <div className="col-10 mb-2">
                      <Form.Label>Email ID</Form.Label>
                      <InputGroup className="mb-2">
                        <Form.Control
                          className="login-input"
                          type="email"
                          placeholder="Enter email or mobile number"
                          aria-label="email"
                          aria-describedby="basic-addon1"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                    </div>
                  </Row>
                  <Row>
                    <div className="col-10 mb-2">
                      <Form.Group
                        className="mb-2"
                        controlId="formGroupPassword"
                      >
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
                  <div>
                    <h6
                      style={{
                        display: "flex",
                        padding: "0 4px",
                        cursor: "pointer",
                      }}
                      onClick={handleShow}
                    >
                      Forgot Password?
                    </h6>
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
                      {/* <a
                      href="/examboard"
                      style={{
                        
                        textDecoration:"none",
                        color:"white"
                      }}
                    > */}
                      <Button
                        variant=""
                        style={{ backgroundColor: "green", color: "white" }}
                        onClick={() => {
                          TeacherLogin();
                        }}
                      >
                        Log in
                      </Button>
                      {/* </a> */}
                    </div>
                  </Row>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          style={{ zIndex: "9999999" }}
        >
          <Modal.Header>
            <Modal.Title>Forgot Password </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label style={{ display: "flex", padding: "0 4px" }}>
                  Email Id
                </Form.Label>
                <Form.Control type="password" placeholder="Enter Email Id" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label style={{ display: "flex", padding: "0 4px" }}>
                  OTP
                </Form.Label>
                <Form.Control type="password" placeholder="Enter OTP" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant=""
              style={{
                backgroundColor: "navy",
                border: "1px solid navy",
                color: "white",
              }}
              onClick={handleClose}
            >
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
