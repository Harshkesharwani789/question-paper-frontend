import React from "react";
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

const steps = [
  "Blueprint Details",
  "Marks Details",
  "Weightage to the Content",
  " Weightage of the Difficulty Level",
];

function AdminBlueprintdetailsview() {
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

  return (
    <>
      <div className="box_1">
        <div className="Stepper-info " style={{ padding: "20px" }}>
          {/* <Box sx={{ width: "100%" }}>
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
                                  <option value="CBSE">CBSE</option>
                                  <option value="ICSE">ICSE</option>
                                  <option value="AN">
                                    Andaman and Nicobar Islands
                                  </option>
                                  <option value="AP">Andhra Pradesh</option>
                                  <option value="AR">Arunachal Pradesh</option>
                                  <option value="AS">Assam</option>
                                  <option value="BR">Bihar</option>
                                  <option value="CH">Chandigarh</option>
                                  <option value="CT">Chhattisgarh</option>
                                  <option value="DN">
                                    Dadra and Nagar Haveli
                                  </option>
                                  <option value="DD">Daman and Diu</option>
                                  <option value="DL">Delhi</option>
                                  <option value="GA">Goa</option>
                                  <option value="GJ">Gujarat</option>
                                  <option value="HR">Haryana</option>
                                  <option value="HP">Himachal Pradesh</option>
                                  <option value="JK">Jammu and Kashmir</option>
                                  <option value="JH">Jharkhand</option>
                                  <option value="KA">Karnataka</option>
                                  <option value="KL">Kerala</option>
                                  <option value="LA">Ladakh</option>
                                  <option value="LD">Lakshadweep</option>
                                  <option value="MP">Madhya Pradesh</option>
                                  <option value="MH">Maharashtra</option>
                                  <option value="MN">Manipur</option>
                                  <option value="ML">Meghalaya</option>
                                  <option value="MZ">Mizoram</option>
                                  <option value="NL">Nagaland</option>
                                  <option value="OR">Odisha</option>
                                  <option value="PY">Puducherry</option>
                                  <option value="PB">Punjab</option>
                                  <option value="RJ">Rajasthan</option>
                                  <option value="SK">Sikkim</option>
                                  <option value="TN">Tamil Nadu</option>
                                  <option value="TG">Telangana</option>
                                  <option value="TR">Tripura</option>
                                  <option value="UP">Uttar Pradesh</option>
                                  <option value="UT">Uttarakhand</option>
                                  <option value="WB">West Bengal</option>
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
                                  Select Sub-Class{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <Form.Select aria-label="Default select example">
                                  <option>Select the Sub-Class</option>
                                  <option value="English">English</option>
                                  <option value="Hindi">Hindi</option>
                                  <option value="Kanada">Kanada</option>
                                  <option value="Kanada">Maths</option>
                                  <option value="Kanada">Science</option>
                                  <option value="Kanada">Social Science</option>
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
                            : "Edit and Save"}
                        </Button>
                      ))}
                  </Box>
                </React.Fragment>
              )}
            </div>
          </Box> */}
         
         {/* blue print 1  */}
          <div className="blueprint-content-display">
            <div className="blueprint-titles">
              <h3>First Language English 2014</h3>
              <h4>DESIGN & BLUE PRINT</h4>
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
                      <td>30%</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Understanding</td>
                      <td>32%</td>
                      <td>32</td>
                    </tr>

                    <tr>
                      <td>Expression</td>
                      <td>30%</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Appreciation</td>
                      <td>8%</td>
                      <td>8</td>
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
                      <tr>
                        <td>Prose</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>Poetry</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>Non-details</td>
                        <td>07</td>
                      </tr>
                      <tr>
                        <td>
                          Grammer 20 + <br></br> Vocabulary
                        </td>
                        <td>
                          <span style={{ borderBottom: "1px solid" }}>33</span>{" "}
                          <br></br>100
                        </td>
                      </tr>
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
                <Table
                  bordered
                  hover
                  size="md"
                  style={{  border: "1px solid" }}
                >
                  <tbody>
                    <tr>
                      <td>Multiple types questions</td>
                      <td>14x1</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>One sentence answers</td>
                      <td>11x1</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>2-3 sentence answers</td>
                      <td>9x2</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>Short Answer of 3-4 sentences</td>
                      <td>9x3</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <td>Answer in 5-6 sentences</td>
                      <td>5x4</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>Compositions</td>
                      <td>2x5</td>
                      <td>10</td>
                    </tr>
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
                      <td>30</td>
                      <td>50</td>
                      <td>20</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>

{/* blue print 2  */}
<div style={{ fontFamily:"sans-serif"}}>
                <div className='blueprint2-container' style={{ padding: "20px 0px" }}>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div><b>Time : 3 hrs.</b></div>
                        <div><b>BLUE PRINT</b></div>
                        <div><b>Marks : 100</b></div>
                    </div>

                    <div>
                    <Table responsive bordered style={{border:"1px solid"}} size='sm'>
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
