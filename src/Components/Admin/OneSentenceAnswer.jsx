import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  Modal,
  Pagination,
  Table,
} from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import moment from "moment";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaEye } from "react-icons/fa";
import "../Admin/Admin.css";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const OneSentenceAnswer = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();
  const [show3, setShow3] = useState();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [formdata, setformdata] = useState();
  //get
  const [Questions, setQuestions] = useState([]);

  //delete
  const [deleteA, setDeleteA] = useState("");

  //   Row Filter
  const [itempage, setItempage] = useState(5);

  //   DateRange Filter
  const [data, setData] = useState([]);
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const filterData = () => {
    if (!startDate) return alert("Please select from date");
    if (!endDate) return alert("Please select to date");
    const filteredData = data.filter((item) => {
      const itemDate = new Date(item?.createdAt);
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      return itemDate >= startDateObj && itemDate <= endDateObj;
    });
    setData([...filteredData]);
  };

  // Search filter
  const [search, setSearch] = useState("");
  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setData([...filterTable]);
    } else {
      setSearch(e.target.value);
      setData([...data]);
    }
  };

  return (
    <div>
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
      <div className="customerhead p-2 mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Add One Sentence Question Answer</h2>
          <button
            className="admin-add-btn"
            // onClick={() => {
            //   navigate("/adminquestiondetails");
            // }}
            onClick={handleShow}
          >
            Add One Sentence Question Answer
          </button>
        </div>

        <div className="">
          <Table
            responsive
            bordered
            style={{ width: "-webkit-fill-available", textAlign: "center" }}
          >
            <thead style={{ backgroundColor: "orange" }}>
              <tr>
                <th>S.No</th>
                <th>Section</th>
                <th>Board</th>
                <th>Medium</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Sub-Class</th>
                <th>Types of Question</th>

                <th>
                  <div>View</div>
                </th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <td>sss</td>
              <td>sss</td>
              <td>sss</td>
              <td>sss</td>
              <td>sss</td>
              <td>sss</td>
              <td>sss</td>

              <td>sss</td>

              <td>
                <FaEye
                  color="blue"
                  onClick={() => {
                    navigate(`/adminquestiondetailsview/`);
                  }}
                />
              </td>

              <td>
                {" "}
                <div style={{ display: "flex", gap: "20px" }}>
                  <div>
                    <BiSolidEdit
                      className="text-success"
                      style={{ cursor: "pointer", fontSize: "20px" }}
                      onClick={() => {
                        // setupdateQuestion();
                        navigate("/admineditquestiondetails");
                      }}
                    />
                  </div>
                  <div>
                    <AiFillDelete
                      className="text-danger"
                      style={{ cursor: "pointer", fontSize: "20px" }}
                      onClick={() => {
                        handleShow2();
                      }}
                    />{" "}
                  </div>
                </div>
              </td>
            </tbody>
          </Table>
        </div>
      </div>

      {/* Add Package modal */}
      <Modal show={show} onHide={handleClose} style={{width:"100%"}} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "orange" }}>
          <Modal.Title style={{ color: "white" }}>
            Add One Sentence Question Answer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                    </Form.Select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Select Medium</label>
                    <Form.Select aria-label="Default select example">
                      <option>Select the Medium</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Select Class</label>
                    <Form.Select aria-label="Default select example">
                      <option>Select the Class</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Select Sub-Class</label>
                    <Form.Select aria-label="Default select example">
                      <option>Select the Sub-Class</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Select Subject</label>
                    <Form.Select aria-label="Default select example"></Form.Select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Lesson</label>
                    <Form.Select aria-label="Default select example">
                      <option value="">Selete the Lesson</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Select Chapter Name</label>
                    <Form.Select aria-label="Default select example">
                      <option>Select the Chapter Name</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">
                      Select the Difficulty level of Paper
                    </label>
                    <Form.Select aria-label="Default select example">
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
                  <Form.Select aria-label="Default select example">
                    <option>Select the Types of the Question</option>
                  </Form.Select>
                </div>
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Name Of the Examination</label>
                    <Form.Select aria-label="Default select example">
                      <option>Select the Name Of the Examination</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="do-sear">
                    <label htmlFor="">Objectives</label>
                    <input
                      type="text"
                      className="vi_0"
                      placeholder="Please Enter Objectives"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="do-sear">
                    <label htmlFor="">Instructions</label>
                    <CKEditor editor={ClassicEditor} className="vi_0" />
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
                    <CKEditor editor={ClassicEditor} className="vi_0" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Option 2</label>
                    <CKEditor editor={ClassicEditor} className="vi_0" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Option 3</label>
                    <CKEditor editor={ClassicEditor} className="vi_0" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="do-sear mt-2">
                    <label htmlFor="">Option 4</label>
                    <CKEditor editor={ClassicEditor} className="vi_0" />
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
                      <label htmlFor="">Answer</label>
                      <CKEditor editor={ClassicEditor} className="vi_0" />
                    </div>
                  </div>
                </div>
                {/* <div className="yoihjij my-4">
              <button style={{ float: "right" }}>Add</button>
            </div> */}
              </div>
            </div>

            <div className="yoihjij text-center my-2 p-2 ">
              <Button className="modal-add-btn">Add</Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            <Button className="mx-2 modal-close-btn" variant="">
              Cancel
            </Button>
            <Button className="mx-2 modal-add-btn" variant="">
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Edit Package modal */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header style={{ backgroundColor: "orange" }}>
          <Modal.Title style={{ color: "white" }}>
            Edit Service List
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row"></div>
          <div className="do-sear mt-2">
            <label> Image</label>
            <input type="file" name="" id="" className="vi_0" />
          </div>
          <div className="do-sear mt-2">
            <label>Description</label>
            <CKEditor
              editor={ClassicEditor}
              className="vi_0"
              // data={lodingdetails}
              // onChange={(event, editor) => {
              //   const data = editor.getData();
              //   setlodingdetails(data);
              // }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" style={{ backgroundColor: "#FAFA33" }}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* delete modal  */}
      <Modal show={show2} onHide={handleClose2} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton style={{ backgroundColor: "orange" }}>
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
          <Button variant="" className="modal-close-btn" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="" className="modal-add-btn">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OneSentenceAnswer;
