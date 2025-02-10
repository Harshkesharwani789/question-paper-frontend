import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import "../Admin/Admin.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserGenratedQuestion = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate()

  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  //get
  const [Teacher, setTeacher] = useState([]);
  const getAllGenQuestionPaper = async () => {
    try {
      let res = await axios.get(
        `https://guru-resorce-backend.onrender.com/api/teacher/getAllGenQuestionPaper/${admin?._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        setTeacher(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //delete
  const [delteacher, setdelteacher] = useState("");
  const DeleteTeacher = async () => {
    try {
      let res = await axios.delete(
        `https://guru-resorce-backend.onrender.com/api/teacher/deleteGenQuestionPaper/${delteacher}/${admin?._id}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        handleClose2();
        getAllGenQuestionPaper();
        return swal({
          title: "Delete!",
          text: res.data.success,
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Error!",
        text: error.response.data.error,
        icon: "error",
        button: "OK!",
      });
    }
  };

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
  // Pagination
  // const [pageNumber, setPageNumber] = useState(0);
  // const productPerPage = 5;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = Teacher.slice(visitedPage, visitedPage + productPerPage);
  // const pageCount = Math.ceil(Teacher.length / productPerPage);
  const [currenpage, setCurrentpage] = useState(1);
  const recordsperpage = 10;
  const lastIndex = currenpage * recordsperpage;
  const firstIndex = lastIndex - recordsperpage;
  const records = Teacher.slice(firstIndex, lastIndex);
  const npages = Math.ceil(Teacher.length / recordsperpage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  function changePage(id) {
    setCurrentpage(id);
  }

  function prevpage() {
    if (currenpage !== firstIndex) {
      setCurrentpage(currenpage - 1);
    }
  }

  function nextpage() {
    if (currenpage !== lastIndex) {
      setCurrentpage(currenpage + 1);
    }
  }

  useEffect(() => {
    getAllGenQuestionPaper();
  }, []);

  console.log("Teacher", Teacher);

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
          />
        </div>
      </div>
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">User Genrated Question List</h2>
          {/* <button
            className=" btn"
            style={{ backgroundColor: "#083494", color: "white" }}
            onClick={handleShow}
          >
            Add UserGenratedQuestion
          </button> */}
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
                <th>
                  <div>Paper ID</div>
                </th>
                <th>
                  <div>User ID</div>
                </th>
                <th>
                  <div>Name</div>
                </th>
                <th>
                  <div>Institute Name</div>
                </th>
                <th>
                  <div>Board</div>
                </th>
                <th>
                  <div>Class</div>
                </th>
                <th>
                  <div>Medium</div>
                </th>
                <th>Exam Date/Time</th>
                <th>
                  <div>Status</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {records?.map((item, i) => {
                return (
                  <>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item?.paperId}</td>
                      <td>{item?.teacherId?.teacherId}</td>
                      <td>
                        {item?.teacherId?.FirstName} {item?.teacherId?.LastName}
                      </td>
                      <td>
                        {item?.School_Logo ? (
                          <a
                            href={`https://guru-resorce-backend.onrender.com/Teacher/${item?.School_Logo}`}
                            target="_blank"
                          >
                            <img
                              src={`https://guru-resorce-backend.onrender.com/Teacher/${item?.School_Logo}`}
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                float: "left",
                              }}
                            />
                          </a>
                        ) : (
                          ""
                        )}{" "}
                        {item?.Institute_Name}
                      </td>
                      <td>{item?.Board}</td>
                      <td>{item?.Class}</td>
                      <td>{item?.Medium}</td>
                      <td>
                        {moment(item?.Test_Date).format("DD/MM/YYYY")}{" "}
                        {item?.ExamTime}
                      </td>
                      <tb>
                        <div>
                        {item?.status === "Not Complete Staps" ? (
                          <span style={{ color: "red" }}>{item?.status}</span>
                        ) : (
                          <span>
                            {item?.status === "Completed" ? (
                              <span style={{ color: "green" }}>
                                {item?.status}
                              </span>
                            ) : (
                              <span style={{ color: "blue" }}>
                                {item?.status}
                              </span>
                            )}
                          </span>
                        )}
                        </div>
                      
                      </tb>
                      <td>
                        {" "}
                        <div style={{ display: "flex", gap: "10px",padding:"10px" }}>
                          <div>
                            <FaRegEye
                              style={{
                                cursor: "pointer",
                                fontSize: "15px",
                                color: "green",
                              }}
                              onClick={() => navigate("/admincoverpage", { state: { item: item } })}
                            />{" "}
                          </div>
                          <div>
                            <AiFillDelete
                              className="text-danger"
                              style={{ cursor: "pointer", fontSize: "20px" }}
                              onClick={() => {
                                setdelteacher(item?._id);
                                handleShow2(item?._id);
                              }}
                            />{" "}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* <Pagination style={{ float: "right" }}>
          <Pagination.First onClick={() => setPageNumber(0)} />
          <Pagination.Prev
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 0))}
          />
          {Array.from({ length: pageCount }, (_, index) => (
            <Pagination.Item
              key={index}
              active={index === pageNumber}
              onClick={() => setPageNumber(index)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              setPageNumber((prev) => Math.min(prev + 1, pageCount - 1))
            }
          />
          <Pagination.Last onClick={() => setPageNumber(pageCount - 1)} />
        </Pagination> */}
        <div>
          <nav>
            <ul className="pagination">
              <li className="not-allow">
                <span>
                  <li className="next-prev">
                    <a
                      onClick={() => {
                        prevpage();
                      }}
                    >
                      &lt;
                    </a>{" "}
                  </li>
                </span>
              </li>
              {numbers?.map((n, i) => {
                return (
                  <li className="active-next" key={i}>
                    <a
                      href="#"
                      className="inactive"
                      onClick={() => changePage(n)}
                    >
                      {n}
                    </a>
                  </li>
                );
              })}

              <li className="not-allow">
                <span>
                  <li
                    className="next-prev"
                    onClick={() => {
                      nextpage();
                    }}
                  >
                    &gt;{" "}
                  </li>
                </span>
              </li>
            </ul>
          </nav>
        </div>

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
            <Button
              variant=""
              className="modal-add-btn"
              onClick={() => {
                DeleteTeacher();
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default UserGenratedQuestion;
