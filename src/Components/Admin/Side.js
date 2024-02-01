import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuActivity,
  LuBookMarked,
  LuFileQuestion,
  LuIndianRupee,
  LuListOrdered,
  LuLogOut,
  LuPackageX,
  LuUserCog,
} from "react-icons/lu";
import { FaQuestion, FaWeightHanging } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaShop, FaRegIdCard, FaCircleUser } from "react-icons/fa6";
import { GiFlatPlatform } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { AiOutlineSnippets } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { IoPeopleOutline, IoNewspaperOutline } from "react-icons/io5";
import { PiExamFill, PiHandshakeLight } from "react-icons/pi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineTipsAndUpdates,
  MdOutlineKeyboardArrowUp,
  MdOutlineSupportAgent,
  MdOutlineAddComment,
  MdEventAvailable,
  MdSubject,
} from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { LuAlignHorizontalJustifyStart } from "react-icons/lu";
import { IoEarth } from "react-icons/io5";
import "../Admin/Admin.css";
import Navbar from 'react-bootstrap/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdLooksOne } from "react-icons/md";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import { PiNumberSquareFourFill } from "react-icons/pi";
import { PiNumberSquareFiveFill } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { FaArrowsLeftRightToLine } from "react-icons/fa6";

const Side = () => {
  const [Board, setBoard] = useState(false);
  const [Class, setClass] = useState(false);
  const [Medium, setMedium] = useState(false);
  const [Examination, setExamination] = useState(false);
  const [Subject, setSubject] = useState(false);
  const [Weightage, setWeightage] = useState(false);
  const [Questions, setQuestions] = useState(false);
  const [QuestionLevel, setQuestionLevel] = useState(false);
  const [ExamLevel, setExamLevel] = useState(false);
  const [UserList, setUserList] = useState(false);
  const [AccountHistory, setAccountHistory] = useState(false);
  const [SyllabusCopy, setsyllabusCopy] = useState(false);
  const [onesentence, setOnesentence] = useState(false);
  const [twosentence, setTwosentence] = useState(false);
  const [threesentence, setThreesentence] = useState(false);
  const [foursentence, setFoursentence] = useState(false);
  const [fivesentence, setFivesentence] = useState(false);
  const [recorrect, setRecorrect] = useState(false);
  const [match, setMatch] = useState(false);


  // Responsive sidebar
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary p-0" >
          <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse} style={{margin:"10px"}}>
            <span ><GiHamburgerMenu style={{color:'white'}}/></span>
          </button>
          <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
      <div className="si09">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="lo-ad">
            <img
              src="../Images/logo.png"
              alt="adminlogo"
              className="admin-logo-img"
            />
          </div>
          <div className="sidebar-close-icon" onClick={handleNavCollapse}>
          <AiOutlineClose />
          </div>
        </div>
        <ul
        >
          <Link to="/dashboard" onClick={handleNavCollapse}>
            <li className="a-ele ">
              <span>
                <MdOutlineSupportAgent style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Dashboard</span>
            </li>
          </Link>

          <Link to="/adminboard" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(true);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <LuAlignHorizontalJustifyStart style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Board </span>
            </li>
          </Link>
          <Link to="/adminclass" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(true);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <LuBookMarked style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Class</span>
            </li>
          </Link>

          <Link to="/adminmedium" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(true);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <LuFileQuestion style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Medium</span>
            </li>
          </Link>
          <Link to="/adminexam" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(true);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <IoPeopleOutline style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Name Of Examination</span>
            </li>
          </Link>
          <Link to="/adminsubject" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(true);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <MdSubject style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Subject</span>
            </li>
          </Link>
          <Link to="/weightageofthecontent" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(true);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <PiExamFill style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Subject Part</span>
            </li>
          </Link>
          <Link to="/adminchapter" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(true);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setRecorrect(false);
                setFivesentence(false);
                setMatch(false);
              }}
            >
              <span>
                <FaWeightHanging style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">
                Chapters
              </span>
            </li>
          </Link>
          <Link to="/adminsyllabuscopy" onClick={handleNavCollapse}>
            <li
              className="a-ele"
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(true);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <FaWeightHanging style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Syllabus</span>
            </li>
          </Link>
          <Link to="/adminblueprintdetails" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(true);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <FaWeightHanging style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Blue Print</span>
            </li>
          </Link>

          <Link to="/adminquestions" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(true);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setsyllabusCopy(false);
                setAccountHistory(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <FaShop style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Questions</span>
            </li>
          </Link>
<<<<<<< HEAD
          <Link to="/adminquestion5to6sentences" onClick={handleNavCollapse}>
=======

          <Link to="/onesentenceanswer" onClick={handleNavCollapse}>
>>>>>>> 543169d74f4a46cab05e68e527ed0cf10c5c1701
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
<<<<<<< HEAD
                setQuestions(true);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setsyllabusCopy(false);
                setAccountHistory(false);
              }}
            >
              <span>
                <FaShop style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Five & Six Sentences</span>
            </li>
          </Link>
          <Link to="/adminquestion6sentences" onClick={handleNavCollapse}>
=======
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(true);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <MdLooksOne  style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">1 Sentence Answer </span>
            </li>
          </Link>

          <Link to="/twosenteceanswer" onClick={handleNavCollapse}>
>>>>>>> 543169d74f4a46cab05e68e527ed0cf10c5c1701
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
<<<<<<< HEAD
                setQuestions(true);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setsyllabusCopy(false);
                setAccountHistory(false);
              }}
            >
              <span>
                <FaShop style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Six Sentences</span>
            </li>
          </Link>
          <Link to="/adminquestion7sentences" onClick={handleNavCollapse}>
=======
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(true);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <PiNumberSquareTwoFill  style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">2 Sentence Answer </span>
            </li>
          </Link>

          <Link to="/threesentenceanswer" onClick={handleNavCollapse}>
>>>>>>> 543169d74f4a46cab05e68e527ed0cf10c5c1701
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
<<<<<<< HEAD
                setQuestions(true);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setsyllabusCopy(false);
                setAccountHistory(false);
              }}
            >
              <span>
                <FaShop style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Seven Sentences</span>
            </li>
          </Link>
          <Link to="/adminquestion8sentences" onClick={handleNavCollapse}>
=======
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(true);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <PiNumberSquareThreeFill  style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">3 Sentence Answer </span>
            </li>
          </Link>

          <Link to="/foursentenceanswer" onClick={handleNavCollapse}>
>>>>>>> 543169d74f4a46cab05e68e527ed0cf10c5c1701
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
<<<<<<< HEAD
                setQuestions(true);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setsyllabusCopy(false);
                setAccountHistory(false);
              }}
            >
              <span>
                <FaShop style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Eight sentences</span>
            </li>
          </Link>
          <Link to="/adminquestion10sentences" onClick={handleNavCollapse}>
=======
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(true);
                setRecorrect(false);
                setFivesentence(false);
                setMatch(false);
              }}
            >
              <span>
                <PiNumberSquareFourFill  style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">4 Sentence Answer </span>
            </li>
          </Link>

          <Link to="/fivesentenceanswer" onClick={handleNavCollapse}>
>>>>>>> 543169d74f4a46cab05e68e527ed0cf10c5c1701
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
<<<<<<< HEAD
                setQuestions(true);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setsyllabusCopy(false);
                setAccountHistory(false);
              }}
            >
              <span>
                <FaShop style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Ten Sentences</span>
            </li>
          </Link>
          <Link to="/adminexpandexplain" onClick={handleNavCollapse}>
=======
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(true);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <PiNumberSquareFiveFill  style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">5 Sentence Answer </span>
            </li>
          </Link>

          <Link to="/recorrectionanswer" onClick={handleNavCollapse}>
>>>>>>> 543169d74f4a46cab05e68e527ed0cf10c5c1701
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
<<<<<<< HEAD
                setQuestions(true);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setsyllabusCopy(false);
                setAccountHistory(false);
              }}
            >
              <span>
                <FaShop style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Expand & Explain </span>
            </li>
          </Link>
          <Link to="/adminoddandout" onClick={handleNavCollapse}>
=======
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setRecorrect(false);
                setFivesentence(true);
                setMatch(false);
              }}
            >
              <span>
                <TiTick   style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Recorret Questions </span>
            </li>
          </Link>

          <Link to="/matchthefollowing" onClick={handleNavCollapse}>
>>>>>>> 543169d74f4a46cab05e68e527ed0cf10c5c1701
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
<<<<<<< HEAD
                setQuestions(true);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setsyllabusCopy(false);
                setAccountHistory(false);
              }}
            >
              <span>
                <FaShop style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Odd And Out </span>
            </li>
          </Link>
=======
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setRecorrect(false);
                setFivesentence(false);
                setMatch(true);
              }}
            >
              <span>
                <FaArrowsLeftRightToLine    style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Match the Following </span>
            </li>
          </Link>


>>>>>>> 543169d74f4a46cab05e68e527ed0cf10c5c1701
          <Link to="/admintypesofquestion" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(true);
                setMatch(false);
              }}
            >
              <span>
                <IoNewspaperOutline style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Type Of Questions </span>
            </li>
          </Link>
          <Link to="/adminexamlevel" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(true);
                setUserList(false);
                setAccountHistory(false);
                setRecorrect(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setMatch(false);
              }}
            >
              <span>
                <PiExamFill style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Exam Level</span>
            </li>
          </Link>
          {/* <Link to="/weightageofthecontent" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(true);
                setUserList(false);
                setAccountHistory(false);
                setsyllabusCopy(false);
              }}
            >
              <span>
                <PiExamFill style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Subject Part</span>
            </li>
          </Link> */}
          <Link to="/adminuserlist" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(true);
                setAccountHistory(false);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setRecorrect(false);
                setFoursentence(false);
                setMatch(false);
                setFivesentence(false);
              }}
            >
              <span>
                <FaCircleUser style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">UserList</span>
            </li>
          </Link>
          <Link to="/adminacchistory" onClick={handleNavCollapse}>
            <li
              className="a-ele "
              onClick={() => {
                setBoard(false);
                setClass(false);
                setMedium(false);
                setExamination(false);
                setSubject(false);
                setWeightage(false);
                setQuestions(false);
                setQuestionLevel(false);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(true);
                setsyllabusCopy(false);
                setOnesentence(false);
                setTwosentence(false);
                setThreesentence(false);
                setFoursentence(false);
                setFivesentence(false);
                setRecorrect(false);
                setMatch(false);
              }}
            >
              <span>
                <IoNewspaperOutline style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Account History </span>
            </li>
          </Link>
        </ul>
      </div>
      </div>
      </Navbar>
    </div>
  );
};

export default Side;
