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
      // Trigger click event on the file input element when the edit icon is clicked
      fileInputRef.current.click();
    }
  };


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
  const [Answer, setAnswer] = useState("");
  const [Dash, setDash] = useState("4")
  const [PoemSat, setPoemSat] = useState("");
  const [PoemEnd, setPoemEnd] = useState("");

  const [Option_1, setOption_1] = useState("");
  const [Option_2, setOption_2] = useState("");
  const [Option_3, setOption_3] = useState("");
  const [Option_4, setOption_4] = useState("");
  const [Objectives, setObjectives] = useState("");

  const [Marks, setMarks] = useState("");

  const [Instruction, setInstruction] = useState("");
  const [Answer_Time, setAnswer_Time] = useState("");

  console.log("ImageAns", ImageAns);

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
      setDash(question_details.NumberOfLine || '')
      setPoemSat(question_details.PoemSt || '')
      setPoemEnd(question_details.PoemEnd || '')
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

          PoemSt: PoemSat,
          PoemEnd: PoemEnd,

          id: question_details?._id,
          authId: admin?._id
        }
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

            {/* Answer  The Question Draw The Figure */}

            {question_details?.Image_Ans ? (
              <div className="col-md-6">
                <div className="do-sear">
                  <label htmlFor="">Answer Image</label>
                  <div className="d-flex">
                    <img
                      className="img-fluid h-50"
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
