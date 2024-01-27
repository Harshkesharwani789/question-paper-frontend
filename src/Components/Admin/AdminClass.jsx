import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table, Image } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import "../Admin/Admin.css";
import axios from "axios";
import swal from "sweetalert";

const AdminClass = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");
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
  // post method add class
  const [className, setclassName] = useState("");
  const classNamee = async () => {
    try {
      if (!className) {
        return swal({
          title: "Opps!",
          text: "Please Enter boardName ",
          icon: "error",
          button: "Try Again!",
        });
      }

      const config = {
        url: "/admin/addClass",
        method: "post",
        baseURL: "http://localhost:8000/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          className: className,
          authId: admin?._id,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose();
        return swal({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Error!",
        text: error.response.data.error,
        icon: "error",
        button: "Try Again!",
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
  // update method add class
  const [editclassname, seteditclassname] = useState("");
  const updateclassname = async () => {
    try {
      const config = {
        url: "admin/updateClass",
        method: "put",
        baseURL: "http://localhost:8000/api/",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          className: className,
          id: editclassname,
          authId: admin?._id,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleShow1();
        getallclassname();
        return swal({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Opps!",
        text: error.response.data.error,
        icon: "error",
        button: "Try Again!",
      });
    }
  };
  // delete method add class
  const [deleteclassname, setdeleteclassname] = useState("");
  const deleteallclassname = async () => {
    try {
      const config = {
        url: "/admin/deleteClass/" + deleteclassname + "/" + admin?._id,
        method: "delete",
        baseURL: "http://localhost:8000/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        return swal({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Opps!",
        text: error.response.data.error,
        icon: "error",
        button: "OK!",
      });
    }
  };
  // post method for sub classname
  const [classsname, setclasssname] = useState("");
  const [subclasssname, setsubclasssname] = useState("");
  const subclassnamee = async () => {
    try {
      if (!classsname) {
        swal({
          title: "Opps!",
          text: "Please select Classname",
          icon: "error",
          button: "Try Again!",
        });
      }
      if (!subclasssname) {
        swal({
          title: "Opps!",
          text: "Please select Classname",
          icon: "error",
          button: "Try Again!",
        });
      }
      const config = {
        url: "/admin/addSubClass",
        method: "post",
        baseURL: "http://localhost:8000/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          className: classsname,
          subclassName: subclasssname,
          authId: admin?._id,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose();
        getaddsubclasss();
        return swal({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Opps!",
        text: error.response.data.error,
        icon: "error",
        button: "Try Again!",
      });
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
  // update method for subclass
  const [editsubclass, seteditsubclass] = useState("");
  const editsubbclass = async () => {
    try {
      const config = {
        url: "/admin/updateSubClass",
        baseURL: "http://localhost:8000/api",
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          className: classsname,
          subclassName: subclasssname,
          authId: admin?._id,
          id: editsubclass,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        handleClose4();
        getaddsubclasss();
        return swal({
          title: "Success!",
          text: res.data.success,
          icon: "success",
          button: "OK!",
        });
      }
    } catch (error) {
      console.log(error);
      return swal({
        title: "Opps!",
        text: error.response.data.error,
        icon: "success",
        button: "OK!",
      });
    }
  };
  // delete method
  const [deletesubclass, setdeletesubclass] = useState("");
  const deletesubclasss = async () => {
    try {
      const config = {
        url: "/admin/deleteSubClass/" + deletesubclass + "/" + admin?._id,
        method: "delete",
        baseURL: "http://localhost:8000/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios(config);
      if (res.status == 200) {
        handleClose5();
        getaddsubclasss();
        return swal({
          title: "Deteded!",
          text: res.data.success,
          icon: "warning",
          button: "OK!",
        });
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Opps!",
        text: error.response.data.error,
        icon: "error",
        button: "OK!",
      });
    }
  };
  useEffect(() => {
    getaddsubclasss();
  }, []);
  console.log(getaddsubclass);

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
  useEffect(() => {
    getallclassname();
  }, []);
  console.log(getclassname);
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
                  {getclassname?.map((val, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{val?.className}</td>

                        <td>
                          {" "}
                          <div style={{ display: "flex", gap: "20px" }}>
                            <div>
                              <BiSolidEdit
                                className="text-success"
                                style={{ cursor: "pointer", fontSize: "20px" }}
                                onClick={() => {
                                  handleShow1();
                                  seteditclassname(val?._id);
                                  setclassName(val?.className);
                                }}
                              />{" "}
                            </div>
                            <div>
                              <AiFillDelete
                                className="text-danger"
                                style={{ cursor: "pointer", fontSize: "20px" }}
                                onClick={() => {
                                  handleShow2(val?._id);
                                  setdeleteclassname(val?._id);
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
                      {getaddsubclass?.map((val, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{val?.className}</td>
                            <td>{val?.subclassName}</td>

                            <td>
                              {" "}
                              <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                  <BiSolidEdit
                                    className="text-success"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "20px",
                                    }}
                                    onClick={() => {
                                      handleShow4();
                                      seteditsubclass(val?._id);
                                      setclasssname(val?.className);
                                      setsubclasssname(val?.subclassName);
                                    }}
                                  />{" "}
                                </div>
                                <div>
                                  <AiFillDelete
                                    className="text-danger"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "20px",
                                    }}
                                    onClick={() => {
                                      handleShow5(val?._id);
                                      setdeletesubclass(val?._id);
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
      <Modal show={show} onHide={handleClose} style={{zIndex:"99999"}}>
        <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
          <Modal.Title style={{ color: "white" }}>Add Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="do-sear mt-2">
            <label>Class</label>
            <input
              type="text"
              className="vi_0"
              placeholder="Enter Class Name "
              onChange={(e) => {
                setclassName(e.target.value);
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            {/* <Button
              className="mx-2"
              variant="primary"
              onClick={() => {
                classNamee();
              }}
            > */}
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
            <Button
              className="mx-2"
              variant="primary"
              onClick={() => {
                classNamee();
              }}
            >
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
        style={{zIndex:"99999"}}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
          <Modal.Title style={{ color: "white" }}>Edit Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="do-sear mt-2">
            <label>Class</label>
            <input
              type="text"
              className="vi_0"
              placeholder="Enter Class"
              value={className}
              onChange={(e) => {
                setclassName(e.target.value);
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button
            variant="primary"
            style={{ backgroundColor: "#26AAE0" }}
            
          > */}
          <Button variant="success" onClick={handleClose1}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "#26AAE0" }}
            onClick={() => {
              updateclassname();
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
          <Button variant="success" onClick={handleClose2}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteallclassname();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Transport modal */}
      <Modal show={show3} onHide={handleClose3} style={{zIndex:"99999"}}> 
        <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
          <Modal.Title style={{ color: "white" }}>Add Subclass </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="do-sear mt-2">
            <label>Class</label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setclasssname(e.target.value);
              }}
            >
              <option>Select Class</option>
              {getclassname?.map((val, i) => {
                return (
                  <option value={val?.className} key={i}>
                    {val?.className}
                  </option>
                );
              })}
            </Form.Select>
          </div>
          <div className="do-sear mt-2">
            <label>Subclass</label>
            <input
              type="text"
              className="vi_0"
              placeholder="Enter Subclass"
              onChange={(e) => {
                setsubclasssname(e.target.value);
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
          <Button
              className="mx-2"
              variant="success"
              onClick={handleClose3}
            >
              Close
            </Button>
            <Button
              className="mx-2"
              variant="primary"
              onClick={() => {
                subclassnamee();
              }}
            >
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
        style={{zIndex:"99999"}}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
          <Modal.Title style={{ color: "white" }}>Edit Subclass</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="do-sear mt-2">
            <label>Class</label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setclasssname(e.target.value);
              }}
            >
              <option value={classsname}>Select Class</option>
              {getclassname?.map((val, i) => {
                return (
                  <option value={val?.className} key={i}>
                    {val?.className}
                  </option>
                );
              })}
            </Form.Select>
          </div>
          <div className="do-sear mt-2">
            <label>Subclass</label>
            <input
              type="text"
              className="vi_0"
              placeholder="Enter Subclass"
              value={subclasssname}
              onChange={(e) => {
                setsubclasssname(e.target.value);
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button
              className="mx-2"
              variant="success"
              onClick={handleClose4}
            >
              Close
            </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "#26AAE0" }}
            onClick={() => {
              editsubbclass();
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show5}
        onHide={handleClose5}
        backdrop="static"
        keyboard={false}
        style={{zIndex:"99999"}}

      >
        <Modal.Header closeButton>
          <Modal.Title className="text-light">Warning</Modal.Title>
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
          <Button variant="success" onClick={handleClose5}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deletesubclasss();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminClass;
