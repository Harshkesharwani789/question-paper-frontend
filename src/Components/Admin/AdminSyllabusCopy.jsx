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

const AdminSyllabusCopy = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");
  const [getclassname, setgetclassName] = useState([]);

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
  const [chapterName, setChapterName] = useState("");
  const [description, setDescription] = useState("");
  const [chapterNumber, setChapterNumber] = useState("");
  const [marks, setMarks] = useState("");

  const addSyllabus = async () => {
    if (!chapterName)
      return swal({
        title: "Oops!",
        text: "Please Enter the chapter name",
        icon: "error",
        button: "Ok!",
      });
      if (!marks)
      return swal({
        title: "Oops!",
        text: "Please Enter the marks",
        icon: "error",
        button: "Ok!",
      });
    if (!description)
      return swal({
        title: "Oops!",
        text: "Please enter description",
        icon: "error",
        button: "Ok!",
      });
    try {
      const config = {
        url: "/admin/addSyllabus",
        method: "post",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          chapterNumber: chapterNumber,
          chapterName: chapterName,
          description: description,
          marks: marks,
          authId: admin?._id,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose();
        getAllSyllabus();
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
  const [chapters, setchapters] = useState([]);
  const [nochangedata, setnochangedata] = useState([]);
  const getAllSyllabus = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllSyllabus"
      );
      if (res.status == 200) {
        setchapters(res.data.success);
        setnochangedata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          chapterNumber: chapterNumber,
          chapterName: chapterName,
          description: description,
          authId: admin?._id,
          id: updatechapter,
        },
      };
      let res = await axios(config);
      if (res.status == 200)
        if (res.status == 200) {
          handleClose1();
          getAllSyllabus();
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
  const [chapter, setChapter] = useState("");
  const DeleteSyllabus = async () => {
    try {
      const config = {
        url: "/admin/deleteSyllabus/" + chapter + "/" + admin?._id,
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
        getAllSyllabus();
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

  //   get method of subject
  const [subject, setsubject] = useState([]);
  //   const [nochangedata, setnochangedata] = useState([]);
//   const getSyllabus = async () => {
//     try {
//       let res = await axios.get(
//         "http://localhost:8000/api/admin/getAllSyllabus"
//       );
//       if (res.status == 200) {
//         setsubject(res.data.success);
//         setnochangedata(res.data.success);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
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
      setchapters([...filterTableH]);
    } else {
      setSearchH(e.target.value);
      setchapters([...nochangedata]);
    }
  };
  const [searchTermH, setSearchTermH] = useState("");
  const searchedProductH = chapters.filter((item) => {
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
  const displayPage = chapters.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(chapters.length / productPerPage);
  useEffect(() => {
    getAllSyllabus();
  }, []);
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
            onChange={handleFilterH}
          />
        </div>
      </div>
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Syllabus</h2>
          <button
            className=" btn"
            style={{ backgroundColor: "#083494", color: "white" }}
            onClick={handleShow}
          >
            Add Syllabus
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
                  <div>Chapter Number</div>
                </th>
                <th>
                  <div>Chapter Name</div>
                </th>
                <th>
                  <div>Description</div>
                </th>
                <th>
                  <div>Marks</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {displayPage?.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>

                    <td>{item?.chapterNumber}</td>
                    <td>{item?.chapterName}</td>
                    <td>{item?.description}</td>
                    <td>{item?.marks}</td>
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
                              setChapterName(item?.chapterName);
                            }}
                          />{" "}
                        </div>
                        <div>
                          <AiFillDelete
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              setChapter(item?._id);
                              handleShow2(item?._id);
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
        <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>Add Syllabus</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row">
              <div className="do-sear mt-2">
                <label>Year</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Year"
                />
              </div>
            </div>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Class</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter class"
                />
              </div>
            </div>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Subject</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Subject"
                />
              </div>
            </div>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Sub-Class</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Sub-Class"
                />
              </div>
            </div>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Medium</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter medium"
                />
              </div>
            </div>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Chapter Number</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Chapter Number"
                  onChange={(e) => setChapterNumber(e.target.value)}
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
                  onChange={(e) => setChapterName(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="do-sear mt-2">
                <label>Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={description}
                  onChange={(editor) => {
                    const data = editor.getData();
                    setDescription(data);
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="do-sear mt-2">
                <label>Marks</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Marks"
                  onChange={(e) => setMarks(e.target.value)}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button className="mx-2" variant="success" onClick={handleClose}>
                Close
              </Button>
              <Button
                className="mx-2"
                variant="primary"
                onClick={() => {
                    addSyllabus();
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
          <Modal.Header style={{ backgroundColor: "rgb(40 167 223)" }}>
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
                  onChange={(e) => setChapterName(e.target.value)}
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
                  onChange={(e) => setChapterName(e.target.value)}
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
                  onChange={(e) => setChapterName(e.target.value)}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose1}>
              Close
            </Button>
            <Button
              variant="primary"
              style={{ backgroundColor: "#FAFA33" }}
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
            <Button variant="success" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary" onClick={DeleteSyllabus}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminSyllabusCopy;
