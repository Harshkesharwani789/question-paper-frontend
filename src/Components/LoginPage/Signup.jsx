import React, { useState } from "react";
import { Button, InputGroup, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="container d-flex justify-content-center p-5">
        <div className="">
          <div className="box ">
            <div className="row">
              <div
                className="col-md-6 "
                style={{ padding: "30px", textAlign: "center" }}
              >
                <h2>Sign-Up</h2>
                <div className="container d-flex justify-content-center mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <Form className="pe-2">
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Label
                            style={{ display: "flex", padding: "0 4px" }}
                          >
                            First Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                          />
                        </Form.Group>
                      </Form>
                    </div>

                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label
                          style={{ display: "flex", padding: "0 4px" }}
                        >
                          Last Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label
                          style={{ display: "flex", padding: "0 4px" }}
                        >
                          Mobile Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Mobile Number"
                        />
                      </Form.Group>
                    </div>

                    <div className="col-md-12">
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label
                          style={{ display: "flex", padding: "0 4px" }}
                        >
                          Email Id
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Email Id"
                        />
                      </Form.Group>
                    </div>
                    {/* <div className="col-md-4">
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label
                          style={{ display: "flex", padding: "0 4px" }}
                        >
                          Country
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </div> */}
                    {/* <div className="col-md-4">
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label
                          style={{ display: "flex", padding: "0 4px" }}
                        >
                          State
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </div> */}
                    {/* <div className="col-md-4">
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label
                          style={{ display: "flex", padding: "0 4px" }}
                        >
                          City
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>{" "}
                      </Form.Group>
                    </div> */}

                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label
                          style={{ display: "flex", padding: "0 4px" }}
                        >
                          Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                        />
                      </Form.Group>
                    </div>

                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label
                          style={{ display: "flex", padding: "0 4px" }}
                        >
                          Confirm Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                        />
                      </Form.Group>
                    </div>

                    <div className="col-md-12">
                      <Form style={{ display: "flex", padding: "0 4px" }}>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              label="I agree to terms and conditions"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                          </div>
                        ))}
                      </Form>
                    </div>

                    {/* <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Label
                            style={{ display: "flex", padding: "0 4px" }}
                          >
                            Mobile Number
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Mobile Number"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupPassword"
                        >
                          <Form.Label
                            style={{ display: "flex", padding: "0 4px" }}
                          >
                            Email Id
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Email Id"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupPassword"
                        >
                          <Form.Label
                            style={{ display: "flex", padding: "0 4px" }}
                          >
                            Password
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Password"
                          />
                        </Form.Group>
                         */}

                    {/* <div className="col-md-6">
                      <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Label
                            style={{ display: "flex", padding: "0 4px" }}
                          >
                            Last Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                          />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Label
                            style={{ display: "flex", padding: "0 4px" }}
                          >
                            City
                          </Form.Label>
                          <Form.Control type="text" placeholder="Enter City" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Label
                            style={{ display: "flex", padding: "0 4px" }}
                          >
                            State
                          </Form.Label>
                          <Form.Control type="text" placeholder="Enter State" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Label
                            style={{ display: "flex", padding: "0 4px" }}
                          >
                            Country
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Country"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupPassword"
                        >
                          <Form.Label
                            style={{ display: "flex", padding: "0 4px" }}
                          >
                            Confirm Password
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Password"
                          />
                        </Form.Group>
                      </Form>
                    </div> */}
                  </div>
                </div>

                <br />

                <div>
                  <button
                    style={{
                      padding: "6px 30px",
                      background: "navy",
                      border: "1px solid navy",
                      color: "white",
                    }}
                    onClick={()=>{navigate("/login")}}
                  >

                    Sign-Up
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  style={{
                    backgroundImage: "url('../exam.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "655px",
                  }}
                >
                  <div style={{ padding: "220px 0px", textAlign: "center" }}>
                    <h3 style={{ color: "white", fontSize: "35px" }}>
                      Welcome To <br></br>Question Paper Generator
                    </h3>
                    <p style={{ color: "white" }}>
                      Already have an Account Please
                    </p>
                    <a href="/">
                      <button
                        style={{
                          padding: "7px 30px",
                          background: "navy",
                          border: "1px solid navy",
                          color: "white",
                        }}
                      >
                        Sign-In
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
