import React from "react";
import "../styles/SubjectsNavbar.css";

const subjects = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "SQL"
];

const SubjectsNavbar = () => (
  <nav className="subjects-navbar">
    <ul className="subjects-list">
      {subjects.map((subject) => (
        <li key={subject}>
          <button className="subject-link">{subject}</button>
        </li>
      ))}
    </ul>
  </nav>
);

export default SubjectsNavbar; 