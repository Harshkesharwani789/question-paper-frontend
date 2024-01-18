import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import "../Admin/Admin.css";

const AccountHistory = () => {
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
  return (
    <div className="customerhead p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="header-c ">Account History</h2>
        <button
          className=" btn"
          style={{ backgroundColor: "#083494", color: "white" }}
          onClick={handleShow}
        >
          Add Account History
        </button>
      </div>

      <div className="mb-3">
        <Table responsive bordered style={{ width: "-webkit-fill-available" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>
                <div>Name</div>
              </th>
              <th>
                <div>Booking Id</div>
              </th>
              <th>
                <div>Payment Mode</div>
              </th>
              <th>
                <div>Payment Id</div>
              </th>
              <th>
                <div>
                  Payment Date <br /> Time
                </div>
              </th>
              <th>
                <div>Credit</div>
              </th>
              <th>
                <div>Debit</div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              {/* <td>
                <img src="" alt="" style={{ width: "75px" }} />
                </td> */}
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
          <Modal.Title style={{ color: "white" }}>
            Add Account History
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="do-sear mt-2">
              <label>Name</label>
              <input type="text" placeholder="Enter Name" className="vi_0" />
            </div>
            <div className="do-sear mt-2">
              <label>Booking Id</label>
              <input
                type="text"
                placeholder="Enter Booking Id"
                className="vi_0"
              />
            </div>
            <div className="do-sear mt-2">
              <label>Payment Mode</label>
              <input
                type="text"
                placeholder="Enter Payment Mode"
                className="vi_0"
              />
            </div>
            <div className="do-sear mt-2">
              <label>Payment ID</label>
              <input
                type="text"
                placeholder="Enter Payment Id"
                className="vi_0"
              />
            </div>
            <div className="do-sear mt-2">
              <label>Payment Date & Time</label>
              <input type="date" placeholder="Enter Date" className="vi_0" />
              <input type="time" placeholder="Enter Time" className="vi_0" />
            </div>
            <div className="do-sear mt-2">
              <label>Credit</label>
              <input type="text" placeholder="Enter Credit" className="vi_0" />
            </div>
            <div className="do-sear mt-2">
              <label>Debit</label>
              <input type="text" placeholder="Enter Debit" className="vi_0" />
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
            <Button className="mx-2" variant="primary">
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
              />
            </div>
            <div className="do-sear mt-2">
              <label>Registration Date</label>
              <input
                type="text"
                placeholder="Enter Registration Date"
                className="vi_0"
              />
            </div>
            <div className="do-sear mt-2">
              <label>Mobile Number</label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="vi_0"
              />
            </div>
            <div className="do-sear mt-2">
              <label>Email ID</label>
              <input
                type="text"
                placeholder="Enter Email Id"
                className="vi_0"
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
          <Button variant="primary" style={{ backgroundColor: "#FAFA33" }}>
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
    </div>
  );
};

export default AccountHistory;
