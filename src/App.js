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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
            path="/"
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
