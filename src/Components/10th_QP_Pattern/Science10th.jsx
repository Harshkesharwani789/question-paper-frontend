import React, { useState } from 'react'
import { CiSaveDown2 } from "react-icons/ci";
import { LuPrinter } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Frontpage from '../fontpage/Frontpage';
import { Row, Table } from 'react-bootstrap';
function Science10th() {
    const [show, setShow] = useState("");
    return (
        // <div>
        //     <div className="top-header">
        //         <div className="top-nav-display">
        //             <CiSaveDown2
        //                 style={{ width: "22px", height: "40px" }}

        //             />
        //             <LuPrinter
        //                 style={{ width: "22px", height: "40px" }}

        //             />
        //             <IoMdShare
        //                 style={{ width: "22px", height: "40px" }}
        //                 onClick={() => {
        //                     setShow(!show);
        //                 }}
        //             />
        //         </div>
        //         {show ? (
        //             <>
        //                 <div className="share-button">
        //                     <div>
        //                         <a href={"https://www.whatsapp.com/"}>
        //                             <IoLogoWhatsapp style={{ width: "25px", height: "35px" }} />
        //                         </a>
        //                     </div>
        //                     <di>
        //                         <a href={"https://www.gmail.com/"}>
        //                             <MdOutlineEmail style={{ width: "25px", height: "35px" }} />
        //                         </a>
        //                     </di>
        //                 </div>
        //             </>
        //         ) : (
        //             <></>
        //         )}
        //     </div>
        //     <Frontpage />
        //     <div className='question-paper-display'>
        //         <div className='row p-2'>
        //             <div className='col-sm-1'>
        //                 l.
        //             </div>
        //             <div className='col-sm-9'>
        //                 <h6 style={{ textAlign: "justify fw-bold" }}>
        //                     A test consists of 6 multiple choice questions, each having 4
        //                     alternative answers of which only one is correct. The number of
        //                     ways, in which a candidate answers all six questions such that exactly four of the answers are correct, is
        //                 </h6>
        //             </div>
        //             <div className='col-sm-2'>
        //                 <p>10 x 1 = 10</p>
        //             </div>

        //         </div>

        //         <div>
        //             <ol>
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>How satisfied are you with our product or services?</span>
        //                     <div className="row">
        //                         <div className="col-sm-6">
        //                             (a) Very satisfied
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>How satisfied are you with our product or services?</span>
        //                     <div className="row">
        //                         <div className="col-sm-6">
        //                             (a) Very satisfied
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>How satisfied are you with our product or services?</span>
        //                     <div className="row">
        //                         <div className="col-sm-6">
        //                             (a) Very satisfied
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>How satisfied are you with our product or services?</span>
        //                     <div className="row">
        //                         <div className="col-sm-6">
        //                             (a) Very satisfied
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                     </div>
        //                 </li> 
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>How satisfied are you with our product or services?</span>
        //                     <div className="row">
        //                         <div className="col-sm-6">
        //                             (a) Very satisfied
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>How satisfied are you with our product or services?</span>
        //                     <div className="row">
        //                         <div className="col-sm-6">
        //                             (a) Very satisfied
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                     </div>
        //                 </li> 
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>How satisfied are you with our product or services?</span>
        //                     <div className="row">
        //                         <div className="col-sm-6">
        //                             (a) Very satisfied
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>How satisfied are you with our product or services?</span>
        //                     <div className="row">
        //                         <div className="col-sm-6">
        //                             (a) Very satisfied
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                     </div>
        //                 </li> 
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>How satisfied are you with our product or services?</span>
        //                     <div className="row">
        //                         <div className="col-sm-6">
        //                             (a) Very satisfied
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                         <div className="col-sm-6">
        //                             (c) Yet to form an opinion
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>
        //                         Will the CBSE Science previous year papers of Class 10 help students 
        //                         understand the question paper format?</span>                           
        //                 </li>
        //                 <li className='mb-3'>
        //                     <span className='fw-bold'>How satisfied are you with our product or services?</span>
        //                     <div className="">

        //                     </div>
        //                 </li>



        //             </ol>
        //         </div>

        //     </div>
        // </div>
        <>
            <div>
                <div>
                    {/* first page starts */}
                    <div className="page-starts">
                        <div className="question-paper-display">
                            <div className="englishqp-page-body">
                                <div>
                                    <h2>SCIENCE</h2>
                                    <h4>
                                        <b>Model Question Paper 2024-2025</b>
                                    </h4>
                                </div>

                                <div style={{ fontWeight: "bold" }}>
                                    <div className="time-and-marks">
                                        <div>Time : 3 hrs.</div>
                                        <div>Max.Marks : 100</div>
                                    </div>
                                    <b>
                                        <div className="ans-line mb-3 mt-2"></div>
                                    </b>
                                </div>
                                <main style={{ flex: "1" }}>
                                    <div className="question-body-main">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <b>I</b>
                                                <b style={{ textAlign: "left" }}>
                                                    {" "}
                                                    Choose the most appropriate answer from the given
                                                    options:
                                                </b>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <b>10 x 1 =10</b>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="question-body mb-1">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>1.</p>
                                                <p>India Followed Non- Alignment movement During</p>
                                            </div>
                                        </div>

                                        <Row>
                                            <div className="options mt-1">
                                                <div className="col-6 mb-3">a) Freedom movement</div>
                                                <div className="col-6 mb-3">b) Second World war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="options">
                                                <div className="col-6 mb-3">c) Bi-Polar World</div>
                                                <div className="col-6 mb-3">d) Indo- China war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="ans-section">
                                                <div className="ans">Answer: </div>
                                                <div className="ans-box"></div>
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-1">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>2.</p>
                                                <p>India Followed Non- Alignment movement During</p>
                                            </div>
                                        </div>

                                        <Row>
                                            <div className="options mt-1">
                                                <div className="col-6 mb-3">a) Freedom movement</div>
                                                <div className="col-6 mb-3">b) Second World war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="options">
                                                <div className="col-6 mb-3">c) Bi-Polar World</div>
                                                <div className="col-6 mb-3">d) Indo- China war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="ans-section">
                                                <div className="ans">Answer: </div>
                                                <div className="ans-box"></div>
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-1">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>3.</p>
                                                <p>India Followed Non- Alignment movement During</p>
                                            </div>
                                        </div>

                                        <Row>
                                            <div className="options mt-1">
                                                <div className="col-6 mb-3">a) Freedom movement</div>
                                                <div className="col-6 mb-3">b) Second World war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="options">
                                                <div className="col-6 mb-3">c) Bi-Polar World</div>
                                                <div className="col-6 mb-3">d) Indo- China war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="ans-section">
                                                <div className="ans">Answer: </div>
                                                <div className="ans-box"></div>
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-1">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>4.</p>
                                                <p>India Followed Non- Alignment movement During</p>
                                            </div>
                                        </div>

                                        <Row>
                                            <div className="options mt-1">
                                                <div className="col-6 mb-3">a) Freedom movement</div>
                                                <div className="col-6 mb-3">b) Second World war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="options">
                                                <div className="col-6 mb-3">c) Bi-Polar World</div>
                                                <div className="col-6 mb-3">d) Indo- China war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="ans-section">
                                                <div className="ans">Answer: </div>
                                                <div className="ans-box"></div>
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-1">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>5.</p>
                                                <p>India Followed Non- Alignment movement During</p>
                                            </div>
                                        </div>

                                        <Row>
                                            <div className="options mt-1">
                                                <div className="col-6 mb-3">a) Freedom movement</div>
                                                <div className="col-6 mb-3">b) Second World war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="options">
                                                <div className="col-6 mb-3">c) Bi-Polar World</div>
                                                <div className="col-6 mb-3">d) Indo- China war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="ans-section">
                                                <div className="ans">Answer: </div>
                                                <div className="ans-box"></div>
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-1">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>6.</p>
                                                <p>India Followed Non- Alignment movement During</p>
                                            </div>
                                        </div>

                                        <Row>
                                            <div className="options mt-1">
                                                <div className="col-6 mb-3">a) Freedom movement</div>
                                                <div className="col-6 mb-3">b) Second World war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="options">
                                                <div className="col-6 mb-3">c) Bi-Polar World</div>
                                                <div className="col-6 mb-3">d) Indo- China war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="ans-section">
                                                <div className="ans">Answer: </div>
                                                <div className="ans-box"></div>
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                </main>
                                <div className="footer-text">
                                    <footer>
                                        <div>[Turn over]</div>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* first page end */}

                    {/* second page starts */}
                    <div className="page-starts">
                        <div className="question-paper-display">
                            <div className="englishqp-page-body">
                                <header>
                                    <div className="pageno">2</div>
                                </header>
                                <main style={{ flex: "1" }}>
                                    <div className="question-body mb-1">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>7.</p>
                                                <p>India Followed Non- Alignment movement During</p>
                                            </div>
                                        </div>

                                        <Row>
                                            <div className="options mt-1">
                                                <div className="col-6 mb-3">a) Freedom movement</div>
                                                <div className="col-6 mb-3">b) Second World war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="options">
                                                <div className="col-6 mb-3">c) Bi-Polar World</div>
                                                <div className="col-6 mb-3">d) Indo- China war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="ans-section">
                                                <div className="ans">Answer: </div>
                                                <div className="ans-box"></div>
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-1">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>8. </p>
                                                <p>India Followed Non- Alignment movement During</p>
                                            </div>
                                        </div>

                                        <Row>
                                            <div className="options mt-1">
                                                <div className="col-6 mb-3">a) Freedom movement</div>
                                                <div className="col-6 mb-3">b) Second World war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="options">
                                                <div className="col-6 mb-3">c) Bi-Polar World</div>
                                                <div className="col-6 mb-3">d) Indo- China war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="ans-section">
                                                <div className="ans">Answer: </div>
                                                <div className="ans-box"></div>
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-1">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>9.</p>
                                                <p>India Followed Non- Alignment movement During</p>
                                            </div>
                                        </div>

                                        <Row>
                                            <div className="options mt-1">
                                                <div className="col-6 mb-3">a) Freedom movement</div>
                                                <div className="col-6 mb-3">b) Second World war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="options">
                                                <div className="col-6 mb-3">c) Bi-Polar World</div>
                                                <div className="col-6 mb-3">d) Indo- China war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="ans-section">
                                                <div className="ans">Answer: </div>
                                                <div className="ans-box"></div>
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-1">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>10.</p>
                                                <p>India Followed Non- Alignment movement During</p>
                                            </div>
                                        </div>

                                        <Row>
                                            <div className="options mt-1">
                                                <div className="col-6 mb-3">a) Freedom movement</div>
                                                <div className="col-6 mb-3">b) Second World war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="options">
                                                <div className="col-6 mb-3">c) Bi-Polar World</div>
                                                <div className="col-6 mb-3">d) Indo- China war</div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="ans-section">
                                                <div className="ans">Answer: </div>
                                                <div className="ans-box"></div>
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="question-body-main mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <b>11.</b>
                                                <b style={{ textAlign: "left" }}>
                                                    {" "}
                                                    Answer the following in a sentence each:
                                                </b>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <b>4 x 1 =4</b>
                                        </div>
                                    </div>
                                    <div className="question-body mb-2">
                                        <Table bordered>
                                            <thead>
                                                <tr>
                                                    <th colspan="2" >A</th>
                                                    <th colspan="2">B</th>
                                                    <th colspan="2">C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th >1</th>
                                                    <th>Age</th>
                                                    <th>a</th>
                                                    <th>Age</th>
                                                    <th>i</th>
                                                    <th>Age</th>
                                                </tr>
                                                <tr>
                                                    <th >2</th>
                                                    <th>Age</th>
                                                    <th>b</th>
                                                    <th>Age</th>
                                                    <th>ii</th>
                                                    <th>Age</th>
                                                </tr>
                                                <tr>
                                                    <th >3</th>
                                                    <th>Age</th>
                                                    <th>c</th>
                                                    <th>Age</th>
                                                    <th>iii</th>
                                                    <th>Age</th>
                                                </tr>
                                                <tr>
                                                    <th >4</th>
                                                    <th>Age</th>
                                                    <th>d</th>
                                                    <th>Age</th>
                                                    <th>iv</th>
                                                    <th>Age</th>
                                                </tr>
                                                <tr>
                                                    <th >5</th>
                                                    <th>Age</th>
                                                    <th>e</th>
                                                    <th>Age</th>
                                                    <th>v</th>
                                                    <th>Age</th>
                                                </tr>
                                                <tr>
                                                    <th >6</th>
                                                    <th>Age</th>
                                                    <th>f</th>
                                                    <th>Age</th>
                                                    <th>vi</th>
                                                    <th>Age</th>
                                                </tr>
                                            </tbody>

                                        </Table>
                                        <div>
                                            <b style={{ textAlign: "left" }}>
                                                {" "}
                                                Structure in Column "B" and Characteristic features inColumn 'C'
                                            </b>
                                        </div>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <b style={{ textAlign: "left" }}>
                                                    {" "}
                                                    Answer the following questions :
                                                </b>
                                                <b>7x1 = 7</b>
                                            </div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>12.</p>
                                                <p>How did Ellen express her love towards Lochinvar?</p>
                                            </div>
                                            <Row>
                                                <div className="ans-section mt-3">
                                                    <div className="ans-line"></div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>13.</p>
                                                <p>How did Ellen express her love towards Lochinvar?</p>
                                            </div>
                                            <Row>
                                                <div className="ans-section mt-3">
                                                    <div className="ans-line"></div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>14.</p>
                                                <p>How did Ellen express her love towards Lochinvar?</p>
                                            </div>
                                            <Row>
                                                <div className="ans-section mt-3">
                                                    <div className="ans-line"></div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>15.</p>
                                                <p>How did Ellen express her love towards Lochinvar?</p>
                                            </div>
                                            <Row>
                                                <div className="ans-section mt-3">
                                                    <div className="ans-line"></div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                    {/* <div className="question-body mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>16.</p>
                                                <p>How did Ellen express her love towards Lochinvar?</p>
                                            </div>
                                            <Row>
                                                <div className="ans-section mt-3">
                                                    <div className="ans-line"></div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>17.</p>
                                                <p>Who was Lochinvar?</p>
                                            </div>
                                            <Row>
                                                <div className="ans-section mt-3">
                                                    <div className="ans-line"></div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>18.</p>
                                                <p>What is the human body compared to</p>
                                            </div>
                                            <Row>
                                                <div className="ans-section mt-3">
                                                    <div className="ans-line"></div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div> */}
                                    {/* <div className="question-body mb-2 ">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>19.</p>
                                                <p>What is the human body compared to</p>
                                            </div>
                                            <Row>
                                                <div className="ans-section mt-3">
                                                    <div className="ans-line"></div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div> */}

                                </main>
                                <div className="footer-text">
                                    <footer>
                                        <div>[Turn over]</div>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second page end */}

                    {/* third page starts */}
                    <div className="page-starts">
                        <div className="question-paper-display">
                            <div className="englishqp-page-body">
                                <header>
                                    <div className="pageno">3</div>
                                </header>
                                <main style={{ flex: "1" }}>
                                    <div className="question-body ">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>16.</p>
                                                <p>What is the human body compared to</p>
                                            </div>
                                            <Row>
                                                <div className="ans-section mt-3">
                                                    <div className="ans-line"></div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>17.</p>
                                                <p>where were the first radio broadcasting?</p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>18.</p>
                                                <p>where were the first radio broadcasting?</p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div className='d-flex justify-content-between'>
                                            <b style={{ textAlign: "left" }}>
                                                {" "}
                                                Answer the following questions :
                                            </b>
                                            <b>16x2 = 32</b>
                                        </div>
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>19.</p>
                                                <p>Draw a neat diagram of a single stage rocket and label the parts.</p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4 " style={{ height: "250px" }}>
                                                {/* <div className="ans-line"></div> */}
                                            </div>
                                        </Row>
                                    </div>
                                    {/* <div className="question-body mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <p>24.</p>
                                                <p>Who was Lochinvar?</p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="question-body-main mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <b>III.</b>
                                                <b style={{ textAlign: "left" }}>
                                                    {" "}
                                                    Answer the following questions in 2 to 3 sentence each:
                                                </b>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <b>15 x 2 =30</b>
                                        </div>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>25. What is the opposite word of 'perfect'?</p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div> */}

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>20. Write the balance chemical equition for the following reaction : </p>
                                            </div>
                                            <ol type='i'>
                                                <li>powdered quartz is heated with powdered magnes</li>
                                                <li>powdered quartz is heated with powdered magnes</li>
                                            </ol>

                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>21. What is the opposite word of 'perfect'?</p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    22. According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div style={{ textAlign: "center" }} ><b>OR</b></div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    23. According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    24. According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>



                                </main>
                                <div className="footer-text">
                                    <footer>
                                        <div>[Turn over]</div>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third page end */}

                    {/* fourth page starts */}
                    <div className="page-starts">
                        <div className="question-paper-display">
                            <div className="englishqp-page-body">
                                <header>
                                    <div className="pageno">4</div>
                                </header>
                                <main style={{ flex: "1" }}>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    25. According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div style={{ textAlign: "center" }}><b>OR</b></div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    26. According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div style={{ textAlign: "center" }}><b>OR</b></div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="question-body">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    27. According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>28. </p>
                                                <p>
                                                    {" "}
                                                    Why does Gandhi say that Alexander' conquests cannot be
                                                    called moral actions?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>


                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>29. </p>
                                                <p className="m-1">
                                                    According to the poet, when is life seen in prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>



                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>30. </p>
                                                <p className="m-1">
                                                    According to the poet, when is life seen in prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>



                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>31. </p>
                                                <p className="m-1">
                                                    According to the poet, when is life seen in prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>



                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>32. </p>
                                                <p className="m-1">
                                                    According to the poet, when is life seen in prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>



                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>33. </p>
                                                <p className="m-1">
                                                    According to the poet, when is life seen in prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                </main>
                                <div className="footer-text">
                                    <footer>
                                        <div>[Turn over]</div>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fourth page end */}

                    {/* fifth page start */}
                    <div className="page-starts">
                        <div className="question-paper-display">
                            <div className="englishqp-page-body">
                                <header>
                                    <div className="pageno">5</div>
                                </header>
                                <main style={{ flex: "1" }}>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <p className="m-1">
                                                    34. According to the poet, when is life seen in
                                                    prefection?
                                                </p>

                                            </div>
                                        </div>
                                        <div className="question-body mb-1">
                                            <div>
                                                <div className="options">
                                                    a. Mg + O2 → MgO
                                                </div>
                                                <div className="options">b. Zn + H2 SO4→ZnSO4</div>
                                                <div className="options">
                                                    c. H2 + O2→H2O
                                                </div>
                                            </div>
                                            <p> According to the poet, when is life seen in
                                                prefection?</p>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line mb-3"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line mb-3"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line mb-3"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className='d-flex justify-content-between'>
                                        <b style={{ textAlign: "left" }}>
                                            {" "}
                                            Answer the following questions :
                                        </b>
                                        <b>5x3 = 15</b>
                                    </div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    35. According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    36.
                                                    <ol type='a'>
                                                        <li>
                                                            According to the poet, when is life seen in
                                                            prefection?
                                                        </li>
                                                        <li>
                                                            According to the poet, when is life seen in
                                                            prefection?
                                                        </li>
                                                    </ol>

                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>


                                    <div className="question-body">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    37. According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>  
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>38. </p>
                                                <p>
                                                    {" "}
                                                    Why does Gandhi say that Alexander' conquests cannot be
                                                    called moral actions?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div style={{textAlign:"center"}}> <b>OR</b></div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <p className="m-1">
                                                     According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                                {/* <div>1 + 3 = 4</div> */}
                                            </div>
                                        </div>
                                        <div className="question-body mb-1">
                                            <div>
                                                <div className="options">
                                                    a. Name the substance ‘X’ and write its formula.
                                                </div>
                                                <div className="options">b.Write the reaction of the substance ‘X’ named in</div>
                                                <div className="options">
                                                    c. Write the reaction of the substance ‘X’ named in
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line mb-3"></div>
                                            </div>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line mb-3"></div>
                                            </div>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line mb-3"></div>
                                            </div>
                                        </Row>
                                    </div>


                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>39. </p>
                                                <p className="m-1">
                                                    According to the poet, when is life seen in prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>


                                    {/* 
                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>30. </p>
                                                <p className="m-1">
                                                    According to the poet, when is life seen in prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>



                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>31. </p>
                                                <p className="m-1">
                                                    According to the poet, when is life seen in prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>



                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>32. </p>
                                                <p className="m-1">
                                                    According to the poet, when is life seen in prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div> */}



                                    {/* <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                }}
                                            >
                                                <p>33. </p>
                                                <p className="m-1">
                                                    According to the poet, when is life seen in prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div> */}


                                    {/* <div className="question-body-main mb-2">
                                        <div>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <b>V.</b>
                                                <b style={{ textAlign: "left" }}>
                                                    {" "}
                                                    Answer the question in about 8 to 10 points.
                                                </b>
                                            </div>
                                        </div>
                                    </div> */}



                               
                                </main>
                                <div className="footer-text">
                <footer>
                  <div>[Turn over]</div>
                </footer>
              </div>
                            </div>
                        </div>
                    </div>
                    {/* fifth page end */}
                       {/* Sixth page start */}
                       <div className="page-starts">
                        <div className="question-paper-display">
                            <div className="englishqp-page-body">
                                <header>
                                    <div className="pageno">6</div>
                                </header>
                                <main style={{ flex: "1" }}>

                                   

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                     According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <b style={{ textAlign: "left" }}>
                                            {" "}
                                            Answer the following questions :
                                        </b>
                                        <b>3x4 = 12</b>
                                    </div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    40. According to the poet, when is life seen in
                                                            prefection?
                                                    <ol type='a'>
                                                        <li>
                                                            According to the poet, 
                                                        </li>
                                                        <li>
                                                             when is life seen in
                                                            prefection?
                                                        </li>
                                                    </ol>

                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                    41.
                                                    <ol type='a'>
                                                        <li>
                                                        According to the poet, when is life seen in
                                                            prefection?
                                                        </li>
                                                        <li>
                                                        According to the poet, when is life seen in
                                                            prefection?
                                                        </li>
                                                      
                                                    </ol>

                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>


                                  
                                    <div style={{textAlign:"center"}}> <b>OR</b></div>
                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <p>
                                                  
                                                    <ol type='a'>
                                                        <li>
                                                        According to the poet, when is life seen in
                                                            prefection?
                                                        </li>
                                                        <li>
                                                        According to the poet, when is life seen in
                                                            prefection?
                                                        </li>
                                                      
                                                    </ol>

                                                </p>
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <p className="m-1">
                                                  42   
                                                </p>
                                                {/* <div>1 + 3 = 4</div> */}
                                            </div>
                                        </div>
                                        <div className="question-body mb-1">
                                            <div>
                                                <div className="options">
                                                    a. Name the substance ‘X’ and write its formula.
                                                </div>
                                                <div className="options">
                                                    b.Write the reaction of the substance ‘X’ named in
                                                </div>
                                                <div className="options">
                                                    <img
                                                    style={{width:"200px", height:"100px"}}
                                                    src='../exam.png'
                                                    alt=''
                                                    ></img>                                                  
                                                </div>
                                                <div className="options">
                                                    Write the reaction of the substance ‘X’ named in
                                                </div>
                                              
                                            </div>
                                           
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line mb-3"></div>
                                            </div>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line mb-3"></div>
                                            </div>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line mb-3"></div>
                                            </div>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line mb-3"></div>
                                            </div>
                                        </Row>
                                    </div>
                                </main>
                                <div className="footer-text">
                <footer>
                  <div>[Turn over]</div>
                </footer>
              </div>
                            </div>
                        </div>
                    </div>
                    {/* sixth page end */}
                       {/* seventh page start */}
                       <div className="page-starts">
                        <div className="question-paper-display">
                            <div className="englishqp-page-body">
                                <header>
                                    <div className="pageno">7</div>
                                </header>
                                <main style={{ flex: "1" }}>

                                   <div style={{textAlign:"center"}}><b>OR</b></div>

                                    <div className="question-body mb-2">
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                <ol>
                                                    <li>
                                                    <p>
                                                     According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                                    </li>
                                                    <li>
                                                    <p>
                                                     According to the poet, when is life seen in
                                                    prefection?
                                                </p>
                                                    </li>
                                                </ol>
                                              
                                            </div>
                                        </div>
                                        <Row>
                                            <div className="ans-section mt-3">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                            <div className="ans-section mt-4">
                                                <div className="ans-line"></div>
                                            </div>
                                        </Row>
                                    </div>
                                
                                </main>
                                {/* <div className="footer-text">
                <footer>
                  <div>[Turn over]</div>
                </footer>
              </div> */}
                            </div>
                        </div>
                    </div>
                    {/* seventh page end */}
                </div>
            </div>

        </>
    )
}

export default Science10th

