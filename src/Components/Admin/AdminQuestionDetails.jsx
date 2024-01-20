import React from "react";
import { Form } from "react-bootstrap";
import "../Admin/Admin.css";

const AdminQuestionDetails = () => {
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
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CH">Chandigarh</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="LA">Ladakh</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PY">Puducherry</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
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

export default AdminQuestionDetails;
