import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "../Admin/Admin.css";
import swal from "sweetalert";
import axios from "axios";

const AdminQuestionDetailsview = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

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
  }, []);

  return (
    <div>
      <div className="box_1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Examination Board</label>
                <Form.Select
                  aria-label="Default select example"
                  className="vi_0"
                >
                  <option>Select the Board</option>
                  {getboardname?.map((item,i)=>{
                    return(
                      <option value={item?.boardName}>{item?.boardName}</option>
                    )
                  })}
                 
                  
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Medium</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Medium</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kanada">Kanada</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Class</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Class</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kanada">Kanada</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Sub-Class</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Sub-Class</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kanada">Kanada</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Subject</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Subject</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kanada">Kanada</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Chapter Name</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Chapter Name</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kanada">Kanada</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select the Difficulty level of Paper</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Difficulty level of Paper</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kanada">Kanada</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select the Types of the Question</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Types of the Question</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kanada">Kanada</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Select the Question From</label>
                <Form.Select aria-label="Default select example">
                  <option>Select the Question From</option>
                  <option value="English">Prose(Lesson)</option>
                  <option value="Hindi">Poetry</option>
                  <option value="Kanada">Non-Detailed</option>
                  <option value="Kanada">Grammar</option>
                  <option value="Kanada">Vocabulary</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Question</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="vi_0"
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 1</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Opion 1"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 2</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Option 2"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 3</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Option 3"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor="">Option 4</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Option 4"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Image</label>
                <input type="file" className="vi_0" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear mt-2">
                <label htmlFor=""> Marks</label>
                <input
                  type="number"
                  className="vi_0"
                  placeholder="Enter The Marks"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="do-sear">
                <label htmlFor="">Answer Time</label>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter the answer time"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <div className="do-sear mt-2">
                  <label htmlFor="">Answer 1</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="vi_0"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="yoihjij my-4">
              <button style={{ float: "right" }}>Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="yoihjij text-center my-2">
        <button style={{}}>Submit</button>
      </div>
    </div>
  );
};

export default AdminQuestionDetailsview;
