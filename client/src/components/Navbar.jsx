import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";
import profileDefault from "../assets/user.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user, signout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    signout();
    navigate("/signin");
  };

  return (
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
      <div className="navbar-user" ref={dropdownRef}>
        <div 
          className="user-profile-trigger"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img src={user?.profileImage || profileDefault} alt="Profile" className="user-avatar" />
          <span className="user-name">{user?.name || "User"}</span>
        </div>
        {isDropdownOpen && (
          <div className="user-dropdown">
            <NavLink to="/settings" className="dropdown-item">
              <i className="fas fa-user"></i>
              Settings
            </NavLink>
            <button onClick={handleLogout} className="dropdown-item">
              <i className="fas fa-sign-out-alt"></i>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;