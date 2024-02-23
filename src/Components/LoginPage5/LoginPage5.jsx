import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "../LoginPage5/LoginPage5.css";
import { Button, FormLabel, Row, Modal } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const LoginPage5 = () => {
  const { state } = useLocation();

  const [questioStatus, setQuestionStatus] = useState("Genrated");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [School_Logo, setSchool_Logo] = useState("");
  const [Institute_Name, setInstitute_Name] = useState("");
  const [Subject, setSubject] = useState("");
  const [Test_Date, setTest_Date] = useState("");
  const [Size_ofthe_Question, setSize_ofthe_Question] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [quenCount, setquecount] = useState(1);
  const [Individual, setIndividual] = useState("Individual");

  const [bluePData, setbluePdata] = useState([]);
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
          Pay_Id: bluePData[0]?.blueprintId ? bluePData[0]?.blueprintId : "",
          Pay_Amount: bluePData[0]?.blueprintId
            ? bluePData[0]?.price * quenCount
            : "",
          status: questioStatus,
          Individual: Individual,
          numberOfPaper: quenCount,
        },
      };

      let res = await axios(config);

      if (res.status == 200) {
        swal({
          title: "Yeah!",
          text: "view blue print !!!",
          icon: "success",
          button: "OK!",
        });
        navigate("/blueprint", { state: res.data.success });
      }
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
  // console.log("first", state?._id);
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
  const upcomingStaus = async () => {
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
          id: state?._id,
          authId: user?._id,

          status: "Up_Comming",
        },
      };

      let res = await axios(config);
    } catch (error) {
      console.log(error);
    }
  };
  const getBluePrint = async () => {
    try {
      const config = {
        url: "/admin/getBluePrintGetByTeacherRequired",
        baseURL: "http://localhost:8000/api",
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          authId: user?._id,
          board: state?.Board,
          medium: state?.Medium,
          className: state?.Class,
          SubClassName: state?.Sub_Class,
          subjects: state?.Subject,
        },
      };

      let res = await axios(config);

      if (res.status == 200) {
        setbluePdata(res.data.success);
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        button: "OK!",
      });
    }
    upcomingStaus();
  };
  useEffect(() => {
    if (token && state) {
      getBluePrint();
    }
  }, [token, state]);
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
                    <div style={{ textAlign: "center" }}>
                      <h5>-: School Details :-</h5>
                    </div>
                    <Row>
                      <div className="col-12 mb-2 d-flex justify-content-between align-items-center">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          School Logo :
                        </Form.Label>
                        <div className="">
                          <img
                            style={{
                              width: "142px",
                              height: "139px",
                              borderRadius: "50%",
                            }}
                            src={`http://localhost:8000/Teacher/${state?.School_Logo}`}
                            alt="school logo"
                          />
                        </div>
                      </div>
                    </Row>

                    <Row>
                      <div className="col-12 mb-2 d-flex justify-content-between align-items-center">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Institute_Name :
                        </Form.Label>

                        <div>
                          <h6>{state?.Institute_Name}</h6>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 mb-2 d-flex justify-content-between align-items-center">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Board :
                        </Form.Label>

                        <div>
                          <h6>{state?.Board}</h6>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 mb-2 d-flex justify-content-between align-items-center">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Medium :
                        </Form.Label>

                        <div>
                          <h6>{state?.Medium}</h6>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 mb-2 d-flex justify-content-between align-items-center">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Subject :
                        </Form.Label>

                        <div>
                          <h6>{state?.Subject}</h6>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 mb-2 d-flex justify-content-between align-items-center">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Exam Name :
                        </Form.Label>

                        <div>
                          <h6>{state?.Exam_Name}</h6>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12 mb-2 d-flex justify-content-between align-items-center">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Test_Date :
                        </Form.Label>

                        <div>
                          <h6>{state?.Test_Date}</h6>
                        </div>
                      </div>
                    </Row>

                    <Row>
                      <div className="col-12 mb-2 d-flex justify-content-between align-items-center">
                        <Form.Label
                          className="fs-6 fw-bold mt-2 "
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Paper Size :
                        </Form.Label>

                        <div>
                          <h6>{state?.Size_ofthe_Question}</h6>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <div style={{ textAlign: "left", padding: "0px 12px" }}>
                        <div className="col-8 mb-4">
                          <input
                            type="radio"
                            name="fav_language"
                            checked={Individual == "Individual"}
                            onClick={() => {
                              setquecount(1);
                              setIndividual("Individual");
                            }}
                          />{" "}
                          &nbsp;
                          <Button
                            style={{
                              backgroundColor: "#ff5200",
                              border: "none",
                            }}
                            onClick={() => {
                              setquecount(1);
                              setIndividual("Individual");
                            }}
                          >
                            Individual
                          </Button>
                        </div>
                        <div className="col-12 mb-4">
                          <input
                            type="radio"
                            name="fav_language"
                            checked={Individual == "No.of Student"}
                            onClick={() => setIndividual("No.of Student")}
                          />{" "}
                          &nbsp;
                          <Button
                            variant="success"
                            style={{ backgroundColor: "green" }}
                            onClick={() => setIndividual("No.of Student")}
                          >
                            No.of Student
                          </Button>
                          {Individual == "No.of Student" ? (
                            <div style={{ float: "right", width: "100px" }}>
                              <input
                                type="number"
                                className="vi_0"
                                min={1}
                                value={quenCount}
                                onChange={(e) => setquecount(e.target.value)}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </Row>
                    {bluePData.length == 0 ? (
                      <></>
                    ) : (
                      <Row>
                        <div className="col-12 mb-2 d-flex justify-content-around align-items-center">
                          <Form.Label
                            className="fs-6 fw-bold mt-2 "
                            style={{ letterSpacing: "0.5px" }}
                          >
                            Price :
                          </Form.Label>

                          <div>
                            <h6>
                              {(bluePData[0]?.price * quenCount)?.toFixed(2)}
                            </h6>
                          </div>
                        </div>
                      </Row>
                    )}

                    {/* <Row>
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
                    </Row> */}
                    {/* 
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
                    /> */}
                  </Form.Group>

                  <div className="d-flex justify-content-center">
                    {/* <Button
                      style={{
                        background: "green",
                        margin: "20px",
                      }}
                    >
                      Submit
                    </Button> */}

                    <Button
                      variant="secondary"
                      style={{
                        background: "gray",
                        margin: "20px",
                      }}
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      Edit
                    </Button>
                    {bluePData.length == 0 ? (
                      <></>
                    ) : (
                      <Button
                        style={{
                          background: "green",
                          margin: "20px",
                        }}
                        onClick={() => handleShow()}
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        {/* Payment Modal */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Make Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <img
                  src="../images/razorpay.png"
                  style={{ width: "150px" }}
                  alt=""
                />
              </div>
              <div>
                <p style={{ fontSize: "30px", marginTop: "22px" }}>
                  ₹{" "}
                  {bluePData.length == 0
                    ? "0.00"
                    : (bluePData[0]?.price * quenCount)?.toFixed(2)}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant=""
              style={{ backgroundColor: "#ff5200", color: "white" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                generate();
              }}
            >
              Pay
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default LoginPage5;
