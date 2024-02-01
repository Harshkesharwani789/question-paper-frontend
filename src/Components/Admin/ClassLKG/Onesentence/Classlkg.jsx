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
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "../../../Admin/Admin.css"
const Classlkg = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  const [link, setlink] = useState("");
  const submit = () => {
    window.location.assign(link);
  };
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
          <h2 className="header-c ">Class LKG </h2>
          <button
            className="admin-add-btn"
            onClick={() => {
              //   navigate("/onesentenceaddanswer");
              handleShow();
            }}
          >
            Add Question
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
                <th>Board</th>
                <th>Medium</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Subject Part</th>
                <th>Sub-Class</th>

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

              <td>
                <FaEye
                  color="blue"
                  onClick={() => {
                    navigate(`/onesentenceanswerview/`);
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
                        navigate("/onesentenceeditanswer");
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
      <Modal
        show={show}
        onHide={handleClose}
        style={{ zIndex: "99999" }}
        size="lg"
      >
        <Modal.Header closeButton style={{ backgroundColor: "orange" }}>
          <Modal.Title style={{ color: "white" }}>Add Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <div className="do-sear">
                <label htmlFor="" className="fw-bold fs-3 mb-4">
                  {" "}
                  Select Types Of Question
                </label>{" "}
                <br />
                <div className="hjhu">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="">
                          <button> Objective Questions</button>
                        </a>
                        &nbsp;
                        <a href="">
                          <button>Multiple Choice Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>Fill in the Blanks</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button> Match the Following</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button> Recorrect the Answers</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button> Classifications of Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>Odd and out words Questions</button>
                        </a>{" "}
                        &nbsp;
                      </div>
                      <div className="col-md-3">
                        <a href="">
                          <button> RelationShip Words Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>Grammer Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>One Word Question</button>
                        </a>{" "}
                        &nbsp;
                        <a href="/addClasslkg">
                          <button> One Sentence Answer Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button> Two Words Sentence Answer Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>
                            {" "}
                            Two and three Sentence Answer Questions
                          </button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>
                            Three and Four Sentence Answer Questions
                          </button>
                        </a>{" "}
                        &nbsp;
                      </div>
                      <div className="col-md-3">
                        <a href="">
                          <button>Five Sentence Answer Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>
                            {" "}
                            Five and Six Sentence Answer Questions
                          </button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button> Six Sentence Answer Questions </button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button> Seven Sentence Answer Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>Eight Sentence Answer Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button> Ten Sentence Answer Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>
                            Expanding and Explanations Answer Questions
                          </button>
                        </a>{" "}
                        &nbsp;
                      </div>
                      <div className="col-md-3">
                        <a href="">
                          <button>
                            Answer the Questions and Draw the Figure
                          </button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>Graph Questions</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>Complete the Poem</button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>
                            {" "}
                            Situation UnderStatnding answer Questions
                          </button>
                        </a>{" "}
                        &nbsp;
                        <a href="">
                          <button>
                            Poet,Time, Place, Writer answer questions
                          </button>
                        </a>{" "}
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="" className="modal-close-btn" onClick={handleClose}>
            Close
          </Button>
          <Button variant="" className="modal-add-btn" onClick={submit}>
            Submit
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default Classlkg;
