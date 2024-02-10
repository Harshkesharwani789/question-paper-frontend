import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Admin/Admin.css";
import { Form, Modal, Table } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../Admin/Admin.css";
import { MdPlayArrow } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";

const steps = [
  "Blueprint Details",
  "Weightage to the Content",
  "Marks Details",
  "Weightage of the Difficulty Level",
  "Blue Print Generation Chapterwise",
];

function AdminBlueprint() {
  const editorConfiguration = {
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "bulletedList",
      "numberedList",
      "blockQuote",
      "|",
      "link",
      "imageUpload",
      "mediaEmbed",
      "|",
      "alignment",
      "fontFamily",
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "indent",
      "outdent",
      "|",
      "undo",
      "redo",
      "|",
      "insertMath", // Include the new button in the toolbar
    ],
  };
  // Array of object 3
  const [Arr3, setArr3] = useState([]);
  const [Arr, setArr] = useState([]);
  const [view, setview] = useState({});
  const [Arr4, setarr4] = useState([]);
  const [Arr5, setArr5] = useState([]);

  const addOuestionType = (data) => {
    if (data) {
      if (!Arr4.some((ele) => ele?.QTyp == data)) {
        setarr4([...Arr4, { QTyp: data }]);
      }
    }
  };
  const deleteQuType = (data) => {
    setarr4(Arr4.filter((ele) => ele?.QTyp !== data));
  };
  const finalsubmit = () => {
    const am = Arr3.map((ele) => {
      if (ele.Objective == view.Objective) {
        return { ...ele, AllQType: Arr4 };
      }
      return ele;
    });
    setArr3(am);
    swal({
      title: "Yeah!",
      text: "Added Successfully...",
      icon: "success",
      button: "OK!",
    });

    handleClose();
    return setarr4([]);
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
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

  const navigate = useNavigate();
  //getmethod for types of questions
  const [getalltypesofques, setgetalltypesofques] = useState([]);
  const getalltypesofquess = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllTypesofquestion"
      );
      if (res.status == 200) {
        setgetalltypesofques(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
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
  //get method for medium
  const [Medium, setMedium] = useState([]);
  const [nochangedata, setnochangedata] = useState([]);
  const getAddMedium = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getAllMedium");
      if (res.status == 200) {
        setMedium(res.data.success);
        setnochangedata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [getobjectives, setgetobjectives] = useState([]);

  const getObjectives = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/admin/getobjective`
      );

      if (res.status === 200) {
        setgetobjectives(res.data.success);
      } else {
        // Handle non-200 status codes here if needed
        console.error(`Request failed with status code ${res.status}`);
      }
    } catch (error) {
      console.error("Error fetching objectives:", error);
    }
  };
  const [objectiveadd, setobjectiveadd] = useState(false);
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
  const [QAType, setQAType] = useState("");
  const [NQA, setNQA] = useState("");
  const [Mask, setMask] = useState("");
  const [DurationOfExam, setDurationOfExam] = useState("");

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
  const [data, setData] = useState([]);
  const [TotalMask, setTotalMask] = useState("");
  const [Objective, setObjective] = useState("");
  const [NoofQues, setNoofQues] = useState("");
  const [objMarks, setobjMarks] = useState("");
  const [Blueprintchapter, setBlueprintchapter] = useState("");
  const [Blueprintobjective, setblueprintobjective] = useState("");
  const [Blueprintnoofquestion, setBlueprintnoofquestion] = useState("");
  const [BluePrintQuestiontype, setBluePrintQuestiontype] = useState("");
  const [BluePrintmarksperquestion, setBluePrintmarksperquestion] =
    useState("");
  // Add for dificulty level

  const handleChangeeasy = (e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setEasyMask(newValue);
    setTotalDifficultMask(newValue + AverageMask + DifficultMask);
  };
  const handleChangeaverage = (e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setAverageMask(newValue);
    setTotalDifficultMask(EasyMask + newValue + DifficultMask);
  };

  const handleChangedifficult = (e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setDifficultMask(newValue);
    setTotalDifficultMask(EasyMask + AverageMask + newValue);
  };
  // Add for map value marks details

  // Array of object 2
  const [Arr1, setArr1] = useState([]);
  const AddWeightageofthecontent = () => {
    try {
      if (!label) {
        swal({
          title: "Oops!",
          text: "Please Select Label",
          icon: "error",
          button: "Try Again!",
        });
        return;
      }
      if (!Marks) {
        swal({
          title: "Oops!",
          text: "Please Select Label",
          icon: "error",
          button: "Try Again!",
        });
        return;
      }
      let content = 1;
      Arr1.forEach((ele) => {
        if (ele?.label === label && ele?.Marks === Marks) {
          content = 0;
          swal({
            title: "Oops!",
            text: "Already Exists...",
            icon: "error",
            button: "Try Again!",
          });
        }
      });
      if (content) {
        const obj = {
          label: label,
          Marks: Marks,
        };
        Arr1.push(obj);
        setArr1([...Arr1]);
        console.log("Arr1", Arr1);
        swal({
          title: "Yeah!",
          text: "Added Successfully...",
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {}
  };

  const deletedWeightageofthecontent = (index) => {
    try {
      const deletedcontent = Arr1[index];
      const updatedArr1 = Arr1.filter((_, i) => i !== index);
      setArr1(updatedArr1);
      console.log("Arr after deletion", updatedArr1);
      swal({
        title: "Deleted!",
        text: " Deleted Successfully.",
        icon: "warning",
        button: "OK!",
      });
    } catch (error) {
      console.error(error);
    }
  };
  // Array of object 1

  const AddTypesofquestion = () => {
    try {
      if (!QAType) {
        swal({
          title: "Oops!",
          text: "Please Select Question Type",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if QAType is not provided
      }

      if (!NQA) {
        swal({
          title: "Oops!",
          text: "Please Enter No. of Questions",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if NQA is not provided
      }

      if (!Mask) {
        swal({
          title: "Oops!",
          text: "Please Enter Marks",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if Mask is not provided
      }

      let Question = 1;
      Arr.forEach((ele) => {
        if (ele?.QAType === QAType) {
          Question = 0;
          swal({
            title: "Oops!",
            text: "Already Exists...",
            icon: "error",
            button: "Try Again!",
          });
        }
      });

      if (Question) {
        const obj = {
          QAType: QAType,
          NQA: NQA,
          Mask: Mask,
        };

        Arr.push(obj);
        setArr([...Arr]); // Ensure you create a new array reference to trigger a re-render
        console.log("Arr", Arr);

        swal({
          title: "Yeah!",
          text: "Added Successfully...",
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteQuestionType = (index) => {
    try {
      const deletedQuestion = Arr[index];

      // Create a new array excluding the element at the specified index
      const updatedArr = Arr.filter((_, i) => i !== index);

      setArr(updatedArr);
      console.log("Arr after deletion", updatedArr);

      swal({
        title: "Deleted!",
        text: " Deleted Successfully.",
        icon: "warning",
        button: "OK!",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const Addobjectivess = () => {
    try {
      if (!Objective) {
        swal({
          title: "Oops!",
          text: "Please Select Objective",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if QAType is not provided
      }

      if (!NoofQues) {
        swal({
          title: "Oops!",
          text: "Please Enter No. of Questions",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if NQA is not provided
      }

      if (!objMarks) {
        swal({
          title: "Oops!",
          text: "Please Enter Objectives Marks",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if Mask is not provided
      }

      let objectives = 1;
      Arr3.forEach((ele) => {
        if (ele?.Objective === Objective) {
          objectives = 0;
          swal({
            title: "Oops!",
            text: "Already Exists...",
            icon: "error",
            button: "Try Again!",
          });
        }
      });

      if (objectives) {
        const obj = {
          Objective: Objective,
          NoofQues: NoofQues,
          Marks: objMarks,
        };

        setArr3([...Arr3, obj]); // Corrected this line to update the state correctly

        swal({
          title: "Yeah!",
          text: "Added Successfully...",
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteobjectivess = (index) => {
    try {
      // const deletedQuestion = Arr[index];

      // Create a new array excluding the element at the specified index
      const updatedArr = Arr3.filter((_, i) => i !== index);

      setArr3(updatedArr);
      console.log("Arr after deletion", updatedArr);

      swal({
        title: "Deleted!",
        text: " Deleted Successfully.",
        icon: "warning",
        button: "OK!",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const Addblueprint = () => {
    try {
      if (!Blueprintnoofquestion) {
        swal({
          title: "Oops!",
          text: "Please Enter No. of Questions",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if QAType is not provided
      }
      if (!BluePrintQuestiontype) {
        swal({
          title: "Oops!",
          text: "Please Select Question Type",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if QAType is not provided
      }
      if (!BluePrintmarksperquestion) {
        swal({
          title: "Oops!",
          text: "Please enter marks per question",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if QAType is not provided
      }

      if (!Blueprintchapter) {
        swal({
          title: "Oops!",
          text: "Please Select Chapter",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if NQA is not provided
      }

      if (!Blueprintobjective) {
        swal({
          title: "Oops!",
          text: "Please Select Objectives",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if Mask is not provided
      }
      let content = 1;
      Arr5.forEach((ele) => {
        if (
          ele?.Blueprintobjective === Blueprintobjective &&
          ele?.Blueprintchapter === Blueprintchapter &&
          ele?.Blueprintnoofquestion == Blueprintnoofquestion &&
          ele?.BluePrintQuestiontype == BluePrintQuestiontype &&
          ele?.BluePrintmarksperquestion == BluePrintmarksperquestion
        ) {
          content = 0;
          swal({
            title: "Oops!",
            text: "Already Exists...",
            icon: "error",
            button: "Try Again!",
          });
        }
      });
      if (content) {
        const obj = {
          Blueprintobjective: Blueprintobjective,
          Blueprintchapter: Blueprintchapter,
          Blueprintnoofquestion: Blueprintnoofquestion,
          BluePrintQuestiontype: BluePrintQuestiontype,
          BluePrintmarksperquestion: BluePrintmarksperquestion,
        };
        Arr5.push(obj);
        setArr5([...Arr5]);
        console.log("Arr5", Arr5);
        swal({
          title: "Yeah!",
          text: "Added Successfully...",
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {}
  };

  const deletedAddblueprint = (index) => {
    try {
      // const deletedcontent = Arr1[index];
      const updatedArr5 = Arr5.filter((_, i) => i !== index);
      setArr5(updatedArr5);
      console.log("Arr after deletion", updatedArr5);
      swal({
        title: "Deleted!",
        text: " Deleted Successfully.",
        icon: "warning",
        button: "OK!",
      });
    } catch (error) {
      console.error(error);
    }
  };
  //get method for chapters
  const [chapters, setchapters] = useState([]);
  const getChapter = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllChapter"
      );
      if (res.status == 200) {
        setchapters(res.data.success);
        setnochangedata(res.data.success);
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
  const Blueprint = async () => {
    try {
      const config = {
        url: "/admin/registerBLUEPRINT",
        baseURL: "http://localhost:8000/api",
        method: "post",
        headers: { "content-type": "application/json" },
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
          QAType: QAType,
          NQA: NQA,
          Mask: Mask,
          DurationOfExam: DurationOfExam,
          TotalMask: TotalMask,
          Easy: Easy,
          EasyMask: EasyMask,
          Average: Average,
          AverageMask: AverageMask,
          Difficult: Difficult,
          DifficultMask: DifficultMask,
          TotalDifficultMask: TotalDifficultMask,
          TypesofQuestions: Arr,
          Weightageofthecontent: Arr1,
          objectives:Arr3,
          Objective:Arr3,
          AllChapter:Arr5

        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        swal({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          dangerMode: true,
        });
        navigate("/adminblueprintdetails");
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        dangerMode: true,
      });
    }
  };
  //get method for subject
  const [subject, setsubject] = useState([]);
  const getSubject = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllSujects"
      );
      if (res.status == 200) {
        setsubject(res.data.success);
        setnochangedata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallboardname();
    getallclassname();
    getaddsubclasss();
    getAddMedium();
    getalltypesofquess();
    getallweightagecontent();
    getSubject();
    getObjectives();
    getChapter();
  }, []);

  console.log("Arr3===>", Arr3);
  console.log("view==>", view);
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
                      <Button
                        variant=""
                        style={{ backgroundColor: "navy", color: "white" }}
                        onClick={Blueprint}
                      >
                        Submit
                      </Button>
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
                                  onChange={(e) => {
                                    setblName(e.target.value);
                                  }}
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
                                  value={board}
                                  className="vi_0"
                                  onChange={(e) => setboard(e.target.value)}
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
                                <Form.Select
                                  aria-label="Default select example"
                                  onChange={(e) => setsubjects(e.target.value)}
                                >
                                  <option>Select the Subjects</option>
                                  {subject?.map((val, i) => {
                                    return (
                                      <option value={val?.subjectName}>
                                        {val?.subjectName}
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
                                  onChange={(e) => {
                                    setmedium(e.target.value);
                                  }}
                                >
                                  <option>Select the Medium</option>
                                  {Medium?.map((val, i) => {
                                    return (
                                      <option value={val?.mediumName} key={i}>
                                        {val?.mediumName}
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
                                  onChange={(e) => {
                                    setclassName(e.target.value);
                                  }}
                                >
                                  <option>Select the Class</option>
                                  {getclassname?.map((val, i) => {
                                    return (
                                      <option value={val?.className} key={i}>
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
                                <Form.Select
                                  aria-label="Default select example"
                                  onChange={(e) => {
                                    setSubClassName(e.target.value);
                                  }}
                                >
                                  <option>Select the Sub-Class</option>
                                  {getaddsubclass?.map((val, i) => {
                                    return (
                                      <option value={val?.subclassName} key={i}>
                                        {val?.subclassName}
                                      </option>
                                    );
                                  })}
                                </Form.Select>
                              </div>
                            </div>
                            {/* <div className="col-md-6">
                              <div className="do-sear">
                                <label htmlFor="">Add Chapter Name</label>
                              </div>
                            </div> */}
                            <div className="row mt-3">
                              <div className="col-md-4">
                                <label htmlFor="">Objectives</label>
                                {/* <p className="fs-5 mt-2">
                                  <MdPlayArrow
                                    style={{ marginRight: "15px" }}
                                  />
                                  Remembering
                                </p> */}
                              </div>

                              <div className="row mt-2">
                                <div className="col-md-3">
                                  <div className="do-sear">
                                    <label htmlFor="">Select Objectives</label>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="do-sear">
                                    <label htmlFor="">No. of Questions</label>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="do-sear">
                                    <label htmlFor="">No. of Marks</label>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="do-sear mt-2">
                                    <Form.Select
                                      aria-label="Default select example"
                                      onChange={(e) => {
                                        setObjective(e.target.value);
                                      }}
                                    >
                                      <option value="">
                                        Selete the Type of Question
                                      </option>
                                      {getobjectives.map((val, i) => {
                                        return (
                                          <option value={val?.Objectivesname}>
                                            {val?.Objectivesname}
                                          </option>
                                        );
                                      })}
                                    </Form.Select>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="do-sear mt-2">
                                    <input
                                      type="number"
                                      name=""
                                      id=""
                                      placeholder="Enter the Weightage"
                                      className="vi_0"
                                      onChange={(e) => {
                                        setNoofQues(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="do-sear mt-2">
                                    <input
                                      type="number"
                                      name=""
                                      id=""
                                      placeholder="Enter the marks"
                                      className="vi_0"
                                      onChange={(e) => {
                                        setobjMarks(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="do-sear mt-2">
                                    <Button
                                      style={{
                                        backgroundColor: "red",
                                        color: "white",
                                      }}
                                      onClick={() => {
                                        Addobjectivess();
                                        // setobjectiveadd(true);
                                      }}
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
                                        <th>Objectives</th>
                                        <th>No of Question</th>
                                        <th>No of Marks</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Arr3?.map((item, i) => {
                                        return (
                                          <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{item?.Objective}</td>
                                            <td>{item?.NoofQues}</td>
                                            <td>{item?.Marks}</td>
                                            <td>
                                              <AiFillDelete
                                                color="red"
                                                cursor="pointer"
                                                onClick={() => {
                                                  deleteobjectivess(i);
                                                }}
                                              />
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </Table>
                                </div>
                              </div>
                              {/* <div className="col-md-4">
                                <label htmlFor="">No. of Questions</label>
                                <input
                                  type="text"
                                  className="vi_0 mt-2"
                                  placeholder="Enter No. of Questions"
                                  value={NQRemembering}
                                  onChange={(e) => {
                                    setNQRemembering(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="col-md-4">
                                <label htmlFor="">Marks</label>
                                <input
                                  type="number"
                                  className="vi_0 mt-2"
                                  placeholder="Enter the Marks"
                                  value={MaskRemembering}
                                  onChange={(e) => {
                                    setMaskRemembering(e.target.value);
                                  }}
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
                                  value={NQUnderstanding}
                                  onChange={(e) => {
                                    setNQUnderstanding(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="number"
                                  className="vi_0"
                                  placeholder="Enter the Marks"
                                  value={MaskUnderstanding}
                                  onChange={(e) => {
                                    setMaskUnderstanding(e.target.value);
                                  }}
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
                                  value={NQExpression}
                                  onChange={(e) => {
                                    setNQExpression(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="number"
                                  className="vi_0"
                                  placeholder="Enter the Marks"
                                  value={MaskExpression}
                                  onChange={(e) => {
                                    setMaskExpression(e.target.value);
                                  }}
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
                                  value={NQAppreciation}
                                  onChange={(e) => {
                                    setNQAppreciation(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="number"
                                  className="vi_0"
                                  placeholder="Enter the Marks"
                                  value={MaskAppreciation}
                                  onChange={(e) => {
                                    setMaskAppreciation(e.target.value);
                                  }}
                                />
                              </div> */}
                            </div>

                            <div className="col-md-12">
                              <div className="do-sear mt-2">
                                <label htmlFor="" className="mb-2">
                                  General Instructions
                                </label>
                                <CKEditor
                                  config={editorConfiguration}
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
                                        setlabel(e.target.value);
                                      }}
                                    >
                                      <option value="">
                                        Selete the Type of Question
                                      </option>
                                      {weightage
                                        ?.filter(
                                          (ele) => subjects == ele?.Subject
                                        )
                                        .map((val, i) => {
                                          return (
                                            <option value={val?.Content}>
                                              {val?.Content}
                                            </option>
                                          );
                                        })}
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
                                      onClick={() => {
                                        AddWeightageofthecontent();
                                      }}
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
                                      {Arr1?.map((item, i) => {
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
                                      })}
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
                                        <option value="default">
                                          Select the Types of the Question
                                        </option>
                                        <option value="Objective Questions">
                                          Objective Questions
                                        </option>
                                        <option value="Multiple Choice Questions">
                                          Multiple Choice Questions
                                        </option>
                                        <option value="Fill in the Blanks Questions">
                                          Fill in the Blanks
                                        </option>
                                        <option value="Match the Following Questions">
                                          Match the Following
                                        </option>
                                        <option value="Recorrect the Answers Questions">
                                          Recorrect the Answers
                                        </option>
                                        <option value="Classifications of Questions">
                                          Classifications of Questions
                                        </option>
                                        <option value="Odd and out words Questions">
                                          Odd and out words Questions
                                        </option>
                                        <option value="RelationShip Words Questions">
                                          RelationShip Words Questions
                                        </option>
                                        <option value="Grammer Questions">
                                          Grammer Questions
                                        </option>
                                        <option value="One Word Question">
                                          One Word Question
                                        </option>
                                        <option value="One Sentence Answer Question">
                                          One Sentence Answer Question
                                        </option>
                                        <option value="Two  Sentence Answer Questions">
                                          Two Sentence Answer Questions
                                        </option>
                                        <option value="Two and three Sentence Answer Questions">
                                          Two and three Sentence Answer
                                          Questions
                                        </option>
                                        <option value="Three and Four Sentence Answer Questions">
                                          Three and Four Sentence Answer
                                          Questions
                                        </option>
                                        {/* <option value="Five Sentence Answer Questions">
                  Five Sentence Answer Questions
                </option> */}
                                        <option value="Five and Six Sentence Answer Questions">
                                          Five and Six Sentence Answer Questions
                                        </option>
                                        <option value="Six Sentence Answer Questions">
                                          Six Sentence Answer Questions
                                        </option>
                                        <option value="Seven Sentence Answer Questions">
                                          Seven Sentence Answer Questions
                                        </option>
                                        <option value="Eight Sentence Answer Questions">
                                          Eight Sentence Answer Questions
                                        </option>
                                        <option value="Ten Sentence Answer Questions">
                                          Ten Sentence Answer Questions
                                        </option>
                                        <option value="Expanding and Explanations Answer Questions">
                                          {" "}
                                          Expanding and Explanations Answer
                                          Questions
                                        </option>
                                        <option value="Answer the Questions and Draw the Figure Questions">
                                          Answer the Questions and Draw the
                                          Figure Questions{" "}
                                        </option>
                                        <option value="Graph Questions">
                                          Graph Questions
                                        </option>
                                        <option value="Complete the Poem">
                                          Complete the Poem
                                        </option>
                                        <option value="Situation UnderStatnding answer Questions">
                                          {" "}
                                          Situation UnderStatnding answer
                                          Questions
                                        </option>
                                        <option value="Poet,Time, Place, Writer answer questions">
                                          {" "}
                                          Poet,Time, Place, Writer answer
                                          questions
                                        </option>
                                        <option value="Letter Writting">
                                          Letter Writting
                                        </option>
                                        <option value="Map Reading">
                                          Map Reading
                                        </option>
                                        {/* <option value=""></option>
                <option value=""></option>
                <option value=""></option> */}
                                      </Form.Select>
                                    </div>
                                    <div className="col-md-3">
                                      <input
                                        type="text"
                                        className="vi_0"
                                        placeholder="Enter Total No. of Questions"
                                        onChange={(e) => {
                                          setNQA(e.target.value);
                                        }}
                                      />
                                    </div>
                                    <div className="col-md-3">
                                      <input
                                        type="number"
                                        className="vi_0"
                                        placeholder="Enter the mask per question"
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
                                        onClick={AddTypesofquestion}
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
                                          {Arr.map((val, i) => {
                                            return (
                                              <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{val?.QAType}</td>
                                                <td>{val?.NQA}</td>
                                                <td>{val?.Mask}</td>
                                                <td>
                                                  {" "}
                                                  <AiFillDelete
                                                    color="red"
                                                    cursor="pointer"
                                                    onClick={() =>
                                                      deleteQuestionType(i)
                                                    }
                                                  />
                                                </td>
                                              </tr>
                                            );
                                          })}
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
                                        value={Arr?.reduce(
                                          (a, i) =>
                                            a + Number(i?.Mask * i?.NQA),
                                          0
                                        )}
                                        className="vi_0"
                                        placeholder="Total Marks"
                                        onChange={(e)=>{setTotalMask(e.target.value)}}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Typography>
                            </>
                          ) : (
                            <>
                              {activeStep == 3 ? (
                                <>
                                  <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                                    <div
                                      className="container"
                                      style={{ padding: "5px" }}
                                    >
                                      <div className="row mt-3">
                                        <div className="col-md-4">
                                          <label htmlFor="">
                                            Dificulty Level
                                          </label>
                                          <p className="fs-5 mt-2">
                                            <MdPlayArrow
                                              style={{ marginRight: "15px" }}
                                            />
                                            Easy
                                          </p>
                                        </div>
                                        <div className="col-md-4">
                                          <label htmlFor="">
                                            No. of Questions
                                          </label>
                                          <input
                                            type="text"
                                            className="vi_0 mt-2"
                                            value={Easy}
                                            placeholder="Enter No. of Questions"
                                            onChange={(e) => {
                                              setEasy(e.target.value);
                                            }}
                                          />
                                        </div>
                                        <div className="col-md-4">
                                          <label htmlFor="">Marks</label>
                                          <input
                                            type="number"
                                            className="vi_0 mt-2"
                                            placeholder="Enter the Marks"
                                            value={EasyMask}
                                            onChange={handleChangeeasy}
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
                                            value={Average}
                                            placeholder="Enter No. of Questions"
                                            onChange={(e) => {
                                              setAverage(e.target.value);
                                            }}
                                          />
                                        </div>
                                        <div className="col-md-4">
                                          <input
                                            type="number"
                                            className="vi_0"
                                            value={AverageMask}
                                            placeholder="Enter the Marks"
                                            onChange={handleChangeaverage}
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
                                            value={Difficult}
                                            placeholder="Enter No. of Questions"
                                            onChange={(e) => {
                                              setDifficult(e.target.value);
                                            }}
                                          />
                                        </div>
                                        <div className="col-md-4">
                                          <input
                                            type="number"
                                            className="vi_0"
                                            value={DifficultMask}
                                            placeholder="Enter the Marks"
                                            onChange={handleChangedifficult}
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
                                            type="number"
                                            className="vi_0"
                                            placeholder="Total Marks"
                                            value={TotalDifficultMask}
                                            onClick={(e) => {
                                              setTotalDifficultMask(
                                                e.target.value
                                              );
                                            }}
                                            readOnly
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
                                      <div className="row">
                                        {/* <div className="col-md-5">
                                          <label htmlFor="">Objectives</label>
                                          <div className="do-sear mt-2">
                                            <Form.Select
                                              aria-label="Default select example"
                                              // onChange={(e) => {
                                              //   setObjective(e.target.value);
                                              // }}
                                            >
                                              <option value="">
                                                Selete the Objectives
                                              </option>
                                              {getobjectives.map((val, i) => {
                                                return (
                                                  <option
                                                    value={val?.Objectivesname}
                                                  >
                                                    {val?.Objectivesname}
                                                  </option>
                                                );
                                              })}
                                            </Form.Select>
                                          </div>
                                        </div>
                                        <div className="col-md-5">
                                          <div className="do-sear mt-2">
                                            <button className="btn btn-danger mt-4">
                                              Add
                                            </button>
                                          </div>
                                        </div> */}
                                        {/* <div className="col-md-12">
                                          <div className="do-sear mt-2">
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
                                                  <th>Objectives</th>
                                                  <th>Add Question Type</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {Arr3?.map((val, i) => {
                                                  return (
                                                    <>
                                                      <tr key={i}>
                                                        <td>{i + 1}</td>
                                                        <td>
                                                          {val?.Objective}
                                                        </td>
                                                        <td>
                                                          <Table
                                                            responsive
                                                            bordered
                                                            style={{
                                                              width:
                                                                "-webkit-fill-available",
                                                            }}
                                                          >
                                                            <thead>
                                                              <tr>
                                                                <th>S No.</th>
                                                                <th>
                                                                  Question Type{" "}
                                                                  <button
                                                                    className="btn btn-success"
                                                                    style={{
                                                                      float:
                                                                        "right",
                                                                      height:
                                                                        "30px",
                                                                      borderRadius:
                                                                        "20px",
                                                                    }}
                                                                    onClick={() => {
                                                                      handleShow();
                                                                      setview(
                                                                        val
                                                                      );
                                                                      setarr4(
                                                                        val.AllQType
                                                                          ? val.AllQType
                                                                          : []
                                                                      );
                                                                    }}
                                                                  >
                                                                    Add
                                                                  </button>
                                                                </th>
                                                              </tr>
                                                            </thead>
                                                            <tbody>
                                                              {val?.AllQType?.map(
                                                                (
                                                                  item,
                                                                  index
                                                                ) => (
                                                                  <tr
                                                                    key={index}
                                                                  >
                                                                    <td>
                                                                      {index +
                                                                        1}
                                                                    </td>
                                                                    <td>
                                                                      {
                                                                        item?.QTyp
                                                                      }
                                                                    </td>
                                                                  </tr>
                                                                )
                                                              )}
                                                            </tbody>
                                                          </Table>
                                                        </td>
                                                      </tr>
                                                    </>
                                                  );
                                                })}
                                              </tbody>
                                            </Table>
                                          </div>
                                        </div> */}
                                      </div>
                                      <div className="row">
                                        <div className="col-md-4">
                                          <label htmlFor="">
                                            Select Chapters
                                          </label>
                                          <Form.Select
                                            aria-label="Default select example"
                                            onChange={(e) => {
                                              setBlueprintchapter(
                                                e.target.value
                                              );
                                            }}
                                          >
                                            <option value="">
                                              Selete the Chapter
                                            </option>
                                            {chapters?.map((val, i) => {
                                              return (
                                                <option
                                                  value={val?.chapterName}
                                                >
                                                  {val?.chapterName}
                                                </option>
                                              );
                                            })}
                                          </Form.Select>
                                        </div>
                                        <div className="col-md-4">
                                          <label htmlFor="">Objectives</label>
                                          <Form.Select
                                            aria-label="Default select example"
                                            onChange={(e) => {
                                              if (e.target.value) {
                                                let am = JSON.parse(
                                                  e.target.value
                                                );
                                                setblueprintobjective(
                                                  am?.Objective
                                                );
                                                setview(am);
                                              }
                                            }}
                                          >
                                            <option value="">
                                              Selete Objectives
                                            </option>
                                            {Arr3?.map((item, i) => {
                                              return (
                                                <option
                                                  value={JSON.stringify(item)}
                                                  key={i}
                                                >
                                                  {item?.Objective}
                                                </option>
                                              );
                                            })}
                                          </Form.Select>
                                        </div>
                                        <div className="col-md-4">
                                          <label htmlFor="">
                                            Question Type
                                          </label>
                                          <Form.Select
                                            aria-label="Default select example"
                                            onChange={(e) => {
                                              setBluePrintQuestiontype(
                                                e.target.value
                                              );
                                            }}
                                          >
                                       
                                            <option value="">Select Question Types</option>
                    <option value="M C">M.C (Multiple Choice)</option>
                    <option value="V.S.A">V.S.A (Very Short Answer)</option>
                    <option value="S.A">S.A (Short Answer)</option>
                    <option value="L.A 1">L.A (Long Answer 1)</option>
                    <option value="L.A 2">L.A (Long Answer 2)</option>
                    <option value="L.A 3">L.A (Long Answer 3)</option>
                                            {/* {view?.AllQType?.map((ele) => (
                                              <option value={ele?.QTyp}>
                                                {ele?.QTyp}
                                              </option>
                                            ))} */}
                                          </Form.Select>
                                        </div>
                                        <div className="col-md-4">
                                          <label htmlFor="">
                                            No. of Questions
                                          </label>

                                          <input
                                            type="number"
                                            className="vi_0"
                                            onChange={(e) => {
                                              setBlueprintnoofquestion(
                                                e.target.value
                                              );
                                            }}
                                            placeholder="Enter No.of Questions"
                                          />
                                        </div>
                                        <div className="col-md-4">
                                          <label htmlFor="">
                                            Marks Per Question
                                          </label>

                                          <input
                                            type="number"
                                            className="vi_0"
                                            onChange={(e) => {
                                              setBluePrintmarksperquestion(
                                                e.target.value
                                              );
                                            }}
                                            placeholder="Marks Per Question"
                                          />
                                        </div>
                                        <div className="col-md-4">
                                          <button
                                            className="btn btn-danger mt-4"
                                            style={{ float: "right" }}
                                            onClick={Addblueprint}
                                          >
                                            Add
                                          </button>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
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
                                                  <th>Chapters</th>
                                                  <th>Objectives</th>
                                                  <th>Question Type</th>
                                                  <th> No. of Questions</th>
                                                  <th>Marks Per Question</th>
                                                  <th>Action</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {Arr5?.map((val,i)=>{
                                                  return(
                                                    <tr key={i}>
                                                    <td>{i+1}</td>
                                                    <td>{val?.Blueprintchapter}</td>
                                                    <td>{val?.Blueprintobjective}</td>
                                                    <td>{val?.BluePrintQuestiontype}</td>
                                                    <td>{val?.Blueprintnoofquestion}</td>
                                                    <td>{val?.BluePrintmarksperquestion}</td>
                                                    <td>
                                                      {" "}
                                                      <AiFillDelete
                                                        color="red"
                                                        cursor="pointer"
                                                        onClick={()=>{deletedAddblueprint(i)}}
                                                      />
                                                    </td>
                                                  </tr>
                                                  )
                                                })}
                                               <tr>
                                               <td></td>
                                                <td>
                                                
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td>  Total Question:- {Arr5?.reduce((a,ele)=>a+Number(ele?.Blueprintnoofquestion),0)}</td>
                                                <td>Total Marks:- {Arr5?.reduce((a,ele)=>a+Number(ele?.BluePrintmarksperquestion*ele?.Blueprintnoofquestion),0)}</td>
                                                <td></td>
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
                    </>
                  )}

                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      className="modal-add-btn"
                      variant=""
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        borderRadius: "5px",
                      }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button
                      style={{ borderRadius: "5px" }}
                      onClick={handleNext}
                      sx={{ mr: 1 }}
                    >
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
                        <Button varient="" onClick={handleComplete}>
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
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "orange" }}>
          <Modal.Title style={{ color: "white" }}>
            Add Question Type{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="">Objective</label>
                <p className="vi_0">{view?.Objective}</p>
              </div>
              <div className="col-md-4">
                <label htmlFor="">Question Type</label>

                <div>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => addOuestionType(e.target.value)}
                  >
                    <option value="">Select Question Types</option>
                    <option value="M C">M.C (Multiple Choice)</option>
                    <option value="V.S.A">V.S.A (Very Short Answer)</option>
                    <option value="S.A">S.A (Short Answer)</option>
                    <option value="L.A 1">L.A (Long Answer 1)</option>
                    <option value="L.A 2">L.A (Long Answer 2)</option>
                    <option value="L.A 3">L.A (Long Answer 3)</option>
                  </Form.Select>
                </div>
              </div>
            </div>
            {Arr4.length ? (
              <div className="row">
                <div className="col-md-12">
                  <Table>
                    <thead>
                      <tr>
                        <th>S No.</th>
                        <th>Question Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Arr4?.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item?.QTyp}</td>
                            <td>
                              <AiFillDelete
                                style={{ color: "red", cursor: "pointer" }}
                                onClick={() => deleteQuType(item.QTyp)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  <button
                    className="btn btn-danger"
                    style={{ float: "right" }}
                    onClick={finalsubmit}
                  >
                    Sumbit
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdminBlueprint;
