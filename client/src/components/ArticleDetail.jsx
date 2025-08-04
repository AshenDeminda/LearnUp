import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Article data - this will be expanded with full content
  const articles = [
    {
      id: 1,
      title: "HTML Basics Tutorial",
      description: "Learn the fundamentals of HTML markup language, tags, and document structure.",
      readTime: "15 min read",
      image: "/src/assets/articlepics/1.jpg",
      category: "Web Development",
      content: {
        introduction: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for the appearance of the document.",
        sections: [
          {
            title: "What is HTML?",
            content: "HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages and web applications. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document."
          },
          {
            title: "Basic HTML Structure",
            content: "Every HTML document has a basic structure that includes the DOCTYPE declaration, html, head, and body elements. The head section contains metadata about the document, while the body contains the visible content."
          },
          {
            title: "HTML Elements and Tags",
            content: "HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag. Elements can be nested within other elements."
          }
        ]
      }
    },
    {
      id: 2,
      title: "CSS Styling Fundamentals",
      description: "Master CSS selectors, properties, and layout techniques for modern web design.",
      readTime: "20 min read",
      image: "/src/assets/articlepics/2.jpg",
      category: "Web Development",
      content: {
        introduction: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is designed to enable the separation of presentation and content.",
        sections: [
          {
            title: "What is CSS?",
            content: "CSS stands for Cascading Style Sheets. It is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is designed to enable the separation of presentation and content."
          },
          {
            title: "CSS Selectors",
            content: "CSS selectors are patterns used to select and style HTML elements. They can be simple selectors like element names, class selectors, ID selectors, or more complex selectors that target specific relationships between elements."
          },
          {
            title: "CSS Properties",
            content: "CSS properties define the visual characteristics of HTML elements. Common properties include color, font-size, margin, padding, border, and background. Each property can have different values that affect how the element is displayed."
          }
        ]
      }
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features",
      description: "Explore modern JavaScript features including arrow functions, destructuring, and modules.",
      readTime: "25 min read",
      image: "/src/assets/articlepics/3.jpg",
      category: "Programming",
      content: {
        introduction: "ES6 (ECMAScript 2015) introduced many new features to JavaScript that make the language more powerful and easier to use. These features include arrow functions, destructuring, template literals, and more.",
        sections: [
          {
            title: "Arrow Functions",
            content: "Arrow functions provide a shorter syntax for writing function expressions. They are always anonymous and have a lexical this binding, which means they inherit the this value from the enclosing scope."
          },
          {
            title: "Destructuring",
            content: "Destructuring allows you to extract values from arrays or properties from objects into distinct variables. This feature makes it easier to work with complex data structures and reduces the amount of code needed."
          },
          {
            title: "Template Literals",
            content: "Template literals are string literals that allow embedded expressions. They use backticks instead of quotes and can contain placeholders that are replaced with the values of expressions."
          }
        ]
      }
    },
    {
      id: 4,
      title: "React Hooks Deep Dive",
      description: "Understand React hooks, custom hooks, and state management patterns.",
      readTime: "30 min read",
      image: "/src/assets/articlepics/4.jpg",
      category: "Web Development",
      content: {
        introduction: "React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 and provide a way to use state and lifecycle methods without writing class components.",
        sections: [
          {
            title: "useState Hook",
            content: "The useState hook allows functional components to manage state. It returns an array with the current state value and a function to update it. This hook is the most commonly used hook for managing component state."
          },
          {
            title: "useEffect Hook",
            content: "The useEffect hook allows functional components to perform side effects. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in class components."
          },
          {
            title: "Custom Hooks",
            content: "Custom hooks are JavaScript functions that use other hooks and can be shared between components. They allow you to extract component logic into reusable functions and follow the same rules as regular hooks."
          }
        ]
      }
    },
    {
      id: 5,
      title: "Python Data Analysis",
      description: "Learn pandas, numpy, and matplotlib for data manipulation and visualization.",
      readTime: "35 min read",
      image: "/src/assets/articlepics/5.jpg",
      category: "Data Science",
      content: {
        introduction: "Python has become the go-to language for data analysis and scientific computing. With libraries like pandas, numpy, and matplotlib, Python provides powerful tools for data manipulation, analysis, and visualization.",
        sections: [
          {
            title: "Pandas Library",
            content: "Pandas is a powerful data manipulation library for Python. It provides data structures like DataFrames and Series that make it easy to work with structured data. Pandas is built on top of numpy and provides high-level data manipulation tools."
          },
          {
            title: "NumPy Library",
            content: "NumPy is the fundamental package for scientific computing in Python. It provides support for large, multi-dimensional arrays and matrices, along with a collection of high-level mathematical functions to operate on these arrays."
          },
          {
            title: "Matplotlib Library",
            content: "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python. It provides a MATLAB-like plotting interface and is highly customizable for creating publication-quality figures."
          }
        ]
      }
    },
    {
      id: 6,
      title: "Docker Container Basics",
      description: "Get started with Docker containers, images, and containerization concepts.",
      readTime: "18 min read",
      image: "/src/assets/articlepics/6.jpg",
      category: "DevOps",
      content: {
        introduction: "Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and self-sufficient units that can run anywhere Docker is installed.",
        sections: [
          {
            title: "What are Containers?",
            content: "Containers are lightweight, standalone, and executable packages that include everything needed to run an application: code, runtime, system tools, system libraries, and settings. They are isolated from each other and from the host system."
          },
          {
            title: "Docker Images",
            content: "Docker images are read-only templates used to create containers. They contain the application code, runtime, libraries, dependencies, and other files needed for the application to run. Images are built from Dockerfiles."
          },
          {
            title: "Docker Commands",
            content: "Docker provides a set of commands for managing containers and images. Common commands include docker run, docker build, docker pull, docker push, and docker ps. These commands allow you to create, manage, and deploy containers."
          }
        ]
      }
    }
  ];

  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="article-detail-page">
        <Navbar />
        <div className="article-not-found">
          <h2>Article not found</h2>
          <button onClick={() => navigate('/')} className="back-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <Navbar />
      
             {/* Hero Section */}
       <div className="article-hero">
         <div className="article-hero-background">
           <img src={article.image} alt={article.title} className="article-hero-image" />
           <div className="article-hero-overlay"></div>
           <div className="article-hero-content">
             <div className="article-category">{article.category}</div>
             <h1 className="article-title">{article.title}</h1>
             <p className="article-description">{article.description}</p>
             <div className="article-meta">
               <span className="article-read-time">{article.readTime}</span>
             </div>
           </div>
         </div>
       </div>

      {/* Article Content */}
      <div className="article-content-container">
        <div className="article-content">
          {/* Introduction */}
          <div className="article-section">
            <p className="article-introduction">{article.content.introduction}</p>
          </div>

          {/* Sections */}
          {article.content.sections.map((section, index) => (
            <div key={index} className="article-section">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-content">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="article-actions">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back to Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail; 