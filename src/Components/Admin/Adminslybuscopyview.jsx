import React, { useEffect, useState ,useRef} from "react";
// import Table from "react-bootstrap/Table";
import "../SyllabusCopy/SyllabusCopy.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { CiSaveDown2 } from "react-icons/ci";
import { LuPrinter } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { Row, Table } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
const Adminslybuscopyview = () => {
  const { Slybus_id } = useParams();

  const [addslybus, setaddslybus] = useState([]);

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
    pdf.save("Syllabus.pdf");
  };

  
  const [show, setShow] = useState("");
  const aTagRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };


  const Adminslybusbyid = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/admin/getslybusbyid/${Slybus_id}`
      );
      if (res.status == 200) setaddslybus(res.data.succes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Adminslybusbyid();
  }, []);

  return (
    <div>
      {/* first sem first page starts here  */}
      <div className="top-header">
        <div className="top-nav-display">
          <CiSaveDown2
            style={{ width: "22px", height: "40px" }}
            onClick={createPDF}
          />
          <LuPrinter
            style={{ width: "22px", height: "40px" }}
            ref={aTagRef}
            onClick={handlePrint}
          />
          <IoMdShare
            style={{ width: "22px", height: "40px" }}
            onClick={() => {
              setShow(true);
            }}
          />
        </div>
        {show ? (
          <>
            <div className="share-button">
              <div>
                <a href={"https://www.whatsapp.com/"}>
                  <IoLogoWhatsapp style={{ width: "25px", height: "35px" }} />
                </a>
              </div>
              <di>
                <a href={"https://www.gmail.com/"}>
                  <MdOutlineEmail style={{ width: "25px", height: "35px" }} />
                </a>
              </di>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="question-paper-display">
        <div className="details-display">
          {/* <div className="top-titles-container">
                        <div className="top-logo">
                            <div>
                                <img src="../Images/logo.png" alt="" style={{ width: "100px" }} />
                            </div>
                            <div className="title-1">
                                <h4>KARNATAKA SCHOOL EXAMINATION AND ASSESSMENT BOARD</h4>
                            </div>
                        </div>
                        <div className="title-2">
                            <h5>KSQAAC, Malleshwaram, Bengaluru-560003</h5>
                        </div>
                        <div className="title-3">
                            <h4>Assessment-March 2023 Syllabus Copy</h4>
                        </div>
                    </div> */}

         
          <div>
            <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
            {addslybus?.year} {addslybus?.Title} 
            </h3>
            <h5 style={{ textAlign: "center" }}>{addslybus?.SubClass} - {addslybus?.subject} </h5>
            <h5 style={{ textAlign: "center" }}></h5>
          </div>
          <div>
            <Table
              responsive
              striped
              bordered
              hover
              size="sm"
              style={{ border: "1px solid" }}
            >
              <thead>
                <tr>
                  <th>SL. No.</th>
                  <th>Month</th>
                  <th>Period</th>
                  <th>No.of Unit</th>
                  <th>Unit Name</th>
                </tr>
              </thead>
              <tbody>
                {addslybus?.SyllabusDetails?.sort((a, b) => {
    // Convert the strings to numbers and then compare them
    return parseInt(a?.unitArr[0]?.realMonth?.split("-").join("")) - parseInt(b?.unitArr[0]?.realMonth?.split("-").join(""));
}).map((item, i) => {
if(item?.Examinationname=="Sa-01" ||item?.Examinationname=="Sa-02"){
 i=i-1
}
                  return (
                    <>   {item?.Examinationname=="Sa-01" ||item?.Examinationname=="Sa-02" ? (<></>):(  <tr>
                      <td>{ i + 1}</td>
                   
                      <td>
                        {item?.unitArr?.map((ele) => {
                          return <p>{ele?.Months}</p>;
                        })}
                      </td>
                      <td>
                        {item?.unitArr?.map((ele) => {
                          return <p>{ele?.period}</p>;
                        })}
                      </td>
                      <td>
                        {item?.unitArr?.map((ele) => {
                          return <p>{ele?.chapterno}</p>;
                        })}
                      </td>
                      <td>
                        {item?.unitArr?.map((ele) => {
                          return <p>{ele?.ChapterName}</p>;
                        })}
                      </td>
                    </tr>)}
                    
                      <tr>
                        <td colspan="5">
                          <table class="table mb-0">{item?.Assessment}({item?.Examinationname}) {item?.from} to {item?.to}</table>
                        </td>
                      </tr>
                    </>
                  );
                })}

                {/* <tr>
                  <td>2</td>
                  <td>2</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>3</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>4</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>5</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>6</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>7</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>8</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>9</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>10</td>
                  <td>10</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>11</td>
                  <td>11</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>12</td>
                  <td>12</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>13</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>14</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>15</td>
                  <td>15</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>16</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>17</td>
                  <td>17</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>18</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>19</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>20</td>
                  <td>20</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>21</td>
                  <td>21</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>22</td>
                  <td>22</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>23</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>24</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>25</td>
                  <td>25</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>26</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>27</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>28</td>
                  <td>Chapter Name</td>
                  <td></td>
                  <td>10</td>
                </tr> */}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* secod sem first page starts here 
            <div className='question-paper-display'>
                <div className='details-display'>
                    <div className="top-titles-container">
                        <div className="top-logo">
                            <div>
                                <img src="../Images/logo.png" alt="" style={{ width: "100px" }} />
                            </div>
                            <div className="title-1">
                                <h4>KARNATAKA SCHOOL EXAMINATION AND ASSESSMENT BOARD</h4>
                            </div>
                        </div>
                        <div className="title-2">
                            <h5>KSQAAC, Malleshwaram, Bengaluru-560003</h5>
                        </div>
                        <div className="title-3">
                            <h4>Assessment-March 2023 Syllabus Copy</h4>
                        </div>
                    </div>

                    <div className="class-details">
                        <div className="class-data">
                            <b>Class : 8</b>
                        </div>
                        <div className="class-data">
                            <b>Subject: First Language English</b>
                        </div>
                        <div>
                            <div className="class-data">
                                <b>Marks: 40</b>
                            </div>
                            <div className="class-data">
                                <b>Time: 2 Hours</b>
                            </div>
                        </div>
                    </div>
                    <div >
                        <h3 style={{ textAlign: "center", paddingTop: "10px" }}>Annual Lession Plan for 2024-25</h3>
                        <h5 style={{ textAlign: "center" }}>8th Standard</h5>
                        <h5 style={{ textAlign: "center" }}>2nd Semester</h5>

                    </div>
                    <div>
                        <Table responsive striped bordered hover size='sm' style={{ border: "1px solid" }}>
                            <thead>
                                <tr>
                                    <th>SL. No.</th>
                                    <th>Chapter Number</th>
                                    <th>Chapter Name</th>
                                    <th>Description</th>
                                    <th>Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td>5</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>6</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>8</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>9</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>11</td>
                                    <td>11</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>12</td>
                                    <td>12</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>13</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>14</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>16</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>17</td>
                                    <td>17</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>18</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>19</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>20</td>
                                    <td>20</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                
                                 <tr>
                                    <td>21</td>
                                    <td>21</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>22</td>
                                    <td>22</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>23</td>
                                    <td>23</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>26</td>
                                    <td>26</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>27</td>
                                    <td>27</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>28</td>
                                    <td>28</td>
                                    <td>Chapter Name</td>
                                    <td></td>
                                    <td>10</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default Adminslybuscopyview;
