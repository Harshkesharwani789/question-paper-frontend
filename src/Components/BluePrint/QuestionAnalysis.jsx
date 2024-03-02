import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { CiSaveDown2 } from "react-icons/ci";
import { LuPrinter } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { Button, Form, Row } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import parse from "html-react-parser";
import Frontpage from "../fontpage/Frontpage";
import axios from "axios";
import swal from "sweetalert";

function QuestionAnalysis() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = sessionStorage.getItem("token");
    const { state } = useLocation();
  
    const [Questions, setQuestions] = useState([]);
  let count2=1
    const handlePrint = () => {
      const printableContent =
        document.getElementById("printable-content").innerHTML;
      const originalContent = document.body.innerHTML;
      // Create a footer element with padding
      const footerContent = '<div style="padding-bottom: 50px;"></div>';
      // Replace the content of the body with the content of the printable section
      document.body.innerHTML = printableContent;
      // Print the content
      window.print();
      // Restore the original content
      document.body.innerHTML = originalContent;
      navigate("/answersheet",{state:{...state,Questions}})
      setTimeout(()=>{
        return window.location.reload()
      },2000)
    };
  
    const getgenratedData=async()=>{
      try {
          const config = {
            url: "/teacher/getGenQuestionById/"+state?._id+"/"+user?._id,
            baseURL: "http://localhost:8000/api",
            method: "get",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            
          };
          let res = await axios(config);
          if (res.status == 200) {
            setQuestions(res.data.success?.Questions);
          }
        } catch (error) {
          console.log(error);
          return swal({
            title: "Oops!",
            text: error.response.data.error,
            icon: "error",
            button: "Ok!",
          });
        }
    }
  
    useEffect(()=>{
      if(token&&state){
          getgenratedData()
      }
    },[token,state])

    const navigate = useNavigate();

function check(am){
    
    if(am=="Objective Questions"||am=="One Word Question"||am=="Multiple Choice Questions"||am=="Fill in the Blanks Questions"||am=="Recorrect the Answers Questions"||am=="Match the Following Questions"||am=="Recorrect the Answers Questions"||am=="Odd and out words Questions"||am=="RelationShip Words Questions"||am=="Classifications of Questions"||am=="Grammer Questions"){
        return "O.T"
    }
    if(am=="One Sentence Answer Question"||am=="Two  Sentence Answer Questions"||am=="Situation UnderStatnding answer Questions"||am=="Complete the Poem"||am=="Poet,Time, Place, Writer answer questions"){
        return "S.A"
    }
    if(am=="Two and three Sentence Answer Questions"||am=="Three and Four Sentence Answer Questions"||am=="Five and Six Sentence Answer Questions"||am=="Six Sentence Answer Questions"||am=="Seven Sentence Answer Questions"||am=="Eight Sentence Answer Questions"||am=="Ten Sentence Answer Questions"||am=="Expanding and Explanations Answer Questions"||am=="Answer the Questions and Draw the Figure Questions"||am=="Graph Questions"||am=="Letter Writting"||am=="Map Reading"){
return "L.A"
    }
}

const obj={}

function checkNumber(data){

let am=state?.bluePrint?.AllChapter?.filter((ele)=> ele?.Blueprintobjective == data)?.reduce(
  (a, ele) => a + Number(ele?.Blueprintnoofquestion),
  0
)

}





    return (

        <div>
            <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-3">
          <LuPrinter
            style={{ width: "22px", height: "40px" }}
            onClick={handlePrint}
          />
        </div>
      </div>
            <Container className='mt-4' style={{border:"5px solid black", borderRadius:"15px"}} id="printable-content">
                <div className='mt-4' >
                <h3 className="text-center">
              {state?.Sub_Class} {state?.Subject}
            </h3>

                    <h4>ಪ್ರಶ್ನೆ ವಿಶ್ಲೇಷಣೆ</h4>
                </div>
                <Table striped bordered style={{ fontFamily: "math" }}>
            <thead>
              <tr>
                <th>ಕ್ರ .ಸಂ.</th>
                <th>ವಸ್ತುನಿಷ್ಠ</th>
                <th>ನಿರ್ದಿಷ್ಟತೆ</th>
                <th>ವಿಷಯ</th>
                <th>ಪ್ರಶ್ನಾವಾರು ವಿಶ್ಲೇಷಣೆ.</th>
                <th>ಅಂಕಗಳು</th>
                <th>ಕಠಿಣತೆಯ ಮಟ್ಟ</th>
                <th>ಸಮಯ</th>
              </tr>
            </thead>
            <tbody>
              {state?.bluePrint?.TypesofQuestions?.map((ele2) => {
                return (
                  <>
                    {Questions?.filter(
                      async(ele) => ele.Types_Question === ele2?.QAType&& ele?.Marks==(ele2?.NQA*ele2?.Mask)/ele2?.NQA 
                    )?.map((item, i) => {
                      if (i < Number(ele2?.NQA)) {
                        return (
                          <tr>
                            <td> {count2++}</td>
                            <td>{item?.Objectives}</td>
                            <td>{item?.Lesson}</td>
                            <td>{item?.Types_Question}</td>
                            <td>
                             {check(ele2?.QAType)}
                            </td>
                            <td>{(ele2?.NQA*ele2?.Mask)/ele2?.NQA}</td>
                            <td>{item?.Difficulty_level?.slice(0, 1)}</td>
                            <td>{item?.Answer_Time}</td>
                          </tr>
                        );
                      }
                    })}
                  </>
                );
              })}
            </tbody>
          </Table>
                <div className='d-flex mt-2'>
                    <b>Note<span style={{ color: "red" }}>*</span></b>
                    <p>O.T(Objective Type),V.S.A(Very short answer),S.A( short answer ) A(Average) ,E(Easy),M(medium)</p>
                </div>
            </Container>
<div className='d-flex justify-content-center mt-2 '>
    <Button className='md-2' onClick={()=>navigate("/answersheet",{state:{...state,Questions}})}>View Anshwer Sheet</Button><br/>
</div>
        </div>


    )
}

export default QuestionAnalysis