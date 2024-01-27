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
            path="/admineditblueprint/:blueprint_ID"
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
            path="/adminquestiondetailsview"
            element={<Main children={<AdminQuestionDetailsview />} />}
          />
          <Route
            path="/Admin_accounthistory"
            element={<Main children={<AccountHistory />} />}
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
