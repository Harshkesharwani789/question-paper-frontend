import React, { useEffect, useState } from "react";
import "../Admin/Admin.css";
import { Form, Table } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../Admin/Admin.css";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  const [blueprint, setblueprint] = useState([]);
  const getallblueprint = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/admin/getblueprintsbyid/${blueprint_ID}`
      );

      if (res.status == 200) {
        setblueprint(res.data.success);
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
  console.log("blueprint", blueprint);
  console.log("weightage", weightage);
  return (
    <>
      <div className="box_1">
        <div className="Stepper-info " style={{ padding: "20px" }}>
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
                <Table bordered hover style={{ border: "1px solid" }}>
                  <thead>
                    <tr>
                      <th>Objectives</th>
                      <th>Percentage</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Remembering</td>
                      <td>{blueprint?.NQRemembering}</td>
                      <td>{blueprint?.MaskRemembering}</td>
                    </tr>
                    <tr>
                      <td>Understanding</td>
                      <td>{blueprint?.NQUnderstanding}</td>
                      <td>{blueprint?.MaskUnderstanding}</td>
                    </tr>

                    <tr>
                      <td>Expression</td>
                      <td>{blueprint?.NQExpression}</td>
                      <td>{blueprint?.MaskExpression}</td>
                    </tr>
                    <tr>
                      <td>Appreciation</td>
                      <td>{blueprint?.NQAppreciation}</td>
                      <td>{blueprint?.MaskAppreciation}</td>
                    </tr>
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

                      {/* <tr>
                        <td>Poetry</td>
                        <td>{blueprint?.PoetryWeightage}</td>
                      </tr>
                      <tr>
                        <td>Non-details</td>
                        <td>{blueprint?.NonDetailedWeightage}</td>
                      </tr>
                      <tr>
                        <td>
                          Grammer 20 + <br></br> Vocabulary
                        </td>
                        <td>
                          <span style={{ borderBottom: "1px solid" }}>33</span>{" "}
                          <br></br>100
                        </td>
                      </tr> */}
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
                  <tbody >
                    {blueprint?.TypesofQuestions?.map((val, i) => {
                      return (
                        <tr key={i}>
                          <td>{val?.QAType}</td>
                          <td>
                            {val?.NQA}x{val?.Mask}
                          </td>
                          <td></td>
                        </tr>
                      );
                    })}

                    <tr>
                      <td>
                        <b>Total</b>
                      </td>
                      <td></td>
                      <td>
                        <b>100</b>
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
                      <td></td>
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
              style={{ padding: "20px 0px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <b>Time : 3 hrs.</b>
                </div>
                <div>
                  <b>BLUE PRINT</b>
                </div>
                <div>
                  <b>Marks : 100</b>
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
                      <th>Sr.No</th>
                      {/* {Array.from({ length: 23 }).map((_, index) => (
                                    <th key={index}>Table heading</th>
                                ))} */}
                      <th>content</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>comprehension</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>expression</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>appreciation</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>total question</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>total marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      {/* {Array.from({ length: 23 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))} */}
                      <td></td>
                      <td>M.C</td>
                      <td>V.S.A</td>
                      <td>S.A</td>
                      <td>L.A</td>
                      <td>L.A</td>
                      <td>L.A</td>
                      <td>M.C</td>
                      <td>V.S.A</td>
                      <td>S.A</td>
                      <td>L.A</td>
                      <td>L.A</td>
                      <td>L.A</td>
                      <td>M.C</td>
                      <td>V.S.A</td>
                      <td>S.A</td>
                      <td>L.A</td>
                      <td>L.A</td>
                      <td>L.A</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      {/* {Array.from({ length: 23 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))} */}
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      {/* {Array.from({ length: 23 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))} */}
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      {/* {Array.from({ length: 23 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))} */}
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      {/* {Array.from({ length: 23 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))} */}
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>lesson name</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminBlueprintdetailsview;
