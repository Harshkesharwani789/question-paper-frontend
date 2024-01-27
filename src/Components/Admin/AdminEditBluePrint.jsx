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
import { useNavigate, useParams } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";
<<<<<<< HEAD
import { BiSolidEdit } from "react-icons/bi";
=======
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7

const steps = [
  "Blueprint Details",
  "Weightage to the Content",
  "Marks Details",
  " Weightage of the Difficulty Level",
];
const AdminEditBluePrint = () => {
<<<<<<< HEAD
  const [View, setView] = useState("");

  const [show6, setShow6] = useState("");
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show7, setShow7] = useState("");
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const { blueprint_ID } = useParams();
=======
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
const {state}=useLocation();
console.log(state);

const admin = JSON.parse(sessionStorage.getItem("admin"));
const token = sessionStorage.getItem("token");

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
<<<<<<< HEAD

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
=======
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
=======
  const [data, setData] = useState([]);
  const [TotalMask, setTotalMask] = useState("");
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7

  // Add for dificulty level

  const handleChangeeasy = (e) => {
<<<<<<< HEAD
    const value = e.target.value;
    setEasyMask(value);
  };
  const handleChangeaverage = (e) => {
    const value = e.target.value;
    setAverageMask(value);
  };

  const handleChangedifficult = (e) => {
    const value = e.target.value;
    setDifficultMask(value);
  };
  const updatedadd = (value1, value2, value3) => {
    const parsevalue1 = parseFloat(value1);
    const parsevalue2 = parseFloat(value2);
    const pasrsevalue3 = parseFloat(value3);
    const calculatedresult =
      isNaN(parsevalue1) || isNaN(parsevalue2) || isNaN(pasrsevalue3)
        ? "Invalid Input"
        : parsevalue1 + parsevalue2 + pasrsevalue3;
    setTotalDifficultMask(calculatedresult);
  };
=======
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
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7

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
<<<<<<< HEAD
          text: "Updated Successfully...",
=======
          text: "Added Successfully...",
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
  const [Arr, setArr] = useState([]);

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
<<<<<<< HEAD
        if (ele?.QAType === QAType && ele?.NQA === NQA && ele?.Mask === Mask) {
=======
        if (ele?.QAType === QAType ) {
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
    try {
      const config = {
        url: "/admin/registerBLUEPRINT",
        baseURL: "http://localhost:8000/api",
        method: "post",
        headers: { "content-type": "application/json" },
=======
    alert("A")
    try {
      const config = {
        url: "/admin/updateBLUEPRINT",
        baseURL: "http://localhost:8000/api",
        method: "put",
        headers: { Authorization: `Bearer ${token}`, "content-type": "application/json" },
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
        data: {
          id:state?._id,
          authId:admin?._id,
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
<<<<<<< HEAD
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
    getallblueprint();
  }, []);

  console.log(getboardname);
  console.log(getclassname);
  console.log(getaddsubclass);
  console.log(Medium);
  console.log(getalltypesofques);
  console.log(weightage);
  console.log(subject);

  const [updateweightage, setupdateweightage] = useState("");

  const updatewateage = async (id) => {
    try {
      const config = {
        url: "/updateweatge/" + id,
        method: "put",
        baseURL: "http://localhost:8000/api/admin",
        headers: { "content-type": "application/json" },
        data: {
          blueprintId: blueprint_ID,
          label: label,
          Marks: Marks,
          id: updateweightage,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [updatemarksdetails, setupdatemarksdetaisl] = useState("");

  const updateMarksDetails = async (id) => {
    try {
      const config = {
        url: "/admin/updatemarksdetails" + id,
        method: "put",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-type": "application/json",
        },
        data: {
          blueprintId: blueprint_ID,
          QAType: QAType,
          NQA: NQA,
          Mask: Mask,
          id: updatemarksdetails,
=======
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        swal({
          title: "Success!",
          text: `Successfully Updated`,
          icon: "success",
          dangerMode: true,
        });
      return  navigate("/adminblueprintdetails");
      }
    } catch (error) {
      console.log(error);
      // swal({
      //   title: "Oops!",
      //   text: error.response.data.error,
      //   icon: "error",
      //   dangerMode: true,
      // });
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
<<<<<<< HEAD
      return swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        button: "Try Again!",
      });
    }
  };
=======
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
  }, []);

  useEffect(()=>{
    if(state){
      setblName(state?.blName);
      setboard(state?.board);
      setmedium(state?.medium);
      setclassName(state?.className);
      setSubClassName(state?.SubClassName);
      setsubjects(state?.subjects);
      setInstructions(state?.Instructions);
      setRemembering(state?.Remembering);
      setNQRemembering(state?.NQRemembering);
      setMaskRemembering(state?.MaskRemembering);
      setUnderstanding(state?.Understanding);
      setNQUnderstanding(state?.NQUnderstanding);
      setMaskUnderstanding(state?.MaskUnderstanding);
      setExpression(state?.Expression);
      setNQExpression(state?.NQExpression);
      setMaskExpression(state?.MaskExpression);
      setAppreciation(state?.Appreciation);
      setNQAppreciation(state?.NQAppreciation);
      setMaskAppreciation(state?.MaskAppreciation);
      setQAType(state?.QAType);
      setNQA(state?.NQA);
      setMarks(state?.Mask);
      setDurationOfExam(state?.DurationOfExam);
      setTotalMask(state?.TotalMask);
      setEasy(state?.Easy);
      setEasyMask(state?.EasyMask);
      setAverage(state?.Average);
      setAverageMask(state?.AverageMask);
      setDifficult(state?.Difficult);
      setDifficultMask(state?.DifficultMask);
      setTotalDifficultMask(state?.TotalDifficultMask);
      setArr(state?.TypesofQuestions);
      setArr1(state?.Weightageofthecontent)
    }
  },[state]);
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.blName}
=======
                                  value={blName}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.board}
=======
                                  value={board}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.subjects}
=======
                                  value={subjects}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
                                  onChange={(e) => setsubjects(e.target.value)}
                                >
                                  <option>Select the Subjects</option>
                                  {subject?.map((val, i) => {
                                    return (
<<<<<<< HEAD
                                      <option value={val?.subjectName} key={i}>
=======
                                      <option value={val?.subjectName}>
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.medium}
=======
                                  value={medium}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  aria-label="Default select example"
                                  value={blueprint?.className}
=======
                                value={className}
                                  aria-label="Default select example"
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  aria-label="Default select example"
                                  value={blueprint?.SubClassName}
=======
                                value={SubClassName}
                                  aria-label="Default select example"
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
                            <div className="col-md-6">
                              <div className="do-sear">
                                <label htmlFor="">Add Chapter Name</label>
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
<<<<<<< HEAD
                                  value={blueprint?.NQRemembering}
=======
                                  value={NQRemembering}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.MaskRemembering}
=======
                                  value={MaskRemembering}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.NQUnderstanding}
=======
                                  value={NQUnderstanding}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.MaskUnderstanding}
=======
                                  value={MaskUnderstanding}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.NQExpression}
=======
                                  value={NQExpression}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.MaskExpression}
=======
                                  value={MaskExpression}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.NQAppreciation}
=======
                                  value={NQAppreciation}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                  value={blueprint?.MaskAppreciation}
=======
                                  value={MaskAppreciation}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
                                  onChange={(e) => {
                                    setMaskAppreciation(e.target.value);
                                  }}
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
<<<<<<< HEAD
                                  data={blueprint?.Instructions}
=======
                                  data={Instructions}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
                              {/* <div className="row">
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
<<<<<<< HEAD
                              </div> */}
                              {/* {blueprint?.Weightageofthecontent?.map(
                                (val, i) => {
                                  return (
                                    <>
                                      <div className="row" key={i}>
                                        <div className="col-md-4">
                                          <div className="do-sear">
                                            <Form.Select
                                              aria-label="Default select example"
                                              value={val?.label}
                                              onChange={(e) => {
                                                setlabel(e.target.value);
                                              }}
                                            >
                                              <option value="">
                                                Selete the Type of Question
                                              </option>
                                              {weightage
                                                ?.filter(
                                                  (ele) =>
                                                    subjects == ele?.Subject
                                                )
                                                .map((val, i) => {
                                                  return (
                                                    <option
                                                      value={val?.Content}
                                                      key={i}
                                                    >
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
                                              value={val?.Marks}
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
                                                updatewateage(val?._id);
                                              }}
                                            >
                                              Update
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  );
                                }
                              )} */}

=======
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
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
                                        <th>Type of Question</th>
                                        <th>Marks</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
<<<<<<< HEAD
                                      {blueprint?.Weightageofthecontent?.map(
                                        (item, i) => {
                                          return (
                                            <tr key={i}>
                                              <td>{i + 1}</td>
                                              <td>{item?.label}</td>
                                              <td>{item?.Marks}</td>
                                              <td>
                                                <BiSolidEdit
                                                  className="text-success"
                                                  style={{
                                                    cursor: "pointer",
                                                    fontSize: "20px",
                                                  }}
                                                  onClick={() => {
                                                    setupdateweightage(
                                                      item?._id
                                                    );
                                                    // setView(item?._id);
                                                    setMarks(item?.Marks);
                                                    setlabel(item?.label);
                                                    handleShow6(item?._id);
                                                  }}
                                                />
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
                                        }
                                      )}
=======
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
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
                                  {/* <div className="row">
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
                                  </div> */}
                                  {/* {blueprint?.TypesofQuestions?.map(
                                    (val, i) => {
                                      return (
                                        <>
                                          <div className="row" key={i}>
                                            <div className="col-md-3 mt-2">
                                              <Form.Select
                                                aria-label="Default select example"
                                                value={val?.QAType}
                                                onChange={(e) => {
                                                  setQAType(e.target.value);
                                                }}
                                              >
                                                <option value="">
                                                  Selete the Type of Question
                                                </option>
                                                {getalltypesofques?.map(
                                                  (val, i) => {
                                                    return (
                                                      <option
                                                        value={
                                                          val?.Typesofquestion
                                                        }
                                                        key={i}
                                                      >
                                                        {val?.Typesofquestion}
                                                      </option>
                                                    );
                                                  }
                                                )}
                                              </Form.Select>
                                            </div>
                                            <div className="col-md-3">
                                              <input
                                                type="text"
                                                className="vi_0"
                                                placeholder="Enter No. of Questions"
                                                value={val?.NQA}
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
                                                value={val?.NQA}
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
                                                Update
                                              </Button>
                                            </div>
                                          </div>
                                        </>
                                      );
                                    }
                                  )} */}

<<<<<<< HEAD
=======
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
                                        {getalltypesofques?.map((val, i) => {
                                          return (
                                            <option
                                              value={val?.Typesofquestion}
                                            >
                                              {val?.Typesofquestion}
                                            </option>
                                          );
                                        })}
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
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
                                            <th>Types of Questions</th>
                                            <th>No. of Question</th>
                                            <th>Marks</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
<<<<<<< HEAD
                                          {blueprint.TypesofQuestions.map(
                                            (val, i) => {
                                              return (
                                                <tr key={i}>
                                                  <td>{i + 1}</td>
                                                  <td>{val?.QAType}</td>
                                                  <td>{val?.NQA}</td>
                                                  <td>{val?.Mask}</td>

                                                  <td>
                                                    {" "}
                                                    <BiSolidEdit
                                                      className="text-success"
                                                      style={{
                                                        cursor: "pointer",
                                                        fontSize: "20px",
                                                      }}
                                                      onClick={() => {
                                                        setupdatemarksdetaisl(val?._id);
                                                        // setView(item?._id);
                                                        setQAType(val?.QAType);
                                                        setNQA(val?.NQA);
                                                        setMask(val?.Mask);
                                                        handleShow7(val?._id);
                                                      }}
                                                    />
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
                                            }
                                          )}
=======
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
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
                                        value={blueprint?.DurationOfExam}
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
                                        value={Arr?.reduce((a,i)=>a+Number(i?.Mask*i?.NQA),0)}
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
<<<<<<< HEAD
                                        value={blueprint?.Easy}
=======
                                        value={Easy}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                        value={blueprint?.EasyMask}
=======
                                        value={EasyMask}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                        value={blueprint?.Average}
=======
                                        value={Average}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                        value={blueprint?.AverageMask}
=======
                                        value={AverageMask}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                        value={blueprint?.Difficult}
                                        placeholder="Enter No. of Questions"
                                        onChange={handleChangedifficult}
=======
                                        value={Difficult}
                                        placeholder="Enter No. of Questions"
                                        onChange={(e) => {
                                          setDifficult(e.target.value);
                                        }}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
                                      />
                                    </div>
                                    <div className="col-md-4">
                                      <input
                                        type="number"
                                        className="vi_0"
<<<<<<< HEAD
                                        value={blueprint?.DifficultMask}
                                        placeholder="Enter the Marks"
                                        onChange={(e) => {
                                          setDifficultMask(e.target.value);
                                        }}
=======
                                        value={DifficultMask}
                                        placeholder="Enter the Marks"
                                        onChange={handleChangedifficult}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
<<<<<<< HEAD
                                        value={blueprint?.TotalDifficultMask}
                                        onClick={(e) => {
                                          setTotalDifficultMask(e.target.value);
                                        }}
=======
                                        value={TotalDifficultMask}
                                        onClick={(e) => {
                                          setTotalDifficultMask(e.target.value);
                                        }}
                                        readOnly
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
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
                      variant=""
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                      style={{ backgroundColor: "navy", color: "white" }}
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
                        <Button varient="success" onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1
                            ? "Submit"
<<<<<<< HEAD
                            : "Update & Save"}
=======
                            : "Complete Step"}
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
                        </Button>
                      ))}
                  </Box>
                </React.Fragment>
              )}
            </div>
          </Box>
        </div>
<<<<<<< HEAD
        <Modal
          show={show6}
          onHide={handleClose6}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-success">
              Update Weightage to the Content
            </Modal.Title>
          </Modal.Header>
          {/* {blueprint?.Weightageofthecontent?.map((val, i) => {
            return (
              <> */}
          <Modal.Body>
            <div className="do-sear mt-2">
              <label>Select Content</label>
              <Form.Select
                aria-label="Default select example"
                value={View?.label}
                onChange={(e) => {
                  setlabel(e.target.value);
                }}
              >
                <option value="">Selete the Type of Question</option>
                {weightage
                  ?.filter((ele) => subjects == ele?.Subject)
                  .map((val, i) => {
                    return (
                      <option value={val?.Content} key={i}>
                        {val?.Content}
                      </option>
                    );
                  })}
              </Form.Select>
            </div>
            <div className="do-sear mt-2">
              <label>Marks</label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Enter the Weightage"
                className="vi_0"
                value={Marks}
                onChange={(e) => {
                  setMarks(e.target.value);
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose6}>
              Close
            </Button>
            <Button
              style={{
                backgroundColor: "red",
                color: "white",
              }}
              onClick={() => {
                updatewateage();
              }}
            >
              Update
            </Button>
          </Modal.Footer>
          {/* </>
            );
          })} */}
        </Modal>
        <Modal
          show={show7}
          onHide={handleClose7}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-success">
              Update Details of Marks
            </Modal.Title>
          </Modal.Header>
          {/* {blueprint?.Weightageofthecontent?.map((val, i) => {
            return (
              <> */}
          <Modal.Body>
            <div className="do-sear mt-2">
              <label>Select Type of Question</label>
              <Form.Select
                aria-label="Default select example"
                value={QAType}
                onChange={(e) => {
                  setQAType(e.target.value);
                }}
              >
                <option value="">Selete the Type of Question</option>
                {getalltypesofques?.map((val, i) => {
                  return (
                    <option value={val?.Typesofquestion} key={i}>
                      {val?.Typesofquestion}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
            <div className="do-sear mt-2">
              <label>Enter Number of Question</label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Enter the Weightage"
                className="vi_0"
                value={NQA}
                onChange={(e) => {
                  setNQA(e.target.value);
                }}
              />
              <div className="do-sear mt-2">
                <label>Marks</label>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Enter the Marks"
                  className="vi_0"
                  value={Mask}
                  onChange={(e) => {
                    setMask(e.target.value);
                  }}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose7}>
              Close
            </Button>
            <Button
              style={{
                backgroundColor: "red",
                color: "white",
              }}
              onClick={() => {
                updateMarksDetails();
              }}
            >
              Update
            </Button>
          </Modal.Footer>
          {/* </>
            );
          })} */}
        </Modal>
=======
>>>>>>> e42ae6e0b4bf49d986769669700057c3ce0ed0b7
      </div>
    </>
  );
};

export default AdminEditBluePrint;
