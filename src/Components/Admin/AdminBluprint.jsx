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

const steps = [
  "Blueprint Details",
  "Marks Details",
  "Weightage to the Content",
  " Weightage of the Difficulty Level",
];

function AdminBlueprint() {
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
  // get method for board
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
  useEffect(() => {
    getallboardname();
    getallclassname();
    getaddsubclasss();
  }, []);
  console.log(getboardname);
  console.log(getclassname);
  console.log(getaddsubclass);

  return (
    <>
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
                                >
                                  <option>Select the Board</option>
                                  {getboardname?.map((val, i) => {
                                    return (
                                      <option value={val?.boardName} key={i}>
                                        {val?.boardName}
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
                                <Form.Select aria-label="Default select example">
                                  <option>Select the Subjects</option>
                                  <option value="English">English</option>
                                  <option value="Hindi">Hindi</option>
                                  <option value="Kanada">Kanada</option>
                                  <option value="Kanada">Maths</option>
                                  <option value="Kanada">Science</option>
                                  <option value="Kanada">Social Science</option>
                                </Form.Select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="do-sear mt-2">
                                <label>
                                  Select Medium{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <Form.Select aria-label="Default select example">
                                  <option>Select the Medium</option>
                                  <option value="English">English</option>
                                  <option value="Hindi">Hindi</option>
                                  <option value="Kanada">Kanada</option>
                                </Form.Select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="do-sear mt-2">
                                <label>
                                  Select Class{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <Form.Select aria-label="Default select example">
                                  <option>Select the Class</option>
                                  {getclassname?.map((val, i) => {
                                    return (
                                      <option value={val?.className}>
                                        {val?.className}
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
                                <Form.Select aria-label="Default select example">
                                  <option>Select the Sub-Class</option>
                                  {getaddsubclass?.map((val, i) => {
                                    return (
                                      <option value={val?.subclassName}>
                                        {val?.subclassName}
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
                                  <MdPlayArrow
                                    style={{ marginRight: "15px" }}
                                  />
                                  Remembering
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
                                  Understanding
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
                                  Expression
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
                                  Appreciation
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
                            </div>

                            <div className="col-md-12">
                              <div className="do-sear mt-2">
                                <label htmlFor="" className="mb-2">
                                  General Instructions
                                </label>
                                <CKEditor
                                  editor={ClassicEditor}
                                  className="vi_0"
                                  // data={lodingdetails}
                                  // onChange={(event, editor) => {
                                  //   const data = editor.getData();
                                  //   setlodingdetails(data);
                                  // }}
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
                                <div className="col-md-4 mt-2">
                                  <label htmlFor="">Types of Questions</label>
                                  <p className="fs-5">
                                    <MdPlayArrow
                                      style={{ marginRight: "15px" }}
                                    />
                                    Multiple Chose Questions
                                  </p>
                                </div>
                                <div className="col-md-4">
                                  <label htmlFor="">No. of Questions</label>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    placeholder="Enter No. of Questions"
                                  />
                                </div>
                                <div className="col-md-4">
                                  <label htmlFor="">Marks</label>
                                  <input
                                    type="number"
                                    className="vi_0"
                                    placeholder="Enter the Marks"
                                  />
                                </div>
                              </div>
                              <div className="row">
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
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label htmlFor="">Duration of Exam</label>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    placeholder="Enter Duration of Exam"
                                  />
                                </div>
                              </div>
                              {/* <div className="row ">
                                <div className="col-md-6">
                                  <div className="do-sear mt-2">
                                    <label>
                                      Total Marks{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="number"
                                      placeholder="Enter Total Marks"
                                      className="vi_0"
                                    />
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="do-sear mt-2">
                                    <label>
                                      Total Number of Questions{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Enter Total Number of Questions"
                                      className="vi_0"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="do-sear mt-2">
                                    <label>
                                      Duration of the Examination{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Enter Duration of the Examination"
                                      className="vi_0"
                                    />
                                  </div>
                                </div>
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
                                  <div className="row ">
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label>
                                          Prose (Lesson) Weightage{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="Enter Prose (Lesson) Marks"
                                          className="vi_0"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label>
                                          Poetry Weightage{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="Enter Poetry Marks"
                                          className="vi_0"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label>
                                          Non-Detailed Weightage{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="Enter Non-Detailed Marks"
                                          className="vi_0"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label>
                                          Grammer Weightage{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="Enter Grammer Marks"
                                          className="vi_0"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label>
                                          Vocabulary Weightage{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="Enter Vocabulary Marks"
                                          className="vi_0"
                                        />
                                      </div>
                                    </div>

                                    {/* <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Branch Name{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Branch Name "
                                        className="vi_0"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Commission Amount{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Eg:500"
                                        className="vi_0"
                                      />
                                    </div>
                                  </div> */}
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
                                  {/* <div className="row ">
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Name{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="vi_0"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Phone Number{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Phone Number"
                                        className="vi_0"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Email Id{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Email Id"
                                        className="vi_0"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Bank Name{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Bank Name"
                                        className="vi_0"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Account Number{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your A/C Number"
                                        className="vi_0"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        IFSC Code{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your IFSC Code"
                                        className="vi_0"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Branch Name{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Branch Name "
                                        className="vi_0"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Commission Amount{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Eg:500"
                                        className="vi_0"
                                      />
                                    </div>
                                  </div>
                                </div> */}
                                  {/* <div className="row">
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label>
                                          Section{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="Enter Header"
                                          className="vi_0"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label>
                                          Header 1{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="Enter Header"
                                          className="vi_0"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label>
                                          Type of Questions{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <Form.Select aria-label="Default select example">
                                          <option>
                                            Select Type of Questions
                                          </option>
                                          <option value="English">
                                            English
                                          </option>
                                          <option value="Hindi">Hindi</option>
                                          <option value="Kanada">Kanada</option>
                                          <option value="Kanada">Maths</option>
                                          <option value="Kanada">
                                            Science
                                          </option>
                                          <option value="Kanada">
                                            Social Science
                                          </option>
                                        </Form.Select>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label htmlFor="">
                                          {" "}
                                          No. of Questions
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          placeholder="Enter the No. of Questions"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label htmlFor="">
                                          {" "}
                                          Marks
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          placeholder="Enter the Marks"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <label htmlFor="">
                                          {" "}
                                          Specify the Difficulty Level
                                        </label>
                                        <div className="row">
                                          <div className="col-md-3">
                                            <label htmlFor="">Easy</label>
                                          </div>
                                          <div className="col-md-5">
                                            <input
                                              type="text"
                                              className="vi_0"
                                              placeholder="Enter No. of Questions"
                                            />
                                          </div>
                                          <div className="col-md-4">
                                            <input
                                              type="text"
                                              className="vi_0"
                                              placeholder="Marks"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="row ">
                                        <div className="col-md-3">
                                          <label htmlFor="">V S A</label>
                                          <input
                                            type="text"
                                            className="vi_0 mt-2"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                        <div className="col-md-3">
                                          <label htmlFor="">S A</label>
                                          <input
                                            type="text"
                                            className="vi_0 mt-2"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                        <div className="col-md-3 ">
                                          <label htmlFor="">L A</label>
                                          <input
                                            type="text"
                                            className="vi_0 mt-2"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                        <div className="col-md-3">
                                          <label htmlFor="">V L A</label>
                                          <input
                                            type="text"
                                            className="vi_0 mt-2"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                      </div>
                                      
                                    </div>
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <div className="row">
                                          <div className="col-md-3">
                                            <label htmlFor="">Average</label>
                                          </div>
                                          <div className="col-md-5">
                                            <input
                                              type="text"
                                              className="vi_0"
                                              placeholder="Enter No. of Questions"
                                            />
                                          </div>
                                          <div className="col-md-4">
                                            <input
                                              type="text"
                                              className="vi_0"
                                              placeholder="Marks"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-2">
                                      <div className="row ">
                                        <div className="col-md-3">
                                          <input
                                            type="text"
                                            className="vi_0"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                        <div className="col-md-3">
                                          <input
                                            type="text"
                                            className="vi_0"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                        <div className="col-md-3">
                                          <input
                                            type="text"
                                            className="vi_0"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                        <div className="col-md-3">
                                          <input
                                            type="text"
                                            className="vi_0"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                      </div>
                                      
                                    </div>
                                    <div className="col-md-6">
                                      <div className="do-sear mt-2">
                                        <div className="row">
                                          <div className="col-md-3">
                                            <label htmlFor="">Difficult</label>
                                          </div>
                                          <div className="col-md-5">
                                            <input
                                              type="text"
                                              className="vi_0"
                                              placeholder="Enter No. of Questions"
                                            />
                                          </div>
                                          <div className="col-md-4">
                                            <input
                                              type="text"
                                              className="vi_0"
                                              placeholder="Marks"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-2">
                                      <div className="row">
                                        <div className="col-md-3 ">
                                          <input
                                            type="text"
                                            className="vi_0 "
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                        <div className="col-md-3">
                                          <input
                                            type="text"
                                            className="vi_0"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                        <div className="col-md-3">
                                          <input
                                            type="text"
                                            className="vi_0"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                        <div className="col-md-3">
                                          <input
                                            type="text"
                                            className="vi_0"
                                            placeholder="No of Questions"
                                          />
                                        </div>
                                      </div>
                                      
                                    </div>

                                    <div className="text-end mb-3">
                                      <Button
                                        type="submit"
                                        style={{
                                          backgroundColor: "red",
                                          color: "white",
                                          marginTop: "10px",
                                        }}
                                      >
                                        Add
                                      </Button>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-9"></div>
                                      <div className="col-md-3">
                                        <Table
                                          responsive
                                          bordered
                                          style={{
                                            width: "-webkit-fill-available",
                                            textAlign: "center",
                                          }}
                                        >
                                          <thead>
                                            <tr>
                                              <th>Total No. of Questions</th>
                                              <th>Total Marks</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>20</td>
                                              <td>100 marks</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-9"></div>
                                      <div className="col-md-3">
                                        <Table
                                          responsive
                                          bordered
                                          style={{
                                            width: "-webkit-fill-available",
                                            textAlign: "center",
                                          }}
                                        >
                                          <thead>
                                            <tr>
                                              <th>Content</th>
                                              <th>Full Form</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <th>V S A</th>
                                              <td>Very Short Answer</td>
                                            </tr>
                                            <tr>
                                              <th>S A</th>
                                              <td>Short Answer</td>
                                            </tr>
                                            <tr>
                                              <th>V L A</th>
                                              <td>Very Long Answer</td>
                                            </tr>
                                            <tr>
                                              <th>L A</th>
                                              <td>Long Answer</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </div>
                                  </div> */}
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
    </>
  );
}

export default AdminBlueprint;
