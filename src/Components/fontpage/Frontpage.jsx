import React from "react";
import "../fontpage/Frontpage.css"
import { IoCheckmark } from "react-icons/io5";
import {Table } from 'react-bootstrap'


const Frontpage = () => {
  return (
    <div>
      <div className="question-paper-display_1">
        <div>
          <div style={{ padding: " 30px 50px 10px 50px" }}>
            <div>
              <div className="d-flex justify-content-center ">
                <h4 style={{ textAlign: "center" }}>
                  KARNATAKA SCHOOL EXAMINATION AND ASSESSMENT BOARD
                </h4>
              </div>
              <div className="d-flex justify-content-center">
                <h5>KSQAAC, Malleshwaram, Bengaluru-560003</h5>
              </div>
              <div className="d-flex justify-content-center mt-1">
                <h4>Assessment-March 2023 Model Paper</h4>
              </div>
            </div>

            <div className="subject mt-2 d-flex ">
              <div className="">
                <h4>Class: 8</h4>
              </div>
              <div>
                <h4> Subject: First Language English</h4>
              </div>
              <div>
                <h4> Marks: 40</h4>
                <h4> Time: 2 Hours</h4>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center mb-2">
                <h5>Information to be filled by the Student</h5>
              </div>
              <div className="asd mb-2">
                <div className="d-flex gap-2">
                  <h5>Name of the Student:</h5>
                  <div
                    style={{ borderBottom: "1px solid black", width: "71%" }}
                  >
                    {/* <Form.Control  className="name" type="text" placeholder="" /> */}
                  </div>
                </div>
              </div>
              <div className=" d-flex gap-4">
                <div>
                  <h5>Student SATS No:</h5>
                </div>
                <div className="d-flex">
                  <div className="square"></div>
                  <div className="square"></div>
                  <div className="square"></div>
                  <div className="square"></div>
                  <div className="square"></div>
                  <div className="square"></div>
                  <div className="square"></div>
                  <div className="square"></div>
                  <div className="square"></div>
                </div>
                <div className=" d-flex ">
                  <div>
                    <h5>Signature of the Student:</h5>
                  </div>
                  <div
                    style={{ borderBottom: "1px solid black", width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <h5>Information to be filled by the Room Invigilator</h5>
              </div>
            </div>

            <div className=" d-flex gap-4 mt-3">
              <div>
                <h5>School DISE Code:</h5>
              </div>
              <div className="d-flex">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
              </div>
            </div>

            <div className="mt-4 mb-4 d-flex">
              <div>
                <h5>School Name:</h5>
              </div>
              <div
                style={{ borderBottom: "1px solid black", width: "87%" }}
              ></div>
            </div>

            <div className="row">
              <div className="d-flex gap-4">
                <div className="col-md-4 d-flex gap-2">
                  <div>
                    <h5>Cluster:</h5>
                  </div>
                  <div
                    style={{ borderBottom: "1px solid black", width: "85%" }}
                  ></div>
                </div>
                <div className="col-md-4 d-flex gap-2">
                  <div>
                    <h5>Block:</h5>
                  </div>
                  <div
                    style={{ borderBottom: "1px solid black", width: "85%" }}
                  ></div>
                </div>
                <div className="col-md-4 d-flex gap-2">
                  <div>
                    <h5>District:</h5>
                  </div>
                  <div
                    style={{ borderBottom: "1px solid black", width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-4 d-flex gap-5">
              <div>
                <h5>School Type:</h5>
              </div>

              <div className="d-flex gap-2">
                <div>
                  <h5>Govt.</h5>
                </div>
                <div className="square"></div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <h5>Aided</h5>
                </div>
                <div className="square"></div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <h5>Un-aided</h5>
                </div>
                <div className="square"></div>
              </div>
            </div>

            <div className="mt-4">
              <h5>
                (Put "<IoCheckmark />" mark for applicable information)
              </h5>
            </div>

            <div className="mt-4 d-flex">
              <div>
                <h5>Signature of the Room Invigilator:</h5>
              </div>
              <div
                style={{ borderBottom: "1px solid black", width: "69%" }}
              ></div>
            </div>

            <div className="mt-4 d-flex justify-content-center">
              <h4>
                Information to be filled by the Evaluator at the time of
                evaluation
              </h4>
            </div>

            <div>
              <Table bordered  style={{ width: "100%", border: "1px solid black" }}>
                <tr>
                  <th style={{ border: "1px solid black" }}>Question Number</th>
                  <th style={{ border: "1px solid black" }}> Obtained marks</th>
                  <th style={{ border: "1px solid black" }}>Question Number</th>
                  <th style={{ border: "1px solid black" }}> Obtained marks</th>
                  <th style={{ border: "1px solid black" }}>Question Number</th>
                  <th style={{ border: "1px solid black" }}> Obtained marks</th>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>1</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>11</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>21</td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>2</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>12</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>22</td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>3</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>13</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>23</td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>4</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>14</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>24</td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>5</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>15</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>25</td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>6</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>16</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>26</td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>7</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>17</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>27</td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>8</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>18</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>28</td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>9</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>19</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>-</td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black" }}>10</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>20</td>
                  <td style={{ border: "1px solid black" }}></td>
                  <td style={{ border: "1px solid black" }}>-</td>
                  <td style={{ border: "1px solid black" }}></td>
                </tr>

                <tr>
                  <th style={{ border: "1px solid black" }}>Total marks</th>
                  <th style={{ border: "1px solid black" }}></th>
                  <th style={{ border: "1px solid black" }}>Total marks</th>
                  <th style={{ border: "1px solid black" }}></th>
                  <th style={{ border: "1px solid black" }}>Total marks</th>
                  <th style={{ border: "1px solid black" }}> </th>
                </tr>

                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th style={{ border: "1px solid black" }}>Grand Total</th>
                  <th style={{ border: "1px solid black" }}> </th>
                </tr>
              </Table>
            </div>

            <div className="mt-4 d-flex gap-2">
              <div>
                <h5>Total marks obtained (in words):</h5>
              </div>
              <div
                style={{ borderBottom: "1px solid black", width: "70%" }}
              ></div>
            </div>

            <div className="mt-4 d-flex gap-2 ">
              <div>
                <h5>Signature of the Evaluator:</h5>
              </div>
              <div
                style={{ borderBottom: "1px solid black", width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
