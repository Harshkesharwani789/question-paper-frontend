import React, { useEffect } from "react";
import "../Admin/Admin.css";
import Card from "react-bootstrap/Card";

const Dashboard = () => {
 
  return (
    <div>
      <h2 className="header-c ">Dashboard</h2>
      <div className="cards-container">
        <Card style={{width: "15rem" }}>
          <Card.Body>
            <Card.Title>Number of Registered Users</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              600
            </Card.Subtitle>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>Number of Question Paper Generated</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              1000
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
