import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
// import "../Admin/Admin.css";
import "../../Admin/Admin.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import parse from "html-react-parser";

const Fillintheblanks_add = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");
  const questiondata = JSON.parse(sessionStorage.getItem("selectdetails"));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleChange1 = (e, editor) => {
    const data = editor.getData();
    setAnswer(data);
  };

  //post

  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [input3, setinput3] = useState("");
  const [Answer, setAnswer] = useState("");
  const [Marks, setMarks] = useState("");

  const [Answer_Time, setAnswer_Time] = useState("");

  const addquestions = async () => {
    try {
      const config = {
        url: "/admin/AddQuestionPaper",
        method: "post",
        baseURL: "http://localhost:8000/api",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: {
          Board: questiondata?.Board,
          Chapter_Name: questiondata?.Chapter_Name,
          Difficulty_level: questiondata?.Difficulty_level,
          Lesson: questiondata?.Lesson,
          Medium: questiondata?.Medium,
          Name_of_examination: questiondata?.Name_of_examination,
          Objectives: questiondata?.Objectives,
          Section: questiondata?.Section,
          Sub_Class: questiondata?.Sub_Class,
          Subject: questiondata?.Subjects,
          Types_Question: questiondata?.Types_Question,
          Class: questiondata?.Class,
          Instruction: questiondata?.Instruction,

          input1: input1,
          input2: input2,
          input3: input3,
          NumberOfLine: Dash,

          Answer: Answer,
          Marks: Marks,
          Answer_Time: Answer_Time,
          authId: admin?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        swal({
          title: "yeah!",
          text: res.data.success,
          icon: "success",
          button: "Ok!",
        });
        sessionStorage.removeItem("selectdetails");
        return navigate("/adminquestions");
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "Oops!",
        text: error.response.data.error,
        icon: "success",
        button: "Ok!",
      });
    }
  };

  // For Dash

  const [Dash, setDash] = useState("2");
  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-3">
              <label htmlFor="">Dash (--)</label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setDash(e.target.value)}
              >
                <option value="">Select Dash</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Form.Select>
            </div>
            {Dash === "1" ? (
              <>
                <div className="col-md-9 d-flex align-items-end ">
                  <input
                    className="vi_0"
                    type="text"
                    placeholder="enter text"
                    onChange={(e) => setinput1(e.target.value)}
                  />

                  <span>___________</span>

                  <input
                    className="vi_0"
                    type="text"
                    placeholder="enter text"
                    onChange={(e) => setinput2(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            {Dash === "2" ? (
              <>
                <div className="col-md-9 d-flex align-items-end ">
                  <input
                    className="vi_0"
                    type="text"
                    placeholder="enter text"
                    onChange={(e) => setinput1(e.target.value)}
                  />

                  <span>___________</span>

                  <input
                    className="vi_0"
                    type="text"
                    placeholder="enter text"
                    onChange={(e) => setinput2(e.target.value)}
                  />
                  <span>___________</span>
                  <input
                    className="vi_0"
                    type="text"
                    placeholder="enter text"
                    onChange={(e) => setinput3(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <></>
            )}

            {/* <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="5"
                                    className="vi_0"
                                ></textarea> */}
            {/* <CKEditor
                            editor={ClassicEditor}
                            className="vi_0"
                            data={Question}
                            onChange={handleChange}
                        /> */}

            {/* <div className="col-md-6">
    <div className="do-sear mt-2">
      <label htmlFor="">Option 1</label>
      <CKEditor
        editor={ClassicEditor}
        className="vi_0"
        data={Option_1}
        onChange={handleChange3}
      />
    </div>
  </div>
  <div className="col-md-6">
    <div className="do-sear mt-2">
      <label htmlFor="">Option 2</label>
      <CKEditor
        editor={ClassicEditor}
        className="vi_0"
        data={Option_2}
        onChange={handleChange4}
      />
    </div>
  </div>
  <div className="col-md-6">
    <div className="do-sear mt-2">
      <label htmlFor="">Option 3</label>
      <CKEditor
        editor={ClassicEditor}
        className="vi_0"
        data={Option_3}
        onChange={handleChange5}
      />
    </div>
  </div>
  <div className="col-md-6">
    <div className="do-sear mt-2">
      <label htmlFor="">Option 4</label>
      <CKEditor
        editor={ClassicEditor}
        className="vi_0"
        data={Option_4}
        onChange={handleChange6}
      />
    </div>
  </div> */}

            {/* <div className="col-md-6">
                    <div className="do-sear">
                        <label htmlFor="">Image</label>
                        <input
                            type="file"
                            className="vi_0"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>                  
                </div> */}
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Marks</label>
                <Form.Select
                  className="vi_0"
                  onChange={(e) => setMarks(e.target.value)}
                >
                  <option value="">Select Marks</option>
                  <option value="1/2">1/2</option>
                  <option value="1/4">1/4</option>
                  <option value="1/3">1/3</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Answer Time</label>
                <Form.Select
                  className="vi_0"
                  onChange={(e) => setAnswer_Time(e.target.value)}
                >
                  <option value="1/2 Mnt">1/2 Mnt</option>
                  <option value="1/4 Mnt">1/4 Mnt</option>
                  <option value="1 Mnt">1 Mnt</option>
                  <option value="1.30 minutes">1.30 minutes</option>
                  <option value="1 minutes">1 minutes</option>
                  <option value="2 minutes">2 minutes</option>
                  <option value="3 minute">3 minutes</option>
                  <option value="4 minutes">4 minutes</option>
                  <option value="5 minutes"> 5 minutes</option>
                  <option value="6 minutes">6 minutes</option>
                  <option value="7 minutes"> 7 minutes</option>
                  <option value="8 minutes"> 8 minutes</option>
                  <option value="9 minutes"> 9 minutes</option>
                  <option value="10 minutes">10 minutes</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <div className="do-sear mt-2">
                  <label htmlFor="">Answer</label>
                  <CKEditor
                    editor={ClassicEditor}
                    className="vi_0"
                    data={Answer}
                    onChange={handleChange1}
                  />
                </div>
              </div>
            </div>
            {/* <div className="yoihjij my-4">
    <button style={{ float: "right" }}>Add</button>
  </div> */}
          </div>
        </div>

        <div className="yoihjij text-center my-2 p-2 ">
          <button
            style={{ backgroundColor: "orange" }}
            onClick={() => {
              navigate(-1);
            }}
            className="modal-add-btn"
          >
            Back
          </button>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            onClick={() => {
              handleShow();
            }}
            className="modal-add-btn"
          >
            Add
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="">Question</label>
            <div className="d-flex gap-4">
              {input1 ? (
                <>
                  <input
                    type="text"
                    className="vi_0"
                    value={input1}
                    onChange={(e) => setinput1(e.target.value)}
                  />
                </>
              ) : (
                <></>
              )}

              {input2 ? (
                <>
                  <input
                    type="text"
                    className="vi_0"
                    value={input2}
                    onChange={(e) => setinput2(e.target.value)}
                  />
                </>
              ) : (
                <></>
              )}
              {input3 ? (
                <>
                  <input
                    type="text"
                    className="vi_0"
                    value={input3}
                    onChange={(e) => setinput3(e.target.value)}
                  />
                </>
              ) : (
                <></>
              )}
            </div>

            <label htmlFor="">Answer</label>
            <p className="vi_0">{parse(`<div>${Answer}</div>`)}</p>
          </div>
          <div className="col-sm-4">
            <label htmlFor="">NO. OF Dash</label>
            <p className="vi_0">{Dash}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Edit
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addquestions();
            }}
          >
            Submit
          </Button>
          <Button
            variant="danger"
            onClick={() => window.location.assign("/adminFillintheblanks")}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Fillintheblanks_add;
