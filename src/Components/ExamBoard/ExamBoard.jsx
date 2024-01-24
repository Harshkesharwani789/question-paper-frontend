import React, { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { Button, Container, InputGroup, Row, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "../ExamBoard/ExamBoard.css";
import axios from "axios";

const ExamBoard = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [before, setBefore] = useState(false);
  const [after, setAfter] = useState("");

   // get method of Board
   const [getboardname, setboardname] = useState([]);
   const getallboardname = async () => {
     try {
       let res = await axios.get("http://localhost:8000/api/admin/getAllBoard");
       if (res.status == 200) {
         setboardname(res.data.success);
       }
     } catch (error) {
       console.log(error);
     }
   };
    //get method of Name of Examination
  const [NameExam, setNameExam] = useState([]);
  const getNameExamination = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllNameExamination"
      );
      if (res.status == 200) {
        setNameExam(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //get mthod of medium
  const [Medium, setMedium] = useState([]);
  const getAddMedium = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getAllMedium");
      if (res.status == 200) {
        setMedium(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //get
  const [Examlevell, setExamlevell] = useState([]);
  const getExamLevel = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getExamLevel"
      );
      if (res.status == 200) {
        setExamlevell(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
    // get method of add class
    const [getclassname, setgetclassName] = useState([]);
    const getallclassname = async () => {
      try {
        let res = await axios.get("http://localhost:8000/api/admin/getAllClass");
        if (res.status == 200) {
          setgetclassName(res.data.success);
        }
      } catch (error) {
        console.log(error);
      }
    };

   useEffect(()=>{
    getallboardname();
    getNameExamination();
    getAddMedium();
    getExamLevel();
    getallclassname();
   },[])

  return (
    <div>
      <div className="container p-3">
        <div>
          <div className="box">
            <div className="row">
              <div className="col-md-6">
                <div className="bg-img">
                  <div className="line-1">
                    <h2>
                      {" "}
                      <p className="anim-typewriter text-dark">
                        Guru Resource Management{" "}
                      </p>{" "}
                      <p className="fs-4 anim-typewriter text-dark" style={{paddingLeft:"6rem"}}>
                       Welcomes You!{" "}
                      </p>
                      <span className="fs-4">
                        Please Enter Your Details
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="page2-content-display">
                  <h4>Tell Us</h4>
                  <hr></hr>
                  {before ? (
                    <>
                      <Row>
                        <div style={{ textAlign: "left", padding: "0px 12px" }}>
                          <div className="col-8 mb-4">
                            <input type="radio" name="fav_language" /> &nbsp;
                            {/* <Button>
                              Syllabus question paper with blue print
                            </Button> */}
                            <Button>Individual</Button>
                          </div>
                          <div className="col-8 mb-4">
                            <input type="radio" name="fav_language" /> &nbsp;
                            {/* <Button
                              variant="success"
                              style={{ backgroundColor: "green" }}
                            >
                              Result Sheet and Marks Card
                            </Button> */}
                            <Button
                              variant="success"
                              style={{ backgroundColor: "green" }}
                            >
                              Student
                            </Button>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              padding: "0px 20px",
                            }}
                          >
                            <Button onClick={handleShow}>Start</Button>
                          </div>
                        </div>
                      </Row>
                    </>
                  ) : (
                    <>
                      <Row>
                        <div className="col-10 mb-4">
                          <Form.Select aria-label="Default select example">
                          
                            <option>Select Education Board</option>
                           {getboardname?.map((item,i)=>{
                            return(
                              <option value={item?.boardName}>{item?.boardName}</option>
                            )
                           })}
                          </Form.Select>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-10 mb-4">
                          <Form.Select aria-label="Default select example">
                            <option>Select Exams Name</option>
                            {NameExam?.map((item,i)=>{
                              return(
                                <option value={item?.NameExamination}>{item?.NameExamination}</option>
                              )
                            })}
                          </Form.Select>
                        </div>
                      </Row>

                      <Row>
                        <div className="col-10 mb-4">
                          <Form.Select aria-label="Default select example">
                            <option>Select Medium</option>
                            {Medium?.map((item,i)=>{
                              return(
                                <option value={item?.mediumName}>{item?.mediumName}</option>
                              )
                            })}
                          </Form.Select>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-10 mb-4">
                          <Form.Select aria-label="Default select example">
                            <option>Select Exam Level</option>
                            {Examlevell?.map((item,i)=>{
                              return(
                                <option value={item?.Examlevel}>{item?.Examlevel}</option>
                              )
                            })}
                          </Form.Select>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-10 mb-4">
                          <Form.Select aria-label="Default select example">
                            <option>Select Class</option>
                            {getclassname?.map((item,i)=>{
                              return(
                                <option value={item?.className}>{item?.className}</option>
                              )
                            })}
                           
                          </Form.Select>
                        </div>
                      </Row>
                      <Row>
                        <div
                          style={{
                            float: "right",
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: "0px 100px",
                          }}
                        >
                          <Button
                            variant=""
                            style={{ backgroundColor: "navy", color: "white" }}
                            onClick={() => {
                              setBefore(true);
                            }}
                          >
                            Submit
                          </Button>
                        </div>
                      </Row>
                    </>
                  )}

                  <br />
                </div>
              </div>
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
          <div>
            <img
              src="../images/razorpay.png"
              style={{ width: "150px" }}
              alt=""
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/loginpage3");
            }}
          >
            Pay
          </Button>
        </Modal.Footer>
      </Modal>

      {/* after Payment  */}

      {/* <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <div className="urban-o mb-3">
                    <label>Choose School Logo :</label>
                    <br />

                    <input style={{ border: "1px solid lightgray", width: "100%", padding: "3px 0", borderRadius: "6px" }}
                        type="file"
                        accept="image/x-png,image/gif,image/jpeg,image/jpg"
                    />
                </div>

                <div className="col-12 mb-3">
                    <label>School / Institute Name :</label>
                    <br />
                    <input className='form-control'
                        placeholder="Enter School / Institute Name"
                    />
                </div>

                <div className="col-12 mb-3">
                    <label>Class :</label>
                    <br />
                    <input className='form-control'
                        placeholder="Enter Class Name"
                    />
                </div>

                <div className="col-12 mb-3">
                    <label>Sub Class :</label>
                    <br />
                    <input className='form-control'
                        placeholder="Enter Sub Class Name"
                    />
                </div>

                <div className="col-12 mb-3">
                    <label>Test Paper Name :</label>
                    <br />
                    <input className='form-control'
                        placeholder="Enter Test paper Name"
                    />
                </div>

                <div className="col-12 mb-3">
                    <label>Test Date :</label>
                    <br />
                    <input type='date'
                        className='form-control'
                        placeholder="Enter test date"
                    />
                </div>

                <div className="col-12 mb-3">
                    <label>Size of question paper :</label>
                    <br />
                    <Form.Select aria-label="Default select example">
                        <option>Select Paper Size</option>
                        <option value="1">A4</option>
                    </Form.Select>

                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
                Cancel
            </Button>
            <Button variant="primary" onClick={() => { navigate('/blueprint') }}>
                Generate
            </Button>
        </Modal.Footer>
    </Modal> */}
    </div>
  );
};

export default ExamBoard;
