import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarr from "./Components/Navbar/Navbar";
import LoginPage3 from "./Components/LoginPage3/LoginPage3";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/LoginPage/Login";
import SignUp from "./Components/LoginPage/Signup";
import ExamBoard from "./Components/ExamBoard/ExamBoard";
import AdminQuestions from "./Components/Admin/AdminQuestions";
import AdminBlueprint from "./Components/Admin/AdminBluprint";
import AdminBlueprintdetails from "./Components/Admin/AdminBluprintdetails";
import AdminQuestionDetails from "./Components/Admin/AdminQuestionDetails";
import Main from "./Components/Admin/Main";
import AccountHistory from "./Components/Admin/AccountHistory";
import AdminQuestionLevel from "./Components/Admin/AdminQuestionLevel";
import AdminWeightage from "./Components/Admin/AdminWeightage";
import AdminSubject from "./Components/Admin/AdminSubject";
import AdminMedium from "./Components/Admin/AdminMedium";
import UserList from "./Components/Admin/UserList";
import Dashboard from "./Components/Admin/Dashboard";
import AdminBoard from "./Components/Admin/AdminBoard";
import AdminClass from "./Components/Admin/AdminClass";
import AdminExam from "./Components/Admin/AdminExam";
import ExamLevel from "./Components/Admin/ExamLevel";
import AdminBlueprintdetailsview from "./Components/Admin/AdminBluprintdetailsview";
import AdminQuestionDetailsview from "./Components/Admin/AdminQuestiondetailsview";
import AdminSignin from "./Components/Admin/Adminlogin";
import BluePrint from "./Components/BluePrint/BluePrint";
import QuestionPaper from "./Components/QuestionPaper/QuestionPaper";
import BluePrint2 from "./Components/BluePrint/BluePrint2";
import Home from "./Components/Home/Home";
import AdminTypeOfQuestions from "./Components/Admin/AdminTypeOfQuestions";
import AdminEditBluePrint from "./Components/Admin/AdminEditBluePrint";
import AdminEditQuestionDetails from "./Components/Admin/AdminEditQuestionDetails";
import AnswerSheet from "./Components/AnswerSheet/AnswerSheet";
import SyllabusCopy from "./Components/SyllabusCopy/SyllabusCopy";
import Weightagecontent from "./Components/Admin/Weightagecontent";
import AdminChapter from "./Components/Admin/AdminChapter";
import AdminQuestionPaper from "./Components/Admin/Adminquestionpaper";
import AdminSyllabusCopy from "./Components/Admin/AdminSyllabusCopy";

// ====Five and Six=====
import QandA_5to6_Sentences from "./Components/Admin/FiveAndSixSentences/QandA_5to6_Sentences";
import QandA_5to6_addQandA from "./Components/Admin/FiveAndSixSentences/QandA_5to6_addQandA";
import QandA_5to6_viewQandA from "./Components/Admin/FiveAndSixSentences/QandA_5to6_viewQandA";
import QandA_5to6_editQandA from "./Components/Admin/FiveAndSixSentences/QandA_5to6_editQandA";
// ========Six=========
import QandA_6Sentences from "./Components/Admin/SixSentences/QandA_6Sentences";
import QandA_add6Sentences from "./Components/Admin/SixSentences/QandA_add6Sentences";
import QandA_edit6Sentences from "./Components/Admin/SixSentences/QandA_edit6Sentences";
import QandA_view6Sentences from "./Components/Admin/SixSentences/QandA_view6Sentences";
// =======Seven=========
import QandA_7Sentences from "./Components/Admin/SevenSentences/QandA_7Sentences";
import QandA_view7Sentences from "./Components/Admin/SevenSentences/QandA_view7Sentences";
import QandA_edit7Sentences from "./Components/Admin/SevenSentences/QandA_edit7Sentences";
import QandA_add7Sentences from "./Components/Admin/SevenSentences/QandA_add7Sentences";
// =========Eight=========
import QandA_8Sentences from "./Components/Admin/EightSentences/QandA_8Sentences";
import QandA_add8Sentences from "./Components/Admin/EightSentences/QandA_add8Sentences";
import QandA_edit8Sentences from "./Components/Admin/EightSentences/QandA_edit8Sentences";
import QandA_view8Sentences from "./Components/Admin/EightSentences/QandA_view8Sentences";
// =======Ten==========
import QandA_10Sentences from "./Components/Admin/TenSentences/QandA_10Sentences";
import QandA_add10Sentences from "./Components/Admin/TenSentences/QandA_add10Sentences";
import QandA_edit10Sentences from "./Components/Admin/TenSentences/QandA_edit10Sentences";
import QandA_view10Sentences from "./Components/Admin/TenSentences/QandA_view10Sentences";
// ==========Expand and explain==========
import ExpandExplain_Details from "./Components/Admin/ExpandAndExplain/ExpandExplain_Details";
import ExpandExplain_add from "./Components/Admin/ExpandAndExplain/ExpandExplain_add";
import ExpandExplain_edit from "./Components/Admin/ExpandAndExplain/ExpandExplain_edit";
import ExpandExplain_view from "./Components/Admin/ExpandAndExplain/ExpandExplain_view";
// ==========Odd and Out=====
import OddAndOut_Details from "./Components/Admin/OaddAndout/OddAndOut_Details";
import OddandOut_add from "./Components/Admin/OaddAndout/OddandOut_add";
import OddAndOut_vieww from "./Components/Admin/OaddAndout/OddAndOut_vieww";
import OddAndOut_edit from "./Components/Admin/OaddAndout/OddAndOut_edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {/* <Navbarr /> */}
                <Home />
              </>
            }
          />
          <Route
            path="/loginpage3"
            element={
              <>
                <Navbarr />
                <LoginPage3 />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbarr />
                <Profile />
              </>
            }
          />
          <Route
            path="/login"
            exact
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            exact
            element={
              <>
                <SignUp />
              </>
            }
          />
          <Route
            path="/examboard"
            exact
            element={
              <>
                <Navbarr />
                <ExamBoard />
              </>
            }
          />
          <Route
            path="/blueprint"
            exact
            element={
              <>
                <Navbarr />
                <BluePrint />
              </>
            }
          />
          <Route
            path="/blueprint2"
            exact
            element={
              <>
                <Navbarr />
                <BluePrint2 />
              </>
            }
          />

          <Route
            path="/questionpaper"
            exact
            element={
              <>
                <Navbarr />
                <QuestionPaper />
              </>
            }
          />
          <Route
            path="/answersheet"
            exact
            element={
              <>
                <Navbarr />
                <AnswerSheet />
              </>
            }
          />
          <Route
            path="/syllabuscopy"
            exact
            element={
              <>
                <Navbarr />
                <SyllabusCopy />
              </>
            }
          />
          {/* Admin pannel */}
          <Route
            path="/adminquestion"
            element={<Main children={<AdminQuestions />} />}
          />
          <Route
            path="/adminblueprint"
            element={<Main children={<AdminBlueprint />} />}
          />
          <Route
            path="/admineditblueprint"
            element={<Main children={<AdminEditBluePrint />} />}
          />
          <Route
            path="/adminblueprintdetails"
            element={<Main children={<AdminBlueprintdetails />} />}
          />
          <Route
            path="/adminblueprintdetailsview/:blueprint_ID"
            element={<Main children={<AdminBlueprintdetailsview />} />}
          />
          <Route
            path="/adminquestiondetails"
            element={<Main children={<AdminQuestionDetails />} />}
          />
          <Route
            path="/weightageofthecontent"
            element={<Main children={<Weightagecontent />} />}
          />
          <Route
            path="/admineditquestiondetails"
            element={<Main children={<AdminEditQuestionDetails />} />}
          />
          <Route
            path="/adminquestiondetailsview/:question_Id"
            element={<Main children={<AdminQuestionDetailsview />} />}
          />
          <Route
            path="/Admin_accounthistory"
            element={<Main children={<AccountHistory />} />}
          />
          <Route
            path="/Adminquestion_paper"
            element={<Main children={<AdminQuestionPaper />} />}
          />
          {/* Admin Panel Starts here */}
          <Route
            path="/admin"
            element={
              <>
                <AdminSignin />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Main
                children={
                  <>
                    <Dashboard />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminboard"
            element={
              <Main
                children={
                  <>
                    <AdminBoard />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminclass"
            element={
              <Main
                children={
                  <>
                    <AdminClass />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminexam"
            element={
              <Main
                children={
                  <>
                    <AdminExam />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminexamlevel"
            element={
              <Main
                children={
                  <>
                    <ExamLevel />
                  </>
                }
              />
            }
          />
          <Route
            path="/admintypesofquestion"
            element={
              <Main
                children={
                  <>
                    <AdminTypeOfQuestions />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminuserlist"
            element={
              <Main
                children={
                  <>
                    <UserList />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminacchistory"
            element={
              <Main
                children={
                  <>
                    <AccountHistory />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminmedium"
            element={
              <Main
                children={
                  <>
                    <AdminMedium />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminsubject"
            element={
              <Main
                children={
                  <>
                    <AdminSubject />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminchapter"
            element={
              <Main
                children={
                  <>
                    <AdminChapter />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminsyllabuscopy"
            element={
              <Main
                children={
                  <>
                    <AdminSyllabusCopy />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminweightage"
            element={
              <Main
                children={
                  <>
                    <AdminWeightage />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestions"
            element={
              <Main
                children={
                  <>
                    <AdminQuestions />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestionlevel"
            element={
              <Main
                children={
                  <>
                    <AdminQuestionLevel />
                  </>
                }
              />
            }
          />
          {/* ========Five and six======== */}
          <Route
            path="/adminquestion5to6sentences"
            element={
              <Main
                children={
                  <>
                    <QandA_5to6_Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion5to6sentencesadd"
            element={
              <Main
                children={
                  <>
                    <QandA_5to6_addQandA />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion5to6sentencesview"
            element={
              <Main
                children={
                  <>
                    <QandA_5to6_viewQandA />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion5to6sentencesedit"
            element={
              <Main
                children={
                  <>
                    <QandA_5to6_editQandA />
                  </>
                }
              />
            }
          />
          {/* ========Five and six======== */}
          {/* ========six======== */}
          <Route
            path="/adminquestion6sentences"
            element={
              <Main
                children={
                  <>
                    <QandA_6Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion6sentencesadd"
            element={
              <Main
                children={
                  <>
                    <QandA_add6Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion6sentencesedit"
            element={
              <Main
                children={
                  <>
                    <QandA_edit6Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion6sentencesview"
            element={
              <Main
                children={
                  <>
                    <QandA_view6Sentences />
                  </>
                }
              />
            }
          />
          {/* ========six======== */}
          {/* ========Seven======== */}
          <Route
            path="/adminquestion7sentences"
            element={
              <Main
                children={
                  <>
                    <QandA_7Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion7sentencesadd"
            element={
              <Main
                children={
                  <>
                    <QandA_add7Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion7sentencesedit"
            element={
              <Main
                children={
                  <>
                    <QandA_edit7Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion7sentencesview"
            element={
              <Main
                children={
                  <>
                    <QandA_view7Sentences />
                  </>
                }
              />
            }
          />
          {/* ========Seven======== */}
          {/* ========Eight======== */}
          <Route
            path="/adminquestion8sentences"
            element={
              <Main
                children={
                  <>
                    <QandA_8Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion8sentencesadd"
            element={
              <Main
                children={
                  <>
                    <QandA_add8Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion8sentencesedit"
            element={
              <Main
                children={
                  <>
                    <QandA_edit8Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion8sentencesview"
            element={
              <Main
                children={
                  <>
                    <QandA_view8Sentences />
                  </>
                }
              />
            }
          />
          {/* ========Eight======== */}
          {/* ========Ten======== */}

          <Route
            path="/adminquestion10sentences"
            element={
              <Main
                children={
                  <>
                    <QandA_10Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion10sentencesadd"
            element={
              <Main
                children={
                  <>
                    <QandA_add10Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion10sentencesedit"
            element={
              <Main
                children={
                  <>
                    <QandA_edit10Sentences />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminquestion10sentencesview"
            element={
              <Main
                children={
                  <>
                    <QandA_view10Sentences />
                  </>
                }
              />
            }
          />
          {/* ========Ten======== */}
          {/* ========Expand and Explain======== */}
          <Route
            path="/adminexpandexplain"
            element={
              <Main
                children={
                  <>
                    <ExpandExplain_Details />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminexpandexplainadd"
            element={
              <Main
                children={
                  <>
                    <ExpandExplain_add />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminexpandexplainedit"
            element={
              <Main
                children={
                  <>
                    <ExpandExplain_edit />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminexpandexplainview"
            element={
              <Main
                children={
                  <>
                    <ExpandExplain_view />
                  </>
                }
              />
            }
          />
          {/* ========Expand and Explain======== */}
          {/* ========Odd and Out======== */}
          <Route
            path="/adminoddandout"
            element={
              <Main
                children={
                  <>
                    <OddAndOut_Details />
                  </>
                }
              />
            }
          />
          <Route
            path="/adminoddandoutadd"
            element={
              <Main
                children={
                  <>
                    <OddandOut_add />
                  </>
                }
              />
            }
          />
           <Route
            path="/adminoddandoutview"
            element={
              <Main
                children={
                  <>
                    <OddAndOut_vieww />
                  </>
                }
              />
            }
          />
           <Route
            path="/adminoddandoutedit"
            element={
              <Main
                children={
                  <>
                    <OddAndOut_edit/>
                  </>
                }
              />
            }
          />
          {/* ========Odd and Out======== */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
