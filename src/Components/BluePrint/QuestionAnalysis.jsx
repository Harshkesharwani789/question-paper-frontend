import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { CiSaveDown2 } from "react-icons/ci";
import { LuPrinter } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { Button, Form, Row } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import parse from "html-react-parser";
import Frontpage from "../fontpage/Frontpage";
import axios from "axios";
import swal from "sweetalert";

function QuestionAnalysis() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");
  const { state } = useLocation();

  // const location = useLocation();
  // const { item } = location.state;

  console.log("state", state);
  const [Questions, setQuestions] = useState([]);
  let count2 = 1;
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
    navigate("/answersheet", { state: { ...state, Questions } });
    setTimeout(() => {
      return window.location.reload();
    }, 2000);
  };

  const getgenratedData = async () => {
    try {
      const config = {
        url: "/teacher/getGenQuestionById/" + state?._id + "/" + user?._id,
        baseURL: "https://question-paper-backend-pariksha.onrender.com/api",
        method: "get",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        setQuestions(res.data.success?.Questions);
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

  useEffect(() => {
    if (token && state) {
      getgenratedData();
    }
  }, [token, state]);

  const navigate = useNavigate();

  function check(am) {
    if (
      // am == "Objective Questions" ||
      am == "One Word Question" ||
      am == "Multiple Choice Questions" ||
      am == "Fill in the Blanks Questions" ||
      am == "Classifications of Questions" ||
      am == "Match the Following Questions" ||
      am == "Recorrect the Answers Questions" ||
      am == "Odd and out words Questions" ||
      am == "RelationShip Words Questions" ||
      am == "Grammer Questions" ||
      am == "One Sentence Answer Question"
    ) {
      return GetquestAnalysisHeader?.OT;
    }
    if (
      am == "Two  Sentence Answer Questions" ||
      am == "Situation UnderStatnding answer Questions" ||
      am == "Complete the Poem" ||
      am == "Poet,Time, Place, Writer answer questions" ||
      am == "Two and three Sentence Answer Questions"
    ) {
      return GetquestAnalysisHeader?.SA;
    }
    if (
      am == "Three and Four Sentence Answer Questions" ||
      am == "Five and Six Sentence Answer Questions" ||
      am == "Six Sentence Answer Questions" ||
      am == "Seven Sentence Answer Questions" ||
      am == "Eight Sentence Answer Questions" ||
      am == "Ten Sentence Answer Questions" ||
      am == "Expanding and Explanations Answer Questions" ||
      am == "Answer the Questions and Draw the Figure Questions" ||
      am == "Graph Questions" ||
      am == "Letter Writting" ||
      am == "Map Reading"
    ) {
      return GetquestAnalysisHeader?.VSA;
    }
  }

  const obj = {};

  //&& ele?.Marks==(ele2?.NQA*ele2?.Mask)/ele2?.NQA
  console.log("Questions", Questions);

  const [GetquestAnalysisHeader, setGetquestAnalysisHeader] = useState([]);
  const getquestAnalysisHeader = async () => {
    try {
      let res = await axios.get(
        "https://question-paper-backend-pariksha.onrender.com/api/admin/getQuestAnalysisheaderbymedium/" +
          state?.Medium
      );
      if (res.status == 200) {
        setGetquestAnalysisHeader(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("GetquestAnalysisHeader", GetquestAnalysisHeader);

  useEffect(() => {
    getquestAnalysisHeader();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-3 d-flex justify-content-end">
          <LuPrinter
            style={{ width: "22px", height: "40px" }}
            onClick={handlePrint}
          />
        </div>
      </div>
      <div>
        <Container
          className="mt-4"
          style={{ border: "3px solid black", borderRadius: "15px" }}
          id="printable-content"
        >
          <div className="mt-4">
            <h6>
              {" "}
              {state?.Institute_Name ? (
                <h6>
                  <b>
                    {state?.Institute_Name},{state?.SchoolAddress}
                  </b>
                </h6>
              ) : (
                <></>
              )}
            </h6>
            <h6 className="text-center">
              <b>{state?.bluePrint?.blName}</b>
            </h6>
            <h6 className="text-center">
              <b>
                {state?.Sub_Class} {state?.Subject}
              </b>
            </h6>
            {/* <h3 className="text-center"> ಪ್ರಥಮ ಭಾಷೆ ಕನ್ನಡ ಒಂದನೆಯ ಸಂಕಲನಾತ್ಮಕ ,ಮೌಲ್ಯಮಾಪನ </h3> */}

            <h6>
              <b>{GetquestAnalysisHeader?.QuestHeader}</b>
            </h6>
          </div>
          <div className="text-center">
            <Table
              bordered
              responsive
              style={{ fontFamily: "math", border: "1px solid" }}
            >
              <thead>
                <tr>
                  <th>{GetquestAnalysisHeader?.slno}</th>
                  <th>{GetquestAnalysisHeader?.ObjectType}</th>
                  <th>{GetquestAnalysisHeader?.Chapter}</th>
                  <th>{GetquestAnalysisHeader?.Lesson}</th>
                  <th>{GetquestAnalysisHeader?.QuestionType}</th>
                  <th>{GetquestAnalysisHeader?.OtSaLsa}</th>
                  <th>{GetquestAnalysisHeader?.Marks}</th>
                  <th>{GetquestAnalysisHeader?.Difficultlevel}</th>
                  <th>{GetquestAnalysisHeader?.Time}</th>
                </tr>
              </thead>
              <tbody>
                {state?.bluePrint?.TypesofQuestions?.map((ele2) => {
                  return (
                    <>
                      {(() => {
                        const filteredQuestions = Questions?.filter(
                          (ele) => ele.Types_Question === ele2?.QAType
                        );
                        const requiredQuestions = Number(ele2?.NQA);
                        const addedQuestions = filteredQuestions?.length || 0;

                        return filteredQuestions?.map((item, i) => {
                          if (i < requiredQuestions) {
                            return (
                              <tr key={i}>
                                <td>{count2++}</td>
                                <td>{item?.Objectives}</td>
                                <td>{item?.Chapter_Name}</td>
                                <td>{item?.Lesson}</td>
                                <td>
                                  {item?.Types_QuestionTranslate}
                                  {/* <div>
                                    <small>Required: {requiredQuestions}</small>
                                    <br />
                            <small>Added: {addedQuestions}</small>
                            </div>*/}
                                </td>
                                <td>{check(ele2?.QAType)}</td>
                                <td>{(ele2?.NQA * ele2?.Mask) / ele2?.NQA}</td>
                                <td>{item?.Difficulty_level?.slice(0, 1)}</td>
                                <td>{item?.Answer_Time}</td>
                              </tr>
                            );
                          }
                          return null;
                        });
                      })()}
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>

          <div className="d-flex mt-2">
            <b>
              Note<span style={{ color: "red" }}>*</span>
            </b>
            <p>{GetquestAnalysisHeader?.Note}</p>
          </div>
        </Container>
      </div>

      <div className="d-flex justify-content-center mt-2 ">
        <Button
          className="md-2"
          onClick={() =>
            navigate("/answersheet", { state: { ...state, Questions } })
          }
        >
          View Anshwer Sheet
        </Button>
        <br />
      </div>
    </div>
  );
}

export default QuestionAnalysis;
