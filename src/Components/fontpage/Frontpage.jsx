import React from "react";
import "../fontpage/Frontpage.css";
import { IoCheckmark } from "react-icons/io5";
import Table from "react-bootstrap/Table";

const Frontpage = () => {
  return (
    <div>
      {/* <div className="question-paper-display_1">
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
              <Table
                bordered
                style={{ width: "100%", border: "1px solid black" }}
              >
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
      </div> */}

      {/* new  */}
      <div className="question-paper-display">
        <div className="details-display ">
          <div className="top-titles-container">
            <div className="title-1">
              <h4>KARNATAKA SCHOOL EXAMINATION AND ASSESSMENT BOARD</h4>
            </div>
            <div className="title-2">
              <h5>KSQAAC, Malleshwaram, Bengaluru-560003</h5>
            </div>
            <div className="title-3">
              <h4>Assessment-March 2023 Model Paper</h4>
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

          <div className="student-details-container">
            <h5 style={{ textAlign: "center", padding: "5px 0px" }}>
              Information to be filled by the Student
            </h5>
            <div className="student-details">
              <p style={{ margin: "0px" }}>Name of the Student:</p>
              <div className="line"></div>
            </div>

            <div className="student-number-row">
              <div style={{ margin: " auto 0" }}>
                <p>Student SATS No:</p>
              </div>
              <div className="d-flex">
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
              </div>
              <div className="ss">
                <p>Signature of the Student:</p>
                <div className="line"></div>
              </div>
            </div>
          </div>

          <div className="student-details-container">
            <h5 style={{ textAlign: "center"}}>
              Information to be filled by the Room Invigilator
            </h5>

            <div className="school-number-row">
              <div style={{ margin: " auto 0" }}>
                <p>School IDSE Code:</p>
              </div>
              <div className="d-flex">
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
                <div className="number-box"></div>
              </div>
            </div>
            <div className="student-details">
              <p style={{ margin: "0px" }}>School Name :</p>
              <div className="line-2"></div>
            </div>
          </div>

          <div className="third-row">
            <div className="student-details">
              <p style={{ margin: "0px" }}>Cluster:</p>
              <div className="line-3"></div>
            </div>
            <div className="student-details">
              <p style={{ margin: "0px" }}>Block:</p>
              <div className="line-3"></div>
            </div>
            <div className="student-details">
              <p style={{ margin: "0px" }}>District:</p>
              <div className="line-3"></div>
            </div>
          </div>

          <div className="fourth-row">
            <div className="school-details">
              <p style={{ margin: "0px" }}>School Name:</p>
            </div>
            <div className="school-details">
              <p style={{ margin: "0px" }}>Govt.</p>
              <div className="number-box-1"></div>
            </div>
            <div className="school-details">
              <p style={{ margin: "0px" }}>Aided</p>
              <div className="number-box-1"></div>
            </div>
            <div className="school-details">
              <p style={{ margin: "0px" }}>Un-aided</p>
              <div className="number-box-1"></div>
            </div>
          </div>

          <div>(Put "✓" mark for applicable information)</div>
          <div className="student-details" style={{ padding: "10px 0" }}>
            <p style={{ margin: "0px" }}>Signature of the Room Invigilator: </p>
            <div className="line-4"></div>
          </div>

          <div>
            <h5 style={{ textAlign: "center", padding: "5px 0px" }}>
              Information to be filled by the Evaluator at the time of
              evaluation
            </h5>
            <div></div>
            <Table
              responsive
              bordered
              style={{ border: "1px solid" }}
              size="sm"
            >
              <thead>
                <tr>
                  <th>Question Number</th>
                  <th>Obtained marks</th>
                  <th>Question Number</th>
                  <th>Obtained marks</th>
                  <th>Question Number</th>
                  <th>Obtained marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td>11</td>
                  <td></td>
                  <td>21</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td>12</td>
                  <td></td>
                  <td>22</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td>13</td>
                  <td></td>
                  <td>23</td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td>14</td>
                  <td></td>
                  <td>24</td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td></td>
                  <td>15</td>
                  <td></td>
                  <td>25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td></td>
                  <td>16</td>
                  <td></td>
                  <td>26</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td></td>
                  <td>17</td>
                  <td></td>
                  <td>27</td>
                  <td></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td></td>
                  <td>18</td>
                  <td></td>
                  <td>28</td>
                  <td></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td></td>
                  <td>19</td>
                  <td></td>
                  <td>-</td>
                  <td></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td></td>
                  <td>20</td>
                  <td></td>
                  <td>-</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <b>Total marks</b>
                  </td>
                  <td></td>
                  <td>
                    <b>Total marks</b>
                  </td>
                  <td></td>
                  <td>
                    <b>Total marks</b>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td></td>
                  <td>
                  </td>
                  <td></td>
                  <td>
                    <b>Grade Total</b>
                  </td>
                  <td></td>
                </tr>
                
              </tbody>
            </Table>
          </div>
          <div className="student-details" >
            <p style={{ margin: "0px" }}>Total marks obtained (in words): </p>
            <div className="line-5"></div>
          </div>
          <div className="student-details" >
            <p style={{ margin: "0px" }}>Signature of the Evaluator:</p>
            <div className="line-6"></div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
