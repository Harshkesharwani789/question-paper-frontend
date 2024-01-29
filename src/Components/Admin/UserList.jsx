import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import "../Admin/Admin.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import swal from "sweetalert";

const UserList = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
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

  
 
 //get
 const [Teacher,setTeacher] = useState([]);
 const getAllTeacher=async()=>{
  try {
    let res=await axios.get("http://localhost:8000/api/admin/getAllTeachers")
    if(res.status===200){
      setTeacher(res.data.success);
    }
  } catch (error) {
    console.log(error);
  }
 }
  
  //delete
  const [delteacher, setdelteacher] = useState("");
  const DeleteTeacher = async () => {
    try {
      const config = {
        url: "/teacher/deleteTeacher/" + delteacher + "/" + user?._id,
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
        getAllTeacher();
        return swal({
          title: "Delete!",
          text: res.data.success,
          icon: "warning",
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
  const displayPage = Teacher.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(Teacher.length / productPerPage);

  useEffect(() => {
    getAllTeacher();
  }, []);

  console.log("Teacher",Teacher)

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
          <h2 className="header-c ">User List</h2>
          {/* <button
            className=" btn"
            style={{ backgroundColor: "#083494", color: "white" }}
            onClick={handleShow}
          >
            Add UserList
          </button> */}
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
                  <div>Registration ID</div>
                </th>
                <th>
                  <div>Name</div>
                </th>
                <th>
                  <div>Registration Date</div>
                </th>
                <th>
                  <div>Mobile Number</div>
                </th>
                <th>
                  <div>Email Id</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {Teacher?.map((item, i) => {
                return (
                  <>
                  <tr >
                    <td>{i + 1}ere</td>
                    <td>{item?.teacherId}werwr</td>
                    <td>
                      {item?.FirstName} {item?.LastName}werwe
                    </td>
                    <td>{item?.Mobile}werwer</td>
                    <td>{item?.Email}werwer</td>

                    <td>
                      {" "}
                      <div style={{ display: "flex", gap: "20px" }}>
                      
                        <div>
                          <AiFillDelete
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              setdelteacher(item?._id);
                              handleShow2(item?._id);
                            }}
                          />{" "}
                        </div>
                      </div>
                    </td>
                  </tr>
                  </>
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
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>Add UserList</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Registration ID</label>
                <input
                  type="text"
                  placeholder="Enter Registration ID"
                  className="vi_0"
                  onChange={(e) => setteacherId(e.target.value)}
                />
              </div>
              <div className="do-sear mt-2">
                <label>Registration Date</label>
                <input
                  type="text"
                  placeholder="Enter Registration Date"
                  className="vi_0"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="do-sear mt-2">
                <label>Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="vi_0"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="do-sear mt-2">
                <label>Email ID</label>
                <input
                  type="text"
                  placeholder="Enter Email Id"
                  className="vi_0"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* <div className="do-sear mt-2">
        <label>Title 2</label>
        <input type="text" placeholder="Enter Title 2" className="vi_0" />
      </div>

            
           
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button
                className="mx-2"
                variant="primary"
                // onClick={() => {
                //   AddTeacher();
                // }}
              >
                Add
              </Button>
            </div>
          </Modal.Footer>
        </Modal> */}

        {/* Edit Package modal */}
        {/* <Modal
          show={show1}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
          style={{zIndex:"99999"}}
        >
          <Modal.Header style={{ backgroundColor: "rgb(40 167 223)" }}>
            <Modal.Title style={{ color: "white" }}>Edit UserList</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Registration ID</label>
                <input
                  type="text"
                  placeholder="Enter Registration ID"
                  className="vi_0"
                  onChange={(e) => setteacherId(e.target.value)}
                />
              </div>
              <div className="do-sear mt-2">
                <label>Registration Date</label>
                <input
                  type="text"
                  placeholder="Enter Registration Date"
                  className="vi_0"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="do-sear mt-2">
                <label>Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="vi_0"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="do-sear mt-2">
                <label>Email ID</label>
                <input
                  type="text"
                  placeholder="Enter Email Id"
                  className="vi_0"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* <div className="do-sear mt-2">
        <label>Title 2</label>
        <input type="text" placeholder="Enter Title 2" className="vi_0" />
      </div> 

           
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant=""
              className="btn btn-secondary"
              onClick={handleClose1}
            >
              Close
            </Button>
            <Button
              variant="primary"
              style={{ backgroundColor: "#FAFA33" }}
              // onClick={() => {
              //   UpdateTeacher();
              // }}
            >
              Edit
            </Button>
          </Modal.Footer>
        </Modal> */}
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
                DeleteTeacher();
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default UserList;
