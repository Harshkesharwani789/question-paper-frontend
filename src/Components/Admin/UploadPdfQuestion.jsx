import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Pagination, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "../Admin/Admin.css";
import axios from "axios";
import swal from "sweetalert";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { debounce } from "lodash";
const UploadPdfQuestion = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState();
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState();
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  // Language Translater
  let googleTransliterate = require("google-input-tool");
  const [translatedValue, setTranslatedValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en-t-i0-und");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const onChangeHandler = debounce(async (value, setData) => {
    if (!value) {
      setTranslatedValue("");
      setData("");
      return "";
    }
    let am = value.split(/\s+/); // Split by any whitespace characters
    let promises = [];

    for (let index = 0; index < am.length; index++) {
      promises.push(
        new Promise(async (resolve, reject) => {
          try {
            const response = await googleTransliterate(
              new XMLHttpRequest(),
              am[index],
              selectedLanguage
            );
            resolve(response[0][0]);
          } catch (error) {
            console.error("Translation error:", error);
            resolve(am[index]);
          }
        })
      );
    }

    try {
      const translations = await Promise.all(promises);
      setTranslatedValue(translations.join(" "));
      setData(translations.join(" "));
      return translations;
    } catch (error) {
      console.error("Promise.all error:", error);
    }
  }, 300); // Debounce delay in milliseconds

  //update
  const [updatechapter, setpdatesetchapter] = useState("");
  const UpdateSyllabus = async () => {
    try {
      const config = {
        url: "/admin/updateSyllabus",
        method: "put",
        baseURL: "http://localhost:8000/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          year: year,
          medium: medium,
          Class: classs,
          SubClass: subclass,
          subject: subjectt,
          authId: admin?._id,

          Title: Title,


          id: updatechapter,
        },
      };
      let res = await axios(config);
      if (res.status == 200)
        if (res.status == 200) {
          handleClose1();

          return swal({
            title: "Yeah!",
            text: res.data.success,
            icon: "success",
            button: "Ok!",
          });
        }
    } catch (error) {
      console.log(error);
      return swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        button: "Ok!",
      });
    }
  };
  //delete
  const [Syllabus, setSyllabus] = useState("");

  const deleteslybus = async () => {
    try {
      let res = await axios.delete(
        `http://localhost:8000/api/admin/deletedSyllaus/${Syllabus}/${admin?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status == 200) handleClose2();
      getSyllabus();
      return swal({
        title: "Yeah!",
        text: res.data.success,
        icon: "success",
        button: "Ok!",
      });
    } catch (error) {
      console.log(error);
      return swal({
        title: "Yeah!",
        text: error.response.data.error,
        icon: "success",
        button: "Ok!",
      });
    }
  };
  //Get All Syllabus
  const [Slybuss, setSlybuss] = useState([]);
  const getSyllabus = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/admin/getAllSyllabus/${admin?._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.status == 200) {
        setSlybuss(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Get All Medium
  const [Medium, setMedium] = useState([]);
  const getAddMedium = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getAllMedium");
      if (res.status === 200) {
        setMedium(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Get All Subject
  const [subject, setsubject] = useState([]);
  const getSubject = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllSujects"
      );
      if (res.status === 200) {
        setsubject(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get SubClass
  const [getaddsubclass, setgetaddsubclass] = useState([]);
  const getaddsubclasss = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/admin/getAllSubClass"
      );
      if (res.status === 200) {
        setgetaddsubclass(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uniqueClassNamesSet = new Set(
    getaddsubclass?.map((item) => item.className)
  );
  const uniqueClassNamesArray = Array.from(uniqueClassNamesSet);

  //Post
  const [Title, setTitle] = useState("")
  const [year, setyear] = useState("");
  const [classs, setclasss] = useState("");
  const [subclass, setsubclass] = useState("");
  const [subjectt, setsubjectt] = useState("");
  const [medium, setmedium] = useState("");
  const [Questionpdf, setQuestionpdf] = useState("");
  const [Answerpdf, setAnswerpdf] = useState("")
  const UploadQuestionAnswer = async () => {
    if (!Title) {
      alert("Please Enter the title");
      return;
    }
    if (!year) {
      alert("Please Enter the year");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("Title", Title);
      formData.append("year", year);
      formData.append("Class", classs);
      formData.append("SubClass", subclass);
      formData.append("subject", subjectt);
      formData.append("medium", medium);
      formData.append("questionPdf", Questionpdf);
      formData.append("answerPdf", Answerpdf);
      formData.append("authId", admin?._id);
  
      const config = {
        method: "post",
        url: "http://localhost:8000/api/admin/addUploadQuestions",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: formData,
      };
  
      const res = await axios(config);
  
      if (res.status === 200) {
        handleClose();
        getSyllabus();
        swal({
          title: "Yeah!",
          text: res.data.success,
          icon: "success",
          button: "Ok!",
        });
      }
    } catch (error) {
      handleClose();
      console.log(error);
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        button: "Ok!",
      });
    }
  };



  useEffect(() => {
    getSyllabus();
    getAddMedium();
    getaddsubclasss();
    getSubject();
  }, []);

  return (
    <div>
      <div className="row d-flex justify-content-between">
        <div className="col-lg-4 d-flex justify-content-center">
          <div class="input-group ">
            <span class="input-group-text" id="basic-addon1">
              <BsSearch />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Search..."
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="col-md-2">
          <label htmlFor="">Select Langauge</label>
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="vi_0"
            style={{ borderRadius: "20px", backgroundColor: "#e2cbd0" }}
          >
            <option value="en-t-i0-und">English</option>
            <option value="ne-t-i0-und">Nepali</option>
            <option value="hi-t-i0-und">Hindi</option>
            <option value="kn-t-i0-und">Kannada</option>
            <option value="ta-t-i0-und">Tamil</option>
            <option value="pa-t-i0-und">Punjabi</option>
            <option value="mr-t-i0-und">Marathi</option>
            <option value="ur-t-i0-und">Urdu</option>
            <option value="sa-t-i0-und">Sanskrit</option>
          </select>
        </div>
      </div>

      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Upload Question Paper</h2>
          <button className="admin-add-btn" onClick={handleShow}>
            Add
          </button>
        </div>

        <div className="mb-3">
          <Table
            responsive
            bordered
            style={{ width: "-webkit-fill-available" }}
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th><div>Year</div></th>
                <th><div>Exam Name</div></th>
                <th> <div>Class</div></th>
                <th><div>Sub-Class</div></th>
                <th><div>Medium</div></th>
                <th><div>Subject</div></th>
                <th> <div>View</div></th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {Slybuss?.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item?.year}</td>
                    <td>{item?.Examinationname}</td>
                    <td>{item?.Class}</td>
                    <td>{item?.SubClass}</td>
                    <td>{item?.medium}</td>
                    <td>{item?.subject}</td>
                    <td>

                      <FaEye
                        color="blue"
                        onClick={() => {
                          navigate(`/adminslybuscopyview/${item?._id}`);
                        }}
                      />
                      {/* </Link> */}
                    </td>
                    <td>
                      {" "}
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                          <BiSolidEdit
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              handleShow1(item);
                              setpdatesetchapter(item?._id);

                            }}
                          />{" "}
                        </div>
                        <div>
                          <AiFillDelete
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              setSyllabus(item?._id);
                              handleShow2();
                            }}
                          />{" "}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>


        {/* Add Package modal */}
        <Modal
          show={show}
          onHide={handleClose}
          style={{ zIndex: "99999" }}
          size="xl"
        >
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>Upload Question Paper and Answer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-4">
                <div className="do-sear mt-2">
                  <label>Question Title</label>
                  <input
                    type="text"
                    className="vi_0"
                    placeholder="Eg:- Annoual Programe of  work for the Year"
                    onChange={(e) => {
                      if (selectedLanguage == "en-t-i0-und") {
                        setTitle(e.target.value);
                      } else onChangeHandler(e.target.value, setTitle);
                    }}
                  />
                  {selectedLanguage == "en-t-i0-und" ? <></> : <p>{Title}</p>}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="do-sear mt-2">
                  <label>Year</label>
                  <input
                    value={year}
                    type="text"
                    className="vi_0"
                    placeholder="Eg:- 2023-2024"
                    onChange={(e) => {
                      setyear(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="do-sear mt-2">
                  <label>
                    Select Class <span style={{ color: "red" }}>*</span>
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      setclasss(e.target.value);
                    }}
                  >
                    <option>Select the Class</option>
                    {uniqueClassNamesArray?.map((val, i) => {
                      return (
                        <option value={val} key={i}>
                          {val}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="do-sear mt-2">
                  <label>
                    Select Sub-Class <span style={{ color: "red" }}>*</span>
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      setsubclass(e.target.value);
                    }}
                  >
                    <option>Select the Sub-Class</option>
                    {getaddsubclass
                      ?.filter((ele) => ele.className === classs)
                      ?.map((val, i) => {
                        return (
                          <option value={val?.subclassName} key={i}>
                            {val?.subclassName}
                          </option>
                        );
                      })}
                  </Form.Select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="do-sear mt-2">
                  <label>
                    Select Subjects <span style={{ color: "red" }}>*</span>
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setsubjectt(e.target.value)}
                  >
                    <option>Select the Subjects</option>
                    {subject?.map((item, i) => {
                      return (
                        <>
                          <option value={item?.subjectName}>
                            {item?.subjectName}
                          </option>
                        </>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="do-sear mt-2">
                  <label>
                    Select Medium <span style={{ color: "red" }}>*</span>
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
              <div className="col-sm-6">
                <div className="do-sear mt-2">
                  <label>Question Pdf</label>
                  <input
                    type="file"
                    className="vi_0"
                    accept="application/pdf"
                    onChange={(e) => {
                      setQuestionpdf(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="do-sear mt-2">
                  <label>Answer Pdf</label>
                  <input
                    type="file"
                    className="vi_0"
                    accept="application/pdf"
                    onChange={(e) => {
                      setAnswerpdf(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button
                className="mx-2 modal-close-btn"
                variant=""
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className="mx-2 modal-add-btn"
                variant=""
                onClick={UploadQuestionAnswer}
              >
                Submit
              </Button>
            </div>
          </Modal.Footer>
        </Modal>



        {/* Edit Package modal */}
        <Modal
          show={show1}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
          style={{ zIndex: "99999" }}
        >
          <Modal.Header
            closeButton
            style={{ backgroundColor: "rgb(40 167 223)" }}
          >
            <Modal.Title style={{ color: "white" }}>Edit Syllabus</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Chapter Number</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Chapter Number"

                />
              </div>
            </div>

            <div className="row">
              <div className="do-sear mt-2">
                <label>Chapter Name</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Chapter Name"

                />
              </div>
            </div>

            <div className="row">
              <div className="do-sear mt-2">
                <label>Description</label>
                <CKEditor editor={ClassicEditor} className="vi_0" />
              </div>
            </div>

            <div className="row">
              <div className="do-sear mt-2">
                <label>Marks</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Marks"

                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant=""
              className="modal-close-btn"
              onClick={handleClose1}
            >
              Close
            </Button>
            <Button
              variant=""
              className="modal-add-btn"
              onClick={() => {
                UpdateSyllabus();
              }}
            >
              Edit
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={show2}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
          style={{ zIndex: "99999" }}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "white" }}>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                <p className="fs-4" style={{ color: "red" }}>
                  Are you sure you want to delete this data?
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant=""
              className="modal-close-btn"
              onClick={handleClose2}
            >
              Close
            </Button>
            <Button variant="" className="modal-add-btn" onClick={deleteslybus}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default UploadPdfQuestion;
