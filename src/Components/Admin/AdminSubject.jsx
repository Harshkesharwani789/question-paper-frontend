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

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [SubClassName, setSubClassName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  //Translate
  // googleTransliterate is removed due to dependency issues in WebContainer

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
      const subClassId = getaddsubclass.find(
        (item) => item.subclassName === SubClassName
      )?._id;

      if (!subClassId) {
        return swal({
          title: "Oops!",
          text: "Please select a valid Sub-Class",
          icon: "error",
          button: "Ok!",
        });
      }

      const config = {
        url: "/admin/addSubjects",
        method: "post",
        baseURL: "http://localhost:8001/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          mediumName: mediumName,
          subjectName: subjectName,
          authId: admin?._id,
          subClass: subClassId,
        },
      };
      console.log("Data being sent:", config.data);
      let res = await axios(config);
      if (res.status === 200) {
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
      console.error("Error adding subject:", error);
      return swal({
        title: "Oops!",
        text: error.response?.data?.error || "An error occurred",
        icon: "error",
        button: "Ok!",
      });
    }
  };
  //get method for medium
  const [Medium, setMedium] = useState([]);
  const getAddMedium = async () => {
    try {
      let res = await axios.get("http://localhost:8001/api/admin/getAllMedium");
      if (res.status === 200) {
        setMedium(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [getaddsubclass, setgetaddsubclass] = useState([]);
  const getaddsubclasss = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8001/api/admin/getAllSubClass"
      );
      console.log("ok", res);
      if (res.status == 200) {
        setgetaddsubclass(res.data.success);
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
        "http://localhost:8001/api/admin/getAllSujects"
      );
      if (res.status === 200) {
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
        baseURL: "http://localhost:8001/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          mediumName: mediumName,
          subjectName: subjectName,
          authId: admin?._id,
          id: updateSubject._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
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
        text: error.response?.data?.error || "An error occurred",
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
        url: `/admin/deleteSubjects/${sub}/${admin?._id}`,
        method: "delete",
        baseURL: "http://localhost:8001/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
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
        text: error.response?.data?.error || "An error occurred",
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
    const value = e.target.value.toLowerCase();
    if (value) {
      setSearchH(value);
      const filterTableH = nochangedata.filter((o) =>
        Object.keys(o).some((k) => String(o[k])?.toLowerCase().includes(value))
      );
      setsubject([...filterTableH]);
    } else {
      setSearchH("");
      setsubject([...nochangedata]);
    }
  };

  useEffect(() => {
    getSubject();
    getAddMedium();
    getaddsubclasss();
  }, []);

  return (
    <>
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
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subject?.map((item, i) => (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item?.mediumName}</td>
                  <td>{item?.subjectName}</td>
                  <td>
                    <div style={{ display: "flex", gap: "20px" }}>
                      <BiSolidEdit
                        className="text-success"
                        style={{ cursor: "pointer", fontSize: "20px" }}
                        onClick={() => {
                          handleShow1();
                          setpdateSubject(item);
                          setsubjectName(item?.subjectName);
                          setmediumName(item?.mediumName);
                          setSubClassName(item?.subclassName);
                        }}
                      />
                      <AiFillDelete
                        className="text-danger"
                        style={{ cursor: "pointer", fontSize: "20px" }}
                        onClick={() => {
                          setsub(item?._id);
                          handleShow2();
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
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
                  {Medium?.map((item) => (
                    <option key={item._id} value={item?.mediumName}>
                      {item?.mediumName}
                    </option>
                  ))}
                </select>
                <label>
                  Select Sub-Class <span style={{ color: "red" }}>*</span>
                </label>
                <Form.Select
                  value={SubClassName}
                  aria-label="Default select example"
                  onChange={(e) => {
                    setSubClassName(e.target.value);
                  }}
                >
                  <option value={""}>Select the Sub-Class</option>
                  {getaddsubclass?.map((val, i) => {
                    return (
                      <option value={val?.subclassName} key={i}>
                        {val?.subclassName}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
              <div className="do-sear mt-2">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="vi_0"
                  onChange={(e) => setsubjectName(e.target.value)}
                />
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
                onClick={AddSubject}
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
                  value={mediumName}
                  onChange={(e) => setmediumName(e.target.value)}
                >
                  <option value="">--Select medium--</option>
                  {Medium?.map((item) => (
                    <option key={item._id} value={item?.mediumName}>
                      {item?.mediumName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="do-sear mt-2">
                <label>Subject</label>
                <input
                  type="text"
                  className="vi_0"
                  value={subjectName}
                  onChange={(e) => setsubjectName(e.target.value)}
                />
              </div>
              <div className="do-sear mt-2">
                <label>Sub-Class</label>
                <Form.Select
                  value={SubClassName}
                  aria-label="Default select example"
                  onChange={(e) => {
                    setSubClassName(e.target.value);
                  }}
                >
                  <option value={""}>Select the Sub-Class</option>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button
              variant=""
              className="modal-add-btn"
              onClick={UpdateSubject}
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
