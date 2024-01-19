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

const QuestionPaper = () => {

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



    const [confirm, setConfirm] = useState("")
    const [before, setBefore] = useState("false")

    return (
        <div>
    
            {before ? (<>
                <div className='question-paper-display' id="pdf">

                    {/* logo header  */}
                    <div className="question-paper-display-header" >
                        <div>
                            <img src='../images/logo.png' style={{ width: "100px", height: "4rem" }} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: "24px" }}>Karnataka School Examinaion</h2>
                            {/* <h5>
                                Examination Link
                            </h5> */}
                            <h5 style={{textAlign:"center"}}>
                                FA-1
                            </h5>
                        </div>

                        <div >
                            <p style={{ width: "100px", height: "4rem", textAlign: "right", color: "white" }}>1</p>
                        </div>


                    </div>

                    {/* Suject and more section  */}
                    <div className='subject-details-section'>
                        <div className="details-container" >
                            <div>
                                <div><b>Subject : English</b></div>
                            </div>
                            <div>
                                <div style={{ textAlign: "right" }}><b>Grade : V</b></div>
                            </div>
                        </div>
                        <div className="details-container">
                            <div>
                                <div>
                                    <b>Date : ----------------------------</b>
                                </div>
                            </div>
                            <div>
                                <div style={{ textAlign: "right" }}><b>Marks : 40</b></div>
                            </div>
                        </div>
                        <div className="details-container">
                            <div>
                                <div>
                                    {/* <b>Date : ----------------------------</b> */}
                                </div>
                            </div>
                            <div>
                                <div style={{ textAlign: "right" }}> <b>Time : 2 Hours</b></div>
                            </div>
                        </div>
                    </div>

                    {/* Instruction */}
                    <div className='instruction-container'>
                        <div className='instruction-display'>
                            <div>
                                <p style={{ textAlign: "left" }}><b>Instruction:</b></p>
                                <ul>
                                    <li>Read the question paper carefully</li>
                                    <li>Read the question paper carefully</li>
                                    <li>Read the question paper carefully</li>
                                    <li>Read the question paper carefully</li>
                                </ul>
                            </div></div>
                    </div>


                    {/* questions start here  */}
                    <div className='question-starts'>
                        <div className='first-page-question-body'>
                            <div className="question-body" >
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <b>I</b>
                                        <b style={{ textAlign: "left" }}>Four alternatives are given for each of the following question/ incomplete <br></br>statements choose the correct alternative  and write the complete answer <br></br> along with the correctoption for question numbers 1 to 16</b>
                                    </div>
                                </div>
                                <div style={{ display: "flex", marginTop: "45px" }}>
                                    <b>1x16 =16</b>
                                </div>
                            </div>
                            <br />
                            <div className="question-body" >
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>1)</p>
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
                                </div>
                            </div>
                            <div className="question-body" >
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>2)</p>
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
                                </div>
                            </div>
                            <div className="question-body" >
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>3)</p>
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
                                </div>
                            </div>
                            <div className="question-body" >
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>4)</p>
                                        <b>What is the color of apple?</b>
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
                                </div>
                            </div>
                            <div className="question-body" >
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>5)</p>
                                        <b>What is the color of apple?</b>
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
                                </div>
                            </div>
                        </div>
                        <div className="page-footer" >
                            <div>8th FL English QP</div>
                            <div>1</div>
                        </div>
                    </div>

                    {/* second page starts here  */}

                    <div className='question-paper-display'>
                        <div className="second-page-body" >
                          
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>6)</p>
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

                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>7)</p>
                                        <b>What is the color of apple?</b>
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
                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>8)</p>
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
                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>9)</p>
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
                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>10)</p>
                                        <b>What is the color of apple?</b>
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
                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>11)</p>
                                        <b>What is the color of apple?</b>
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
                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>12)</p>
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

                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>13)</p>
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

                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>14)</p>
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

                                </div>

                            </div>
                            {/* <br /><br /><br /> */}
                        </div>
                        <div className='page-footer'>
                            <div>8th FL English QP</div>
                            <div>2</div>
                        </div>
                    </div>

                    {/* third page start here  */}
                    <div className='question-paper-display'>
                        <div className='second-page-body'>


                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>15)</p>
                                        <b>What is the color of apple?</b>
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
                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>16)</p>
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
                                </div>

                            </div>
                            {/* <br /> */}
                            <div className="question-body" >
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <b>II</b>
                                        <b style={{ textAlign: "left" }}>Four alternatives are given for each of the following question/ incomplete statements choose the correct alternative  and write the complete answer along with the correctoption for question numbers 1 to 16</b>
                                    </div>
                                </div>
                                <div style={{ display: "flex", marginTop: "45px" }}>
                                    <b>1x16 =16</b>
                                </div>
                            </div>
                            <br />
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>17)</p>
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
                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>18)</p>
                                        <b>What is the color of apple?</b>
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
                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>19)</p>
                                        <b>What is the color of apple?</b>
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
                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>20)</p>
                                        <b>What is the color of apple?</b>
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
                                </div>
                            </div>
                            {/* <br /> */}
                            <div className="question-body" >
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <b>III</b>
                                        <b style={{ textAlign: "left" }}>Four alternatives are given for each of the following question/ incomplete statements choose the correct alternative answer along with the correctoption for question numbers 1 to 16</b>
                                    </div>
                                </div>
                                <div style={{ display: "flex", marginTop: "45px" }}>
                                    <b>1x16 =16</b>
                                </div>
                            </div>
                            <br />
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>21)</p>
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
                                </div>

                            </div>
                        </div>
                        <div className='page-footer '>
                            <div>8th FL English QP</div>
                            <div>3</div>
                        </div>
                    </div>

                    {/* fourth page starts here  */}
                    <div className='question-paper-display'>
                        <div className='second-page-body'>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>22)</p>
                                        <b>What is the color of apple?</b>
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
                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>23)</p>
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

                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>24)</p>
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

                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>25)</p>
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

                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>26)</p>
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

                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>27)</p>
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

                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>28)</p>
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

                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>29)</p>
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

                                </div>

                            </div>
                            <div className="question-body">
                                <div>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <p>30)</p>
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

                                </div>

                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 10px" }}>
                            <div>8th FL English QP</div>
                            <div>4</div>
                        </div>
                    </div>

                    <div className='qp-end-buttons'>
                        <div>
                            <a href="/blueprint"><Button className='edit-button' >Back</Button></a>
                        </div>

                        <div>
                            <Button className='Add-button'>Save as Draft</Button>
                        </div>

                        <div>
                            <Button className='edit-button' onClick={() => {
                                setBefore(false)
                                setConfirm(true)
                            }}>Confirm</Button>
                        </div>
                    </div>
                </div>
            </>) : (<>
                {confirm ? (<>

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

                    <div className='question-paper-display' id="pdf">

                        {/* logo header  */}
                        <div className="question-paper-display-header" >
                            <div>
                                <img src='../images/logo.png' style={{ width: "100px", height: "4rem" }} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: "24px" }}>Karnataka School Examinaion</h2>
                                {/* <h5>
                                    Examination Link
                                </h5> */}
                                <h5 style={{textAlign:"center"}}>
                                    FA-1
                                </h5>
                            </div>

                            <div >
                                <p style={{ width: "100px", height: "4rem", textAlign: "right", color: "white" }}>1</p>
                            </div>


                        </div>

                        {/* Suject and more section  */}
                        <div className='subject-details-section'>
                            <div className="details-container" >
                                <div>
                                    <div><b>Subject : English</b></div>
                                </div>
                                <div>
                                    <div style={{ textAlign: "right" }}><b>Grade : V</b></div>
                                </div>
                            </div>
                            <div className="details-container">
                                <div>
                                    <div>
                                        <b>Date : ----------------------------</b>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ textAlign: "right" }}><b>Marks : 40</b></div>
                                </div>
                            </div>
                            <div className="details-container">
                                <div>
                                    <div>
                                        {/* <b>Date : ----------------------------</b> */}
                                    </div>
                                </div>
                                <div>
                                    <div style={{ textAlign: "right" }}> <b>Time : 2 Hours</b></div>
                                </div>
                            </div>
                        </div>

                        {/* Instruction */}
                        <div className='instruction-container'>
                            <div className='instruction-display'>
                                <div>
                                    <p style={{ textAlign: "left" }}><b>Instruction:</b></p>
                                    <ul>
                                        <li>Read the question paper carefully</li>
                                        <li>Read the question paper carefully</li>
                                        <li>Read the question paper carefully</li>
                                        <li>Read the question paper carefully</li>
                                    </ul>
                                </div></div>
                        </div>


                        {/* questions start here  */}
                        <div className='question-starts'>
                            <div className='first-page-question-body'>
                                <div className="question-body" >
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <b>I</b>
                                            <b style={{ textAlign: "left" }}>Four alternatives are given for each of the following question/ incomplete <br></br>statements choose the correct alternative  and write the complete answer <br></br> along with the correctoption for question numbers 1 to 16</b>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "45px" }}>
                                        <b>1x16 =16</b>
                                    </div>
                                </div>
                                <br />
                                <div className="question-body" >
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>1)</p>
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
                                    </div>
                                </div>
                                <div className="question-body" >
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>2)</p>
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
                                    </div>
                                </div>
                                <div className="question-body" >
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>3)</p>
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
                                    </div>
                                </div>
                                <div className="question-body" >
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>4)</p>
                                            <b>What is the color of apple?</b>
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
                                    </div>
                                </div>
                                <div className="question-body" >
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>5)</p>
                                            <b>What is the color of apple?</b>
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
                                    </div>
                                </div>
                            </div>
                            <div className="page-footer" >
                                <div>8th FL English QP</div>
                                <div>1</div>
                            </div>
                        </div>

                        {/* second page starts here  */}

                        <div className='question-paper-display'>
                            <div className="second-page-body" >

                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>6)</p>
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

                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>7)</p>
                                            <b>What is the color of apple?</b>
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
                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>8)</p>
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
                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>9)</p>
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
                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>10)</p>
                                            <b>What is the color of apple?</b>
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
                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>11)</p>
                                            <b>What is the color of apple?</b>
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
                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>12)</p>
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

                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>13)</p>
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

                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>14)</p>
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

                                    </div>

                                </div>
                                {/* <br /><br /><br /> */}
                            </div>
                            <div className='page-footer'>
                                <div>8th FL English QP</div>
                                <div>2</div>
                            </div>
                        </div>

                        {/* third page start here  */}
                        <div className='question-paper-display'>
                            <div className='second-page-body'>
                                {/* <div className="question-body">
            <div>
                <div style={{ display: "flex", gap: "12px" }}>
                    <p>14)</p>
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

            </div>

        </div> */}
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>15)</p>
                                            <b>What is the color of apple?</b>
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
                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>16)</p>
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
                                    </div>

                                </div>
                                {/* <br /> */}
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <b>II</b>
                                            <b style={{ textAlign: "left" }}>Four alternatives are given for each of the following question/ incomplete statements choose the correct alternative  and write the complete answer along with the correctoption for question numbers 21 to 24</b>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "45px" }}>
                                        <b>2x4 =8</b>
                                    </div>
                                </div>
                                <br />
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>17)</p>
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
                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>18)</p>
                                            <b>What is the color of apple?</b>
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
                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>19)</p>
                                            <b>What is the color of apple?</b>
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
                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>20)</p>
                                            <b>What is the color of apple?</b>
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
                                    </div>
                                </div>
                                {/* <br /> */}
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <b>III</b>
                                            <b style={{ textAlign: "left" }}>Four alternatives are given for each of the following question/ incomplete statements choose the correct alternative  and write the complete answer along with the correctoption for question numbers 21 to 24</b>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "45px" }}>
                                        <b>4x4 =16</b>
                                    </div>
                                </div>
                                <br />
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>21)</p>
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
                                    </div>

                                </div>
                            </div>
                            <div className='page-footer '>
                                <div>8th FL English QP</div>
                                <div>3</div>
                            </div>
                        </div>

                        {/* fourth page starts here  */}
                        <div className='question-paper-display'>
                            <div className='second-page-body'>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>22)</p>
                                            <b>What is the color of apple?</b>
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
                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>23)</p>
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

                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>24)</p>
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

                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>25)</p>
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

                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>26)</p>
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

                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>27)</p>
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

                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>28)</p>
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

                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>29)</p>
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

                                    </div>

                                </div>
                                <div className="question-body">
                                    <div>
                                        <div style={{ display: "flex", gap: "12px" }}>
                                            <p>30)</p>
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

                                    </div>

                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 10px" }}>
                                <div>8th FL English QP</div>
                                <div>4</div>
                            </div>
                        </div>

                        <div className='qp-end-buttons'>
                            <div>
                                <Button className='edit-button' onClick={() => { navigate('/blueprint') }}>Back</Button>
                            </div>

                            <div>
                                <Button className='Add-button'>Save as Draft</Button>
                            </div>

                            <div>
                                <Button className='edit-button'>Generate</Button>
                            </div>
                        </div>
                    </div>

                </>) : (<></>)}
            </>)
            }


        </div>

    )
}

export default QuestionPaper;
