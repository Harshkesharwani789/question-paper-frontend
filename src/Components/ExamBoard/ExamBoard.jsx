import React, { useState } from "react";
import Icon from "react-icons-kit";
import { Button, Container, InputGroup, Row, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "../ExamBoard/ExamBoard.css";

const ExamBoard = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [before, setBefore] = useState(false);
  const [after, setAfter] = useState("");

  return (
    <div>
      <div className="container p-5">
        <div>
          <div className="box">
            <div className="row">
              <div className="col-md-6">
                <div className="bg-img">
                  <div className="line-1">
                    <h2>
                      {" "}
                      <p className="anim-typewriter text-dark">
                        Welcome Amandeep Singh !{" "}
                      </p>{" "}
                      <span className="fs-4" style={{ textAlign: "center" }}>
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
                            <Button variant="success"
                              style={{ backgroundColor: "green" }}>Student</Button>
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
                            <option value="cbse">CBSE</option>
                            <option value="cbse">ICSE</option>
                            <option value="cbse">STATE</option>
                          </Form.Select>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-10 mb-4">
                          <Form.Select aria-label="Default select example">
                            <option>Select Exams Name</option>
                            <option value="1">FA-1</option>
                            <option value="2">FA-2</option>
                            <option value="3">FA-3</option>
                            <option value="3">FA-4</option>
                            <option value="3">FA-5</option>
                            <option value="3">FA-6</option>
                          </Form.Select>
                        </div>
                      </Row>

                      <Row>
                        <div className="col-10 mb-4">
                          <Form.Select aria-label="Default select example">
                            <option>Select Medium</option>
                            <option value="1">English</option>
                            <option value="2">Hindi</option>
                            <option value="3">Kannada</option>
                            <option value="2">Sanskrit</option>
                            <option value="3">Marathi</option>
                            <option value="3">Urdu</option>
                          </Form.Select>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-10 mb-4">
                          <Form.Select aria-label="Default select example">
                            <option>Select Exam Level</option>
                            <option value="cbse">District Level</option>
                            <option value="cbse">State Level</option>
                            <option value="cbse">School Level</option>
                          </Form.Select>
                        </div>
                      </Row>
                      <Row>
                        <div className="col-10 mb-4">
                          <Form.Select aria-label="Default select example">
                            <option>Select Class</option>
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
