import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "../Admin/Admin.css";
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";

const AdminBoard = () => {
  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
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

  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");
  // const handleChange = (e, editor) => {
  //   const data = editor.getData();
  // setAbDescription(data);
  // };
  // Post method Integration
  const [boardName, setboardName] = useState("");
  const AddBoradname = async () => {
    try {
      if (!boardName)
        return swal({
          title: "Opps!",
          text: "Please Enter boardName ",
          icon: "error",
          button: "Try Again!",
        });
      const config = {
        url: "/admin/addBoard",
        method: "post",
        baseURL: "http://localhost:8000/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          boardName: boardName,
          authId: admin?._id,
        },
      };
      const response = await axios(config);

      if (response.status === 200) {
        swal({
          title: "Success!",
          text: response.data.success,
          icon: "success",
          button: "OK!",
        });
        handleClose();
        getallboardname();
      }
    } catch (error) {
      console.error(error);
      swal({
        title: "Opps!",
        text: error.response.data.error,
        icon: "error",
        button: "Try Again!",
      });
    }
  };
  // get method
  const [getboardname, setboardname] = useState([]);
  const getallboardname = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getAllBoard");
      if (res.status == 200) {
        setboardname(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // edit method
  const [updateboardname, setupdateboardname] = useState("");

  const updateallboardname = async () => {
    try {
      const config = {
        url: "/admin/updateBoard",
        method: "put",
        baseURL: "http://localhost:8000/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          boardName: boardName,
          authId: admin?._id,
          id: updateboardname,
        },
      };
      const res = await axios(config);
      if (res.status == 200) {
        handleClose1();
        getallboardname();
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
        button: "OK!",
      });
    }
  };
  // delete method
  const [deleteA, setDeleteA] = useState("");
  const deleteboard = async () => {
    try {
      const config = {
        url: "/admin/deleteBoard/" + deleteA + "/" + admin?._id,
        baseURL: "http://localhost:8000/api",
        method: "delete",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        handleClose2();
        getallboardname();
        return swal({
          title: "Delete!",
          text: res.data.success,
          icon: "warning",
          button: "OK!",
        });
      }
    } catch (error) {}
  };
  useEffect(() => {
    getallboardname();
  }, []);
  console.log(getboardname);

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
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Board</h2>
          <button
            className=" btn"
            style={{ backgroundColor: "#083494", color: "white" }}
            onClick={handleShow}
          >
            Add Board
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
                  <div>Name Of The Board</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {getboardname?.map((val, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <p>{val?.boardName}</p>
                    </td>

                    <td>
                      {" "}
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                          <BiSolidEdit
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              handleShow1();
                              setupdateboardname(val?._id);
                              setboardName(val?.boardName);
                            }}
                          />{" "}
                        </div>
                        <div>
                          <AiFillDelete
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              setDeleteA(val?._id);
                              handleShow2(val?._id);
                            }}
                          />
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>Add Partners</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Name of the Board</label>
                <input
                  type="text"
                  placeholder="Enter Board"
                  className="vi_0"
                  onChange={(e) => {
                    setboardName(e.target.value);
                  }}
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
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
              <Button
                className="mx-2"
                variant="primary"
                onClick={() => {
                  AddBoradname();
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
        >
          <Modal.Header style={{ backgroundColor: "rgb(40 167 223)" }}>
            <Modal.Title style={{ color: "white" }}>Edit Board</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Name of the Board</label>
                <input
                  type="text"
                  placeholder="Enter Board"
                  className="vi_0"
                  value={boardName}
                  onChange={(e) => {
                    setboardName(e.target.value);
                  }}
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
            <Button variant="success" onClick={handleClose1}>
              Close
            </Button>
            <Button
              variant="primary"
              style={{ backgroundColor: "#FAFA33" }}
              onClick={() => {
                updateallboardname();
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
            <Button variant="primary" onClick={deleteboard}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AdminBoard;
