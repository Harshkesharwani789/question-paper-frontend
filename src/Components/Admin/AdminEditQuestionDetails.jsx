import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Admin/Admin.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import AdminQuestprops from "./AdminQuestprops";
import AdminQuestioneditprops from "./AdminQuestioneditprops";
import { CiEdit } from "react-icons/ci";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
const AdminEditQuestionDetails = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");
  const { question_Id } = useParams();

  const fileInputRef = useRef(null);
  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const QuesImgRef = useRef(null);
  const QuestionimgEditClick = () => {
    if (QuesImgRef.current) {
      QuesImgRef.current.click();
    }
  };

  const ImageRef = useRef(null);
  const ImageEditClick = () => {
    if (ImageRef.current) {
      ImageRef.current.click();
    }
  };

  const Image1Ref = useRef(null);
  const Image1EditClick = () => {
    if (Image1Ref.current) {
      Image1Ref.current.click();
    }
  };

  const Image2Ref = useRef(null);
  const Image2EditClick = () => {
    if (Image2Ref.current) {
      Image2Ref.current.click();
    }
  };

  const Image3Ref = useRef(null);
  const Image3EditClick = () => {
    if (Image3Ref.current) {
      Image3Ref.current.click();
    }
  };

  const Image4Ref = useRef(null);
  const Image4EditClick = () => {
    if (Image4Ref.current) {
      Image4Ref.current.click();
    }
  };

  const Image5Ref = useRef(null);
  const Image5EditClick = () => {
    if (Image5Ref.current) {
      Image5Ref.current.click();
    }
  };

  const Image6Ref = useRef(null);
  const Image6EditClick = () => {
    if (Image6Ref.current) {
      Image6Ref.current.click();
    }
  };

  const [Types_Question, setTypes_Question] = useState("");

  const [question_details, setquestion_details] = useState([]);
  const getquestionbyid = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/admin/getQuestionpaperadminbyid/${question_Id}`
      );
      if (res.status === 200) {
        setquestion_details(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getquestionbyid();
  }, []);

  console.log("question_details", question_details);

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("default");

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setQuestion(data);
  };
  const handleChange1 = (e, editor) => {
    const data = editor.getData();
    setAnswer(data);
  };
  const handleChange2 = (e, editor) => {
    const data = editor.getData();
    setInstruction(data);
  };

  const handleChange4 = (e, editor) => {
    const data = editor.getData();
    setorQuestion(data);
  };
  const handleChange5 = (e, editor) => {
    const data = editor.getData();
    setorAnswer(data);
  };

  const Option1 = (e, editor) => {
    const data = editor.getData();
    setOption_1(data);
  };
  const Option2 = (e, editor) => {
    const data = editor.getData();
    setOption_2(data);
  };

  const Option3 = (e, editor) => {
    const data = editor.getData();
    setOption_3(data);
  };

  const Option4 = (e, editor) => {
    const data = editor.getData();
    setOption_4(data);
  };
               



  // Update
  const [section, setSection] = useState('');
  const [Board, setBoard] = useState("");
  const [Medium, setMedium] = useState("");
  const [Class, setClass] = useState("");
  const [Sub_Class, setSub_Class] = useState("");
  const [Subjects, setSubjects] = useState("");
  const [Chapter_Name, setChapter_Name] = useState("");
  const [Lesson, setLesson] = useState("");
  const [Difficulty_level, setDifficulty_level] = useState("");
  const [Name_of_examination, setName_of_examination] = useState([]);
  const [Question, setQuestion] = useState("");
  const [ImageAns, setImageAns] = useState("");
  const [ImageQues, setImageQues] = useState("");
  const [Image, setImage] = useState("");
  const [Image1, setImage1] = useState("");
  const [Image2, setImage2] = useState("");
  const [Image_3, setImage_3] = useState("");
  const [Image_4, setImage_4] = useState("");
  const [Image_5, setImage_5] = useState("");
  const [Image_6, setImage_6] = useState("");
  const [Answer, setAnswer] = useState("");
  const [Dash, setDash] = useState("4")
  const [PoemSat, setPoemSat] = useState("");
  const [PoemEnd, setPoemEnd] = useState("");
  const [orQuestion, setorQuestion] = useState("");
  const [Objectives, setObjectives] = useState("");
  const [orAnswer, setorAnswer] = useState("");
  const [Marks, setMarks] = useState("");

  const [Option_1, setOption_1] = useState("");
  const [Option_2, setOption_2] = useState("");
  const [Option_3, setOption_3] = useState("");
  const [Option_4, setOption_4] = useState("");
  const [Option_5, setOption_5] = useState("");
  const [Option_6, setOption_6] = useState("");

  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [input3, setinput3] = useState("");


  const [Part_A1, setPart_A1] = useState("");
  const [Part_A2, setPart_A2] = useState("");
  const [Part_A3, setPart_A3] = useState("");
  const [Part_A4, setPart_A4] = useState("");
  const [Part_A5, setPart_A5] = useState("");
  const [Part_A6, setPart_A6] = useState("");

  const [Part_B1, setPart_B1] = useState("");
  const [Part_B2, setPart_B2] = useState("");
  const [Part_B3, setPart_B3] = useState("");
  const [Part_B4, setPart_B4] = useState("");
  const [Part_B5, setPart_B5] = useState("");
  const [Part_B6, setPart_B6] = useState("");
  const [Part_B7, setPart_B7] = useState("");

  const [Part_C1, setPart_C1] = useState("");
  const [Part_C2, setPart_C2] = useState("");
  const [Part_C3, setPart_C3] = useState("");
  const [Part_C4, setPart_C4] = useState("");
  const [Part_C5, setPart_C5] = useState("");
  const [Part_C6, setPart_C6] = useState("");
  const [Part_C7, setPart_C7] = useState("");

  const [Part_A1_A, setPart_A1_A] = useState("");
  const [Part_A2_A, setPart_A2_A] = useState("");
  const [Part_A3_A, setPart_A3_A] = useState("");
  const [Part_A4_A, setPart_A4_A] = useState("");
  const [Part_A5_A, setPart_A5_A] = useState("");
  const [Part_A6_A, setPart_A6_A] = useState("");

  const [Part_B1_A, setPart_B1_A] = useState("");
  const [Part_B2_A, setPart_B2_A] = useState("");
  const [Part_B3_A, setPart_B3_A] = useState("");
  const [Part_B4_A, setPart_B4_A] = useState("");
  const [Part_B5_A, setPart_B5_A] = useState("");
  const [Part_B6_A, setPart_B6_A] = useState("");
  const [Part_B7_A, setPart_B7_A] = useState("");

  const [Part_C1_A, setPart_C1_A] = useState("");
  const [Part_C2_A, setPart_C2_A] = useState("");
  const [Part_C3_A, setPart_C3_A] = useState("");
  const [Part_C4_A, setPart_C4_A] = useState("");
  const [Part_C5_A, setPart_C5_A] = useState("");
  const [Part_C6_A, setPart_C6_A] = useState("");

  const [Instruction, setInstruction] = useState("");
  const [Answer_Time, setAnswer_Time] = useState("");

  const [RealetionA, setRealetionA] = useState("");
  const [RealetionB, setRealetionB] = useState("");
  const [RealetionC, setRealetionC] = useState("");


  const [subquestions, setSubquestions] = useState([]);

  const handleSubquestionChange = (index, data) => {
    const updatedSubquestions = [...subquestions];
    updatedSubquestions[index] = { question: data };
    setSubquestions(updatedSubquestions);
  };



  useEffect(() => {
    if (question_details) {
      setRealetionA(question_details.RealetionA || '')
      setRealetionB(question_details.RealetionB || '')
      setRealetionC(question_details.RealetionC || '')

      setSection(question_details.Section || ''); // Set section if question_details is defined
      setBoard(question_details.Board || '')
      setMedium(question_details.Medium || '')
      setClass(question_details.Class || '')
      setSub_Class(question_details.Sub_Class || '')
      setSubjects(question_details.Subject || '')
      setLesson(question_details.Lesson || '')
      setChapter_Name(question_details.Chapter_Name || '')
      setDifficulty_level(question_details.Difficulty_level || '')
      setName_of_examination(question_details.Name_of_examination || [])
      setObjectives(question_details.Objectives || '')
      setInstruction(question_details.Instruction || '')
      setQuestion(question_details.Question || '')
      setMarks(question_details.Marks || '')
      setAnswer_Time(question_details.Answer_Time || '')
      setAnswer(question_details.Answer || '')
      setorQuestion(question_details.orQuestion || '')
      setorAnswer(question_details.orAnswer || '')
      setDash(question_details.NumberOfLine || '')
      setPoemSat(question_details.PoemSt || '')
      setPoemEnd(question_details.PoemEnd || '')
      setOption_1(question_details.Option_1 || '')
      setOption_2(question_details.Option_2 || '')
      setOption_3(question_details.Option_3 || '')
      setOption_4(question_details.Option_4 || '')
      setOption_5(question_details.Option_5 || '')
      setOption_6(question_details.Option_6 || '')
      setinput1(question_details.input1 || '')
      setinput2(question_details.input2 || '')
      setinput3(question_details.input3 || '')

      setPart_A1(question_details.Part_A1 || '')
      setPart_A2(question_details.Part_A2 || '')
      setPart_A3(question_details.Part_A3 || '')
      setPart_A4(question_details.Part_A4 || '')
      setPart_A5(question_details.Part_A5 || '')
      setPart_A6(question_details.Part_A6 || '')

      setPart_B1(question_details.Part_B1 || '')
      setPart_B2(question_details.Part_B2 || '')
      setPart_B3(question_details.Part_B3 || '')
      setPart_B4(question_details.Part_B4 || '')
      setPart_B5(question_details.Part_B5 || '')
      setPart_B6(question_details.Part_B6 || '')
      setPart_B7(question_details.Part_B7 || '')

      setPart_C1(question_details.Part_C1 || '')
      setPart_C2(question_details.Part_C2 || '')
      setPart_C3(question_details.Part_C3 || '')
      setPart_C4(question_details.Part_C4 || '')
      setPart_C5(question_details.Part_C5 || '')
      setPart_C6(question_details.Part_C6 || '')
      setPart_C7(question_details.Part_C7 || '')

      setPart_A1_A(question_details.Part_A1_A || '')
      setPart_A2_A(question_details.Part_A2_A || '')
      setPart_A3_A(question_details.Part_A3_A || '')
      setPart_A4_A(question_details.Part_A4_A || '')
      setPart_A5_A(question_details.Part_A5_A || '')
      setPart_A6_A(question_details.Part_A6_A || '')

      setPart_B1_A(question_details.Part_B1_A || '')
      setPart_B2_A(question_details.Part_B2_A || '')
      setPart_B3_A(question_details.Part_B3_A || '')
      setPart_B4_A(question_details.Part_B4_A || '')
      setPart_B5_A(question_details.Part_B5_A || '')
      setPart_B6_A(question_details.Part_B6_A || '')

      setPart_C1_A(question_details.Part_C1_A || '')
      setPart_C2_A(question_details.Part_C2_A || '')
      setPart_C3_A(question_details.Part_C3_A || '')
      setPart_C4_A(question_details.Part_C4_A || '')
      setPart_C5_A(question_details.Part_C5_A || '')
      setPart_C6_A(question_details.Part_C6_A || '')




     


      setOneline(question_details.NumberOfLine == "1");
      setTwoline(question_details.NumberOfLine == "2");
      setThreeline(question_details.NumberOfLine == "3");
      setFourline(question_details.NumberOfLine == "4");
      setFiveline(question_details.NumberOfLine == "5");
      setSixline(question_details.NumberOfLine == "6");
      setSevenline(question_details.NumberOfLine == "7");
      setEightline(question_details.NumberOfLine == "8");
      setNineline(question_details.NumberOfLine == "9");
      setTenline(question_details.NumberOfLine == "10");
    }


  }, [question_details]);

  const addExamaData = (name) => {
    try {
      setName_of_examination([...Name_of_examination, { Name: name }]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExamData = (name) => {
    setName_of_examination(
      Name_of_examination?.filter((ele) => ele?.Name != name)
    );
  };

  const handleSelectChange = (event) => {
    const {
        target: { value },
    } = event;
    setName_of_examination(value);
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

  // get method
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
  //get for type of questions
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
  //get of chapters
  const [chapters, setchapters] = useState([]);
  const getChapter = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllChapter"
      );
      if (res.status == 200) {
        setchapters(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //get for name of Examination
  const [NameExam, setNameExam] = useState([]);
  const getNameExamination = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllNameExamination"
      );
      if (res.status == 200) {
        setNameExam(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Update

  const UpdateQuestion = async () => {

    try {
      const config = {
        url: "/admin/UpdateQuestionPaper",
        method: "put",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: {
          Section: section,
          Board: Board,
          Medium: Medium,
          Class: Class,
          Sub_Class: Sub_Class,
          Subject: Subjects,
          Lesson: Lesson,
          Chapter_Name: Chapter_Name,
          Difficulty_level: Difficulty_level,
          Name_of_examination: Name_of_examination,
          Objectives: Objectives,
          Instruction: Instruction,


          Question: Question,
          Image_Ans: ImageAns,
          Marks: Marks,
          Answer_Time: Answer_Time,
          Answer: Answer,
          NumberOfLine:Dash,
          orQuestion: orQuestion,
          orAnswer: orAnswer,

          PoemSt: PoemSat,
          PoemEnd: PoemEnd,
          Image: Image,
          Image_1: Image1,
          Image_2: Image2,
          Image_3: Image_3,
          Image_4: Image_4,
          Image_5: Image_5,
          Image_6: Image_6,
          PassiveQuesion: subquestions,


          Option_1: Option_1,
          Option_2: Option_2,
          Option_3: Option_3,
          Option_4: Option_4,
          Option_5: Option_5,
          Option_6: Option_6,
          ImageQ:ImageQues,


          Part_A1: Part_A1,
          Part_A2: Part_A2,
          Part_A3: Part_A3,
          Part_A4: Part_A4,
          Part_A5: Part_A5,
          Part_A6: Part_A6,
          Part_B1: Part_B1,
          Part_B2: Part_B2,
          Part_B3: Part_B3,
          Part_B4: Part_B4,
          Part_B5: Part_B5,
          Part_B6: Part_B6,
          Part_B7: Part_B7,
          Part_C1: Part_C1,
          Part_C2: Part_C2,
          Part_C3: Part_C3,
          Part_C4: Part_C4,
          Part_C5: Part_C5,
          Part_C6: Part_C6,
          Part_C7: Part_C7,
          Part_A1_A: Part_A1_A,
          Part_A2_A: Part_A2_A,
          Part_A3_A: Part_A3_A,
          Part_A4_A: Part_A4_A,
          Part_A5_A: Part_A5_A,
          Part_A6_A: Part_A6_A,
          Part_B1_A: Part_B1_A,
          Part_B2_A: Part_B2_A,
          Part_B3_A: Part_B3_A,
          Part_B4_A: Part_B4_A,
          Part_B5_A: Part_B5_A,
          Part_B6_A: Part_B6_A,
          Part_B7_A: Part_B7_A,
          Part_C1_A: Part_C1_A,
          Part_C2_A: Part_C2_A,
          Part_C3_A: Part_C3_A,
          Part_C4_A: Part_C4_A,
          Part_C5_A: Part_C5_A,
          Part_C6_A: Part_C6_A,

          input1: input1,
          input2: input2,
          input3: input3,

          RealetionB: RealetionB,
          RealetionC: RealetionC,
          RealetionA: RealetionA,


          id: question_details?._id,
          authId: admin?._id
        }
      };
      let res = await axios(config);
      if (res.status == 200) {
        await  swal({
          title: "Yeah!",
          text: res.data.success,
          icon: "success",
          button: "Ok!",
        });
        window.location.reload("")
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallboardname();
    getAddMedium();
    getallclassname();
    getaddsubclasss();
    getSubject();
    getalltypesofquess();
    getallweightagecontent();
    getChapter();
    getNameExamination();

  }, []);

  // Line
  const [oneline, setOneline] = useState(true);
  const [twoline, setTwoline] = useState(false);
  const [threeline, setThreeline] = useState(false);
  const [fourline, setFourline] = useState(false);
  const [fiveline, setFiveline] = useState(false);
  const [sixline, setSixline] = useState(false);
  const [sevenline, setSevenline] = useState(false);
  const [eightline, setEightline] = useState(false);
  const [nineline, setNineline] = useState(false);
  const [tenline, setTenline] = useState(false);
  return (
    <div>
      <div className="box_1">
        <div className="container">
          <div className="row">
            <div className="text-align-center gradient-background">
              <span className="blinking">
                <h4 className="glow-text"><b>{question_details?.Types_Question}</b></h4>
              </span>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Section</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Section"
                  value={section}
                  onChange={(e) => {
                    setSection(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Examination Board</label>
                <Form.Select
                  aria-label="Default select example"
                  className="vi_0"
                  value={Board}
                  onChange={(e) => setBoard(e.target.value)}
                >
                  <option>Select the Board</option>
                  {getboardname?.map((item, i) => {
                    return (
                      <option value={item?.boardName} key={i}>
                        {item?.boardName}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Medium</label>
                <Form.Select
                  className="vi_0"
                  aria-label="Default select example"
                  value={Medium}
                  onChange={(e) => setMedium(e.target.value)}
                >
                  <option>Select the Medium</option>
                  {Mediumm?.map((item, i) => {
                    return (
                      <option value={item?.mediumName} key={i}>
                        {item?.mediumName}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Class</label>
                <Form.Select
                  aria-label="Default select example"
                  className="vi_0"
                  value={Class}
                  onChange={(e) => setClass(e.target.value)}
                >
                  <option>Select the Class</option>
                  {getclassname?.map((item, i) => {
                    return (
                      <option value={item?.className} key={i}>
                        {item?.className}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Sub-Class</label>
                <Form.Select
                  aria-label="Default select example"
                  className="vi_0"
                  value={Sub_Class}
                  onChange={(e) => setSub_Class(e.target.value)}
                >
                  <option>Select the Sub-Class</option>
                  {getaddsubclass?.map((item, i) => {
                    return (
                      <option value={item?.subclassName} key={i}>
                        {item?.subclassName}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Subject</label>
                <Form.Select
                  className="vi_0"
                  value={Subjects}
                  aria-label="Default select example"
                  onChange={(e) => setSubjects(e.target.value)}
                >
                  <option>Select the Subject</option>
                  {subject?.map((item, i) => {
                    return (
                      <option value={item?.subjectName} key={i}>
                        {item?.subjectName}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Lesson</label>
                <Form.Select
                  aria-label="Default select example"
                  className="vi_0"
                  value={Lesson}
                  onChange={(e) => {
                    setLesson(e.target.value);
                  }}
                >
                  <option value="">Selete the Lesson</option>
                  {weightage
                    ?.filter((ele) => Subjects == ele?.Subject)
                    ?.map((val, i) => {
                      return (
                        <option value={val?.Content} key={i}>
                          {val?.Content}
                        </option>
                      );
                    })}
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Chapter Name</label>
                <Form.Select
                  className="vi_0"
                  value={Chapter_Name}
                  aria-label="Default select example"
                  onChange={(e) => setChapter_Name(e.target.value)}
                >
                  <option>Select the Chapter Name</option>
                  {chapters?.map((item, i) => {
                    return (
                      <option value={item?.chapterName} key={i}>
                        {item?.chapterName}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select the Difficulty level of Paper</label>
                <Form.Select
                  aria-label="Default select example"
                  className="vi_0"
                  value={Difficulty_level}
                  onChange={(e) => {
                    setDifficulty_level(e.target.value);
                  }}
                >
                  <option>Select the Difficulty level of Paper</option>
                  <option value="Easy">Easy</option>
                  <option value="Average">Average</option>
                  <option value="Difficult">Difficult</option>
                </Form.Select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Name Of the Examination</label>
                <FormControl sx={{ m: 1, width: 245, height: 43 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Name Of Exam
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={Name_of_examination}
                  onChange={handleSelectChange}
                  input={<OutlinedInput label="Amenities" />}
                  renderValue={(selected) =>
                    selected.map((amenity) => amenity.NameExamination).join(", ")
                  }
                >
                  {NameExam?.map((amenity) => (
                    <MenuItem key={amenity._id} value={amenity}>
                      <Checkbox
                        checked={Name_of_examination.some(
                          (selected) => selected._id === amenity._id
                        )}
                      />
                      <ListItemText primary={amenity.NameExamination} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Objectives</label>
                <Form.Select
                  aria-label="Default select example"
                  className="vi_0"
                  value={Objectives}
                  onChange={(e) => setObjectives(e.target.value)}
                >
                  <option>Select Objectives</option>
                  <option value="Knowledge">Knowledge</option>
                  <option value="Appreciation">Appreciation</option>
                  <option value="Understanding">Understanding</option>

                </Form.Select>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select the Types of the Question</label>
              </div>{" "}
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setTypes_Question(e.target.value);
                }}
              >
                <option value="default">
                  Select the Types of the Question
                </option>
                <option value="Objective Questions">Objective Questions</option>
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
                <option value="Grammer Questions">Grammer Questions</option>
                <option value="One Word Question">One Word Question</option>
                <option value="One Sentence Answer Question">
                  One Sentence Answer Question
                </option>
                <option value="Two  Sentence Answer Questions">
                  Two Sentence Answer Questions
                </option>
                <option value="Two and three Sentence Answer Questions">
                  Two and three Sentence Answer Questions
                </option>
                <option value="Three and Four Sentence Answer Questions">
                  Three and Four Sentence Answer Questions
                </option>
             
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
                  Expanding and Explanations Answer Questions
                </option>
                <option value="Answer the Questions and Draw the Figure Questions">
                  Answer the Questions and Draw the Figure Questions{" "}
                </option>
                <option value="Graph Questions">Graph Questions</option>
                <option value="Complete the Poem">Complete the Poem</option>
                <option value="Situation UnderStatnding answer Questions">
                  {" "}
                  Situation UnderStatnding answer Questions
                </option>
                <option value="Poet,Time, Place, Writer answer questions">
                  {" "}
                  Poet,Time, Place, Writer answer questions
                </option>
                <option value="Letter Writting">Letter Writting</option>
                <option value="Map Reading">Map Reading</option>
           
              </Form.Select>
            </div> */}

            <div className="col-md-12">
              <div className="do-sear">
                <label htmlFor="">Instructions</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Instruction}
                  onChange={handleChange2}
                />
              </div>
            </div>
            {/* <div className="col-md-12 mt-3">
            <AdminQuestioneditprops Types_Question={Types_Question} />
          </div> */}
{question_details?.Types_Question === "Match the Following Questions" ||
question_details?.Types_Question === "Odd and out words Questions" ||
question_details?.Types_Question === "RelationShip Words Questions"

? (<>

</>):(<>

<div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Question</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Question}
                  onChange={handleChange}
                />
              </div>
            </div>
</>)}

            {/* RelationShip Words Questions */}

            {question_details.Types_Question === "RelationShip Words Questions" ? (<>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload"> Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image
                        ?
                        Image && URL.createObjectURL(Image) :
                        `http://localhost:8000/Questions/${question_details?.Image}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={ImageEditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload"
                        ref={ImageRef}
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-sm-6"></div>

              <div className="row">
              <label htmlFor="">Question</label>
                  <div className="col-md-3">
                    <div className="do-sear mt-2 d-flex">
                      <input
                     
                        type="text"
                        className="vi_0"
                        placeholder="Enter The question"
                        value={RealetionA}
                        onChange={(e)=>setRealetionA(e.target.value)}
                      />
                      <p className="m-2">:</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="do-sear mt-2 d-flex">
                      <input
                        type="text"
                        className="vi_0"
                        placeholder="Enter The question"
                        value={RealetionB}
                        onChange={(e)=>setRealetionB(e.target.value)}
                      />
                      <p className="m-2 ">::</p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="do-sear mt-2 d-flex">
                      <input
                        type="text"
                        className="vi_0"
                        placeholder="Enter The question"
                        value={RealetionC}
                        onChange={(e)=>setRealetionC(e.target.value)}
                      />
                      <p className="m-2">:</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="do-sear mt-2">
                      <p
                        className=""
                        style={{
                          borderBottom: "1px solid",
                          marginTop: "45px",
                          marginBottom: "0px",
                        }}
                      ></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
              <div className="do-sear mt-2">
                <label htmlFor="">Option A)</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter The question"
                  value={Option_1}
                  onChange={(e)=>setOption_1(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="do-sear mt-2">
                <label htmlFor="">Option B)</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter The question"
                  value={Option_2}
                  onChange={(e)=>setOption_2(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="do-sear mt-2">
                <label htmlFor="">Option C)</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter The question"
                  value={Option_3}
                  onChange={(e)=>setOption_3(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="do-sear mt-2">
                <label htmlFor="">Option D)</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter The question"
                  value={Option_4}
                  onChange={(e)=>setOption_4(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="do-sear mt-2">
                <div className="do-sear mt-2">
                  <label htmlFor="">Answer</label>               
                  <input
                    type="text"
                    className="vi_0"
                    placeholder="Enter The question"
                    value={Answer}
                    onChange={(e)=>setAnswer(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            </>):(<></>)}
            
            {/* One Word Question...... */}
            {question_details?.Types_Question === "One Word Question" ||
            question_details?.Types_Question === "One Sentence Answer Question" ||
             question_details?.Types_Question ===  "Two  Sentence Answer Questions" ||
             question_details?.Types_Question === "Two and three Sentence Answer Questions"||
             question_details?.Types_Question === "Three and Four Sentence Answer Questions" ||
             question_details?.Types_Question === "Ten Sentence Answer Questions"||
             question_details?.Types_Question === "Eight Sentence Answer Questions" ||
             question_details?.Types_Question === "Five and Six Sentence Answer Questions"||
             question_details?.Types_Question === "Six Sentence Answer Questions" ||
             question_details?.Types_Question === "Seven Sentence Answer Questions"
             ?
              (<>
                <div className="col-md-4">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Select Number of Line</label>
                    <Form.Select
                      aria-label="Default select example"
                      value={Dash}
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        setDash(selectedValue);
                        setOneline(selectedValue === "1");
                        setTwoline(selectedValue === "2");
                        setThreeline(selectedValue === "3");
                        setFourline(selectedValue === "4");
                        setFiveline(selectedValue === "5");
                        setSixline(selectedValue === "6");
                        setSevenline(selectedValue === "7");
                        setEightline(selectedValue === "8");
                        setNineline(selectedValue === "9");
                        setTenline(selectedValue === "10");
                      }}
                    >
                      <option>Select Answer Line</option>
                      <option
                        value="1"
                        onClick={() => {
                          setOneline(true);
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        1
                      </option>

                      <option
                        value="2"
                        onClick={() => {
                          setOneline(false);
                          setTwoline(true);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        2
                      </option>

                      <option
                        value="3"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(true);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        3
                      </option>
                      <option
                        value="4"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(true);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        4
                      </option>
                      <option
                        value="5"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(true);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        5
                      </option>
                      <option
                        value="6"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(true);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        6
                      </option>
                      <option
                        value="7"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(true);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        7
                      </option>
                      <option
                        value="8"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(true);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        8
                      </option>
                      <option
                        value="9"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(true);
                          setTenline(false);
                        }}
                      >
                        9
                      </option>
                      <option
                        value="10"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(true);
                        }}
                      >
                        10
                      </option>
                    </Form.Select>
                  </div>
                </div>

                <div className="col-8">
                  {oneline ? (
                    <>
                      <div className="col-md-12">
                        <div className="do-sear mt-5">
                          <p type="text" className="lined-input"></p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {twoline ? (
                        <>
                          <div className="col-md-12">
                            <div className="do-sear mt-4">
                              <p type="text" className="lined-input"></p>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="do-sear mt-2">
                              <p type="text" className="lined-input"></p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {threeline ? (
                            <>
                              <div className="col-md-12">
                                <div className="do-sear mt-4">
                                  <p type="text" className="lined-input"></p>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="do-sear mt-2">
                                  <p type="text" className="lined-input"></p>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="do-sear mt-2">
                                  <p type="text" className="lined-input"></p>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              {fourline ? (
                                <>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-4">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-2">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-2">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-2">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {fiveline ? (
                                    <>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-4">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      {sixline ? (
                                        <>
                                          <div className="col-md-12">
                                            <div className="do-sear mt-4">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          {sevenline ? (
                                            <>
                                              <div className="col-md-12">
                                                <div className="do-sear mt-4">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              {eightline ? (
                                                <>
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-4">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>
                                                </>
                                              ) : (
                                                <>
                                                  {nineline ? (
                                                    <>
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-4">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>
                                                    </>
                                                  ) : (
                                                    <>
                                                      {tenline ? (
                                                        <>
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-4">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>
                                                        </>
                                                      ) : (
                                                        <></>
                                                      )}
                                                    </>
                                                  )}
                                                </>
                                              )}
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>

                <div className="col-md-12">
               <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Answer}
                  onChange={handleChange1}
                />
               </div>
               </div>

               <div>
               <h6 style={{ padding: "20px 0 0 0", textAlign: "center" }}>
                <b>(OR)</b>
               </h6>
                 </div>

                 <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload1">Question Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image1
                        ?
                        Image1 && URL.createObjectURL(Image1) :
                        `http://localhost:8000/Questions/${question_details?.Image_1}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image1EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload1"
                        ref={Image1Ref}
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
                  </div>
                 <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload2">Question Image</label>
                  <div className="d-flex">
                    <img
                      style={{    width: "65%",
                      height: "262px",
                      imageRendering: "pixelated"
                  }}
                      src={Image2
                        ?
                        Image2 && URL.createObjectURL(Image2) :
                        `http://localhost:8000/Questions/${question_details?.Image_2}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image2EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload2"
                        ref={Image2Ref}
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
               </div>

                   <div className="col-md-12">
               <div className="do-sear mt-2">
                <label htmlFor="">Question</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={orQuestion}
                  onChange={handleChange4}
                />
               </div>
                </div>

                <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={orAnswer}
                  onChange={handleChange5}
                />
              </div>
                </div>

              </>) : (<></>)}

              {/* Odd and out words Questions */}

              {question_details?.Types_Question === "Odd and out words Questions" ? (<>
              
                <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 1</label>
               
                <CKEditor

                  editor={ClassicEditor}
                  className="vi_0"
                  data={Option_1}
                  onChange={Option1}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 2</label>
               
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Option_2}
                  onChange={Option2}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 3</label>
               
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Option_3}
                  onChange={Option3}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 4</label>
                
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Option_4}
                  onChange={Option4}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Answer}
                  onChange={handleChange1}
                />
              </div>
            </div>
             <div className="mt-4">
              <label
                htmlFor=""
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                (OR)
              </label>
            </div>
            <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload1"> Image 1</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image1
                        ?
                        Image1 && URL.createObjectURL(Image1) :
                        `http://localhost:8000/Questions/${question_details?.Image_1}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image1EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload1"
                        ref={Image1Ref}
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload2"> Image 2</label>
                  <div className="d-flex">
                    <img
                      style={{    width: "65%",
                      height: "262px",
                      imageRendering: "pixelated"
                  }}
                      src={Image2
                        ?
                        Image2 && URL.createObjectURL(Image2) :
                        `http://localhost:8000/Questions/${question_details?.Image_2}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image2EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload2"
                        ref={Image2Ref}
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload3"> Image 3</label>
                  <div className="d-flex">
                    <img
                    style={{    width: "65%",
                    height: "262px",
                    imageRendering: "pixelated"
                }}
                      src={Image_3
                        ?
                        Image_3 && URL.createObjectURL(Image_3) :
                        `http://localhost:8000/Questions/${question_details?.Image_3}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image3EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload3"
                        ref={Image3Ref}
                        onChange={(e) => setImage_3(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload4"> Image 4</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image_4
                        ?
                        Image_4 && URL.createObjectURL(Image_4) :
                        `http://localhost:8000/Questions/${question_details?.Image_4}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image4EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload4"
                        ref={Image4Ref}
                        onChange={(e) => setImage_4(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="">Answer Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                      height: "262px",
                      imageRendering: "pixelated"
                  }}
                     
                      src={ImageAns
                        ?
                        ImageAns && URL.createObjectURL(ImageAns) :
                        `http://localhost:8000/Questions/${question_details?.Image_Ans}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={handleEditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={(e) => setImageAns(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              </>):(<></>)}

              {/* Match the Following Questions */}

              {question_details?.Types_Question === "Match the Following Questions" ? (<>
               <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload"> Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={ImageQues
                        ?
                        ImageQues && URL.createObjectURL(ImageQues) :
                        `http://localhost:8000/Questions/${question_details?.Image}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={QuestionimgEditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload"
                        ref={QuesImgRef}
                        onChange={(e) => setImageQues(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
                <div className="mt-2">
                <label htmlFor=""> Question</label>

                <div className="row">
                  <div className="col-md-4">
                    <div className="do-sear mt-2">
                      <label
                        htmlFor=""
                        className="d-flex justify-content-center"
                      >
                        {" "}
                        PART A
                      </label>
                      <input
                      value={Part_A1}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Question"
                        onChange={(e) => {
                          setPart_A1(e.target.value);
                        }}
                      />
                      <input
                      value={Part_A2}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Question"
                        onChange={(e) => {
                          setPart_A2(e.target.value);
                        }}
                      />
                      <input
                      value={Part_A3}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Question"
                        onChange={(e) => {
                          setPart_A3(e.target.value);
                        }}
                      />
                      <input
                      value={Part_A4}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Question"
                        onChange={(e) => {
                          setPart_A4(e.target.value);
                        }}
                      />
                      <input
                      value={Part_A5}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Question"
                        onChange={(e) => {
                          setPart_A5(e.target.value);
                        }}
                      />
                      <input
                      value={Part_A6}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Question"
                        onChange={(e) => {
                          setPart_A6(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="do-sear mt-2">
                      <label
                        htmlFor=""
                        className="d-flex justify-content-center"
                      >
                        {" "}
                        PART B
                      </label>
                      <input
                      value={Part_B1}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_B1(e.target.value);
                        }}
                      />
                      <input
                      value={Part_B2}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_B2(e.target.value);
                        }}
                      />
                      <input
                      value={Part_B3}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_B3(e.target.value);
                        }}
                      />
                      <input
                      value={Part_B4}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_B4(e.target.value);
                        }}
                      />
                      <input
                      value={Part_B5}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_B5(e.target.value);
                        }}
                      />
                      <input
                      value={Part_B6}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_B6(e.target.value);
                        }}
                      />
                      <input
                      value={Part_B7}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_B7(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="do-sear mt-2">
                      <label
                        htmlFor=""
                        className="d-flex justify-content-center"
                      >
                        {" "}
                        PART C
                      </label>
                      <input
                      value={Part_C1}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_C1(e.target.value);
                        }}
                      />
                      <input
                      value={Part_C2}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_C2(e.target.value);
                        }}
                      />
                      <input
                      value={Part_C3}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_C3(e.target.value);
                        }}
                      />
                      <input
                      value={Part_C4}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_C4(e.target.value);
                        }}
                      />
                      <input
                      value={Part_C5}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_C5(e.target.value);
                        }}
                      />
                      <input
                      value={Part_C6}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_C6(e.target.value);
                        }}
                      />
                      <input
                      value={Part_C7}
                        type="text"
                        className="vi_0 mb-2"
                        placeholder="Enter Your Answer"
                        onChange={(e) => {
                          setPart_C7(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

               <label htmlFor=""> Answer</label>

              <div className="row">
                <div className="col-md-4">
                  <div className="do-sear mt-2">
                    <label htmlFor="" className="d-flex justify-content-center">
                      {" "}
                      PART A
                    </label>
                    <input
                      value={Part_A1_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Question"
                      onChange={(e) => {
                        setPart_A1_A(e.target.value);
                      }}
                    />
                    <input
                      value={Part_A2_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Question"
                      onChange={(e) => {
                        setPart_A2_A(e.target.value);
                      }}
                    />
                    <input
                      value={Part_A3_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Question"
                      onChange={(e) => {
                        setPart_A3_A(e.target.value);
                      }}
                    />
                    <input
                      value={Part_A4_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Question"
                      onChange={(e) => {
                        setPart_A4_A(e.target.value);
                      }}
                    />
                    <input
                      value={Part_A5_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Question"
                      onChange={(e) => {
                        setPart_A5_A(e.target.value);
                      }}
                    />
                    <input
                      value={Part_A6_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Question"
                      onChange={(e) => {
                        setPart_A6_A(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="do-sear mt-2">
                    <label htmlFor="" className="d-flex justify-content-center">
                      {" "}
                      PART B
                    </label>
                    <input
                    value={Part_B1_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_B1_A(e.target.value);
                      }}
                    />
                    <input
                    value={Part_B2_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_B2_A(e.target.value);
                      }}
                    />
                    <input
                    value={Part_B3_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_B3_A(e.target.value);
                      }}
                    />
                    <input
                    value={Part_B4_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_B4_A(e.target.value);
                      }}
                    />
                    <input
                    value={Part_B5_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_B5_A(e.target.value);
                      }}
                    />
                    <input
                    value={Part_B6_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_B6_A(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="do-sear mt-2">
                    <label htmlFor="" className="d-flex justify-content-center">
                      {" "}
                      PART C
                    </label>
                    <input
                    value={Part_C1_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_C1_A(e.target.value);
                      }}
                    />
                    <input
                    value={Part_C2_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_C2_A(e.target.value);
                      }}
                    />
                    <input
                    value={Part_C3_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_C3_A(e.target.value);
                      }}
                    />
                    <input
                    value={Part_C4_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_C4_A(e.target.value);
                      }}
                    />
                    <input
                    value={Part_C5_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_C5_A(e.target.value);
                      }}
                    />
                    <input
                    value={Part_C6_A}
                      type="text"
                      className="vi_0 mb-2"
                      placeholder="Enter Your Answer"
                      onChange={(e) => {
                        setPart_C6_A(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              </>):(<></>)}

              {/* Recorrect the Answers Questions */}

              {question_details?.Types_Question === "Recorrect the Answers Questions" ||
              question_details?.Types_Question === "Expanding and Explanations Answer Questions"
              
              ? (<>
                <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload"> Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image
                        ?
                        Image && URL.createObjectURL(Image) :
                        `http://localhost:8000/Questions/${question_details?.Image}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={ImageEditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload"
                        ref={ImageRef}
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6"></div>

                <div className="col-md-4">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Select Number of Line</label>
                    <Form.Select
                      aria-label="Default select example"
                      value={Dash}
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        setDash(selectedValue);
                        setOneline(selectedValue === "1");
                        setTwoline(selectedValue === "2");
                        setThreeline(selectedValue === "3");
                        setFourline(selectedValue === "4");
                        setFiveline(selectedValue === "5");
                        setSixline(selectedValue === "6");
                        setSevenline(selectedValue === "7");
                        setEightline(selectedValue === "8");
                        setNineline(selectedValue === "9");
                        setTenline(selectedValue === "10");
                      }}
                    >
                      <option>Select Answer Line</option>
                      <option
                        value="1"
                        onClick={() => {
                          setOneline(true);
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        1
                      </option>

                      <option
                        value="2"
                        onClick={() => {
                          setOneline(false);
                          setTwoline(true);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        2
                      </option>

                      <option
                        value="3"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(true);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        3
                      </option>
                      <option
                        value="4"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(true);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        4
                      </option>
                      <option
                        value="5"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(true);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        5
                      </option>
                      <option
                        value="6"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(true);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        6
                      </option>
                      <option
                        value="7"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(true);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        7
                      </option>
                      <option
                        value="8"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(true);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        8
                      </option>
                      <option
                        value="9"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(true);
                          setTenline(false);
                        }}
                      >
                        9
                      </option>
                      <option
                        value="10"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(true);
                        }}
                      >
                        10
                      </option>
                    </Form.Select>
                  </div>
                </div>

                <div className="col-8">
                  {oneline ? (
                    <>
                      <div className="col-md-12">
                        <div className="do-sear mt-5">
                          <p type="text" className="lined-input"></p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {twoline ? (
                        <>
                          <div className="col-md-12">
                            <div className="do-sear mt-4">
                              <p type="text" className="lined-input"></p>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="do-sear mt-2">
                              <p type="text" className="lined-input"></p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {threeline ? (
                            <>
                              <div className="col-md-12">
                                <div className="do-sear mt-4">
                                  <p type="text" className="lined-input"></p>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="do-sear mt-2">
                                  <p type="text" className="lined-input"></p>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="do-sear mt-2">
                                  <p type="text" className="lined-input"></p>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              {fourline ? (
                                <>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-4">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-2">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-2">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-2">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {fiveline ? (
                                    <>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-4">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      {sixline ? (
                                        <>
                                          <div className="col-md-12">
                                            <div className="do-sear mt-4">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          {sevenline ? (
                                            <>
                                              <div className="col-md-12">
                                                <div className="do-sear mt-4">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              {eightline ? (
                                                <>
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-4">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>
                                                </>
                                              ) : (
                                                <>
                                                  {nineline ? (
                                                    <>
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-4">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>
                                                    </>
                                                  ) : (
                                                    <>
                                                      {tenline ? (
                                                        <>
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-4">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>
                                                        </>
                                                      ) : (
                                                        <></>
                                                      )}
                                                    </>
                                                  )}
                                                </>
                                              )}
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>

                <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Answer}
                  onChange={handleChange1}
                />
              </div>
            </div>

            <div>
              <h6 style={{ padding: "20px 0 0 0", textAlign: "center" }}>
                <b>(OR)</b>
              </h6>
            </div>

            <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload1">Question Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image1
                        ?
                        Image1 && URL.createObjectURL(Image1) :
                        `http://localhost:8000/Questions/${question_details?.Image_1}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image1EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload1"
                        ref={Image1Ref}
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload2">Question Image</label>
                  <div className="d-flex">
                    <img
                      style={{    width: "65%",
                      height: "262px",
                      imageRendering: "pixelated"
                  }}
                      src={Image2
                        ?
                        Image2 && URL.createObjectURL(Image2) :
                        `http://localhost:8000/Questions/${question_details?.Image_2}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image2EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload2"
                        ref={Image2Ref}
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>

            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Question</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={orQuestion}
                  onChange={handleChange4}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={orAnswer}
                  onChange={handleChange5}
                />
              </div>
            </div>
              </>):(<></>)}


              {/* Objective Questions */}

              {question_details?.Types_Question === "Objective Questions" ? (<>
                <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 1</label>
                <input
                value={Option_1}
                  type="text"
                  className="vi_0"
                  onChange={(e) => setOption_1(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 2</label>
                <input
                value={Option_2}
                  type="text"
                  className="vi_0"
                  onChange={(e) => setOption_2(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Answer}
                  onChange={handleChange1}
                />
              </div>
            </div>
            <div>
              <h6 style={{ padding: "20px 0 0 0", textAlign: "center" }}>
                <b>(OR)</b>
              </h6>
            </div>

            <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="quesimg"> Question Image </label>
                  <div className="d-flex">
                    <img
                    style={{    width: "65%",
                    height: "262px",
                    imageRendering: "pixelated"
                }}
                      src={ImageQues
                        ?
                        ImageQues && URL.createObjectURL(ImageQues) :
                        `http://localhost:8000/Questions/${question_details?.ImageQ}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={QuestionimgEditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="quesimg"
                        ref={QuesImgRef}
                        onChange={(e) => setImageQues(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>

              <div className="col-sm-6"></div>

            <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload1"> Image 1</label>
                  <div className="d-flex">
                    <img
                    style={{    width: "65%",
                    height: "262px",
                    imageRendering: "pixelated"
                }}
                      src={Image1
                        ?
                        Image1 && URL.createObjectURL(Image1) :
                        `http://localhost:8000/Questions/${question_details?.Image_1}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image1EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload1"
                        ref={Image1Ref}
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload2"> Image 2</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image2
                        ?
                        Image2 && URL.createObjectURL(Image2) :
                        `http://localhost:8000/Questions/${question_details?.Image_2}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image2EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload2"
                        ref={Image2Ref}
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>

              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="">Answer Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                      height: "262px",
                      imageRendering: "pixelated"
                  }}
                     
                      src={ImageAns
                        ?
                        ImageAns && URL.createObjectURL(ImageAns) :
                        `http://localhost:8000/Questions/${question_details?.Image_Ans}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={handleEditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={(e) => setImageAns(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              
              </>):(<></>)}


              {/* Multiple Choice Questions */}

              {question_details?.Types_Question === "Multiple Choice Questions" ? (<>
              
                <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 1</label>
                <input
               value={Option_1}
                  type="text"
                  className="vi_0"
                  onChange={(e) => setOption_1(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 2</label>
                <input
                value={Option_2}
                type="text"
                  className="vi_0"
                  onChange={(e) => setOption_2(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 3</label>
                <input
                value={Option_3}
                type="text"                  
                  className="vi_0"
                  onChange={(e) => setOption_3(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 4</label>
                <input
                value={Option_4}
                type="text"
                  className="vi_0"
                  onChange={(e) => setOption_4(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 5</label>
                <input
                value={Option_5}
                type="text"
                  className="vi_0"
                  onChange={(e) => setOption_5(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 6</label>
                <input
                value={Option_6}
                type="text"
                  className="vi_0"
                  onChange={(e) => setOption_6(e.target.value)}
                />
              </div>
            </div>
              
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Answer}
                  onChange={handleChange1}
                />
              </div>
            </div>

            <div>
              <h6 style={{ padding: "20px 0 0 0", textAlign: "center" }}>
                <b>(OR)</b>
              </h6>
            </div>
            <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="quesimg"> Question Image </label>
                  <div className="d-flex">
                    <img
                    style={{    width: "65%",
                    height: "262px",
                    imageRendering: "pixelated"
                }}
                      src={ImageQues
                        ?
                        ImageQues && URL.createObjectURL(ImageQues) :
                        `http://localhost:8000/Questions/${question_details?.ImageQ}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={QuestionimgEditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="quesimg"
                        ref={QuesImgRef}
                        onChange={(e) => setImageQues(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>

              <div className="col-sm-6"></div>

              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload1"> Image 1</label>
                  <div className="d-flex">
                    <img
                    style={{    width: "65%",
                    height: "262px",
                    imageRendering: "pixelated"
                }}
                      src={Image1
                        ?
                        Image1 && URL.createObjectURL(Image1) :
                        `http://localhost:8000/Questions/${question_details?.Image_1}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image1EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload1"
                        ref={Image1Ref}
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload2"> Image 2</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image2
                        ?
                        Image2 && URL.createObjectURL(Image2) :
                        `http://localhost:8000/Questions/${question_details?.Image_2}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image2EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload2"
                        ref={Image2Ref}
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload3"> Image 3</label>
                  <div className="d-flex">
                    <img
                    style={{    width: "65%",
                    height: "262px",
                    imageRendering: "pixelated"
                }}
                      src={Image_3
                        ?
                        Image_3 && URL.createObjectURL(Image_3) :
                        `http://localhost:8000/Questions/${question_details?.Image_3}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image3EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload3"
                        ref={Image3Ref}
                        onChange={(e) => setImage_3(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload4"> Image 4</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image_4
                        ?
                        Image_4 && URL.createObjectURL(Image_4) :
                        `http://localhost:8000/Questions/${question_details?.Image_4}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image4EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload4"
                        ref={Image4Ref}
                        onChange={(e) => setImage_4(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload5"> Image 5</label>
                  <div className="d-flex">
                    <img
                    style={{    width: "65%",
                    height: "262px",
                    imageRendering: "pixelated"
                }}
                      src={Image_5
                        ?
                        Image_5 && URL.createObjectURL(Image_5) :
                        `http://localhost:8000/Questions/${question_details?.Image_5}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image5EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload5"
                        ref={Image5Ref}
                        onChange={(e) => setImage_5(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload6"> Image 6</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image_6
                        ?
                        Image_6 && URL.createObjectURL(Image_6) :
                        `http://localhost:8000/Questions/${question_details?.Image_6}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image6EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload6"
                        ref={Image6Ref}
                        onChange={(e) => setImage_6(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>


              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="">Answer Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                      height: "262px",
                      imageRendering: "pixelated"
                  }}
                     
                      src={ImageAns
                        ?
                        ImageAns && URL.createObjectURL(ImageAns) :
                        `http://localhost:8000/Questions/${question_details?.Image_Ans}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={handleEditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={(e) => setImageAns(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              </>):(<></>)}


              {/* Fill in the Blanks Questions */}

              {question_details?.Types_Question === "Fill in the Blanks Questions" ? (<>
                <div className="col-md-3">
              <label htmlFor="">Dash (--)</label>
              <Form.Select
              value={Dash}
                aria-label="Default select example"
                onChange={(e) => setDash(e.target.value)}
              >
                <option value="">Select Dash</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Form.Select>
            </div>
            {Dash === "1" ? (
              <>
                <div className="col-md-9 d-flex align-items-end ">
                  <input
                  value={input1}
                    className="vi_0"
                    type="text"
                    placeholder="enter text"
                    onChange={(e) => setinput1(e.target.value)}
                  />

                  <span>___________</span>

                  <input
                  value={input2}
                    className="vi_0"
                    type="text"
                    placeholder="enter text"
                    onChange={(e) => setinput2(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            {Dash === "2" ? (
              <>
                <div className="col-md-9 d-flex align-items-end ">
                  <input
                  value={input1}
                    className="vi_0"
                    type="text"
                    placeholder="enter text"
                    onChange={(e) => setinput1(e.target.value)}
                  />

                  <span>___________</span>

                  <input
                  value={input2}
                    className="vi_0"
                    type="text"
                    placeholder="enter text"
                    onChange={(e) => setinput2(e.target.value)}
                  />
                  <span>___________</span>
                  <input
                  value={input3}
                    className="vi_0"
                    type="text"
                    placeholder="enter text"
                    onChange={(e) => setinput3(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
              </>):(<></>)}


              {/* Letter Writting */}

              {question_details?.Types_Question === "Letter Writting" ? (<>
                <div className="col-md-4">
                <div className="do-sear mt-2">
                  <label htmlFor="">Select Number of Line</label>
                  <Form.Select
                  value={Dash}
                    aria-label="Default select example"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      setDash(selectedValue);
                      setTwoline(selectedValue === "2");
                      setThreeline(selectedValue === "3");
                      setFourline(selectedValue === "4");
                      setFiveline(selectedValue === "5");
                      setSixline(selectedValue === "6");
                      setSevenline(selectedValue === "7");
                      setEightline(selectedValue === "8");
                      setTenline(selectedValue === "10");
                    }}
                  >
                    <option>Select Answer Line</option>
                    <option
                      value="2"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(true);
                        setFourline(false);
                        setFiveline(false);
                        setSixline(false);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      2
                    </option>
  
                    <option
                      value="3"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(true);
                        setFourline(false);
                        setFiveline(false);
                        setSixline(false);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      3
                    </option>
                    <option
                      value="4"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(false);
                        setFourline(true);
                        setFiveline(false);
                        setSixline(false);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      4
                    </option>
                    <option
                      value="5"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(false);
                        setFourline(false);
                        setFiveline(true);
                        setSixline(false);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      5
                    </option>
                    <option
                      value="6"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(false);
                        setFourline(false);
                        setFiveline(false);
                        setSixline(true);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      6
                    </option>
                    <option
                      value="7"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(false);
                        setFourline(false);
                        setFiveline(false);
                        setSixline(false);
                        setSevenline(true);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      7
                    </option>
              
                 
                    <option
                      value="10"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(false);
                        setFourline(false);
                        setFiveline(false);
                        setSixline(false);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(true);
                      }}
                    >
                      10
                    </option>
                  </Form.Select>
                </div>
              </div>
            
              <div className="col-8">
                {twoline ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {threeline ? (
                      <>
                        <div className="col-md-12">
                          <div className="do-sear mt-4">
                            <p type="text" className="lined-input"></p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="do-sear mt-2">
                            <p type="text" className="lined-input"></p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="do-sear mt-2">
                            <p type="text" className="lined-input"></p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {fourline ? (
                          <>
                            <div className="col-md-12">
                              <div className="do-sear mt-4">
                                <p type="text" className="lined-input"></p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="do-sear mt-2">
                                <p type="text" className="lined-input"></p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="do-sear mt-2">
                                <p type="text" className="lined-input"></p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="do-sear mt-2">
                                <p type="text" className="lined-input"></p>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {fiveline ? (
                              <>
                                <div className="col-md-12">
                                  <div className="do-sear mt-4">
                                    <p type="text" className="lined-input"></p>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="do-sear mt-2">
                                    <p type="text" className="lined-input"></p>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="do-sear mt-2">
                                    <p type="text" className="lined-input"></p>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="do-sear mt-2">
                                    <p type="text" className="lined-input"></p>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="do-sear mt-2">
                                    <p type="text" className="lined-input"></p>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                {sixline ? (
                                  <>
                                    <div className="col-md-12">
                                      <div className="do-sear mt-4">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <div className="do-sear mt-2">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <div className="do-sear mt-2">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <div className="do-sear mt-2">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <div className="do-sear mt-2">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <div className="do-sear mt-2">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {sevenline ? (
                                      <>
                                        <div className="col-md-12">
                                          <div className="do-sear mt-4">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        {eightline ? (
                                          <>
                                            <div className="col-md-12">
                                              <div className="do-sear mt-4">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          // <>
                                          //   {nineline ? (
                                          //     <>
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-4">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>
                                          //     </>
                                          //   ) : (
                                          <>
                                            {tenline ? (
                                              <>
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-4">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                          </>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
              </>):(<></>)}

              {/* Map Reading */}
              {question_details?.Types_Question === "Map Reading" ? (<>
                <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload1"> Image 1</label>
                  <div className="d-flex">
                    <img
                    style={{    width: "65%",
                    height: "262px",
                    imageRendering: "pixelated"
                }}
                      src={Image1
                        ?
                        Image1 && URL.createObjectURL(Image1) :
                        `http://localhost:8000/Questions/${question_details?.Image_1}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image1EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload1"
                        ref={Image1Ref}
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload2"> Image 2</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image2
                        ?
                        Image2 && URL.createObjectURL(Image2) :
                        `http://localhost:8000/Questions/${question_details?.Image_2}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image2EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload2"
                        ref={Image2Ref}
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="do-sear mt-2">
                  <label htmlFor="">Select Number of Line</label>
                  <Form.Select
                  value={Dash}
                    aria-label="Default select example"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      setDash(selectedValue);
                      setTwoline(selectedValue === "2");
                      setThreeline(selectedValue === "3");
                      setFourline(selectedValue === "4");
                      setFiveline(selectedValue === "5");
                      setSixline(selectedValue === "6");
                      setSevenline(selectedValue === "7");
                      setEightline(selectedValue === "8");
                      setTenline(selectedValue === "10");
                    }}
                  >
                    <option>Select Answer Line</option>
                    <option
                      value="2"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(true);
                        setFourline(false);
                        setFiveline(false);
                        setSixline(false);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      2
                    </option>
  
                    <option
                      value="3"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(true);
                        setFourline(false);
                        setFiveline(false);
                        setSixline(false);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      3
                    </option>
                    <option
                      value="4"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(false);
                        setFourline(true);
                        setFiveline(false);
                        setSixline(false);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      4
                    </option>
                    <option
                      value="5"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(false);
                        setFourline(false);
                        setFiveline(true);
                        setSixline(false);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      5
                    </option>
                    <option
                      value="6"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(false);
                        setFourline(false);
                        setFiveline(false);
                        setSixline(true);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      6
                    </option>
                    <option
                      value="7"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(false);
                        setFourline(false);
                        setFiveline(false);
                        setSixline(false);
                        setSevenline(true);
                        setEightline(false);
                        setTenline(false);
                      }}
                    >
                      7
                    </option>
              
                 
                    <option
                      value="10"
                      onClick={() => {
                        setTwoline(false);
                        setThreeline(false);
                        setFourline(false);
                        setFiveline(false);
                        setSixline(false);
                        setSevenline(false);
                        setEightline(false);
                        setTenline(true);
                      }}
                    >
                      10
                    </option>
                  </Form.Select>
                </div>
              </div>
            
              <div className="col-8">
                {twoline ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {threeline ? (
                      <>
                        <div className="col-md-12">
                          <div className="do-sear mt-4">
                            <p type="text" className="lined-input"></p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="do-sear mt-2">
                            <p type="text" className="lined-input"></p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="do-sear mt-2">
                            <p type="text" className="lined-input"></p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {fourline ? (
                          <>
                            <div className="col-md-12">
                              <div className="do-sear mt-4">
                                <p type="text" className="lined-input"></p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="do-sear mt-2">
                                <p type="text" className="lined-input"></p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="do-sear mt-2">
                                <p type="text" className="lined-input"></p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="do-sear mt-2">
                                <p type="text" className="lined-input"></p>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {fiveline ? (
                              <>
                                <div className="col-md-12">
                                  <div className="do-sear mt-4">
                                    <p type="text" className="lined-input"></p>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="do-sear mt-2">
                                    <p type="text" className="lined-input"></p>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="do-sear mt-2">
                                    <p type="text" className="lined-input"></p>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="do-sear mt-2">
                                    <p type="text" className="lined-input"></p>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="do-sear mt-2">
                                    <p type="text" className="lined-input"></p>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                {sixline ? (
                                  <>
                                    <div className="col-md-12">
                                      <div className="do-sear mt-4">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <div className="do-sear mt-2">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <div className="do-sear mt-2">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <div className="do-sear mt-2">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <div className="do-sear mt-2">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>{" "}
                                    <div className="col-md-12">
                                      <div className="do-sear mt-2">
                                        <p
                                          type="text"
                                          className="lined-input"
                                        ></p>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {sevenline ? (
                                      <>
                                        <div className="col-md-12">
                                          <div className="do-sear mt-4">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>{" "}
                                        <div className="col-md-12">
                                          <div className="do-sear mt-2">
                                            <p
                                              type="text"
                                              className="lined-input"
                                            ></p>
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        {eightline ? (
                                          <>
                                            <div className="col-md-12">
                                              <div className="do-sear mt-4">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>{" "}
                                            <div className="col-md-12">
                                              <div className="do-sear mt-2">
                                                <p
                                                  type="text"
                                                  className="lined-input"
                                                ></p>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          // <>
                                          //   {nineline ? (
                                          //     <>
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-4">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>{" "}
                                          //       <div className="col-md-12">
                                          //         <div className="do-sear mt-2">
                                          //           <p
                                          //             type="text"
                                          //             className="lined-input"
                                          //           ></p>
                                          //         </div>
                                          //       </div>
                                          //     </>
                                          //   ) : (
                                          <>
                                            {tenline ? (
                                              <>
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-4">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>{" "}
                                                <div className="col-md-12">
                                                  <div className="do-sear mt-2">
                                                    <p
                                                      type="text"
                                                      className="lined-input"
                                                    ></p>
                                                  </div>
                                                </div>
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                          </>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
              </>):(<></>)}


              {/* Classifications of Questions */}

              {question_details?.Types_Question === "Classifications of Questions" ? (<>
                <div className="col-md-4">
                <div className="do-sear mt-2">
                  <label htmlFor="">Select Number of Line</label>
                  <Form.Select
                    value={Dash}
                    className="vi_0"
                    aria-label="Default select example"
                    onChange={(e) => setDash(e.target.value)}
                  >
                    <option>Select Answer Line</option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                    <option value="6"> 6 </option>
                    <option value="7"> 7 </option>
                    <option value="8"> 8 </option>
                    <option value="9"> 9 </option>

                  </Form.Select>
                </div>
              </div>

              <div className="col-8">
                {Dash === "2" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "3" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "4" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "5" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "6" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "7" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "8" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "9" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
              </div>

              <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Answer}
                  onChange={handleChange1}
                />
              </div>
            </div>
            <div>
              <h6 style={{ padding: "20px 0 0 0", textAlign: "center" }}>
                <b>(OR)</b>
              </h6>
            </div>

            <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload1"> Image 1</label>
                  <div className="d-flex">
                    <img
                      style={{    width: "65%",
                      height: "262px",
                      imageRendering: "pixelated"
                  }}
                      src={Image1
                        ?
                        Image1 && URL.createObjectURL(Image1) :
                        `http://localhost:8000/Questions/${question_details?.Image_1}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image1EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload1"
                        ref={Image1Ref}
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload2"> Image 2</label>
                  <div className="d-flex">
                    <img
                      style={{    width: "65%",
                      height: "262px",
                      imageRendering: "pixelated"
                  }}
                      src={Image2
                        ?
                        Image2 && URL.createObjectURL(Image2) :
                        `http://localhost:8000/Questions/${question_details?.Image_2}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image2EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload2"
                        ref={Image2Ref}
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Question</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={orQuestion}
                  onChange={handleChange4}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={orAnswer}
                  onChange={handleChange5}
                />
              </div>
            </div>
              </>):(<></>)}


            {/* Poet,Time,Place ,Writer */}
            {question_details?.Types_Question === "Poet,Time, Place, Writer answer questions" ? (<>

              <div className="col-md-4">
                <div className="do-sear mt-2">
                  <label htmlFor="">Select Number of Line</label>
                  <Form.Select
                    value={Dash}
                    className="vi_0"
                    aria-label="Default select example"
                    onChange={(e) => setDash(e.target.value)}
                  >
                    <option>Select Answer Line</option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                    <option value="6"> 6 </option>
                    <option value="7"> 7 </option>
                    <option value="8"> 8 </option>
                    <option value="9"> 9 </option>

                  </Form.Select>
                </div>
              </div>

              <div className="col-8">
                {Dash === "2" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "3" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "4" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "5" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p type="text" className="lined-input"></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "6" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "7" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "8" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
                {Dash === "9" ? (
                  <>
                    <div className="col-md-12">
                      <div className="do-sear mt-4">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>{" "}
                    <div className="col-md-12">
                      <div className="do-sear mt-2">
                        <p
                          type="text"
                          className="lined-input"
                        ></p>
                      </div>
                    </div>
                  </>
                ) : (<></>)}
              </div>
            </>) : (<></>)}

            {/* Answer  The Question Draw The Figure */}

            {question_details?.Types_Question === "Answer the Questions and Draw the Figure Questions" ? (
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="">Answer Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                      height: "262px",
                      imageRendering: "pixelated"
                  }}
                     
                      src={ImageAns
                        ?
                        ImageAns && URL.createObjectURL(ImageAns) :
                        `http://localhost:8000/Questions/${question_details?.Image_Ans}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={handleEditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={(e) => setImageAns(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
            ) : ("")}

            {/* Complete The Poem */}
            {question_details?.Types_Question === "Complete the Poem" ? (<>
              <div className="col-md-5">
                <div className="do-sear mt-2">
                  <label htmlFor="">  Poem Line </label>
                  <Form.Select
                    value={Dash}
                    className="vi_0"
                    onChange={(e) => setDash(e.target.value)}
                  >
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </Form.Select>
                </div>
              </div>

              {Dash === "4" ? (<>
                <div className="col-md-7">
                  <label htmlFor=""> Write Poem </label>
                  <div className="d-flex align-items-end">

                    <input
                      value={PoemSat}
                      className="vi_0"
                      type="text"
                      placeholder="enter text"
                      onChange={(e) => setPoemSat(e.target.value)}
                    />
                    <div className="ans-line mb-3 mt-2"></div>
                  </div>

                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="ans-line mb-3 mt-2"></div>

                  <div className="d-flex align-items-end">


                    <div className="ans-line mb-3 mt-2"></div>
                    <input
                      value={PoemEnd}
                      className="vi_0"
                      type="text"
                      placeholder="enter text"
                      onChange={(e) => setPoemEnd(e.target.value)}
                    />
                  </div>
                </div>
              </>) : (<> </>)}
              {Dash === "5" ? (<>
                <div className="col-md-7">
                  <label htmlFor=""> Write Poem </label>
                  <div className="d-flex align-items-end">
                    <input
                      value={PoemSat}
                      className="vi_0"
                      type="text"
                      placeholder="enter text"
                      onChange={(e) => setPoemSat(e.target.value)}

                    />
                    <div className="ans-line mb-3 mt-2"></div>
                  </div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="d-flex align-items-end">
                    <div className="ans-line mb-3 mt-2"></div>
                    <input
                      className="vi_0"
                      value={PoemEnd}
                      type="text"
                      placeholder="enter text"
                      onChange={(e) => setPoemEnd(e.target.value)}
                    />
                  </div>
                </div>
              </>) : (<> </>)}
              {Dash === "6" ? (<>
                <div className="col-md-7">
                  <label htmlFor=""> Write Poem </label>
                  <div className="d-flex align-items-end">
                    <input
                      value={PoemSat}
                      className="vi_0"
                      type="text"
                      placeholder="enter text"
                      onChange={(e) => setPoemSat(e.target.value)}
                    />
                    <div className="ans-line mb-3 mt-2"></div>
                  </div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="d-flex align-items-end">
                    <div className="ans-line mb-3 mt-2"></div>
                    <input
                      value={PoemEnd}
                      className="vi_0"
                      type="text"
                      placeholder="enter text"
                      onChange={(e) => setPoemEnd(e.target.value)}
                    />
                  </div>
                </div>
              </>) : (<> </>)}
              {Dash === "7" ? (<>
                <div className="col-md-7">
                  <label htmlFor=""> Write Poem </label>
                  <div className="d-flex align-items-end">
                    <input
                      value={PoemSat}
                      className="vi_0"
                      type="text"
                      placeholder="enter text"
                      onChange={(e) => setPoemSat(e.target.value)}
                    />
                    <div className="ans-line mb-3 mt-2"></div>
                  </div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="ans-line mb-3 mt-2"></div>
                  <div className="d-flex align-items-end">
                    <div className="ans-line mb-3 mt-2"></div>
                    <input
                      value={PoemEnd}
                      className="vi_0"
                      type="text"
                      placeholder="enter text"
                      onChange={(e) => setPoemEnd(e.target.value)}
                    />
                  </div>
                </div>
              </>) : (<> </>)}
            </>) : (<></>)}


            {/* Situation And UnderStanding Ans Question */}
            {question_details?.Types_Question === "Situation UnderStatnding answer Questions" ? (<>

              <div className="col-md-4">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Select Number of Line</label>
                    <Form.Select
                      aria-label="Default select example"
                      value={Dash}
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        setDash(selectedValue);
                        setOneline(selectedValue === "1");
                        setTwoline(selectedValue === "2");
                        setThreeline(selectedValue === "3");
                        setFourline(selectedValue === "4");
                        setFiveline(selectedValue === "5");
                        setSixline(selectedValue === "6");
                        setSevenline(selectedValue === "7");
                        setEightline(selectedValue === "8");
                        setNineline(selectedValue === "9");
                        setTenline(selectedValue === "10");
                      }}
                    >
                      <option>Select Answer Line</option>
                      <option
                        value="1"
                        onClick={() => {
                          setOneline(true);
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        1
                      </option>

                      <option
                        value="2"
                        onClick={() => {
                          setOneline(false);
                          setTwoline(true);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        2
                      </option>

                      <option
                        value="3"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(true);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        3
                      </option>
                      <option
                        value="4"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(true);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        4
                      </option>
                      <option
                        value="5"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(true);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        5
                      </option>
                      <option
                        value="6"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(true);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        6
                      </option>
                      <option
                        value="7"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(true);
                          setEightline(false);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        7
                      </option>
                      <option
                        value="8"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(true);
                          setNineline(false);
                          setTenline(false);
                        }}
                      >
                        8
                      </option>
                      <option
                        value="9"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(true);
                          setTenline(false);
                        }}
                      >
                        9
                      </option>
                      <option
                        value="10"
                        onClick={() => {
                          setTwoline(false);
                          setThreeline(false);
                          setFourline(false);
                          setFiveline(false);
                          setSixline(false);
                          setSevenline(false);
                          setEightline(false);
                          setNineline(false);
                          setTenline(true);
                        }}
                      >
                        10
                      </option>
                    </Form.Select>
                  </div>
                </div>
                <div className="col-8">
                  {oneline ? (
                    <>
                      <div className="col-md-12">
                        <div className="do-sear mt-5">
                          <p type="text" className="lined-input"></p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {twoline ? (
                        <>
                          <div className="col-md-12">
                            <div className="do-sear mt-4">
                              <p type="text" className="lined-input"></p>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="do-sear mt-2">
                              <p type="text" className="lined-input"></p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {threeline ? (
                            <>
                              <div className="col-md-12">
                                <div className="do-sear mt-4">
                                  <p type="text" className="lined-input"></p>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="do-sear mt-2">
                                  <p type="text" className="lined-input"></p>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="do-sear mt-2">
                                  <p type="text" className="lined-input"></p>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              {fourline ? (
                                <>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-4">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-2">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-2">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="do-sear mt-2">
                                      <p type="text" className="lined-input"></p>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {fiveline ? (
                                    <>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-4">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="do-sear mt-2">
                                          <p
                                            type="text"
                                            className="lined-input"
                                          ></p>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      {sixline ? (
                                        <>
                                          <div className="col-md-12">
                                            <div className="do-sear mt-4">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>{" "}
                                          <div className="col-md-12">
                                            <div className="do-sear mt-2">
                                              <p
                                                type="text"
                                                className="lined-input"
                                              ></p>
                                            </div>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          {sevenline ? (
                                            <>
                                              <div className="col-md-12">
                                                <div className="do-sear mt-4">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>{" "}
                                              <div className="col-md-12">
                                                <div className="do-sear mt-2">
                                                  <p
                                                    type="text"
                                                    className="lined-input"
                                                  ></p>
                                                </div>
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              {eightline ? (
                                                <>
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-4">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>{" "}
                                                  <div className="col-md-12">
                                                    <div className="do-sear mt-2">
                                                      <p
                                                        type="text"
                                                        className="lined-input"
                                                      ></p>
                                                    </div>
                                                  </div>
                                                </>
                                              ) : (
                                                <>
                                                  {nineline ? (
                                                    <>
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-4">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>{" "}
                                                      <div className="col-md-12">
                                                        <div className="do-sear mt-2">
                                                          <p
                                                            type="text"
                                                            className="lined-input"
                                                          ></p>
                                                        </div>
                                                      </div>
                                                    </>
                                                  ) : (
                                                    <>
                                                      {tenline ? (
                                                        <>
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-4">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>{" "}
                                                          <div className="col-md-12">
                                                            <div className="do-sear mt-2">
                                                              <p
                                                                type="text"
                                                                className="lined-input"
                                                              ></p>
                                                            </div>
                                                          </div>
                                                        </>
                                                      ) : (
                                                        <></>
                                                      )}
                                                    </>
                                                  )}
                                                </>
                                              )}
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>

              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload1">Answer Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image1
                        ?
                        Image1 && URL.createObjectURL(Image1) :
                        `http://localhost:8000/Questions/${question_details?.Image_1}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image1EditClick} style={{ cursor: "pointer" }} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload1"
                        ref={Image1Ref}
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="upload2">Answer Image</label>
                  <div className="d-flex">
                    <img
                     style={{    width: "65%",
                     height: "262px",
                     imageRendering: "pixelated"
                 }}
                      src={Image2
                        ?
                        Image2 && URL.createObjectURL(Image2) :
                        `http://localhost:8000/Questions/${question_details?.Image_2}`
                      }
                      alt="Ans_fig"
                    />
                    <span
                      className="text-danger "
                      onClick={Image2EditClick} >
                      <CiEdit
                        className="me-2 fs-2 cursor-pointer" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="upload2"
                        ref={Image2Ref}
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                    </span>
                  </div>

                </div>
              </div>
              
            </>):(<></>)}

          

            {question_details?.PassiveQuesion?.length ? (<>
              <div className="col-md-12">
                <div className="do-sear mt-2">
                  <label htmlFor="">Sub Questions</label>
                  {question_details?.PassiveQuesion?.map((form, index) => {
                    return (
                      <div className="d-flex gap-2 mb-1">
                        <CKEditor
                          style={{ width: "100%" }}
                          editor={ClassicEditor}
                          className="vi_0"
                          data={form.question}
                          onChange={(e, editor) => handleSubquestionChange(index, editor.getData())}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </>) : (<></>)}


            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Marks</label>
                <Form.Select
                  className="vi_0"
                  value={Marks}
                  onChange={(e) => setMarks(e.target.value)}
                >
                  <option value="">Select Marks</option>
                  <option value="1/2">1/2</option>
                  <option value="1/4">1/4</option>
                  <option value="1/3">1/3</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Answer Time</label>
                <Form.Select
                  value={Answer_Time}
                  className="vi_0"
                  onChange={(e) => setAnswer_Time(e.target.value)}>
                  <option value="1/2 Mnt">1/2 Mnt</option>
                  <option value="1/4 Mnt">1/4 Mnt</option>
                  <option value="1 Mnt">1 Mnt</option>
                  <option value="1.30 minutes">1.30 minutes</option>
                  <option value="1 minutes">1 minutes</option>
                  <option value="2 minutes">2 minutes</option>
                  <option value="3 minutes">3 minutes</option>
                  <option value="4 minutes">4 minutes</option>
                  <option value="5 minutes"> 5 minutes</option>
                  <option value="6 minutes">6 minutes</option>
                  <option value="7 minutes"> 7 minutes</option>
                  <option value="8 minutes"> 8 minutes</option>
                  <option value="9 minutes"> 9 minutes</option>
                  <option value="10 minutes">10 minutes</option>
                </Form.Select>
              </div>
            </div>
        {question_details?.Types_Question === "One Word Question" ||
        question_details?.Types_Question === "One Sentence Answer Question" ||
             question_details?.Types_Question ===  "Two  Sentence Answer Questions" ||
             question_details?.Types_Question === "Two and three Sentence Answer Questions"||
             question_details?.Types_Question === "Three and Four Sentence Answer Questions"||
             question_details?.Types_Question === "Ten Sentence Answer Questions"  ||
             question_details?.Types_Question === "Eight Sentence Answer Questions" ||
             question_details?.Types_Question === "Five and Six Sentence Answer Questions" ||
             question_details?.Types_Question === "Six Sentence Answer Questions"||
             question_details?.Types_Question === "Seven Sentence Answer Questions"||
             question_details?.Types_Question === "Classifications of Questions" ||
             question_details?.Types_Question === "Recorrect the Answers Questions" ||
             question_details?.Types_Question === "Expanding and Explanations Answer Questions" ||
             question_details?.Types_Question === "Objective Questions" ||
             question_details?.Types_Question === "Multiple Choice Questions" ||
             question_details?.Types_Question === "Match the Following Questions" ||
             question_details?.Types_Question === "Odd and out words Questions" ||
             question_details?.Types_Question === "RelationShip Words Questions"
          
          ? (<></>):(<>
          <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Answer}
                  onChange={handleChange1}
                />
              </div>
            </div>
</>)}
            


          </div>
        </div>

        <div className="yoihjij text-center my-2 p-2 ">
          <Button
            className="modal-add-btn"
            onClick={UpdateQuestion}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminEditQuestionDetails;
