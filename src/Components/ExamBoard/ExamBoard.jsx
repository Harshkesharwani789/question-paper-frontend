import React, { useState } from "react";
import Icon from 'react-icons-kit';
import {
    Button, Container, InputGroup,
    Row, Modal,
} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import "../ExamBoard/ExamBoard.css";

const ExamBoard = () => {
  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <div>
    <div className="container p-5">
        <div >
            <div className="box">
                <div className="row">
                    <div className="col-md-6">
                        <div
                            style={{
                                backgroundImage: "url('../images/page2bg.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                height: "500px",
                            }}
                        >
                            <h3 style={{ padding: "20px" }}>
                                Guru Resource Management
                            </h3>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='page2-content-display'>
                            <h4>Tell Us</h4>
                            <hr></hr>
                            <Row>
                                <div className='col-10 mb-4'>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select Exams Board</option>
                                        <option value="cbse">State</option>
                                    </Form.Select>
                                </div>
                            </Row>
                            <Row>
                                <div className='col-10 mb-4'>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select Exams Level</option>
                                        <option value="cbse">1</option>
                                        <option value="cbse">2</option>
                                        <option value="cbse">3</option>

                                    </Form.Select>
                                </div>
                            </Row>
                            <Row>
                                <div className='col-10 mb-4'>
                                    <Form.Select aria-label="Default select example">
                                        <option>Medium</option>
                                        <option value="1">English</option>
                                        <option value="2">Hindi</option>
                                        <option value="3">Kannada</option>
                                    </Form.Select>
                                </div>
                            </Row>
                            <Row>
                                <div className='col-10 mb-4'>
                                    <Form.Select aria-label="Default select example">
                                        <option>Exam Name</option>
                                        <option value="1">Test-1</option>
                                        <option value="2">Test-2</option>
                                        <option value="3">Test-3</option>
                                    </Form.Select>
                                </div>
                            </Row>
                            <Row>
                                <div style={{ textAlign: "left", padding: "0px 12px" }}>
                                    <div className='col-8 mb-4' >
                                        <input type="radio" name="fav_language" /> &nbsp;
                                        <Button onClick={handleShow}>Syllabus question paper with blue print</Button>
                                    </div>
                                    <div className='col-8 mb-4'>
                                        <input type="radio" name="fav_language" /> &nbsp;
                                        <Button variant='success' onClick={handleShow}>Result Sheet and Marks Card</Button>
                                    </div>
                                </div>
                            </Row>
                            <br />
                            <div style={{ display: "flex", justifyContent: "flex-end", padding: "0px 20px" }}>
                                <Button onClick={handleShow}>Start</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    {/* Payment Modal */}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Make Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <img src='../images/razorpay.png' style={{ width: "150px" }} alt='' />
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleShow1}>
                Pay
            </Button>
        </Modal.Footer>
    </Modal>

    {/* after Payment  */}

    <Modal show={show1} onHide={handleClose1}>
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
    </Modal>
</div>
  );
};

export default ExamBoard;
