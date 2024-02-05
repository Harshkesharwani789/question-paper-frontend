import React, { useEffect, useState } from "react";
import "../LoginPage3/LoginPage3.css";
import Form from "react-bootstrap/Form";
import { Button, FormLabel } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const LoginPage3 = () => {
  const { state } = useLocation();
  console.log("state==>", state);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [School_Logo, setSchool_Logo] = useState("");
  const [Institute_Name, setInstitute_Name] = useState("");
  const [Subject, setSubject] = useState("");
  const [Test_Date, setTest_Date] = useState("");
  const [Size_ofthe_Question, setSize_ofthe_Question] = useState("");
  // const [addgenerate, setaddgenerate] = useState("");
  const generate = async () => {
    try {
      const config = {
        url: "/teacher/upadeteQuestionPaper",
        baseURL: "http://localhost:8000/api",
        method: "put",
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: {
          School_Logo: School_Logo,
          Institute_Name: Institute_Name,
          Subject: Subject,
          Test_Date: Test_Date,
          Size_ofthe_Question: Size_ofthe_Question,
          id: state?._id,
          authId: user?._id,
        },
      };

      let res = await axios(config);
      let am = "";
      if (res.status == 200) am = res.data.success;

      swal({
        title: "Yeah!",
        text: "view blue print !!!",
        icon: "success",
        button: "OK!",
      });
      navigate("/blueprint", { state: am });
    } catch (error) {
      console.log(error);
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "error",
        button: "OK!",
      });
    }
  };
  console.log("first", state?._id);
  const [subject, setsubject] = useState([]);
  const getSubject = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllSujects"
      );
      if (res.status == 200) {
        setsubject(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSubject();
  }, []);
  console.log(subject);
  return (
    <div>
      <div className="container p-3">
        <div>
          <div className="box">
            <div className="row">
              <div className="col-md-6 gfffg">
                <div className="login3-bg">
                  <div className="line-1">
                    <h2>
                      {" "}
                      <p className="anim-typewriter text-dark">
                        Welcome Amandeep Singh !{" "}
                      </p>{" "}
                      <span className="fs-4" style={{ textAlign: "center" }}>
                        Start Generating Your Paper
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 yoihjij ">
                <Form className="pe-2 pt-3">
                  <Form.Group controlId="formFile" className="mb-2">
                    <Form.Label
                      className="fs-6 fw-bold"
                      style={{ letterSpacing: "0.5px" }}
                    >
                      School Logo
                    </Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => {
                        setSchool_Logo(e.target.files[0]);
                      }}
                    />

                    <Form.Label
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      School / Institute Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your School / Institute Name"
                      onChange={(e) => {
                        setInstitute_Name(e.target.value);
                      }}
                    />

                    <Form.Label
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Subject
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    >
                      <option>Select the Subject</option>
                      {subject?.map((item, i) => {
                        return (
                          <option value={item?.subjectName} key={i}>
                            {item?.subjectName}
                          </option>
                        );
                      })}
                    </Form.Select>
                    {/* <FormLabel
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Test Paper Name
                    </FormLabel> */}
                    {/* <Form.Control
                      type="text"
                      placeholder="Enter the Test Paper Name"
                    /> */}
                    {/* <Form.Select aria-label="Default select example">
                      <option>Select Test Paper Name</option>
                      <option value="1">FA-1</option>
                      <option value="2">FA-2</option>
                      <option value="3">FA-3</option>
                      <option value="3">FA-4</option>
                      <option value="3">FA-5</option>
                      <option value="3">FA-6</option>
                    </Form.Select> */}
                    <FormLabel
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Test Date
                    </FormLabel>
                    <Form.Control
                      type="date"
                      placeholder="Enter the Test Paper Name"
                      onChange={(e) => {
                        setTest_Date(e.target.value);
                      }}
                    />
                    <FormLabel
                      className="fs-6 fw-bold mt-2 "
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Size of the Question Paper
                    </FormLabel>
                    <Form.Control
                      value="A4"
                      type="text"
                      placeholder="Enter the 
                      Size of the Question Paper (Recommended-A4)"
                      readOnly
                      onChange={(e) => {
                        setSize_ofthe_Question(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <a href="/loginpage5" style={{textDecoration:"none"}}>
                    <Button
                      style={{
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        background: "green",
                        margin: "20px auto",
                      }}
                      // onClick={() => generate()}
                    >
                      Save
                    </Button>
                  </a>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage3;
