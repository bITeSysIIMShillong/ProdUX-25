import { Provider } from "./components/ui/provider";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Timeline from "./pages/Timeline/Timeline";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import PrivateRoute from "./components/custom/PrivateRoute/PrivateRoute";
import RegisterFigma from "./pages/RegisterFigma/RegisterFigma";
import RegisterGA from "./pages/RegisterGA/RegisterGA";
import RegisterWebinar from "./pages/RegisterWebinar/RegisterWebinar";
import Registration from "./pages/Registration/Registration";
import RegistrationVentureClash from "./pages/RegistrationVentureClash/RegistrationVentureClash";
import RegisterQuiz from "./pages/RegisterQuiz/RegisterQuiz";
import "./App.scss";
import Sponsors from "./pages/Sponsors/Sponsors";

function App() {
  console.log(`Height: ${window.innerHeight}`);
  console.log(`Width: ${window.innerWidth}`);

  return (
    <Provider forcedTheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Timeline />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="register" element={<Registration />} />
          <Route
            path="/register/figma"
            element={
              <PrivateRoute>
                <RegisterFigma />
              </PrivateRoute>
            }
          />
          <Route
            path="/register/google-analytics"
            element={
              <PrivateRoute>
                <RegisterGA />
              </PrivateRoute>
            }
          />
          <Route
            path="/register/quiz"
            element={
              <PrivateRoute>
                <RegisterQuiz />
              </PrivateRoute>
            }
          />
          <Route path="register/webinar" element={<RegisterWebinar />} />
          <Route
            path="register/venture-clash"
            element={<RegistrationVentureClash />}
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
