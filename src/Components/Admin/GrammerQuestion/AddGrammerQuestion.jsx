import React, { useEffect, useState } from "react";
import { Form, Button, Modal, Table } from "react-bootstrap";
// import "../Admin/Admin.css";
import "../../Admin/Admin.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const TableCell = ({ value, onChange }) => {
  return (
    <td>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </td>
  );
};

function AddGrammerQuestion({selectdetails}) {
  const questiondata = JSON.parse(sessionStorage.getItem("selectdetails"));
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  // new Row and new column
  const [tableData, setTableData] = useState([]);
  console.log("tableData", tableData);
  const addRow = () => {
    const newRow = Array(tableData[0]?.length || 0).fill("New Data");
    setTableData([...tableData, newRow]);
  };

  const addCol = () => {
    const newTableData = tableData.map((row) => [...row, "New Data"]);
    setTableData(newTableData);
  };

  // const handleCellChange = (value, rowIndex, colIndex) => {
  //   const newTableData = [...tableData];
  //   newTableData[rowIndex][colIndex] ={ row:value,col:value};
  //   setTableData(newTableData);
  // };

  const handleCellChange = (value, rowIndex, colIndex) => {
    const newTableData = [...tableData];
    const colData = newTableData.map(row => row[colIndex]);
    // const colDataObject = { colData: value };
    colData[colIndex] = { colData: value };
    console.log("colIndex",colIndex);
    setTableData(newTableData);
  };






  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setQuestion(data);
  };
  const handleChange1 = (e, editor) => {
    const data = editor.getData();
    setAnswer(data);
  };


  //post

  const [Line, setLine] = useState("2");
  const [Question, setQuestion] = useState("");
  const [Marks, setMarks] = useState("");
  const [Answer, setAnswer] = useState("");
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
          NumberOfLine: Line,
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
        return navigate("/adminquestions");
      }
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Question</label>
                <CKEditor
                  editor={ClassicEditor}
                  className="vi_0"
                  data={Question}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="do-sear mt-2">
                <label htmlFor="">Answer</label>
                <div>
                  <div className="my-2">
                    <button
                      onClick={addRow}
                      style={{ width: "100px", padding: "4px" }}
                    >
                      Add Row
                    </button>
                    <button
                      onClick={addCol}
                      style={{ float: "right", width: "100px", padding: "4px" }}
                    >
                      Add Column
                    </button>
                  </div>

                  <Table
                    responsive
                    bordered
                    style={{ width: "-webkit-fill-available" }}
                  >

                    <tbody>
                      {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <TableCell
                              key={cellIndex}
                              className="vi_0"
                              value={cell}
                              onChange={(value) =>
                                handleCellChange(value, rowIndex, cellIndex) // Pass value, rowIndex, and cellIndex
                              }
                            />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="do-sear mt-2">
                <label htmlFor="">Select Number of Line</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setLine(e.target.value)}
                >
                  <option>Select Answer Line</option>
                  <option value="2"> 2 </option>
                  <option value="3"> 3 </option>
                  <option value="4"> 4 </option>
                  <option value="5"> 5 </option>
                  <option value="6"> 6 </option>
                  <option value="7"> 7 </option>
                  <option value="8"> 8 </option>
                  <option value="9"> 9 </option>

                </Form.Select>
              </div>
            </div>

            <div className="col-8">
              {Line === "2" ? (
                <>
                  <div className="col-md-12">
                    <div className="do-sear mt-4">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                </>
              ) : (<></>)}
              {Line === "3" ? (
                <>
                  <div className="col-md-12">
                    <div className="do-sear mt-4">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                </>
              ) : (<></>)}
              {Line === "4" ? (
                <>
                  <div className="col-md-12">
                    <div className="do-sear mt-4">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                </>
              ) : (<></>)}
              {Line === "5" ? (
                <>
                  <div className="col-md-12">
                    <div className="do-sear mt-4">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p type="text" className="lined-input"></p>
                    </div>
                  </div>
                </>
              ) : (<></>)}
              {Line === "6" ? (
                <>
                  <div className="col-md-12">
                    <div className="do-sear mt-4">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>
                </>
              ) : (<></>)}
              {Line === "7" ? (
                <>
                  <div className="col-md-12">
                    <div className="do-sear mt-4">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>
                </>
              ) : (<></>)}
              {Line === "8" ? (
                <>
                  <div className="col-md-12">
                    <div className="do-sear mt-4">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>
                </>
              ) : (<></>)}
              {Line === "9" ? (
                <>
                  <div className="col-md-12">
                    <div className="do-sear mt-4">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>{" "}
                  <div className="col-md-12">
                    <div className="do-sear mt-2">
                      <p
                        type="text"
                        className="lined-input"
                      ></p>
                    </div>
                  </div>
                </>
              ) : (<></>)}
            </div>
            {/*<div className="col-md-6">
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
                  onChange={(e) => setMarks(e.target.value)}>
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
                  onChange={(e) => setAnswer_Time(e.target.value)}>
                  <option value="1/2 Mnt">1/2 Mnt</option>
                  <option value="1/4 Mnt">1/4 Mnt</option>
                  <option value="1 Mnt">1 Mnt</option>
                  <option value="1.30 minutes">1.30 minutes</option>
                  <option value="1 minutes">1 minutes</option>
                  <option value="2 minutes">2 minutes</option>
                  <option value="3 minutes">3 minutes</option>
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
            {/* <div className="col-md-12">
              <div className="do-sear mt-2">
                <div className="do-sear mt-2">
                  <label htmlFor="">Answer</label>
                  <CKEditor
                    editor={ClassicEditor}
                    className="vi_0"
                    data={Answer}
                    onChange={handleChange7}
                  />
                </div>
              </div>
            </div> */}
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
          <Modal.Title>Grammer Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="">Question</label>
            <p className="vi_0">
              Draw the figure below according to the given specifications:
            </p>
            <label htmlFor="">Answer</label>
            <Table responsive bordered style={{ width: "-webkit-fill-available" }}>
              {/* <thead>
        <tr>
          {tableData[0]?.map((header, index) => (
            <th key={index}>
              <input
                type="text"
                value={header}
                onChange={(e) => handleCellChange(e.target.value, 0, index)}
              />
            </th>
          ))}
        </tr>
      </thead> */}
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>
                        <input
                          type="text"
                          value={cell}
                          onChange={(e) => handleCellChange(e.target.value, rowIndex, cellIndex)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
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
            onClick={() => window.location.assign("/grammerquestionlist")}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddGrammerQuestion;
