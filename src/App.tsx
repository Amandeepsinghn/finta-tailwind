import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import { Mainpage } from "./pages/mainPage";
import Signup from "./pages/signUp";
import LogIn from "./pages/logIn";
import Dashboard from "./pages/dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element ={<Signup/>}/>
                <Route path="/" element={<Mainpage/>}/>
                <Route path="/LogIn" element={<LogIn/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
