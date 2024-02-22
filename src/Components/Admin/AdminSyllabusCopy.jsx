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
  const navigate = useNavigate();

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

  const [show3, setShow3] = useState();
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  //Get All Subject
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

  // Get All Subject Part
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

  //Get Chapter
  const [chapters, setchapters] = useState([]);
  const getChapter = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllChapter"
      );
      if (res.status == 200) {
        setchapters(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get Exam Name
  const [NameExam, setNameExam] = useState([]);
  const getNameExamination = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllNameExamination"
      );
      if (res.status == 200) {
        setNameExam(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallweightagecontent();
    getChapter();
    getNameExamination();
  }, []);
  console.log("weightage", weightage);
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
  const [SelectChapter, setSelectChapter] = useState("");
  const [Months, setMonths] = useState("");
  const [Assessment, setAssessment] = useState("");
  const [from, setfrom] = useState("")
  const [to, setto] = useState("")
  const [selectsubjectpart, setSelectsubjectpart] = useState("");
  const [Examinationname, setExaminationname] = useState("");
  // Array of object 1
  const [Arr, setArr] = useState([]);
  const AddTypesofassessment = () => {
    try {
      Arr.find(
        (ele) =>
       
          ele.Assessment === Assessment ||
          ele.from === from ||
          ele.to === to
      );
      const newObj = {
  
        Assessment:Assessment,
        from:from,
        to:to
      };
      setArr([...Arr, newObj]);
      swal({
        title: "Yeah!",
        text: "Added Successfully...",
        icon: "success",
        button: "OK!",
      });
    } catch (error) {
      console.error(error);
    }
  };


  const Addchaptertype = (i) => {
    try {
      const existingObj = Arr[i];
   Arr.find(
        (ele) =>
        ele.chapterno === chapterNumber ||
        ele.subjectpart === selectsubjectpart ||
        ele.Months === Months
      );
      const newObj = {
        chapterno: chapterNumber,
        Months:Months,
        subjectpart: selectsubjectpart,
      };
      setArr([...Arr, [newObj]]);
      swal({
        title: "Yeah!",
        text: "Added Successfully...",
        icon: "success",
        button: "OK!",
      });
    } catch (error) {
      console.error(error);
    }
  };

console.log("Arr",Arr);

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
    if (!year) {
      return alert("Please Enter the year");
    }
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
          year: year,
          medium: medium,
          Class: classs,
          SubClass: subclass,
          subject: subjectt,
          authId: admin?._id,
          SyllabusDetails: Arr,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose();

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
      if (res.status == 200)
        handleClose2()
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
  console.log("Slybuss", Slybuss);

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
  console.log("getaddsubclass", getaddsubclass);

  const uniqueClassNamesSet = new Set(
    getaddsubclass.map((item) => item.className)
  );
  const uniqueClassNamesArray = Array.from(uniqueClassNamesSet);

  //  Add Chapter Name

  const [AddChapter, setAddChapter] = useState([]);
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
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Syllabus</h2>
          <button className="admin-add-btn" onClick={handleShow}>
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
                      {/* <Link
                        to="//"
                        style={{ textDecoration: "none", color: "white" }}
                      > */}
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
                              setChapterName(item?.chapterName);
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
          size="xl"
        >
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>Add Syllabus</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-4">
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

            </div>

            <div
              style={{
                border: "2px solid #dee2e6",
                padding: "10px",
                marginTop: "10px",
                // backgroundColor: "#e9caa0"
              }}
            >
              <div className="row p-3" style={{backgroundColor: "#e9caa0"}}>
              <div className="col-sm-4">
                <div className="do-sear mt-2">
                  <label>Assessment:</label>
                  <input
                    type="text"
                    className="vi_0"
                    placeholder="Enter Assessment"
                  onChange={(e) => setAssessment(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="do-sear mt-2">
                  <label>From:</label>
                  <input
                    type="date"
                    className="vi_0"                   
                  onChange={(e) => setfrom(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="do-sear mt-2">
                  <label>To:</label>
                  <input
                    type="date"
                    className="vi_0"
                    placeholder="Enter Assessment"
                   onChange={(e) => setto(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant=""
                  style={{
                    marginTop: "15px",
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "5px",
                  }}
                  onClick={() => {
                    // setslybus(true);
                    AddTypesofassessment();
                  }}
                >
                  Add
                </Button>
              </div>
              </div>
             
              
                {/* <div className="col-sm-4">
                  <div className="do-sear mt-2">
                    <label>Chapter Name</label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        setSelectChapter(e.target.value);
                      }}
                    >
                      <option>Select the Chapter</option>
                      {chapters
                        ?.filter((ele) => ele.SubjectPart === selectsubjectpart)
                        ?.map((val, i) => {
                          return (
                            <option value={val?.chapterName} key={i}>
                              {val?.chapterName}
                            </option>
                          );
                        })}
                    </Form.Select>
                  </div>
                </div> */}


              

              {/* <div className="row">
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
              </div> */}

              {/* <div className="row">
                <div className="col-sm-6">
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
                <div className="col-sm-6">
                  <div className="do-sear mt-2">
                    <label> Name Of the Examination</label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        setExaminationname(e.target.value);
                      }}
                    >
                      <option>Select examination</option>
                      {NameExam?.map((val, i) => {
                        return (
                          <option value={val?.NameExamination} key={i}>
                            {val?.NameExamination}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </div>
                </div>
              </div> */}

             
              <div className="row mt-2">
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
                        <th>Assessment</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Unit No.</th>
                        <th>Month</th>
                        <th>Unit Name</th>                       
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Arr?.map((val, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>{val?.Assessment}</td>
                            <td>{val?.from}</td>
                            <td>{val?.to}</td>
                            <td>{val?.chapterno}</td>                        
                            <td>{val?.Months}</td>                        
                            <td>{val?.subjectpart}</td>                        
                            <td>
                              <Button
                              onClick={()=>handleShow3(i)}
                              >Add</Button>
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

        <Modal
          show={show3}
          onHide={handleClose3}
          backdrop="static"
          keyboard={false}
          style={{ zIndex: "99999" }}
        >
          <Modal.Header closeButton>
            <Modal.Title > Add Units Details</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor:"#dda559"}}>
        <div >
        <div className="">
                  <div className="do-sear mt-2">
                    <label>Unit Number</label>
                    <input
                      type="text"
                      className="vi_0"
                      placeholder="Enter Unit Number"
                      onChange={(e) => setChapterNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="do-sear mt-2">
                    <label>Month</label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        setMonths(e.target.value);
                      }}
                    >
                      <option>Select the months</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>


                    </Form.Select>
                  </div>
                </div>
                <div className="">
                  <div className="do-sear mt-2">
                    <label>Subject Part</label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        setSelectsubjectpart(e.target.value);
                      }}
                    >
                      <option>Select the Subject Part</option>
                      {weightage
                        ?.filter((ele) => ele.Subject === subjectt)
                        ?.map((val, i) => {
                          return (
                            <option value={val?.Content} key={i}>
                              {val?.Content}
                            </option>
                          );
                        })}
                    </Form.Select>
                  </div>
                </div>
        </div>
              
           
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant=""
              className="modal-close-btn"
              onClick={handleClose3}
            >
              Close
            </Button>
            <Button
              variant=""
              className="modal-add-btn"
             onClick={Addchaptertype}
            >
              Add
            </Button>
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
              onClick={deleteslybus}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminSyllabusCopy;
