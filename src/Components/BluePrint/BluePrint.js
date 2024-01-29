import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../BluePrint/BluePrint.css";

const BluePrint = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="blueprint-container">
        <div className="Answer-paper-display">
          {/* BluePrint display */}

          <div className="details-display ">
            {/* <div style={{textAlign:"center"}} >
              <img src="../Images/logo.png" alt="" style={{ width: "100px" }} />
            </div> */}

            <div className="top-titles-container">
              <div className="top-logo">
                <div>
                  <img src="../Images/logo.png" alt="" style={{ width: "100px" }} />
                </div>
                <div className="title-1">
                  <h4>KARNATAKA SCHOOL EXAMINATION AND ASSESSMENT BOARD</h4>
                </div>
              </div>
              <div className="title-2">
                <h5>KSQAAC, Malleshwaram, Bengaluru-560003</h5>
              </div>
              <div className="title-3">
                <h4>Assessment-March 2023 Blue Print</h4>
              </div>
            </div>

            <div className="class-details">
              <div className="class-data">
                <b>Class : 8</b>
              </div>
              <div className="class-data">
                <b>Subject: First Language English</b>
              </div>
              <div>
                <div className="class-data">
                  <b>Marks: 40</b>
                </div>
                <div className="class-data">
                  <b>Time: 2 Hours</b>
                </div>
              </div>
            </div>

            <div className="blueprint-titles">
              <h3>First Language English 2014</h3>
              <h4>DESIGN & BLUE PRINT</h4>
            </div>
            {/* table 1 */}
            <div className="weightage-objectives">
              <div className="main-title">
                <b>1.</b>
                <b>Weightage to Objectives - Marks</b>
              </div>
              <div className="objectives-table">
                <Table bordered hover style={{ border: "1px solid" }}>
                  <thead>
                    <tr>
                      <th>Objectives</th>
                      <th>Percentage</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Remembering</td>
                      <td>30%</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Understanding</td>
                      <td>32%</td>
                      <td>32</td>
                    </tr>

                    <tr>
                      <td>Expression</td>
                      <td>30%</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Appreciation</td>
                      <td>8%</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            {/* table 2 */}
            <div className="weightage-objectives">
              <div className="main-title">
                <b>2.</b>
                <b>Weightage to Content</b>
              </div>
              <div className="text-center">
                <div className="objectives-table">
                  <Table
                    bordered
                    hover
                    size="sm"
                    style={{ border: "1px solid" }}
                  >
                    <tbody>
                      <tr>
                        <td>Prose</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>Poetry</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>Non-details</td>
                        <td>07</td>
                      </tr>
                      <tr>
                        <td>
                          Grammer 20 + <br></br> Vocabulary
                        </td>
                        <td>
                          <span style={{ borderBottom: "1px solid" }}>33</span>{" "}
                          <br></br>100
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>

            {/* table 3  */}
            <div className="weightage-objectives">
              <div className="main-title">
                <b>3.</b>
                <b>Weightage to type of Questions</b>
              </div>
              <div className="objectives-table">
                <Table
                  bordered
                  hover
                  size="md"
                  style={{ border: "1px solid" }}
                >
                  <tbody>
                    <tr>
                      <td>Multiple types questions</td>
                      <td>14x1</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>One sentence answers</td>
                      <td>11x1</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>2-3 sentence answers</td>
                      <td>9x2</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>Short Answer of 3-4 sentences</td>
                      <td>9x3</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <td>Answer in 5-6 sentences</td>
                      <td>5x4</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>Compositions</td>
                      <td>2x5</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Total</b>
                      </td>
                      <td></td>
                      <td>
                        <b>100</b>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            {/* table 4  */}
            <div className="weightage-objectives">
              <div className="main-title">
                <b>4.</b>
                <b>Weightage to Difficult Level</b>
              </div>
              <div className="objectives-table">
                <Table bordered hover size="md" style={{ border: "1px solid" }}>
                  <tbody>
                    <tr>
                      <td>Easy</td>
                      <td>Average</td>
                      <td>Difficult</td>
                      <td>Total</td>
                    </tr>
                    <tr>
                      <td>30</td>
                      <td>50</td>
                      <td>20</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
          }}
        >
          <a href="/questionpaper">
            <Button
              variant=""
              style={{ backgroundColor: "navy", color: "white" }}
            >
              Generate Question Paper
            </Button>
          </a>
        
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default BluePrint;
