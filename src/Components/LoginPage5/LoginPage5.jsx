import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "../LoginPage5/LoginPage5.css";
import { Button, FormLabel, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const LoginPage5 = () => {
  const { state } = useLocation();
  console.log("state==>", state);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [School_Logo, setSchool_Logo] = useState("");
  const [Institute_Name, setInstitute_Name] = useState("");
  const [Subject, setSubject] = useState("");
  const [Test_Date, setTest_Date] = useState("");
  const [Size_ofthe_Question, setSize_ofthe_Question] = useState("");

  const generate = async () => {
    try {
      const config = {
        url: "/teacher/upadeteQuestionPaper",
        baseURL: "http://localhost:8000/api",
        method: "put",
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: {
          School_Logo: School_Logo,
          Institute_Name: Institute_Name,
          Subject: Subject,
          Test_Date: Test_Date,
          Size_ofthe_Question: Size_ofthe_Question,
          id: state?._id,
          authId: user?._id,
        },
      };

      let res = await axios(config);
      let am = "";
      if (res.status == 200) am = res.data.success;

      swal({
        title: "Yeah!",
        text: "view blue print !!!",
        icon: "success",
        button: "OK!",
      });
      navigate("/blueprint", { state: am });
    } catch (error) {
      console.log(error);
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        button: "OK!",
      });
    }
  };
  console.log("first", state?._id);
  const [subject, setsubject] = useState([]);
  const getSubject = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllSujects"
      );
      if (res.status == 200) {
        setsubject(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSubject();
  }, []);
  console.log(subject);
  return (
    <div>
      <div className="container p-3">
        <div>
          <div className="loginpage5">
            <div className="row">
              {/* <div className="col-md-6 gfffg">
                <div className="login3-bg">
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
              </div> */}
              <div className="col-md-12 yoihjij ">
                <Form className="pe-2 pt-3">
                  <Form.Group controlId="formFile" className="mb-2">
                    <Row>
                      <div className="col-12 mb-2">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Education Board
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select Education Board</option>
                          <option>CBSE</option>
                          <option>STATE</option>
                        </Form.Select>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 mb-2">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Exam Name
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select Exams Name</option>
                          <option>FA-2</option>
                          <option>FA-3</option>
                          <option>FA-5</option>
                        </Form.Select>
                      </div>
                    </Row>

                    <Row>
                      <div className="col-12 mb-2">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Medium
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select Medium</option>
                          <option>Kannada</option>
                          <option>English</option>
                          <option>Hindi</option>
                        </Form.Select>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 mb-2">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Exam Level
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select Exam Level</option>
                          <option>Easy</option>
                          <option>Difficult</option>
                          <option>Average</option>
                        </Form.Select>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 mb-2">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Class
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select Class</option>
                          <option>Primary</option>
                          <option>secondary</option>
                        </Form.Select>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 mb-2">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Sub Class
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select Sub Class</option>
                          <option>Fifth class</option>
                          <option>seventh class</option>
                          <option>sixth class</option>
                        </Form.Select>
                      </div>
                    </Row>

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
                      Subject
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select the Subject</option>
                      <option>Kannada</option>
                      <option>English</option>
                      <option>Hindi</option>
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
                      readOnly
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-center">
                    <Button
                      style={{                      
                        background: "green",
                        margin: "20px",
                      }}
                      onClick={() => generate()}
                    >
                      Submit
                    </Button>

                    <Button variant="secondary"
                      style={{
                        background: "gray",
                        margin: "20px",
                      }}
                    >
                      Edit
                    </Button>
                    <a href="/blueprint" style={{textDecoration:"none"}}>
                    <Button
                      style={{
                        background: "green",
                        margin: "20px",
                      }}
                    //   onClick={() => generate()}
                    
                    >
                      View Blue Print
                    </Button>
                    </a>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage5;
