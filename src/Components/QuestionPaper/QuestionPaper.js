import React, { useState, useRef, useEffect } from "react";
import "../QuestionPaper/QuestionPaper.css";
// import "../BluePrint/BluePrint.css";
import { CiSaveDown2 } from "react-icons/ci";
import { LuPrinter } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Row,
  Modal,
} from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import parse from "html-react-parser";
import { Col } from "react-bootstrap";
import { IoCheckmark } from "react-icons/io5";
import Frontpage from "../fontpage/Frontpage";
import axios from "axios";
import swal from "sweetalert";

const QuestionPaper = ({ text }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");
  const { state } = useLocation();
  console.log("state", state);
  //get
  const [Questions, setQuestions] = useState([]);

  const getAllQuestions = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/admin/getAllQuestionAdmin/${user?._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status == 200) {
        setQuestions(res.data.success);
      }
    } catch (error) {
      console.log(error);
      return swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        button: "Ok!",
      });
    }
  };
  const navigate = useNavigate();

  const [show, setShow] = useState("");
  const aTagRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });
    const img = data.toDataURL("image/png");

    const imgProperties = pdf.getImageProperties(img);

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Question_Paper.pdf");
  };
  useEffect(() => {
    getAllQuestions();
  }, []);
  console.log(Questions);
  return (
    <div>
      <div className="top-header">
        <div className="top-nav-display">
          <CiSaveDown2
            style={{ width: "22px", height: "40px" }}
            onClick={createPDF}
          />
          <LuPrinter
            style={{ width: "22px", height: "40px" }}
            ref={aTagRef}
            onClick={handlePrint}
          />
          <IoMdShare
            style={{ width: "22px", height: "40px" }}
            onClick={() => {
              setShow(true);
            }}
          />
        </div>
        {show ? (
          <>
            <div className="share-button">
              <div>
                <a href={"https://www.whatsapp.com/"}>
                  <IoLogoWhatsapp style={{ width: "25px", height: "35px" }} />
                </a>
              </div>
              <di>
                <a href={"https://www.gmail.com/"}>
                  <MdOutlineEmail style={{ width: "25px", height: "35px" }} />
                </a>
              </di>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      <Frontpage />
      <div className="question-paper-display-container" id="pdf">
        {/* questions start here  */}

        {/* first qp starts here  */}

        <div className="question-paper-display">
          <div className="second-page-body">
            <h3 style={{ textAlign: "center" }}>Section A</h3>
            <div className="question-body-main">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>Q 1</b>
                  <b style={{ textAlign: "left" }}>Types of Question</b>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "45px" }}>
                <b>20*1=20</b>
              </div>
            </div>
            <br />
            {Questions?.filter((ele) => {
              return (
                ele.Board == state.Board &&
                ele.Medium == state.Medium &&
                ele.Class == state.Class &&
                ele.Sub_Class == state.Sub_Class &&
                ele.Subject == state.Subject
              );
            })?.map((item, i) => {
              return (
                <div className="question-body mt-2">
                  <div>
                    <div style={{ display: "flex", gap: "12px" }} key={i}>
                      <b>{i + 1}</b>
                      <b> {item?.Question ? parse(item?.Question) : ""}</b>
                    </div>
                    {item?.Image ? (
                      <div>
                        <img
                          src={`http://localhost:8000/Questions/${item?.Image}`}
                          className="mcq-img"
                          alt=""
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    <Row>
                      <div className="col-6 mb-3 d-flex">
                        {item?.Option_1 ? (
                          <>
                            {" "}
                            a) &nbsp;
                            {item?.Option_1 ? parse(item?.Option_1) : ""}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="col-6 mb-3 d-flex">
                        {item?.Option_2 ? (
                          <>
                            b) &nbsp;
                            {item?.Option_2 ? parse(item?.Option_2) : ""}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </Row>

                    <Row>
                      <div className="col-6 mb-3 d-flex">
                        {item?.Option_3 ? (
                          <>
                            {" "}
                            c) &nbsp;{" "}
                            {item?.Option_3 ? parse(item?.Option_3) : ""}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="col-6 mb-3 d-flex">
                        {item?.Option_4 ? (
                          <>
                            {" "}
                            d) &nbsp;
                            {item?.Option_4 ? parse(item?.Option_4) : ""}
                          </>
                        ) : (
                          <></>
                        )}
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
                </div>
              );
            })}
          </div>
          <br />
          <div className="page-footer">
            <div>8th Std. English QP</div>
            <div>1</div>
          </div>
        </div>

        {/* second page starts here  */}

        {/* <div className="question-paper-display">
          <div className="second-page-body">
            <div className="question-body">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>6)</b>
                  <b>What is the color of apple? What is the color of apple?</b>
                </div>
                <Row>
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
          <div className="page-footer">
            <div>8th Std. English QP</div>
            <div>2</div>
          </div>
        </div> */}

        {/* third page start here  */}

        {/* <div className="question-paper-display">
          <div className="second-page-body">
            <div className="question-body">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>13)</b>
                  <b>What is the color of apple? What is the color of apple?</b>
                </div>
                <Row>
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <img src="../Images/mcq.jpg" className="mcq-img" alt="" />
                </div>
                <Row>
                  <div className="col-6 mb-3 d-flex">a) School</div>
                  <div className="col-6 mb-3 d-flex">b) Hospital</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) Gound</div>
                  <div className="col-6 mb-3 d-flex">d) Home</div>
                </Row>
                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <img src="../Images/mcq.jpg" className="mcq-img" alt="" />
                </div>
                <Row>
                  <div className="col-6 mb-3 d-flex">a) School</div>
                  <div className="col-6 mb-3 d-flex">b) Hospital</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) Gound</div>
                  <div className="col-6 mb-3 d-flex">d) Home</div>
                </Row>
                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
          <div className="page-footer">
            <div>8th Std. English QP</div>
            <div>3</div>
          </div>
        </div> */}
        {/* fourth page starts here  */}

        {/* <div className="question-paper-display">
          <div className="second-page-body">
            <div className="question-body">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>18)</b>
                  <b>What is the color of apple? What is the color of apple?</b>
                </div>
                <Row>
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <div className="col-6 mb-3 d-flex">a) Red</div>
                  <div className="col-6 mb-3 d-flex">b) Purple</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) blue</div>
                  <div className="col-6 mb-3 d-flex">d) yellow</div>
                </Row>

                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
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
                  <img src="../Images/mcq.jpg" className="mcq-img" alt="" />
                </div>
                <Row>
                  <div className="col-6 mb-3 d-flex">a) School</div>
                  <div className="col-6 mb-3 d-flex">b) Hospital</div>
                </Row>

                <Row>
                  <div className="col-6 mb-3 d-flex">c) Gound</div>
                  <div className="col-6 mb-3 d-flex">d) Home</div>
                </Row>
                <Row>
                  <div className="ans-section">
                    <div className="ans">Answer: </div>
                    <div className="ans-box"></div>
                    <div className="ans-line"></div>
                  </div>
                </Row>
              </div>
            </div>
            <br />
            <h3 style={{ textAlign: "center" }}>Section -B</h3>
            <div className="question-body-main">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>II</b>
                  <b style={{ textAlign: "left" }}>
                    {" "}
                    Write the folloring answer in 2-3 sentence from 21 to 25
                  </b>
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
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
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
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
          <div className="page-footer">
            <div>8th Std. English QP</div>
            <div>4</div>
          </div>
        </div> */}

        {/* fifth page starts here  */}

        {/* <div className="question-paper-display">
          <div className="second-page-body">
            <div className="question-body">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>23)</b>
                  <b>What is the color of apple? What is the color of apple?</b>
                </div>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
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
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
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
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
              </div>
            </div>
            <br />
            <h3 style={{ textAlign: "center" }}>Section -C</h3>
            <div className="question-body-main">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>III</b>
                  <b style={{ textAlign: "left" }}>
                    {" "}
                    Write the folloring answer in 4-5 sentence from 26 to 27
                  </b>
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
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
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
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
          <div className="page-footer">
            <div>8th Std. English QP</div>
            <div>5</div>
          </div>
        </div> */}

        {/* sixth page starts here  */}

        {/* <div className="question-paper-display">
          <div className="second-page-body">
            <h3 style={{ textAlign: "center" }}>Section -D</h3>
            <div className="question-body-main">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>IV</b>
                  <b style={{ textAlign: "left" }}>
                    {" "}
                    Write the Letter in 8-10 sentence.
                  </b>
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
                  <b>
                    Write the Permission Letter from your Parents to Go on a
                    School Trip
                  </b>
                </div>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row>
                <Row>
                  <div className="ans-line" style={{ padding: "10px 0" }}></div>
                </Row>
              </div>
            </div>
          </div>
          <div className="page-footer">
            <div>8th Std. English QP</div>
            <div>6</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default QuestionPaper;
