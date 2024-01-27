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
              }}
            >
              <span>
                <MdSubject style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Subject</span>
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
                setAccountHistory(false);
              }}
            >
              <span>
                <FaShop style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Questions</span>
            </li>
          </Link>
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
                setQuestionLevel(true);
                setExamLevel(false);
                setUserList(false);
                setAccountHistory(false);
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
              }}
            >
              <span>
                <PiExamFill style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Exam Level</span>
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
              }}
            >
              <span>
                <PiExamFill style={{ fontSize: "20px" }} />
              </span>
              <span className="ms-2">Weightage of Content</span>
            </li>
          </Link>
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
