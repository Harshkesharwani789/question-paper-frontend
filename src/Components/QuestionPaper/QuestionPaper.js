import React, { useState, useRef, useEffect } from "react";
import "../QuestionPaper/QuestionPaper.css";
// import "../BluePrint/BluePrint.css";
import { CiSaveDown2 } from "react-icons/ci";
import { LuPrinter } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { Row } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import parse from "html-react-parser";
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

  console.log("Questions", Questions);
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
    if (state._id && token) {
      getAllQuestions();
    }
  }, [state, token]);
  var count = 1;
  var count2 = 0;
  const SectionArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const RomanAA = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  const lines = [
    <div className="col-md-12">
      <div className="do-sear mt-2">
        <p type="text" className="lined-input"></p>
      </div>
    </div>,
  ];
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
      <div id="pdf" style={{marginTop:"5px"}}>
        <Frontpage data={state} />

        <div className="question-paper-display-container">
          <div className="question-paper-display">
            <div className="second-page-body">
              {state?.bluePrint?.TypesofQuestions?.map((ele1, a) => {
                return (
                  <>
                    {/* <h3 style={{ textAlign: "center" }}>Section {SectionArr[a]}</h3> */}
                    <br />
                    <div className="question-body-main">
                      <div>
                        <div style={{ display: "flex", gap: "12px" }}>
                          <b> {RomanAA[a]}</b>

                          <b style={{ textAlign: "left" }}>
                            {ele1?.QAInstruction}
                          </b>
                        </div>
                      </div>
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        <b>
                          {ele1?.NQA}*{ele1?.Mask}={ele1?.NQA * ele1?.Mask}
                        </b>
                      </div>
                    </div>
                    <br />
                    {Questions?.filter(
                      (ele) => ele?.Types_Question == ele1?.QAType
                    )?.map((item, i) => {
                      if (i < Number(ele1?.NQA)) {
                        count = i + 1;

                        return (
                          <div className="question-body mt-2">
                            {item?.Types_Question ==
                            "Multiple Choice Questions" ? (
                              <div>
                                <div
                                  style={{ display: "flex", gap: "12px" }}
                                  key={i}
                                >
                                  <b>{i + 1}</b>
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

                            {item?.Types_Question ==
                            "Fill in the Blanks Questions" ? (
                              <>
                                {item?.NumberOfLine == "2" ? (
                                  <>
                                    <div className="d-flex">
                                      <b>{i + 1}).</b>
                                      <p>
                                        {" "}
                                        {parse(`<div>${item?.input1}</div>`)}
                                      </p>
                                      <div className="ques-line"></div>
                                      <p>
                                        {" "}
                                        {parse(`<div>${item?.input2}</div>`)}
                                      </p>
                                      <div className="ques-line"></div>
                                      <p>
                                        {" "}
                                        {parse(`<div>${item?.input3}</div>`)}
                                      </p>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {item?.NumberOfLine == "1" ? (
                                  <>
                                    <b>{i + 1}).</b>
                                    <div className="d-flex">
                                      <p>
                                        {" "}
                                        {parse(`<div>${item?.input1}</div>`)}
                                      </p>
                                      <div className="ques-line"></div>
                                      <p>
                                        {" "}
                                        {parse(`<div>${item?.input2}</div>`)}
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

                            {item?.Types_Question ==
                            "Recorrect the Answers Questions" ? (
                              <>
                                <div>
                                  <div className="d-flex">
                                    <b>{i + 1}).</b>{" "}
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

                            {item?.Types_Question ==
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

                            {item?.Types_Question == "Grammer Questions" ? (
                              <></>
                            ) : (
                              <></>
                            )}

                            {item?.Types_Question == "One Word Question" ? (
                              <>
                                <div className="d-flex mt-2">
                                  <b>{i + 1}).</b>
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
                            {item?.Types_Question ==
                            "Three and Four Sentence Answer Questions" ? (
                              <>
                                <div className="d-flex mt-2">
                                  <b>{i + 1}).</b>
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

                            {item?.Types_Question ==
                            "One Sentence Answer Question" ? (
                              <>
                                <div className="d-flex mt-2">
                                  <b>{i + 1}).</b>
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
                          </div>
                        );
                      }
                    })}
                  </>
                );
              })}
            </div>
            <br />
            <div className="page-footer">
              <div>
                {state?.Sub_Class},{state?.Subject}
              </div>
            </div>
          </div>
          {/* <div className="question-paper-display">
          <div className="second-page-body">
          <h3 style={{ textAlign: "center" }}>Section B</h3>
          {state?.bluePrint?.TypesofQuestions?.map((ele,a)=>{
              if(ele?.QAType=="Subjective Questions"){

                 return (<>
                  <div className="question-body-main">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>Q 2</b>
                  <b style={{ textAlign: "left" }}>{ele?.QAType}</b>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <b>{ele?.NQA}*{ele?.Mask}={ele?.NQA*ele?.Mask}</b>
              </div>
            </div>
            <br />
              {Questions?.filter((ele)=>ele?.Types_Question=="Subjective Questions")?.map((item, i) => {

                if(i<Number(ele?.NQA)){
                  count2=count+(i+1)
                   return (
                    <div className="question-body">
                    <div>
                      <div style={{ display: "flex", gap: "12px" }}>
                        <b>{count+(i+1)})</b>
                        <b>{item?.Question ? parse(item?.Question) : ""}</b>
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
                  </div>);
                }
             
            })}
              </>)
              }
             
            })}
           
           
         
          </div>
          <div className="page-footer">
            <div>8th Std. English QP</div>
            <div>5</div>
          </div>
        </div> */}

          {/* <div className="question-paper-display">
         
          <div className="second-page-body">
            <h3 style={{ textAlign: "center" }}>Section -D</h3>
            {state?.bluePrint?.TypesofQuestions?.map((ele,a)=>{
              if(ele?.QAType=="Literarry Type"){

                 return (<>
                  <div className="question-body-main">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>Q 3</b>
                  <b style={{ textAlign: "left" }}>{ele?.QAType}</b>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <b>{ele?.NQA}*{ele?.Mask}={ele?.NQA*ele?.Mask}</b>
              </div>
            </div>
            <br />
              {Questions?.filter((ele)=>ele?.Types_Question=="Literarry Type")?.map((item, i) => {

                if(i<Number(ele?.NQA)){
              
               
                   return (
                <div className="question-body mt-2">
                  <div>
                    <div style={{ display: "flex", gap: "12px" }} key={i}>
                      <b>{count2+(i + 1)}</b>
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
              );
                }
             
            })}
              </>)
              }
             
            })}
        
          </div>
          <div className="page-footer">
            <div>8th Std. English QP</div>
            <div>6</div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default QuestionPaper;
