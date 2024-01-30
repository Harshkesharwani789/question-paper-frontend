import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "../Admin/Admin.css";
import axios from "axios";
import swal from "sweetalert";

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

  //Post
  const [subjectName, setsubjectName] = useState("");
  const AddSubject = async () => {
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
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
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
  //get
  const [subject, setsubject] = useState([]);
  const [nochangedata, setnochangedata] = useState([]);
  const getSubject = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllSujects"
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
        baseURL: "http://localhost:8000/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
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
        baseURL: "http://localhost:8000/api",
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
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 5;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = subject.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(subject.length / productPerPage);
  useEffect(() => {
    getSubject();
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
          <button
            className=" btn"
            style={{ backgroundColor: "green", color: "white" }}
            onClick={handleShow}
          >
            Add Subject
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
                <th>
                  <div>Subject</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {displayPage?.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1 + visitedPage}</td>

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

        <Pagination style={{ float: "right" }}>
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
        </Pagination>
        {/* Add Package modal */}
        <Modal show={show} onHide={handleClose} style={{zIndex:"99999"}}>
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>Add Subject</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
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

            {/* <div className="do-sear mt-2">
        <label>Title 2</label>
        <input type="text" placeholder="Enter Title 2" className="vi_0" />
      </div> */}

            {/* <div className="do-sear mt-2">
          <label>Description</label>
          <CKEditor
            editor={ClassicEditor}
            // data={AbDescription}
            onChange={handleChange}
          />
        </div> */}
            {/* <div className="do-sear mt-2">
        <label>URL</label>
        <input type="text" placeholder="Enter URL" className="vi_0" />
      </div>  */}
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
            <Button
                className="mx-2"
                variant=""
                style={{backgroundColor:"#ff5200", color:"white"}}
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className="mx-2"
                variant=""
                style={{backgroundColor:"green", color:"white"}}
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
          style={{zIndex:"99999"}}
        >
          <Modal.Header style={{ backgroundColor: "rgb(40 167 223)" }}>
            <Modal.Title style={{ color: "white" }}>Edit Subject</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="vi_0"
                  value={subjectName}
                  onChange={(e) => setsubjectName(e.target.value)}
                />
              </div>
            </div>

            {/* <div className="do-sear mt-2">
        <label>Title 2</label>
        <input type="text" placeholder="Enter Title 2" className="vi_0" />
      </div> */}

            {/* <div className="do-sear mt-2">
          <label>Description</label>
          <CKEditor
            editor={ClassicEditor}
            // data={AbDescription}
            onChange={handleChange}
          />
        </div> */}
            {/* <div className="do-sear mt-2"> */}
            {/* <label>URL</label>
        <input type="text" placeholder="Enter URL" className="vi_0" />
      </div>  */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="" style={{backgroundColor:"#ff5200", color:"white"}} onClick={handleClose1}>
              Close
            </Button>
            <Button
              variant="" style={{backgroundColor:"green", color:"white"}}
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
          style={{zIndex:"99999"}}
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
            <Button variant="" style={{backgroundColor:"#ff5200", color:"white"}} onClick={handleClose2}>
              Close
            </Button>
            <Button variant="" style={{backgroundColor:"green", color:"white"}} onClick={DeleteSubject}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AdminSubject;
