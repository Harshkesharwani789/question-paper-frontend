import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../BluePrint/BluePrint.css";
import axios from "axios";

const BluePrint = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("State==>", state);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");
  const [blueprint, setblueprint] = useState([]);
  const getallblueprint = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getAllBLUEPRINTs/" + user?._id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status == 200) {
        setblueprint(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallblueprint();
  }, []);
  console.log(blueprint);

function niqueDataName(AllChapterData){
  const uniqueObjectsArray = [];
  const uniqueNames = new Set(); // Using a Set to keep track of unique names

  AllChapterData?.forEach((ele, i) => {
    const chapterName = ele?.Blueprintchapter;
    if (!uniqueNames.has(chapterName)) {
      uniqueNames.add(chapterName);
      uniqueObjectsArray.push({
        index: i + 1,
        name: chapterName,
      });
    }
  });
  return uniqueObjectsArray
}
 

  // console.log("uniqueObjectsArray", uniqueObjectsArray);

  function bluePrintTotalQues(AllChapterData,chapterName,Qtype) {
    let obj = { TotalQ: "", totalMas: 0 };
    let am = AllChapterData?.filter(
      (item) =>
        item?.BluePrintQuestiontype == Qtype &&
        item?.Blueprintchapter == chapterName
    );
    if (am.length != 0) {
      obj["TotalQ"] = am?.reduce(
        (a, am) => a + Number(am?.Blueprintnoofquestion),
        0
      );
      obj["totalMas"] = am?.reduce(
        (a, am) =>
          a + Number(am?.Blueprintnoofquestion * am?.BluePrintmarksperquestion),
        0
      );

    }
    return obj;
  }
var TotalMask=0
  const QuestionNameWiseMask=(AllChapterData,chapterName)=>{
    let obj = { TotalQ: "", totalMas: "" };
    let am = AllChapterData?.filter(
      (item) =>
        item?.Blueprintchapter == chapterName
    );
    if (am.length != 0) {
      
      obj["totalMas"] = am?.reduce(
        (a, am) =>
          a + Number(am?.Blueprintnoofquestion * am?.BluePrintmarksperquestion),
        0
      );
      TotalMask=TotalMask+obj.totalMas

    }
    return obj;
  }

  return (
    <div>
      <div className="">
        <div className="">
          {/* BluePrint display */}
          <div className="details-display ">
            {/* <div style={{textAlign:"center"}} >
              <img src="../Images/logo.png" alt="" style={{ width: "100px" }} />
            </div> */}

            <div className="weightage-objectives">
              <div className="objectives-table">
                {blueprint
                  ?.filter(
                    (ele) =>
                      ele?.board == state?.Board &&
                      ele?.medium == state?.Medium &&
                      ele?.className == state?.Class &&
                      ele?.SubClassName == state?.Sub_Class &&
                      ele?.subjects == state?.Subject
                  )
                  ?.map((val, i) => {
                    return (
                      <div className="blueprint-content-display" key={i}>
                        <div className="blueprint-titles">
                          <div className="top-titles-container">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src={`http://localhost:8000/Teacher/${state?.School_Logo}`}
                                    alt=""
                                    style={{
                                      width: "100px",
                                      height: "-webkit-fill-available",
                                    }}
                                  />
                                </div>
                                <div className="col-md-10">
                                  <div className="title-1 text-center">
                                    <h4>{state?.Institute_Name}</h4>
                                  </div>
                                  <div className="title-2">
                                    <h5>
                                      KSQAAC, Malleshwaram, Bengaluru-560003
                                    </h5>
                                  </div>
                                  <div className="title-3">
                                    <h4>{val?.blName}</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="container mt-2">
                            <div className="row">
                              <div className="class-details">
                                <div className="class-data">
                                  <b>Class : {val?.SubClassName}</b>
                                </div>
                                <div className="class-data">
                                  <b>Subject: {val?.subjects}</b>
                                </div>
                                <div>
                                  <div className="class-data">
                                    <b>Board: {val?.board}</b>
                                  </div>
                                  <div className="class-data">
                                    <b>Time: {val?.DurationOfExam}</b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* table 1 */}
                        <div className="weightage-objectives mt-4">
                          <div className="main-title">
                            <b>1.</b>
                            <b>Weightage to Objectives - Marks</b>
                          </div>
                          <div className="objectives-table">
                            <Table
                              bordered
                              hover
                              style={{ border: "1px solid" }}
                            >
                              <thead>
                                <tr>
                                  <th>Objectives</th>
                                  <th>Percentage</th>
                                  <th>Marks</th>
                                </tr>
                              </thead>
                              <tbody>
                              {val?.objectives?.map((ele, i) => {
                      return (
                        <tr key={i}>
                          <td>{ele?.Objective}</td>
                          <td>{ele?.NoofQues}%</td>
                          <td>{ele?.Marks}</td>
                        </tr>
                      );
                    })}
                              </tbody>
                            </Table>
                          </div>
                        </div>

                        {/* table 2 */}
                        <div className="weightage-objectives">
                          <div className="main-title">
                            <b>2.</b>
                            <b>Weightage to Content</b>
                          </div>
                          <div className="text-center">
                            <div className="objectives-table">
                              <Table
                                bordered
                                hover
                                size="sm"
                                style={{ border: "1px solid" }}
                              >
                                <tbody>
                                  {val?.Weightageofthecontent?.map(
                                    (item, i) => {
                                      return (
                                        <tr>
                                          <td>{item?.label}</td>
                                          <td>{item?.Marks}</td>
                                        </tr>
                                      );
                                    }
                                  )}
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>

                        {/* table 3  */}
                        <div className="weightage-objectives">
                          <div className="main-title">
                            <b>3.</b>
                            <b>Weightage to type of Questions</b>
                          </div>
                          <div className="objectives-table">
                            <Table
                              bordered
                              hover
                              size="md"
                              style={{ border: "1px solid" }}
                            >
                              <tbody>
                                {val?.TypesofQuestions?.map((item, i) => {
                                  return (
                                    <tr>
                                      <td>{item?.QAType}</td>
                                      <td>
                                        {item?.NQA}x {item?.Mask}
                                      </td>
                                      <td>{item?.NQA * item?.Mask}</td>
                                    </tr>
                                  );
                                })}

                                <tr>
                                  <td>
                                    <b>Total</b>
                                  </td>
                                  <td>
                                    {val?.TypesofQuestions?.reduce(
                                      (a, i) => a + Number(i?.NQA),
                                      0
                                    )}
                                  </td>
                                  <td>
                                    <b>
                                      {val?.TypesofQuestions?.reduce(
                                        (a, i) => a + Number(i?.Mask * i?.NQA),
                                        0
                                      )}
                                    </b>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>

                        {/* table 4  */}
                        <div className="weightage-objectives">
                          <div className="main-title">
                            <b>4.</b>
                            <b>Weightage to Difficult Level</b>
                          </div>
                          <div className="objectives-table">
                            <Table
                              bordered
                              hover
                              size="md"
                              style={{ border: "1px solid" }}
                            >
                              <tbody>
                                <tr>
                                  <td>Easy</td>
                                  <td>Average</td>
                                  <td>Difficult</td>
                                  <td>Total</td>
                                </tr>
                                <tr>
                                  <td>{val?.EasyMask}</td>
                                  <td>{val?.AverageMask}</td>
                                  <td>{val?.DifficultMask}</td>
                                  <td>{val?.TotalDifficultMask} </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>

                        <div style={{ fontFamily: "sans-serif" }}>
            <div
              className="blueprint2-container"
              style={{ padding: "20px 8px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <b>Time : {val?.DurationOfExam}</b>
                </div>
                <div>
                  <b>BLUE PRINT</b>
                </div>
                <div>
                  <b>
                    Marks :-
                    {val?.AllChapter?.reduce(
                      (a, ele) =>
                        a +
                        Number(
                          ele?.BluePrintmarksperquestion *
                            ele?.Blueprintnoofquestion
                        ),
                      0
                    )}
                  </b>
                </div>
              </div>

              <div>
                <Table
                  responsive
                  bordered
                  style={{ border: "1px solid" }}
                  size="sm"
                >
               
                  <thead>
                    <tr>
                      <th>S No.</th>
                      <th style={{ width: "200px" }}>Content</th>
                      {val?.objectives?.map((ele) => {
                        return (
                          <>
                            <th colSpan={3}>{ele?.Objective}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                          </>
                        );
                      })}

                      <th colSpan={3}>Total Questions</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th colSpan={2}>Total Marks</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th></th>

                      <th style={{ width: "200px" }}></th>
                      {val?.objectives?.map((ele) => {
                        return (
                          <>
                            <th>M.C</th>
                            <th>V.S.A</th>
                            <th>S.A</th>
                            <th>L.A.1</th>
                            <th>L.A.2</th>
                            <th>L.A.3</th>
                          </>
                        );
                      })}

                      <th>M.C</th>
                      <th>V.S.A</th>
                      <th>S.A</th>
                      <th>L.A.1</th>
                      <th>L.A.2</th>
                      <th>L.A.3</th>
                      <th></th>

                    </tr>
                    {niqueDataName(val?.AllChapter)?.map((ele, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td style={{ width: "200px" }}>{ele?.name}</td>
                          {val?.objectives?.map((ele1) => {
                            return (
                              <>
                                <td>
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype == "M C" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {val?.AllChapter?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "M C" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? "*"
                                    : ""}
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype == "M C" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.BluePrintmarksperquestion
                                  }
                                </td>
                                <td>
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "V.S.A" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {val?.AllChapter?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "V.S.A" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? "*"
                                    : ""}
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "V.S.A" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.BluePrintmarksperquestion
                                  }
                                </td>
                                <td>
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype == "S.A" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {val?.AllChapter?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "S.A" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? "*"
                                    : ""}
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype == "S.A" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.BluePrintmarksperquestion
                                  }
                                </td>
                                <td>
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "L.A 1" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {val?.AllChapter?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 1" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? "*"
                                    : ""}
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "L.A 1" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.BluePrintmarksperquestion
                                  }
                                </td>
                                <td>
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "L.A 2" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {val?.AllChapter?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 2" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? "*"
                                    : ""}
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "L.A 2" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.BluePrintmarksperquestion
                                  }
                                </td>
                                <td>
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "L.A 3" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.Blueprintnoofquestion
                                  }
                                  {val?.AllChapter?.some(
                                    (item) =>
                                      item?.Blueprintobjective ==
                                        ele1?.Objective &&
                                      item?.BluePrintQuestiontype == "L.A 3" &&
                                      item?.Blueprintchapter == ele?.name
                                  )
                                    ? "*"
                                    : ""}
                                  {
                                    val?.AllChapter?.find(
                                      (item) =>
                                        item?.Blueprintobjective ==
                                          ele1?.Objective &&
                                        item?.BluePrintQuestiontype ==
                                          "L.A 3" &&
                                        item?.Blueprintchapter == ele?.name
                                    )?.BluePrintmarksperquestion
                                  }
                                </td>
                              </>
                            );
                          })}

                          <td>
                            {bluePrintTotalQues(val?.AllChapter,ele?.name,"M C")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(val?.AllChapter,ele?.name,"V.S.A")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(val?.AllChapter,ele?.name,"S.A")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(val?.AllChapter,ele?.name,"L.A 1")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(val?.AllChapter,ele?.name,"L.A 2")?.TotalQ}
                          </td>
                          <td>
                            {bluePrintTotalQues(val?.AllChapter,ele?.name,"L.A 3")?.TotalQ}
                          </td>
                       
                          <td>{QuestionNameWiseMask(val?.AllChapter,ele?.name)?.totalMas}</td>
                          
                        </tr>
                      );
                    })}
                    <tr>
                      <td></td>
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{val?.AllChapter?.reduce(
                      (a, ele) =>
                        a +
                        Number(
                          ele?.BluePrintmarksperquestion *
                            ele?.Blueprintnoofquestion
                        ),
                      0
                    )}</td>
                  
                    </tr>
                  </tbody>
               
                </Table>


              </div>
            </div>
          </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "10px",
                          }}
                        >
                          <Button
                            variant=""
                            style={{ backgroundColor: "green", color: "white" }}
                            onClick={() => {
                              if(val?.SubClassName?.toLowerCase()=="class 10"&&val?.subjects?.toLowerCase()=="math"){
                                 return  navigate("/10th_QP_maths", {
                                  state: { ...state, bluePrint: val },
                                });
                                
                              }else if(val?.SubClassName?.toLowerCase()=="class 10"&&val?.subjects?.toLowerCase()=="science"){
                                return  navigate("/science10th", {
                                 state: { ...state, bluePrint: val },
                               });
                              
                              }else if(val?.SubClassName?.toLowerCase()=="class 10"&&val?.subjects?.toLowerCase()=="social science"){
                                return  navigate("/socialqp", {
                                 state: { ...state, bluePrint: val },
                               });                             
                              }else if(val?.SubClassName?.toLowerCase()=="class 10"&&val?.subjects?.toLowerCase()=="english"){
                                return  navigate("/englishqp", {
                                 state: { ...state, bluePrint: val },
                               });                             
                              
                              }else
                              return navigate("/questionpaper", {
                                state: { ...state, bluePrint: val },
                              });
                            }}
                          >
                            Generate Question Paper
                          </Button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluePrint;
