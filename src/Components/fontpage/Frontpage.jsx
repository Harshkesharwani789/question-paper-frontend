import React from "react";
import "../fontpage/Frontpage.css";

import Table from "react-bootstrap/Table";
const Frontpage = ({ data }) => {
  console.log("data", data);

  return (
    <div>
      {/* new  */}
      <div className="question-paper-display">
        <div className="details-display ">
          <div className="top-titles-container">
            <div className="row">
              <div className="col-sm-2">
                {data?.School_Logo ? (
                  <img
                    src={`http://localhost:8000/Teacher/${data?.School_Logo}`}
                    alt=""
                    style={{ width: "80px", marginTop:"24px"}}
                  />
                ) : (
                  <></>
                )}
              </div>
              <div className="col-sm-8">
                {/* <h4 className="mb-2"> ಮೋಹನ್ ಕುಮಾರ್ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆ</h4> */}
                {/* <h4>{data?.Board}</h4>  */}
                {data?.Institute_Name ? (
                <h5>
                  {data?.Institute_Name},{data?.SchoolAddress}
                </h5>
              ) : (
                <></>
              )}
               <h6>ಒಂದನೆಯ ಸಂಕಲನಾತ್ಮಕ ಮೌಲ್ಯಮಾಪನ 2024</h6>
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

          <div className="class-details">
            <div className="class-data">
              <b>ವರ್ಗ : {data?.Sub_Class}</b>
            </div>
            <div className="class-data">
              <b>ವಿಷಯ: {data?.Subject}</b>
            </div>
            <div>
              <div className="class-data">
                <b>ಅಂಕಗಳು: {data?.bluePrint?.TotalDifficultMask}</b>
              </div>
              <div className="class-data">
                <b>ಸಮಯ: {data?.bluePrint?.DurationOfExam} </b>
              </div>
            </div>
          </div>

          <div className="student-details-container">
            <div className="d-flex justify-content-between">
              {/* <h5 style={{ textAlign: "center", padding: "5px 0px" }}>
                Information to be filled by the Student
              </h5> */}
              <h6 style={{ textAlign: "center", padding: "5px 0px" }}>
              ವಿದ್ಯಾರ್ಥಿಯಿಂದ ಭರ್ತಿ ಮಾಡಬೇಕಾದ ಮಾಹಿತಿ
              </h6>
              <div>
                <span style={{ fontSize: "16px" }}>
                ಪರೀಕ್ಷೆಯ ದಿನಾಂಕ: {data?.Test_Date}
                </span>{" "}
                <br />
                <span>ಒಟ್ಟು ಪ್ರಶ್ನೆಗಳು: 25</span>
              </div>
            </div>
            <div className="student-details">
              <p style={{ margin: "0px" }}>ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು:</p>
              {/* <p style={{ margin: "0px" }}>Name of the Student:</p> */}
              <div className="line"></div>
            </div>

            <div className="student-number-row">
              <div style={{ margin: " auto 0" }}>
                {/* <p>Student SATS No:</p> */}
                <p>ವಿದ್ಯಾರ್ಥಿ SATS ನಂ:</p>
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
                {/* <p>Signature of the Student:</p> */}
                <p>ವಿದ್ಯಾರ್ಥಿಯ ಸಹಿ:</p>
                <div className="line"></div>
              </div>
            </div>
          </div>

          <div className="student-details-container">
            {/* <h5 style={{ textAlign: "center" }}>
              Information to be filled by the Room Invigilator
            </h5> */}
            <h6 style={{ textAlign: "center" }}>
            ರೂಮ್ ಇನ್ವಿಜಿಲೇಟರ್ ಮೂಲಕ ಭರ್ತಿ ಮಾಡಬೇಕಾದ ಮಾಹಿತಿ
            </h6>

            <div className="school-number-row">
              <div style={{ margin: " auto 0" }}>
                {/* <p>School IDSE Code:</p> */}
                <p>ಶಾಲೆಯ IDSE ಕೋಡ್:</p>
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
              {/* <p style={{ margin: "0px" }}>School Name :</p> */}
              <p style={{ margin: "0px" }}>ಶಾಲೆಯ ಹೆಸರು:</p>
              <div className="line-2"></div>
            </div>
          </div>

          <div className="third-row">
            <div className="student-details">
              {/* <p style={{ margin: "0px" }}>Cluster:</p> */}
              <p style={{ margin: "0px" }}>ಕ್ಲಸ್ಟರ್:</p>
              <div className="line-3"></div>
            </div>
            <div className="student-details">
              {/* <p style={{ margin: "0px" }}>Block:</p> */}
              <p style={{ margin: "0px" }}>ನಿರ್ಬಂಧಿಸಿ:</p>
              <div className="line-3"></div>
            </div>
            <div className="student-details">
              {/* <p style={{ margin: "0px" }}>District:</p> */}
              <p style={{ margin: "0px" }}>ಜಿಲ್ಲೆ:</p>
              <div className="line-3"></div>
            </div>
          </div>

          <div className="fourth-row">
            <div className="school-details">
              <p style={{ margin: "0px" }}>ಶಾಲೆಯ ಹೆಸರು:</p>
              {/* <p style={{ margin: "0px" }}>School Name:</p> */}
            </div>
            <div className="school-details">
              {/* <p style={{ margin: "0px" }}>Govt.</p> */}
              <p style={{ margin: "0px" }}>ಸರಕಾರ</p>
              <div className="number-box-1"></div>
            </div>
            <div className="school-details">
              <p style={{ margin: "0px" }}>ನೆರವು ನೀಡಿದೆ</p>
              {/* <p style={{ margin: "0px" }}>Aided</p> */}
              <div className="number-box-1"></div>
            </div>
            <div className="school-details">
              {/* <p style={{ margin: "0px" }}>Un-aided</p> */}
              <p style={{ margin: "0px" }}>ಅನುದಾನರಹಿತ</p>
              <div className="number-box-1"></div>
            </div>
          </div>

          {/* <div>(Put "✓" mark for applicable information)</div> */}
          <div>(ಅನ್ವಯವಾಗುವ ಮಾಹಿತಿಗಾಗಿ "✓" ಗುರುತು ಹಾಕಿ)</div>
          <div className="student-details" style={{ padding: "10px 0" }}>
            {/* <p style={{ margin: "0px" }}>Signature of the Room Invigilator: </p> */}
            <p style={{ margin: "0px" }}>ರೂಮ್ ಇನ್ವಿಜಿಲೇಟರ್ ಸಹಿ: </p>
            <div className="line-4"></div>
          </div>

          <div>
            {/* <h5 style={{ textAlign: "center", padding: "5px 0px" }}>
              Information to be filled by the Evaluator at the time of
              evaluation
            </h5> */}
            <h5 style={{ textAlign: "center", padding: "5px 0px" }}>
            ಮೌಲ್ಯಮಾಪನದ ಸಮಯದಲ್ಲಿ ಮೌಲ್ಯಮಾಪಕರು ತುಂಬಬೇಕಾದ ಮಾಹಿತಿ
            </h5>
            
            <div></div>
            <Table
              responsive
              bordered
              style={{ border: "1px solid" }}
              size="sm"
            >
              <thead>
                <tr>
                  {/* <th>Question Number</th> */}
                  <th>ಪ್ರಶ್ನೆ ಸಂಖ್ಯೆ</th>
                  {/* <th>Obtained marks</th> */}
                  <th>ಅಂಕಗಳನ್ನು ಪಡೆದಿದ್ದಾರೆ</th>
                  {/* <th>Question Number</th> */}
                  <th>ಪ್ರಶ್ನೆ ಸಂಖ್ಯೆ</th>
                  {/* <th>Obtained marks</th> */}
                  <th>ಅಂಕಗಳನ್ನು ಪಡೆದಿದ್ದಾರೆ</th>
                  {/* <th>Question Number</th> */}
                  <th>ಪ್ರಶ್ನೆ ಸಂಖ್ಯೆ</th>
                  <th>ಅಂಕಗಳನ್ನು ಪಡೆದಿದ್ದಾರೆ</th>
                  {/* <th>Obtained marks</th> */}
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
                    <b>ಒಟ್ಟು ಅಂಕಗಳು</b>
                  </td>
                  <td></td>
                  <td>
                   {/* <b>Total marks</b> */}
                   <b>ಒಟ್ಟು ಅಂಕಗಳು</b>
                  </td>
                  <td></td>
                  <td>
                     {/* <b>Total marks</b> */}
                     <b>ಒಟ್ಟು ಅಂಕಗಳು</b>
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
                    <b>ಗ್ರೇಡ್ ಒಟ್ಟು</b>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="student-details">
            {/* <p style={{ margin: "0px" }}>Total marks obtained (in words): </p> */}
            <p style={{ margin: "0px" }}>ಪಡೆದ ಒಟ್ಟು ಅಂಕಗಳು (ಪದಗಳಲ್ಲಿ): </p>
            <div className="line-5"></div>
          </div>
          <div className="student-details">
            {/* <p style={{ margin: "0px" }}>Signature of the Evaluator:</p> */}
            <p style={{ margin: "0px" }}>ಮೌಲ್ಯಮಾಪಕರ ಸಹಿ:</p>
            <div className="line-6"></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
