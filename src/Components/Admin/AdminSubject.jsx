import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "../Admin/Admin.css";
import axios from "axios";
import swal from "sweetalert";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import Button2 from "../Button2";
const AdminSubject = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  //Translate
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

  //Post
  const [mediumName, setmediumName] = useState("");
  const [subjectName, setsubjectName] = useState("");
  const AddSubject = async () => {
    if (!mediumName)
      return swal({
        title: "Oops!",
        text: "Please Select the medium",
        icon: "error",
        button: "Ok!",
      });
    if (!subjectName)
      return swal({
        title: "Oops!",
        text: "Please Enter the Subject",
        icon: "error",
        button: "Ok!",
      });
    try {
      const config = {
        url: "/admin/addSubjects",
        method: "post",
        baseURL: "https://guru-resorce-backend.onrender.com/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          mediumName: mediumName,
          subjectName: subjectName,
          authId: admin?._id,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose();
        getSubject();
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
  //get method for medium
  const [Medium, setMedium] = useState([]);
  // const [nochangedata, setnochangedata] = useState([]);
  const getAddMedium = async () => {
    try {
      let res = await axios.get(
        "https://guru-resorce-backend.onrender.com/api/admin/getAllMedium"
      );
      if (res.status == 200) {
        setMedium(res.data.success);
        // setnochangedata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //get
  const [subject, setsubject] = useState([]);
  const [nochangedata, setnochangedata] = useState([]);
  const getSubject = async () => {
    try {
      let res = await axios.get(
        "https://guru-resorce-backend.onrender.com/api/admin/getAllSujects"
      );
      if (res.status == 200) {
        setsubject(res.data.success);
        setnochangedata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //update
  const [updateSubject, setpdateSubject] = useState("");
  const UpdateSubject = async () => {
    try {
      const config = {
        url: "/admin/updateSubjects",
        method: "put",
        baseURL: "https://guru-resorce-backend.onrender.com/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          mediumName: mediumName,
          subjectName: subjectName,
          authId: admin?._id,
          id: updateSubject,
        },
      };
      let res = await axios(config);
      if (res.status == 200)
        if (res.status == 200) {
          handleClose1();
          getSubject();
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
  const [sub, setsub] = useState("");
  const DeleteSubject = async () => {
    try {
      const config = {
        url: "/admin/deleteSubjects/" + sub + "/" + admin?._id,
        method: "delete",
        baseURL: "https://guru-resorce-backend.onrender.com/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose2();
        getSubject();
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

  //   Row Filter
  const [itempage, setItempage] = useState(5);

  //   DateRange Filter
  const [searchH, setSearchH] = useState("");
  const handleFilterH = (e) => {
    if (e.target.value != "") {
      setSearchH(e.target.value);
      const filterTableH = nochangedata.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k])?.toLowerCase().includes(e.target.value?.toLowerCase())
        )
      );
      setsubject([...filterTableH]);
    } else {
      setSearchH(e.target.value);
      setsubject([...nochangedata]);
    }
  };
  const [searchTermH, setSearchTermH] = useState("");
  const searchedProductH = subject.filter((item) => {
    if (searchTermH.value === "") {
      return item;
    }
    if (item?.EName?.toLowerCase().includes(searchTermH?.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });
  // Pagination
  // const [pageNumber, setPageNumber] = useState(0);
  // const productPerPage = 5;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = subject.slice(visitedPage, visitedPage + productPerPage);
  // const pageCount = Math.ceil(subject.length / productPerPage);

  useEffect(() => {
    getSubject();
    getAddMedium();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-10"></div>
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
            onChange={handleFilterH}
          />
        </div>
      </div>
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Subject</h2>

          <Link onClick={handleShow}>
            <Button2 text={"Add Subject"} />
          </Link>
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
                <th>Medium</th>
                <th>
                  <div>Subject</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {subject?.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item?.mediumName}</td>
                    <td>{item?.subjectName}</td>

                    <td>
                      {" "}
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                          <BiSolidEdit
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              handleShow1();
                              setpdateSubject(item);
                              setsubjectName(item?.subjectName);
                            }}
                          />{" "}
                        </div>
                        <div>
                          <AiFillDelete
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              setsub(item?._id);
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
        <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>Add Subject</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Medium</label>
                <select
                  className="vi_0"
                  onChange={(e) => setmediumName(e.target.value)}
                >
                  <option value="">--Select medium--</option>
                  {Medium?.map((item) => {
                    return (
                      <option value={item?.mediumName}>
                        {item?.mediumName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="do-sear mt-2">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="vi_0"
                  onChange={(e) => {
                    if (selectedLanguage == "en-t-i0-und") {
                      setsubjectName(e.target.value);
                    } else onChangeHandler(e.target.value, setsubjectName);
                  }}
                />
                {selectedLanguage == "en-t-i0-und" ? (
                  <></>
                ) : (
                  <p>{subjectName}</p>
                )}
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
                onClick={() => {
                  AddSubject();
                }}
              >
                Add
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
            <Modal.Title style={{ color: "white" }}>Edit Subject</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Medium</label>
                <select
                  className="vi_0"
                  onChange={(e) => setmediumName(e.target.value)}
                >
                  <option value="">--Select medium--</option>
                  {Medium?.map((item) => {
                    return (
                      <option value={item?.mediumName}>
                        {item?.mediumName}
                      </option>
                    );
                  })}
                </select>
                {/* <input
                  type="text"
                  placeholder="Enter Medium"
                  className="vi_0"
                  onChange={(e) =>
                    {
                      if(selectedLanguage == "en-t-i0-und"){
                        setmediumName(e.target.value)
                      }else onChangeHandler(e.target.value,setmediumName )
                    }                  
                  }
                />
                {selectedLanguage == "en-t-i0-und" ? <></> : <p>{mediumName}</p>} */}
              </div>
              <div className="do-sear mt-2">
                <label>Subject</label>
                <input
                  type="text"
                  // placeholder="Enter Subject"
                  className="vi_0"
                  // value={subjectName}
                  onChange={(e) => {
                    if (selectedLanguage == "en-t-i0-und") {
                      setsubjectName(e.target.value);
                    } else onChangeHandler(e.target.value, setsubjectName);
                  }}
                />
                {selectedLanguage == "en-t-i0-und" ? (
                  <></>
                ) : (
                  <p>{subjectName}</p>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button
              variant=""
              className="modal-add-btn"
              onClick={() => {
                UpdateSubject();
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
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button
              variant=""
              className="modal-add-btn"
              onClick={DeleteSubject}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AdminSubject;
