import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "../Admin/Admin.css";
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";

const AdminObjectives = () => {
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

  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  // post method
  const [Objectivesname, setObjectivesname] = useState("");
  const objectivesnamee = async () => {
    try {
      const config = {
        url: "/admin/addobjectives",
        baseURL: "http://localhost:8000/api",
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer${token}`,
        },
        data: {
          Objectivesname: Objectivesname,
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
          Objectivesname: Objectivesname,
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
  // Pagination
  // const [pageNumber, setPageNumber] = useState(0);
  // const productPerPage = 5;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = getboardname.slice(
  //   visitedPage,
  //   visitedPage + productPerPage
  // );
  // const pageCount = Math.ceil(getboardname.length / productPerPage);

  // newpagination
  const [data1, setData1] = useState([]);
  const [Products, setProducts] = useState();

  const [currenpage, setCurrentpage] = useState(1);
  const recordsperpage = 6;
  const lastIndex = currenpage * recordsperpage;
  const firstIndex = lastIndex - recordsperpage;
  const records = getboardname.slice(firstIndex, lastIndex);
  const npages = Math.ceil(getboardname.length / recordsperpage);
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
      {/* <div className="col-lg-4 d-flex justify-content-center">
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
      </div> */}
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Objectives</h2>
          <button
            className=" btn"
            style={{ backgroundColor: "#138808", color: "white" }}
            onClick={handleShow}
          >
            Add Objectives
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
                  <div>Objectives</div>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {records?.map((val, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1 + firstIndex} </td>
                    <td>
                      <p></p>
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
                              setObjectivesname(val?.Objectivesname);
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
        <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "white" }}>Add Objectives</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Objectives</label>
                <input
                  type="text"
                  placeholder="Enter Objectives"
                  className="vi_0"
                  onChange={(e) => {
                    setObjectivesname(e.target.value);
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
              <Button
                variant=""
                className="modal-close-btn"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className="mx-2 modal-add-btn"
                variant=""
                onClick={() => {
                  objectivesnamee();
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
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "white" }}>
              Edit Objectives
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Name of the Objectives</label>
                <input
                  type="text"
                  placeholder="Enter Objectives"
                  className="vi_0"
                  value={Objectivesname}
                  onChange={(e) => {
                    setObjectivesname(e.target.value);
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
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button
              variant=""
              className="modal-add-btn"
              onClick={() => {
                updateallboardname();
              }}
            >
              Edit
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Warning delete modal  */}
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
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="" className="modal-add-btn" onClick={deleteboard}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AdminObjectives;
