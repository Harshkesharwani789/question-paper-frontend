import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import swal from "sweetalert";

function AdminViewBlueprint() {
  const adminFromSession = JSON.parse(sessionStorage.getItem("admin"));
  const userFromSession = JSON.parse(sessionStorage.getItem("user"));

  let admin;
  if (adminFromSession) {
    admin = adminFromSession;
  } else if (userFromSession) {
    admin = userFromSession;
  }

  console.log("admin", admin);
  // const admin = JSON.parse(sessionStorage.getItem("admin"));
  const token = sessionStorage.getItem("token");

  // console.log("checkkkk", admin, token);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("State==>", state);
  const [blueprint, setblueprint] = useState([]);
  const getallblueprint = async () => {
    try {
      let res = await axios.get(
        "https://question-paper-backend-pariksha.onrender.com/api/admin/getAllBLUEPRINTs/" +
          admin?._id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        setblueprint(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("blueprinttt", blueprint);
  function niqueDataName(AllChapterData) {
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
    return uniqueObjectsArray;
  }

  function bluePrintTotalQues(AllChapterData, chapterName, Qtype) {
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
  var TotalMask = 0;
  const QuestionNameWiseMask = (AllChapterData, chapterName) => {
    let obj = { TotalQ: "", totalMas: "" };
    let am = AllChapterData?.filter(
      (item) => item?.Blueprintchapter == chapterName
    );
    if (am.length != 0) {
      obj["totalMas"] = am?.reduce(
        (a, am) =>
          a + Number(am?.Blueprintnoofquestion * am?.BluePrintmarksperquestion),
        0
      );
      TotalMask = TotalMask + obj.totalMas;
    }
    return obj;
  };
  const upcomingStaus = async (status, val) => {
    try {
      const config = {
        url: "/teacher/upadeteQuestionPaper",
        baseURL: "https://question-paper-backend-pariksha.onrender.com/api",
        method: "put",
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: {
          id: state?._id,
          authId: admin?._id,
          bluePrintId: val?._id,
          status: status,
        },
      };

      let res = await axios(config);
      if (res.status === 200) {
        if (val.SubClassName === "10") {
          return navigate("/class10thquestionpaper");
        } else {
          return navigate("/adminviewquestionpaper", {
            state: { ...state, bluePrint: val },
          });
        }
      }
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

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Blueprint.pdf");
  };

  const createPDF1 = async () => {
    const pdf = new jsPDF("landscape", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf1"), {
      useCORS: true,
    });
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Blueprint.pdf");
  };

  // BluePrint Header
  const [bluePrintHeader, setbluePrintHeader] = useState({});
  const GetBluePrintHeaderByMedium = async () => {
    try {
      let res = await axios.get(
        "https://question-paper-backend-pariksha.onrender.com/api/admin/getblueprintheaderbymedium/" +
          state?.Medium
      );
      if (res.status === 200) {
        setbluePrintHeader(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetBluePrintHeaderByMedium();
    getallblueprint();
  }, []);

  return (
    <div>
      <div className="">
        <div className="">
          <div className="details-display">
            <div className="weightage-objectives">
              <div className="container">
                <div className="row my-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <Button onClick={() => navigate(-1)}>Back</Button>
                    </div>
                    <div className="justify-content-end d-flex gap-3">
                      <button onClick={createPDF} className="btn btn-success">
                        Download Blueprint 1
                      </button>
                      <button onClick={createPDF1} className="btn btn-success">
                        Download Blueprint 2
                      </button>
                      <div id="google_translate_element"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="objectives-table">
                {blueprint
                  ?.filter(
                    (ele) =>
                      ele?.board === state?.Board &&
                      ele?.medium === state?.Medium &&
                      ele?.className === state?.Class &&
                      ele?.SubClassName === state?.Sub_Class &&
                      ele?.subjects === state?.Subject
                  )
                  ?.map((val, i) => {
                    return (
                      <div className="blueprint-content-display" key={i}>
                        <div id="pdf" style={{ padding: "15px" }}>
                          <div
                            className="p-3"
                            style={{ border: "2px solid black", size: "A4" }}
                          >
                            <div className="blueprint-titles">
                              <div className="top-titles-container">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                      {state?.School_Logo ? (
                                        <img
                                          src={`https://question-paper-backend-pariksha.onrender.com/Teacher/${state?.School_Logo}`}
                                          alt=""
                                          style={{
                                            width: "80px",
                                            marginTop: "24px",
                                          }}
                                        />
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                    <div className="col-10 col-sm-10 col-md-10 col-lg-10">
                                      <div className="title-1 text-center">
                                        <h6 style={{ fontWeight: "bold" }}>
                                          {state?.Institute_Name}
                                        </h6>
                                        {/* <h4>ಸಾಂತಾ ಪಾಲ್ ಶಾಲೇ</h4> */}
                                      </div>
                                      <div className="title-2">
                                        <h6 style={{ fontWeight: "bold" }}>
                                          {state?.SchoolAddress}
                                        </h6>
                                        {/* <h5>ಬೆಂಗಳೂರು</h5> */}
                                      </div>
                                      <div className="title-3">
                                        <h6 style={{ fontWeight: "bold" }}>
                                          {val?.blName}
                                        </h6>
                                        <h6 style={{ fontWeight: "bold" }}>
                                          {bluePrintHeader?.BluePrintName}
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="container mt-2">
                                <div className="row">
                                  <div className="class-details">
                                    <div className="class-data">
                                      <b>{state?.Sub_Class}</b>
                                    </div>
                                    <div className="class-data">
                                      <b>ವಿಷಯ: {val?.subjects}</b>
                                    </div>
                                    <div>
                                      <div className="class-data">
                                        <b>ಬೋರ್ಡ್: {val?.board}</b>
                                      </div>
                                      <div className="class-data">
                                        <b>ಸಮಯ: {val?.DurationOfExam}</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* First BluePrint */}
                            <div className="container">
                              <div className="d-flex gap-3 ">
                                <div className="col-md-7 blue-print_1tab">
                                  {/* table 3  */}

                                  <div className="weightage-objectives mt-4">
                                    <div className="main-title">
                                      <b>1.</b>
                                      <b>{bluePrintHeader?.UnitWiseMrk}</b>
                                    </div>
                                    <div className="text-center">
                                      <div className="objectives-table">
                                        <Table
                                          responsive
                                          bordered
                                          hover
                                          size="md"
                                          style={{ border: "2px solid black" }}
                                        >
                                          <thead>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.SNo}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Lessons}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Questions}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Marks}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Percentage}
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {niqueDataName(
                                              val?.AllChapter
                                            )?.map((item, i) => {
                                              return (
                                                <tr
                                                  style={{
                                                    border: "2px solid black",
                                                  }}
                                                >
                                                  <td
                                                    style={{
                                                      border: "2px solid black",
                                                    }}
                                                  >
                                                    <b>{i + 1}</b>
                                                  </td>

                                                  <td
                                                    style={{
                                                      border: "2px solid black",
                                                    }}
                                                  >
                                                    {/* ಉದ್ದಿಷ್ಟಗಳು */}
                                                    <b>{item?.name} </b>
                                                  </td>
                                                  <td
                                                    style={{
                                                      border: "2px solid black",
                                                    }}
                                                  >
                                                    <b>
                                                      {val?.AllChapter?.filter(
                                                        (ele) =>
                                                          ele?.Blueprintchapter ==
                                                          item?.name
                                                      )?.reduce(
                                                        (a, ele) =>
                                                          a +
                                                          Number(
                                                            ele?.Blueprintnoofquestion
                                                          ),
                                                        0
                                                      )}
                                                    </b>
                                                  </td>
                                                  <td
                                                    style={{
                                                      border: "2px solid black",
                                                    }}
                                                  >
                                                    <b>
                                                      {" "}
                                                      {val?.AllChapter?.filter(
                                                        (ele) =>
                                                          ele?.Blueprintchapter ==
                                                          item?.name
                                                      )?.reduce(
                                                        (a, ele) =>
                                                          a +
                                                          Number(
                                                            ele?.Blueprintnoofquestion *
                                                              ele?.BluePrintmarksperquestion
                                                          ),
                                                        0
                                                      )}
                                                    </b>
                                                  </td>
                                                  <td
                                                    style={{
                                                      border: "2px solid black",
                                                    }}
                                                  >
                                                    <b>
                                                      {(
                                                        (val?.AllChapter?.filter(
                                                          (ele) =>
                                                            ele?.Blueprintchapter ==
                                                            item?.name
                                                        )?.reduce(
                                                          (a, ele) =>
                                                            a +
                                                            Number(
                                                              ele?.Blueprintnoofquestion *
                                                                ele?.BluePrintmarksperquestion
                                                            ),
                                                          0
                                                        ) /
                                                          val?.AllChapter?.reduce(
                                                            (a, ele) =>
                                                              a +
                                                              Number(
                                                                ele?.BluePrintmarksperquestion *
                                                                  ele?.Blueprintnoofquestion
                                                              ),
                                                            0
                                                          )) *
                                                        100
                                                      )?.toFixed(2)}
                                                      %
                                                    </b>
                                                  </td>
                                                </tr>
                                              );
                                            })}

                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{bluePrintHeader?.Total}</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {" "}
                                              </td>

                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.TypesofQuestions?.reduce(
                                                    (a, i) =>
                                                      a + Number(i?.NQA),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.TypesofQuestions?.reduce(
                                                    (a, i) =>
                                                      a +
                                                      Number(i?.Mask * i?.NQA),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {" "}
                                                <b>100%</b>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-5 blue-print_1tab">
                                  {/* table 1 */}
                                  <div className="weightage-objectives mt-4">
                                    <div className="main-title">
                                      <b>2.</b>
                                      <b>{bluePrintHeader?.ObjectiveMrks}</b>
                                    </div>
                                    <div className="text-center">
                                      <div className="objectives-table">
                                        <Table
                                          responsive
                                          bordered
                                          hover
                                          style={{ border: "2px solid black" }}
                                        >
                                          <thead>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.SNo}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Specifics}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Questions}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Marks}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Percentage}
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {val?.objectives?.map((item, i) => {
                                              return (
                                                <tr
                                                  style={{
                                                    border: "2px solid black",
                                                  }}
                                                >
                                                  <td
                                                    style={{
                                                      border: "2px solid black",
                                                    }}
                                                  >
                                                    <b> {i + 1}</b>
                                                  </td>
                                                  <td
                                                    style={{
                                                      border: "2px solid black",
                                                    }}
                                                  >
                                                    <b>{item?.Objective}</b>
                                                  </td>
                                                  <td
                                                    style={{
                                                      border: "2px solid black",
                                                    }}
                                                  >
                                                    <b>
                                                      {" "}
                                                      {val?.AllChapter?.filter(
                                                        (ele) =>
                                                          ele?.Blueprintobjective ==
                                                          item?.Objective
                                                      )?.reduce(
                                                        (a, ele) =>
                                                          a +
                                                          Number(
                                                            ele?.Blueprintnoofquestion
                                                          ),
                                                        0
                                                      )}
                                                    </b>
                                                  </td>
                                                  <td
                                                    style={{
                                                      border: "2px solid black",
                                                    }}
                                                  >
                                                    <b>
                                                      {" "}
                                                      {val?.AllChapter?.filter(
                                                        (ele) =>
                                                          ele?.Blueprintobjective ==
                                                          item?.Objective
                                                      )?.reduce(
                                                        (a, ele) =>
                                                          a +
                                                          Number(
                                                            ele?.Blueprintnoofquestion *
                                                              ele?.BluePrintmarksperquestion
                                                          ),
                                                        0
                                                      )}
                                                    </b>
                                                  </td>
                                                  <td>
                                                    <b>
                                                      {" "}
                                                      {(
                                                        (val?.AllChapter?.filter(
                                                          (ele) =>
                                                            ele?.Blueprintobjective ==
                                                            item?.Objective
                                                        )?.reduce(
                                                          (a, ele) =>
                                                            a +
                                                            Number(
                                                              ele?.Blueprintnoofquestion *
                                                                ele?.BluePrintmarksperquestion
                                                            ),
                                                          0
                                                        ) /
                                                          val?.AllChapter?.reduce(
                                                            (a, ele) =>
                                                              a +
                                                              Number(
                                                                ele?.BluePrintmarksperquestion *
                                                                  ele?.Blueprintnoofquestion
                                                              ),
                                                            0
                                                          )) *
                                                        100
                                                      )?.toFixed(2)}
                                                      %
                                                    </b>
                                                  </td>
                                                </tr>
                                              );
                                            })}
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{bluePrintHeader?.Total}</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {" "}
                                              </td>

                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.TypesofQuestions?.reduce(
                                                    (a, i) =>
                                                      a + Number(i?.NQA),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.TypesofQuestions?.reduce(
                                                    (a, i) =>
                                                      a +
                                                      Number(i?.Mask * i?.NQA),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>100%</b>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </div>
                                  </div>

                                  {/* table 2 */}
                                  <div className="weightage-objectives">
                                    <div className="main-title">
                                      <b>3.</b>
                                      <b>{bluePrintHeader?.QuestionWiseMrk}</b>
                                    </div>
                                    <div className="text-center">
                                      <div className="objectives-table">
                                        <Table
                                          responsive
                                          bordered
                                          hover
                                          size="sm"
                                          style={{ border: "2px solid black" }}
                                        >
                                          <thead>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{bluePrintHeader?.SNo}</b>
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {" "}
                                                  {
                                                    bluePrintHeader?.TypeOfQuestion
                                                  }
                                                </b>
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {bluePrintHeader?.Questions}
                                                </b>
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{bluePrintHeader?.Marks}</b>
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {bluePrintHeader?.Percentage}
                                                </b>
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {/* {blueprint?.Weightageofthecontent?.map((val, i) => {
                              return ( */}
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>1</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {
                                                    bluePrintHeader?.Objectivequestion
                                                  }
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {" "}
                                                  {val?.AllChapter?.filter(
                                                    (item) =>
                                                      item?.BluePrintQuestiontype ==
                                                      "O T"
                                                  )?.reduce(
                                                    (a, am) =>
                                                      a +
                                                      Number(
                                                        am?.Blueprintnoofquestion
                                                      ),
                                                    0
                                                  )}
                                                </b>
                                              </td>

                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {" "}
                                                  {val?.AllChapter?.filter(
                                                    (item) =>
                                                      item?.BluePrintQuestiontype ==
                                                      "O T"
                                                  )?.reduce(
                                                    (a, am) =>
                                                      a +
                                                      Number(
                                                        am?.BluePrintmarksperquestion *
                                                          am?.Blueprintnoofquestion
                                                      ),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {" "}
                                                  {(
                                                    (val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.BluePrintQuestiontype ==
                                                        "O T"
                                                    )?.reduce(
                                                      (a, ele) =>
                                                        a +
                                                        Number(
                                                          ele?.Blueprintnoofquestion *
                                                            ele?.BluePrintmarksperquestion
                                                        ),
                                                      0
                                                    ) /
                                                      val?.AllChapter?.reduce(
                                                        (a, ele) =>
                                                          a +
                                                          Number(
                                                            ele?.BluePrintmarksperquestion *
                                                              ele?.Blueprintnoofquestion
                                                          ),
                                                        0
                                                      )) *
                                                    100
                                                  )?.toFixed(2)}
                                                  %
                                                </b>
                                              </td>
                                            </tr>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b> 2</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {
                                                    bluePrintHeader?.ShortanswerQ
                                                  }
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.AllChapter?.filter(
                                                    (item) =>
                                                      item?.BluePrintQuestiontype ==
                                                        "V.S.A" ||
                                                      item?.BluePrintQuestiontype ==
                                                        "S.A"
                                                  )?.reduce(
                                                    (a, am) =>
                                                      a +
                                                      Number(
                                                        am?.Blueprintnoofquestion
                                                      ),
                                                    0
                                                  )}
                                                </b>
                                              </td>

                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.AllChapter?.filter(
                                                    (item) =>
                                                      item?.BluePrintQuestiontype ==
                                                        "V.S.A" ||
                                                      item?.BluePrintQuestiontype ==
                                                        "S.A"
                                                  )?.reduce(
                                                    (a, am) =>
                                                      a +
                                                      Number(
                                                        am?.BluePrintmarksperquestion *
                                                          am?.Blueprintnoofquestion
                                                      ),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {(
                                                    (val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.BluePrintQuestiontype ==
                                                          "V.S.A" ||
                                                        item?.BluePrintQuestiontype ==
                                                          "S.A"
                                                    )?.reduce(
                                                      (a, ele) =>
                                                        a +
                                                        Number(
                                                          ele?.Blueprintnoofquestion *
                                                            ele?.BluePrintmarksperquestion
                                                        ),
                                                      0
                                                    ) /
                                                      val?.AllChapter?.reduce(
                                                        (a, ele) =>
                                                          a +
                                                          Number(
                                                            ele?.BluePrintmarksperquestion *
                                                              ele?.Blueprintnoofquestion
                                                          ),
                                                        0
                                                      )) *
                                                    100
                                                  )?.toFixed(2)}
                                                  %
                                                </b>
                                              </td>
                                            </tr>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>3</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {" "}
                                                  {bluePrintHeader?.LonganswerQ}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.AllChapter?.filter(
                                                    (item) =>
                                                      item?.BluePrintQuestiontype ==
                                                        "L.A 1" ||
                                                      item?.BluePrintQuestiontype ==
                                                        "L.A 2" ||
                                                      item?.BluePrintQuestiontype ==
                                                        "L.A 3"
                                                  )?.reduce(
                                                    (a, am) =>
                                                      a +
                                                      Number(
                                                        am?.Blueprintnoofquestion
                                                      ),
                                                    0
                                                  )}
                                                </b>
                                              </td>

                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.AllChapter?.filter(
                                                    (item) =>
                                                      item?.BluePrintQuestiontype ==
                                                        "L.A 1" ||
                                                      item?.BluePrintQuestiontype ==
                                                        "L.A 2" ||
                                                      item?.BluePrintQuestiontype ==
                                                        "L.A 3"
                                                  )?.reduce(
                                                    (a, am) =>
                                                      a +
                                                      Number(
                                                        am?.BluePrintmarksperquestion *
                                                          am?.Blueprintnoofquestion
                                                      ),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {(
                                                    (val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.BluePrintQuestiontype ==
                                                          "L.A 1" ||
                                                        item?.BluePrintQuestiontype ==
                                                          "L.A 2" ||
                                                        item?.BluePrintQuestiontype ==
                                                          "L.A 3"
                                                    )?.reduce(
                                                      (a, ele) =>
                                                        a +
                                                        Number(
                                                          ele?.Blueprintnoofquestion *
                                                            ele?.BluePrintmarksperquestion
                                                        ),
                                                      0
                                                    ) /
                                                      val?.AllChapter?.reduce(
                                                        (a, ele) =>
                                                          a +
                                                          Number(
                                                            ele?.BluePrintmarksperquestion *
                                                              ele?.Blueprintnoofquestion
                                                          ),
                                                        0
                                                      )) *
                                                    100
                                                  )?.toFixed(2)}
                                                  %
                                                </b>
                                              </td>
                                            </tr>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{bluePrintHeader?.Total}</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {" "}
                                              </td>

                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.TypesofQuestions?.reduce(
                                                    (a, i) =>
                                                      a + Number(i?.NQA),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.TypesofQuestions?.reduce(
                                                    (a, i) =>
                                                      a +
                                                      Number(i?.Mask * i?.NQA),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>100%</b>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </div>
                                  </div>

                                  {/* table 4  */}
                                  <div className="weightage-objectives">
                                    <div className="main-title">
                                      <b>4.</b>
                                      <b>
                                        {bluePrintHeader?.AccordingRigorMrk}
                                      </b>
                                    </div>
                                    <div className="text-center">
                                      <div className="objectives-table">
                                        <Table
                                          responsive
                                          bordered
                                          hover
                                          size="md"
                                          style={{ border: "2px solid black" }}
                                        >
                                          <thead>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.SNo}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {
                                                  bluePrintHeader?.LevelOfDifficult
                                                }
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Questions}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Marks}
                                              </th>
                                              <th
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {bluePrintHeader?.Percentage}
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>1</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{bluePrintHeader?.Easy} </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b> {val?.Easy}</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{val?.EasyMask}</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{val?.EasyParcentage}%</b>
                                              </td>
                                            </tr>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b> 2</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {bluePrintHeader?.MediumQ}{" "}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b> {val?.Average}</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{val?.AverageMask}</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{val?.AverageParcentage}%</b>
                                              </td>
                                            </tr>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b> 3</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {bluePrintHeader?.Difficult}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{val?.Difficult}</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{val?.DifficultMask}</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.DifficultParcentage}%
                                                </b>
                                              </td>
                                            </tr>
                                            <tr
                                              style={{
                                                border: "2px solid black",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>{bluePrintHeader?.Total}</b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                {" "}
                                              </td>

                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.TypesofQuestions?.reduce(
                                                    (a, i) =>
                                                      a + Number(i?.NQA),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>
                                                  {val?.TypesofQuestions?.reduce(
                                                    (a, i) =>
                                                      a +
                                                      Number(i?.Mask * i?.NQA),
                                                    0
                                                  )}
                                                </b>
                                              </td>
                                              <td
                                                style={{
                                                  border: "2px solid black",
                                                }}
                                              >
                                                <b>100%</b>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Seconed bluePrint */}
                        <div id="pdf1" style={{ padding: "15px" }}>
                          <div style={{ fontFamily: "sans-serif" }}>
                            <div
                              className="blueprint2-container"
                              style={{ padding: "20px 8px" }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div>
                                  <b>
                                    {bluePrintHeader?.Time} :{" "}
                                    {val?.DurationOfExam}
                                  </b>
                                </div>
                                <div>
                                  <b>{bluePrintHeader?.BluePrintName}</b>
                                </div>
                                <div>
                                  <b>
                                    {bluePrintHeader?.Marks} :-
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
                                <div className="text-center">
                                  <Table
                                    responsive
                                    bordered
                                    style={{
                                      border: "3px solid #000",
                                      width: "fit-content",
                                    }}
                                  >
                                    <thead>
                                      <tr style={{ border: "3px solid #000" }}>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.SNo}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            width: "125px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.TargetUnit}</b>
                                        </th>
                                        {val?.objectives?.map((ele) => {
                                          return (
                                            <>
                                              <th
                                                colSpan={6}
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {ele?.Objective}
                                              </th>
                                            </>
                                          );
                                        })}

                                        <th
                                          colSpan={6}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>
                                            {bluePrintHeader?.TotalQuestion}
                                          </b>
                                        </th>

                                        <th
                                          colSpan={1}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.TotalMarks}</b>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr style={{ border: "2px solid #000" }}>
                                        <th
                                          style={{ border: "1px solid #000" }}
                                        ></th>
                                        <th
                                          style={{ border: "1px solid #000" }}
                                        ></th>

                                        <th
                                          style={{
                                            fontSize: "12px",
                                            width: "33px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b> {bluePrintHeader?.V}</b>
                                        </th>
                                        <th
                                          colSpan={2}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b> {bluePrintHeader?.K}</b>
                                        </th>
                                        <th
                                          colSpan={3}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b> {bluePrintHeader?.D}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            width: "33px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.V}</b>
                                        </th>
                                        <th
                                          colSpan={2}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.K}</b>
                                        </th>
                                        <th
                                          colSpan={3}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.D}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            width: "33px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.V}</b>
                                        </th>
                                        <th
                                          colSpan={2}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.K}</b>
                                        </th>
                                        <th
                                          colSpan={3}
                                          style={{ fontSize: "12px" }}
                                        >
                                          <b>{bluePrintHeader?.D}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            width: "33px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.V}</b>
                                        </th>
                                        <th
                                          colSpan={2}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.K}</b>
                                        </th>
                                        <th
                                          colSpan={3}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b> {bluePrintHeader?.D}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            width: "33px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.V}</b>
                                        </th>
                                        <th
                                          colSpan={2}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.K}</b>
                                        </th>
                                        <th
                                          colSpan={3}
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b> {bluePrintHeader?.D}</b>
                                        </th>
                                      </tr>
                                      <tr style={{ border: "2px solid #000" }}>
                                        <th></th>
                                        <th
                                          style={{
                                            width: "125px",
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        ></th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        ></th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b> {bluePrintHeader?.VSA}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b> {bluePrintHeader?.SA}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA1}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA2}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA3}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        ></th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b> {bluePrintHeader?.VSA}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b> {bluePrintHeader?.SA}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA1}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA2}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA3}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        ></th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.VSA}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.SA}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA1}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA2}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA3}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        ></th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b> {bluePrintHeader?.VSA}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.SA}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA1}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA2}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA3}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        ></th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.VSA}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.SA}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA1}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA2}</b>
                                        </th>
                                        <th
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          <b>{bluePrintHeader?.LA3}</b>
                                        </th>
                                      </tr>
                                      {niqueDataName(val?.AllChapter)?.map(
                                        (ele, i) => {
                                          return (
                                            <tr
                                              style={{
                                                border: "2px solid #000",
                                              }}
                                            >
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                <b>{i + 1}</b>
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  fontWeight: "bold",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {ele?.name}
                                              </td>
                                              {val?.objectives?.map((ele1) => {
                                                return (
                                                  <>
                                                    <td
                                                      style={{
                                                        fontSize: "12px",
                                                        border:
                                                          "1px solid #000",
                                                      }}
                                                    >
                                                      <b>
                                                        {
                                                          val?.AllChapter?.find(
                                                            (item) =>
                                                              item?.Blueprintobjective ==
                                                                ele1?.Objective &&
                                                              item?.BluePrintQuestiontype ==
                                                                "O T" &&
                                                              item?.Blueprintchapter ==
                                                                ele?.name
                                                          )
                                                            ?.Blueprintnoofquestion
                                                        }
                                                      </b>
                                                      <b>
                                                        {val?.AllChapter?.some(
                                                          (item) =>
                                                            item?.Blueprintobjective ==
                                                              ele1?.Objective &&
                                                            item?.BluePrintQuestiontype ==
                                                              "O T" &&
                                                            item?.Blueprintchapter ==
                                                              ele?.name
                                                        )
                                                          ? `*(${
                                                              val?.AllChapter?.find(
                                                                (item) =>
                                                                  item?.Blueprintobjective ==
                                                                    ele1?.Objective &&
                                                                  item?.BluePrintQuestiontype ==
                                                                    "O T" &&
                                                                  item?.Blueprintchapter ==
                                                                    ele?.name
                                                              )
                                                                ?.BluePrintmarksperquestion
                                                            })`
                                                          : ""}
                                                      </b>
                                                    </td>
                                                    <td
                                                      style={{
                                                        fontSize: "12px",
                                                        border:
                                                          "1px solid #000",
                                                      }}
                                                    >
                                                      <b>
                                                        {
                                                          val?.AllChapter?.find(
                                                            (item) =>
                                                              item?.Blueprintobjective ==
                                                                ele1?.Objective &&
                                                              item?.BluePrintQuestiontype ==
                                                                "V.S.A" &&
                                                              item?.Blueprintchapter ==
                                                                ele?.name
                                                          )
                                                            ?.Blueprintnoofquestion
                                                        }
                                                      </b>
                                                      <b>
                                                        {val?.AllChapter?.some(
                                                          (item) =>
                                                            item?.Blueprintobjective ==
                                                              ele1?.Objective &&
                                                            item?.BluePrintQuestiontype ==
                                                              "V.S.A" &&
                                                            item?.Blueprintchapter ==
                                                              ele?.name
                                                        )
                                                          ? `*(${
                                                              val?.AllChapter?.find(
                                                                (item) =>
                                                                  item?.Blueprintobjective ==
                                                                    ele1?.Objective &&
                                                                  item?.BluePrintQuestiontype ==
                                                                    "V.S.A" &&
                                                                  item?.Blueprintchapter ==
                                                                    ele?.name
                                                              )
                                                                ?.BluePrintmarksperquestion
                                                            })`
                                                          : ""}
                                                      </b>
                                                    </td>
                                                    <td
                                                      style={{
                                                        fontSize: "12px",
                                                        border:
                                                          "1px solid #000",
                                                      }}
                                                    >
                                                      {
                                                        val?.AllChapter?.find(
                                                          (item) =>
                                                            item?.Blueprintobjective ==
                                                              ele1?.Objective &&
                                                            item?.BluePrintQuestiontype ==
                                                              "S.A" &&
                                                            item?.Blueprintchapter ==
                                                              ele?.name
                                                        )?.Blueprintnoofquestion
                                                      }
                                                      {val?.AllChapter?.some(
                                                        (item) =>
                                                          item?.Blueprintobjective ==
                                                            ele1?.Objective &&
                                                          item?.BluePrintQuestiontype ==
                                                            "S.A" &&
                                                          item?.Blueprintchapter ==
                                                            ele?.name
                                                      )
                                                        ? `*(${
                                                            val?.AllChapter?.find(
                                                              (item) =>
                                                                item?.Blueprintobjective ==
                                                                  ele1?.Objective &&
                                                                item?.BluePrintQuestiontype ==
                                                                  "S.A" &&
                                                                item?.Blueprintchapter ==
                                                                  ele?.name
                                                            )
                                                              ?.BluePrintmarksperquestion
                                                          })`
                                                        : ""}
                                                    </td>
                                                    <td
                                                      style={{
                                                        fontSize: "12px",
                                                        border:
                                                          "1px solid #000",
                                                      }}
                                                    >
                                                      {
                                                        val?.AllChapter?.find(
                                                          (item) =>
                                                            item?.Blueprintobjective ==
                                                              ele1?.Objective &&
                                                            item?.BluePrintQuestiontype ==
                                                              "L.A 1" &&
                                                            item?.Blueprintchapter ==
                                                              ele?.name
                                                        )?.Blueprintnoofquestion
                                                      }
                                                      {val?.AllChapter?.some(
                                                        (item) =>
                                                          item?.Blueprintobjective ==
                                                            ele1?.Objective &&
                                                          item?.BluePrintQuestiontype ==
                                                            "L.A 1" &&
                                                          item?.Blueprintchapter ==
                                                            ele?.name
                                                      )
                                                        ? `*(${
                                                            val?.AllChapter?.find(
                                                              (item) =>
                                                                item?.Blueprintobjective ==
                                                                  ele1?.Objective &&
                                                                item?.BluePrintQuestiontype ==
                                                                  "L.A 1" &&
                                                                item?.Blueprintchapter ==
                                                                  ele?.name
                                                            )
                                                              ?.BluePrintmarksperquestion
                                                          })`
                                                        : ""}
                                                    </td>
                                                    <td
                                                      style={{
                                                        fontSize: "12px",
                                                        border:
                                                          "1px solid #000",
                                                      }}
                                                    >
                                                      {
                                                        val?.AllChapter?.find(
                                                          (item) =>
                                                            item?.Blueprintobjective ==
                                                              ele1?.Objective &&
                                                            item?.BluePrintQuestiontype ==
                                                              "L.A 2" &&
                                                            item?.Blueprintchapter ==
                                                              ele?.name
                                                        )?.Blueprintnoofquestion
                                                      }
                                                      {val?.AllChapter?.some(
                                                        (item) =>
                                                          item?.Blueprintobjective ==
                                                            ele1?.Objective &&
                                                          item?.BluePrintQuestiontype ==
                                                            "L.A 2" &&
                                                          item?.Blueprintchapter ==
                                                            ele?.name
                                                      )
                                                        ? `*(${
                                                            val?.AllChapter?.find(
                                                              (item) =>
                                                                item?.Blueprintobjective ==
                                                                  ele1?.Objective &&
                                                                item?.BluePrintQuestiontype ==
                                                                  "L.A 2" &&
                                                                item?.Blueprintchapter ==
                                                                  ele?.name
                                                            )
                                                              ?.BluePrintmarksperquestion
                                                          })`
                                                        : ""}
                                                    </td>
                                                    <td
                                                      style={{
                                                        fontSize: "12px",
                                                        border:
                                                          "1px solid #000",
                                                      }}
                                                    >
                                                      {
                                                        val?.AllChapter?.find(
                                                          (item) =>
                                                            item?.Blueprintobjective ==
                                                              ele1?.Objective &&
                                                            item?.BluePrintQuestiontype ==
                                                              "L.A 3" &&
                                                            item?.Blueprintchapter ==
                                                              ele?.name
                                                        )?.Blueprintnoofquestion
                                                      }
                                                      {val?.AllChapter?.some(
                                                        (item) =>
                                                          item?.Blueprintobjective ==
                                                            ele1?.Objective &&
                                                          item?.BluePrintQuestiontype ==
                                                            "L.A 3" &&
                                                          item?.Blueprintchapter ==
                                                            ele?.name
                                                      )
                                                        ? `*(${
                                                            val?.AllChapter?.find(
                                                              (item) =>
                                                                item?.Blueprintobjective ==
                                                                  ele1?.Objective &&
                                                                item?.BluePrintQuestiontype ==
                                                                  "L.A 3" &&
                                                                item?.Blueprintchapter ==
                                                                  ele?.name
                                                            )
                                                              ?.BluePrintmarksperquestion
                                                          })`
                                                        : ""}
                                                    </td>
                                                  </>
                                                );
                                              })}

                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {
                                                  bluePrintTotalQues(
                                                    val?.AllChapter,
                                                    ele?.name,
                                                    "O T"
                                                  )?.TotalQ
                                                }
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {
                                                  bluePrintTotalQues(
                                                    val?.AllChapter,
                                                    ele?.name,
                                                    "V.S.A"
                                                  )?.TotalQ
                                                }
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {
                                                  bluePrintTotalQues(
                                                    val?.AllChapter,
                                                    ele?.name,
                                                    "S.A"
                                                  )?.TotalQ
                                                }
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {
                                                  bluePrintTotalQues(
                                                    val?.AllChapter,
                                                    ele?.name,
                                                    "L.A 1"
                                                  )?.TotalQ
                                                }
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {
                                                  bluePrintTotalQues(
                                                    val?.AllChapter,
                                                    ele?.name,
                                                    "L.A 2"
                                                  )?.TotalQ
                                                }
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {
                                                  bluePrintTotalQues(
                                                    val?.AllChapter,
                                                    ele?.name,
                                                    "L.A 3"
                                                  )?.TotalQ
                                                }
                                              </td>

                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {
                                                  QuestionNameWiseMask(
                                                    val?.AllChapter,
                                                    ele?.name
                                                  )?.totalMas
                                                }
                                              </td>
                                            </tr>
                                          );
                                        }
                                      )}
                                      <tr style={{ border: "2px solid #000" }}>
                                        <td
                                          style={{ border: "1px solid #000" }}
                                        ></td>
                                        <td
                                          style={{
                                            fontSize: "12px",
                                            width: "46px",
                                            fontWeight: "bold",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          {bluePrintHeader?.Total}
                                        </td>
                                        {val?.objectives?.map((ele) => {
                                          return (
                                            <>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {val?.AllChapter?.some(
                                                  (item) =>
                                                    item?.Blueprintobjective ==
                                                      ele?.Objective &&
                                                    item?.BluePrintQuestiontype ==
                                                      "O T"
                                                ) ? (
                                                  <span>
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "O T"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}{" "}
                                                    (
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "O T"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.BluePrintmarksperquestion *
                                                            am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}
                                                    )
                                                  </span>
                                                ) : (
                                                  ""
                                                )}
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {val?.AllChapter?.some(
                                                  (item) =>
                                                    item?.Blueprintobjective ==
                                                      ele?.Objective &&
                                                    item?.BluePrintQuestiontype ==
                                                      "V.S.A"
                                                ) ? (
                                                  <span>
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "V.S.A"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}{" "}
                                                    (
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "V.S.A"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.BluePrintmarksperquestion *
                                                            am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}
                                                    )
                                                  </span>
                                                ) : (
                                                  ""
                                                )}
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {val?.AllChapter?.some(
                                                  (item) =>
                                                    item?.Blueprintobjective ==
                                                      ele?.Objective &&
                                                    item?.BluePrintQuestiontype ==
                                                      "S.A"
                                                ) ? (
                                                  <span>
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "S.A"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}{" "}
                                                    (
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "S.A"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.BluePrintmarksperquestion *
                                                            am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}
                                                    )
                                                  </span>
                                                ) : (
                                                  ""
                                                )}
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {val?.AllChapter?.some(
                                                  (item) =>
                                                    item?.Blueprintobjective ==
                                                      ele?.Objective &&
                                                    item?.BluePrintQuestiontype ==
                                                      "L.A 1"
                                                ) ? (
                                                  <span>
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "L.A 1"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}{" "}
                                                    (
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "L.A 1"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.BluePrintmarksperquestion *
                                                            am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}
                                                    )
                                                  </span>
                                                ) : (
                                                  ""
                                                )}
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {val?.AllChapter?.some(
                                                  (item) =>
                                                    item?.Blueprintobjective ==
                                                      ele?.Objective &&
                                                    item?.BluePrintQuestiontype ==
                                                      "L.A 2"
                                                ) ? (
                                                  <span>
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "L.A 2"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}{" "}
                                                    (
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "L.A 2"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.BluePrintmarksperquestion *
                                                            am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}
                                                    )
                                                  </span>
                                                ) : (
                                                  ""
                                                )}
                                              </td>
                                              <td
                                                style={{
                                                  fontSize: "12px",
                                                  border: "1px solid #000",
                                                }}
                                              >
                                                {val?.AllChapter?.some(
                                                  (item) =>
                                                    item?.Blueprintobjective ==
                                                      ele?.Objective &&
                                                    item?.BluePrintQuestiontype ==
                                                      "L.A 3"
                                                ) ? (
                                                  <span>
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "L.A 3"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}{" "}
                                                    (
                                                    {val?.AllChapter?.filter(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "L.A 3"
                                                    )?.reduce(
                                                      (a, am) =>
                                                        a +
                                                        Number(
                                                          am?.BluePrintmarksperquestion *
                                                            am?.Blueprintnoofquestion
                                                        ),
                                                      0
                                                    )}
                                                    )
                                                  </span>
                                                ) : (
                                                  ""
                                                )}
                                              </td>
                                            </>
                                          );
                                        })}

                                        <td
                                          style={{ border: "1px solid #000" }}
                                        ></td>
                                        <td
                                          style={{ border: "1px solid #000" }}
                                        ></td>
                                        <td
                                          style={{ border: "1px solid #000" }}
                                        ></td>
                                        <td
                                          style={{ border: "1px solid #000" }}
                                        ></td>
                                        <td
                                          style={{ border: "1px solid #000" }}
                                        ></td>
                                        <td
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          {val?.AllChapter?.reduce(
                                            (a, ele) =>
                                              a +
                                              Number(
                                                ele?.Blueprintnoofquestion
                                              ),
                                            0
                                          )}
                                        </td>
                                        <td
                                          style={{
                                            fontSize: "12px",
                                            border: "1px solid #000",
                                          }}
                                        >
                                          {val?.AllChapter?.reduce(
                                            (a, ele) =>
                                              a +
                                              Number(
                                                ele?.BluePrintmarksperquestion *
                                                  ele?.Blueprintnoofquestion
                                              ),
                                            0
                                          )}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                              </div>
                              <span>{bluePrintHeader?.Note}:-</span>
                              {parse(`<span>${val?.Instructions}</span>`)}
                            </div>
                          </div>
                        </div>

                        {/* <div
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
                                                            upcomingStaus("Saved Draft", val);
                                                        }}
                                                    >
                                                        Save Draft
                                                    </Button>
                                                </div> */}
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
                              upcomingStaus("Completed", val);
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
}

export default AdminViewBlueprint;
