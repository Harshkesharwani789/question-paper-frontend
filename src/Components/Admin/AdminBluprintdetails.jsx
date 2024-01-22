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
import "../Admin/Admin.css";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AdminBlueprintdetails = () => {
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
  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 5;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = data.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(data.length / productPerPage);
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
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Blue Print Details</h2>
          <button
            className=" btn"
            style={{ backgroundColor: "#083494", color: "white" }}
            onClick={() => {
              navigate("/adminblueprint");
            }}
          >
            Add Blue Print Details
          </button>
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
                <th>Date</th>
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
                  <div>View</div>
                </th>
                <th>
                  {" "}
                  <div>Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td>CBSE</td>

                <td>English</td>
                <td></td>
                <td></td>
                <td>Mathematics</td>
                <td>
                  <FaEye
                    color="blue"
                    onClick={() => {
                      navigate("/adminblueprintdetailsview");
                    }}
                  />
                </td>
                <td>
                  <div style={{ display: "flex", gap: "20px" }}>
                  <div>
                      <BiSolidEdit
                        className="text-success"
                        style={{ cursor: "pointer", fontSize: "20px" }}
                        onClick={() => {navigate('/admineditblueprint')}}
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
              </tr>
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
        <Modal show={show1} onHide={handleClose1}>
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
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton style={{ backgroundColor: "orange" }}>
            <Modal.Title style={{ color: "white" }}>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                <p className="fs-1" style={{ color: "red" }}>
                  Are You Sure ?
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary">Delete</Button>
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
