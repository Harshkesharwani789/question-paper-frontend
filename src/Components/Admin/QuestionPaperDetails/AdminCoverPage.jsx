import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { LuPrinter } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

function AdminCoverPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state ? location.state.item : null;

  console.log("itemmmmmm", item); // Check if item is logged properly

  const [data1, setData1] = useState({});
  const getCoverPage = async () => {
    try {
      let res = await axios.get(
        "https://question-paper-backend-pariksha.onrender.com/api/admin/getCoverPageBYMedium/" +
          item?.Medium
      );
      if (res.status === 200) {
        setData1(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("data1", data1);

  useEffect(() => {
    if (item) {
      getCoverPage();
    }
  }, []);
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
    navigate("/adminviewblueprint", { state: item });
    setTimeout(() => {
      return window.location.reload();
    }, 1000);
  };
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div className="d-flex justify-content-evenly">
          <div>
            <LuPrinter
              style={{ width: "22px", height: "40px", cursor: "pointer" }}
              onClick={() => handlePrint("printable-content")}
            />
          </div>
          <div>
            <Button onClick={() => navigate(-1)}>Back</Button>
          </div>
        </div>

        <div
          id="CoverPage"
          style={{ padding: "15px", overflow: "hidden", overflowX: "scroll" }}
        >
          <div
            style={{
              padding: "15px",
              border: "2px solid #000",
              width: "750px",
              margin: "auto",
              borderRadius: "20px",
              height: "950px",
            }}
          >
            <div className="d-flex align-items-center mb-5 justify-content-around">
              <div>
                {item?.School_Logo ? (
                  <img
                    src={`https://question-paper-backend-pariksha.onrender.com/Teacher/${item?.School_Logo}`}
                    alt=""
                    style={{ width: "80px", marginTop: "24px" }}
                  />
                ) : (
                  <></>
                )}
              </div>
              <div className=" text-center">
                <h6 className="fw-bold">{item?.Institute_Name}</h6>
                <h6 className="fw-bold">{item?.SchoolAddress}</h6>
              </div>
            </div>
            <div className="text-center">
              {" "}
              <h6 className="fw-bold">{item?.BlueName}</h6>
            </div>
            <div
              className="d-flex justify-content-around mb-5"
              style={{ marginTop: "130px" }}
            >
              <p className="fw-bold fs-6">
                {data1?.Subject} :- {item?.Subject}
              </p>
              <p className="fw-bold fs-6">
                {data1?.Classs} :- {item?.Sub_Class}{" "}
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
                <li className="d-flex gap-4 align-items-center ">
                  <p>
                    {" "}
                    <FaStar />
                  </p>
                  <p>{data1?.questionPaper}</p>
                </li>
                <li className="d-flex gap-4 align-items-center ">
                  <p>
                    {" "}
                    <FaStar />
                  </p>
                  <p>{data1?.blueprint}</p>
                </li>
                <li className="d-flex gap-4 align-items-center ">
                  <p>
                    {" "}
                    <FaStar />
                  </p>
                  <p>{data1?.answersheet}</p>
                </li>
                <li className="d-flex gap-4 align-items-center ">
                  <p>
                    {" "}
                    <FaStar />
                  </p>
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
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-2 mb-2">
          <Button
            onClick={() => navigate("/adminviewblueprint", { state: item })}
            variant="success"
          >
            Contienue
          </Button>
        </div>
      </div>
    </>
  );
}

export default AdminCoverPage;
