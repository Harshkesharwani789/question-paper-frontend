import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../BluePrint/BluePrint.css";
import axios from "axios";
import swal from "sweetalert";
import parse from "html-react-parser";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FiPrinter } from "react-icons/fi";

const BluePrint = () => {
  // const { blueprint_ID } = useParams();
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

      if (res.status === 200) {
        setblueprint(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [AllChapterData1, setAllChapterData1] = useState([]);
  const [blueprint1, setblueprint1] = useState([]);
  const getallblueprint1 = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getblueprintsbyid"
      );

      if (res.status == 200) {
        setblueprint1(res.data.success);
        setAllChapterData1(res.data.success?.AllChapter);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallblueprint();
    getallblueprint1();
  }, []);

  const upcomingStaus = async (status, val) => {
    try {
      const config = {
        url: "/teacher/upadeteQuestionPaper",
        baseURL: "http://localhost:8000/api",
        method: "put",
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: {
          id: state?._id,
          authId: user?._id,
          bluePrintId: val?._id,
          status: status,
        },
      };

      let res = await axios(config);
      if (res.status == 200) {
        if (status == "Saved Draft") {
          setTimeout(() => {
            return navigate("/profile");
          }, 1000);
          return swal({
            title: "Yeah!",
            text: "Successfully Saved Draft",
            icon: "success",
            button: "OK!",
          });
        } else {
          if (
            val?.SubClassName?.toLowerCase() == "class 10" &&
            val?.subjects?.toLowerCase() == "maths"
          ) {
            return navigate("/10th_QP_maths", {
              state: { ...state, bluePrint: val },
            });
          } else if (
            val?.SubClassName?.toLowerCase() == "class 10" &&
            val?.subjects?.toLowerCase() == "science"
          ) {
            return navigate("/science10th", {
              state: { ...state, bluePrint: val },
            });
          } else if (
            val?.SubClassName?.toLowerCase() == "class 10" &&
            val?.subjects?.toLowerCase() == "social science"
          ) {
            return navigate("/socialqp", {
              state: { ...state, bluePrint: val },
            });
          } else if (
            val?.SubClassName?.toLowerCase() == "class 10" &&
            val?.subjects?.toLowerCase() == "english"
          ) {
            return navigate("/englishqp", {
              state: { ...state, bluePrint: val },
            });
          } else
            return navigate("/questionpaper", {
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

  const uniqueObjectsArray = [];
  const uniqueNames = new Set(); // Using a Set to keep track of unique names

  AllChapterData1?.forEach((ele, i) => {
    const chapterName = ele?.Blueprintchapter;
    if (!uniqueNames.has(chapterName)) {
      uniqueNames.add(chapterName);
      uniqueObjectsArray.push({
        index: i + 1,
        name: chapterName,
      });
    }
  });

  console.log("uniqueObjectsArray", niqueDataName);

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

  // to print the pdf ----->
  const createPDF = async () => {
    // setRotate(360);

    // dynamic image is also adding in the PDF
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });
    console.log("hhhh", data);
    const img = data.toDataURL("image/png");
    console.log("ddkd1", img);
    const imgProperties = pdf.getImageProperties(img);
    console.log("ddkd2", imgProperties);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    console.log("ddkd3", pdfWidth);
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    console.log("ddkd4", pdfHeight);
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);

    // const input = document.getElementById("pdf");
    // const options = { scrollY: -window.scrollY, useCORS: true };
    // const canvas = await html2canvas(input, options);
    // const imgData = canvas.toDataURL("image/png");
    // const pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
    // pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    pdf.save("Blueprint.pdf");
  };

  const createPDF1 = async () => {
    // setRotate(360);

    // dynamic image is also adding in the PDF
    const pdf = new jsPDF("landscape", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf1"), {
      useCORS: true,
    });
    console.log("hhhh", data);
    const img = data.toDataURL("image/png");
    console.log("ddkd1", img);
    const imgProperties = pdf.getImageProperties(img);
    console.log("ddkd2", imgProperties);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    console.log("ddkd3", pdfWidth);
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    console.log("ddkd4", pdfHeight);
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);

    // const input = document.getElementById("pdf");
    // const options = { scrollY: -window.scrollY, useCORS: true };
    // const canvas = await html2canvas(input, options);
    // const imgData = canvas.toDataURL("image/png");
    // const pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
    // pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    pdf.save("Blueprint.pdf");
  };
  console.log("blueprint1",blueprint1)

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
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-end">
                    <div className="justify-content-end d-flex gap-3">
                      {/* <FiPrinter
                        onClick={createPDF}
                        style={{ cursor: "pointer" }}
                      /> */}
                       <button onClick={createPDF} className="btn btn-success">View description</button>
                <button onClick={createPDF1} className="btn btn-success">View Blueprint</button>
                      <div id="google_translate_element"></div>
                    </div>
                  </div>
                </div>
              </div>
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
                        <div  className="p-3" id="pdf">
                          <div className="blueprint-titles">
                            <div className="top-titles-container">
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-2">
                                    {state?.School_Logo ? (
                                      <img
                                        src={`http://localhost:8000/Teacher/${state?.School_Logo}`}
                                        alt=""
                                        style={{
                                          width: "100px",
                                          height: "-webkit-fill-available",
                                        }}
                                      />
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                  <div className="col-md-10">
                                    <div className="title-1 text-center">
                                      <h4>{state?.Institute_Name}</h4>
                                      {/* <h4>ಸಾಂತಾ ಪಾಲ್ ಶಾಲೇ</h4> */}
                                    </div>
                                    <div className="title-2">
                                      <h5>{state?.SchoolAddress}</h5>
                                      {/* <h5>ಬೆಂಗಳೂರು</h5> */}
                                    </div>
                                    <div className="title-3">
                                      <h4>{val?.blName}</h4>
                                      {/* <h4>೭ ನೀ ತರಗತಿ ಪ್ರಥಮ ಬಾಷೆಗಳ ನೇಲಿ ನಕ್ಷೆ</h4> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="container mt-2">
                              <div className="row">
                                <div className="class-details">
                                  <div className="class-data">
                                    <b>ತರಗತಿ : 7</b>
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
                          <div className="container" >
                            <div className="row">
                              <div className="col-md-7">
                                {/* table 3  */}
                                
                                <div className="weightage-objectives mt-4">
                                  <div className="main-title">
                                    <b>1.</b>
                                    <b>ಘಟಕವಾರು ಅಂಕ ಹಂಚಿಕೆ</b>
                                  </div>
                                  <div className="objectives-table">
                                    <Table
                                    responsive
                                      bordered
                                      hover
                                      size="md"
                                      style={{ border: "1px solid" }}
                                    >
                                      <thead>
                                      <tr>
                            <th>ಕೆ ಸಂಖ್ಯೆ</th>
                            <th>ಪಾಠಗಳು</th>
                            <th>ಪ್ರಶ್ನೆಗಳು</th>
                            <th>ಅಂಕಗಳು</th>
                            <th>ಶೇಕಡಾವಾರು</th>
                          </tr>
                                      </thead>
                                      <tbody>
                                        {niqueDataName(val?.AllChapter)?.map(
                                          (item, i) => {
                                            return (
                                              <tr>
                                                <td>{i + 1}</td>
                                                <td>{item?.name}</td>
                                                <td>{val?.AllChapter?.filter((ele)=> ele?.Blueprintchapter == item?.name)?.reduce(
                          (a, ele) => a + Number(ele?.Blueprintnoofquestion),
                          0
                        )}</td>
                                <td>
                                {val?.AllChapter?.filter((ele)=> ele?.Blueprintchapter == item?.name)?.reduce(
                          (a, ele) => a + Number(ele?.Blueprintnoofquestion*ele?.BluePrintmarksperquestion),
                          0
                        )}
                                </td>
                                <td>{(val?.AllChapter?.filter((ele)=> ele?.Blueprintchapter == item?.name)?.reduce(
                          (a, ele) => a + Number(ele?.Blueprintnoofquestion*ele?.BluePrintmarksperquestion),
                          0
                        )/(val?.AllChapter?.reduce(
                          (a, ele) =>
                            a +
                            Number(
                              ele?.BluePrintmarksperquestion *
                                ele?.Blueprintnoofquestion
                            ),
                          0
                        )))*100}%</td>
                                              </tr>
                                            );
                                          }
                                        )}
                                       

                                        <tr>
                                          <td>
                                            <b>ಒಟ್ಟು</b>
                                          </td>
                                          <td> </td>
                                        
                                          <td>
                                            {val?.TypesofQuestions?.reduce(
                                              (a, i) => a + Number(i?.NQA),
                                              0
                                            )}
                                          </td>
                                          <td>
                                            <b>
                                              {val?.TypesofQuestions?.reduce(
                                                (a, i) =>
                                                  a + Number(i?.Mask * i?.NQA),
                                                0
                                              )}
                                            </b>
                                          </td>
                                          <td>100%</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                </div> 
                              </div>
                              <div className="col-md-5">
                                {/* table 1 */}
                                <div className="weightage-objectives mt-4">
                                  <div className="main-title">
                                    <b>2.</b>
                                    <b>ಉದ್ದೇಶವಾರು ಅಂಕ ಹಂಚಿಕೆ</b>
                                  </div>
                                  <div className="objectives-table">
                                    <Table
                                    responsive
                                      bordered
                                      hover
                                      style={{ border: "1px solid" }}
                                    >
                                      <thead>
                                      <tr>
                          <th>ಕೆ ಸಂಖ್ಯೆ</th>
                            <th>ನಿರ್ದಿಷ್ಟಗಳು</th>
                            <th>ಪ್ರಶ್ನೆಗಳು</th>
                            <th>ಅಂಕಗಳು</th>
                            <th>ಶೇಕಡಾವಾರು</th>
                          </tr>
                                      </thead>
                                      <tbody>
                                        {val?.objectives?.map((item, i) => {
                                          return (
                                            <tr >
                                            <td>{i+1}</td>
                                            <td>{item?.Objective}</td>
                                            <td>{val?.AllChapter?.filter((ele)=> ele?.Blueprintobjective == item?.Objective)?.reduce(
                                      (a, ele) => a + Number(ele?.Blueprintnoofquestion),
                                      0
                                    )}</td>
                                           <td>
                                            {val?.AllChapter?.filter((ele)=> ele?.Blueprintobjective == item?.Objective)?.reduce(
                                      (a, ele) => a + Number(ele?.Blueprintnoofquestion*ele?.BluePrintmarksperquestion),
                                      0
                                    )}
                                            </td>
                                            <td>{(val?.AllChapter?.filter((ele)=> ele?.Blueprintobjective == item?.Objective)?.reduce(
                                      (a, ele) => a + Number(ele?.Blueprintnoofquestion*ele?.BluePrintmarksperquestion),
                                      0
                                    )/(val?.AllChapter?.reduce(
                                      (a, ele) =>
                                        a +
                                        Number(
                                          ele?.BluePrintmarksperquestion *
                                            ele?.Blueprintnoofquestion
                                        ),
                                      0
                                    )))*100}%</td>
                                            
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
                                    <b>3.</b>
                                    <b>ಪ್ರಶ್ನಾವಾರು ಅಂಕ ಹಂಚಿಕೆ</b>
                                  </div>
                                  <div className="text-center">
                                    <div className="objectives-table">
                                    <Table
                          responsive
                          bordered
                          hover
                          size="sm"
                          style={{ border: "1px solid" }}
                        >
                          <thead>
                          <tr>
                            <th>ಕೆ ಸಂಖ್ಯೆ</th>
                              <th>ಪ್ರಶ್ನೆಗಳ ವಿಧ</th>
                              <th>ಪ್ರಶ್ನೆಗಳು</th>
                            <th>ಅಂಕಗಳು</th>
                            <th>ಶೇಕಡಾವಾರು</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* {blueprint?.Weightageofthecontent?.map((val, i) => {
                              return ( */}
                                <tr >
                                  <td>1</td>
                                  <td>ವಸ್ತುನಿಷ್ಠ ಪ್ರಶ್ನೆ</td>
                                  <td>{val?.AllChapter?.filter(
                                    (item) =>
                                    
                                      item?.BluePrintQuestiontype == "O T"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(am?.Blueprintnoofquestion),
                                    0
                                  )}</td>

                                  <td>{val?.AllChapter?.filter(
                                    (item) =>
                                    
                                      item?.BluePrintQuestiontype == "O T"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(   am?.BluePrintmarksperquestion *
                                        am?.Blueprintnoofquestion),
                                    0
                                  )}</td>
                                 <td>{(val?.AllChapter?.filter((item)=>  item?.BluePrintQuestiontype == "O T")?.reduce(
                          (a, ele) => a + Number(ele?.Blueprintnoofquestion*ele?.BluePrintmarksperquestion),
                          0
                        )/(val?.AllChapter?.reduce(
                          (a, ele) =>
                            a +
                            Number(
                              ele?.BluePrintmarksperquestion *
                                ele?.Blueprintnoofquestion
                            ),
                          0
                        )))*100}%</td>
                                </tr>
                                <tr >
                                  <td>2</td>
                                  <td>ಕಿರು ಉತ್ತರ ಪ್ರಶ್ನೆ</td>
                                  <td>{val?.AllChapter?.filter(
                                    (item) =>
                                    
                                      item?.BluePrintQuestiontype == "V.S.A"|| item?.BluePrintQuestiontype == "S.A"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(am?.Blueprintnoofquestion),
                                    0
                                  )}</td>

                                  <td>{val?.AllChapter?.filter(
                                    (item) =>
                                    
                                      item?.BluePrintQuestiontype == "V.S.A"|| item?.BluePrintQuestiontype == "S.A"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(   am?.BluePrintmarksperquestion *
                                        am?.Blueprintnoofquestion),
                                    0
                                  )}</td>
                                 <td>{(val?.AllChapter?.filter((item)=>  item?.BluePrintQuestiontype == "V.S.A" || item?.BluePrintQuestiontype == "S.A")?.reduce(
                          (a, ele) => a + Number(ele?.Blueprintnoofquestion*ele?.BluePrintmarksperquestion),
                          0
                        )/(val?.AllChapter?.reduce(
                          (a, ele) =>
                            a +
                            Number(
                              ele?.BluePrintmarksperquestion *
                                ele?.Blueprintnoofquestion
                            ),
                          0
                        )))*100}%</td>
                                </tr>
                                <tr >
                                  <td>3</td>
                                  <td>ದೀರ್ಘ ಉತ್ತರ ಪ್ರಶ್ನೆ</td>
                                  <td>{val?.AllChapter?.filter(
                                    (item) =>
                                    
                                      item?.BluePrintQuestiontype == "L.A 1"|| item?.BluePrintQuestiontype == "L.A 2"|| item?.BluePrintQuestiontype == "L.A 3"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(am?.Blueprintnoofquestion),
                                    0
                                  )}</td>

                                  <td>{val?.AllChapter?.filter(
                                    (item) =>
                                    
                                    item?.BluePrintQuestiontype == "L.A 1"|| item?.BluePrintQuestiontype == "L.A 2"|| item?.BluePrintQuestiontype == "L.A 3"
                                  )?.reduce(
                                    (a, am) =>
                                      a + Number(   am?.BluePrintmarksperquestion *
                                        am?.Blueprintnoofquestion),
                                    0
                                  )}</td>
                                 <td>{(val?.AllChapter?.filter((item)=>   item?.BluePrintQuestiontype == "L.A 1"|| item?.BluePrintQuestiontype == "L.A 2"|| item?.BluePrintQuestiontype == "L.A 3")?.reduce(
                          (a, ele) => a + Number(ele?.Blueprintnoofquestion*ele?.BluePrintmarksperquestion),
                          0
                        )/(val?.AllChapter?.reduce(
                          (a, ele) =>
                            a +
                            Number(
                              ele?.BluePrintmarksperquestion *
                                ele?.Blueprintnoofquestion
                            ),
                          0
                        )))*100}%</td>
                                </tr>
                              {/* );
                            })} */}
                          </tbody>
                        </Table>
                                    </div>
                                  </div>
                                </div>

                                {/* table 4  */}
                                <div className="weightage-objectives">
                                  <div className="main-title">
                                    <b>4.</b>
                                    <b>ಕಠಿಣತಾವಾರು ಅಂಕ ಹಂಚಿಕೆ</b>
                                  </div>
                                  <div className="objectives-table">
                                  <Table
                                  responsive
                        bordered
                        hover
                        size="md"
                        style={{ border: "1px solid" }}
                      >
                        <thead>
                        <tr>
                          <th>ಕೆ ಸಂಖ್ಯೆ</th>
                            <th>ಕಠಿಣತೆಯ ಮಟ್ಟ</th>
                            <th>ಪ್ರಶ್ನೆಗಳು</th>
                            <th>ಅಂಕಗಳು</th>
                            <th>ಶೇಕಡಾವಾರು</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>ಸರಳ</td>
                            <td>{val?.Easy}</td>
                            <td>{val?.EasyMask}</td>
                            <td>{val?.EasyParcentage}%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>ಸಾಧಾರಣ</td>
                            <td>{val?.Average}</td>
                            <td>{val?.AverageMask}</td>
                            <td>{val?.AverageParcentage}%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>ಕಠಿಣ</td>
                            <td>{val?.Difficult}</td>
                            <td>{val?.DifficultMask}</td>
                            <td>{val?.DifficultParcentage}%</td>
                          </tr>
                        </tbody>
                      </Table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
{/* Seconed bluePrint */}
                          <div style={{ fontFamily: "sans-serif" }} id="pdf1">
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
                                  <b>ಸಮಯ : {val?.DurationOfExam}</b>
                                </div>
                                <div>
                                <b>ನೆಲಿ ನಕ್ಷೆ</b>
                                </div>
                                <div>
                                  <b>
                                  ಅಂಕ :-
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
                                {/* <Table
                                responsive
                                bordered
                                style={{ border: "1px solid", width: "109rem" }}
                                size="sm"
                              >
                                <thead>
                                  <tr>
                                    <th>S No.</th>
                                    <th style={{ width: "200px" }}>Content</th>
                                    {val?.objectives?.map((ele) => {
                                      return (
                                        <>
                                          <th colSpan={6}>{ele?.Objective}</th>
                                          
                                        </>
                                      );
                                    })}

                                    <th colSpan={6}>Total Questions</th>
                                   
                                    <th colSpan={1}>Total Marks</th>
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
                                  {niqueDataName(val?.AllChapter)?.map(
                                    (ele, i) => {
                                      return (
                                        <tr>
                                          <td>{i + 1}</td>
                                          <td style={{ width: "200px" }}>
                                            {ele?.name}
                                          </td>
                                          {val?.objectives?.map((ele1) => {
                                            return (
                                              <>
                                                <td>
                                                  {
                                                    val?.AllChapter?.find(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele1?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "O T" &&
                                                        item?.Blueprintchapter ==
                                                          ele?.name
                                                    )?.Blueprintnoofquestion
                                                  }
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
                                                </td>
                                                <td>
                                                  {
                                                    val?.AllChapter?.find(
                                                      (item) =>
                                                        item?.Blueprintobjective ==
                                                          ele1?.Objective &&
                                                        item?.BluePrintQuestiontype ==
                                                          "V.S.A" &&
                                                        item?.Blueprintchapter ==
                                                          ele?.name
                                                    )?.Blueprintnoofquestion
                                                  }
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
                                                </td>
                                                <td>
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
                                                <td>
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
                                                <td>
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
                                                <td>
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

                                          <td>
                                            {
                                              bluePrintTotalQues(
                                                val?.AllChapter,
                                                ele?.name,
                                                "O T"
                                              )?.TotalQ
                                            }
                                          </td>
                                          <td>
                                            {
                                              bluePrintTotalQues(
                                                val?.AllChapter,
                                                ele?.name,
                                                "V.S.A"
                                              )?.TotalQ
                                            }
                                          </td>
                                          <td>
                                            {
                                              bluePrintTotalQues(
                                                val?.AllChapter,
                                                ele?.name,
                                                "S.A"
                                              )?.TotalQ
                                            }
                                          </td>
                                          <td>
                                            {
                                              bluePrintTotalQues(
                                                val?.AllChapter,
                                                ele?.name,
                                                "L.A 1"
                                              )?.TotalQ
                                            }
                                          </td>
                                          <td>
                                            {
                                              bluePrintTotalQues(
                                                val?.AllChapter,
                                                ele?.name,
                                                "L.A 2"
                                              )?.TotalQ
                                            }
                                          </td>
                                          <td>
                                            {
                                              bluePrintTotalQues(
                                                val?.AllChapter,
                                                ele?.name,
                                                "L.A 3"
                                              )?.TotalQ
                                            }
                                          </td>

                                          <td>
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
                                    <td>
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
                              </Table> */}
                                <Table
                                  responsive
                                  bordered
                                  style={{
                                    border: "1px solid",
                                    width: "76.8rem",
                                  }}
                                >
                                  <thead>
                                    <tr>
                                      <th style={{ fontSize: "12px" }}>
                                      ಕ್ರ.ಸಂ
                                      </th>
                                      <th
                                        style={{
                                          fontSize: "12px",
                                          width: "125px",
                                        }}
                                      >
                                       ಉದ್ದೇಶಿತ ಘಟಕಗಳು
                                      </th>
                                      {val?.objectives?.map((ele) => {
                                        return (
                                          <>
                                            <th
                                              colSpan={6}
                                              style={{ fontSize: "12px" }}
                                            >
                                              {ele?.Objective}
                                            </th>
                                          </>
                                        );
                                      })}

                                      <th
                                        colSpan={6}
                                        style={{ fontSize: "12px" }}
                                      >
                                        ಒಟ್ಟು ಪ್ರಶ್ನೆ
                                      </th>

                                      <th
                                        colSpan={1}
                                        style={{ fontSize: "12px" }}
                                      >
                                       ಒಟ್ಟು ಅಂಕ
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {/* <tr>
                                    <th></th>

                                    <th style={{ fontSize:"12px" }}></th>
                                    {val?.objectives?.map((ele) => {
                                      return (
                                        <>
                                          <th style={{ fontSize:"12px" }}>M.C</th>
                                          <th style={{ fontSize:"12px" }}>V.S.A</th>
                                          <th style={{ fontSize:"12px" }}>S.A</th>
                                          <th style={{ fontSize:"12px" }}>L.A.1</th>
                                          <th style={{ fontSize:"12px" }}>L.A.2</th>
                                          <th style={{ fontSize:"12px" }}>L.A.3</th>
                                        </>
                                      );
                                    })}

                                    <th style={{ fontSize:"12px" }}>M.C</th>
                                    <th style={{ fontSize:"12px" }}>V.S.A</th>
                                    <th style={{ fontSize:"12px" }}>S.A</th>
                                    <th style={{ fontSize:"12px" }}>L.A.1</th>
                                    <th style={{ fontSize:"12px" }}>L.A.2</th>
                                    <th style={{ fontSize:"12px" }}>L.A.3</th>
                                    <th style={{ fontSize:"12px" }}></th>
                                  </tr> */}
                                    <tr
                                      style={{
                                        borderBottom: "2px solid black",
                                      }}
                                    >
                                      <th></th>
                                      <th></th>

                                      <th style={{ fontSize: "12px" }}>ವ</th>
                                      <th
                                        colSpan={2}
                                        style={{ fontSize: "12px" }}
                                      >
                                        ಕಿ.
                                      </th>
                                      <th
                                        colSpan={3}
                                        style={{ fontSize: "12px" }}
                                      >
                                       ದೀ
                                      </th>

                                      <th style={{ fontSize: "12px" }}> ವ</th>
                                      <th
                                        colSpan={2}
                                        style={{ fontSize: "12px" }}
                                      >
                                        ಕಿ.
                                      </th>
                                      <th
                                        colSpan={3}
                                        style={{ fontSize: "12px" }}
                                      >
                                       ದೀ
                                      </th>

                                      <th style={{ fontSize: "12px" }}>ವ</th>
                                      <th
                                        colSpan={2}
                                        style={{ fontSize: "12px" }}
                                      >
                                       ಕಿ.
                                      </th>
                                      <th
                                        colSpan={3}
                                        style={{ fontSize: "12px" }}
                                      >
                                       ದೀ
                                      </th>

                                      <th style={{ fontSize: "12px" }}>ವ</th>
                                      <th
                                        colSpan={2}
                                        style={{ fontSize: "12px" }}
                                      >
                                       ಕಿ.
                                      </th>
                                      <th
                                        colSpan={3}
                                        style={{ fontSize: "12px" }}
                                      >
                                       ದೀ
                                      </th>

                                      <th style={{ fontSize: "12px" }}>ವ</th>
                                      <th
                                        colSpan={2}
                                        style={{ fontSize: "12px" }}
                                      >
                                       ಕಿ.
                                      </th>
                                      <th
                                        colSpan={3}
                                        style={{ fontSize: "12px" }}
                                      >
                                        ದೀ
                                      </th>
                                    </tr>
                                    <tr>
                                      <th></th>
                                      <th
                                        style={{
                                          width: "125px",
                                          fontSize: "12px",
                                        }}
                                      ></th>
                                      <th style={{ fontSize: "12px" }}></th>
                                      <th style={{ fontSize: "12px" }}>
                                        V S A
                                      </th>
                                      <th style={{ fontSize: "12px" }}>S A</th>
                                      <th style={{ fontSize: "12px" }}>LA 1</th>
                                      <th style={{ fontSize: "12px" }}>LA 2</th>
                                      <th style={{ fontSize: "12px" }}>LA 3</th>
                                      <th style={{ fontSize: "12px" }}></th>
                                      <th style={{ fontSize: "12px" }}>
                                        V S A
                                      </th>
                                      <th style={{ fontSize: "12px" }}>S A</th>
                                      <th style={{ fontSize: "12px" }}>LA 1</th>
                                      <th style={{ fontSize: "12px" }}>LA 2</th>
                                      <th style={{ fontSize: "12px" }}>LA 3</th>
                                      <th style={{ fontSize: "12px" }}></th>
                                      <th style={{ fontSize: "12px" }}>
                                        V S A
                                      </th>
                                      <th style={{ fontSize: "12px" }}>S A</th>
                                      <th style={{ fontSize: "12px" }}>LA 1</th>
                                      <th style={{ fontSize: "12px" }}>LA 2</th>
                                      <th style={{ fontSize: "12px" }}>LA 3</th>
                                      <th style={{ fontSize: "12px" }}></th>
                                      <th style={{ fontSize: "12px" }}>
                                        V S A
                                      </th>
                                      <th style={{ fontSize: "12px" }}>S A</th>
                                      <th style={{ fontSize: "12px" }}>LA 1</th>
                                      <th style={{ fontSize: "12px" }}>LA 2</th>
                                      <th style={{ fontSize: "12px" }}>LA 3</th>
                                      <th style={{ fontSize: "12px" }}></th>
                                      <th style={{ fontSize: "12px" }}>VSA</th>
                                      <th style={{ fontSize: "12px" }}>SA</th>
                                      <th style={{ fontSize: "12px" }}>LA 1</th>
                                      <th style={{ fontSize: "12px" }}>LA 2</th>
                                      <th style={{ fontSize: "12px" }}>LA 3</th>
                                      <th style={{ fontSize: "12px" }}></th>
                                    </tr>
                                    {niqueDataName(val?.AllChapter)?.map(
                                      (ele, i) => {
                                        return (
                                          <tr>
                                            <td style={{ fontSize: "12px" }}>
                                              {i + 1}
                                            </td>
                                            <td style={{ fontSize: "12px" }}>
                                              {ele?.name}
                                            </td>
                                            {val?.objectives?.map((ele1) => {
                                              return (
                                                <>
                                                  <td
                                                    style={{ fontSize: "12px" }}
                                                  >
                                                    {
                                                      val?.AllChapter?.find(
                                                        (item) =>
                                                          item?.Blueprintobjective ==
                                                            ele1?.Objective &&
                                                          item?.BluePrintQuestiontype ==
                                                            "O T" &&
                                                          item?.Blueprintchapter ==
                                                            ele?.name
                                                      )?.Blueprintnoofquestion
                                                    }
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
                                                  </td>
                                                  <td
                                                    style={{ fontSize: "12px" }}
                                                  >
                                                    {
                                                      val?.AllChapter?.find(
                                                        (item) =>
                                                          item?.Blueprintobjective ==
                                                            ele1?.Objective &&
                                                          item?.BluePrintQuestiontype ==
                                                            "V.S.A" &&
                                                          item?.Blueprintchapter ==
                                                            ele?.name
                                                      )?.Blueprintnoofquestion
                                                    }
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
                                                  </td>
                                                  <td
                                                    style={{ fontSize: "12px" }}
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
                                                    style={{ fontSize: "12px" }}
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
                                                    style={{ fontSize: "12px" }}
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
                                                    style={{ fontSize: "12px" }}
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

                                            <td style={{ fontSize: "12px" }}>
                                              {
                                                bluePrintTotalQues(
                                                  val?.AllChapter,
                                                  ele?.name,
                                                  "O T"
                                                )?.TotalQ
                                              }
                                            </td>
                                            <td style={{ fontSize: "12px" }}>
                                              {
                                                bluePrintTotalQues(
                                                  val?.AllChapter,
                                                  ele?.name,
                                                  "V.S.A"
                                                )?.TotalQ
                                              }
                                            </td>
                                            <td style={{ fontSize: "12px" }}>
                                              {
                                                bluePrintTotalQues(
                                                  val?.AllChapter,
                                                  ele?.name,
                                                  "S.A"
                                                )?.TotalQ
                                              }
                                            </td>
                                            <td style={{ fontSize: "12px" }}>
                                              {
                                                bluePrintTotalQues(
                                                  val?.AllChapter,
                                                  ele?.name,
                                                  "L.A 1"
                                                )?.TotalQ
                                              }
                                            </td>
                                            <td style={{ fontSize: "12px" }}>
                                              {
                                                bluePrintTotalQues(
                                                  val?.AllChapter,
                                                  ele?.name,
                                                  "L.A 2"
                                                )?.TotalQ
                                              }
                                            </td>
                                            <td style={{ fontSize: "12px" }}>
                                              {
                                                bluePrintTotalQues(
                                                  val?.AllChapter,
                                                  ele?.name,
                                                  "L.A 3"
                                                )?.TotalQ
                                              }
                                            </td>

                                            <td style={{ fontSize: "12px" }}>
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
                                    <tr>
                                      <td></td>
                                      <td style={{ fontSize: "12px" }}>
                                        Total
                                      </td>
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
                                      <td style={{ fontSize: "12px" }}>
                                        <b>
                                          {val?.AllChapter?.reduce(
                                            (a, ele) =>
                                              a +
                                              Number(
                                                ele?.Blueprintnoofquestion
                                              ),
                                            0
                                          )}
                                        </b>
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        <b>
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
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                              <span>Note:-</span>
                              {parse(`<span>${val?.Instructions}</span>`)}
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
                              upcomingStaus("Saved Draft", val);
                            }}
                          >
                            Save Draft
                          </Button>
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
};

export default BluePrint;
