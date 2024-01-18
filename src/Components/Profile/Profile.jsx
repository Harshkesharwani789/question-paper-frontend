import React, { useState } from "react";
import {
  FaCity,
  FaFileImage,
  FaHome,
  FaPhoneAlt,
  FaRegEye,
} from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";
import { MdEmail, MdOutlineAppRegistration } from "react-icons/md";
import { GiExplosiveMaterials } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { Table } from "react-bootstrap";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Profile = () => {
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
  return (
    <div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-12">
            <button
              className=" btn"
              style={{ backgroundColor: "rgb(8, 52, 148)", color: "#fff" }}
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
              style={{ backgroundColor: "rgb(8, 52, 148)", color: "#fff" }}
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
              style={{ backgroundColor: "rgb(8, 52, 148)", color: "#fff" }}
              onClick={() => {
                setprofile(false);
                setQuestionPaper(false);
                setPayment(true);
              }}
            >
              Payment History
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
                      <p>Mr. Amandeep Singh</p>
                      <hr />
                    </div>
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <MdEmail /> &nbsp; Email
                      </label>
                      <p>email@gmail.com</p>
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <FaPhoneAlt /> &nbsp; Phone
                      </label>
                      <p>+91-0000000000</p>
                      <hr />
                    </div>
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <FaCity /> &nbsp; Country
                      </label>
                      <p>India</p>
                      <hr />
                    </div>
                  </div>
                  <div className="row"></div>
                  <div className="row">
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <FaHome /> &nbsp; State
                      </label>
                      <p>Karnataka</p>
                      <hr />
                    </div>
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <FaHome /> &nbsp; City
                      </label>
                      <p>Bengalore</p>
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ps-5">
                      <label htmlFor="" style={{ color: "rgb(8, 52, 148)" }}>
                        <CiCalendarDate /> &nbsp; Registration Date
                      </label>
                      <p> 16/12/2023 </p>
                      <hr />
                    </div>
                  </div>
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
                              <div>Genaration Date </div>
                            </th>
                            <th>
                              <div>Name</div>
                            </th>
                            <th>
                              <div>Subject</div>
                            </th>
                            <th>
                              <div>Status</div>
                            </th>

                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>30/02/2023</td>
                            <td>Amandeep Singh</td>
                            <td>Maths</td>
                            <td>Save as a draft / Generated</td>

                            <td>
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
                                  <FaRegEye
                                    className="text-primary"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "20px",
                                    }}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
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
