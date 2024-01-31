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
import QandA_5to6_Sentences from "./Components/Admin/QandA_5to6_Sentences"
import OneSentenceAnswer from "./Components/Admin/OneSentenceAnswer";
import TwoSentenceAnswer from "./Components/Admin/TwoSentenceAnswer";
import ThreeSentenceAnswer from "./Components/Admin/ThreeSentenceAnswer";
import FourSentenceAnswer from "./Components/Admin/FourSentenceAnswer";
import FiveSentenceAnswer from "./Components/Admin/FiveSentenceAnswer"
import OneSentenceaddAnswer from "./Components/Admin/OneSentenceaddAnswer";
import OneSentenceeditAnswer from "./Components/Admin/OneSentenceeditAnswer";
import OneSentenceAnswerView from "./Components/Admin/OneSentenceAnswerView";
import TwoSentenceaddAnswer from "./Components/Admin/TwoSentenceaddAnswer";
import TwoSentenceeditAnswer from "./Components/Admin/TwoSentenceeditAnswer";
import TwoSentenceAnswerView from "./Components/Admin/TwoSentenceAnswerView";
import ThreeSentenceaddAnswer from "./Components/Admin/ThreeSentenceaddAnswer";
import ThreeSentenceeditAnswer from "./Components/Admin/ThreeSentenceeditAnswer";
import ThreeSentenceAnswerview from "./Components/Admin/ThreeSentenceAnswerview";
import FourSentenceAnswerview from "./Components/Admin/FourSentenceAnswerview";
import FourSentenceaddAnswer from "./Components/Admin/FourSentenceaddAnswer";
import FourSentenceeditAnswer from "./Components/Admin/FourSentenceeditAnswer"
import FiveSentenceeditAnswer from "./Components/Admin/FourSentenceeditAnswer";
import FiveSentenceAnswerview from "./Components/Admin/FiveSentenceAnswerview";
import FiveSentenceaddAnswer from "./Components/Admin/FiveSentenceaddAnswer"
import ReCorrectionAnswer from "./Components/Admin/ReCorrectionAnswer";
import RecorrectionaddAnswer from "./Components/Admin/RecorrectionaddAnswer";
import ReCorrecteditAnswer from "./Components/Admin/ReCorrecteditAnswer";
import ReCorrectAnswerview from "./Components/Admin/ReCorrectAnswerview";
import FiveSentenceEditAnswers from "./Components/Admin/FiveSentenceEditAnswers";
import MatchtheFollowing from "./Components/Admin/MatchtheFollowing";
import AddMatches from "./Components/Admin/AddMatches";
import EditMatch from "./Components/Admin/EditMatch";
import ViewMatch from "./Components/Admin/ViewMatch";
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
            path="/onesentenceaddanswer"
            element={
              <Main
                children={
                  <>
                    <OneSentenceaddAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/onesentenceeditanswer"
            element={
              <Main
                children={
                  <>
                    <OneSentenceeditAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/onesentenceanswerview"
            element={
              <Main
                children={
                  <>
                    <OneSentenceAnswerView />
                  </>
                }
              />
            }
          />

          <Route
            path="/twosenteceanswer"
            element={
              <Main
                children={
                  <>
                    <TwoSentenceAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/twosentenceaddanswer"
            element={
              <Main
                children={
                  <>
                    <TwoSentenceaddAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/twosentenceeditanswer"
            element={
              <Main
                children={
                  <>
                    <TwoSentenceeditAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/twosentenceanswerview"
            element={
              <Main
                children={
                  <>
                    <TwoSentenceAnswerView />
                  </>
                }
              />
            }
          />
          <Route
            path="/threesentenceanswer"
            element={
              <Main
                children={
                  <>
                    <ThreeSentenceAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/threesentenceaddanswer"
            element={
              <Main
                children={
                  <>
                    <ThreeSentenceaddAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/threesentenceeditanswer"
            element={
              <Main
                children={
                  <>
                    <ThreeSentenceeditAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/threesentenceanswerview"
            element={
              <Main
                children={
                  <>
                    <ThreeSentenceAnswerview />
                  </>
                }
              />
            }
          />
          <Route
            path="/foursentenceanswer"
            element={
              <Main
                children={
                  <>
                    <FourSentenceAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/foursentenceaddanswer"
            element={
              <Main
                children={
                  <>
                    <FourSentenceaddAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/foursentenceeditanswer"
            element={
              <Main
                children={
                  <>
                    <FourSentenceeditAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/foursentenceanswerview"
            element={
              <Main
                children={
                  <>
                    <FourSentenceAnswerview />
                  </>
                }
              />
            }
          />
          <Route
            path="/fivesentenceanswer"
            element={
              <Main
                children={
                  <>
                    <FiveSentenceAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/recorrectanswerview"
            element={
              <Main
                children={
                  <>
                    <ReCorrectAnswerview />
                  </>
                }
              />
            }
          />
          <Route
            path="/fivesentenceeditanswers"
            element={
              <Main
                children={
                  <>
                    {/* <FiveSentenceeditAnswer /> */}
                    <FiveSentenceEditAnswers />
                  </>
                }
              />
            }
          />

          <Route
            path="/fivesentenceanswerview"
            element={
              <Main
                children={
                  <>
                    <FiveSentenceAnswerview />
                  </>
                }
              />
            }
          />
          <Route
            path="/fivesentenceaddanswer"
            element={
              <Main
                children={
                  <>
                    <FiveSentenceaddAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/recorrectionanswer"
            element={
              <Main
                children={
                  <>
                    <ReCorrectionAnswer />
                  </>
                }
              />
            }
          />
          <Route
            path="/recorrectaddanswer"
            element={
              <Main
                children={
                  <>
                    <RecorrectionaddAnswer />
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
            path="/recorrecteditanswer"
            element={
              <Main
                children={
                  <>
                    <ReCorrecteditAnswer />
                  </>
                }
              />
            }
          />

          <Route
            path="/matchthefollowing"
            element={
              <Main
                children={
                  <>
                    <MatchtheFollowing />
                  </>
                }
              />
            }
          />
          <Route
            path="/addmatches"
            element={
              <Main
                children={
                  <>
                    <AddMatches />
                  </>
                }
              />
            }
          />
            <Route
            path="/editmatch"
            element={
              <Main
                children={
                  <>
                    <EditMatch />
                  </>
                }
              />
            }
          />
            <Route
            path="/viewmatch"
            element={
              <Main
                children={
                  <>
                    <ViewMatch />
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
            path="/onesentenceanswer"
            element={
              <Main
                children={
                  <>
                    <OneSentenceAnswer />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
