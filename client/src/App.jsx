import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<h1 style={{ color: 'white' }}>Welcome to LEARNUP Dashboard (Dummy)</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
