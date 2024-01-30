import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "../Admin/Admin.css";
import swal from "sweetalert";
import axios from "axios";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

const AdminQuestionDetailsview = () => {
  const { question_Id } = useParams();
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  const [question_details, setquestion_details] = useState([]);
  const getquestionbyid = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/admin/getQuestionpaperadminbyid/${question_Id}`
      );
      if (res.status == 200) {
        setquestion_details(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // get method
  const [getboardname, setboardname] = useState([]);
  const getallboardname = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/admin/getAllBoard");
      if (res.status == 200) {
        setboardname(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallboardname();
    getquestionbyid();
  }, []);

  return (
    <div>
      <div className="box_1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Section</label>
                <p className="vi_0">{question_details?.Section}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Examination Board</label>
                <p className="vi_0">{question_details?.Board}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Medium</label>
                <p className="vi_0">{question_details?.Medium}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Class</label>
                <p className="vi_0">{question_details?.Class}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Sub-Class</label>
                <p className="vi_0">{question_details?.Sub_Class}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Subject</label>
                <p className="vi_0">{question_details?.Subject}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Lesson</label>
                <p className="vi_0">{question_details?.Lesson}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Chapter Name</label>
                <p className="vi_0">{question_details?.Chapter_Name}</p>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Difficulty Level</label>
                <p className="vi_0">{question_details?.Difficulty_level}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Types of the Question</label>
              </div>{" "}
              <p className="vi_0">{question_details?.Types_Question}</p>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Name Of the Examination</label>
                <p className="vi_0">{question_details?.Name_of_examination}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Objectives</label>
                <p className="vi_0">{question_details?.Objectives}</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="do-sear">
                <label htmlFor="">Instructions</label>
                <p className="vi_0">
                  {question_details?.Instruction
                    ? parse(question_details?.Instruction)
                    : ""}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Question</label>
                <p className="vi_0">
                  {question_details?.Question
                    ? parse(question_details?.Question)
                    : ""}
                </p>
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
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 1</label>
                {/* <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Option_1}
                  onChange={handleChange3}
                /> */}
                <p className="vi_0">
                  {question_details?.Option_1
                    ? parse(question_details?.Option_1)
                    : ""}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 2</label>
                {/* <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Option_2}
                  onChange={handleChange4}
                /> */}
                <p className="vi_0">
                  {question_details?.Option_1
                    ? parse(question_details?.Option_1)
                    : ""}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 3</label>
                {/* <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Option_3}
                  onChange={handleChange5}
                /> */}
                <p className="vi_0">
                  {question_details?.Option_3
                    ? parse(question_details?.Option_3)
                    : ""}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 4</label>
                <p className="vi_0">
                  {question_details?.Option_4
                    ? parse(question_details?.Option_4)
                    : ""}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Image</label> <br />
                <img
                  src={`http://localhost:8000/Questions/${question_details?.Image}`}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Marks</label>
                <p className="vi_0">{question_details?.Marks}</p>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Answer Time</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter the answer time"
                />
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <div className="do-sear mt-2">
                  <label htmlFor="">Answer</label>
                  {/* <CKEditor
                    editor={ClassicEditor}
                    className="vi_0"
                    data={Answer}
                    onChange={handleChange7}
                  /> */}
                  <p className="vi_0">
                    {question_details?.Answer
                      ? parse(question_details?.Answer)
                      : ""}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="yoihjij my-4">
              <button style={{ float: "right" }}>Add</button>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="yoihjij text-center my-2">
        <button style={{}}>Submit</button>
      </div> */}
    </div>
  );
};

export default AdminQuestionDetailsview;