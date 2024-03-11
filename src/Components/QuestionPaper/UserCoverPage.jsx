import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BiAnalyse, BiSpreadsheet } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuPrinter } from "react-icons/lu";
import { SiBlueprint } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import "../Admin/CoverPage.css";

export const UserCoverPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { state } = location;
  const [data1, setData1] = useState({});
  const getCoverPage = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/api/admin/getCoverPageBYMedium/" + state?.Medium
      );
      if (res.status == 200) {
        setData1(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (state) {
      getCoverPage();
    }
  }, [state]);

  const handlePrint = () => {
    const printableContent = document.getElementById("CoverPage").innerHTML;
    const originalContent = document.body.innerHTML;
    // Create a footer element with padding
    const footerContent = '<div style="padding-bottom: 50px;"></div>';
    // Replace the content of the body with the content of the printable section
    document.body.innerHTML = printableContent;
    // Print the content
    window.print();
    // Restore the original content
    document.body.innerHTML = originalContent;
    navigate("/blueprint", { state: state });
    setTimeout(() => {
      return window.location.reload();
    }, 1000);
  };
  return (
    <>
      <div style={{ padding: "10px" }}>
        <LuPrinter
          style={{ width: "22px", height: "40px" }}
          onClick={() => handlePrint("printable-content")}
        />
        <div id="CoverPage" style={{ padding: "15px" , overflow:'hidden', overflowX:"scroll"}}>
          <div
            style={{
              padding: "15px",
              border: "2px solid #000",
              width: "750px",
              margin: "auto",
              borderRadius: "20px",
              height: "1060px",
            }}
          >
            <div className="d-flex align-items-center mb-5 justify-content-around">
              <div>
                {state?.School_Logo ? (
                  <img
                    src={`http://localhost:8000/Teacher/${state?.School_Logo}`}
                    alt=""
                    style={{ width: "80px", marginTop: "24px" }}
                  />
                ) : (
                  <></>
                )}
              </div>
              <div className=" text-center">
                <h6 className="fw-bold">
                  {state?.Institute_Name} 
                </h6>
                <h6 className="fw-bold">{state?.SchoolAddress}</h6>
              </div>
            </div>
            <div className="text-center">
              {" "}
              <h6 className="fw-bold">{state?.BlueName}</h6>
            </div>
            <div
              className="d-flex justify-content-around mb-5"
              style={{ marginTop: "130px" }}
            >
              <p className="fw-bold fs-6">
                {data1?.Subject} :- {state?.Subject}
              </p>
              <p className="fw-bold fs-6">
                {data1?.Classs} :- {state?.Sub_Class}{" "}
              </p>
            </div>
            <div className="mb-5" style={{ marginTop: "150px" }}>
              <ul
                style={{
                  listStyle: "none",
                  width: "fit-content",
                  margin: "auto",
                  fontSize: "17px",
                  fontStyle: "italic",
                }}
              >
                <li className='d-flex gap-4 align-items-center '>
                  <p> <FaStar /></p>
                  <p>{data1?.questionPaper}</p>
                </li>
                <li className='d-flex gap-4 align-items-center '>
                  <p> <FaStar /></p>
                  <p>{data1?.blueprint}</p>
                </li>
                <li className='d-flex gap-4 align-items-center '>
                  <p> <FaStar /></p>
                  <p>{data1?.answersheet}</p>
                </li>
                <li className='d-flex gap-4 align-items-center '>
                  <p> <FaStar /></p>
                  <p>{data1?.questionanylys}</p>
                </li>
              </ul>
            </div>
            <div
              className="d-flex justify-content-around"
              style={{ marginTop: "99px" }}
            >
              <p className="fw-bold">{data1?.SubjectTeacher} :-</p>
              <div>
                <span className="fw-bold mb-0">{data1?.Principal} :-</span>
                {/* /
                    <span className='fw-bold mb-0'>Principal</span> */}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-2 mb-2">
          <Button
            onClick={() => navigate("/blueprint", { state: state })}
            variant="success"
          >
            Contienue
          </Button>
        </div>
      </div>
    </>
  );
};
