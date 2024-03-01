import React, { useState, useRef, useEffect } from "react";
import "../QuestionPaper/QuestionPaper.css";
// import "../BluePrint/BluePrint.css";
import { CiSaveDown2 } from "react-icons/ci";
import { LuPrinter } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { Button, Form, Row, Table } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import parse from "html-react-parser";
import Frontpage from "../fontpage/Frontpage";
import axios from "axios";
import swal from "sweetalert";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

const QuestionPaper = ({ text }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");
  const { state } = useLocation();
  console.log("state", state);
  //get
  const ViewTableCell = ({ value, onChange }) => {
    return <td>{value}</td>;
  };
  const [Questions, setQuestions] = useState([]);
  const getAllQuestions = async () => {
    try {
      const config = {
        url: "/admin/getQuestionByClasswise/" + user?._id,
        baseURL: "http://localhost:8000/api",
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          Board: state.Board,
          Medium: state.Medium,
          Class: state.Class,
          Sub_Class: state.Sub_Class,
          Subject: state.Subject,
        },
      };
      let res = await axios(config);
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
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });

    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const imgWidth = pdfWidth;
    const imgHeight = (imgProperties.height * imgWidth) / imgProperties.width;

    let position = 0;
    let remainingHeight = pdfHeight;
    // Adjust according to your requirement

    while (position < imgHeight) {
      pdf.addPage();
      pdf.addImage(img, "PNG", 0, -position, imgWidth, imgHeight);
      position += pdfHeight;
      remainingHeight -= pdfHeight;
    }

    pdf.save("Question_Paper.pdf");
  };

  useEffect(() => {
    if (state._id && token) {
      getAllQuestions();
    }
  }, [state, token]);
  let count = 1;
  let count2 = 1;
  let count3 = 1;
  const SectionArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const RomanAA = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  const lines = [
    <div className="col-md-12 ">
      <div className="do-sear mt-4">
        <p type="text" className="lined-input"></p>
      </div>
    </div>,
  ];
  const [ViewAnswer, setViewAnswer] = useState(false);

  // ///////
  const aTagRef = useRef(null);
  const handlePrint = () => {
    const printableContent =
      document.getElementById("printable-content").innerHTML;
    const originalContent = document.body.innerHTML;
    // Create a footer element with padding
    const footerContent = '<div style="padding-bottom: 50px;"></div>';
    // Replace the content of the body with the content of the printable section
    document.body.innerHTML = printableContent;
    // Print the content
    window.print();
    // Restore the original content
    document.body.innerHTML = originalContent;
  };
  const handlePrint1 = () => {
    const printableContent =
      document.getElementById("printable-content1").innerHTML;
    const originalContent = document.body.innerHTML;
    // Create a footer element with padding
    const footerContent = '<div style="padding-bottom: 50px;"></div>';
    // Replace the content of the body with the content of the printable section
    document.body.innerHTML = printableContent;
    // Print the content
    window.print();
    // Restore the original content
    document.body.innerHTML = originalContent;
  };
  const handlePrint2 = () => {
    // Get the printable content and store it
    const printableContent =
      document.getElementById("printable-content2").innerHTML;

    // Create a footer element with padding
    const footerContent = '<div style="padding-bottom: 50px;"></div>';

    // Store the original content of the body
    const originalContent = document.body.innerHTML;

    // Replace the content of the body with the printable content and the footer
    document.body.innerHTML = printableContent + footerContent;

    // Print the content
    window.print();

    // Restore the original content of the body
    document.body.innerHTML = originalContent;
  };

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  return (
    <div>
      <div className="top-header">
        <div className="top-nav-display">
          <CiSaveDown2
            style={{ width: "22px", height: "40px" }}
            onClick={createPDF}
          />
          {/* <LuPrinter
            style={{ width: "22px", height: "40px" }}
            ref={aTagRef}
            onClick={handlePrint}
          /> */}
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
      {/* <div className=" d-flex justify-content-end">
        <div className="col-sm-2">
          <div id="google_translate_element"></div>
        </div>
      </div> */}

      <div id="pdf">
        <div className="question-paper-display-container">
          <LuPrinter
            style={{ width: "22px", height: "40px" }}
            ref={aTagRef}
            onClick={handlePrint}
          />
          <div style={{ size: "A4" }} id="printable-content" class="print-area">
            <Frontpage data={state} />
            <div className="question-paper-display ">
              <div className="second-page-body">
                {state?.bluePrint?.TypesofQuestions?.map((ele1, a) => {
                  return (
                    <>
                      {/* <h3 style={{ textAlign: "center" }}>Section {SectionArr[a]}</h3> */}
                      
                      <div className="question-body-main">
                        <div>
                          <div style={{ display: "flex", gap: "12px" }}>
                            <b> {RomanAA[a++]}</b>

                            <b style={{ textAlign: "left" }}>
                              {ele1?.QAInstruction}
                            </b>
                          </div>

                        </div>
                        <div style={{ display: "flex", marginTop: "10px" }}>
                          <b>
                            {ele1?.NQA}x{ele1?.Mask}={ele1?.NQA * ele1?.Mask}
                          </b>
                        </div>
                      </div>
                      
                      {Questions?.filter(
                        (ele) => ele?.Types_Question === ele1?.QAType
                      )?.map((item, i) => {
                        if (i < Number(ele1?.NQA)) {
                          return (
                            <>
                              <div className="question-body">
                                {item?.Types_Question ===
                                "Multiple Choice Questions" ? (
                                  <div>
                                    <div
                                      style={{ display: "flex", gap: "12px" }}
                                      key={i}
                                    >
                                      <b>{count3++}</b>
                                      <b>
                                        {" "}
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </b>
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
                                            {item?.Option_1
                                              ? parse(item?.Option_1)
                                              : ""}
                                          </>
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                      <div className="col-6 mb-3 d-flex">
                                        {item?.Option_2 ? (
                                          <>
                                            b) &nbsp;
                                            {item?.Option_2
                                              ? parse(item?.Option_2)
                                              : ""}
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
                                            {item?.Option_3
                                              ? parse(item?.Option_3)
                                              : ""}
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
                                            {item?.Option_4
                                              ? parse(item?.Option_4)
                                              : ""}
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
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Fill in the Blanks Questions" ? (
                                  <>
                                    {item?.NumberOfLine == "2" ? (
                                      <>
                                        <div className="d-flex">
                                          <b>{count++}).</b>
                                          <p>
                                            {" "}
                                            {parse(
                                              `<div>${item?.input1}</div>`
                                            )}
                                          </p>
                                          <div className="ques-line"></div>
                                          <p>
                                            {" "}
                                            {parse(
                                              `<div>${item?.input2}</div>`
                                            )}
                                          </p>
                                          <div className="ques-line"></div>
                                          <p>
                                            {" "}
                                            {parse(
                                              `<div>${item?.input3}</div>`
                                            )}
                                          </p>
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                    {item?.NumberOfLine == "1" ? (
                                      <>
                                        <div className="d-flex">
                                          <b>{count++}.</b>
                                          <p>
                                            {" "}
                                            {parse(
                                              `<div>${item?.input1}</div>`
                                            )}
                                          </p>
                                          <div className="ques-line"></div>
                                          {item?.input2 ? (
                                            <>
                                              <p>
                                                {" "}
                                                {parse(
                                                  `<div>${item?.input2}</div>`
                                                )}
                                              </p>
                                            </>
                                          ) : (
                                            <></>
                                          )}

                                          <div className="ques-line"></div>
                                          <p>
                                            {" "}
                                            {parse(
                                              `<div>${item?.input3}</div>`
                                            )}
                                          </p>
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Recorrect the Answers Questions" ? (
                                  <>
                                    <div>
                                      <div className="d-flex">
                                        <b>{count++}).</b>{" "}
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </div>
                                      <div>
                                        {item?.NumberOfLine && (
                                          <>
                                            {Array.from(
                                              { length: item?.NumberOfLine },
                                              (_, index) => (
                                                <React.Fragment key={index}>
                                                  {lines.map((line, idx) => (
                                                    <React.Fragment key={idx}>
                                                      {line}
                                                    </React.Fragment>
                                                  ))}
                                                </React.Fragment>
                                              )
                                            )}
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}

                                {item?.Types_Question ===
                                "RelationShip Words Questions" ? (
                                  <>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="do-sear mt-2 d-flex">
                                          <b>{i + 1}). </b>
                                          <p>{item?.RealetionA}</p>
                                          <p>:</p>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="do-sear mt-2 d-flex">
                                          <p>{item?.RealetionB}</p>
                                          <p>::</p>
                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="do-sear mt-2 d-flex">
                                          <p>{item?.RealetionC}</p>
                                          <p>:</p>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="do-sear mt-2">
                                          <p
                                            className=""
                                            style={{
                                              borderBottom: "1px solid",
                                              marginTop: "45px",
                                              marginBottom: "0px",
                                            }}
                                          ></p>
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <div className="row">
                                        <div className="col-md-3">
                                          <div className="do-sear mt-2 d-flex">
                                            <label htmlFor=""> i)</label>
                                            <p>{item?.Option_1}</p>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="do-sear mt-2 d-flex">
                                            <label htmlFor=""> ii)</label>
                                            <p>{item?.Option_2}</p>
                                          </div>
                                        </div>

                                        <div className="col-md-3">
                                          <div className="do-sear mt-2 d-flex">
                                            <label htmlFor="">iii)</label>
                                            <p>{item?.Option_3}</p>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="do-sear mt-2 d-flex">
                                            <label htmlFor=""> iv)</label>
                                            <p>{item?.Option_4}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "One Word Question" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}.</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                      
                                    </div>
                                    <br/>
                                                <p>ಉತ್ತರ</p> 
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                      <br />
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}

                                {item?.Types_Question ===
                                "Two  Sentence Answer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                    </div>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                    {item?.orQuestion ? (
                                      <>
                                        <h5>(OR)</h5>
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    {item?.orQuestion ? (
                                      <>
                                        <div className="d-flex mt-2">
                                          <b>
                                            {item?.orQuestion
                                              ? parse(item?.orQuestion)
                                              : ""}
                                          </b>
                                        </div>
                                        <div className="d-flex mb-1">
                                          {item?.Image_1 ? (
                                            <>
                                              <span>a)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                          {item?.Image_2 ? (
                                            <>
                                              <span>b)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Two and three Sentence Answer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}.</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                     
                                    </div>
                                    <br />
                                      <p>ಉತ್ತರ:</p>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                    {item?.orQuestion ? (
                                      <>
                                        <h5>(OR)</h5>
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    {item?.orQuestion ? (
                                      <>
                                        <div className="d-flex mt-2">
                                          <b>
                                            {item?.orQuestion
                                              ? parse(item?.orQuestion)
                                              : ""}
                                          </b>
                                        </div>
                                        <div className="d-flex mb-1">
                                          {item?.Image_1 ? (
                                            <>
                                              <span>a)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                          {item?.Image_2 ? (
                                            <>
                                              <span>b)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Three and Four Sentence Answer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}.</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                      
                                    </div>
                                    <br />
                                      <p>ಉತ್ತರ:</p>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                    {item?.orQuestion ? (
                                      <>
                                        <h5>(OR)</h5>
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    {item?.orQuestion ? (
                                      <>
                                        <div className="d-flex mt-2">
                                          <b>
                                            {item?.orQuestion
                                              ? parse(item?.orQuestion)
                                              : ""}
                                          </b>
                                        </div>
                                        <div className="d-flex mb-1">
                                          {item?.Image_1 ? (
                                            <>
                                              <span>a)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                          {item?.Image_2 ? (
                                            <>
                                              <span>b)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Five and Six Sentence Answer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                    </div>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                    {item?.orQuestion ? (
                                      <>
                                        <h5>(OR)</h5>
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    {item?.orQuestion ? (
                                      <>
                                        <div className="d-flex mt-2">
                                          <b>
                                            {item?.orQuestion
                                              ? parse(item?.orQuestion)
                                              : ""}
                                          </b>
                                        </div>
                                        <div className="d-flex mb-1">
                                          {item?.Image_1 ? (
                                            <>
                                              <span>a)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                          {item?.Image_2 ? (
                                            <>
                                              <span>b)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Six Sentence Answer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                    </div>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                    {item?.orQuestion ? (
                                      <>
                                        <h5>(OR)</h5>
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    {item?.orQuestion ? (
                                      <>
                                        <div className="d-flex mt-2">
                                          <b>
                                            {item?.orQuestion
                                              ? parse(item?.orQuestion)
                                              : ""}
                                          </b>
                                        </div>
                                        <div className="d-flex mb-1">
                                          {item?.Image_1 ? (
                                            <>
                                              <span>a)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                          {item?.Image_2 ? (
                                            <>
                                              <span>b)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Seven Sentence Answer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                    </div>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                    {item?.orQuestion ? (
                                      <>
                                        <h5>(OR)</h5>
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    {item?.orQuestion ? (
                                      <>
                                        <div className="d-flex mt-2">
                                          <b>
                                            {item?.orQuestion
                                              ? parse(item?.orQuestion)
                                              : ""}
                                          </b>
                                        </div>
                                        <div className="d-flex mb-1">
                                          {item?.Image_1 ? (
                                            <>
                                              <span>a)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                          {item?.Image_2 ? (
                                            <>
                                              <span>b)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Eight Sentence Answer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                    </div>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                    {item?.orQuestion ? (
                                      <>
                                        <h5>(OR)</h5>
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    {item?.orQuestion ? (
                                      <>
                                        <div className="d-flex mt-2">
                                          <b>
                                            {item?.orQuestion
                                              ? parse(item?.orQuestion)
                                              : ""}
                                          </b>
                                        </div>
                                        <div className="d-flex mb-1">
                                          {item?.Image_1 ? (
                                            <>
                                              <span>a)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                          {item?.Image_2 ? (
                                            <>
                                              <span>b)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Ten Sentence Answer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                    </div>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "One Sentence Answer Question" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}.</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                      
                                    </div>
                                    <br/>
                                      <p>ಉತ್ತರ:</p>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                    {item?.orQuestion ? (
                                      <>
                                        <h5>(OR)</h5>
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    {item?.orQuestion ? (
                                      <>
                                        <div className="d-flex mt-2">
                                          <b>
                                            {item?.orQuestion
                                              ? parse(item?.orQuestion)
                                              : ""}
                                          </b>
                                        </div>
                                        <div className="d-flex mb-1">
                                          {item?.Image_1 ? (
                                            <>
                                              <span>a)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                          {item?.Image_2 ? (
                                            <>
                                              <span>b)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                    {item?.orQuestion ? (
                                      <>
                                        <h5>(OR)</h5>
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    {item?.orQuestion ? (
                                      <>
                                        <div className="d-flex mt-2">
                                          <b>
                                            {item?.orQuestion
                                              ? parse(item?.orQuestion)
                                              : ""}
                                          </b>
                                        </div>
                                        <div className="d-flex mb-1">
                                          {item?.Image_1 ? (
                                            <>
                                              <span>a)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                          {item?.Image_2 ? (
                                            <>
                                              <span>b)</span>
                                              <img
                                                src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                className="mcq-img"
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question === "Map Reading" ? (
                                  <>
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex mt-2">
                                        <b>{count++}).</b>
                                        <b>
                                          {item?.Answer
                                            ? parse(item?.Answer)
                                            : ""}
                                        </b>
                                      </div>
                                      <div>{ele1?.Mask}</div>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Objective Questions" ? (
                                  <>
                                    <div
                                      style={{ display: "flex", gap: "12px" }}
                                      key={i}
                                    >
                                      <b>{count3++}</b>
                                      <b>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </b>
                                    </div>
                                    <Row>
                                      <div className="col-6 mb-3 d-flex">
                                        {item?.Option_1 ? (
                                          <>
                                            {" "}
                                            a) &nbsp;
                                            {item?.Option_1
                                              ? parse(item?.Option_1)
                                              : ""}
                                          </>
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                      <div className="col-6 mb-3 d-flex">
                                        {item?.Option_2 ? (
                                          <>
                                            b) &nbsp;
                                            {item?.Option_2
                                              ? parse(item?.Option_2)
                                              : ""}
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
                                    {item?.ImageQ ? (
                                      <>
                                        <h4>(OR)</h4>
                                        <div>
                                          {item?.ImageQ ? (
                                            <>
                                              <b>Question Image:</b>
                                              <div>
                                                <img
                                                  src={`http://localhost:8000/Questions/${item?.ImageQ}`}
                                                  className="mcq-img"
                                                  alt=""
                                                />
                                              </div>
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                          <br />
                                          <b>Options :</b>
                                          <div className="d-flex mb-1">
                                            {item?.Image_1 ? (
                                              <>
                                                <span>a)</span>
                                                <img
                                                  src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                  className="mcq-img"
                                                  alt=""
                                                />
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                            {item?.Image_2 ? (
                                              <>
                                                <span>b)</span>
                                                <img
                                                  src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                  className="mcq-img"
                                                  alt=""
                                                />
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Complete the Poem" ? (
                                  <>
                                    <div
                                      style={{ display: "flex", gap: "12px" }}
                                      key={i}
                                    >
                                      <b>{count++}.</b>
                                      <b>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </b>
                                    </div>
                                    {item?.PoemSt ? (
                                      <>
                                        {item.NumberOfLine == "4" ? (
                                          <>
                                            <div className="">
                                              <div className="d-flex align-items-baseline mb-4">
                                                <span>{item?.PoemSt}</span>

                                                <div
                                                  className="mb-3 mt-2"
                                                  style={{
                                                    borderBottom: "1px solid",
                                                    width: "80%",
                                                  }}
                                                ></div>
                                              </div>
                                              <div className="ans-line mb-4"></div>
                                              <div className="ans-line mb-4 "></div>
                                              <div className="d-flex align-items-end">
                                                <div
                                                  className="mb-3 mt-2"
                                                  style={{
                                                    borderBottom: "1px solid",
                                                    width: "80%",
                                                  }}
                                                ></div>
                                                <span>{item?.PoemEnd}</span>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <> </>
                                        )}
                                        {item.NumberOfLine == "5" ? (
                                          <>
                                            <div className="">
                                              <div className="d-flex align-items-baseline mb-4">
                                                <span>{item?.PoemSt}</span>

                                                <div
                                                  className="mb-3 mt-2"
                                                  style={{
                                                    borderBottom: "1px solid",
                                                    width: "80%",
                                                  }}
                                                ></div>
                                              </div>
                                              <div className="ans-line mb-4"></div>
                                              <div className="ans-line mb-4 "></div>
                                              <div className="ans-line mb-4 "></div>
                                              <div className="d-flex align-items-end">
                                                <div
                                                  className="mb-3 mt-2"
                                                  style={{
                                                    borderBottom: "1px solid",
                                                    width: "80%",
                                                  }}
                                                ></div>
                                                <span>{item?.PoemEnd}</span>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <> </>
                                        )}
                                        {item.NumberOfLin == "6" ? (
                                          <>
                                            <div className="">
                                              <div className="d-flex align-items-baseline mb-4">
                                                <span>{item?.PoemSt}</span>

                                                <div
                                                  className="mb-3 mt-2"
                                                  style={{
                                                    borderBottom: "1px solid",
                                                    width: "80%",
                                                  }}
                                                ></div>
                                              </div>
                                              <div className="ans-line mb-4"></div>
                                              <div className="ans-line mb-4 "></div>
                                              <div className="ans-line mb-4 "></div>
                                              <div className="ans-line mb-4 "></div>
                                              <div className="d-flex align-items-end">
                                                <div
                                                  className="mb-3 mt-2"
                                                  style={{
                                                    borderBottom: "1px solid",
                                                    width: "80%",
                                                  }}
                                                ></div>
                                                <span>{item?.PoemEnd}</span>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <> </>
                                        )}
                                        {item.NumberOfLin == "7" ? (
                                          <>
                                            <div className="">
                                              <div className="d-flex align-items-baseline mb-4">
                                                <span>{item?.PoemSt}</span>

                                                <div
                                                  className="mb-3 mt-2"
                                                  style={{
                                                    borderBottom: "1px solid",
                                                    width: "80%",
                                                  }}
                                                ></div>
                                              </div>
                                              <div className="ans-line mb-4"></div>
                                              <div className="ans-line mb-4 "></div>
                                              <div className="ans-line mb-4 "></div>
                                              <div className="ans-line mb-4 "></div>
                                              <div className="ans-line mb-4 "></div>
                                              <div className="d-flex align-items-end">
                                                <div
                                                  className="mb-3 mt-2"
                                                  style={{
                                                    borderBottom: "1px solid",
                                                    width: "80%",
                                                  }}
                                                ></div>
                                                <span>{item?.PoemEnd}</span>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <> </>
                                        )}
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                    {item?.orQuestion ? (
                                      <>
                                        <h5>(OR)</h5>

                                        <div
                                          style={{
                                            display: "flex",
                                            gap: "12px",
                                          }}
                                          key={i}
                                        >
                                          <b>
                                            {item?.orQuestion
                                              ? parse(item?.orQuestion)
                                              : ""}
                                          </b>
                                        </div>

                                        {item?.orNumberOfLine ? (
                                          <>
                                            {item?.orNumberOfLine === "4" ? (
                                              <>
                                                <div className="">
                                                  <div className="d-flex align-items-end">
                                                    <p className="vi_0">
                                                      {item?.OrPoemSat}
                                                    </p>
                                                    <div className="ans-line mb-3 mt-2"></div>
                                                  </div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="d-flex align-items-end">
                                                    <div className="ans-line mb-3 mt-2"></div>
                                                    <p className="vi_0">
                                                      {item?.OrPoemEnd}
                                                    </p>
                                                  </div>
                                                </div>
                                              </>
                                            ) : (
                                              <> </>
                                            )}
                                            {item.NumberOfLine === "5" ? (
                                              <>
                                                <div className="">
                                                  <div className="d-flex align-items-end">
                                                    <p className="vi_0">
                                                      {item?.OrPoemSat}
                                                    </p>
                                                    <div className="ans-line mb-3 mt-2"></div>
                                                  </div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="d-flex align-items-end">
                                                    <div className="ans-line mb-3 mt-2"></div>
                                                    <p className="vi_0">
                                                      {item?.OrPoemEnd}
                                                    </p>
                                                  </div>
                                                </div>
                                              </>
                                            ) : (
                                              <> </>
                                            )}
                                            {item.NumberOfLin === "6" ? (
                                              <>
                                                <div className="">
                                                  <div className="d-flex align-items-end">
                                                    <p className="vi_0">
                                                      {item?.OrPoemSat}
                                                    </p>
                                                    <div className="ans-line mb-3 mt-2"></div>
                                                  </div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="d-flex align-items-end">
                                                    <div className="ans-line mb-3 mt-2"></div>
                                                    <p className="vi_0">
                                                      {item?.OrPoemEnd}
                                                    </p>
                                                  </div>
                                                </div>
                                              </>
                                            ) : (
                                              <> </>
                                            )}
                                            {item.NumberOfLin === "7" ? (
                                              <>
                                                <div className="">
                                                  <div className="d-flex align-items-end">
                                                    <p className="vi_0">
                                                      {item?.OrPoemSat}
                                                    </p>
                                                    <div className="ans-line mb-3 mt-2"></div>
                                                  </div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="ans-line mb-3 mt-2"></div>
                                                  <div className="d-flex align-items-end">
                                                    <div className="ans-line mb-3 mt-2"></div>
                                                    <p className="vi_0">
                                                      {item?.OrPoemEnd}
                                                    </p>
                                                  </div>
                                                </div>
                                              </>
                                            ) : (
                                              <> </>
                                            )}
                                          </>
                                        ) : (
                                          <></>
                                        )}
                                      </>
                                    ) : (
                                      <></>
                                    )}

                                    <div
                                      style={{ display: "flex", gap: "12px" }}
                                      key={i}
                                    >
                                      <b>
                                        {item?.orQuestion
                                          ? parse(item?.orQuestion)
                                          : ""}
                                      </b>
                                    </div>

                                    {item?.OrPoemSat ? (
                                      <>
                                        {item?.orNumberOfLine === "4" ? (
                                          <>
                                            <div className="">
                                              <div className="d-flex align-items-end">
                                                <p className="vi_0">
                                                  {item?.OrPoemSat}
                                                </p>
                                                <div className="ans-line mb-3 mt-2"></div>
                                              </div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="d-flex align-items-end">
                                                <div className="ans-line mb-3 mt-2"></div>
                                                <p className="vi_0">
                                                  {item?.OrPoemEnd}
                                                </p>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <> </>
                                        )}
                                        {item.NumberOfLine === "5" ? (
                                          <>
                                            <div className="">
                                              <div className="d-flex align-items-end">
                                                <p className="vi_0">
                                                  {item?.OrPoemSat}
                                                </p>
                                                <div className="ans-line mb-3 mt-2"></div>
                                              </div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="d-flex align-items-end">
                                                <div className="ans-line mb-3 mt-2"></div>
                                                <p className="vi_0">
                                                  {item?.OrPoemEnd}
                                                </p>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <> </>
                                        )}
                                        {item.NumberOfLin === "6" ? (
                                          <>
                                            <div className="">
                                              <div className="d-flex align-items-end">
                                                <p className="vi_0">
                                                  {item?.OrPoemSat}
                                                </p>
                                                <div className="ans-line mb-3 mt-2"></div>
                                              </div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="d-flex align-items-end">
                                                <div className="ans-line mb-3 mt-2"></div>
                                                <p className="vi_0">
                                                  {item?.OrPoemEnd}
                                                </p>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <> </>
                                        )}
                                        {item.NumberOfLin === "7" ? (
                                          <>
                                            <div className="">
                                              <div className="d-flex align-items-end">
                                                <p className="vi_0">
                                                  {item?.OrPoemSat}
                                                </p>
                                                <div className="ans-line mb-3 mt-2"></div>
                                              </div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="ans-line mb-3 mt-2"></div>
                                              <div className="d-flex align-items-end">
                                                <div className="ans-line mb-3 mt-2"></div>
                                                <p className="vi_0">
                                                  {item?.OrPoemEnd}
                                                </p>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <> </>
                                        )}
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                                <br />
                                {item?.Types_Question === "Letter Writting" ? (
                                  <>
                                    <div
                                      style={{ display: "flex", gap: "12px" }}
                                      key={i}
                                    >
                                      <b>{count3++}</b>
                                      <b>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </b>
                                    </div>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Situation UnderStatnding answer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}.</b>
                                      <b>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </b>
                                    
                                    </div>
                                    <br/>
                          <p>ಉತ್ತರ:</p>
                                    <div className="d-flex mb-1">
                                      {item?.Image_1 ? (
                                        <>
                                          <span>a)</span>
                                          <img
                                            src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                            className="mcq-img"
                                            alt=""
                                          />
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Image_2 ? (
                                        <>
                                          <span>b)</span>
                                          <img
                                            src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                            className="mcq-img"
                                            alt=""
                                          />
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                    <br/>

                                    <div>
                                      {item?.PassiveQuesion?.length ? (<>
                                        {item?.PassiveQuesion?.map(
                                        (item1, index) => {
                                          return (
                                            <div>
                                              <p>
                                                {item1?.question
                                                  ? parse(item1?.question)
                                                  : ""}
                                              </p>
                                              {lines}
                                              {lines}
                                            </div>
                                          );
                                        }
                                      )}
                                      </>):(<></>)}
                                      
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Match the Following Questions" ? (
                                  <>
                                    <div className="question-body mb-2">
                                      <b>{count++}.)</b>
                                      <Table bordered>
                                        <thead>
                                          <tr>
                                            <th colspan="2">PART-A</th>
                                            <th colspan="2">PART-B</th>
                                            {item?.Part_C1 ? (
                                              <th colspan="2">PART-C</th>
                                            ) : (
                                              ""
                                            )}
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th>1</th>
                                            <th>{item?.Part_A1}</th>
                                            <th>a</th>
                                            <th>{item?.Part_B1}</th>
                                            {item?.Part_C1 ? (
                                              <>
                                                <th>i</th>
                                                <th>{item?.Part_C1}</th>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                          </tr>
                                          <tr>
                                            <th>2</th>
                                            <th>{item?.Part_A2}</th>
                                            <th>b</th>
                                            <th>{item?.Part_B2}</th>
                                            {item?.Part_C2 ? (
                                              <>
                                                <th>i</th>
                                                <th>{item?.Part_C2}</th>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                          </tr>
                                          <tr>
                                            <th>3</th>
                                            <th>{item?.Part_A3}</th>
                                            <th>c</th>
                                            <th>{item?.Part_B3}</th>
                                            {item?.Part_C3 ? (
                                              <>
                                                <th>iii</th>
                                                <th>{item?.Part_C3}</th>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                          </tr>
                                          <tr>
                                            <th>4</th>
                                            <th>{item?.Part_A4}</th>
                                            <th>d</th>
                                            <th>{item?.Part_B4}</th>
                                            {item?.Part_C4 ? (
                                              <>
                                                <th>iv</th>
                                                <th>{item?.Part_C4}</th>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                          </tr>
                                          <tr>
                                            <th>5</th>
                                            <th>{item?.Part_A5}</th>
                                            <th>e</th>
                                            <th>{item?.Part_B5}</th>
                                            {item?.Part_C5 ? (
                                              <>
                                                <th>v</th>
                                                <th>{item?.Part_C5}</th>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                          </tr>

                                          <tr>
                                            {item?.Part_A6 ? (
                                              <>
                                                <th>6</th>
                                                <th>{item?.Part_A6}</th>
                                              </>
                                            ) : (
                                              <>
                                                <th></th>
                                                <th></th>
                                              </>
                                            )}
                                            {item?.Part_B6 ? (
                                              <>
                                                <th>f</th>
                                                <th>{item?.Part_B6}</th>
                                              </>
                                            ) : (
                                              <>
                                                <th></th>
                                                <th></th>
                                              </>
                                            )}
                                            {item?.Part_C5 ? (
                                              <>
                                                <th>vi</th>
                                                <th>{item?.Part_C5}</th>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Classifications of Questions" ? (
                                  <>
                                    <div className="d-flex ">
                                      <b>{count++}.</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                     
                                    </div>
                                    <br/>
                                      <p>ಉತ್ತರ:</p>
                                    <div className="mb-2">
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>

                                    {item?.orQuestion ? (
                                      <>
                                        <div>
                                          <h5 style={{ textAlign: "center" }}>
                                            (OR)
                                          </h5>

                                          <div>
                                            {item?.Image_1 ? (
                                              <>
                                                <img
                                                  src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                  className="mcq-img"
                                                  alt=""
                                                />
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                            {item?.Image_2 ? (
                                              <>
                                                <img
                                                  src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                  className="mcq-img"
                                                  alt=""
                                                />
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                    <div></div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Odd and out words Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                      {item?.Option_1
                                        ? parse(item?.Option_1)
                                        : ""}
                                      {item?.Option_2
                                        ? parse(item?.Option_2)
                                        : ""}
                                    </div>
                                    <div className="d-flex justify-content-around">
                                      {item?.Option_3
                                        ? parse(item?.Option_3)
                                        : ""}
                                      {item?.Option_4
                                        ? parse(item?.Option_4)
                                        : ""}
                                    </div>

                                    {item?.Image_1 ? (
                                      <>
                                        <div>
                                          <h5 style={{ textAlign: "center" }}>
                                            (OR)
                                          </h5>

                                          <div>
                                            {item?.Image_1 ? (
                                              <>
                                                <img
                                                  src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                                  className="mcq-img"
                                                  alt=""
                                                />
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                            {item?.Image_2 ? (
                                              <>
                                                <img
                                                  src={`http://localhost:8000/Questions/${item?.Image_2}`}
                                                  className="mcq-img"
                                                  alt=""
                                                />
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                          </div>
                                          <div>
                                            {item?.Image_3 ? (
                                              <>
                                                <img
                                                  src={`http://localhost:8000/Questions/${item?.Image_3}`}
                                                  className="mcq-img"
                                                  alt=""
                                                />
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                            {item?.Image_4 ? (
                                              <>
                                                <img
                                                  src={`http://localhost:8000/Questions/${item?.Image_4}`}
                                                  className="mcq-img"
                                                  alt=""
                                                />
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                    <div></div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Poet,Time, Place, Writer answer questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                    </div>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question === "Graph Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                    </div>
                                    <div
                                      style={{
                                        height: "200px",
                                        width: "200px",
                                      }}
                                    ></div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Expanding and Explanations Answer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                    </div>
                                    <div>
                                      {item?.Image_1 ? (
                                        <>
                                          <span>a)</span>
                                          <img
                                            src={`http://localhost:8000/Questions/${item?.Image_1}`}
                                            className="mcq-img"
                                            alt=""
                                          />
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                    <div>
                                      {item?.NumberOfLine && (
                                        <>
                                          {Array.from(
                                            { length: item?.NumberOfLine },
                                            (_, index) => (
                                              <React.Fragment key={index}>
                                                {lines.map((line, idx) => (
                                                  <React.Fragment key={idx}>
                                                    {line}
                                                  </React.Fragment>
                                                ))}
                                              </React.Fragment>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.Types_Question ===
                                "Grammer Questions" ? (
                                  <>
                                    <div className="d-flex mt-2">
                                      <b>{count++}).</b>
                                      <p>
                                        {item?.Question
                                          ? parse(item?.Question)
                                          : ""}
                                      </p>
                                    </div>
                                    <div
                                      style={{
                                        height: "200px",
                                        width: "200px",
                                      }}
                                    ></div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </>
                          );
                        }
                      })}
                    </>
                  );
                })}
              </div>
              <br />
              {/* <div className="page-footer"> */}
                <div className="d-flex justify-content-between">
                 <p>{state?.Sub_Class},{state?.Subject}</p> 
                  <p>P.T.O</p> 
                </div>
              {/* </div> */}
            </div>
          </div>
          {/*------ QuestionAnalysis---- */}
          <LuPrinter
            style={{ width: "22px", height: "40px" }}
            ref={aTagRef}
            onClick={handlePrint1}
          />
          <div id="printable-content1" class="print-area">
            <div className="container">
              <div className="mt-4">
                <h3 className="text-center">
                  {state?.Sub_Class} {state?.Subject}
                </h3>
                <h4>QUESTION ANALYSIS</h4>
              </div>
              <Table striped bordered style={{ fontFamily: "math" }}>
                <thead>
                  <tr>
                    <th>ಕ್ರ .ಸಂ.</th>
                    <th>ವಸ್ತುನಿಷ್ಠ</th>
                    <th>ನಿರ್ದಿಷ್ಟತೆ</th>
                    <th>ವಿಷಯ</th>
                    <th>ಪ್ರಶ್ನಾವಾರು ವಿಶ್ಲೇಷಣೆ.</th>
                    <th>ಅಂಕಗಳು</th>
                    <th>ಕಠಿಣತೆಯ ಮಟ್ಟ</th>
                    <th>ಸಮಯ</th>
                  </tr>
                </thead>
                <tbody>
                  {state?.bluePrint?.TypesofQuestions?.map((ele2) => {
                    return (
                      <>
                        {Questions?.filter(
                          (ele) => ele.Types_Question === ele2?.QAType
                        )?.map((item, i) => {
                          if (i < Number(ele2?.NQA)) {
                            return (
                              <tr>
                                <td> {count2++}</td>
                                <td>{item?.Objectives}</td>
                                <td>{item?.Lesson}</td>
                                <td>{item?.Types_Question}</td>
                                <td>
                                  {
                                    state?.bluePrint?.AllChapter?.filter(
                                      (ele) =>
                                        ele.Blueprintobjective ===
                                        item?.Objectives
                                    )[0]?.BluePrintQuestiontype
                                  }
                                </td>
                                <td>{item?.Marks}</td>
                                <td>{item?.Difficulty_level?.slice(0, 1)}</td>
                                <td>{item?.Answer_Time}</td>
                              </tr>
                            );
                          }
                        })}
                      </>
                    );
                  })}
                </tbody>
              </Table>
              <div className="d-flex mt-2">
                <b>
                  Note<span style={{ color: "red" }}>*</span>
                </b>
                <p>
                  V.S.A(Very short answer),S.A( short answer ) A(Average)
                  ,E(Easy),M(medium)
                </p>
              </div>
            </div>
          </div>

          {/* -------Answer-------- */}
          <LuPrinter
            style={{ width: "22px", height: "40px" }}
            ref={aTagRef}
            onClick={handlePrint2}
          />
          <div id="printable-content2" class="print-area">
            <div style={{ textAlign: "center" }}>
              <Button onClick={() => setViewAnswer(!ViewAnswer)}>
                View Answer
              </Button>
              {ViewAnswer === true ? (
                <>
                  <div id="pdf-content" className="question-paper-display">
                    <div className="englishqp-page-body">
                      <div>
                        <h2>{state?.Subject}</h2>
                        {/* <h4>
                          <b>{state?.bluePrint?.blName}</b>
                        </h4> */}
                      </div>

                      <div style={{ fontWeight: "bold" }}>
                        <div className="time-and-marks">
                          <div>Time :{state?.bluePrint?.DurationOfExam}</div>
                          <div>
                            Max.Marks : {state?.bluePrint?.TotalDifficultMask}
                          </div>
                        </div>
                        <b>
                          <div className="ans-line mb-3 mt-2"></div>
                        </b>
                      </div>
                      <main style={{ flex: "1" }}>
                        {state?.bluePrint?.TypesofQuestions?.map((ele1, a) => {
                          return (
                            <>
                              <div className="question-body-main">
                                <div>
                                  <div style={{ display: "flex", gap: "12px" }}>
                                    <b>{RomanAA[a]}</b>
                                    <b style={{ textAlign: "left" }}>
                                      {" "}
                                      {ele1?.QAInstruction}
                                    </b>
                                  </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                  <b>
                                    {ele1?.NQA}x{ele1?.Mask}=
                                    {ele1?.NQA * ele1?.Mask}
                                  </b>
                                </div>
                              </div>
                              
                              {Questions?.filter(
                                (ele) => ele?.Types_Question === ele1?.QAType
                              )?.map((item, i) => {
                                if (i < Number(ele1?.NQA)) {
                                  return (
                                    <div className="question-body">
                                      {item?.Types_Question ===
                                      "Objective Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  gap: "12px",
                                                }}
                                                key={i}
                                              >
                                                <b>{count3++}</b>
                                                <p>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </p>
                                              </div>
                                              {item?.Image_Ans ? (
                                                <>
                                                  <h4>(OR)</h4>
                                                  <div>
                                                    {item?.Image_Ans ? (
                                                      <>
                                                        <b>Answer Image:</b>
                                                        <div>
                                                          <img
                                                            src={`http://localhost:8000/Questions/${item?.Image_Ans}`}
                                                            style={{
                                                              width: "174px",
                                                              height: "98px",
                                                              border: "groove",
                                                            }}
                                                            alt="answer img"
                                                          />
                                                        </div>
                                                      </>
                                                    ) : (
                                                      <></>
                                                    )}
                                                    
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Multiple Choice Questions" ? (
                                        <div className="d-flex justify-content-between">
                                          <div>
                                            <div
                                              style={{
                                                display: "flex",
                                                gap: "12px",
                                              }}
                                              key={i}
                                            >
                                              <b>{count3++}</b>
                                              <b>
                                                {item?.Answer
                                                  ? parse(item?.Answer)
                                                  : ""}
                                              </b>
                                            </div>
                                            {item?.Image_Ans ? (
                                              <>
                                                <h4>(OR)</h4>
                                                <div>
                                                  {item?.Image_Ans ? (
                                                    <>
                                                      <b>Answer Image:</b>
                                                      <div>
                                                        <img
                                                          src={`http://localhost:8000/Questions/${item?.Image_Ans}`}
                                                          style={{
                                                            width: "174px",
                                                            height: "98px",
                                                            border: "groove",
                                                          }}
                                                          alt="answer img"
                                                        />
                                                      </div>
                                                    </>
                                                  ) : (
                                                    <></>
                                                  )}
                                                
                                                </div>
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                          </div>
                                          <div>{ele1?.Mask}</div>
                                        </div>
                                      ) : (
                                        ""
                                      )}
                                      {item?.Types_Question ===
                                      "One Word Question" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex ">
                                                <b>{count3++}.</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                                
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                     
                                      {item?.Types_Question ===
                                      "One Sentence Answer Question" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}.</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Two  Sentence Answer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Two and three Sentence Answer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}.</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Three and Four Sentence Answer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}.</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Five and Six Sentence Answer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Six Sentence Answer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Seven Sentence Answer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Eight Sentence Answer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Ten Sentence Answer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Map Reading" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div className="d-flex mt-2">
                                              <b>{count3++}).</b>
                                              <b>
                                                {item?.Answer
                                                  ? parse(item?.Answer)
                                                  : ""}
                                              </b>
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Classifications of Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex ">
                                                <b>{count3++}.</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div className="d-flex mt-2">
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Odd and out words Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              {item?.Image_Ans ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.Image_Ans ? (
                                                <>
                                                  <div>
                                                    {item?.Image_Ans ? (
                                                      <>
                                                        <b>Answer Image:</b>
                                                        <div>
                                                          <img
                                                            src={`http://localhost:8000/Questions/${item?.Image_Ans}`}
                                                            style={{
                                                              width: "174px",
                                                              height: "98px",
                                                              border: "groove",
                                                            }}
                                                            alt="answer img"
                                                          />
                                                        </div>
                                                      </>
                                                    ) : (
                                                      <></>
                                                    )}
                                                    <br />
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Grammer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              <div className="row">
                                                <Table
                                                  responsive
                                                  bordered
                                                  style={{
                                                    width:
                                                      "-webkit-fill-available",
                                                  }}
                                                >
                                                  <tbody>
                                                    {item?.GrammerArrQ?.map(
                                                      (row, rowIndex) => (
                                                        <tr key={rowIndex}>
                                                          {row.map(
                                                            (
                                                              cell,
                                                              cellIndex
                                                            ) => (
                                                              <ViewTableCell
                                                                key={cellIndex}
                                                                className="vi_0"
                                                                value={cell}
                                                              />
                                                            )
                                                          )}
                                                        </tr>
                                                      )
                                                    )}
                                                  </tbody>
                                                </Table>
                                              </div>
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Expanding and Explanations Answer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>

                                              {item?.orAnswer ? (
                                                <>
                                                  <h5>(OR)</h5>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                              {item?.orAnswer ? (
                                                <>
                                                  <div>
                                                    <b>
                                                      {item?.orAnswer
                                                        ? parse(item?.orAnswer)
                                                        : ""}
                                                    </b>
                                                    <br />
                                                  </div>
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Graph Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                              <div>
                                                {item?.Image_Ans ? (
                                                  <>
                                                    <div>
                                                      <img
                                                        src={`http://localhost:8000/Questions/${item?.Image_Ans}`}
                                                        style={{
                                                          width: "174px",
                                                          height: "98px",
                                                          border: "groove",
                                                        }}
                                                        alt="answer img"
                                                      />
                                                    </div>
                                                  </>
                                                ) : (
                                                  <></>
                                                )}
                                                <br />
                                              </div>
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Poet,Time, Place, Writer answer questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Letter Writting" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}).</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Situation UnderStatnding answer Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div>
                                              <div className="d-flex mt-2">
                                                <b>{count3++}.</b>
                                                <b>
                                                  {item?.Answer
                                                    ? parse(item?.Answer)
                                                    : ""}
                                                </b>
                                              </div>
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Fill in the Blanks Questions" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div className="d-flex ">
                                              <b>{count3++}.</b>
                                              <b>
                                                {item?.Answer
                                                  ? parse(item?.Answer)
                                                  : ""}
                                              </b>
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {item?.Types_Question ===
                                      "Complete the Poem" ? (
                                        <>
                                          <div className="d-flex justify-content-between">
                                            <div className="d-flex ">
                                              <b>{count3++}</b>
                                              <b>
                                                {item?.Answer
                                                  ? parse(item?.Answer)
                                                  : ""}
                                              </b>
                                            </div>
                                            <div>{ele1?.Mask}</div>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  );
                                }
                              })}
                            </>
                          );
                        })}

                        <br />
                      </main>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPaper;
