import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "../Admin/Admin.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { BiSolidEdit } from "react-icons/bi";
import axios from "axios";
import swal from "sweetalert";

const AdminQuestionDetails = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  //post
  const formdata = new FormData();
  const [Board, setBoard] = useState("");
  const [Medium, setMedium] = useState("");
  const [Class, setClass] = useState("");
  const [Sub_Class, setSub_Class] = useState("");
  const [Subjects, setSubjects] = useState("");
  const [Chapter_Name, setChapter_Name] = useState("");
  const [Types_Question, setTypes_Question] = useState("");
  const [Question_From, setQuestion_From] = useState("");
  const [Question, setQuestion] = useState("");
  const [Option_1, setOption_1] = useState("");
  const [Option_2, setOption_2] = useState("");
  const [Option_3, setOption_3] = useState("");
  const [Option_4, setOption_4] = useState("");
  const [Image, setImage] = useState("");
  const [Marks, setMarks] = useState("");
  const [Answer, setAnswer] = useState("");

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
  // get method for board name
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
  useEffect(() => {
    getallboardname();
    getAddMedium();
    getallclassname();
    getaddsubclasss();
    getSubject();
    getalltypesofquess();
    getallweightagecontent();
  }, []);
  console.log(weightage);
  return (
    <div>
      <div className="box_1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Section</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Section"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Examination Board</label>
                <Form.Select
                  aria-label="Default select example"
                  className="vi_0"
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
                <Form.Select aria-label="Default select example">
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
                <Form.Select aria-label="Default select example">
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
                <Form.Select aria-label="Default select example">
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
                <Form.Select aria-label="Default select example">
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
                    setlabel(e.target.value);
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
                <Form.Select aria-label="Default select example">
                  <option>Select the Chapter Name</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kanada">Kanada</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select the Difficulty level of Paper</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Difficulty level of Paper</option>
                  <option value="English">Easy</option>
                  <option value="Hindi">Average</option>
                  <option value="Kanada">Difficult</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select the Types of the Question</label>
              </div>{" "}
              <Form.Select aria-label="Default select example">
                <option>Select the Types of the Question</option>
                {getalltypesofques?.map((item, i) => {
                  return (
                    <option value={item?.Typesofquestion} key={i}>
                      {item?.Typesofquestion}
                    </option>
                  );
                })}
              </Form.Select>
            </div>

            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Question</label>
                {/* <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="vi_0"
                ></textarea> */}
                <CKEditor editor={ClassicEditor} className="vi_0" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 1</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Opion 1"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 2</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Option 2"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 3</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Option 3"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 4</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Option 4"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Image</label>
                <input type="file" className="vi_0" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Marks</label>
                <input
                  type="number"
                  className="vi_0"
                  placeholder="Enter The Marks"
                />
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Answer Time</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter the answer time"
                />
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <div className="do-sear mt-2">
                  <label htmlFor="">Answer 1</label>
                  {/* <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="vi_0"
                  ></textarea> */}
                  <CKEditor editor={ClassicEditor} className="vi_0" />
                </div>
              </div>
            </div>
            {/* <div className="yoihjij my-4">
              <button style={{ float: "right" }}>Add</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="yoihjij text-center my-2">
        <button style={{}}>Add</button>
      </div>
    </div>
  );
};

export default AdminQuestionDetails;
