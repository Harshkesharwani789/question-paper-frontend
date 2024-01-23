import React, { useState, useRef } from 'react'
import "../QuestionPaper/QuestionPaper.css";
// import "../BluePrint/BluePrint.css"; 
import { CiSaveDown2 } from "react-icons/ci";
import { LuPrinter } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import {
    Button, Container, Form, InputGroup,
    Row, Modal,
} from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";


import { Col } from "react-bootstrap";
import { IoCheckmark } from "react-icons/io5";
import Frontpage from '../fontpage/Frontpage';

const QuestionPaper = ({ text }) => {

    const navigate = useNavigate()

    const [show, setShow] = useState("")
    const aTagRef = useRef(null);

    const handlePrint = () => {
        window.print();
    };

    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await html2canvas(document.querySelector("#pdf"), {
            useCORS: true,
        });
        console.log("hhhh", data);
        const img = data.toDataURL("image/png");
        console.log("ddkd1", img);
        const imgProperties = pdf.getImageProperties(img);
        console.log("ddkd2", imgProperties);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        console.log("ddkd3", pdfWidth);
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        console.log("ddkd4", pdfHeight);
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Question_Paper.pdf");
    };


    return (
        <div>



            <div className='top-header'>
                <div className='top-nav-display'>
                    <CiSaveDown2 style={{ width: "22px", height: "40px" }} onClick={createPDF} />
                    <LuPrinter style={{ width: "22px", height: "40px" }} ref={aTagRef} onClick={handlePrint} />
                    <IoMdShare style={{ width: "22px", height: "40px" }} onClick={() => {
                        setShow(true);
                    }} />
                </div>
                {show ? (<>

                    <div className='share-button' >
                        <div><a href={"https://www.whatsapp.com/"}><IoLogoWhatsapp style={{ width: "25px", height: "35px" }} /></a></div>
                        <di><a href={"https://www.gmail.com/"}><MdOutlineEmail style={{ width: "25px", height: "35px" }} /></a></di>
                    </div>
                </>) : (<></>)

                }

            </div>

            {/* <div className='question-paper-display'>

                <div>

                    <div style={{ padding: " 30px 50px 10px 50px" }}>
                        <div>
                            <div className="d-flex justify-content-center ">
                                <h4 style={{ textAlign: "center" }}>KARNATAKA SCHOOL EXAMINATION AND ASSESSMENT BOARD</h4>
                            </div>
                            <div className="d-flex justify-content-center">
                                <h5>KSQAAC, Malleshwaram, Bengaluru-560003</h5>
                            </div>
                            <div className="d-flex justify-content-center mt-1">
                                <h4>Assessment-March 2023 Model Paper</h4>
                            </div>
                        </div>

                        <div className="subject mt-2 d-flex ">
                            <div className="">
                                <h4>Class: 8</h4>
                            </div>
                            <div>
                                <h4> Subject: First Language English</h4>
                            </div>
                            <div>
                                <h4> Marks: 40</h4>
                                <h4> Time: 2 Hours</h4>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center mb-2">
                                <h5>Information to be filled by the Student</h5>
                            </div>
                            <div className="asd mb-2">
                                <div className="d-flex gap-2">
                                    <h5>Name of the Student:</h5>
                                    <div style={{ borderBottom: "1px solid black", width: "73%" }}>
                                    </div>
                                </div>
                            </div>
                            <div className=" d-flex gap-4">
                                <div>
                                    <h5>Student SATS No:</h5>
                                </div>
                                <div className="d-flex">
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                </div>
                                <div className=" d-flex ">
                                    <div >
                                        <h5>Signature of the Student:</h5>
                                    </div>
                                    <div style={{ borderBottom: "1px solid black", width: "100%" }}>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <h5>Information to be filled by the Room Invigilator</h5>
                            </div>
                        </div>

                        <div className=" d-flex gap-4 mt-3">
                            <div>
                                <h5>School DISE Code:</h5>
                            </div>
                            <div className="d-flex">
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                            </div>
                        </div>

                        <div className="mt-4 mb-4 d-flex">
                            <div >
                                <h5>School Name:</h5>
                            </div>
                            <div style={{ borderBottom: "1px solid black", width: "87%" }}>
                            </div>
                        </div>

                        <div className="row">
                            <div className="d-flex gap-4">
                                <div className="col-md-4 d-flex gap-2">
                                    <div>
                                        <h5>Cluster:</h5>
                                    </div>
                                    <div style={{ borderBottom: "1px solid black", width: "85%" }}>
                                    </div>

                                </div>
                                <div className="col-md-4 d-flex gap-2">
                                    <div>
                                        <h5>Block:</h5>
                                    </div>
                                    <div style={{ borderBottom: "1px solid black", width: "85%" }}>
                                    </div>

                                </div>
                                <div className="col-md-4 d-flex gap-2">
                                    <div>
                                        <h5>District:</h5>
                                    </div>
                                    <div style={{ borderBottom: "1px solid black", width: "60%" }}>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="mt-4 d-flex gap-5">
                            <div>
                                <h5>School Type:</h5>
                            </div>


                            <div className="d-flex gap-2">
                                <div>
                                    <h5>Govt.</h5>
                                </div>
                                <div className="square"></div>
                            </div>
                            <div className="d-flex gap-2">
                                <div>
                                    <h5>Aided</h5>
                                </div>
                                <div className="square"></div>
                            </div>
                            <div className="d-flex gap-2">
                                <div>
                                    <h5>Un-aided</h5>
                                </div>
                                <div className="square"></div>
                            </div>



                        </div>

                        <div className="mt-4">
                            <h5>(Put "<IoCheckmark />" mark for applicable information)</h5>
                        </div>

                        <div className="mt-4 d-flex">
                            <div >
                                <h5>Signature of the Room Invigilator:</h5>
                            </div>
                            <div style={{ borderBottom: "1px solid black", width: "69%" }}>
                            </div>
                        </div>

                        <div className="mt-4 d-flex justify-content-center">
                            <h4>Information to be filled by the Evaluator at the time of evaluation</h4>
                        </div>

                        <div>
                            <table style={{ width: "100%", border: "1px solid black" }}>
                                <tr>
                                    <th style={{ border: "1px solid black" }}>Question Number</th>
                                    <th style={{ border: "1px solid black" }}> Obtained marks</th>
                                    <th style={{ border: "1px solid black" }}>Question Number</th>
                                    <th style={{ border: "1px solid black" }}> Obtained marks</th>
                                    <th style={{ border: "1px solid black" }}>Question Number</th>
                                    <th style={{ border: "1px solid black" }}> Obtained marks</th>

                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>1</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>11</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>21</td>
                                    <td style={{ border: "1px solid black" }}></td>

                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>2</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>12</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>22</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>3</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>13</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>23</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>4</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>14</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>24</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>5</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>15</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>25</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>6</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>16</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>26</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>7</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>17</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>27</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>8</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>18</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>28</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>9</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>19</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>-</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid black" }}>10</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>20</td>
                                    <td style={{ border: "1px solid black" }}></td>
                                    <td style={{ border: "1px solid black" }}>-</td>
                                    <td style={{ border: "1px solid black" }}></td>

                                </tr>

                                <tr>
                                    <th style={{ border: "1px solid black" }}>Total marks</th>
                                    <th style={{ border: "1px solid black" }}></th>
                                    <th style={{ border: "1px solid black" }}>Total marks</th>
                                    <th style={{ border: "1px solid black" }}></th>
                                    <th style={{ border: "1px solid black" }}>Total marks</th>
                                    <th style={{ border: "1px solid black" }}> </th>

                                </tr>

                                <tr>
                                    <th></th>
                                    <th ></th>
                                    <th ></th>
                                    <th ></th>
                                    <th style={{ border: "1px solid black" }}>Grand Total</th>
                                    <th style={{ border: "1px solid black" }}> </th>

                                </tr>

                            </table>
                        </div>

                        <div className="mt-4 d-flex gap-2">
                            <div >
                                <h5>Total marks obtained (in words):</h5>
                            </div>
                            <div style={{ borderBottom: "1px solid black", width: "70%" }}>
                            </div>
                        </div>

                        <div className="mt-4 d-flex gap-2 ">
                            <div >
                                <h5>Signature of the Evaluator:</h5>
                            </div>
                            <div style={{ borderBottom: "1px solid black", width: "75%" }}>
                            </div>
                        </div>







                    </div>



                </div>
            </div> */}
            <Frontpage />
            <div className='question-paper-display-container' id="pdf" >


                {/* questions start here  */}

                {/* first qp starts here  */}
                <div className='question-paper-display'>
                    <div className="second-page-body" >
                        <h3 style={{ textAlign: "center" }}>Section -A</h3>
                        <div className="question-body-main" >
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>I</b>
                                    <b style={{ textAlign: "left" }}>Four alternatives are given for each of the following question/ incomplete <br></br>statements choose the correct alternative  and write the complete answer <br></br> along with the correctoption for question numbers 1 to 20</b>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginTop: "45px" }}>
                                <b>20x1=20</b>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>1)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>2)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>3)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>4)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>5)</b>
                                    <b>Find the picture and choose the correct answer </b>
                                </div>
                                <div>
                                    <img src="../Images/mcq.jpg" className='mcq-img' alt='' />
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) School
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Hospital
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) Gound
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) Home
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>

                        </div>
                        <br />
                    </div>
                    <div className='page-footer'>
                        <div>8th Std. English QP</div>
                        <div>1</div>
                    </div>
                </div>

                {/* second page starts here  */}

                <div className='question-paper-display'>
                    <div className="second-page-body" >
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>6)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>7)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>8)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>9)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>10)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>11)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>12)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='page-footer'>
                        <div>8th Std. English QP</div>
                        <div>2</div>
                    </div>
                </div>

                {/* third page start here  */}

                <div className='question-paper-display'>
                    <div className="second-page-body" >
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>13)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>14)</b>
                                    <b>Find the picture and choose the correct answer </b>
                                </div>
                                <div>
                                    <img src="../Images/mcq.jpg" className='mcq-img' alt='' />
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) School
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Hospital
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) Gound
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) Home
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>

                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>15)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>16)</b>
                                    <b>Find the picture and choose the correct answer </b>
                                </div>
                                <div>
                                    <img src="../Images/mcq.jpg" className='mcq-img' alt='' />
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) School
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Hospital
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) Gound
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) Home
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>

                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>17)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='page-footer'>
                        <div>8th Std. English QP</div>
                        <div>3</div>
                    </div>
                </div>
                {/* fourth page starts here  */}

                <div className='question-paper-display'>
                    <div className="second-page-body" >
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>18)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>19)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) Red
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Purple
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) blue
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) yellow
                                    </div>
                                </Row>

                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>20)</b>
                                    <b>Find the picture and choose the correct answer </b>
                                </div>
                                <div>
                                    <img src="../Images/mcq.jpg" className='mcq-img' alt='' />
                                </div>
                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        a) School
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        b) Hospital
                                    </div>
                                </Row>

                                <Row>
                                    <div className='col-6 mb-3 d-flex'>
                                        c) Gound
                                    </div>
                                    <div className='col-6 mb-3 d-flex'>
                                        d) Home
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section'>
                                        <div className='ans'>Answer: </div>
                                        <div className='ans-box'></div>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>

                        </div>
                        <br />
                        <h3 style={{ textAlign: "center" }}>Section -B</h3>
                        <div className="question-body-main" >
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>II</b>
                                    <b style={{ textAlign: "left" }}> Write the folloring answer in 2-3 sentence from 21 to 25</b>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginTop: "0px" }}>
                                <b>5x2=10</b>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>21)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>22)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='page-footer'>
                        <div>8th Std. English QP</div>
                        <div>4</div>
                    </div>
                </div>

                {/* fifth page starts here  */}

                <div className='question-paper-display'>
                    <div className="second-page-body" >
                    <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>23)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>24)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>25)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <h3 style={{ textAlign: "center" }}>Section -C</h3>
                        <div className="question-body-main" >
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>III</b>
                                    <b style={{ textAlign: "left" }}> Write the folloring answer in 4-5 sentence from 26 to 27</b>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginTop: "0px" }}>
                                <b>3x2=6</b>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>26)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>27)</b>
                                    <b>What is the color of apple? What is the color of apple?</b>
                                </div>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='page-footer'>
                        <div>8th Std. English QP</div>
                        <div>5</div>
                    </div>
                </div>

                 {/* sixth page starts here  */}

                 <div className='question-paper-display'>
                    <div className="second-page-body" >
                        <h3 style={{ textAlign: "center" }}>Section -D</h3>
                        <div className="question-body-main" >
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>IV</b>
                                    <b style={{ textAlign: "left" }}> Write the Letter in 8-10 sentence.</b>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginTop: "0px" }}>
                                <b>4x1=4</b>
                            </div>
                        </div>
                        <br />
                        <div className="question-body">
                            <div>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <b>28)</b>
                                    <b>Write the Permission Letter from your Parents to Go on a School Trip</b>
                                </div>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='ans-section-lg'>
                                        <div className='ans-line'></div>
                                    </div>
                                </Row>
                                <Row>
                                        <div className='ans-line' style={{padding:"10px 0"}}></div>
                                </Row>
                               {/* <br /> */}
                            </div>
                        </div>
                       
                    </div>
                    <div className='page-footer'>
                        <div>8th Std. English QP</div>
                        <div>6</div>
                    </div>
                </div>



            </div>
        </div>

    )
}

export default QuestionPaper;
