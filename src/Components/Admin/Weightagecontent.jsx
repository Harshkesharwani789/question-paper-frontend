import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "../Admin/Admin.css";
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";

const Weightagecontent = () => {
  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
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

  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  // Post method Integration
  const [Subject, setSubject] = useState("");
  const [Content, setContent] = useState("");

  const addcontent = async () => {
    try {
      let config = {
        url: "/admin/addweightage",
        baseURL: "http://localhost:8000/api",
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          Subject: Subject,
          Content: Content,
          authId: admin?._id,
        },
      };
      let res = await axios(config);
      if (res.status == 200)
        swal({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          button: "OK!",
        });
      handleClose();
      getallweightagecontent();
    } catch (error) {
      console.log(error);
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        button: "Try Again!",
      });
    }
  };
  //   get method for subjects
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
  //   put method
  const [editweightage, seteditweightage] = useState("");

  const updatecontent = async () => {
    try {
      let config = {
        url: "/admin/updateallcontent",
        baseURL: "http://localhost:8000/api",
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          Subject: Subject,
          Content: Content,
          authId: admin?._id,
          id: editweightage,
        },
      };
      const res = await axios(config);
      if (res.status == 200)
        swal({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          button: "OK!",
        });
      handleClose1();
      getallweightagecontent();
    } catch (error) {
      console.log(error);
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        button: "Try Again!",
      });
    }
  };
  // delete method
  const [deletecontent, setdeletecontent] = useState("");

  const deletallcontent = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/admin/deleteweightage/${deletecontent}/${admin?._id}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        swal({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          button: "OK!",
        });
        handleClose2();
        getallweightagecontent();
      } else {
        // Handle other status codes if needed
        console.error("Unexpected status code:", res.status);
      }
    } catch (error) {
      console.error("Error deleting content:", error.message);
      swal({
        title: "OOps!",
        text: error.response?.data?.error || "Something went wrong",
        icon: "error",
        button: "Try Again!",
      });
    }
  };
  // Pagination
  //  const [pageNumber, setPageNumber] = useState(0);
  //  const productPerPage = 5;
  //  const visitedPage = pageNumber * productPerPage;
  //  const displayPage = weightage.slice(visitedPage, visitedPage + productPerPage);
  //  const pageCount = Math.ceil(weightage.length / productPerPage);
  const [currenpage, setCurrentpage] = useState(1);
  const recordsperpage = 6;
  const lastIndex = currenpage * recordsperpage;
  const firstIndex = lastIndex - recordsperpage;
  const records = weightage.slice(firstIndex, lastIndex);
  const npages = Math.ceil(weightage.length / recordsperpage);
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
    getSubject();
    getallweightagecontent();
  }, []);
  console.log(subject);
  console.log("weightage", weightage);
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
          <h2 className="header-c ">Subject Part</h2>
          <button className="admin-add-btn" onClick={handleShow}>
            Add Subject Part
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
                <th>Subject</th>
                <th>
                  <div>Subject Part</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {records?.map((val, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{val?.Subject}</td>
                    <td>
                      <p>{val?.Content}</p>
                    </td>

                    <td>
                      {" "}
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                          <BiSolidEdit
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              handleShow1();
                              seteditweightage(val?._id);
                              setContent(val?.Content);
                            }}
                          />{" "}
                        </div>
                        <div>
                          <AiFillDelete
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              handleShow2(val?._id);
                              setdeletecontent(val?._id);
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
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
        {/* Add Package modal */}
        <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>
              Add Weightage Of the Content
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear">
                <label htmlFor="">Subject</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                >
                  <option value="">Select Subject</option>
                  {subject?.map((val, i) => {
                    return (
                      <option value={val?.subjectName} key={i}>
                        {val?.subjectName}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
              <div className="do-sear mt-2">
                <label>Content</label>
                <input
                  type="text"
                  placeholder="Enter Board"
                  className="vi_0"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button
                variant=""
                className="modal-close-btn"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className="mx-2 modal-add-btn"
                variant=""
                onClick={() => {
                  addcontent();
                }}
              >
                Add
              </Button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* Edit Package modal */}
        <Modal show={show1} onHide={handleClose1} style={{ zIndex: "99999" }}>
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>
              Edit Weightage Of the Content
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear">
                <label htmlFor="">Subject</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                >
                  <option value="">Select Subject</option>
                  {subject?.map((val, i) => {
                    return (
                      <option value={val?.subjectName} key={i}>
                        {val?.subjectName}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
              <div className="do-sear mt-2">
                <label>Content</label>
                <input
                  type="text"
                  placeholder="Enter Board"
                  className="vi_0"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  value={Content}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button
                variant=""
                className="modal-close-btn"
                onClick={handleClose1}
              >
                Close
              </Button>
              <Button
                className="mx-2 modal-add-btn"
                variant=""
                onClick={() => {
                  updatecontent();
                }}
              >
                Edit
              </Button>
            </div>
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
            <Button
              variant=""
              className="modal-add-btn"
              onClick={() => {
                deletallcontent();
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

export default Weightagecontent;
