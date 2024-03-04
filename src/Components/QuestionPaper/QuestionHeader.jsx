import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { debounce } from "lodash";
import { AiFillDelete } from 'react-icons/ai';
import { BiSolidEdit } from 'react-icons/bi';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import "../Admin/Admin.css";
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function QuestionHeader() {
    const admin = JSON.parse(sessionStorage.getItem("admin"));
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate()
    const [show, setShow] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Translate
    let googleTransliterate = require("google-input-tool");
    const [translatedValue, setTranslatedValue] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("en-t-i0-und");
    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };
    const onChangeHandler = debounce(async (value, setData) => {
        if (!value) {
            setTranslatedValue("");
            setData("");
            return "";
        }

        let am = value.split(/\s+/); // Split by any whitespace characters
        let arr = [];
        let promises = [];

        for (let index = 0; index < am.length; index++) {
            promises.push(
                new Promise(async (resolve, reject) => {
                    try {
                        const response = await googleTransliterate(
                            new XMLHttpRequest(),
                            am[index],
                            selectedLanguage
                        );
                        resolve(response[0][0]);
                    } catch (error) {
                        console.error("Translation error:", error);
                        resolve(am[index]);
                    }
                })
            );
        }

        try {
            const translations = await Promise.all(promises);
            setTranslatedValue(translations.join(" "));
            setData(translations.join(" "));
            return translations;
        } catch (error) {
            console.error("Promise.all error:", error);
        }
    }, 300); // Debounce delay in milliseconds

    const [Class, setClass] = useState("")
    const [Sunject, setSunject] = useState("")
    const [Marks, setMarks] = useState("")
    const [Time, setTime] = useState("")
    const [StudentInfo, setStudentInfo] = useState("")
    const [ExamDate, setExamDate] = useState("")
    const [TotalQuestion, setTotalQuestion] = useState("")
    const [NameofStudent, setNameofStudent] = useState("")
    const [SatsNo, setSatsNo] = useState("")
    const [Signature, setSignature] = useState("")
    const [roomInvigilator, setroomInvigilator] = useState("")
    const [Idsccode, setIdsccode] = useState("")
    const [SchoolName, setSchoolName] = useState("")
    const [Cluster, setCluster] = useState("")
    const [Block, setBlock] = useState("")
    const [Distric, setDistric] = useState("")
    const [Govt, setGovt] = useState("")
    const [Aided, setAided] = useState("")
    const [Unaided, setUnaided] = useState("")
    const [markinfo, setmarkinfo] = useState("")
    const [SignatuteInvigilator, setSignatuteInvigilator] = useState("")
    // const [first, setfirst] = useState(second)
    return (
        <>
            <div className='d-flex justify-content-between align-items-center' >
                <div>
                    <div class="input-group ">
                        <span class="input-group-text" id="basic-addon1">
                            <BsSearch />
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Search..."
                            aria-describedby="basic-addon1"

                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Select Langauge</label>
                    <select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className="vi_0"
                        style={{ borderRadius: "20px", backgroundColor: "#e2cbd0" }}
                    >
                        <option value="en-t-i0-und">English</option>
                        <option value="ne-t-i0-und">Nepali</option>
                        <option value="hi-t-i0-und">Hindi</option>
                        <option value="kn-t-i0-und">Kannada</option>
                        <option value="ta-t-i0-und">Tamil</option>
                        <option value="pa-t-i0-und">Punjabi</option>
                        <option value="mr-t-i0-und">Marathi</option>
                        <option value="ur-t-i0-und">Urdu</option>
                        <option value="sa-t-i0-und">Sanskrit</option>
                    </select>
                </div>
            </div>

            <div className='customerhead p-2'>
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="header-c ">Question Type</h2>
                    <button className="admin-add-btn" onClick={handleShow}>
                        Add Type
                    </button>
                </div>
                <div className="mb-3">
                    <Table
                        responsive
                        bordered
                        style={{ width: "-webkit-fill-available", }}
                    >
                        <thead style={{ backgroundColor: "navy", color: "white" }}>
                            <tr>
                                <th>S.No</th>
                                <th>
                                    <div>Medium</div>
                                </th>
                                <th>
                                    <div>Type Of Question</div>
                                </th>
                                <th>
                                    <div>Question Header</div>
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr style={{ textAlign: "center" }}>
                                <td>1</td>
                                <td>English</td>
                                <td>ENglish</td>
                                <td
                                    style={{ fontSize: "20px", color: "green", cursor: "pointer" }}
                                    onClick={() => navigate("/viewheader")}
                                ><FaEye /></td>
                                <td><AiFillDelete /></td>
                            </tr>
                            {/* {QuestionType?.map((item, i) => {
                                return (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{item?.QFormatMedium}</td>

                                        <td>{item?.typeOfquestion}</td>
                                        <td>
                                            {item?.translatelang ? (<>
                                                {item?.translatelang}
                                            </>):(<>
                                                {item?.Qformat}
                                            
                                            </>)}
                                            
                                            </td>

                                        <td>
                                            {" "}
                                            <div style={{ display: "flex", gap: "20px" }}>
                                                <div>
                                                    <BiSolidEdit
                                                        className="text-success"
                                                        style={{ cursor: "pointer", fontSize: "20px" }}
                                                        // onClick={() => {
                                                        //     handleShow1();
                                                        //     setQuestionTypeId(item);

                                                        // }}
                                                    />{" "}
                                                </div>
                                                <div>
                                                    <AiFillDelete
                                                        className="text-danger"
                                                        style={{ cursor: "pointer", fontSize: "20px" }}
                                                        // onClick={() => {
                                                        //     setQuestionTypeId(item);
                                                        //     handleShow2();
                                                        // }}
                                                    />{" "}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })} */}
                        </tbody>
                    </Table>
                </div>

                {/* Add Model */}
                <Modal show={show} onHide={handleClose} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Question Header</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="">
                                <div className="details-display ">
                                    <div className="top-titles-container mb-2">
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <img
                                                    src="./Images/logo.png"
                                                    alt=""
                                                    style={{ width: "80px", marginTop: "24px" }}
                                                />
                                            </div>
                                            <div className="col-sm-8">
                                                <h4 className="mb-2"> ಮೋಹನ್ ಕುಮಾರ್ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆ</h4>
                                                {/* <h4>{data?.Board}</h4>  title-1 */}
                                                {/* {data?.Institute_Name ? (
              <h5>
                {data?.Institute_Name},{data?.SchoolAddress}
              </h5>
            ) : (
              <></>
            )} */}
                                                <h6>ಎರಡನೆಯ ಸಂಕಲನಾತ್ಮಕ ಮೌಲ್ಯಮಾಪನ - 2023-24</h6>
                                            </div>
                                        </div>
                                        <div className="title-2">
                                            {/* {data?.Institute_Name ? (
              <h5>
                {data?.Institute_Name},{data?.SchoolAddress}
              </h5>
            ) : (
              <></>
            )} */}
                                        </div>
                                        <div className="title-3">
                                            {/* <h4>{data?.Exam_Name} {" "}{data?.Exam_Lavel}</h4> */}
                                            {/* <h6>ಎರಡನೆಯ ಸಂಕಲನಾತ್ಮಕ ಮೌಲ್ಯಮಾಪನ - 2023-24</h6> */}
                                        </div>
                                    </div>

                                    <div className="class-details mb-2">
                                        <div className="class-data ">
                                            <b className='d-flex'> <Form.Control type="text" placeholder="Class" /><span>:</span>  </b>
                                        </div>
                                        <div className="class-data">
                                            <b className='d-flex'> <Form.Control type="text" placeholder="Subject" /><span>:</span>  </b>
                                        </div>
                                        <div className='mb-2'>
                                            <div className="class-data ">
                                                <b className='d-flex'> <Form.Control type="text" placeholder="Marks" /><span>:</span>  </b>
                                            </div>
                                            <div className="class-data">
                                                <b className='d-flex'> <Form.Control type="text" placeholder="Time" /><span>:</span>  </b>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="student-details-container">
                                        <div className="d-flex justify-content-between">
                                            {/* <h5 style={{ textAlign: "center", padding: "5px 0px" }}>
              Information to be filled by the Student
            </h5> */}
                                            {/* <h6 style={{ textAlign: "center", padding: "5px 0px" }}>
            ವಿದ್ಯಾರ್ಥಿಯಿಂದ ಭರ್ತಿ ಮಾಡಬೇಕಾದ ಮಾಹಿತಿ
            </h6> */}
                                            <div style={{width:"60%"}}>
                                                <b className='d-flex'> <Form.Control type="text" placeholder=" Information to be filled by the Student" />  </b>

                                            </div>
                                            <div>
                                                <span style={{ fontSize: "16px" }}>
                                                    <b className='d-flex'> <Form.Control type="text" placeholder="Exam Date" /><span>:</span>  </b>
                                                </span>{" "}
                                                <br />
                                                <span>
                                                    <b className='d-flex'> <Form.Control type="text" placeholder=" Total Question" /><span>:</span>  </b>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="student-details">
                                            {/* <p style={{ margin: "0px" }}>ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು:</p> */}
                                            <p style={{ margin: "0px" }}>
                                                <b className='d-flex'> <Form.Control type="text" placeholder=" Name of the Student" /><span>:</span>  </b></p>
                                            <div className="line"></div>
                                        </div>

                                        <div className="student-number-row">
                                            <div style={{ margin: " auto 0" }}>
                                                <p> <b className='d-flex'> <Form.Control type="text" placeholder=" Student SATS No" /><span>:</span>  </b></p>
                                                {/* <p>ವಿದ್ಯಾರ್ಥಿ SATS ನಂ:</p> */}
                                            </div>
                                            <div className="d-flex">
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                            </div>
                                            <div className="ss">
                                                <p>
                                                    <b className='d-flex'> <Form.Control type="text" placeholder=" Signature of the Student" /><span>:</span>  </b>
                                                </p>
                                                {/* <p>ವಿದ್ಯಾರ್ಥಿಯ ಸಹಿ:</p> */}
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="student-details-container">
                                        <h5 style={{ textAlign: "center" }}>

                                            <b className='d-flex'> <Form.Control type="text" placeholder=" Information to be filled by the Room Invigilator" /><span>:</span>  </b>
                                        </h5>
                                        {/* <h6 style={{ textAlign: "center" }}>
          ರೂಮ್ ಇನ್ವಿಜಿಲೇಟರ್ ಮೂಲಕ ಭರ್ತಿ ಮಾಡಬೇಕಾದ ಮಾಹಿತಿ
          </h6> */}

                                        <div className="school-number-row">
                                            <div style={{ margin: " auto 0" }}>
                                                <p>
                                                    <b className='d-flex'> <Form.Control type="text" placeholder=" School IDSE Code" /><span>:</span>  </b>
                                                </p>
                                                {/* <p>ಶಾಲೆಯ IDSE ಕೋಡ್:</p> */}
                                            </div>
                                            <div className="d-flex">
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                                <div className="number-box"></div>
                                            </div>
                                        </div>
                                        <div className="student-details">
                                            <p style={{ margin: "0px" }}>
                                                <b className='d-flex'> <Form.Control type="text" placeholder=" School Name" /><span>:</span>  </b>
                                            </p>
                                            {/* <p style={{ margin: "0px" }}>ಶಾಲೆಯ ಹೆಸರು:</p> */}
                                            <div className="line-2"></div>
                                        </div>
                                    </div>

                                    <div className="third-row">
                                        <div className="student-details">
                                            <p style={{ margin: "0px" }}>
                                                <b className='d-flex'> <Form.Control type="text" placeholder="Cluster" /><span>:</span>  </b>

                                            </p>
                                            {/* <p style={{ margin: "0px" }}>ಕ್ಲಸ್ಟರ್:</p> */}
                                            <div className="line-3"></div>
                                        </div>
                                        <div className="student-details">
                                            <p style={{ margin: "0px" }}>
                                                <b className='d-flex'> <Form.Control type="text" placeholder="Block" /><span>:</span>  </b>

                                            </p>
                                            {/* <p style={{ margin: "0px" }}>ನಿರ್ಬಂಧಿಸಿ:</p> */}
                                            <div className="line-3"></div>
                                        </div>
                                        <div className="student-details">
                                            <p style={{ margin: "0px" }}>
                                                <b className='d-flex'> <Form.Control type="text" placeholder="District" /><span>:</span>  </b>
                                            </p>
                                            {/* <p style={{ margin: "0px" }}>ಜಿಲ್ಲೆ:</p> */}
                                            <div className="line-3"></div>
                                        </div>
                                    </div>

                                    <div className="fourth-row">
                                        <div className="school-details">
                                            {/* <p style={{ margin: "0px" }}>ಶಾಲೆಯ ಹೆಸರು:</p> */}
                                            <p style={{ margin: "0px" }}>
                                                <b className='d-flex'> <Form.Control type="text" placeholder="School Name" /><span>:</span>  </b>
                                            </p>
                                        </div>
                                        <div className="school-details">
                                            <p style={{ margin: "0px" }}>
                                                <b className='d-flex'> <Form.Control type="text" placeholder="Govt." /><span>:</span>  </b>
                                            </p>
                                            {/* <p style={{ margin: "0px" }}>ಸರಕಾರ</p> */}
                                            <div className="number-box-1"></div>
                                        </div>
                                        <div className="school-details">
                                            {/* <p style={{ margin: "0px" }}>ನೆರವು ನೀಡಿದೆ</p> */}
                                            <p style={{ margin: "0px" }}>
                                                <b className='d-flex'> <Form.Control type="text" placeholder="Aided" /><span>:</span>  </b>

                                            </p>
                                            <div className="number-box-1"></div>
                                        </div>
                                        <div className="school-details">
                                            <p style={{ margin: "0px" }}>
                                                <b className='d-flex'> <Form.Control type="text" placeholder="Un-aided" /><span>:</span>  </b>
                                            </p>
                                            {/* <p style={{ margin: "0px" }}>ಅನುದಾನರಹಿತ</p> */}
                                            <div className="number-box-1"></div>
                                        </div>
                                    </div>

                                    <div>  <b className='d-flex'> <Form.Control type="text" placeholder="Put ✓ mark for applicable information" /><span>:</span>  </b></div>
                                    {/* <div>(ಅನ್ವಯವಾಗುವ ಮಾಹಿತಿಗಾಗಿ "✓" ಗುರುತು ಹಾಕಿ)</div> */}
                                    <div className="student-details" style={{ padding: "10px 0" }}>
                                        <p style={{ margin: "0px" }}>
                                            <b className='d-flex'> <Form.Control type="text" placeholder="Signature of the Room Invigilator" /><span>:</span>  </b>

                                        </p>
                                        {/* <p style={{ margin: "0px" }}>ರೂಮ್ ಇನ್ವಿಜಿಲೇಟರ್ ಸಹಿ: </p> */}
                                        <div className="line-4"></div>
                                    </div>

                                    <div>
                                        {/* <h5 style={{ textAlign: "center", padding: "5px 0px" }}>

            Information to be filled by the Evaluator at the time of
            evaluation
          </h5> */}
                                        <b className='d-flex'> <Form.Control type="text" placeholder=" Information to be filled by the Evaluator at the time of
            evaluation" />  </b><br />
                                        {/* <h5 style={{ textAlign: "center", padding: "5px 0px" }}>
          ಮೌಲ್ಯಮಾಪನದ ಸಮಯದಲ್ಲಿ ಮೌಲ್ಯಮಾಪಕರು ತುಂಬಬೇಕಾದ ಮಾಹಿತಿ
          </h5> */}


                                        <Table
                                            responsive
                                            bordered
                                            style={{ border: "1px solid" }}
                                            size="sm"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <b className='d-flex'> <Form.Control type="text" placeholder=" Question Number" />  </b>
                                                    </th>
                                                    {/* <th>ಪ್ರಶ್ನೆ ಸಂಖ್ಯೆ</th> */}
                                                    <th>
                                                        <b className='d-flex'> <Form.Control type="text" placeholder="Obtained marks" />  </b>
                                                    </th>
                                                    {/* <th>ಅಂಕಗಳನ್ನು ಪಡೆದಿದ್ದಾರೆ</th> */}
                                                    <th><b className='d-flex'> <Form.Control type="text" placeholder=" Question Number" />  </b></th>
                                                    {/* <th>ಪ್ರಶ್ನೆ ಸಂಖ್ಯೆ</th> */}
                                                    <th> <b className='d-flex'> <Form.Control type="text" placeholder="Obtained marks" />  </b></th>
                                                    {/* <th>ಅಂಕಗಳನ್ನು ಪಡೆದಿದ್ದಾರೆ</th> */}
                                                    <th><b className='d-flex'> <Form.Control type="text" placeholder=" Question Number" />  </b></th>
                                                    {/* <th>ಪ್ರಶ್ನೆ ಸಂಖ್ಯೆ</th> */}
                                                    {/* <th>ಅಂಕಗಳನ್ನು ಪಡೆದಿದ್ದಾರೆ</th> */}
                                                    <th> <b className='d-flex'> <Form.Control type="text" placeholder="Obtained marks" />  </b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td></td>
                                                    <td>11</td>
                                                    <td></td>
                                                    <td>21</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td></td>
                                                    <td>12</td>
                                                    <td></td>
                                                    <td>22</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td></td>
                                                    <td>13</td>
                                                    <td></td>
                                                    <td>23</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td></td>
                                                    <td>14</td>
                                                    <td></td>
                                                    <td>24</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td></td>
                                                    <td>15</td>
                                                    <td></td>
                                                    <td>25</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td></td>
                                                    <td>16</td>
                                                    <td></td>
                                                    <td>-</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td></td>
                                                    <td>17</td>
                                                    <td></td>
                                                    <td>-</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td></td>
                                                    <td>18</td>
                                                    <td></td>
                                                    <td>-</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td></td>
                                                    <td>19</td>
                                                    <td></td>
                                                    <td>-</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td></td>
                                                    <td>20</td>
                                                    <td></td>
                                                    <td>-</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        {/* <b>Total marks</b> */}
                                                        <b className='d-flex'> <Form.Control type="text" placeholder="Total marks" />  </b>
                                                        {/* <b>ಒಟ್ಟು ಅಂಕಗಳು</b> */}
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        {/* <b>Total marks</b> */}
                                                        <b className='d-flex'> <Form.Control type="text" placeholder="Total marks" />  </b>
                                                        {/* <b>ಒಟ್ಟು ಅಂಕಗಳು</b> */}
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        {/* <b>Total marks</b> */}
                                                        <b className='d-flex'> <Form.Control type="text" placeholder="Total marks" />  </b>
                                                        {/* <b>ಒಟ್ಟು ಅಂಕಗಳು</b> */}
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        {/* <b>Grade Total</b> */}
                                                        <b className='d-flex'> <Form.Control type="text" placeholder="Grade Total" />  </b>
                                                        {/* <b>ಗ್ರೇಡ್ ಒಟ್ಟು</b> */}
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="student-details">
                                        <p style={{ margin: "0px",width:"53%"}}>
                                            <b className='d-flex'> <Form.Control type="text" placeholder="Total marks obtained (in words)" /><span>:</span>  </b>

                                            {/* Total marks obtained (in words):  */}
                                        </p>
                                        {/* <p style={{ margin: "0px" }}>ಪಡೆದ ಒಟ್ಟು ಅಂಕಗಳು (ಪದಗಳಲ್ಲಿ): </p> */}
                                        <div className="line-5"></div>
                                    </div><br/>
                                    <div className="student-details">
                                        <p style={{ margin: "0px",width:"53%" }}>
                                            <b className='d-flex'> <Form.Control type="text" placeholder="Signature of the Evaluator" /><span>:</span>  </b>

                                        </p>
                                        {/* <p style={{ margin: "0px" }}>ಮೌಲ್ಯಮಾಪಕರ ಸಹಿ:</p> */}
                                        <div className="line-6"></div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>



        </>
    )
}

export default QuestionHeader