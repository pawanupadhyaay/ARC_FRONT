import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import Email from "./pages/EmailConformation";
import SignUpSelection from "./pages/SignUpSelection";
import GameSelection from "./pages/GameSelection";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/email-conformation" element={<Email />} />
        <Route path="/signup-selection" element={<SignUpSelection/>} />
        <Route path="/game-selection" element={<GameSelection/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
