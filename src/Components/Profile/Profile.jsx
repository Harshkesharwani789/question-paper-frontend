import React, { useEffect, useState } from "react";
import {
  FaCity,
  FaFileImage,
  FaHome,
  FaPhoneAlt,
  FaRegEye,
  FaWhatsappSquare,
} from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";
import { MdEmail, MdOutlineAppRegistration } from "react-icons/md";
import { GiExplosiveMaterials } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { Table } from "react-bootstrap";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import swal from "sweetalert";

const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const [profile, setprofile] = useState(true);
  const [QuestionPaper, setQuestionPaper] = useState(false);
  const [Reject, setReject] = useState(false);
  const [payment, setPayment] = useState(false);
  const [show2, setShow2] = useState();
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [AllQuestionGen, setAllQuestionGen] = useState([]);

  const getAllQuestion = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/teacher/getAllGenQuestionByUserId/${user?._id}/${user?._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
      setAllQuestionGen(res.data.success);
    }
  };

  useEffect(() => {
    if (token) {
      getAllQuestion();
    }
  }, [token]);

  console.log("AllQuestionGen", AllQuestionGen);
  return (
    <div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-12">
            <button
              className=" btn"
              style={{
                backgroundColor: "rgb(8, 52, 148)",
                color: "#fff",
                padding: "3px 4px",
              }}
              onClick={() => {
                setprofile(true);
                setQuestionPaper(false);
                setPayment(false);
              }}
            >
              Profile
            </button>{" "}
            &nbsp;
            <button
              className=" btn"
              style={{
                backgroundColor: "rgb(8, 52, 148)",
                color: "#fff",
                padding: "3px 6px",
              }}
              onClick={() => {
                setprofile(false);
                setQuestionPaper(true);
                setPayment(false);
              }}
            >
              Generated Question Paper
            </button>
            &nbsp;
            <button
              className=" btn"
              style={{
                backgroundColor: "rgb(8, 52, 148)",
                color: "#fff",
                padding: "3px 4px",
              }}
              onClick={() => {
                setprofile(false);
                setQuestionPaper(false);
                setPayment(true);
              }}
            >
              Payment History
            </button>
            <button
              className=" btn"
              style={{
                backgroundColor: "green",
                color: "#fff",
                padding: "3px 4px",
                float: "right",
                borderRadius: "10px",
              }}
              onClick={() => {
                navigate("/examboard");
              }}
            >
              Quick Generate Question Paper
            </button>
            &nbsp;
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {profile ? (
              <>
                <img
                  src="../logo.png"
                  alt=""
                  style={{ width: "300px", borderRadius: "10px" }}
                />
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <IoPersonSharp /> &nbsp; Name
                      </label>
                      <p>
                        {user?.FirstName} {user?.LastName}
                      </p>
                      <hr />
                    </div>
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <MdEmail /> &nbsp; Email
                      </label>
                      <p>{user?.Email}</p>
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <FaPhoneAlt /> &nbsp; Phone
                      </label>
                      <p>{user?.Mobile}</p>
                      <hr />
                    </div>
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <FaWhatsappSquare /> &nbsp; Whats App Number
                      </label>
                      <p>{user?.whatsAppNumber}</p>
                      <hr />
                    </div>
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <CiCalendarDate /> &nbsp; Registration Date
                      </label>
                      <p>{moment(user?.createdAt)?.format("DD/MM/YYYY")}</p>
                      <hr />
                    </div>
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <CiCalendarDate /> &nbsp; Registration ID
                      </label>
                      <p>{user?.teacherId}</p>
                      <hr />
                    </div>
                    {/* <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <FaCity /> &nbsp; Country
                      </label>
                      <p>India</p>
                      <hr />
                    </div> */}
                  </div>
                  <div className="row"></div>

                  <div className="row"></div>
                </div>
              </>
            ) : (
              <>
                {QuestionPaper ? (
                  <>
                    <div className="mt-5">
                      <Table
                        responsive
                        bordered
                        style={{ width: "-webkit-fill-available" }}
                      >
                        <thead style={{ backgroundColor: "rgb(8, 52, 148)" }}>
                          <tr>
                            <th>S.No</th>
                            <th>
                              <div>Exam Date </div>
                            </th>
                            <th>
                              <div>Name</div>
                            </th>
                            <th>
                              <div>Class/Sub_Class</div>
                            </th>
                            <th>
                              <div>Board</div>
                            </th>
                            <th>
                              <div>Subject</div>
                            </th>
                            <th>
                              <div>Medium</div>
                            </th>
                            <th>
                              <div>Exam Name</div>
                            </th>
                            <th>
                              <div>Genaration Date </div>
                            </th>
                            <th>
                              <div>Status</div>
                            </th>

                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {AllQuestionGen?.map((item, i) => {
                            return (
                              <tr>
                                <td>{i + 1}</td>
                                <td>
                                  {moment(item?.Test_Date).format("DD/MM/YYYY")}
                                </td>
                                <td>{item?.Institute_Name}</td>
                                <td>
                                  {item?.Class}/{item?.Sub_Class}
                                </td>
                                <td>{item?.Board}</td>
                                <td>{item?.Subject}</td>
                                <td>{item?.Medium}</td>
                                <td>{item?.Exam_Name}</td>
                                <td>
                                  {moment(item?.createdAt).format("DD/MM/YYYY")}
                                </td>
                                <tb>
                                  {item?.status == "Not Complete Staps" ? (
                                    <span style={{ color: "red" }}>
                                      {item?.status}
                                    </span>
                                  ) : (
                                    <span>
                                      {item?.status == "Completed" ? (
                                        <span style={{ color: "green" }}>
                                          {item?.status}
                                        </span>
                                      ) : (
                                        <span style={{ color: "blue" }}>
                                          {item?.status}
                                        </span>
                                      )}
                                    </span>
                                  )}
                                </tb>
                                <td>
                                  {" "}
                                  <div>
                                    <div>
                                      {/* <AiFillDelete
                                    className="text-danger"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "20px",
                                    }}
                                    onClick={() => {
                                      handleShow2();
                                    }}
                                  />{" "} */}
                                      {item?.status == "Completed" ? (
                                        <FaRegEye
                                          className="text-primary"
                                          style={{
                                            cursor: "pointer",
                                            fontSize: "20px",
                                          }}
                                          onClick={() =>
                                            swal({
                                              title: "Oops!",
                                              text: "Comming Soon",
                                              icon: "warning",
                                              dangerMode: true,
                                            })
                                          }
                                        />
                                      ) : (
                                        <button
                                          type="button"
                                          class="btn btn-success"
                                          onClick={() => {
                                            if (item?.status == "Up_Comming") {
                                              return navigate("/loginpage5", {
                                                state: item,
                                              });
                                            } else if (
                                              item?.status == "Saved Draft"
                                            ) {
                                              return navigate("/blueprint", {
                                                state: item,
                                              });
                                            } else if (
                                              item?.status ==
                                              "Not Complete Staps"
                                            ) {
                                              return navigate("/loginpage3", {
                                                state: item,
                                              });
                                            }
                                          }}
                                        >
                                          Continue
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </div>
                  </>
                ) : (
                  <>
                    {payment ? (
                      <>
                        <div className="mt-5">
                          <Table
                            responsive
                            bordered
                            style={{ width: "-webkit-fill-available" }}
                          >
                            <thead style={{ backgroundColor: "yellowgreen" }}>
                              <tr>
                                <th>S.No</th>
                                <th>
                                  <div>Payment Date</div>
                                </th>
                                <th>
                                  <div>Name</div>
                                </th>
                                <th>
                                  <div>Subject</div>
                                </th>
                                <th>
                                  <div>Transaction Details</div>
                                </th>
                                <th>
                                  <div>Amount</div>
                                </th>
                                {/* <th>Action</th> */}
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>31/02/2024</td>
                                <td>Amandeep Singh</td>
                                <td>Mathematics</td>
                                <td></td>
                                <td>₹ 40</td>

                                {/* <td>
                                  {" "}
                                  <div>
                                    <div>
                                      <AiFillDelete
                                        className="text-danger"
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "20px",
                                        }}
                                        onClick={() => {
                                          handleShow2();
                                        }}
                                      />{" "}
                                    </div>
                                  </div>
                                </td> */}
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
