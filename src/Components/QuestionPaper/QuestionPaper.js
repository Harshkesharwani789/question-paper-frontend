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
      const config = {
        url: "/admin/getQuestionByClasswise/"+user?._id,
        baseURL: "http://localhost:8000/api",
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: { 
          Board:state.Board,Medium:state.Medium,Class:state.Class,Sub_Class:state.Sub_Class,Subject:state.Subject
        },
      };
      let res = await axios(config)
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
    if(state._id&&token){
        getAllQuestions();
    }
  }, [state,token]);
 var count=(1)
 var count2=0
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
           
            {state?.bluePrint?.TypesofQuestions?.map((ele,a)=>{
              if(ele?.QAType=="Multiple Choice Questions"){

                 return (<>
                  <div className="question-body-main">
              <div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <b>Q 1</b>
                  <b style={{ textAlign: "left" }}>{ele?.QAType}</b>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <b>{ele?.NQA}*{ele?.Mask}={ele?.NQA*ele?.Mask}</b>
              </div>
            </div>
            <br />
              {Questions?.filter((ele)=>ele?.Types_Question=="Multiple Choice Questions")?.map((item, i) => {

                if(i<Number(ele?.NQA)){
                  count=(i+1);
                  // console.log("count==>",count);
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
                }
             
            })}
              </>)
              }
             
            })}
            
          </div>
          <br />
          <div className="page-footer">
            <div>8th Std. English QP</div>
            <div>1</div>
          </div>
        </div>
        <div className="question-paper-display">
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
        </div>

        {/* sixth page starts here  */}

        <div className="question-paper-display">
         
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
                {/* <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row> */}
                {/* <Row>
                  <div className="ans-section-lg">
                    <div className="ans-line"></div>
                  </div>
                </Row> */}
                  
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
        </div>
      </div>
    </div>
  );
};

export default QuestionPaper;
