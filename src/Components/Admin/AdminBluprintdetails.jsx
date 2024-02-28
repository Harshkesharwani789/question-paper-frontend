import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const AdminBlueprintdetails = () => {
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
  // get method   for blue print


  const [blueprint, setblueprint] = useState([]);
  const getallblueprint = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllBLUEPRINTs/" + admin?._id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status == 200) {
        setblueprint(res.data.success);
      }
    } catch (error) {
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        dangerMode: true,
      });
      console.log(error);
    }
  };
  useEffect(() => {
    getallblueprint();
  }, []);
  console.log("blueprint check now", blueprint);

  const [deleteId, setdeleteId] = useState("");

  const makedeleteblueprint = async () => {
    try {
      let data = await axios.delete(
        "http://localhost:8000/api/admin/deleteBLUEPRINT/" +
          deleteId +
          "/" +
          admin?._id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.status == 200) {
        swal({
          title: "Success!",
          text: data.data.success,
          icon: "success",
          dangerMode: true,
        });
        handleClose2();
        getallblueprint();
      }
    } catch (error) {
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        dangerMode: true,
      });
      console.log(error);
    }
  };
  // Pagination
  // const [pageNumber, setPageNumber] = useState(0);
  // const productPerPage = 5;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = data.slice(visitedPage, visitedPage + productPerPage);
  // const pageCount = Math.ceil(data.length / productPerPage);
  const [currenpage, setCurrentpage] = useState(1);
  const recordsperpage = 10;
  const lastIndex = currenpage * recordsperpage;
  const firstIndex = lastIndex - recordsperpage;
  const records = blueprint.slice(firstIndex, lastIndex);
  const npages = Math.ceil(blueprint.length / recordsperpage);
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
  const uniqueClassNamesSet = new Set(
    getaddsubclass.map((item) => item.className)
  );
  const uniqueClassNamesArray = Array.from(uniqueClassNamesSet);
  useEffect(() => {
    getaddsubclasss();
  }, []);
  const [Classname, setClassname] = useState("");

  const makeApprovedAndHold=async(id, isBlock)=>{
    try {
      const config={
        url: "/admin/makeBlockAndUnblockBLUEPRINTs",
        baseURL: "http://localhost:8000/api",
        method: "put",
        headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
        data:{
          id, isBlock,
          authId:admin?._id
        }
      }
      let res=await axios(config);
      if(res.status==200){
        swal({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          dangerMode: true,
        });
        getallblueprint();
      }
    } catch (error) {
      console.log(error);
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
           
          />
         
        </div>
      </div>
      <div className="customerhead p-2 mt-4">
        <h2 className="header-c ">Blue Print Details</h2>
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-4">
              <label htmlFor="">Select Class</label>
              <Form.Select
                aria-label="Default select example"
                // onChange={(e) => {
                //   // setClasstype(e.target.value);
                //   setClassname(e.target.value);
                // }}
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
                // onChange={(e) => {
                //   setSub_classname(e.target.value);
                // }}
              >
                <option value="">Select Sub Class</option>
                {getaddsubclass
                  ?.filter((ele) => ele.className === blueprint.className)
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
              <button
                className="admin-add-btn mt-4"
                style={{ float: "right" }}
                onClick={() => {
                  navigate("/adminblueprint");
                }}
              >
                Add Blue Print
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {/* <div className="col-lg-2 " style={{ width: "fit-content" }}>
            <label>Select :</label>
            <Form.Select
              aria-label="Default select example"
              style={{ height: "35px" }}
              value={itempage}
              onChange={(e) => setItempage(e.target.value)}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={15}>20</option>
              <option value={15}>25</option>
            </Form.Select>
          </div> */}

          {/* <div className="col-lg-2">
            <label>From :</label>
            <Form.Control
              type="date"
              aria-describedby="basic-addon1"
              value={startDate}
              onChange={(e) => setstartDate(e.target.value)}
            />
          </div> */}

          {/* <div className="col-lg-2">
            <label>To :</label>
            <Form.Control
              type="date"
              aria-describedby="basic-addon1"
              value={endDate}
              onChange={(e) => setendDate(e.target.value)}
            />
          </div> */}

          {/* <div className="col-lg-2">
            <button className="btn btn-primary" onClick={filterData}>
              Submit
            </button>
          </div> */}
        </div>

        <div className="mb-3">
          <Table
            responsive
            bordered
            style={{ width: "-webkit-fill-available" }}
          >
            <thead style={{ backgroundColor: "orange" }}>
              <tr>
                <th>S.No</th>
                <th>Blueprint Id</th>
                <th>
                  <div>Board</div>
                </th>
                <th>
                  <div>Medium</div>
                </th>
                <th>
                  <div>Class</div>
                </th>
                <th>
                  <div>Sub-Class</div>
                </th>
                <th>
                  {" "}
                  <div>Subject</div>
                </th>
                <th>
                  {" "}
                  <div>Price</div>
                </th>
                <th>
                  <div>View</div>
                </th>
                <th>
                  <div>Status</div>
                </th>
                <th>
                  {" "}
                  <div>Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {records?.map((val, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{val?.blueprintId}</td>
                    <td>{val?.board}</td>
                    <td>{val?.medium}</td>
                    <td>{val?.className}</td>
                    <td>{val?.SubClassName}</td>
                    <td>{val?.subjects}</td>
                    <td>{val?.price?.toFixed(2)}</td>
                    <td>
                      <Link
                        to={`/adminblueprintdetailsview/${val?._id}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <FaEye color="blue" />
                      </Link>
                    </td>
                    <td>{val.isBlock==true ? <span style={{color:"green"}}>Approved</span>:<span style={{color:"red"}}>Holded</span>}</td>
                    <td>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                          <BiSolidEdit
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              // navigate("/admineditblueprint");
                              navigate(`/admineditblueprint`, { state: val });
                            }}
                          />
                        </div>
                        <div>
                          <AiFillDelete
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              setdeleteId(val?._id);
                              handleShow2();
                            }}
                          />{" "}
                        </div>
                        <div>
                          {val?.isBlock==false ? (<button type="button" class="btn btn-success" onClick={()=>makeApprovedAndHold(val?._id,true)}>Approved</button>):(<button type="button" class="btn btn-danger" onClick={()=>makeApprovedAndHold(val?._id,false)}>Hold</button>)}
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
        {/* <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header style={{ backgroundColor: "orange" }}>
            <Modal.Title style={{ color: "white" }}>
              View Blue Print Details{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <div className="do-sear mt-2 d-flex" style={{ gap: "10px" }}>
                  <label htmlFor="" className="fw-bold">
                    Blueprint Id:
                  </label>{" "}
                  <span>
                    <p className="fs-6 ">GRM15454</p>
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear mt-2 d-flex" style={{ gap: "10px" }}>
                  <label htmlFor="" className="fw-bold">
                    Board:
                  </label>{" "}
                  <span>
                    <p className="fs-6 mt-1">CBSE</p>
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear mt-2 d-flex" style={{ gap: "10px" }}>
                  <label htmlFor="" className="fw-bold">
                    Medium:
                  </label>{" "}
                  <span>
                    <p className="fs-6 mt-1 ">English</p>
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear mt-2 d-flex" style={{ gap: "10px" }}>
                  <label htmlFor="" className="fw-bold">
                    Class:
                  </label>{" "}
                  <span>
                    <p className="fs-6 mt-1 ">V</p>
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear mt-2 d-flex" style={{ gap: "10px" }}>
                  <label htmlFor="" className="fw-bold">
                    Sub-Class:
                  </label>{" "}
                  <span>
                    <p className="fs-6 ">Primary</p>
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="do-sear mt-2 d-flex" style={{ gap: "10px" }}>
                  <label htmlFor="" className="fw-bold">
                    Subject:
                  </label>{" "}
                  <span>
                    <p className="fs-6 ">Mathematics</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="do-sear mt-2"></div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button className="mx-2" variant="primary">
                Add
              </Button>
            </div>
          </Modal.Footer>
        </Modal> */}

        {/* Edit Package modal */}
        <Modal show={show1} onHide={handleClose1} style={{ zIndex: "99999" }}>
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
            <Button variant="danger" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" style={{ backgroundColor: "#FAFA33" }}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
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
              onClick={makedeleteblueprint}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={show3} onHide={handleClose3}>
          <Modal.Header closeButton style={{ backgroundColor: "orange" }}>
            <Modal.Title style={{ color: "white" }}>Images</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                <img
                  src="/bg.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                />
                <img
                  src="/bg.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                />
                <img
                  src="/bg.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                />
                <img
                  src="/bg.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                />
                <img
                  src="/bg.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AdminBlueprintdetails;
