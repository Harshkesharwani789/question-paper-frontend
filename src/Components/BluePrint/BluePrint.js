import React, { useEffect, useState } from "react";
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
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../BluePrint/BluePrint.css";
import axios from "axios";

const BluePrint = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("State==>", state);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");
  const [blueprint, setblueprint] = useState([]);
  const getallblueprint = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllBLUEPRINTs/" + user?._id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status == 200) {
        setblueprint(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallblueprint();
  }, []);
  console.log(blueprint);

  return (
    <div>
      <div className="">
        <div className="">
          {/* BluePrint display */}
          <div className="details-display ">
            {/* <div style={{textAlign:"center"}} >
              <img src="../Images/logo.png" alt="" style={{ width: "100px" }} />
            </div> */}

            <div className="weightage-objectives">
              <div className="objectives-table">
                {blueprint
                  ?.filter(
                    (ele) =>
                      ele.board == state.Board &&
                      ele.medium == state.Medium &&
                      ele.className == state.Class &&
                      ele.SubClassName == state.Sub_Class &&
                      ele.subjects == state.Subject
                  )
                  ?.map((val, i) => {
                    return (
                      <div className="blueprint-content-display" key={i}>
                        <div className="blueprint-titles">
                          <div className="top-titles-container">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src={`http://localhost:8000/Teacher/${state?.School_Logo}`}
                                    alt=""
                                    style={{
                                      width: "100px",
                                      height: "-webkit-fill-available",
                                    }}
                                  />
                                </div>
                                <div className="col-md-10">
                                  <div className="title-1 text-center">
                                    <h4>{state?.Institute_Name}</h4>
                                  </div>
                                  <div className="title-2">
                                    <h5>
                                      KSQAAC, Malleshwaram, Bengaluru-560003
                                    </h5>
                                  </div>
                                  <div className="title-3">
                                    <h4>{val?.blName}</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="container mt-2">
                            <div className="row">
                              <div className="class-details">
                                <div className="class-data">
                                  <b>Class : {val?.className}</b>
                                </div>
                                <div className="class-data">
                                  <b>Subject: {val?.SubClassName}</b>
                                </div>
                                <div>
                                  <div className="class-data">
                                    <b>Board: {val?.board}</b>
                                  </div>
                                  <div className="class-data">
                                    <b>Time: {val?.DurationOfExam}</b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* table 1 */}
                        <div className="weightage-objectives mt-4">
                          <div className="main-title">
                            <b>1.</b>
                            <b>Weightage to Objectives - Marks</b>
                          </div>
                          <div className="objectives-table">
                            <Table
                              bordered
                              hover
                              style={{ border: "1px solid" }}
                            >
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
                                  <td>{val?.NQRemembering}</td>
                                  <td>{val?.MaskRemembering}</td>
                                </tr>
                                <tr>
                                  <td>Understanding</td>
                                  <td>{val?.NQUnderstanding}</td>
                                  <td>{val?.MaskUnderstanding}</td>
                                </tr>

                                <tr>
                                  <td>Expression</td>
                                  <td>{val?.NQExpression}</td>
                                  <td>{val?.MaskExpression}</td>
                                </tr>
                                <tr>
                                  <td>Appreciation</td>
                                  <td>{val?.NQAppreciation}</td>
                                  <td>{val?.MaskAppreciation}</td>
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
                                  {val?.Weightageofthecontent?.map(
                                    (item, i) => {
                                      return (
                                        <tr>
                                          <td>{item?.label}</td>
                                          <td>{item?.Marks}</td>
                                        </tr>
                                      );
                                    }
                                  )}
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
                                {val?.TypesofQuestions?.map((item, i) => {
                                  return (
                                    <tr>
                                      <td>{item?.QAType}</td>
                                      <td>
                                        {item?.NQA}x {item?.Mask}
                                      </td>
                                      <td>{val?.NQA * val?.Mask}</td>
                                    </tr>
                                  );
                                })}

                                <tr>
                                  <td>
                                    <b>Total</b>
                                  </td>
                                  <td>
                                    {blueprint?.TypesofQuestions?.reduce(
                                      (a, i) => a + Number(i?.NQA),
                                      0
                                    )}
                                  </td>
                                  <td>
                                    <b>
                                      {blueprint?.TypesofQuestions?.reduce(
                                        (a, i) => a + Number(i?.Mask * i?.NQA),
                                        0
                                      )}
                                    </b>
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
                            <Table
                              bordered
                              hover
                              size="md"
                              style={{ border: "1px solid" }}
                            >
                              <tbody>
                                <tr>
                                  <td>Easy</td>
                                  <td>Average</td>
                                  <td>Difficult</td>
                                  <td>Total</td>
                                </tr>
                                <tr>
                                  <td>{val?.EasyMask}</td>
                                  <td>{val?.AverageMask}</td>
                                  <td>{val?.DifficultMask}</td>
                                  <td>{val?.TotalDifficultMask} </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "10px",
                          }}
                        >
                          <Button
                            variant=""
                            style={{ backgroundColor: "navy", color: "white" }}
                            onClick={() => {
                              navigate("/questionpaper", {
                                state: { ...state, bluePrint: val },
                              });
                            }}
                          >
                            Generate Question Paper
                          </Button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluePrint;
