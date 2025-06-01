import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <NavLink to="/dashboard" className="navbar-logo">
        Learn<span>Up</span>
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/tutorials" className={({ isActive }) => isActive ? "active-link" : ""}>Tutorials</NavLink>
        </li>
        <li>
          <NavLink to="/quizzes" className={({ isActive }) => isActive ? "active-link" : ""}>Quizzes</NavLink>
        </li>
        <li>
          <NavLink to="/chat" className={({ isActive }) => isActive ? "active-link" : ""}>Chat</NavLink>
        </li>
      </ul>
    </div>
    <div className="navbar-user">
      <span className="navbar-username">User</span>
      <button className="navbar-logout">Logout</button>
    </div>
  </nav>
);

export default Navbar;