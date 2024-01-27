import React, { useEffect, useState } from "react";
import { Button, InputGroup, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "../Admin/Admin.css";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import axios from "axios";

const AdminSignin = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));

  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(FaEyeSlash);
  const [PasswordShow, setPasswordShow] = useState(false);
  const [confirmpasswordshow, setconfirmpasswordshow] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    if (type === "password") {
      setIcon(FaEye);
      setType("text");
    } else {
      setIcon(FaEyeSlash);
      setType("password");
    }
  };

  const [email, setemail] = useState("");
  const [passward, setpassward] = useState("");

  const login = async () => {
    try {
      if (!email)
        return swal({
          title: "Opps!",
          text: "Please enter email id!",
          icon: "warning",
          button: "OK!",
        });
      if (!passward)
        return swal({
          title: "Opps!",
          text: "Please enter Your Password!",
          icon: "warning",
          button: "OK!",
        });
      const config = {
        url: "/admin/login",
        method: "Post",
        baseURL: "http://localhost:8000/api",
        header: { "Content-Type": "application/json" },
        data: { email: email, password: passward },
      };
      let res = await axios(config);
      if (res.status == 200);
      {
        swal({
          title: "Success!",
          text: "Successfully Login",
          icon: "success",
          button: "OK!",
        });
        sessionStorage.setItem("admin", JSON.stringify(res.data.success));
        sessionStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      swal({
        title: "Opps!",
        text: error.response.data.error,
        icon: "error",
        button: "Try Again!",
      });
    }
  };
  //ForgotPassword
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   const admin = JSON.parse(sessionStorage.getItem("admin"));
  //   if (!admin) {
  //     alert("Please login first");
  //     window.location.assign("/admin");
  //   } else {
  //     window.location.assign("/dashboard")
  //   }
  // }, []);
  return (
    <div>
      <div className="container p-3">
        <div className="">
          <div className="box">
            <div className="row">
              <div className="col-md-6">
                <div className="admin-login-bg">
                  <div style={{ padding: "150px 0px", textAlign: "center" }}>
                    <h3 style={{ color: "white", fontSize: "35px" }}>
                      Welcome To <br></br>Admin Pannel
                    </h3>
                    <p style={{ color: "white" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6"
                style={{ padding: "30px", textAlign: "center" }}
              >
                <h2>Admin Log-In</h2>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label style={{ display: "flex", padding: "0 4px" }}>
                      Email Id
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email Id"
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label style={{ display: "flex", padding: "0 4px" }}>
                      Password
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={PasswordShow ? "text" : "password"}
                        className="login-input"
                        placeholder="Password"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          setpassward(e.target.value);
                        }}
                      />
                      {PasswordShow ? (
                        <button
                          onClick={() => setPasswordShow(!PasswordShow)}
                          className="passbtn"
                        >
                          <FaEye />
                        </button>
                      ) : (
                        <button
                          onClick={() => setPasswordShow(!PasswordShow)}
                          className="passbtn"
                        >
                          <FaEyeSlash />
                        </button>
                      )}
                    </InputGroup>
                  </Form.Group>
                </Form>

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
                <br />

                <div>
                  <button
                    style={{
                      padding: "6px 30px",
                      backgroundColor: "navy",
                      border: "1px solid navy",
                      color: "white",
                    }}
                    onClick={() => login()}
                  >
                    Sign-In
                  </button>
                </div>
              </div>
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
        <Modal.Header closeButton>
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
  );
};

export default AdminSignin;
