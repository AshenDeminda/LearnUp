import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Tutorials from "./pages/Tutorials";
import Quizzes from "./pages/Quizzes";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import UserSettings from "./pages/UserSettings";
import ArticleDetail from "./components/ArticleDetail";
import QuizDetail from "./components/QuizDetail";
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
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/quiz/:id" element={<QuizDetail />} />
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