import React, { useState } from "react";
import "../Admin/Admin.css";
import Card from "react-bootstrap/Card";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Dashboard = () => {
  const [show2, setShow2] = useState();
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div>
      <h2 className="header-c ">Dashboard</h2>

      <div className="cards-container">
        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>Number of Registered Users</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">600</Card.Subtitle>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>Number of Question Paper Generated</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">1000</Card.Subtitle>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>Number of Shared Question Paper</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">400</Card.Subtitle>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>Number of saved Question Paper</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">800</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>

      <div>
        <h2 className="header-c ">User List</h2>

        <div className="srch-icon">
          <div>
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

          <div>
            <Button className="admin-add-btn">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/adminuserlist"
              >
                View All Users
              </a>
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 p-3">
            <Table responsive bordered>
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>123456</td>
                  <td>parnets19</td>
                  <td>29-01-2024</td>
                  <td>1234567890</td>
                  <td>parnets19@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
