import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Tutorials from "./pages/Tutorials";
import Quizzes from "./pages/Quizzes";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import './App.css';
import React from "react";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/signin" || location.pathname === "/signup";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;