import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "../Admin/Admin.css";
import axios from "axios";
import swal from "sweetalert";

const AdminExam = () => {
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
  const [NameExamination, setNameExamination] = useState("");
  const AddNameExamination = async () => {
    try {
      let config = {
        url: "/admin/addNameExamination",
        method: "post",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          NameExamination: NameExamination,
          authId: admin?._id,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose();
        return swal({
          title: "Yeah!",
          text: res.data.error,
          icon: "success",
          dangerMode: true,
        });
      }
    } catch (error) {
      console.log(error);
      return swal({
        title: "oops!",
        text: error.response.data.error,
        icon: "error",
        dangerMode: true,
      });
    }
  };
  //get
  const [NameExam, setNameExam] = useState([]);
  const [nochangedata,setnochangedata] = useState([]);
  const getNameExamination = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllNameExamination"
      );
      if (res.status == 200) {
        setNameExam(res.data.success);
        setnochangedata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("NameExam",NameExam);
  //edit
  const [updateNameExam, setupdateNameExam] = useState("");
  const EditNameExam = async () => {
    try {
      let config = {
        url: "/admin/updateNameExamination",
        method: "put",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          NameExamination: NameExamination,
          authId: admin?._id,
          id: updateNameExam,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose1();
        getNameExamination();
        return swal({
          title: "Yeah!!",
          text: res.data.success,
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {
      console.log(error);
      return swal({
        title: "oops!",
        text: error.response.data.error,
        icon: "error",
        button: "Ok!",
      });
    }
  };
  //delete
  const [deleteNameExam, setdeleteExamName] = useState("");
  const DeleteNameExam = async () => {
    try {
      const config = {
        url:
          "/admin/deleteNameExamination/" + deleteNameExam + "/" + admin?._id,
        method: "delete",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-type": "application-data",
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose2();
        getNameExamination();
        return swal({
          title: "Yeah!",
          text: "Successfully Deleted",
          icon: "success",
          button: "Ok!",
        });
      }
    } catch (error) {
      console.log(error);
      return swal({
        title: "oops!",
        text: error.response.data.error,
        icon: "error",
        button: "Ok!",
      });
    }
  };
  //   Row Filter
  const [itempage, setItempage] = useState(5);

  const [searchH, setSearchH] = useState("");
  const handleFilterH = (e) => {
    if (e.target.value != "") {
      setSearchH(e.target.value);
      const filterTableH = nochangedata.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k])?.toLowerCase().includes(e.target.value?.toLowerCase())
        )
      );
      setNameExam([...filterTableH]);
    } else {
      setSearchH(e.target.value);
      setNameExam([...nochangedata]);
    }
  };
  const [searchTermH, setSearchTermH] = useState("");
  const searchedProductH = NameExam.filter((item) => {
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
  const displayPage = NameExam.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(NameExam.length / productPerPage);
  useEffect(() => {
    getNameExamination();
  }, []);

// newpagination 
  const [data1, setData1] = useState([]);
  const [Products, setProducts] = useState();

  const [currenpage, setCurrentpage] = useState(1);
  const recordsperpage = 6;
  const lastIndex = currenpage * recordsperpage;
  const firstIndex = lastIndex - recordsperpage;
  const records = NameExam.slice(firstIndex, lastIndex);
  const npages = Math.ceil(NameExam.length / recordsperpage);
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
          <h2 className="header-c ">Name Of Examination</h2>
          <button
            className=" btn"
            style={{ backgroundColor: "#138808", color: "white" }}
            onClick={handleShow}
          >
            Add Exam
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
                  <div>Name Of Examination</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {records?.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1 + visitedPage}</td>

                    <td>{item?.NameExamination}</td>

                    <td>
                      {" "}
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                          <BiSolidEdit
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              handleShow1();
                              setupdateNameExam(item);
                              setNameExamination(item?.NameExamination);
                            }}
                          />{" "}
                        </div>
                        <div>
                          <AiFillDelete
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              setdeleteExamName(item?._id);
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
                  <li className="next-prev"  onClick={() => {
                    nextpage();
                  }}>&gt; </li>
                </span>
              </li>
            </ul>
          </nav>
        </div>
        {/* Add Package modal */}
        <Modal show={show} onHide={handleClose} style={{zIndex:"99999"}}>
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>Add Exam</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Name Of Examination</label>
                <input type="text" placeholder="Enter Name" className="vi_0" 
                onChange={(e)=>setNameExamination(e.target.value)}/>
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
            <Button className="mx-2" variant="secondary"
              onClick={handleClose}>
                Close
                
              </Button>
              <Button className="mx-2" variant="" style={{backgroundColor:"green", color:"white"}}
              onClick={()=>{
                AddNameExamination();
              }}>
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
          <Modal.Header closeButton style={{ backgroundColor: "rgb(40 167 223)" }}>
            <Modal.Title style={{ color: "white" }}>Edit Exam</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Name Of Examination</label>
                <input type="text" placeholder="Enter Name" className="vi_0" 
                value={NameExamination}
                onChange={(e)=>setNameExamination(e.target.value)}/>
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
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="" className="modal-add-btn"
            onClick={()=>{
              EditNameExam();
            }}>
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
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="" className="modal-add-btn"
            onClick={()=>{
              DeleteNameExam();
            }}>Delete</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AdminExam;
