import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Mainpage } from "./pages/mainPage";
import Signup from "./pages/signUp";
import LogIn from "./pages/logIn";
import Dashboard from "./pages/dashboard";
import Ats from "./pages/Ats";
import Sendemail from "./pages/Sendemail";
import Blog from "./pages/Blog";
import { AppTest } from "./pages/singleTest";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ATS" element={<Ats />} />
        <Route path="/sendEmail" element={<Sendemail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ATS/:atsId" element={<AppTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
