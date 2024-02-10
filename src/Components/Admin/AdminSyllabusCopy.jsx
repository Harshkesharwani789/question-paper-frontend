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

const AdminSyllabusCopy = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");
  
  const [slybus, setslybus] = useState(false);
  
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
  const [year, setyear] = useState("");
  const [classs, setclasss] = useState("");
  const [subclass, setsubclass] = useState("");
  const [medium, setmedium] = useState("");
  const [subjectt, setsubjectt] = useState("");
  // Array of object 1
  const [Arr, setArr] = useState([]);

  const AddTypesofquestion = () => {
    try {
      if (!year) {
        swal({
          title: "Oops!",
          text: "Please Select Question Type",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if QAType is not provided
      }

      if (!classs) {
        swal({
          title: "Oops!",
          text: "Please Enter No. of Questions",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if NQA is not provided
      }

      if (!subclass) {
        swal({
          title: "Oops!",
          text: "Please Enter Marks",
          icon: "error",
          button: "Try Again!",
        });
        return; // Stop further execution if Mask is not provided
      }
      if (!medium) {
        swal({
          title: "Oops!",
          text: "Please Enter medium",
          icon: "error",
          button: "Try Again!",
        });
      }
      if (!subjectt) {
        swal({
          title: "Oops!",
          text: "Please Enter subjectt",
          icon: "error",
          button: "Try Again!",
        });
      }
      let Slybus = 1;
      // Arr.forEach((ele) => {
      //   if (ele?.QAType === QAType) {
      //     Question = 0;
      //     swal({
      //       title: "Oops!",
      //       text: "Already Exists...",
      //       icon: "error",
      //       button: "Try Again!",
      //     });
      //   }
      // });

      if (Slybus) {
        const obj = {
          lesson: chapterNumber,
          chepterName: chapterName,
          description: description,
          mask: marks,
        };

        Arr.push(obj);
        setArr([...Arr]); // Ensure you create a new array reference to trigger a re-render
        console.log("Arr", Arr);

        swal({
          title: "Yeah!",
          text: "Added Successfully...",
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteQuestionType = (index) => {
    try {
      const deletedQuestion = Arr[index];

      // Create a new array excluding the element at the specified index
      const updatedArr = Arr.filter((_, i) => i !== index);

      setArr(updatedArr);
      console.log("Arr after deletion", updatedArr);

      swal({
        title: "Deleted!",
        text: " Deleted Successfully.",
        icon: "warning",
        button: "OK!",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addSyllabus = async () => {
    if(!year){
      return alert( "Please Enter the year");
    }

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
          year: year,
          Class: classs,
          SubClass: subclass,
          medium: medium,
          subject: subjectt,
          SyllabusDetails: Arr,
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
  //get method for medium
  const [Medium, setMedium] = useState([]);
  const getAddMedium = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getAllMedium");
      if (res.status == 200) {
        setMedium(res.data.success);
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

  //get method for subject
  const [subjectss, setsubjectss] = useState([]);
  const getSubject = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllSujects"
      );
      if (res.status == 200) {
        setsubjectss(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   get method of subject
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
  // const [pageNumber, setPageNumber] = useState(0);
  // const productPerPage = 5;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = chapters.slice(visitedPage, visitedPage + productPerPage);
  // const pageCount = Math.ceil(chapters.length / productPerPage);
  const [currenpage, setCurrentpage] = useState(1);
  const recordsperpage = 6;
  const lastIndex = currenpage * recordsperpage;
  const firstIndex = lastIndex - recordsperpage;
  const records = Slybuss.slice(firstIndex, lastIndex);
  const npages = Math.ceil(Slybuss.length / recordsperpage);
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
    getSyllabus();
    getallclassname();
    getAddMedium();
    getaddsubclasss();
    getSubject();
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
            className="admin-add-btn"
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
                  <div>Year</div>
                </th>
                <th>
                  <div>Class</div>
                </th>
                <th>
                  <div>Sub-Class</div>
                </th>
                <th>
                  <div>Medium</div>
                </th>
                <th>
                  <div>Subject</div>
                </th>
                <th>
                  <div>View</div>
                </th>
                <th>
                  <div>View</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {Slybuss?.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>

                    <td>{item?.year}</td>
                    <td>{item?.Class}</td>
                    <td>{item?.SubClass}</td>
                    <td>{item?.medium}</td>
                    <td>{item?.subject}</td>
                    <td>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <FaEye color="blue" />
                      </Link>
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
        <Modal
          show={show}
          onHide={handleClose}
          style={{ zIndex: "99999" }}
          size="lg"
        >
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>Add Syllabus</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Year</label>
                <input
                value={year}
                  type="text"
                  className="vi_0"
                  placeholder="Enter Year"
                  onChange={(e) => {
                    setyear(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
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
                  <option value="Lower Primary">Lower Primary</option>
                  <option value="One Class">One Class</option>
                  <option value="Two Class">Two Class</option>
                  <option value="Three Class">Three Class</option>
                  <option value="Four Class">Four Class</option>
                  <option value="Five Class">Five Class</option>
                  <option value="Six Class">Six Class</option>
                  <option value="Seven Class">Seven Class</option>
                  <option value="Eight Class">Eight Class</option>
                  <option value="Nine Class">Nine Class</option>
                  <option value="ten Class">Ten Class</option>
               
                  {/* {getclassname?.map((val, i) => {
                    return (
                      <option value={val?.className} key={i}>
                        {val?.className}
                      </option>
                    );
                  })} */}
                </Form.Select>
              </div>
            </div>
            <div className="row">
              <div className="do-sear mt-2">
                <label>
                  Select Subjects <span style={{ color: "red" }}>*</span>
                </label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setsubjectt(e.target.value)}
                >
                  <option>Select the Subjects</option>
                  {subjectss?.map((val, i) => {
                    return (
                      <option value={val?.subjectName} key={i}>
                        {val?.subjectName}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
            <div className="row">
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
            <div className="row">
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
            <div>
              <div
                style={{
                  border: "2px solid #dee2e6",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
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
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setDescription(data);
                      }}
                    />
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
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Button
                      variant=""
                      style={{ float: "right", marginTop: "15px" , backgroundColor:"navy", color:"white", borderRadius:"5px"}}
                      onClick={() => {
                        setslybus(true);
                        AddTypesofquestion();
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
                {slybus ? (
                  <>
                    {" "}
                    <div className="row">
                      <div className="col-md-12">
                        <Table
                          responsive
                          bordered
                          style={{
                            width: "-webkit-fill-available",
                            textAlign: "center",
                          }}
                        >
                          <thead>
                            <tr>
                              <th>S No.</th>
                              <th>Chapter No.</th>
                              <th>Chapter Name</th>
                              <th>Description</th>
                              <th>Marks</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Arr?.map((val, i) => {
                              return (
                                <tr>
                                  <td>{i + 1}</td>
                                  <td>{val?.lesson}</td>
                                  <td>{val?.chepterName}</td>
                                  <td>
                                    {val?.description ? (
                                      parse(val?.description)
                                    ) : (
                                      <></>
                                    )}
                                  </td>
                                  <td>{val?.mask}</td>
                                  <td>
                                    {" "}
                                    <AiFillDelete
                                      color="red"
                                      cursor="pointer"
                                      onClick={() => deleteQuestionType(i)}
                                    />
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
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
                  addSyllabus();
                }}
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
          <Modal.Header closeButton  style={{ backgroundColor: "rgb(40 167 223)" }}>
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
            <Button variant="" className="modal-close-btn" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="" className="modal-add-btn" onClick={DeleteSyllabus}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminSyllabusCopy;
