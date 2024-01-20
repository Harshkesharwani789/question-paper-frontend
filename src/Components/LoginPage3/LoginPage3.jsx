import React from "react";
import "../LoginPage3/LoginPage3.css";
import Form from "react-bootstrap/Form";
import { Button, FormLabel } from "react-bootstrap";

const LoginPage3 = () => {
  return (
    <div>
      <div className="container p-5">
        <div>
          <div className="box">
            <div className="row">
              <div className="col-md-6 gfffg">
                <div
                  style={{
                    backgroundImage: "url('../loginpage3.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "717px",
                    position: "relative",
                  }}
                >
                  <div className="line-1">
                    <h2>
                      {" "}
                      <p className="anim-typewriter text-dark">
                        Welcome Amandeep Singh !{" "}
                      </p>{" "}
                      <span className="fs-4" style={{ textAlign: "center" }}>
                        Start Generating Your Paper
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 yoihjij ">
                <Form className="pe-2 pt-3">
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label
                      className="fs-6 fw-bold"
                      style={{ letterSpacing: "0.5px" }}
                    >
                      School Logo
                    </Form.Label>
                    <Form.Control type="file" />

                    <Form.Label
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      School / Institute Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your School / Institute Name"
                    />
                    <Form.Label
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Class
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select the Class</option>
                      <option value="1">LKg</option>
                      <option value="2">Ukg</option>
                      <option value="3">Class I</option>
                      <option value="3">Class II</option>
                      <option value="3">Class III</option>
                      <option value="3">Class VI</option>
                      <option value="3">Class V</option>
                      <option value="3">Class VI</option>
                      <option value="3">Class VII</option>
                      <option value="3">Class VIII</option>
                      <option value="3">Class IX</option>
                      <option value="3">Class X</option>
                      <option value="3">Class XI</option>
                      <option value="3">Class XII</option>
                    </Form.Select>
                    <Form.Label
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Sub Class
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Sub Class" />
                    <Form.Label
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Subject
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select the Subject</option>
                      <option value="1">English</option>
                      <option value="2">Hindi</option>
                      <option value="3">Maths</option>
                      <option value="3">Science</option>
                      <option value="3">Social Studies</option>
                      <option value="3">Language</option>
                    </Form.Select>
                    <FormLabel
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Test Paper Name
                    </FormLabel>
                    {/* <Form.Control
                      type="text"
                      placeholder="Enter the Test Paper Name"
                    /> */}
                    <Form.Select aria-label="Default select example">
                      <option>Select Test Paper Name</option>
                      <option value="1">FA-1</option>
                      <option value="2">FA-2</option>
                      <option value="3">FA-3</option>
                      <option value="3">FA-4</option>
                      <option value="3">FA-5</option>
                      <option value="3">FA-6</option>
                    </Form.Select>
                    <FormLabel
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Test Date
                    </FormLabel>
                    <Form.Control
                      type="date"
                      placeholder="Enter the Test Paper Name"
                    />
                    <FormLabel
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Size of the Question Paper
                    </FormLabel>
                    <Form.Control
                    value="A4"
                      type="text"
                      placeholder="Enter the 
                      Size of the Question Paper (Recommended-A4)"
                      disabled
                    />
                  </Form.Group>

                  <Button
                    style={{
                      margin: "auto",
                      display: "flex",
                      justifyContent: "center",
                      background:"navy",
                    }}
                  >
                    <a href="/blueprint" style={{ color:"white", textDecoration:"none"}}>View Blue Print</a>
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage3;
