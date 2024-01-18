import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table, Image } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import "../Admin/Admin.css";

const AdminClass = () => {
  const [Class, setClass] = useState(true);
  const [Subclass, setSubclass] = useState(false);

  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();
  const [show3, setShow3] = useState();
  const [show4, setShow4] = useState();
  const [show5, setShow5] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [View, setView] = useState({});
  const [show100, setShow100] = useState(false);
  const handleClose100 = () => setShow100(false);
  const handleShow100 = () => setShow100(true);
  const [show101, setShow101] = useState(false);
  const handleClose101 = () => setShow101(false);
  const handleShow101 = () => setShow101(true);
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
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="ad-b mt-4 mb-4 col-md-12">
            <button
              className=" btn"
              style={{ backgroundColor: "#083494", color: "white" }}
              onClick={() => {
                setClass(true);
                setSubclass(false);
              }}
            >
              Class
            </button>
            &nbsp; &nbsp;
            <button
              className=" btn"
              style={{ backgroundColor: "#26AAE0", color: "white" }}
              onClick={() => {
                setClass(false);
                setSubclass(true);
              }}
            >
              Subclass
            </button>
          </div>
        </div>
      </div>
      {Class ? (
        <>
          <div className="customerhead p-2">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="header-c ">Class</h2>
              <button
                className=" btn"
                style={{ backgroundColor: "#083494", color: "white" }}
                onClick={handleShow}
              >
                Add Class
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
                      <div>Class</div>
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td></td>

                    <td>
                      {" "}
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                          <BiSolidEdit
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              handleShow1();
                            }}
                          />{" "}
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
          </div>
        </>
      ) : (
        <>
          {Subclass ? (
            <>
              <div className="customerhead p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="header-c ">Subclass </h2>
                  <button
                    className=" btn"
                    style={{ backgroundColor: "#083494", color: "white" }}
                    onClick={handleShow3}
                  >
                    Add Subclass
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
                          <div>Class</div>
                        </th>
                        <th>
                          <div>Subclass</div>
                        </th>

                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>

                        <td>
                          {" "}
                          <div style={{ display: "flex", gap: "20px" }}>
                            <div>
                              <BiSolidEdit
                                className="text-success"
                                style={{ cursor: "pointer", fontSize: "20px" }}
                                onClick={() => {
                                  handleShow4();
                                }}
                              />{" "}
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
                    onClick={() =>
                      setPageNumber((prev) => Math.max(prev - 1, 0))
                    }
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
                  <Pagination.Last
                    onClick={() => setPageNumber(pageCount - 1)}
                  />
                </Pagination>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
      {/* Add Accomodation modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
          <Modal.Title style={{ color: "white" }}>Add Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="do-sear mt-2">
            <label>Class</label>
            <input type="text" className="vi_0" placeholder="Enter Class " />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            <Button className="mx-2" variant="primary">
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Edit Indian modal */}
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
          <Modal.Title style={{ color: "white" }}>Edit Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="do-sear mt-2">
            <label>Class</label>
            <input type="text" className="vi_0" placeholder="Enter Class" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" style={{ backgroundColor: "#26AAE0" }}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#083494" }}>Warning</Modal.Title>
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
          <Button variant="btn btn-secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary">Delete</Button>
        </Modal.Footer>
      </Modal>

      {/* Add Transport modal */}
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
          <Modal.Title style={{ color: "white" }}>Add Subclass </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="do-sear mt-2">
            <label>Class</label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="do-sear mt-2">
            <label>Subclass</label>
            <input type="text" className="vi_0" placeholder="Enter Subclass" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            <Button className="mx-2" variant="primary">
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Edit Transport modal */}
      <Modal
        show={show4}
        onHide={handleClose4}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
          <Modal.Title style={{ color: "white" }}>Edit Subclass</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="do-sear mt-2">
            <label>Class</label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="do-sear mt-2">
            <label>Subclass</label>
            <input type="text" className="vi_0" placeholder="Enter Subclass" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" style={{ backgroundColor: "#26AAE0" }}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show5}
        onHide={handleClose5}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Warning</Modal.Title>
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
          <Button variant="danger" onClick={handleClose5}>
            Close
          </Button>
          <Button variant="primary">Delete</Button>
        </Modal.Footer>
      </Modal>

      {/* Accomodations images modal */}
      {/* <Modal show={show100} onHide={handleClose100}>
      <Modal.Header closeButton>
        <Modal.Title>Images</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-3">
              <Image
                src=""
                alt="pic"
                style={{ width: "180px", height: "150px" }}
              />
            </div>
            <div className="col-md-6 p-3">
              <Image
                src=""
                alt="pic"
                style={{ width: "180px", height: "150px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-3">
              <Image
                src=""
                alt="pic"
                style={{ width: "180px", height: "150px" }}
              />
            </div>
            <div className="col-md-6 p-3">
              <Image
                src=""
                alt="pic"
                style={{ width: "180px", height: "150px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 p-3">
              <Image
                src=""
                alt="pic"
                style={{ width: "180px", height: "150px" }}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose100}>
          Close
        </Button>
      </Modal.Footer>
    </Modal> */}
      {/* Transport images modal */}
      {/* <Modal show={show101} onHide={handleClose101}>
      <Modal.Header closeButton>
        <Modal.Title>Images</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-3">
              <Image
                src=""
                alt="pic"
                style={{ width: "180px", height: "150px" }}
              />
            </div>
            <div className="col-md-6 p-3">
              <Image
                src=""
                alt="pic"
                style={{ width: "180px", height: "150px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-3">
              <Image
                src=""
                alt="pic"
                style={{ width: "180px", height: "150px" }}
              />
            </div>
            <div className="col-md-6 p-3">
              <Image
                src=""
                alt="pic"
                style={{ width: "180px", height: "150px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 p-3">
              <Image
                src=""
                alt="pic"
                style={{ width: "180px", height: "150px" }}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose101}>
          Close
        </Button>
      </Modal.Footer>
    </Modal> */}
    </div>
  );
};

export default AdminClass;
