import React, { useEffect, useState } from "react";
import "../Admin/Admin.css";
import { Form, Table } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../Admin/Admin.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

import MathInput from "react-math-keyboard";
import { FiPrinter } from "react-icons/fi";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const steps = [
  "Blueprint Details",
  "Marks Details",
  "Weightage to the Content",
  " Weightage of the Difficulty Level",
];


function AdminBlueprintdetailsview() {
  const { blueprint_ID } = useParams();
  console.log("first", blueprint_ID);
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [latex, setLatex] = useState("");
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const [AllChapterData, setAllChapterData] = useState([]);
  const [blueprint, setblueprint] = useState([]);
  const getallblueprint = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/admin/getblueprintsbyid/${blueprint_ID}`
      );

      if (res.status == 200) {
        setblueprint(res.data.success);
        setAllChapterData(res.data.success?.AllChapter);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   get method for weightage
  const [weightage, setweightage] = useState([]);
  const getallweightagecontent = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getallcontent"
      );
      if (res.status === 200) {
        setweightage(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallblueprint();
    getallweightagecontent();
  }, []);

  const uniqueObjectsArray = [];
  const uniqueNames = new Set(); // Using a Set to keep track of unique names

  AllChapterData?.forEach((ele, i) => {
    const chapterName = ele?.Blueprintchapter;
    if (!uniqueNames.has(chapterName)) {
      uniqueNames.add(chapterName);
      uniqueObjectsArray.push({
        index: i + 1,
        name: chapterName,
      });
    }
  });

  // console.log("uniqueObjectsArray", uniqueObjectsArray);

  function bluePrintTotalQues(chapterName, Qtype) {
    let obj = { TotalQ: "", totalMas: 0 };
    let am = AllChapterData?.filter(
      (item) =>
        item?.BluePrintQuestiontype == Qtype &&
        item?.Blueprintchapter == chapterName
    );
    if (am.length != 0) {
      obj["TotalQ"] = am?.reduce(
        (a, am) => a + Number(am?.Blueprintnoofquestion),
        0
      );
      obj["totalMas"] = am?.reduce(
        (a, am) =>
          a + Number(am?.Blueprintnoofquestion * am?.BluePrintmarksperquestion),
        0
      );
    }
    return obj;
  }
  var TotalMask = 0;
  const QuestionNameWiseMask = (chapterName) => {
    let obj = { TotalQ: "", totalMas: "" };
    let am = AllChapterData?.filter(
      (item) => item?.Blueprintchapter == chapterName
    );
    if (am.length != 0) {
      obj["totalMas"] = am?.reduce(
        (a, am) =>
          a + Number(am?.Blueprintnoofquestion * am?.BluePrintmarksperquestion),
        0
      );
      TotalMask = TotalMask + obj.totalMas;
    }
    return obj;
  };

  // to print the pdf ----->
  const createPDF = async () => {
    // setRotate(360);

    // dynamic image is also adding in the PDF
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

    // const input = document.getElementById("pdf");
    // const options = { scrollY: -window.scrollY, useCORS: true };
    // const canvas = await html2canvas(input, options);
    // const imgData = canvas.toDataURL("image/png");
    // const pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
    // pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    pdf.save("Blueprint.pdf");
  };
  return (
    <>
      <div className="box_1" id="pdf">
        <div className="Stepper-info " style={{ padding: "20px" }}>
          {/* <div>
     
      <MathInput setValue={setLatex} />
      <p>{latex}</p>
    </div> */}
          {/* blue print 1  */}
          <div className="blueprint-content-display">
          <div className="row">
                <div className="col-md-12 text-end">
               <div className="justify-content-end d-flex gap-3">
               <FiPrinter onClick={createPDF}/>
                <div id="google_translate_element"></div>
               </div>
                
              
                </div>
              </div>
            <div className="blueprint-titles">
              <h3>{blueprint?.blName}</h3>
              <h4> BLUE PRINT</h4>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  {/* table 3  */}
                  <div className="weightage-objectives">
                    <div className="main-title">
                      <b>1.</b>
                      <b>Weightage to type of Questions</b>
                    </div>
                    <div className="objectives-table">
                      <Table
                        bordered
                        hover
                        size="md"
                        style={{ border: "1px solid" }}
                      >
                        <thead>
                          <tr>
                            <th>sl.no</th>
                            <th>Content</th>
                            <th>Instruction</th>
                            <th>Questions</th>
                            <th>Marks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blueprint?.TypesofQuestions?.map((val, i) => {
                            return (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{val?.QAType}</td>
                                <td>{val?.QAInstruction}</td>
                                <td>
                                  {val?.NQA}x{val?.Mask}
                                </td>
                                <td>{val?.NQA * val?.Mask}</td>
                                {/* <td>{val?.NQA}</td>
                          <td>{val?.Mask}</td> */}
                              </tr>
                            );
                          })}

                          <tr>
                            <td>
                              <b>Total</b>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                              {blueprint?.TypesofQuestions?.reduce(
                                (a, i) => a + Number(i?.NQA),
                                0
                              )}
                            </td>
                            <td>
                              <b>
                                {blueprint?.TypesofQuestions?.reduce(
                                  (a, i) => a + Number(i?.Mask * i?.NQA),
                                  0
                                )}
                              </b>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  {/* table 1 */}
                  <div className="weightage-objectives">
                    <div className="main-title">
                      <b>2.</b>
                      <b>Weightage to Objectives - Marks</b>
                    </div>
                    <div className="objectives-table">
                      <Table
                        responsive
                        bordered
                        hover
                        style={{ border: "1px solid" }}
                      >
                        <thead>
                          <tr>
                            <th>sl.no</th>
                            <th>Objectives</th>
                            <th>Questions</th>
                            <th>Marks</th>
                            <th>Percentage</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blueprint?.objectives?.map((ele, i) => {
                            return (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td style={{ fontSize: "12px" }}>
                                  {ele?.Objective}
                                </td>
                                <td style={{ fontSize: "12px" }}>
                                  {ele?.NoofQuestion}
                                </td>
                                <td style={{ fontSize: "12px" }}>
                                  {ele?.Marks}
                                </td>
                                <td style={{ fontSize: "12px" }}>
                                  {ele?.NoofQues}%
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </div>
                  </div>

                  {/* table 2 */}
                  <div className="weightage-objectives">
                    <div className="main-title">
                      <b>3.</b>
                      <b>Weightage to Content</b>
                    </div>
                    <div className="text-center">
                      <div className="objectives-table">
                        <Table
                          responsive
                          bordered
                          hover
                          size="sm"
                          style={{ border: "1px solid" }}
                        >
                          <tbody>
                            {blueprint?.Weightageofthecontent?.map((val, i) => {
                              return (
                                <tr key={i}>
                                  <td>{val?.label}</td>
                                  <td>{val?.Marks}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                  {/* table 4  */}
                  <div className="weightage-objectives">
                    <div className="main-title">
                      <b>4.</b>
                      <b>Weightage to Difficult Level</b>
                    </div>
                    <div className="objectives-table">
                      <Table
                        bordered
                        hover
                        size="md"
                        style={{ border: "1px solid" }}
                      >
                        <tbody>
                          <tr>
                            <td>Easy</td>
                            <td>Average</td>
                            <td>Difficult</td>
                            <td>Total</td>
                          </tr>
                          <tr>
                            <td>{blueprint?.EasyMask}</td>
                            <td>{blueprint?.AverageMask}</td>
                            <td>{blueprint?.DifficultMask}</td>
                            <td>
                              {blueprint?.EasyMask +
                                blueprint?.AverageMask +
                                blueprint?.DifficultMask}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* blue print 2  */}
          <div style={{ fontFamily: "sans-serif" }}>
            <div
              className="blueprint2-container"
              style={{ padding: "20px 8px" }}
            >
             

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <b>Time : {blueprint?.DurationOfExam}</b>
                </div>
                <div>
                  <b>BLUE PRINT</b>
                </div>
                <div>
                  <b>
                    Marks :-
                    {blueprint?.AllChapter?.reduce(
                      (a, ele) =>
                        a +
                        Number(
                          ele?.BluePrintmarksperquestion *
                            ele?.Blueprintnoofquestion
                        ),
                      0
                    )}
                  </b>
                </div>
              </div>

              <div>
                <Table
                  responsive
                  bordered
                  style={{ border: "1px solid", width: "109rem" }}
                  size="sm"
                >
                  <thead>
                    <tr>
                      <th>S No.</th>
                      <th style={{ width: "200px" }}>Content</th>
                      {blueprint?.objectives?.map((ele) => {
                        return (
                          <>
                            <th colSpan={3}>{ele?.Objective}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                          </>
                        );
                      })}

                      <th colSpan={3}>Total Questions</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th colSpan={2}>Total Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th></th>

                      <th style={{ width: "200px" }}></th>
                      {blueprint?.objectives?.map((ele) => {
                        return (
                          <>
                            <th>MC</th>
                            <th>VSA</th>
                            <th>SA</th>
                            <th>LA 1</th>
                            <th>LA 2</th>
                            <th>LA 3</th>
                          </>
                        );
                      })}

                      <th>MC</th>
                      <th>VSA</th>
                      <th>SA</th>
                      <th>LA 1</th>
                      <th>LA 2</th>
                      <th>LA 3</th>
                      <th></th>
                    </tr>
                    {uniqueObjectsArray?.map((ele, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td style={{ width: "200px" }}>{ele?.name}</td>
                          {blueprint?.objectives?.map((ele1) => {
                            return (
                              <>
                                <td>
                                  {
                                    AllChapterData?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype == "M C" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {AllChapterData?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "M C" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? `*(${
                                        AllChapterData?.find(
                                          (item) =>
                                            item?.Blueprintobjective ==
                                              ele1?.Objective &&
                                            item?.BluePrintQuestiontype ==
                                              "M C" &&
                                            item?.Blueprintchapter == ele?.name
                                        )?.BluePrintmarksperquestion
                                      })`
                                    : ""}
                                </td>
                                <td>
                                  {
                                    AllChapterData?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "V.S.A" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {AllChapterData?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "V.S.A" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? `*(${
                                        AllChapterData?.find(
                                          (item) =>
                                            item?.Blueprintobjective ==
                                              ele1?.Objective &&
                                            item?.BluePrintQuestiontype ==
                                              "V.S.A" &&
                                            item?.Blueprintchapter == ele?.name
                                        )?.BluePrintmarksperquestion
                                      })`
                                    : ""}
                                </td>
                                <td>
                                  {
                                    AllChapterData?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype == "S.A" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {AllChapterData?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "S.A" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? `*(${
                                        AllChapterData?.find(
                                          (item) =>
                                            item?.Blueprintobjective ==
                                              ele1?.Objective &&
                                            item?.BluePrintQuestiontype ==
                                              "S.A" &&
                                            item?.Blueprintchapter == ele?.name
                                        )?.BluePrintmarksperquestion
                                      })`
                                    : ""}
                                </td>
                                <td>
                                  {
                                    AllChapterData?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "L.A 1" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {AllChapterData?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 1" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? `*(${
                                        AllChapterData?.find(
                                          (item) =>
                                            item?.Blueprintobjective ==
                                              ele1?.Objective &&
                                            item?.BluePrintQuestiontype ==
                                              "L.A 1" &&
                                            item?.Blueprintchapter == ele?.name
                                        )?.BluePrintmarksperquestion
                                      })`
                                    : ""}
                                </td>
                                <td>
                                  {
                                    AllChapterData?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "L.A 2" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {AllChapterData?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 2" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? `*(${
                                        AllChapterData?.find(
                                          (item) =>
                                            item?.Blueprintobjective ==
                                              ele1?.Objective &&
                                            item?.BluePrintQuestiontype ==
                                              "L.A 2" &&
                                            item?.Blueprintchapter == ele?.name
                                        )?.BluePrintmarksperquestion
                                      })`
                                    : ""}
                                </td>
                                <td>
                                  {
                                    AllChapterData?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "L.A 3" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {AllChapterData?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 3" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? `*(${
                                        AllChapterData?.find(
                                          (item) =>
                                            item?.Blueprintobjective ==
                                              ele1?.Objective &&
                                            item?.BluePrintQuestiontype ==
                                              "L.A 3" &&
                                            item?.Blueprintchapter == ele?.name
                                        )?.BluePrintmarksperquestion
                                      })`
                                    : ""}
                                </td>
                              </>
                            );
                          })}

                          <td>
                            {bluePrintTotalQues(ele?.name, "M C")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(ele?.name, "V.S.A")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(ele?.name, "S.A")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(ele?.name, "L.A 1")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(ele?.name, "L.A 2")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(ele?.name, "L.A 3")?.TotalQ}
                          </td>

                          <td>{QuestionNameWiseMask(ele?.name)?.totalMas}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td></td>
                      <td>Total</td>
                      {blueprint?.objectives?.map((ele) => {
                        return (
                          <>
                            <td>
                              {AllChapterData?.some(
                                (item) =>
                                  item?.Blueprintobjective == ele?.Objective &&
                                  item?.BluePrintQuestiontype == "M C"
                              ) ? (
                                <span>
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "M C"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(am?.Blueprintnoofquestion),
                                    0
                                  )}{" "}
                                  (
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "M C"
                                  )?.reduce(
                                    (a, am) =>
                                      a +
                                      Number(
                                        am?.BluePrintmarksperquestion *
                                          am?.Blueprintnoofquestion
                                      ),
                                    0
                                  )}
                                  )
                                </span>
                              ) : (
                                ""
                              )}
                            </td>
                            <td>
                              {AllChapterData?.some(
                                (item) =>
                                  item?.Blueprintobjective == ele?.Objective &&
                                  item?.BluePrintQuestiontype == "V.S.A"
                              ) ? (
                                <span>
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "V.S.A"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(am?.Blueprintnoofquestion),
                                    0
                                  )}{" "}
                                  (
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "V.S.A"
                                  )?.reduce(
                                    (a, am) =>
                                      a +
                                      Number(
                                        am?.BluePrintmarksperquestion *
                                          am?.Blueprintnoofquestion
                                      ),
                                    0
                                  )}
                                  )
                                </span>
                              ) : (
                                ""
                              )}
                            </td>
                            <td>
                              {AllChapterData?.some(
                                (item) =>
                                  item?.Blueprintobjective == ele?.Objective &&
                                  item?.BluePrintQuestiontype == "S.A"
                              ) ? (
                                <span>
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "S.A"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(am?.Blueprintnoofquestion),
                                    0
                                  )}{" "}
                                  (
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "S.A"
                                  )?.reduce(
                                    (a, am) =>
                                      a +
                                      Number(
                                        am?.BluePrintmarksperquestion *
                                          am?.Blueprintnoofquestion
                                      ),
                                    0
                                  )}
                                  )
                                </span>
                              ) : (
                                ""
                              )}
                            </td>
                            <td>
                              {AllChapterData?.some(
                                (item) =>
                                  item?.Blueprintobjective == ele?.Objective &&
                                  item?.BluePrintQuestiontype == "L.A 1"
                              ) ? (
                                <span>
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 1"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(am?.Blueprintnoofquestion),
                                    0
                                  )}{" "}
                                  (
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 1"
                                  )?.reduce(
                                    (a, am) =>
                                      a +
                                      Number(
                                        am?.BluePrintmarksperquestion *
                                          am?.Blueprintnoofquestion
                                      ),
                                    0
                                  )}
                                  )
                                </span>
                              ) : (
                                ""
                              )}
                            </td>
                            <td>
                              {AllChapterData?.some(
                                (item) =>
                                  item?.Blueprintobjective == ele?.Objective &&
                                  item?.BluePrintQuestiontype == "L.A 2"
                              ) ? (
                                <span>
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 2"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(am?.Blueprintnoofquestion),
                                    0
                                  )}{" "}
                                  (
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 2"
                                  )?.reduce(
                                    (a, am) =>
                                      a +
                                      Number(
                                        am?.BluePrintmarksperquestion *
                                          am?.Blueprintnoofquestion
                                      ),
                                    0
                                  )}
                                  )
                                </span>
                              ) : (
                                ""
                              )}
                            </td>
                            <td>
                              {AllChapterData?.some(
                                (item) =>
                                  item?.Blueprintobjective == ele?.Objective &&
                                  item?.BluePrintQuestiontype == "L.A 3"
                              ) ? (
                                <span>
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 3"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(am?.Blueprintnoofquestion),
                                    0
                                  )}{" "}
                                  (
                                  {AllChapterData?.filter(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 3"
                                  )?.reduce(
                                    (a, am) =>
                                      a +
                                      Number(
                                        am?.BluePrintmarksperquestion *
                                          am?.Blueprintnoofquestion
                                      ),
                                    0
                                  )}
                                  )
                                </span>
                              ) : (
                                ""
                              )}
                            </td>
                          </>
                        );
                      })}

                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        {blueprint?.AllChapter?.reduce(
                          (a, ele) => a + Number(ele?.Blueprintnoofquestion),
                          0
                        )}
                      </td>
                      <td>
                        {blueprint?.AllChapter?.reduce(
                          (a, ele) =>
                            a +
                            Number(
                              ele?.BluePrintmarksperquestion *
                                ele?.Blueprintnoofquestion
                            ),
                          0
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <span>Note:-</span>
              {parse(`<span>${blueprint?.Instructions}</span>`)}
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default AdminBlueprintdetailsview;
