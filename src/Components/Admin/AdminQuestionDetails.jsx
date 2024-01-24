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
  const [Subject, setSubject] = useState("");
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

  const AddQuestion = async () => {
    formdata.set("Board", Board);
    formdata.set("Medium", Medium);
    formdata.set("Class", Class);
    formdata.set("Sub_Class", Sub_Class);
    formdata.set("Subject", Subject);
    formdata.set("Chapter_Name", Chapter_Name);
    formdata.set("Types_Question", Types_Question);
    formdata.set("Question_From", Question_From);
    formdata.set("Question", Question);
    formdata.set("Option_1", Option_1);
    formdata.set("Option_2", Option_2);
    formdata.set("Option_3", Option_3);
    formdata.set("Option_4", Option_4);
    formdata.set("Image", Image);
    formdata.set("Marks", Marks);
    formdata.set("Answer", Answer);
    formdata.set("id", admin?._id);
    try {
      const config = {
        url: "/admin/AddQuestionPaper",
        method: "post",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status == 200) {
        return swal({
          title: "yeah!",
          text: res.data.success,
          icon: "success",
          button: "Ok!",
        });
      }
    } catch (error) {
      console.log(error);
      return swal({
        title: "oops!",
        text: error.response.data.error,
        icon: "error",
        button: "Ok!",
      });
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
  useEffect(() => {
    getallboardname();
    getAddMedium();
    getallclassname();
    getaddsubclasss();
    getSubject();
    getalltypesofquess();
  }, []);
  return (
    <div>
      <div className="box_1">
        <div className="container">
          <div className="row">
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
                      <option value={item?.boardName}>{item?.boardName}</option>
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
                  {Mediumm?.map((item) => {
                    return (
                      <option value={item?.mediumName}>
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
                  {getclassname?.map((item) => {
                    return (
                      <option value={item?.className}>{item?.className}</option>
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
                  {getaddsubclass?.map((item) => {
                    return (
                      <option value={item?.subclassName}>
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
                  {subject?.map((item) => {
                    return (
                      <option value={item?.subjectName}>
                        {item?.subjectName}
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
            {/* <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select the Difficulty level of Paper</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Difficulty level of Paper</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kanada">Kanada</option>
                </Form.Select>
              </div>
            </div> */}
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select the Types of the Question</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Types of the Question</option>
                  {getalltypesofques?.map((item) => {
                    return (
                      <option value={item?.Typesofquestion}>
                        {item?.Typesofquestion}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Question From</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Question From "
                />
              </div>
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
