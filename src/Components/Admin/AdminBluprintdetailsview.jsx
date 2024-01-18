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

const steps = [
  "Blueprint Details",
  "Marks Details",
  "Weightage to the Content",
  " Weightage of the type of Question",
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
                              <label htmlFor="">BluePrint Name </label>
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
                          {/* <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Email Id <span style={{ color: "red" }}>*</span>
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
                                GST Number{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Your GST Number"
                                className="vi_0"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                GST Document{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input type="file" className="vi_0" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Pan Number{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Your Pan Number"
                                className="vi_0"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Pan Document{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input type="file" className="vi_0" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Address 1{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Your Pan Number"
                                className="vi_0"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Address 2{" "}
                                <span style={{ color: "green" }}>
                                  (Optional)
                                </span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Your Pan Number"
                                className="vi_0"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Password <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Your Password"
                                className="vi_0"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Confirm Password{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Your Confirm Password"
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
                    {activeStep == 1 ? (
                      <>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                          <div className="container" style={{ padding: "5px" }}>
                            <div className="row ">
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
                              <div className="col-md-6">
                                <div className="do-sear mt-2">
                                  <label>
                                    Dificulty Level
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Select the Difficulty Level</option>
                                    <option value="1">Easy</option>
                                    <option value="2">Average</option>
                                    <option value="3">Difficult</option>
                                  </Form.Select>
                                </div>
                              </div>
                              {/* <div className="col-md-6">
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
                              </div> */}
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
                                        <span style={{ color: "red" }}>*</span>
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
                                        <span style={{ color: "red" }}>*</span>
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
                                        <span style={{ color: "red" }}>*</span>
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
                                        <span style={{ color: "red" }}>*</span>
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
                                        <span style={{ color: "red" }}>*</span>
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
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Section{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Section"
                                        className="vi_0"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6"></div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Header 1{" "}
                                        <span style={{ color: "red" }}>*</span>
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
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <Form.Select aria-label="Default select example">
                                        <option>
                                          Select Type of Questions
                                        </option>
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Kanada">Kanada</option>
                                        <option value="Kanada">Maths</option>
                                        <option value="Kanada">Science</option>
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
                                        <span style={{ color: "red" }}>*</span>
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
                                        <span style={{ color: "red" }}>*</span>
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
                                    {/* <div className="jjggiu">
                                        <div className="d-flex">
                                          <div>
                                            <label htmlFor="">Easy</label>
                                          </div>
                                          <div>
                                            <input
                                              type="text"
                                              className="vi_0"
                                              placeholder="Enter No "
                                            />
                                          </div>
                                        </div>
                                      </div> */}
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
                                    {/* <div className="jjggiu">
                                        <div className="d-flex">
                                          <div>
                                            <label htmlFor="">Easy</label>
                                          </div>
                                          <div>
                                            <input
                                              type="text"
                                              className="vi_0"
                                              placeholder="Enter No "
                                            />
                                          </div>
                                        </div>
                                      </div> */}
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
                                    {/* <div className="jjggiu">
                                        <div className="d-flex">
                                          <div>
                                            <label htmlFor="">Easy</label>
                                          </div>
                                          <div>
                                            <input
                                              type="text"
                                              className="vi_0"
                                              placeholder="Enter No "
                                            />
                                          </div>
                                        </div>
                                      </div> */}
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
                          : "Edit and Complete Step"}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>
    </>
  );
}

export default AdminBlueprintdetailsview;
