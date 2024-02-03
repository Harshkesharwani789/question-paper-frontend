import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Admin/Admin.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AdminQuestprops from "./AdminQuestprops";
import AdminQuestioneditprops from "./AdminQuestioneditprops";

const AdminEditQuestionDetails = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

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
  const handleChange3 = (e, editor) => {
    const data = editor.getData();
    setOption_1(data);
  };
  const handleChange4 = (e, editor) => {
    const data = editor.getData();
    setOption_2(data);
  };
  const handleChange5 = (e, editor) => {
    const data = editor.getData();
    setOption_3(data);
  };
  const handleChange6 = (e, editor) => {
    const data = editor.getData();
    setOption_4(data);
  };
  const handleChange7 = (e, editor) => {
    const data = editor.getData();
    setAnswer(data);
  };
  //post

  const [Board, setBoard] = useState("");
  const [Medium, setMedium] = useState("");
  const [Class, setClass] = useState("");
  const [Sub_Class, setSub_Class] = useState("");
  const [Subjects, setSubjects] = useState("");
  const [Chapter_Name, setChapter_Name] = useState("");
  const [Lesson, setLesson] = useState("");
  const [Difficulty_level, setDifficulty_level] = useState("");
  const [Types_Question, setTypes_Question] = useState("");
  const [Section, setSection] = useState("");
  const [Name_of_examination, setName_of_examination] = useState("");
  const [Question, setQuestion] = useState("");
  const [Option_1, setOption_1] = useState("");
  const [Option_2, setOption_2] = useState("");
  const [Option_3, setOption_3] = useState("");
  const [Option_4, setOption_4] = useState("");
  const [Objectives, setObjectives] = useState("");
  const [Image, setImage] = useState("");
  const [Marks, setMarks] = useState("");
  const [Answer, setAnswer] = useState("");
  const [Instruction, setInstruction] = useState("");
  const [Answer_Time, setAnswer_Time] = useState("");

  const addquestions = async () => {
    try {
      const config = {
        url: "/admin/AddQuestionPaper",
        method: "post",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: {
          Board: Board,
          Medium: Medium,
          Class: Class,
          Sub_Class: Sub_Class,
          Subject: Subjects,
          Chapter_Name: Chapter_Name,
          Difficulty_level: Difficulty_level,
          Types_Question: Types_Question,
          Lesson: Lesson,
          Section: Section,
          Question: Question,
          Option_1: Option_1,
          Option_2: Option_2,
          Option_3: Option_3,
          Option_4: Option_4,
          Name_of_examination: Name_of_examination,
          Objectives: Objectives,
          Instruction: Instruction,
          Image: Image,
          Marks: Marks,
          Answer_Time: Answer_Time,
          Answer: Answer,
          authId: admin?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        swal({
          title: "yeah!",
          text: res.data.success,
          icon: "success",
          button: "Ok!",
        });
        return navigate("/adminquestions");
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "success",
        button: "Ok!",
      });
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
  console.log(weightage);
  console.log(NameExam);
  return (
    <div>
      <div className="box_1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Section</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Section"
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
                  aria-label="Default select example"
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
                <option value="Fill in the Blanks Questions">Fill in the Blanks</option>
                <option value="Match the Following Questions">Match the Following</option>
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
                <option value="Two  Sentence Answer Questions">
                  Two Sentence Answer Questions
                </option>
                <option value="Two and three Sentence Answer Questions">
                  Two and three Sentence Answer Questions
                </option>
                <option value="Three and Four Sentence Answer Questions">
                  Three and Four Sentence Answer Questions
                </option>
                <option value="Five Sentence Answer Questions">
                  Five Sentence Answer Questions
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
                {/* <option value=""></option>
                <option value=""></option>
                <option value=""></option> */}
              </Form.Select>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Name Of the Examination</label>
                <Form.Select
                  aria-label="Default select example"
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
                  onChange={(e) => setObjectives(e.target.value)}
                >
                  <option>Select Objectives</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </Form.Select>
              </div>
            </div>

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
            <div className="col-md-12 mt-3">
              <AdminQuestioneditprops Types_Question={Types_Question} />
            </div>
            {/* <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Question</label>
                
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Question}
                  onChange={handleChange}
                />
              </div>
            </div> */}
            {/* <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 1</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Option_1}
                  onChange={handleChange3}
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
                  onChange={handleChange4}
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
                  onChange={handleChange5}
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
                  onChange={handleChange6}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Image</label>
                <input
                  type="file"
                  className="vi_0"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Marks</label>
                <input
                  type="number"
                  className="vi_0"
                  placeholder="Enter The Marks"
                  onChange={(e) => setMarks(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <div className="do-sear mt-2">
                  <label htmlFor="">Answer</label>
                  <CKEditor
                    editor={ClassicEditor}
                    className="vi_0"
                    data={Answer}
                    onChange={handleChange7}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="yoihjij text-center my-2 p-2 ">
        <Button
          onClick={() => {
            addquestions();
          }}
          className="modal-add-btn"
        >
          Add
        </Button>
      </div> */}
      </div>
    </div>
  );
};

export default AdminEditQuestionDetails;
