import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Pagination, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "../Admin/Admin.css";
import axios from "axios";
import swal from "sweetalert";
import { debounce } from "lodash";
const AdminChapter = () => {
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
  const [classtype, setClasstype] = useState({});


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
    let arr = [];
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
//get method for medium
const [Medium, setMedium] = useState([]);
//  const [nochangedata, setnochangedata] = useState([]);
 const getAddMedium = async () => {
   try {
     let res = await axios.get("http://localhost:8000/api/admin/getAllMedium");
     if (res.status == 200) {
       setMedium(res.data.success);
      //  setnochangedata(res.data.success);
     }
   } catch (error) {
     console.log(error);
   }
 };
 // get method for class and subclass
 const [getaddsubcla, setgetaddsubcla] = useState([]);
 const getaddsubclas = async () => {
   try {
     const res = await axios.get(
       "http://localhost:8000/api/admin/getAllSubClass"
     );
     if (res.status == 200) {
       setgetaddsubcla(res.data.success);
     }
   } catch (error) {
     console.log(error);
   }
 };
 // get method for subclass
//  const [getaddsubclass, setgetaddsubclass] = useState([]);
//  const getaddsubclasss = async () => {
//    try {
//      const res = await axios.get(
//        "http://localhost:8000/api/admin/getAllSubClass"
//      );
//      if (res.status == 200) {
//        setgetaddsubclass(res.data.success);
//      }
//    } catch (error) {
//      console.log(error);
//    }
//  };
  //Post
  const [mediumName,setmediumName] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [SubjectPart, setSubjectPart] = useState("");
  const [Classname, setClassname] = useState("");
  const [Sub_classname, setSub_classname] = useState("");

  const AddChapter = async () => {
    if (!mediumName)
      return swal({
        title: "Oops!",
        text: "Please Enter the chapter name",
        icon: "error",
        button: "Ok!",
      });
    if (!chapterName)
      return swal({
        title: "Oops!",
        text: "Please Enter the chapter name",
        icon: "error",
        button: "Ok!",
      });
    if (!subjectName)
      return swal({
        title: "Oops!",
        text: "Please Enter select subject name",
        icon: "error",
        button: "Ok!",
      });
    if (!SubjectPart)
      return swal({
        title: "Oops!",
        text: "Please Enter select subject Part",
        icon: "error",
        button: "Ok!",
      });
    try {
      const config = {
        url: "/admin/addChapter",
        method: "post",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          mediumName:mediumName,
          chapterName: chapterName,
          subjectName: subjectName,
          SubjectPart: SubjectPart,
          Classname: Classname,
          Sub_classname: Sub_classname,
          authId: admin?._id,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose();
        getChapter();
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
  //get
  const [chapters, setchapters] = useState([]);
  const [nochangedata, setnochangedata] = useState([]);
  const getChapter = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllChapter"
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
  const UpdateChapter = async () => {
    try {
      const config = {
        url: "/admin/updateChapter",
        method: "put",
        baseURL: "http://localhost:8000/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          mediumName:mediumName,
          chapterName: chapterName,
          subjectName: subjectName,
          SubjectPart: SubjectPart,
          authId: admin?._id,
          id: updatechapter,
        },
      };
      let res = await axios(config);
      if (res.status == 200)
        if (res.status == 200) {
          handleClose1();
          getChapter();
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
  const DeleteChapter = async () => {
    try {
      const config = {
        url: "/admin/deleteChapter/" + chapter + "/" + admin?._id,
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
        getChapter();
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

  console.log("chapters",chapters);
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
  // const [currenpage, setCurrentpage] = useState(1);
  // const recordsperpage = 6;
  // const lastIndex = currenpage * recordsperpage;
  // const firstIndex = lastIndex - recordsperpage;
  // const records = chapters.slice(firstIndex, lastIndex);
  // const npages = Math.ceil(chapters.length / recordsperpage);
  // const numbers = [...Array(npages + 1).keys()].slice(1);

  // function changePage(id) {
  //   setCurrentpage(id);
  // }

  // function prevpage() {
  //   if (currenpage !== firstIndex) {
  //     setCurrentpage(currenpage - 1);
  //   }
  // }

  // function nextpage() {
  //   if (currenpage !== lastIndex) {
  //     setCurrentpage(currenpage + 1);
  //   }
  // }

  useEffect(() => {
    getAddMedium();
    getaddsubclas();
    getChapter();
    getSubject();
    getallweightagecontent();
    getaddsubclasss();
  }, []);
  console.log("Sub_classname", Sub_classname);
  const uniqueClassNamesSet = new Set(
    getaddsubclass.map((item) => item.className)
  );
  const uniqueClassNamesArray = Array.from(uniqueClassNamesSet);
  return (
    <div>
      <div className="row d-flex justify-content-between">
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
      <div className="col-lg-2">
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
      
     
      <div className="customerhead p-2">
        <h2 className="header-c ">Chapters</h2>
        <div>
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-4">
                <label htmlFor="">Select Class</label>

                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    // setClasstype(e.target.value);
                    setClassname(e.target.value);
                  }}
                >
                  <option value="">Select Class</option>
                  {uniqueClassNamesArray?.map((val, i) => {
                    return (
                      <option value={val} key={i}>
                        {val}
                      </option>
                    );
                  })}                 
                </Form.Select>
              </div>
              <div className="col-md-4">
                <label htmlFor="">Select Sub Class</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setSub_classname(e.target.value);
                  }}
                >
                  <option value="">Select Sub Class</option>
                  {getaddsubclass
                    ?.filter((ele) => ele.className === Classname)
                    ?.map((val, i) => {
                      return (
                        <option value={val?.subclassName} key={i}>
                          {val?.subclassName}
                        </option>
                      );
                    })}
                </Form.Select>
              </div>
              <div className="col-md-4">
                {Sub_classname ? (<>
                  <button              
                  className="admin-add-btn mt-4"
                  style={{ float: "right" }}
                  onClick={() => {
                    handleShow();
                  }}
                >
                  Add Chapters
                </button>
                </>):(<>
                  <button              
                  className="admin-add-btn mt-4"
                  style={{ float: "right",cursor:" no-drop" }}                 
                >
                  Add Chapters
                </button></>)}
                
              </div>
            </div>
          </div>
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
                <th>Class</th>
                <th>Sub-class</th>
                <th>
                  <div>Subject</div>
                </th>
                <th>
                  <div>Subject Part</div>
                </th>
                <th>
                  <div>Chapter Name</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {chapters
                ?.filter((val) => val?.Sub_classname == Sub_classname)
                ?.map((item, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item?.mediumName}</td>
                      <td>{item?.Classname}</td>
                      <td>{item?.Sub_classname}</td>
                      <td>{item?.subjectName}</td>
                      <td>{item?.SubjectPart}</td>
                      <td>{item?.chapterName}</td>

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
                                setClassname(item?.Classname);
                                setSub_classname(item?.Sub_classname);
                                setChapterName(item?.chapterName);
                                setSubjectName(item?.subjectName);
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
        {/* <div>
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
        </div> */}

        {/* Add Package modal */}
        <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>
              Add Chapter for {Sub_classname}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <div className="row">
              <div className="col-md-12">
                <div className="do-sear mt-2">
                  <label htmlFor="">Sub Class</label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setSubjectPart(e.target.value)}
                  >
                    <option value="">Select Sub Class</option>
                    {getaddsubclass.map((val, i) => {
                      return (
                        <option value={val?.subclassName}>
                          {val?.subclassName}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-md-12">
                <div className="do-sear mt-2">
                  <label htmlFor="">Sub Class</label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => e.target.value}
                  >
                    <option value="">Select Sub Class</option>
                    {getaddsubclass.map((val, i) => {
                      return (
                        <option value={val?.subclassName}>
                          {val?.subclassName}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
            </div> */}
            <div className="do-sear mt-2">
                <label>Medium</label>
                <select className="vi_0" onChange={(e)=>setmediumName(e.target.value)}>
                  <option value="">--Select medium--</option>
                  {Medium?.map((item)=>{
                    return(
                      <option value={item?.mediumName}>{item?.mediumName}</option>
                    )
                  })}
                </select>
              
              </div>
          <div className="do-sear mt-2">
            <label>Class</label>
            <select className="vi_0" onChange={(e)=>setClassname(e.target.value)}>
                  <option value="">--Select Class--</option>
                  {getaddsubcla?.filter((ele)=>ele.mediumName==mediumName).map((item)=>{
                    return(
                      <option value={item?.className}>{item?.className}</option>
                    )
                  })}
                </select>
              
            {/* <input
                  type="text"
                  placeholder="Enter Subject"
                  className="vi_0"
                  onChange={(e) => {
                    if(selectedLanguage == "en-t-i0-und"){
                      setClassname(e.target.value)
                    }else onChangeHandler(e.target.value,setClassname)                    
                  }}
                />
                 {selectedLanguage == "en-t-i0-und" ? <></> : <p>{Classname}</p>} */}
          </div>
          <div className="do-sear mt-2">
            <label>Sub-Class</label>
            <select className="vi_0" onChange={(e)=>setSub_classname(e.target.value)}>
                  <option value="">--Select Class--</option>
                  {getaddsubcla?.filter((item)=>item.mediumName == mediumName).map((item)=>{
                    return(
                      <option value={item?.subclassName}>{item?.subclassName}</option>
                    )
                  })}
                </select>
            {/* <input
                  type="text"
                  placeholder="Enter Subject"
                  className="vi_0"
                  onChange={(e) => {
                    if(selectedLanguage == "en-t-i0-und"){
                      setSub_classname(e.target.value)
                    }else onChangeHandler(e.target.value,setSub_classname)                    
                  }}
                />
                 {selectedLanguage == "en-t-i0-und" ? <></> : <p>{Sub_classname}</p>} */}

          </div>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Subject</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setSubjectName(e.target.value)}
                >
                  <option>Select Subject</option>
                  {subject?.filter((wow)=>wow.mediumName == mediumName).map((val, i) => {
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
              <div className="col-md-12">
                <div className="do-sear mt-2">
                  <label htmlFor="">Subject Part</label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setSubjectPart(e.target.value)}
                  >
                    <option value="">Select Subject Part</option>
                    {weightage
                      ?.filter((ele) => subjectName == ele?.Subject)
                      .map((val, i) => {
                        return (
                          <option value={val?.Content}>{val?.Content}</option>
                        );
                      })}
                  </Form.Select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="do-sear mt-2">
                <label>Chapter</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Chapter Name"
                  // onChange={(e) => setChapterName(e.target.value)}
                  onChange={(e) => {
                    if(selectedLanguage == "en-t-i0-unb"){
                      setChapterName(e.target.value);
                    }else onChangeHandler(e.target.value,setChapterName)                   
                  }}
                />
                {selectedLanguage == "en-t-i0-und" ? <></> : <p>{chapterName}</p>}
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
                  AddChapter();
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
            <Modal.Title style={{ color: "white" }}>Edit Chapter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <div className="row">
              <div className="col-md-12">
                <div className="do-sear mt-2">
                  <label htmlFor="">Sub Class</label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setSubjectPart(e.target.value)}
                  >
                    <option value="">Select Sub Class</option>
                    {getaddsubclass.map((val, i) => {
                      return (
                        <option value={val?.subclassName}>
                          {val?.subclassName}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-md-12">
                <div className="do-sear mt-2">
                  <label htmlFor="">Sub Class</label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => e.target.value}
                  >
                    <option value="">Select Sub Class</option>
                    {getaddsubclass.map((val, i) => {
                      return (
                        <option value={val?.subclassName}>
                          {val?.subclassName}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
            </div> */}
            <div className="do-sear mt-2">
                <label>Medium</label>
                <select className="vi_0" onChange={(e)=>setmediumName(e.target.value)}>
                  <option value="">--Select medium--</option>
                  {Medium?.map((item)=>{
                    return(
                      <option value={item?.mediumName}>{item?.mediumName}</option>
                    )
                  })}
                </select>
              
              </div>
          <div className="do-sear mt-2">
            <label>Class</label>
            <select className="vi_0" onChange={(e)=>setClassname(e.target.value)}>
                  <option value="">--Select Class--</option>
                  {getaddsubcla?.filter((ele)=>ele.mediumName==mediumName).map((item)=>{
                    return(
                      <option value={item?.className}>{item?.className}</option>
                    )
                  })}
                </select>
              
            {/* <input
                  type="text"
                  placeholder="Enter Subject"
                  className="vi_0"
                  onChange={(e) => {
                    if(selectedLanguage == "en-t-i0-und"){
                      setClassname(e.target.value)
                    }else onChangeHandler(e.target.value,setClassname)                    
                  }}
                />
                 {selectedLanguage == "en-t-i0-und" ? <></> : <p>{Classname}</p>} */}
          </div>
          <div className="do-sear mt-2">
            <label>Sub-Class</label>
            <select className="vi_0" onChange={(e)=>setSub_classname(e.target.value)}>
                  <option value="">--Select Class--</option>
                  {getaddsubcla?.filter((item)=>item.mediumName == mediumName).map((item)=>{
                    return(
                      <option value={item?.subclassName}>{item?.subclassName}</option>
                    )
                  })}
                </select>
            {/* <input
                  type="text"
                  placeholder="Enter Subject"
                  className="vi_0"
                  onChange={(e) => {
                    if(selectedLanguage == "en-t-i0-und"){
                      setSub_classname(e.target.value)
                    }else onChangeHandler(e.target.value,setSub_classname)                    
                  }}
                />
                 {selectedLanguage == "en-t-i0-und" ? <></> : <p>{Sub_classname}</p>} */}

          </div>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Subject</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setSubjectName(e.target.value)}
                >
                  <option>Select Subject</option>
                  {subject?.filter((wow)=>wow.mediumName == mediumName).map((val, i) => {
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
              <div className="col-md-12">
                <div className="do-sear mt-2">
                  <label htmlFor="">Subject Part</label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setSubjectPart(e.target.value)}
                  >
                    <option value="">Select Subject Part</option>
                    {weightage
                      ?.filter((ele) => subjectName == ele?.Subject)
                      .map((val, i) => {
                        return (
                          <option value={val?.Content}>{val?.Content}</option>
                        );
                      })}
                  </Form.Select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="do-sear mt-2">
                <label>Chapter</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Chapter Name"
                  // onChange={(e) => setChapterName(e.target.value)}
                  onChange={(e) => {
                    if(selectedLanguage == "en-t-i0-unb"){
                      setChapterName(e.target.value);
                    }else onChangeHandler(e.target.value,setChapterName)                   
                  }}
                />
                {selectedLanguage == "en-t-i0-und" ? <></> : <p>{chapterName}</p>}
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
                UpdateChapter();
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
              onClick={DeleteChapter}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminChapter;
