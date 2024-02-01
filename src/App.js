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
import AddDrawFigure from "./Components/Admin/DrawFigure/AddDrawFigure";
import AddGraphQuestion from "./Components/Admin/GraphQuestion/AddGraphQuestion";
import AddPoem from "./Components/Admin/CompleteThePoem/AddPoem";
import AddUnderstandAnsQN from "./Components/Admin/UnderstandAnsQN/AddUnderstandAnsQN";
import AddPoetTimePlaceAnsQn from "./Components/Admin/PoetTimePlaceAnsQN/AddPoetTimePlaceAnsQn";
import AddGrammerQuestion from "./Components/Admin/GrammerQuestion/AddGrammerQuestion";
import DrawFigureList from "./Components/Admin/DrawFigure/DrawFigureList";
import GraphQuestionList from "./Components/Admin/GraphQuestion/GraphQuestionList";
import PoemList from "./Components/Admin/CompleteThePoem/PoemList";
import UnderstandAnsQnList from "./Components/Admin/UnderstandAnsQN/UnderstandAnsQnList";
import PoetTimePlaceAnsQnList from "./Components/Admin/PoetTimePlaceAnsQN/PoetTimePlaceAnsQnList";
import GrammerQuestionList from "./Components/Admin/GrammerQuestion/GrammerQuestionList";
import EditDrawFigure from "./Components/Admin/DrawFigure/EditDrawFigure";
import ViewDrawFigure from "./Components/Admin/DrawFigure/ViewDrawFigure";
import EditGraphQuestion from "./Components/Admin/GraphQuestion/EditGraphQuestion";
import ViewGraphQuestion from "./Components/Admin/GraphQuestion/ViewGraphQuestion";
import EditPoem from "./Components/Admin/CompleteThePoem/EditPoem";
import ViewPoem from "./Components/Admin/CompleteThePoem/ViewPoem";
import EditUnderstandAnsQN from "./Components/Admin/UnderstandAnsQN/EditUnderstandAnsQN";
import ViewUnderstandAnsQN from "./Components/Admin/UnderstandAnsQN/ViewUnderstandAnsQN";
import EditPoetTimePlaceAnsQn from "./Components/Admin/PoetTimePlaceAnsQN/EditPoetTimePlaceAnsQn";
import ViewPoetTimePlaceAnsQn from "./Components/Admin/PoetTimePlaceAnsQN/ViewPoetTimePlaceAnsQn";
import EditGrammerQuestion from "./Components/Admin/GrammerQuestion/EditGrammerQuestion";
import ViewGrammerQuestion from "./Components/Admin/GrammerQuestion/ViewGrammerQuestion";

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

          {/* DrawFigure */}
          <Route
            path="/adddrawfigure"
            element={
              <Main
                children={
                  <>
                    <AddDrawFigure />
                  </>
                }
              />
            }
          />

          <Route
            path="/drawfigurelist"
            element={
              <Main
                children={
                  <>
                    <DrawFigureList />
                  </>
                }
              />
            }
          />

          <Route
            path="/editdrawfigure"
            element={
              <Main
                children={
                  <>
                    <EditDrawFigure />
                  </>
                }
              />
            }
          />

          <Route
            path="/viewdrawfigure"
            element={
              <Main
                children={
                  <>
                    <ViewDrawFigure />
                  </>
                }
              />
            }
          />


          {/* GraphQuestion */}

          <Route
            path="/addgraphquestion"
            element={
              <Main
                children={
                  <>
                    <AddGraphQuestion />
                  </>
                }
              />
            }
          />
          <Route
            path="/graphquestionlist"
            element={
              <Main
                children={
                  <>
                    <GraphQuestionList />
                  </>
                }
              />
            }
          />
          <Route
            path="/editgraphquestion"
            element={
              <Main
                children={
                  <>
                    <EditGraphQuestion />
                  </>
                }
              />
            }
          />
          <Route
            path="/viewgraphquestion"
            element={
              <Main
                children={
                  <>
                    <ViewGraphQuestion />
                  </>
                }
              />
            }
          />



          {/* Complete The Poem */}


          <Route
            path="/addpoem"
            element={
              <Main
                children={
                  <>
                    <AddPoem />
                  </>
                }
              />
            }
          />

          <Route
            path="/poemlist"
            element={
              <Main
                children={
                  <>
                    <PoemList />
                  </>
                }
              />
            }
          />
          <Route
            path="/editpoem"
            element={
              <Main
                children={
                  <>
                    <EditPoem />
                  </>
                }
              />
            }
          />
          <Route
            path="/viewpoem"
            element={
              <Main
                children={
                  <>
                    <ViewPoem />
                  </>
                }
              />
            }
          />



          {/* Situation Understand Answers Questions */}

          <Route
            path="/addunderstandansqn"
            element={
              <Main
                children={
                  <>
                    <AddUnderstandAnsQN />
                  </>
                }
              />
            }
          />

          <Route
            path="/understandansqnlist"
            element={
              <Main
                children={
                  <>
                    <UnderstandAnsQnList />
                  </>
                }
              />
            }
          />

          <Route
            path="/editunderstandansqn"
            element={
              <Main
                children={
                  <>
                    <EditUnderstandAnsQN />
                  </>
                }
              />
            }
          />

          <Route
            path="/viewunderstandansqn"
            element={
              <Main
                children={
                  <>
                    <ViewUnderstandAnsQN />
                  </>
                }
              />
            }
          />


          {/* Poet,Time , Place , Write the answer the question */}

          <Route
            path="/addpoettimeplaceansqn"
            element={
              <Main
                children={
                  <>
                    <AddPoetTimePlaceAnsQn />
                  </>
                }
              />
            }
          />

          <Route
            path="/poettimeplaceansqnlist"
            element={
              <Main
                children={
                  <>
                    <PoetTimePlaceAnsQnList />
                  </>
                }
              />
            }
          />
          <Route
            path="/editpoettimeplaceansqn"
            element={
              <Main
                children={
                  <>
                    <EditPoetTimePlaceAnsQn />
                  </>
                }
              />
            }
          />

          <Route
            path="/viewpoettimeplaceansqn"
            element={
              <Main
                children={
                  <>
                    <ViewPoetTimePlaceAnsQn />
                  </>
                }
              />
            }
          />

          {/* Grammer Question */}

          <Route
            path="/addgrammerquestion"
            element={
              <Main
                children={
                  <>
                    <AddGrammerQuestion />
                  </>
                }
              />
            }
          />

          <Route
            path="/grammerquestionlist"
            element={
              <Main
                children={
                  <>
                    <GrammerQuestionList />
                  </>
                }
              />
            }
          />
          <Route
            path="/editgrammerquestion"
            element={
              <Main
                children={
                  <>
                    <EditGrammerQuestion />
                  </>
                }
              />
            }
          />
          <Route
            path="/viewgrammerquestion"
            element={
              <Main
                children={
                  <>
                    <ViewGrammerQuestion />
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
