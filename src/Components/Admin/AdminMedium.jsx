import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "../Admin/Admin.css";
import axios from "axios";
import swal from "sweetalert";

const AdminMedium = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  //Post method
  const [mediumName, setmediumName] = useState("");

  const Addmedium = async () => {
    try {
      const config = {
        url: "/admin/addMedium",
        baseURL: "http://localhost:8000/api",
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          mediumName: mediumName,
          authId: admin?._id,
        },
      };

      let res = await axios(config);
      if (res.status == 200) {
        return alert(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const AddMedium = async () => {
  //   try {
  //     if(!mediumName) return  swal({
  //       title: "oops!!",
  //       text: "Please Enter the medium",
  //       icon: "error",
  //       dangerMode: true,
  //     });
  //     const config = {
  //       url: "/admin/addMedium",
  //       method: "post",
  //       baseURL: "http://localhost:8000/api",
  //       headers: {
  //         "content-type": "application/json" ,
  //         Authorization: `Bearer ${token}`,
  //       },
  //       data: {
  //         mediumName: mediumName,
  //         authId: admin?._id,
  //       },
  //     };
  //     let res = await axios (config)
  //       if (res.status == 200) {
  //         swal({
  //           title: "Success!",
  //           text: res.data.success,
  //           icon: "success",
  //           dangerMode: true,
  //         });
  //         getAddMedium();
  //         handleClose();
  //       }

  //   } catch (error) {
  //     console.log(error);
  //     swal({
  //       title: "oops",
  //       text: error.response.data.error,
  //       icon: "error",
  //       dangerMode: true,
  //     });
  //   }
  // };
  //get
  const [Medium, setMedium] = useState([]);
  const [nochangedata, setnochangedata] = useState([]);
  const getAddMedium = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getAllMedium");
      if (res.status == 200) {
        setMedium(res.data.success);
        setnochangedata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //edit
  const EditAddMedium = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/admin/updateMedium",
        method: "put",
        baseURL: "http://localhost:8000/api",
        headers: { "content-type": "application/json" },
      };
      await axios(config).then((res) => {
        if (res.status == 200) {
          swal({
            title: "Yeahh!!",
            text: "Successfully Deleted",
            icon: "success",
            dangerMode: true,
          });
        }
      });
    } catch (error) {
      console.log(error);
      swal({
        title: "oops",
        text: error.response.data.error,
        icon: "error",
        dangerMode: true,
      });
    }
  };
  //delete
  const [Data, setData] = useState("");
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = (item) => {
    setShow2(true);
    setData(item);
  };
  const DeleteMedium = async () => {
    try {
      const config = {
        url: "/admin/deleteMedium" + Data + "/" + admin?._id,
        method: "delete",
        baseURL: "http://localhost:8000/api",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios(config).then((res) => {
        if (res.status == 200) {
          swal({
            title: "Yeahh!!",
            text: "Successfully Deleted",
            icon: "success",
            dangerMode: true,
          });
          getAddMedium();
          handleClose2();
        }
      });
    } catch (error) {
      console.log(error);
      swal({
        title: "oops",
        text: error.response.data.msg,
        icon: "error",
        dangerMode: true,
      });
    }
  };

  //   Row Filter
  const [itempage, setItempage] = useState(5);

  //search filter for about us
  const [searchH, setSearchH] = useState("");
  const handleFilterH = (e) => {
    if (e.target.value != "") {
      setSearchH(e.target.value);
      const filterTableH = nochangedata.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k])?.toLowerCase().includes(e.target.value?.toLowerCase())
        )
      );
      setMedium([...filterTableH]);
    } else {
      setSearchH(e.target.value);
      setMedium([...nochangedata]);
    }
  };
  const [searchTermH, setSearchTermH] = useState("");
  const searchedProductH = Medium.filter((item) => {
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
  const displayPage = Medium.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(Medium.length / productPerPage);
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
          <h2 className="header-c ">Medium</h2>
          <button
            className=" btn"
            style={{ backgroundColor: "#083494", color: "white" }}
            onClick={handleShow}
          >
            Add Medium
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
                  <div>Medium</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {Medium?.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>

                    <td>{item?.mediumName}</td>

                    <td>
                      {" "}
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                          <BiSolidEdit
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
                              handleShow1(item);
                            }}
                          />{" "}
                        </div>
                        <div>
                          <AiFillDelete
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => {
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
          <Modal.Header style={{ backgroundColor: "#26AAE0" }}>
            <Modal.Title style={{ color: "white" }}>Add Medium</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Medium</label>
                <input
                  type="text"
                  placeholder="Enter Medium"
                  className="vi_0"
                  onChange={(e) => setmediumName(e.target.value)}
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
              <Button
                className="mx-2"
                variant="primary"
                onClick={() => {
                  Addmedium();
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
            <Modal.Title style={{ color: "white" }}>Edit Medium</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Medium</label>
                <input
                  type="text"
                  placeholder="Enter Medium"
                  className="vi_0"
                  value={mediumName}
                  onChange={(e) => setmediumName(e.target.value)}
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
            <Button variant="danger" onClick={handleClose1}>
              Close
            </Button>
            <Button
              variant="primary"
              style={{ backgroundColor: "#FAFA33" }}
              onClick={(e) => {
                EditAddMedium();
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
            <Button
              variant="primary"
              onClick={() => {
                DeleteMedium();
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

export default AdminMedium;
