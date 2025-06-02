import React, { useRef } from "react";
import "../styles/SubjectsNavbar.css";

const subjects = [
  "C",
  "C#",
  "C++",
  "CSS",
  "Go",
  "HTML",
  "Java",
  "JavaScript",
  "Kotlin",
  "Matlab",
  "PHP",
  "Python",
  "React",
  "Ruby",
  "SQL",
  "Swift",
  "TypeScript",
  "Scala"
];

const SubjectsNavbar = () => {
  return (
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
};

export default SubjectsNavbar; 