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

import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
const steps = [
  "Blueprint Details",
  "Marks Details",
  "Weightage to the Content",
  " Weightage of the Difficulty Level",
];


function AdminBlueprintdetailsview() {
  const { blueprint_ID } = useParams();

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


  const createPDF1 = async () => {
    // setRotate(360);

    // dynamic image is also adding in the PDF
    const pdf = new jsPDF("landscape", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf1"), {
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
  console.log("BluePrintAAAA==>", blueprint);


  const [bluePrintHeader, setbluePrintHeader] = useState({});
  const GetBluePrintHeaderByMedium = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getblueprintheaderbymedium/" + blueprint?.medium);
      if (res.status === 200) {
        setbluePrintHeader(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("bluePrintHeader", bluePrintHeader);


  useEffect(() => {
    GetBluePrintHeaderByMedium()
  }, [blueprint?.medium])



  return (
    <>

      <div className="box_1" >
        <div className="Stepper-info " style={{ padding: "20px" }}>
          <div className="row">
            <div className="col-md-12 text-end">
              <div className="justify-content-end d-flex gap-3">
                <button onClick={createPDF} className="btn btn-success">Download Blueprint 1</button>
                <button onClick={createPDF1} className="btn btn-success">Download Blueprint 2</button>
                {/* <FiPrinter onClick={createPDF} style={{cursor:"pointer",color:"blue"}} />

               <FiPrinter onClick={createPDF1} style={{cursor:"pointer",color:"blue"}} /> */}
                <div id="google_translate_element"></div>
              </div>


            </div>
          </div>

          <div className="blueprint-content-display" >
            <div id="pdf">
              <div className="blueprint-titles">
                <h3>{blueprint?.blName}</h3>
                {/* <h3>೭ ನೀ ತರಗತಿ ಪ್ರಥಮ ಬಾಷೆ ಕನ್ನಡ ನೇಲಿ ನಕ್ಷೆ</h3> */}
                <h4>{bluePrintHeader?.BluePrintName}</h4>
              </div>
              <div className="container">
                <div className="d-flex gap-2">
                  <div className="col-md-7 blue-print_1tab">
                    {/* table 3  */}
                    <div className="weightage-objectives">
                      <div className="main-title">
                        <b>1.</b>
                        <b>{bluePrintHeader?.UnitWiseMrk}</b>
                      </div>
                      <div className="objectives-table ">
                        <Table
                          responsive
                          bordered
                          hover
                          size="md"
                          style={{ border: "2px solid black" }}
                        >
                          <thead>
                            <tr
                              style={{
                                border: "2px solid black",
                              }}
                            >
                              <th
                                style={{
                                  border: "1px solid black",
                                }}
                              >{bluePrintHeader?.SNo}</th>
                              <th
                                style={{
                                  border: "1px solid black",
                                }}
                              >{bluePrintHeader?.Lessons}</th>
                              <th
                                style={{
                                  border: "1px solid black",
                                }}
                              >{bluePrintHeader?.Questions}</th>
                              <th
                                style={{
                                  border: "1px solid black",
                                }}
                              >{bluePrintHeader?.Marks}</th>
                              <th
                                style={{
                                  border: "1px solid black",
                                }}
                              >{bluePrintHeader?.Percentage}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {uniqueObjectsArray?.map((item, i) => {
                              return (<tr
                                style={{
                                  border: "2px solid black",
                                }}
                              >
                                <td
                                  style={{
                                border: "1px solid black",
                              }}
                                >{i + 1}</td>
                                <td
                                  style={{
                                border: "1px solid black",
                              }}
                                >{item?.name}</td>
                                <td
                                  style={{
                                border: "1px solid black",
                              }}
                                >{AllChapterData?.filter((ele) => ele?.Blueprintchapter == item?.name)?.reduce(
                                  (a, ele) => a + Number(ele?.Blueprintnoofquestion),
                                  0
                                )}</td>
                                <td
                                  style={{
                                border: "1px solid black",
                              }}
                                >
                                  {AllChapterData?.filter((ele) => ele?.Blueprintchapter == item?.name)?.reduce(
                                    (a, ele) => a + Number(ele?.Blueprintnoofquestion * ele?.BluePrintmarksperquestion),
                                    0
                                  )}
                                </td>
                                <td
                                  style={{
                                border: "1px solid black",
                              }}
                                >{(AllChapterData?.filter((ele) => ele?.Blueprintchapter == item?.name)?.reduce(
                                  (a, ele) => a + Number(ele?.Blueprintnoofquestion * ele?.BluePrintmarksperquestion),
                                  0
                                ) / (blueprint?.AllChapter?.reduce(
                                  (a, ele) =>
                                    a +
                                    Number(
                                      ele?.BluePrintmarksperquestion *
                                      ele?.Blueprintnoofquestion
                                    ),
                                  0
                                ))) * 100}%</td>

                              </tr>)
                            })}

                            {/* );
                          })} */}

                            <tr
                              style={{
                                border: "2px solid black",
                              }}
                            >
                              <td
                                style={{
                                border: "1px solid black",
                              }}
                              >
                                <b>{bluePrintHeader?.Total}</b>
                              </td>
                              <td
                                style={{
                                border: "1px solid black",
                              }}
                              ></td>
                              <td
                                style={{
                                border: "1px solid black",
                              }}
                              ><b>
                                {blueprint?.AllChapter?.reduce(
                                  (a, ele) => a + Number(ele?.Blueprintnoofquestion),
                                  0
                                )}
                              </b></td>
                              <td
                                style={{
                                border: "1px solid black",
                              }}
                              >  <b>
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

                              </td>
                              <td
                                style={{
                                border: "1px solid black",
                              }}
                              >
                                <b>
                                  {/* {blueprint?.TypesofQuestions?.reduce(
                                  (a, i) => a + Number(i?.Mask * i?.NQA),
                                  0
                                )} */}
                                  100%
                                </b>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                    {/* <div className="weightage-objectives">
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
                                // <td>{val?.NQA}</td>
                         // <td>{val?.Mask}</td> 
                              </tr>
                            );
                          })}

                          <tr>
                            <td>
                              <b>Total</b>
                            </td>
                            <td> </td>
                            <td> </td>
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
                  </div> */}
                  </div>
                  <div className="col-md-5 blue-print_1tab">
                    {/* table 1 */}
                    <div className="weightage-objectives">
                      <div className="main-title">
                        <b>2.</b>
                        <b>{bluePrintHeader?.ObjectiveMrks}</b>
                      </div>
                      <div className="objectives-table">
                        <Table
                          responsive
                          bordered
                          hover
                          size="md"
                          style={{ border: "1px solid" }}
                        >
                          <thead>
                            <tr
                              style={{
                                border: "2px solid black",
                              }}
                            >
                              <th
                                style={{
                                border: "1px solid black",
                              }}
                              >{bluePrintHeader?.SNo}</th>
                              <th
                                style={{
                                border: "1px solid black",
                              }}
                              >{bluePrintHeader?.Specifics}</th>
                              <th
                                style={{
                                border: "1px solid black",
                              }}
                              >{bluePrintHeader?.Questions}</th>
                              <th
                                style={{
                                border: "1px solid black",
                              }}
                              >{bluePrintHeader?.Marks}</th>
                              <th
                                style={{
                                border: "1px solid black",
                              }}
                              >{bluePrintHeader?.Percentage}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {blueprint?.objectives?.map((item, i) => {
                              return (
                                <tr
                                style={{
                                  border: "2px solid black",
                                }}
                                >
                                  <td
                                    style={{
                                border: "1px solid black",
                              }}
                                  >{i + 1}</td>
                                  <td
                                    style={{
                                border: "1px solid black",
                              }}
                                  >{item?.Objective}</td>
                                  <td
                                    style={{
                                border: "1px solid black",
                              }}
                                  >{AllChapterData?.filter((ele) => ele?.Blueprintobjective == item?.Objective)?.reduce(
                                    (a, ele) => a + Number(ele?.Blueprintnoofquestion),
                                    0
                                  )}</td>
                                  <td
                                    style={{
                                border: "1px solid black",
                              }}
                                  >
                                    {AllChapterData?.filter((ele) => ele?.Blueprintobjective == item?.Objective)?.reduce(
                                      (a, ele) => a + Number(ele?.Blueprintnoofquestion * ele?.BluePrintmarksperquestion),
                                      0
                                    )}
                                  </td>
                                  <td
                                    style={{
                                border: "1px solid black",
                              }}
                                  >{(AllChapterData?.filter((ele) => ele?.Blueprintobjective == item?.Objective)?.reduce(
                                    (a, ele) => a + Number(ele?.Blueprintnoofquestion * ele?.BluePrintmarksperquestion),
                                    0
                                  ) / (blueprint?.AllChapter?.reduce(
                                    (a, ele) =>
                                      a +
                                      Number(
                                        ele?.BluePrintmarksperquestion *
                                        ele?.Blueprintnoofquestion
                                      ),
                                    0
                                  ))) * 100}%</td>

                                </tr>
                              )
                            })}

                            <tr>
                              <td
                                style={{
                                border: "1px solid black",
                              }}
                              ></td>
                              <td
                                style={{
                                border: "1px solid black",
                              }}
                              >
                                <b>{bluePrintHeader?.Total}</b>
                              </td>

                              <td
                                style={{
                                border: "1px solid black",
                              }}
                              ><b>
                                {blueprint?.AllChapter?.reduce(
                                  (a, ele) => a + Number(ele?.Blueprintnoofquestion),
                                  0
                                )}
                              </b></td>
                              <td
                                style={{
                                border: "1px solid black",
                              }}
                              >  <b>
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

                              </td>

                              <td
                                style={{
                                border: "1px solid black",
                              }}
                              >
                                <b>
                                  {/* {blueprint?.TypesofQuestions?.reduce(
                                  (a, i) => a + Number(i?.Mask * i?.NQA),
                                  0
                                )} */}
                                  100%
                                </b>
                              </td>
                            </tr>
                            {/* );
                          })} */}


                          </tbody>
                        </Table>
                      </div>
                    </div>
                    {/* <div className="weightage-objectives">
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
                  </div> */}

                    {/* table 2 */}
                    <div className="weightage-objectives">
                      <div className="main-title">
                        <b>3.</b>
                        <b>{bluePrintHeader?.QuestionWiseMrk}</b>
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
                            <thead>
                              <tr
                                style={{
                                  border: "2px solid black",
                                }}
                              >
                                <th
                                  style={{
                                border: "1px solid black",
                              }}
                                >{bluePrintHeader?.SNo}</th>
                                <th
                                  style={{
                                border: "1px solid black",
                              }}
                                >{bluePrintHeader?.TypeOfQuestion}</th>
                                <th
                                  style={{
                                border: "1px solid black",
                              }}
                                >{bluePrintHeader?.Questions}</th>
                                <th
                                  style={{
                                border: "1px solid black",
                              }}
                                >{bluePrintHeader?.Marks}</th>
                                <th
                                  style={{
                                border: "1px solid black",
                              }}
                                >{bluePrintHeader?.Percentage}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* {blueprint?.Weightageofthecontent?.map((val, i) => {
                              return ( */}
                              <tr 
                                style={{
                                  border: "2px solid black",
                                }}
                              >
                                <td
                                        style={{
                                          border: "1px solid black",
                                        }}
                                >1</td>
                                <td
                                        style={{
                                          border: "1px solid black",
                                        }}
                                >{bluePrintHeader?.Objectivequestion}</td>
                                <td
                                        style={{
                                          border: "1px solid black",
                                        }}
                                >{AllChapterData?.filter(
                                  (item) =>

                                    item?.BluePrintQuestiontype == "O T"
                                )?.reduce(
                                  (a, am) =>
                                    a + Number(am?.Blueprintnoofquestion),
                                  0
                                )}</td>

                                <td
                                        style={{
                                  border: "1px solid black",
                                }}
                                >{AllChapterData?.filter(
                                  (item) =>

                                    item?.BluePrintQuestiontype == "O T"
                                )?.reduce(
                                  (a, am) =>
                                    a + Number(am?.BluePrintmarksperquestion *
                                      am?.Blueprintnoofquestion),
                                  0
                                )}</td>
                                <td
                                        style={{
                                  border: "1px solid black",
                                }}
                                >{(AllChapterData?.filter((item) => item?.BluePrintQuestiontype == "O T")?.reduce(
                                  (a, ele) => a + Number(ele?.Blueprintnoofquestion * ele?.BluePrintmarksperquestion),
                                  0
                                ) / (blueprint?.AllChapter?.reduce(
                                  (a, ele) =>
                                    a +
                                    Number(
                                      ele?.BluePrintmarksperquestion *
                                      ele?.Blueprintnoofquestion
                                    ),
                                  0
                                ))) * 100}%</td>
                              </tr>
                              <tr 
                                      style={{
                                        border: "2px solid black",
                                      }}
                              >
                                <td
                                style={{
                                        border: "1px solid black",
                                      }}
                                >2</td>
                                <td
                                style={{
                                  border: "1px solid black",
                                }}
                                >{bluePrintHeader?.ShortanswerQ}</td>
                                <td
                                style={{
                                  border: "1px solid black",
                                }}
                                >{AllChapterData?.filter(
                                  (item) =>

                                    item?.BluePrintQuestiontype == "V.S.A" || item?.BluePrintQuestiontype == "S.A"
                                )?.reduce(
                                  (a, am) =>
                                    a + Number(am?.Blueprintnoofquestion),
                                  0
                                )}</td>

                                <td
                                style={{
                                        border: "1px solid black",
                                      }}
                                >{AllChapterData?.filter(
                                  (item) =>

                                    item?.BluePrintQuestiontype == "V.S.A" || item?.BluePrintQuestiontype == "S.A"
                                )?.reduce(
                                  (a, am) =>
                                    a + Number(am?.BluePrintmarksperquestion *
                                      am?.Blueprintnoofquestion),
                                  0
                                )}</td>
                                <td
                                style={{
                                        border: "1px solid black",
                                      }}
                                >{(AllChapterData?.filter((item) => item?.BluePrintQuestiontype == "V.S.A" || item?.BluePrintQuestiontype == "S.A")?.reduce(
                                  (a, ele) => a + Number(ele?.Blueprintnoofquestion * ele?.BluePrintmarksperquestion),
                                  0
                                ) / (blueprint?.AllChapter?.reduce(
                                  (a, ele) =>
                                    a +
                                    Number(
                                      ele?.BluePrintmarksperquestion *
                                      ele?.Blueprintnoofquestion
                                    ),
                                  0
                                ))) * 100}%</td>
                              </tr>
                              <tr 
                              style={{
                                border: "2px solid black",
                              }}
                              >
                                <td>3</td>
                                <td>{bluePrintHeader?.LonganswerQ}</td>
                                <td>{AllChapterData?.filter(
                                  (item) =>

                                    item?.BluePrintQuestiontype == "L.A 1" || item?.BluePrintQuestiontype == "L.A 2" || item?.BluePrintQuestiontype == "L.A 3"
                                )?.reduce(
                                  (a, am) =>
                                    a + Number(am?.Blueprintnoofquestion),
                                  0
                                )}</td>

                                <td
                                style={{
                                        border: "1px solid black",
                                      }}
                                >{AllChapterData?.filter(
                                  (item) =>

                                    item?.BluePrintQuestiontype == "L.A 1" || item?.BluePrintQuestiontype == "L.A 2" || item?.BluePrintQuestiontype == "L.A 3"
                                )?.reduce(
                                  (a, am) =>
                                    a + Number(am?.BluePrintmarksperquestion *
                                      am?.Blueprintnoofquestion),
                                  0
                                )}</td>
                                <td
                                style={{
                                        border: "1px solid black",
                                      }}
                                >{(AllChapterData?.filter((item) => item?.BluePrintQuestiontype == "L.A 1" || item?.BluePrintQuestiontype == "L.A 2" || item?.BluePrintQuestiontype == "L.A 3")?.reduce(
                                  (a, ele) => a + Number(ele?.Blueprintnoofquestion * ele?.BluePrintmarksperquestion),
                                  0
                                ) / (blueprint?.AllChapter?.reduce(
                                  (a, ele) =>
                                    a +
                                    Number(
                                      ele?.BluePrintmarksperquestion *
                                      ele?.Blueprintnoofquestion
                                    ),
                                  0
                                ))) * 100}%</td>
                              </tr>
                              {/* );
                            })} */}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                    {/* <div className="weightage-objectives">
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
                  </div> */}
                    {/* <div className="weightage-objectives">
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
                  </div> */}

                    {/* table 4  */}
                    <div className="weightage-objectives">
                      <div className="main-title">
                        <b>4.</b>
                        <b>{bluePrintHeader?.AccordingRigorMrk}</b>
                      </div>
                      <div className="objectives-table">
                        <Table
                          bordered
                          hover
                          size="md"
                          style={{ border: "1px solid" }}
                        >
                          <thead>
                            <tr
                            style={{
                              border: "2px solid black",
                            }}
                            >
                              <th
                              style={{
                                        border: "1px solid black",
                                      }}
                              >{bluePrintHeader?.SNo}</th>
                              <th
                              style={{
                                        border: "1px solid black",
                                      }}
                              >{bluePrintHeader?.LevelOfDifficult}</th>
                              <th
                              style={{
                                        border: "1px solid black",
                                      }}
                              >{bluePrintHeader?.Questions}</th>
                              <th
                              style={{
                                        border: "1px solid black",
                                      }}
                              >{bluePrintHeader?.Marks}</th>
                              <th
                              style={{
                                        border: "1px solid black",
                                      }}
                              >{bluePrintHeader?.Percentage}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                                style={{
                                  border: "2px solid black",
                                }}
                            >
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >1</td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{bluePrintHeader?.Easy} </td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{blueprint?.Easy}</td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{blueprint?.EasyMask}</td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{blueprint?.EasyParcentage}%</td>
                            </tr>
                            <tr
                                style={{
                                  border: "2px solid black",
                                }}
                            >
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >2</td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{bluePrintHeader?.MediumQ} </td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{blueprint?.Average}</td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{blueprint?.AverageMask}</td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{blueprint?.AverageParcentage}%</td>
                            </tr>
                            <tr
                                style={{
                                  border: "2px solid black",
                                }}
                            >
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >3</td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{bluePrintHeader?.Difficult}</td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{blueprint?.Difficult}</td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{blueprint?.DifficultMask}</td>
                              <td
                                  style={{
                                        border: "1px solid black",
                                      }}
                              >{blueprint?.DifficultParcentage}%</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                    {/* <div className="weightage-objectives">
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
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* blue print 2  */}
          <div id="pdf1" className="asdasdasd_asdaasda">
            <div style={{ fontFamily: "sans-serif", }}>
              <div
                className="blueprint2-container"
                style={{ padding: "20px 8px" }}
              >


                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <b>{bluePrintHeader?.Time} : {blueprint?.DurationOfExam}</b>
                  </div>
                  <div>
                    <b>{bluePrintHeader?.BluePrintName}</b>
                  </div>
                  <div>
                    <b>
                      {bluePrintHeader?.Marks} :-
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

                <div className="asdasd_asda">
                  <Table
                    responsive
                    bordered
                    style={{ border: "1px solid", width: "fit-content", height: "32rem" }}
                  >
                    <thead>
                      <tr
                      style={{border:"2px solid #000"}}
                      >
                        <th style={{ fontSize: "12px", width: "32px" , border:"2px solid #000"}}>{bluePrintHeader?.SNo} </th>
                        <th style={{ width: "125px", fontSize: "12px" , border:"2px solid #000"}}>{bluePrintHeader?.TargetUnit}</th>
                        {blueprint?.objectives?.map((ele) => {
                          return (
                            <>
                              <th colSpan={6} style={{ fontSize: "12px", border:"2px solid #000" }}>{ele?.Objective}</th>

                            </>
                          );
                        })}

                        <th colSpan={6} style={{ fontSize: "12px" , border:"2px solid #000"}}>{bluePrintHeader?.TotalQuestion}</th>

                        <th colSpan={1} style={{ fontSize: "12px", border:"2px solid #000" }}>{bluePrintHeader?.TotalMarks}</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr style={{ border: "2px solid black" }}>
                        <th
                        style={{ border: "1px solid black" }}
                        ></th>
                        <th
                        style={{ border: "1px solid black" }}
                        ></th>

                        <th style={{ fontSize: "12px", border: "1px solid black" }}>
                          {bluePrintHeader?.V}
                        </th>
                        <th colSpan={2} style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.K}</th>
                        <th colSpan={3} style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.D}</th>
                        <th style={{ fontSize: "12px", border: "1px solid black" }}>
                          {bluePrintHeader?.V}
                        </th>
                        <th colSpan={2} style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.K}</th>
                        <th colSpan={3} style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.D}</th>
                        <th style={{ fontSize: "12px", border: "1px solid black" }}>
                          {bluePrintHeader?.V}
                        </th>
                        <th colSpan={2} style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.K}</th>
                        <th colSpan={3} style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.D}</th>
                        <th style={{ fontSize: "12px", border: "1px solid black" }}>
                          {bluePrintHeader?.V}
                        </th>
                        <th colSpan={2} style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.K}</th>
                        <th colSpan={3} style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.D}</th>
                        <th style={{ fontSize: "12px", border: "1px solid black" }}>
                          {bluePrintHeader?.V}
                        </th>
                        <th colSpan={2} style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.K}</th>
                        <th colSpan={3} style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.D}</th>

                        {/* 
                        <th style={{ fontSize: "12px" }}>
                          ವ
                        </th>
                        <th colSpan={2} style={{ fontSize: "12px" }}>ಕಿ.</th>
                        <th colSpan={3} style={{ fontSize: "12px" }}>ದೀ</th>

                        <th style={{ fontSize: "12px" }}>
                          ವ
                        </th>
                        <th colSpan={2} style={{ fontSize: "12px" }}>ಕಿ.</th>
                        <th colSpan={3} style={{ fontSize: "12px" }}>ದೀ</th>

                        <th style={{ fontSize: "12px" }}>
                          ವ
                        </th>
                        <th colSpan={2} style={{ fontSize: "12px" }}>ಕಿ.</th>
                        <th colSpan={3} style={{ fontSize: "12px" }}>ದೀ</th>

                        <th style={{ fontSize: "12px" }}>
                          ವ
                        </th>
                        <th colSpan={2} style={{ fontSize: "12px" }}>ಕಿ.</th>
                        <th colSpan={3} style={{ fontSize: "12px" }}>ದೀ</th> */}



                      </tr>
                      <tr
                      style={{border: "2px solid black"}}
                      >
                        <th style={{border: "1px solid black"}}></th>

                        <th style={{ width: "125px", fontSize: "12px", border: "1px solid black" }}></th>
                        {blueprint?.objectives?.map((ele) => {
                          return (
                            <>

                              <th style={{ fontSize: "12px", border: "1px solid black" }}></th>
                              <th style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.VSA}</th>
                              <th style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.SA}</th>

                              <th style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.LA1}</th>
                              <th style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.LA2}</th>
                              <th style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.LA3}</th>
                            </>
                          );
                        })}

                        <th style={{ fontSize: "12px", border: "1px solid black" }}></th>
                        <th style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.VSA}</th>
                        <th style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.SA}</th>

                        <th style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.LA1}</th>
                        <th style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.LA2}</th>
                        <th style={{ fontSize: "12px", border: "1px solid black" }}>{bluePrintHeader?.LA3}</th>

                        <th style={{ fontSize: "12px", border: "1px solid black" }}></th>
                      </tr>
                      {uniqueObjectsArray?.map((ele, i) => {
                        return (
                          <tr
                          style={{border: "2px solid black"}}
                          >
                            <td style={{ fontSize: "12px", border: "1px solid black" }}>{i + 1}</td>
                            <td style={{ width: "125px", fontSize: "12px", border: "1px solid black" }}>{ele?.name}</td>
                            {blueprint?.objectives?.map((ele1) => {
                              return (
                                <>
                                  <td style={{ fontSize: "12px", border: "1px solid black" }}>
                                    {
                                      AllChapterData?.find(
                                        (item) =>
                                          item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                          item?.BluePrintQuestiontype == "O T" &&
                                          item?.Blueprintchapter == ele?.name
                                      )?.Blueprintnoofquestion
                                    }
                                    {AllChapterData?.some(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                        item?.BluePrintQuestiontype == "O T" &&
                                        item?.Blueprintchapter == ele?.name
                                    )
                                      ? `*(${AllChapterData?.find(
                                        (item) =>
                                          item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                          item?.BluePrintQuestiontype ==
                                          "O T" &&
                                          item?.Blueprintchapter == ele?.name
                                      )?.BluePrintmarksperquestion
                                      })`
                                      : ""}
                                  </td>
                                  <td style={{ fontSize: "12px" }}>
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
                                      ? `*(${AllChapterData?.find(
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
                                  <td style={{ fontSize: "12px", border: "1px solid black" }}>
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
                                      ? `*(${AllChapterData?.find(
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
                                  <td style={{ fontSize: "12px", border: "1px solid black" }}>
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
                                      ? `*(${AllChapterData?.find(
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
                                  <td style={{ fontSize: "12px", border: "1px solid black" }}>
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
                                      ? `*(${AllChapterData?.find(
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
                                  <td style={{ fontSize: "12px", border: "1px solid black" }}>
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
                                      ? `*(${AllChapterData?.find(
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

                            <td style={{ fontSize: "12px", border: "1px solid black" }}>
                              {bluePrintTotalQues(ele?.name, "O T")?.TotalQ}
                            </td>
                            <td style={{ fontSize: "12px", border: "1px solid black" }}>
                              {bluePrintTotalQues(ele?.name, "V.S.A")?.TotalQ}
                            </td>
                            <td style={{ fontSize: "12px", border: "1px solid black" }}>
                              {bluePrintTotalQues(ele?.name, "S.A")?.TotalQ}
                            </td>
                            <td style={{ fontSize: "12px", border: "1px solid black" }}>
                              {bluePrintTotalQues(ele?.name, "L.A 1")?.TotalQ}
                            </td>
                            <td style={{ fontSize: "12px", border: "1px solid black" }}>
                              {bluePrintTotalQues(ele?.name, "L.A 2")?.TotalQ}
                            </td>
                            <td style={{ fontSize: "12px", border: "1px solid black" }}>
                              {bluePrintTotalQues(ele?.name, "L.A 3")?.TotalQ}
                            </td>

                            <td style={{ fontSize: "12px", border: "1px solid black" }}>{QuestionNameWiseMask(ele?.name)?.totalMas}</td>
                          </tr>
                        );
                      })}
                      <tr style={{border: "2px solid black"}}>
                        <td style={{border: "1px solid black"}}></td>
                        <td style={{ fontSize: "12px", width: "46px", border: "1px solid black" }}>{bluePrintHeader?.Total}</td>
                        {blueprint?.objectives?.map((ele) => {
                          return (
                            <>
                              <td style={{ fontSize: "12px", border: "1px solid black" }}>
                                {AllChapterData?.some(
                                  (item) =>
                                    item?.Blueprintobjective == ele?.Objective &&
                                    item?.BluePrintQuestiontype == "O T"
                                ) ? (
                                  <span>
                                    {AllChapterData?.filter(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                        ele?.Objective &&
                                        item?.BluePrintQuestiontype == "O T"
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
                                        item?.BluePrintQuestiontype == "O T"
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
                              <td style={{ fontSize: "12px", border: "1px solid black" }}>
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
                              <td style={{ fontSize: "12px", border: "1px solid black" }}>
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
                              <td style={{ fontSize: "12px", border: "1px solid black" }}>
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
                              <td style={{ fontSize: "12px", border: "1px solid black" }}>
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
                              <td style={{ fontSize: "12px", border: "1px solid black" }}>
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

                        <td style={{border: "1px solid black", }}></td>
                        <td style={{border: "1px solid black", }}></td>
                        <td style={{border: "1px solid black", }}></td>
                        <td style={{border: "1px solid black", }}></td>
                        <td style={{border: "1px solid black", }}></td>
                        <td style={{ fontSize: "12px" }}>
                          {blueprint?.AllChapter?.reduce(
                            (a, ele) => a + Number(ele?.Blueprintnoofquestion),
                            0
                          )}
                        </td>
                        <td style={{ fontSize: "12px", border: "1px solid black" }}>
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
                <span>{bluePrintHeader?.Note}:-</span>
                {parse(`<span>${blueprint?.Instructions}</span>`)}
              </div>
            </div>
            </div>
        </div>
      </div>


    </>
  );
}

export default AdminBlueprintdetailsview;
