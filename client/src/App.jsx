import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Tutorials from "./pages/Tutorials";
import Quizzes from "./pages/Quizzes";
import Chat from "./pages/Chat";
import './App.css';
import React from "react";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/signup";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<h1 style={{ color: 'red', marginTop: '80px' }}>Welcome to LEARNUP Dashboard (Dummy)</h1>} />
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
