import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/QuizDetail.css';

const QuizDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  // Mock previous quiz results - in real app, this would come from backend
  const [previousResults, setPreviousResults] = useState([
    { quizId: 1, score: 85, date: '2024-01-15' },
    { quizId: 2, score: 92, date: '2024-01-10' },
    { quizId: 3, score: 78, date: '2024-01-05' },
    { quizId: 4, score: 88, date: '2024-01-03' },
    { quizId: 5, score: 95, date: '2024-01-02' },
    { quizId: 6, score: 75, date: '2024-01-01' },
    { quizId: 7, score: 82, date: '2023-12-31' },
    { quizId: 8, score: 90, date: '2023-12-30' },
    { quizId: 9, score: 77, date: '2023-12-29' },
    { quizId: 10, score: 85, date: '2023-12-28' },
    { quizId: 11, score: 92, date: '2023-12-27' },
    { quizId: 12, score: 85, date: '2023-12-26' }
  ]);

  // Quiz data - this will be expanded with full content
  const quizzes = [
    {
      id: 1,
      title: "HTML Fundamentals Quiz",
      description: "Test your knowledge of HTML structure, tags, and best practices.",
      duration: "10 min quiz",
      category: "Web Development",
      image: "/src/assets/articlepics/1.jpg",
      questions: [
        {
          id: 1,
          question: "What does HTML stand for?",
          options: ["HyperText Markup Language", "HighText Machine Language", "HyperTransfer Markup Language", "Home Tool Markup Language"],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Which HTML5 element is used for primary content?",
          options: ["<main>", "<content>", "<primary>", "<body>"],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "What is the correct structure for a basic HTML document?",
          options: ["DOCTYPE > head > body", "html > head > body", "DOCTYPE > html > head + body", "html > DOCTYPE > head > body"],
          correctAnswer: 2
        },
        {
          id: 4,
          question: "Which attribute is REQUIRED for an <img> tag?",
          options: ["src", "alt", "width", "height"],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "What is the purpose of semantic HTML?",
          options: ["Improve accessibility and SEO", "Make pages load faster", "Replace CSS functionality", "Simplify JavaScript coding"],
          correctAnswer: 0
        },
        {
          id: 6,
          question: "Which tag creates the most important heading?",
          options: ["<h1>", "<heading>", "<head>", "<h6>"],
          correctAnswer: 0
        },
        {
          id: 7,
          question: "What does the 'action' attribute specify in a <form>?",
          options: ["Where to send form data", "How to validate inputs", "Which CSS to apply", "Where to redirect after submission"],
          correctAnswer: 0
        },
        {
          id: 8,
          question: "Which HTML5 element should contain navigation links?",
          options: ["<nav>", "<links>", "<menu>", "<navigation>"],
          correctAnswer: 0
        },
        {
          id: 9,
          question: "What is the correct way to create a hyperlink?",
          options: ["<a href='url'>link</a>", "<link url='href'>", "<a link='url'>", "<href='url'>link</href>"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "Which tag pair creates a numbered list?",
          options: ["<ul> and <li>", "<ol> and <li>", "<list> and <item>", "<dl> and <dt>"],
          correctAnswer: 1
        },
        {
          id: 11,
          question: "What is the purpose of the alt attribute in images?",
          options: ["Accessibility and fallback text", "Search engine optimization only", "Styling the image border", "Controlling image loading"],
          correctAnswer: 0
        },
        {
          id: 12,
          question: "Which HTML5 element represents independent, self-contained content?",
          options: ["<section>", "<article>", "<div>", "<independent>"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 2,
      title: "CSS Mastery Quiz",
      description: "Test your knowledge of styling, layouts, and responsive design with CSS",
      duration: "12 min quiz",
      category: "Web Development",
      image: "/src/assets/articlepics/2.jpg",
      questions: [
        {
          id: 1,
          question: "What does CSS stand for?",
          options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Syntax", "Coded Style Standards"],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Which CSS property controls text color?",
          options: ["font-color", "text-color", "color", "font-style"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "What does the 'C' in CSS Box Model stand for?",
          options: ["Container", "Content", "Center", "Column"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Which display value creates a flex container?",
          options: ["block", "flex", "grid", "inline-flex"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "What's the correct syntax for a CSS class selector?",
          options: [".className", "#className", "*className", "className"],
          correctAnswer: 0
        },
        {
          id: 6,
          question: "Which property controls space between grid items?",
          options: ["margin", "padding", "gap", "spacing"],
          correctAnswer: 2
        },
        {
          id: 7,
          question: "What does REM unit represent in CSS?",
          options: ["Root Element Margin", "Relative EM", "Root EM", "Responsive EM"],
          correctAnswer: 2
        },
        {
          id: 8,
          question: "Which pseudo-class targets visited links?",
          options: [":hover", ":active", ":visited", ":link"],
          correctAnswer: 2
        },
        {
          id: 9,
          question: "What's the correct order of Box Model layers (outer to inner)?",
          options: ["Margin > Border > Padding > Content", "Border > Margin > Padding > Content", "Content > Padding > Border > Margin", "Margin > Padding > Border > Content"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "Which property enables CSS transitions?",
          options: ["animation", "transform", "transition", "keyframes"],
          correctAnswer: 2
        },
        {
          id: 11,
          question: "What does this CSS snippet do? 'position: sticky;'",
          options: ["Locks element to viewport", "Removes element from flow", "Switches between relative/fixed", "Centers element horizontally"],
          correctAnswer: 2
        },
        {
          id: 12,
          question: "Which media query targets mobile screens?",
          options: ["@media (min-width: 1200px)", "@media (max-width: 768px)", "@media (orientation: portrait)", "@media (hover: none)"],
          correctAnswer: 1
        },
        {
          id: 13,
          question: "What's the purpose of z-index?",
          options: ["Control horizontal position", "Set element depth/stacking", "Adjust zoom level", "Manage grid columns"],
          correctAnswer: 1
        },
        {
          id: 14,
          question: "Which Flexbox property aligns items on cross-axis?",
          options: ["justify-content", "align-content", "align-items", "flex-align"],
          correctAnswer: 2
        },
        {
          id: 15,
          question: "What does this CSS unit represent: 1vh?",
          options: ["1% of viewport width", "1% of viewport height", "1% of parent width", "1% of font size"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 3,
      title: "Modern JavaScript (ES6+) Quiz",
      description: "Test your knowledge of ES6+ features including arrow functions, promises, destructuring and more",
      duration: "15 min quiz",
      category: "Programming",
      image: "/src/assets/articlepics/3.jpg",
      questions: [
        {
          id: 1,
          question: "Which keyword creates a block-scoped constant that can't be reassigned?",
          options: ["let", "var", "const", "static"],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "What does this arrow function return? () => 42",
          options: ["undefined", "42", "null", "Throws an error"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "Which syntax correctly imports a named export from a module?",
          options: ["import MyComponent from './module'", "import { MyComponent } from './module'", "require('./module').MyComponent", "include './module' as MyComponent"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "What does object destructuring accomplish?",
          options: ["Deep clones objects", "Extracts properties into variables", "Merges multiple objects", "Converts objects to arrays"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "Which operator spreads array elements?",
          options: ["...", "::", "**", "%%"],
          correctAnswer: 0
        },
        {
          id: 6,
          question: "What does the 'await' keyword do?",
          options: ["Pauses async function execution", "Creates a new promise", "Handles promise rejection", "Executes code synchronously"],
          correctAnswer: 0
        },
        {
          id: 7,
          question: "Which method handles promise rejection?",
          options: [".then()", ".catch()", ".finally()", ".resolve()"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "What's the output of: console.log(`2+2=${2+2}`)",
          options: ["2+2=4", "2+2=${2+2}", "4", "`2+2=4`"],
          correctAnswer: 0
        },
        {
          id: 9,
          question: "Which feature prevents undefined property errors?",
          options: ["Nullish coalescing", "Optional chaining", "Template literals", "Rest parameters"],
          correctAnswer: 1
        },
        {
          id: 10,
          question: "What does this code do? const [first] = [1,2,3]",
          options: ["Creates array with first element", "Extracts first element to variable", "Swaps array elements", "Filters array"],
          correctAnswer: 1
        },
        {
          id: 11,
          question: "Which syntax creates a class method?",
          options: ["function myMethod() {}", "myMethod: function() {}", "myMethod() {}", "const myMethod = () => {}"],
          correctAnswer: 2
        },
        {
          id: 12,
          question: "What does Promise.all() do?",
          options: ["Runs promises sequentially", "Waits for all promises to resolve", "Returns first settled promise", "Converts callbacks to promises"],
          correctAnswer: 1
        },
        {
          id: 13,
          question: "Which operator provides default values for null/undefined?",
          options: ["||", "??", "&&", "!!"],
          correctAnswer: 1
        },
        {
          id: 14,
          question: "What's the purpose of Symbol()?",
          options: ["Creates private properties", "Generates unique identifiers", "Defines mathematical operations", "Marks deprecated code"],
          correctAnswer: 1
        },
        {
          id: 15,
          question: "Which method flattens nested arrays?",
          options: [".map()", ".filter()", ".flat()", ".reduce()"],
          correctAnswer: 2
        },
        {
          id: 16,
          question: "What does this code do? const fn = (a, b, ...rest) => {}",
          options: ["Makes all parameters optional", "Collects extra arguments into array", "Sets default parameter values", "Merges arguments into object"],
          correctAnswer: 1
        },
        {
          id: 17,
          question: "Which feature helps avoid callback hell?",
          options: ["Promises", "Generators", "Proxy", "WeakMap"],
          correctAnswer: 0
        },
        {
          id: 18,
          question: "What's the output of: console.log(0 || 'default')",
          options: ["0", "'default'", "true", "false"],
          correctAnswer: 1
        },
        {
          id: 19,
          question: "Which Map method checks for key existence?",
          options: [".has()", ".get()", ".find()", ".includes()"],
          correctAnswer: 0
        },
        {
          id: 20,
          question: "What does super() do in a class?",
          options: ["Calls parent constructor", "Creates static method", "Makes class abstract", "Initializes properties"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 4,
      title: "React Hooks Quiz",
      description: "Test your knowledge of React Hooks including useState, useEffect, and custom hooks",
      duration: "15 min quiz",
      category: "Web Development",
      image: "/src/assets/articlepics/4.jpg",
      questions: [
        {
          id: 1,
          question: "Which hook manages local component state?",
          options: ["useEffect", "useState", "useContext", "useReducer"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "What does the second array element from useState return?",
          options: ["Current state value", "State setter function", "Previous state", "Initial state"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "Which hook replaces componentDidMount and componentDidUpdate?",
          options: ["useMemo", "useCallback", "useEffect", "useLayoutEffect"],
          correctAnswer: 2
        },
        {
          id: 4,
          question: "What's the purpose of useEffect's dependency array?",
          options: ["To cache values", "To control when the effect runs", "To clean up resources", "To optimize performance"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "Which hook should you use to optimize expensive calculations?",
          options: ["useMemo", "useCallback", "useRef", "useReducer"],
          correctAnswer: 0
        },
        {
          id: 6,
          question: "What does useRef primarily provide access to?",
          options: ["Component state", "DOM elements", "Context values", "Parent components"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "Which hook pattern is similar to Redux?",
          options: ["useState + useEffect", "useReducer + useContext", "useMemo + useCallback", "useRef + useImperativeHandle"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "What prefix must all custom hooks start with?",
          options: ["hook", "react", "use", "with"],
          correctAnswer: 2
        },
        {
          id: 9,
          question: "Which hook prevents child re-renders when passing callbacks?",
          options: ["useMemo", "useCallback", "useEffect", "useRef"],
          correctAnswer: 1
        },
        {
          id: 10,
          question: "What's wrong with this code: if (condition) { useState() }?",
          options: ["Missing initial state", "Conditional hook call", "No setter function", "Wrong hook name"],
          correctAnswer: 1
        },
        {
          id: 11,
          question: "Which hook consumes context without a Consumer component?",
          options: ["useContext", "useContextConsumer", "useContextValue", "useContextProvider"],
          correctAnswer: 0
        },
        {
          id: 12,
          question: "What does useEffect's cleanup function return?",
          options: ["A promise", "Another effect", "A cleanup function", "Nothing (undefined)"],
          correctAnswer: 2
        },
        {
          id: 13,
          question: "Which hook runs synchronously after DOM mutations?",
          options: ["useEffect", "useMemo", "useLayoutEffect", "useSyncEffect"],
          correctAnswer: 2
        },
        {
          id: 14,
          question: "What's the main benefit of custom hooks?",
          options: ["Faster rendering", "Reusable stateful logic", "Automatic context", "Built-in memoization"],
          correctAnswer: 1
        },
        {
          id: 15,
          question: "Which hook customizes instance values exposed to parent components?",
          options: ["useImperativeHandle", "useForwardRef", "useParentHandle", "useExpose"],
          correctAnswer: 0
        },
        {
          id: 16,
          question: "When does useMemo recalculate its value?",
          options: ["Every render", "When props change", "When dependencies change", "Never after mount"],
          correctAnswer: 2
        },
        {
          id: 17,
          question: "Which hook would you use for form state management?",
          options: ["useState", "useReducer", "useForm", "Either useState or useReducer"],
          correctAnswer: 3
        },
        {
          id: 18,
          question: "What's the correct way to update state based on previous state?",
          options: ["setCount(count + 1)", "setCount(() => count + 1)", "setCount(prev => prev + 1)", "All of the above"],
          correctAnswer: 2
        },
        {
          id: 19,
          question: "Which hook helps debug custom hooks in React DevTools?",
          options: ["useDebugValue", "useDevTools", "useHookDebugger", "useInspect"],
          correctAnswer: 0
        },
        {
          id: 20,
          question: "What happens if you call hooks conditionally?",
          options: ["Better performance", "Memory leaks", "Inconsistent hook order", "Automatic cleanup"],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 5,
      title: "Python Data Analysis Quiz",
      description: "Test your knowledge of Python data analysis with pandas, NumPy, and visualization",
      duration: "10 min quiz",
      category: "Programming",
      image: "/src/assets/articlepics/5.jpg",
      questions: [
        {
          id: 1,
          question: "Which library provides the DataFrame object for data manipulation?",
          options: ["NumPy", "Matplotlib", "Pandas", "SciPy"],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "What does this code do? np.array([1,2,3]).shape",
          options: ["Returns the data type", "Returns the dimensions", "Calculates the mean", "Sorts the array"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "Which pandas method fills missing values?",
          options: ["dropna()", "fillna()", "replace()", "interpolate()"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "What is the primary purpose of exploratory data analysis (EDA)?",
          options: ["Build machine learning models", "Discover patterns and anomalies", "Deploy production systems", "Optimize database queries"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "Which plot type is best for showing distributions?",
          options: ["Line plot", "Scatter plot", "Histogram", "Pie chart"],
          correctAnswer: 2
        },
        {
          id: 6,
          question: "What does df.groupby('category').mean() do?",
          options: ["Filters rows by category", "Calculates mean for each category", "Drops category column", "Sorts by category mean"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "Which NumPy feature allows operations on different-sized arrays?",
          options: ["Indexing", "Broadcasting", "Slicing", "Masking"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "What does pd.merge(df1, df2) accomplish?",
          options: ["Concatenates vertically", "Combines based on common columns", "Compares DataFrames", "Overwrites df1 with df2"],
          correctAnswer: 1
        },
        {
          id: 9,
          question: "Which library builds on matplotlib for statistical graphics?",
          options: ["Seaborn", "Plotly", "Bokeh", "ggplot"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "What does this code do? df['age'].value_counts()",
          options: ["Calculates average age", "Counts unique age values", "Creates age groups", "Filters by age condition"],
          correctAnswer: 1
        },
        {
          id: 11,
          question: "Which method is NOT used for handling missing data?",
          options: ["isnull()", "dropna()", "fillna()", "sortna()"],
          correctAnswer: 3
        },
        {
          id: 12,
          question: "What's the purpose of the .describe() method?",
          options: ["Display DataFrame structure", "Show summary statistics", "List column names", "Export data report"],
          correctAnswer: 1
        },
        {
          id: 13,
          question: "Which operation would convert '2023-01-01' to a datetime?",
          options: ["pd.to_numeric()", "pd.to_datetime()", "pd.to_timestamp()", "pd.to_date()"],
          correctAnswer: 1
        },
        {
          id: 14,
          question: "What does sns.heatmap() visualize best?",
          options: ["Time series trends", "Geographic data", "Correlation matrices", "Statistical distributions"],
          correctAnswer: 2
        },
        {
          id: 15,
          question: "Which pandas method reads CSV files?",
          options: ["pd.read_csv()", "pd.open_csv()", "pd.load_csv()", "pd.import_csv()"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 6,
      title: "Docker Containerization Quiz",
      description: "Test your knowledge of Docker concepts, commands, and best practices",
      duration: "15 min quiz",
      category: "DevOps",
      image: "/src/assets/articlepics/6.jpg",
      questions: [
        {
          id: 1,
          question: "What is the primary benefit of containerization?",
          options: ["Faster compilation", "Consistent environments", "Lower hardware costs", "Automatic code testing"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which command builds a Docker image from a Dockerfile?",
          options: ["docker create", "docker build", "docker run", "docker compose"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What does the FROM instruction specify in a Dockerfile?",
          options: ["Source code location", "Base image", "Network ports", "File permissions"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Which networking mode provides the best performance?",
          options: ["Bridge", "Host", "Overlay", "Macvlan"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "What is the purpose of Docker volumes?",
          options: ["Increase container speed", "Persist data", "Limit CPU usage", "Monitor network traffic"],
          correctAnswer: 1
        },
        {
          id: 6,
          question: "Which command lists running containers?",
          options: ["docker ps", "docker ls", "docker containers", "docker list"],
          correctAnswer: 0
        },
        {
          id: 7,
          question: "What does multi-stage build help achieve?",
          options: ["Smaller final images", "Faster networking", "Better security", "Automatic scaling"],
          correctAnswer: 0
        },
        {
          id: 8,
          question: "Which file defines multi-container applications?",
          options: ["Dockerfile", "docker-compose.yml", "Containerfile", "docker-config.json"],
          correctAnswer: 1
        },
        {
          id: 9,
          question: "What is the default container restart policy?",
          options: ["always", "unless-stopped", "no", "on-failure"],
          correctAnswer: 2
        },
        {
          id: 10,
          question: "Which instruction adds files to an image?",
          options: ["RUN", "ADD", "COPY", "Both ADD and COPY"],
          correctAnswer: 3
        },
        {
          id: 11,
          question: "What does CMD specify in a Dockerfile?",
          options: ["Build commands", "Default container command", "Configuration settings", "Network parameters"],
          correctAnswer: 1
        },
        {
          id: 12,
          question: "Which is NOT a Docker object type?",
          options: ["Images", "Containers", "Volumes", "Clusters"],
          correctAnswer: 3
        },
        {
          id: 13,
          question: "What is the purpose of EXPOSE in Dockerfile?",
          options: ["Open firewall ports", "Document container ports", "Publish ports automatically", "Limit network access"],
          correctAnswer: 1
        },
        {
          id: 14,
          question: "Which command removes stopped containers?",
          options: ["docker rm", "docker delete", "docker clean", "docker purge"],
          correctAnswer: 0
        },
        {
          id: 15,
          question: "What is Docker Hub primarily used for?",
          options: ["Container monitoring", "Image storage/sharing", "Network configuration", "Volume management"],
          correctAnswer: 1
        },
        {
          id: 16,
          question: "Which is a security best practice?",
          options: ["Run as root", "Use latest tag", "Scan for vulnerabilities", "Disable logging"],
          correctAnswer: 2
        },
        {
          id: 17,
          question: "What does --publish 8080:80 flag do?",
          options: ["Maps host 8080 to container 80", "Opens both ports", "Enables port scanning", "Forwards to port 8080"],
          correctAnswer: 0
        },
        {
          id: 18,
          question: "Which is NOT a Docker storage option?",
          options: ["Volumes", "Bind mounts", "tmpfs", "ext4"],
          correctAnswer: 3
        },
        {
          id: 19,
          question: "What does docker exec allow you to do?",
          options: ["Build new images", "Run commands in running containers", "Export container data", "Create networks"],
          correctAnswer: 1
        },
        {
          id: 20,
          question: "Which tool extends Docker for cluster management?",
          options: ["Docker Swarm", "Docker Compose", "Docker Engine", "Docker Desktop"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 7,
      title: "Machine Learning Fundamentals Quiz",
      description: "Test your understanding of ML concepts, algorithms, and best practices",
      duration: "15 min quiz",
      category: "Machine Learning",
      image: "/src/assets/articlepics/7.jpg",
      questions: [
        {
          id: 1,
          question: "What is the primary goal of supervised learning?",
          options: ["Discover hidden patterns", "Learn from labeled examples", "Optimize rewards", "Reduce data dimensions"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which algorithm is NOT a supervised learning method?",
          options: ["Linear Regression", "K-Means", "Decision Trees", "SVM"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What does PCA stand for in machine learning?",
          options: ["Principal Component Analysis", "Primary Classification Algorithm", "Pattern Correlation Assessment", "Predictive Component Alignment"],
          correctAnswer: 0
        },
        {
          id: 4,
          question: "Which metric is best for imbalanced classification?",
          options: ["Accuracy", "F1 Score", "R-squared", "Mean Squared Error"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "What does regularization prevent in ML models?",
          options: ["Underfitting", "Overfitting", "Feature selection", "Data leakage"],
          correctAnswer: 1
        },
        {
          id: 6,
          question: "Which neural network type is best for images?",
          options: ["RNN", "CNN", "MLP", "Transformer"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "What is the purpose of a validation set?",
          options: ["Final testing", "Hyperparameter tuning", "Data cleaning", "Feature engineering"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "Which technique helps with overfitting in decision trees?",
          options: ["Pruning", "Boosting", "Normalization", "One-hot encoding"],
          correctAnswer: 0
        },
        {
          id: 9,
          question: "What does 'bias' represent in ML?",
          options: ["Systematic error", "Random error", "Model complexity", "Training time"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "Which Python library is NOT primarily for ML?",
          options: ["scikit-learn", "TensorFlow", "Matplotlib", "PyTorch"],
          correctAnswer: 2
        },
        {
          id: 11,
          question: "What does KNN classify based on?",
          options: ["Decision boundaries", "Nearest neighbors", "Probability estimates", "Network layers"],
          correctAnswer: 1
        },
        {
          id: 12,
          question: "Which activation function is most common in hidden layers?",
          options: ["Sigmoid", "Tanh", "ReLU", "Softmax"],
          correctAnswer: 2
        },
        {
          id: 13,
          question: "What is the purpose of gradient descent?",
          options: ["Feature selection", "Optimize model parameters", "Reduce dimensionality", "Balance datasets"],
          correctAnswer: 1
        },
        {
          id: 14,
          question: "Which ensemble method builds trees sequentially?",
          options: ["Random Forest", "Bagging", "AdaBoost", "Stacking"],
          correctAnswer: 2
        },
        {
          id: 15,
          question: "What does NLP stand for in ML?",
          options: ["Neural Language Processing", "Natural Language Processing", "Normalized Linear Projection", "Non-Linear Programming"],
          correctAnswer: 1
        },
        {
          id: 16,
          question: "Which is NOT a clustering algorithm?",
          options: ["K-Means", "DBSCAN", "Hierarchical", "Logistic Regression"],
          correctAnswer: 3
        },
        {
          id: 17,
          question: "What does 'epoch' refer to in neural networks?",
          options: ["Learning rate", "Full pass through training data", "Activation function", "Hidden layer"],
          correctAnswer: 1
        },
        {
          id: 18,
          question: "Which technique helps prevent data leakage?",
          options: ["Feature scaling", "Train-test split before preprocessing", "Increasing epochs", "Adding more layers"],
          correctAnswer: 1
        },
        {
          id: 19,
          question: "What is the output layer activation for binary classification?",
          options: ["ReLU", "Sigmoid", "Tanh", "Linear"],
          correctAnswer: 1
        },
        {
          id: 20,
          question: "Which evaluation method is best for small datasets?",
          options: ["Train-test split", "Cross-validation", "Holdout validation", "A/B testing"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 8,
      title: "AWS Cloud Services Quiz",
      description: "Test your knowledge of AWS core services and cloud concepts",
      duration: "12 min quiz",
      category: "Cloud Computing",
      image: "/src/assets/articlepics/8.jpg",
      questions: [
        {
          id: 1,
          question: "Which AWS service provides virtual servers in the cloud?",
          options: ["S3", "EC2", "Lambda", "RDS"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "What is the primary purpose of Amazon S3?",
          options: ["Run applications", "Store relational data", "Object storage", "Manage virtual networks"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "Which service enables serverless computing in AWS?",
          options: ["EC2", "Fargate", "Lambda", "Elastic Beanstalk"],
          correctAnswer: 2
        },
        {
          id: 4,
          question: "What does VPC stand for in AWS?",
          options: ["Virtual Private Cloud", "Virtual Public Cluster", "Volume Provisioned Computing", "Verified Protected Connection"],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "Which database service is NOT offered by Amazon RDS?",
          options: ["MySQL", "PostgreSQL", "DynamoDB", "Oracle"],
          correctAnswer: 2
        },
        {
          id: 6,
          question: "What is the main function of IAM?",
          options: ["Manage compute resources", "Control access to AWS services", "Monitor network traffic", "Optimize storage costs"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "Which AWS service creates API endpoints?",
          options: ["CloudFront", "API Gateway", "Route 53", "Direct Connect"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "What does CloudFormation enable?",
          options: ["Infrastructure as Code", "Content Delivery Networks", "Database Replication", "Virtual Private Networks"],
          correctAnswer: 0
        },
        {
          id: 9,
          question: "Which provides lowest latency access to global users?",
          options: ["Regions", "Availability Zones", "Edge Locations", "Data Centers"],
          correctAnswer: 2
        },
        {
          id: 10,
          question: "What is the purpose of an Auto Scaling Group?",
          options: ["Automate backups", "Adjust instance count based on demand", "Manage database connections", "Rotate security keys"],
          correctAnswer: 1
        },
        {
          id: 11,
          question: "Which service provides managed Kubernetes in AWS?",
          options: ["ECS", "EKS", "Fargate", "Lambda"],
          correctAnswer: 1
        },
        {
          id: 12,
          question: "What does RDS Multi-AZ deployment provide?",
          options: ["Read scaling", "High availability", "Cost savings", "Serverless computing"],
          correctAnswer: 1
        },
        {
          id: 13,
          question: "Which is NOT an S3 storage class?",
          options: ["Standard", "Glacier", "Redshift", "Intelligent-Tiering"],
          correctAnswer: 2
        },
        {
          id: 14,
          question: "What is the primary benefit of AWS's pay-as-you-go pricing?",
          options: ["Predictable monthly costs", "No upfront infrastructure investment", "Free services for startups", "Automatic cost optimization"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 9,
      title: "SQL Database Design Quiz",
      description: "Test your knowledge of database normalization, keys, constraints and schema design",
      duration: "10 min quiz",
      category: "Database Systems",
      image: "/src/assets/articlepics/9.jpg",
      questions: [
        {
          id: 1,
          question: "What is the primary purpose of database normalization?",
          options: ["Improve query performance", "Reduce data redundancy", "Simplify backups", "Enable distributed databases"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which normal form eliminates transitive dependencies?",
          options: ["1NF", "2NF", "3NF", "BCNF"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "What uniquely identifies each record in a table?",
          options: ["Foreign key", "Primary key", "Composite key", "Index"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Which constraint enforces referential integrity between tables?",
          options: ["CHECK", "UNIQUE", "FOREIGN KEY", "NOT NULL"],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "What is the main purpose of database indexes?",
          options: ["Enforce data types", "Improve query performance", "Reduce storage space", "Validate data entries"],
          correctAnswer: 1
        },
        {
          id: 6,
          question: "Which is NOT a best practice for schema design?",
          options: ["Using consistent naming", "Avoiding reserved keywords", "Using SELECT * in production", "Documenting relationships"],
          correctAnswer: 2
        },
        {
          id: 7,
          question: "What does a composite key consist of?",
          options: ["Multiple foreign keys", "Multiple columns as primary key", "Encrypted primary key", "Auto-incremented ID"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "Which constraint prevents NULL values in a column?",
          options: ["UNIQUE", "CHECK", "NOT NULL", "DEFAULT"],
          correctAnswer: 2
        },
        {
          id: 9,
          question: "When might denormalization be appropriate?",
          options: ["For write-heavy systems", "To improve read performance", "During initial development", "For temporary tables"],
          correctAnswer: 1
        },
        {
          id: 10,
          question: "What is the purpose of a foreign key?",
          options: ["Ensure data uniqueness", "Create table relationships", "Optimize storage", "Validate data format"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 10,
      title: "Cybersecurity Fundamentals Quiz",
      description: "Test your knowledge of cybersecurity threats, defenses, and best practices",
      duration: "10 min quiz",
      category: "Cybersecurity",
      image: "/src/assets/articlepics/10.jpg",
      questions: [
        {
          id: 1,
          question: "What is the primary purpose of multi-factor authentication (MFA)?",
          options: ["Speed up login process", "Add extra security layers", "Reduce password complexity", "Automate user provisioning"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which attack involves tricking users into revealing sensitive information?",
          options: ["DDoS", "Phishing", "SQL injection", "Man-in-the-middle"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What does VPN stand for in network security?",
          options: ["Virtual Private Network", "Verified Protected Node", "Vulnerability Prevention Network", "Virtual Packet Network"],
          correctAnswer: 0
        },
        {
          id: 4,
          question: "Which encryption standard is recommended for securing data at rest?",
          options: ["AES-256", "SHA-1", "MD5", "DES"],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "What is the principle of least privilege?",
          options: ["Granting admin rights to all users", "Limiting access to only what's needed", "Using the simplest passwords", "Disabling all security controls"],
          correctAnswer: 1
        },
        {
          id: 6,
          question: "Which tool helps detect malicious network activity?",
          options: ["Antivirus", "IDS/IPS", "Password manager", "DLP"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "What should be done first when a security breach is detected?",
          options: ["Publicly announce the breach", "Contain the incident", "Reboot all systems", "Delete affected files"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "Which regulation protects personal data in the EU?",
          options: ["HIPAA", "PCI DSS", "GDPR", "SOX"],
          correctAnswer: 2
        },
        {
          id: 9,
          question: "What is the main purpose of regular security awareness training?",
          options: ["Reduce human error risks", "Automate security processes", "Replace technical controls", "Eliminate all cyber threats"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "Which security practice helps protect against ransomware?",
          options: ["Disabling backups", "Regular data backups", "Sharing admin credentials", "Using default passwords"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 11,
      title: "Git and GitHub Quiz",
      description: "Test your knowledge of version control with Git and GitHub workflows",
      duration: "10 min quiz",
      category: "Software Engineering",
      image: "/src/assets/articlepics/11.jpg",
      questions: [
        {
          id: 1,
          question: "What command initializes a new Git repository?",
          options: ["git start", "git init", "git new", "git create"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which Git area temporarily stores changes before committing?",
          options: ["Working directory", "Staging area", "Remote repository", "Branch"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What does 'git clone' do?",
          options: ["Copies a remote repository", "Creates a new branch", "Deletes a repository", "Merges two branches"],
          correctAnswer: 0
        },
        {
          id: 4,
          question: "How do you create and switch to a new branch?",
          options: ["git branch new-branch", "git checkout -b new-branch", "git switch new-branch", "git create-branch new-branch"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "What's the purpose of 'git pull'?",
          options: ["Upload local changes", "Download remote changes", "Delete a branch", "View commit history"],
          correctAnswer: 1
        },
        {
          id: 6,
          question: "Which command safely undoes a public commit?",
          options: ["git reset", "git revert", "git delete", "git undo"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "What does GitHub use to review code before merging?",
          options: ["Issues", "Pull requests", "Wikis", "Actions"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "How do you temporarily save uncommitted changes?",
          options: ["git tag", "git stash", "git hold", "git save"],
          correctAnswer: 1
        },
        {
          id: 9,
          question: "What marks a specific point in Git history (like v1.0)?",
          options: ["Branch", "Commit", "Tag", "HEAD"],
          correctAnswer: 2
        },
        {
          id: 10,
          question: "Which protocol is commonly used for secure Git remote connections?",
          options: ["HTTP", "SSH", "FTP", "SMTP"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 12,
      title: "Neural Networks Fundamentals Quiz",
      description: "Test your understanding of neural network concepts and architectures",
      duration: "10 min quiz",
      category: "Artificial Intelligence",
      image: "/src/assets/articlepics/12.jpg",
      questions: [
        {
          id: 1,
          question: "What is the primary function of an activation function in a neural network?",
          options: ["Increase computation speed", "Introduce non-linearity", "Reduce memory usage", "Initialize weights"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which activation function is most commonly used in hidden layers?",
          options: ["Sigmoid", "Tanh", "ReLU", "Linear"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "What is the purpose of backpropagation?",
          options: ["Forward data through the network", "Calculate weight gradients", "Initialize network parameters", "Normalize input data"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Which loss function is typically used for binary classification?",
          options: ["Mean Squared Error", "Cross-Entropy", "Absolute Error", "Huber Loss"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "What does dropout regularization do during training?",
          options: ["Adds noise to inputs", "Randomly disables neurons", "Increases learning rate", "Reduces batch size"],
          correctAnswer: 1
        },
        {
          id: 6,
          question: "Which neural network architecture is best suited for image processing?",
          options: ["RNN", "CNN", "MLP", "Transformer"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "What is the role of the optimizer in neural network training?",
          options: ["Calculate loss values", "Update network weights", "Select activation functions", "Choose network architecture"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "Which of these is NOT a common neural network framework?",
          options: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
          correctAnswer: 2
        },
        {
          id: 9,
          question: "What problem does batch normalization address?",
          options: ["Vanishing gradients", "Overfitting", "Slow computation", "Small datasets"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "What does an L2 regularization term add to the loss function?",
          options: ["Sum of weights", "Sum of absolute weights", "Sum of squared weights", "Maximum weight value"],
          correctAnswer: 2
        }
      ]
    }
  ];

  const quiz = quizzes.find(q => q.id === parseInt(id));

  if (!quiz) {
    return (
      <div className="quiz-detail-page">
        <Navbar />
        <div className="quiz-not-found">
          <h2>Quiz not found</h2>
          <button onClick={() => navigate('/quizzes')} className="back-button">
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (questionId, answerIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    quiz.questions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    const percentage = (correctAnswers / quiz.questions.length) * 100;
    setScore(percentage);
    setIsCompleted(true);
    
    // Add new result to previous results
    const newResult = {
      quizId: quiz.id,
      score: percentage,
      date: new Date().toISOString().split('T')[0]
    };
    setPreviousResults(prev => [newResult, ...prev]);
    
    // Here you would send the score to your backend
    // Example: saveQuizResult(quiz.id, percentage);
    console.log(`Quiz completed! Score: ${percentage}%`);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQ = quiz.questions[currentQuestion];
  
  // Get previous result for this quiz
  const previousResult = previousResults.find(result => result.quizId === quiz.id);

  return (
    <div className="quiz-detail-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="quiz-hero">
        <div className="quiz-hero-background">
          <img src={quiz.image} alt={quiz.title} className="quiz-hero-image" />
          <div className="quiz-hero-overlay"></div>
          <div className="quiz-hero-content">
            <div className="quiz-category">{quiz.category}</div>
            <h1 className="quiz-title">{quiz.title}</h1>
            <p className="quiz-description">{quiz.description}</p>
            <div className="quiz-meta">
              <span className="quiz-duration">{quiz.duration}</span>
              <span className="quiz-questions-count">{quiz.questions.length} questions</span>
            </div>
            
            {/* Previous Result Display */}
            {previousResult && (
              <div className="previous-result">
                <div className="previous-result-badge">
                  <span className="previous-score">{Math.round(previousResult.score)}%</span>
                  <span className="previous-label">Previous Best</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="quiz-content-container">
        <div className="quiz-content">
          {!isCompleted ? (
            <>
              {/* Progress Bar */}
              <div className="quiz-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-text">
                  Question {currentQuestion + 1} of {quiz.questions.length}
                </div>
              </div>

              {/* Question */}
              <div className="question-container">
                <h2 className="question-title">{currentQ.question}</h2>
                
                <div className="options-container">
                  {currentQ.options.map((option, index) => (
                    <label key={index} className="option-label">
                      <input
                        type="radio"
                        name={`question-${currentQ.id}`}
                        value={index}
                        checked={userAnswers[currentQ.id] === index}
                        onChange={() => handleAnswerSelect(currentQ.id, index)}
                        className="option-input"
                      />
                      <span className="option-text">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="quiz-navigation">
                <button 
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="nav-button prev-button"
                >
                  ← Previous
                </button>
                
                {currentQuestion === quiz.questions.length - 1 ? (
                  <button 
                    onClick={calculateScore}
                    className="nav-button submit-button"
                  >
                    Submit Quiz
                  </button>
                ) : (
                  <button 
                    onClick={handleNextQuestion}
                    className="nav-button next-button"
                  >
                    Next →
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Results Section */
            <div className="quiz-results">
              <h2 className="results-title">Quiz Completed!</h2>
              <div className="score-container">
                <div className="score-circle">
                  <span className="score-percentage">{Math.round(score)}%</span>
                </div>
                <p className="score-text">
                  You got {Math.round(score)}% of the questions correct!
                </p>
              </div>
              
              <div className="results-actions">
                <button 
                  onClick={() => {
                    setCurrentQuestion(0);
                    setUserAnswers({});
                    setIsCompleted(false);
                    setScore(0);
                  }}
                  className="retake-button"
                >
                  Retake Quiz
                </button>
                <button 
                  onClick={() => navigate('/quizzes')}
                  className="back-button"
                >
                  Back to Quizzes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizDetail; 