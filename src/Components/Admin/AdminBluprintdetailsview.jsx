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
  const [latex, setLatex] = useState('')
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

  function bluePrintTotalQues(chapterName,Qtype) {
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
var TotalMask=0
  const QuestionNameWiseMask=(chapterName)=>{
    let obj = { TotalQ: "", totalMas: "" };
    let am = AllChapterData?.filter(
      (item) =>
        item?.Blueprintchapter == chapterName
    );
    if (am.length != 0) {
      
      obj["totalMas"] = am?.reduce(
        (a, am) =>
          a + Number(am?.Blueprintnoofquestion * am?.BluePrintmarksperquestion),
        0
      );
      TotalMask=TotalMask+obj.totalMas

    }
    return obj;
  }
  return (
    <>
      <div className="box_1">
        <div className="Stepper-info " style={{ padding: "20px" }}>
        {/* <div>
     
      <MathInput setValue={setLatex} />
      <p>{latex}</p>
    </div> */}
          {/* blue print 1  */}
          <div className="blueprint-content-display">
            <div className="blueprint-titles">
              <h3>{blueprint?.blName}</h3>
              <h4> BLUE PRINT</h4>
            </div>
            {/* table 1 */}
            <div className="weightage-objectives">
              <div className="main-title">
                <b>1.</b>
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
                      <th>Objectives</th>
                      <th>Percentage</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blueprint?.objectives?.map((ele, i) => {
                      return (
                        <tr key={i}>
                          <td>{ele?.Objective}</td>
                          <td>{ele?.NoofQues}%</td>
                          <td>{ele?.Marks}</td>
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
                <b>2.</b>
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

            {/* table 3  */}
            <div className="weightage-objectives">
              <div className="main-title">
                <b>3.</b>
                <b>Weightage to type of Questions</b>
              </div>
              <div className="objectives-table">
                <Table bordered hover size="md" style={{ border: "1px solid" }}>
                  <tbody>
                    {blueprint?.TypesofQuestions?.map((val, i) => {
                      return (
                        <tr key={i}>
                          <td>{val?.QAType}</td>
                          <td>
                            {val?.NQA}x{val?.Mask}
                          </td>
                          <td>{val?.NQA * val?.Mask}</td>
                        </tr>
                      );
                    })}

                    <tr>
                      <td>
                        <b>Total</b>
                      </td>
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

            {/* table 4  */}
            <div className="weightage-objectives">
              <div className="main-title">
                <b>4.</b>
                <b>Weightage to Difficult Level</b>
              </div>
              <div className="objectives-table">
                <Table bordered hover size="md" style={{ border: "1px solid" }}>
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
                  style={{ border: "1px solid" }}
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
                            <th>M.C</th>
                            <th>V.S.A</th>
                            <th>S.A</th>
                            <th>L.A.1</th>
                            <th>L.A.2</th>
                            <th>L.A.3</th>
                          </>
                        );
                      })}

                      <th>M.C</th>
                      <th>V.S.A</th>
                      <th>S.A</th>
                      <th>L.A.1</th>
                      <th>L.A.2</th>
                      <th>L.A.3</th>
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
                                          item?.BluePrintQuestiontype == "M C" &&
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
                                          item?.BluePrintQuestiontype == "S.A" &&
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
                            {bluePrintTotalQues(ele?.name,"M C")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(ele?.name,"V.S.A")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(ele?.name,"S.A")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(ele?.name,"L.A 1")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(ele?.name,"L.A 2")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(ele?.name,"L.A 3")?.TotalQ}
                          </td>
                       
                          <td>{QuestionNameWiseMask(ele?.name)?.totalMas}</td>
                          
                        </tr>
                      );
                    })}
                    <tr>
                      <td></td>
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{blueprint?.AllChapter?.reduce(
                      (a, ele) =>
                        a +
                        Number(
                          ele?.BluePrintmarksperquestion *
                            ele?.Blueprintnoofquestion
                        ),
                      0
                    )}</td>
                  
                    </tr>
                  </tbody>
               
                </Table>

              </div>
              <span>Note:-</span>{parse(`<span>${blueprint?.Instructions}</span>`)}
            </div>
          </div>
          

        </div>
       
      </div>
    </>
  );
}

export default AdminBlueprintdetailsview;
