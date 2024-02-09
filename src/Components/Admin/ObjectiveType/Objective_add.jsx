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

const Objective_add = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");
const questiondata = JSON.parse(sessionStorage.getItem("selectdetails"));
console.log("object",questiondata)

  const navigate = useNavigate();

  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setQuestion(data);
  };
  const handleChange1 = (e, editor) => {
    const data = editor.getData();
    setAnswer(data);
  };
  
  //post

  const [Question, setQuestion] = useState("");
  const [Option_1, setOption_1] = useState("");
  const [Option_2, setOption_2] = useState("");

  const [Answer, setAnswer] = useState("");
  const [ImageQ, setImageQ] = useState("");
  const [Image_Ans, setImage_Ans] = useState("");
  const [Marks, setMarks] = useState("");
  const [Image_1, setImage_1] = useState("");
  const [Image_2, setImage_2] = useState("");
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

          Question: Question,
          Option_1: Option_1,
          Option_2: Option_2,
          Answer: Answer,

          ImageQ: ImageQ,
          Image_1: Image_1,
          Image_2: Image_2,
          Image_Ans: Image_Ans,

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
        handleClose();
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
  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Question 1 </label>

                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Question}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 1</label>
                <input
                  type="text"
                  className="vi_0"
                  onChange={(e) => setOption_1(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 2</label>
                <input
                  type="text"
                  className="vi_0"
                  onChange={(e) => setOption_2(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer 1</label>
                {/* <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="vi_0"
              ></textarea> */}
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Answer}
                  onChange={handleChange1}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor=""
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                (OR)
              </label>
            </div>

            <div className="col-md-12">
              <div className="do-sear">
                <label htmlFor="">Image Question</label>
                <input
                  type="file"
                  className="vi_0"
                  onChange={(e) => setImageQ(e.target.files[0])}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Image 1</label>
                <input
                  type="file"
                  className="vi_0"
                  onChange={(e) => setImage_1(e.target.files[0])}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Image 2</label>
                <input
                  type="file"
                  className="vi_0"
                  onChange={(e) => setImage_2(e.target.files[0])}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="do-sear">
                <label htmlFor="">Answer Image</label>
                <input
                  type="file"
                  className="vi_0"
                  onChange={(e) => setImage_Ans(e.target.files[0])}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Marks</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMarks(e.target.value);
                  }}
                >
                  <option>Select the Marks</option>
                  <option>1/2</option>
                  <option>1/4</option>
                  <option>1/3</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>10</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Answer Timing</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setAnswer_Time(e.target.value);
                  }}
                >
                  <option>Select the Time</option>
                  <option>1/2 Mnt</option>
                  <option>1/4 Mnt</option>
                  <option>1 mnt</option>
                  <option>1.30 minutes</option>
                  <option>2 minutes</option>
                  <option>3 minutes</option>
                  <option>4 minutes</option>
                  <option>5 minutes</option>
                  <option>6 minutes</option>
                  <option>7 minutes</option>
                  <option>8 minutes</option>
                  <option>9 minutes</option>
                  <option>10 minutes</option>
                </Form.Select>
              </div>
            </div>
           
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
              //   addquestions();
              handleShow();
            }}
            className="modal-add-btn"
          >
            Save
          </Button>
        </div>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        style={{ zIndex: "99999" }}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#26AAE0" }}>
          <Modal.Title style={{ color: "white" }}>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12">
            <div className="do-sear mt-2">
              <label htmlFor="">Question </label>
              <p className="vi_0">{parse(`<div>${Question}</div>`)}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 1 </label>
                <p className="vi_0">{parse(`<div>${Option_1}</div>`)}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 2 </label>
                <p className="vi_0">{parse(`<div>${Option_2}</div>`)}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="do-sear mt-2">
              <label htmlFor="">Answer</label>
              <p className="vi_0">{parse(`<div>${Answer}</div>`)}</p>
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor=""
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              (OR)
            </label>
          </div>
          <div className="col-md-12">
            <div className="do-sear mt-2">
              <label htmlFor="">Image Question</label>
              <div>
                <img src={ImageQ && URL.createObjectURL(ImageQ)} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 1 </label>
                <div>
                  <img src={Image_1 && URL.createObjectURL(Image_1)} alt="" />
                </div>{" "}
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 2 </label>
                <div>
                  <img src={Image_2 && URL.createObjectURL(Image_2)} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="do-sear mt-2">
              <label htmlFor="">Image Answer</label>
              <div>
                <img src={Image_Ans && URL.createObjectURL(Image_Ans)} alt="" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            <Button
              className="mx-2 modal-add-btn"
              variant=""
              onClick={() => {
                handleClose();
              }}
            >
              Edit
            </Button>
            <Button
              className="mx-2 modal-add-btn"
              variant=""
              onClick={() => {
                addquestions();
                handleClose();
              }}
            >
              Submit
            </Button>
            <Button
              className="mx-2 modal-close-btn"
              variant=""
              onClick={() => {
                handleClose();
                navigate(`/Classlkg`);
              }}
            >
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Objective_add;
