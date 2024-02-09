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
  const handleChange6 = (e, editor) => {
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
  const [Name_of_examination, setName_of_examination] = useState("");
  const [Question, setQuestion] = useState("");
  const [ImageAns, setImageAns] = useState("");
  const [Image1, setImage1] = useState("");
  const [Image2, setImage2] = useState("");
  const [Answer, setAnswer] = useState("");
  const [Dash, setDash] = useState("4")
  const [PoemSat, setPoemSat] = useState("");
  const [PoemEnd, setPoemEnd] = useState("");
  const [orQuestion, setorQuestion] = useState("");
  const [Option_2, setOption_2] = useState("");
  const [Option_3, setOption_3] = useState("");
  const [Option_4, setOption_4] = useState("");
  const [Objectives, setObjectives] = useState("");
  const [orAnswer, setorAnswer] = useState("");
  const [Marks, setMarks] = useState("");

  const [Instruction, setInstruction] = useState("");
  const [Answer_Time, setAnswer_Time] = useState("");

  const [subquestions, setSubquestions] = useState([]);

  const handleSubquestionChange = (index, data) => {
    const updatedSubquestions = [...subquestions];
    updatedSubquestions[index] = { question: data };
    setSubquestions(updatedSubquestions);
  };



  useEffect(() => {
    if (question_details) {
      setSection(question_details.Section || ''); // Set section if question_details is defined
      setBoard(question_details.Board || '')
      setMedium(question_details.Medium || '')
      setClass(question_details.Class || '')
      setSub_Class(question_details.Sub_Class || '')
      setSubjects(question_details.Subject || '')
      setLesson(question_details.Lesson || '')
      setChapter_Name(question_details.Chapter_Name || '')
      setDifficulty_level(question_details.Difficulty_level || '')
      setName_of_examination(question_details.Name_of_examination || '')
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

          Image_1: Image1,
          Image_2: Image2,
          PassiveQuesion: subquestions,


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
                <Form.Select
                  aria-label="Default select example"
                  className="vi_0"
                  value={Name_of_examination}
                  onChange={(e) => {
                    setName_of_examination(e.target.value);
                  }}
                >
                  <option>Select the Name Of the Examination</option>
                  {NameExam?.map((item, i) => {
                    return (
                      <option value={item?.NameExamination} key={i}>
                        {item?.NameExamination}
                      </option>
                    );
                  })}
                </Form.Select>
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
            {/* One Word Question...... */}
            {question_details?.Types_Question === "One Word Question" ||
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


              {/* Latter Writting */}

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
            {question_details.Types_Question == "Situation UnderStatnding answer Questions" ? (<>
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
             question_details?.Types_Question ===  "Two  Sentence Answer Questions" ||
             question_details?.Types_Question === "Two and three Sentence Answer Questions"||
             question_details?.Types_Question === "Three and Four Sentence Answer Questions"||
             question_details?.Types_Question === "Ten Sentence Answer Questions"  ||
             question_details?.Types_Question === "Eight Sentence Answer Questions" ||
             question_details?.Types_Question === "Five and Six Sentence Answer Questions" ||
             question_details?.Types_Question === "Six Sentence Answer Questions"||
             question_details?.Types_Question === "Seven Sentence Answer Questions"||
             question_details?.Types_Question === "Classifications of Questions"
          
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
