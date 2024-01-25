import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Admin/Admin.css";
import { Form, Table } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../Admin/Admin.css";
import { FaArrowsUpDownLeftRight } from "react-icons/fa6";
import { MdPlayArrow } from "react-icons/md";
import axios from "axios";
import swal from "sweetalert";

const steps = [
  "Blueprint Details",
  "Weightage to the ContentMarks Details",
  "Marks Details",
  " Weightage of the Difficulty Level",
];

const AdminEditBluePrint = () => {
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

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  // get method of Board
  const [getboardname, setboardname] = useState([]);
  const getallboardname = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getAllBoard");
      if (res.status == 200) {
        setboardname(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //get for subject
  const [subject, setsubject] = useState([]);
  const getSubject = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllSujects"
      );
      if (res.status == 200) {
        setsubject(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //get method for medium
  const [Mediumm, setMediumm] = useState([]);
  const getAddMedium = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getAllMedium");
      if (res.status == 200) {
        setMediumm(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // get method add class
  const [getclassname, setgetclassName] = useState([]);
  const getallclassname = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getAllClass");
      if (res.status == 200) {
        setgetclassName(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // get method for subclass
  const [getaddsubclass, setgetaddsubclass] = useState([]);
  const getaddsubclasss = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/admin/getAllSubClass"
      );
      if (res.status == 200) {
        setgetaddsubclass(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //update Details
  const [blName, setblName] = useState("");
  const [board, setboard] = useState("");
  const [medium, setmedium] = useState("");
  const [className, setclassName] = useState("");
  const [SubClassName, setSubClassName] = useState("");
  const [subjects, setsubjects] = useState("");
  const [Instructions, setInstructions] = useState("");
  const [Remembering, setRemembering] = useState("");
  const [NQRemembering, setNQRemembering] = useState("");
  const [MaskRemembering, setMaskRemembering] = useState("");
  const [Understanding, setUnderstanding] = useState("");
  const [NQUnderstanding, setNQUnderstanding] = useState("");
  const [MaskUnderstanding, setMaskUnderstanding] = useState("");
  const [Expression, setExpression] = useState("");
  const [NQExpression, setNQExpression] = useState("");
  const [MaskExpression, setMaskExpression] = useState("");
  const [Appreciation, setAppreciation] = useState("");
  const [MaskAppreciation, setMaskAppreciation] = useState("");
  const [NQAppreciation, setNQAppreciation] = useState("");
  const [Weightageofthecontent, setWeightageofthecontent] = useState("");
  const [QAType, setQAType] = useState("");
  const [NQA, setNQA] = useState("");
  const [Mask, setMask] = useState("");
  const [DurationOfExam, setDurationOfExam] = useState("");
  const [TotalMask, setTotalMask] = useState("");
  const [Easy, setEasy] = useState("");
  const [EasyMask, setEasyMask] = useState("");
  const [Average, setAverage] = useState("");
  const [AverageMask, setAverageMask] = useState("");
  const [Difficult, setDifficult] = useState("");
  const [DifficultMask, setDifficultMask] = useState("");
  const [TotalDifficultMask, setTotalDifficultMask] = useState("");
  const [label, setlabel] = useState("");
  const [Marks, setMarks] = useState("");
  const [TypesofQuestions, setTypesofQuestions] = useState(false);
  const [updateblueprintdetails, setupdateblueprintdetails] = useState("");

  const UpdateBluePrintDetails = async () => {
    try {
      const config = {
        url: "/admin/",
        method: "put",
        baseURL: "http:localhost:8000/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          blName: blName,
          board: board,
          medium: medium,
          className: className,
          SubClassName: SubClassName,
          subjects: subjects,
          Instructions: Instructions,
          Remembering: Remembering,
          NQRemembering: NQRemembering,
          MaskRemembering: MaskRemembering,
          Understanding: Understanding,
          NQUnderstanding: NQUnderstanding,
          MaskUnderstanding: MaskUnderstanding,
          Expression: Expression,
          NQExpression: NQExpression,
          MaskExpression: MaskExpression,
          Appreciation: Appreciation,
          MaskAppreciation: MaskAppreciation,
          NQAppreciation: NQAppreciation,
          Weightageofthecontent: Weightageofthecontent,
          TypesofQuestions: TypesofQuestions,
          DurationOfExam: DurationOfExam,
          TotalMask: TotalMask,
          Easy: Easy,
          EasyMask: EasyMask,
          Average: Average,
          AverageMask: AverageMask,
          Difficult: Difficult,
          DifficultMask: DifficultMask,
          TotalDifficultMask: TotalDifficultMask,

          authId: admin?._id,
          id: updateblueprintdetails,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        return swal({
          title: "Yeah!",
          text: res.data.success,
          icon: "success",
          button: "Ok!",
        });
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
    getallboardname();
    getSubject();
    getAddMedium();
    getallclassname();
    getaddsubclasss();
  }, []);

  return (
    <div className="box_1">
      <div className="Stepper-info " style={{ padding: "20px" }}>
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography
                  sx={{ mt: 2, mb: 1 }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  All steps completed successfully
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignSelf: "center",
                      pt: 2,
                    }}
                  >
                    <Button onClick={handleReset}>Back</Button>
                  </Box>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep == 0 ? (
                  <>
                    <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                      <div className="container" style={{ padding: "5px" }}>
                        <div className="row ">
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label htmlFor="">Blueprint Name</label>
                              <input
                                type="text"
                                className="vi_0"
                                placeholder="Enter BluePrint Name"
                                value={blName}
                                onChange={(e) => setblName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Select Board
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                className="vi_0"
                                onChange={(e) => setboard(e.target.value)}
                              >
                                <option>Select the Board</option>
                                {getboardname?.map((item, i) => {
                                  return (
                                    <option value={item?.boardName}>
                                      {item?.boardName}
                                    </option>
                                  );
                                })}
                              </Form.Select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Select Subjects{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => setsubjects(e.target.value)}
                              >
                                <option>Select the Subjects</option>
                                {subject?.map((item) => {
                                  return (
                                    <option value={item?.subjectName}>
                                      {item?.subjectName}
                                    </option>
                                  );
                                })}
                              </Form.Select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Select Medium{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => setmedium(e.target.value)}
                              >
                                <option>Select the Medium</option>
                                {Mediumm?.map((item) => {
                                  return (
                                    <option value={item?.mediumName}>
                                      {item?.mediumName}
                                    </option>
                                  );
                                })}
                              </Form.Select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Select Class{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => setclassName(e.target.value)}
                              >
                                <option>Select the Class</option>
                                {getclassname?.map((item) => {
                                  return (
                                    <option value={item?.className}>
                                      {item?.className}
                                    </option>
                                  );
                                })}
                              </Form.Select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Select Sub-Class{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                onChange={(e) =>
                                  setSubClassName(e.target.value)
                                }
                              >
                                <option>Select the Sub-Class</option>
                                {getaddsubclass?.map((item) => {
                                  return (
                                    <option value={item?.subclassName}>
                                      {item?.subclassName}
                                    </option>
                                  );
                                })}
                              </Form.Select>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-md-4">
                              <label htmlFor="">Objectives</label>
                              <p className="fs-5 mt-2">
                                <MdPlayArrow style={{ marginRight: "15px" }} />
                                Remembering
                              </p>
                            </div>
                            <div className="col-md-4">
                              <label htmlFor="">No. of Questions</label>
                              <input
                                type="text"
                                className="vi_0 mt-2"
                                placeholder="Enter No. of Questions"
                                onChange={(e) =>
                                  setNQRemembering(e.target.value)
                                }
                              />
                            </div>
                            <div className="col-md-4">
                              <label htmlFor="">Marks</label>
                              <input
                                type="number"
                                className="vi_0 mt-2"
                                placeholder="Enter the Marks"
                                onChange={(e) =>
                                  setMaskRemembering(e.target.value)
                                }
                              />
                            </div>
                            <div className="col-md-4 mt-2">
                              <p className="fs-5">
                                <MdPlayArrow style={{ marginRight: "15px" }} />
                                Understanding
                              </p>
                            </div>
                            <div className="col-md-4">
                              <input
                                type="text"
                                className="vi_0"
                                placeholder="Enter No. of Questions"
                                onChange={(e) =>
                                  setNQUnderstanding(e.target.value)
                                }
                              />
                            </div>
                            <div className="col-md-4">
                              <input
                                type="number"
                                className="vi_0"
                                placeholder="Enter the Marks"
                                onChange={(e) =>
                                  setMaskUnderstanding(e.target.value)
                                }
                              />
                            </div>
                            <div className="col-md-4 mt-2">
                              <p className="fs-5">
                                <MdPlayArrow style={{ marginRight: "15px" }} />
                                Expression
                              </p>
                            </div>
                            <div className="col-md-4">
                              <input
                                type="text"
                                className="vi_0"
                                placeholder="Enter No. of Questions"
                                onChange={(e) =>
                                  setNQExpression(e.target.value)
                                }
                              />
                            </div>
                            <div className="col-md-4">
                              <input
                                type="number"
                                className="vi_0"
                                placeholder="Enter the Marks"
                                onChange={(e) =>
                                  setMaskExpression(e.target.value)
                                }
                              />
                            </div>
                            <div className="col-md-4 mt-2">
                              <p className="fs-5">
                                <MdPlayArrow style={{ marginRight: "15px" }} />
                                Appreciation
                              </p>
                            </div>
                            <div className="col-md-4">
                              <input
                                type="text"
                                className="vi_0"
                                placeholder="Enter No. of Questions"
                                onChange={(e) =>
                                  setNQAppreciation(e.target.value)
                                }
                              />
                            </div>
                            <div className="col-md-4">
                              <input
                                type="number"
                                className="vi_0"
                                placeholder="Enter the Marks"
                                onChange={(e) =>
                                  setMaskAppreciation(e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="do-sear mt-2">
                              <label htmlFor="" className="mb-2">
                                General Instructions
                              </label>
                              <CKEditor
                                editor={ClassicEditor}
                                className="vi_0"
                                data={Instructions}
                                onChange={(event, editor) => {
                                  const data = editor.getData();
                                  setInstructions(data);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </>
                ) : (
                  <>
                    {activeStep == 1 ? (
                      <>
                       <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            <div
                              className="container"
                              style={{ padding: "5px" }}
                            >
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="do-sear">
                                    <label htmlFor="">Select Content</label>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="do-sear">
                                    <label htmlFor="">No. of Marks</label>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="do-sear">
                                    <Form.Select
                                      aria-label="Default select example"
                                      onChange={(e) => {
                                        setQAType(e.target.value);
                                      }}
                                    >
                                      <option value="">
                                        Selete the Type of Question
                                      </option>
                                      {/* {weightage
                                        ?.filter(
                                          (ele) => subjects == ele?.Subject
                                        )
                                        .map((val, i) => {
                                          return (
                                            <option value={val?.Content}>
                                              {val?.Content}
                                            </option>
                                          );
                                        })} */}
                                    </Form.Select>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="do-sear">
                                    <input
                                      type="number"
                                      name=""
                                      id=""
                                      placeholder="Enter the Weightage"
                                      className="vi_0"
                                      onChange={(e) => {
                                        setMarks(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="do-sear">
                                    <Button
                                      style={{
                                        backgroundColor: "red",
                                        color: "white",
                                      }}
                                      // onClick={() => {
                                      //   AddWeightageofthecontent();
                                      // }}
                                    >
                                      Add
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-md-12">
                                  <Table
                                    responsive
                                    bordered
                                    style={{
                                      width: "-webkit-fill-available",
                                    }}
                                  >
                                    <thead>
                                      <tr>
                                        <th>S No.</th>
                                        <th>Content</th>
                                        <th>Marks</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {/* {Arr1?.map((item, i) => {
                                        return (
                                          <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{item?.label}</td>
                                            <td>{item?.Marks}</td>
                                            <td>
                                              <AiFillDelete
                                                color="red"
                                                cursor="pointer"
                                                onClick={() => {
                                                  deletedWeightageofthecontent(
                                                    i
                                                  );
                                                }}
                                              />
                                            </td>
                                          </tr>
                                        );
                                      })} */}
                                    </tbody>
                                  </Table>
                                </div>
                              </div>
                              {/* <div className="row ">
                                {weightage
                                  ?.filter((ele) => subjects == ele?.Subject)
                                  .map((val, i) => {
                                    return (
                                      <div className="col-md-4" key={i}>
                                        <div className="do-sear mt-2">
                                          <label>
                                            {val?.Content} Weightage{" "}
                                            <span style={{ color: "red" }}>
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            placeholder={`Please Enter ${val?.Content} Marks`}
                                            className="vi_0"
                                            onChange={(e) => {
                                              setProseWeightage(e.target.value);
                                            }}
                                          />
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div> */}
                            </div>
                          </Typography>
                      </>
                    ) : (
                      <>
                        {activeStep == 2 ? (
                          <>
                            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                                <div
                                  className="container"
                                  style={{ padding: "5px" }}
                                >
                                  <div className="row">
                                    <div className="col-md-3">
                                      <label htmlFor="">
                                        Types of Questions
                                      </label>
                                    </div>
                                    <div className="col-md-3">
                                      <label htmlFor="">No. of Questions</label>
                                    </div>
                                    <div className="col-md-3">
                                      <label htmlFor="">Marks</label>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-3 mt-2">
                                      <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => {
                                          setQAType(e.target.value);
                                        }}
                                      >
                                        <option value="">
                                          Selete the Type of Question
                                        </option>
                                        {/* {getalltypesofques?.map((val, i) => {
                                          return (
                                            <option
                                              value={val?.Typesofquestion}
                                            >
                                              {val?.Typesofquestion}
                                            </option>
                                          );
                                        })} */}
                                      </Form.Select>
                                    </div>
                                    <div className="col-md-3">
                                      <input
                                        type="text"
                                        className="vi_0"
                                        placeholder="Enter No. of Questions"
                                        onChange={(e) => {
                                          setNQA(e.target.value);
                                        }}
                                      />
                                    </div>
                                    <div className="col-md-3">
                                      <input
                                        type="number"
                                        className="vi_0"
                                        placeholder="Enter the Marks"
                                        onChange={(e) => {
                                          setMask(e.target.value);
                                        }}
                                      />
                                    </div>
                                    <div className="col-md-3">
                                      <Button
                                        style={{
                                          backgroundColor: "red",
                                          color: "white",
                                        }}
                                        // onClick={AddTypesofquestion}
                                      >
                                        Add
                                      </Button>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-md-12">
                                      <Table
                                        responsive
                                        bordered
                                        style={{
                                          width: "-webkit-fill-available",
                                        }}
                                      >
                                        <thead>
                                          <tr>
                                            <th>S No.</th>
                                            <th>Content</th>
                                            <th>No. of Question</th>
                                            <th>Marks</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {/* {Arr.map((val, i) => {
                                            return ( */}
                                              <tr >
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                  {" "}
                                                  {/* <AiFillDelete
                                                    color="red"
                                                    cursor="pointer"
                                                    onClick={() =>
                                                      deleteQuestionType(i)
                                                    }
                                                  /> */}
                                                </td>
                                              </tr>
                                            {/* );
                                          })} */}
                                        </tbody>
                                      </Table>
                                    </div>
                                  </div>

                                  {/* <div className="row">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4 mt-2">
                                      <span style={{ float: "right" }}>
                                        <label htmlFor="">Total Marks</label>
                                      </span>
                                    </div>
                                    <div className="col-md-4">
                                      <input
                                        type="text"
                                        placeholder="Total Marks"
                                        className="vi_0"
                                        onChange={(e) => {
                                          setTotalMask(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </div> */}
                                  <div className="row">
                                    <div className="col-md-6">
                                      <label htmlFor="">Duration of Exam</label>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        value={DurationOfExam}
                                        placeholder="Enter Duration of Exam"
                                        onChange={(e) => {
                                          setDurationOfExam(e.target.value);
                                        }}
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label htmlFor="">Total Marks</label>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        placeholder="Total Marks"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Typography>
                          </>
                        ) : (
                          <>
                            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                              <div
                                className="container"
                                style={{ padding: "5px" }}
                              >
                               
                                <div className="row mt-3">
                                  <div className="col-md-4">
                                    <label htmlFor="">Dificulty Level</label>
                                    <p className="fs-5 mt-2">
                                      <MdPlayArrow
                                        style={{ marginRight: "15px" }}
                                      />
                                      Easy
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <label htmlFor="">No. of Questions</label>
                                    <input
                                      type="text"
                                      className="vi_0 mt-2"
                                      placeholder="Enter No. of Questions"
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <label htmlFor="">Marks</label>
                                    <input
                                      type="number"
                                      className="vi_0 mt-2"
                                      placeholder="Enter the Marks"
                                    />
                                  </div>
                                  <div className="col-md-4 mt-2">
                                    <p className="fs-5">
                                      <MdPlayArrow
                                        style={{ marginRight: "15px" }}
                                      />
                                      Average
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <input
                                      type="text"
                                      className="vi_0"
                                      placeholder="Enter No. of Questions"
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <input
                                      type="number"
                                      className="vi_0"
                                      placeholder="Enter the Marks"
                                    />
                                  </div>
                                  <div className="col-md-4 mt-2">
                                    <p className="fs-5">
                                      <MdPlayArrow
                                        style={{ marginRight: "15px" }}
                                      />
                                      Difficult
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <input
                                      type="text"
                                      className="vi_0"
                                      placeholder="Enter No. of Questions"
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <input
                                      type="number"
                                      className="vi_0"
                                      placeholder="Enter the Marks"
                                    />
                                  </div>
                                  <div className="col-md-4"></div>
                                  <div className="col-md-4 mt-2">
                                    <label
                                      htmlFor=""
                                      style={{ float: "right" }}
                                    >
                                      Total Marks
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <input
                                      type="text"
                                      className="vi_0"
                                      placeholder="Total Marks"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Typography>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? "Submit"
                          : "Complete Step"}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AdminEditBluePrint;
