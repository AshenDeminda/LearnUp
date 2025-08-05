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
      description: "Master the fundamentals of HTML markup language including tags, elements, attributes, and document structure to build your first web pages.",
      readTime: "25 min read",
      image: "/src/assets/articlepics/1.jpg",
      category: "Web Development",
      content: {
        introduction: "HTML (HyperText Markup Language) is the backbone of every website on the internet. It's a markup language that uses tags to structure content and define the elements that make up web pages. Whether you're building a simple blog or a complex web application, HTML provides the foundation that browsers use to display content to users.",
        sections: [
          {
            title: "What is HTML?",
            content: "HTML stands for HyperText Markup Language. It was created by Tim Berners-Lee in 1990 and has evolved through various versions, with HTML5 being the current standard. HTML is not a programming language but a markup language that uses tags to describe the structure and content of web pages. It tells the browser how to display text, images, links, and other elements on a webpage. HTML works by using a system of markup tags that are interpreted by web browsers to display formatted content to users."
          },
          {
            title: "HTML Document Structure",
            content: "Every HTML document follows a standard structure that includes several essential components. The basic structure consists of a DOCTYPE declaration, followed by the html element which contains head and body sections. The DOCTYPE declaration tells the browser which version of HTML to use. The html element serves as the root container for all content. The head section contains metadata about the document such as the title, character encoding, and viewport settings. The body section contains all the visible content that users will see on the webpage. This standardized structure ensures that browsers can properly interpret and display your web pages across different devices and platforms."
          },
          {
            title: "HTML Elements and Tags",
            content: "HTML elements are the building blocks of web pages and are defined by tags enclosed in angle brackets. Most elements consist of an opening tag and a closing tag that wrap around content. The opening tag uses the format <tagname> while the closing tag includes a forward slash </tagname>. Some elements are self-closing and don't require a closing tag, such as images, line breaks, and horizontal rules. Elements can contain text content, other nested elements, or both. They can also include attributes that provide additional information about the element, such as styling, behavior, or metadata. Understanding how elements and tags work together is fundamental to creating well-structured HTML documents."
          },
          {
            title: "Common HTML Tags",
            content: "HTML provides a wide variety of tags for different types of content. For text structure, heading tags range from h1 (largest) to h6 (smallest) and should be used to create a logical content hierarchy. Paragraph tags create blocks of text, while span elements provide inline text containers. Div elements serve as block-level containers for grouping content. For text formatting, the strong tag creates bold text with semantic importance, while the em tag creates italic text with emphasis. The br tag creates line breaks, and various list tags including ul for unordered lists, ol for ordered lists, and li for individual list items help organize information in a structured way."
          },
          {
            title: "Links and Images",
            content: "Links and images are essential elements that make web pages interactive and visually appealing. The anchor tag creates links to other pages, sections within the same page, email addresses, or external websites. Links can be absolute (pointing to external sites) or relative (pointing to pages within your own site). Images are embedded using the img tag, which requires a source attribute to specify the image file location. The alt attribute is crucial for accessibility, providing alternative text for screen readers and displaying when images fail to load. You can also specify dimensions using width and height attributes, though CSS is generally preferred for styling. Proper use of links and images enhances user experience and makes content more engaging."
          },
          {
            title: "HTML Attributes",
            content: "Attributes provide additional information about HTML elements and are written as name-value pairs within the opening tag. Global attributes work with any HTML element and include commonly used ones like id for unique identification, class for CSS styling and JavaScript targeting, style for inline CSS rules, and title for tooltip text. Element-specific attributes serve particular functions, such as src for images, href for links, and action for forms. Attributes enable dynamic behavior, styling hooks, and enhanced functionality. They're essential for creating interactive web pages and connecting HTML with CSS and JavaScript. Always use quotes around attribute values and choose meaningful names for ids and classes."
          },
          {
            title: "Semantic HTML",
            content: "HTML5 introduced semantic elements that clearly describe their purpose and content, improving both accessibility and SEO. These elements include header for page or section introductions, nav for navigation menus, main for primary content, article for standalone content pieces, section for thematic content groupings, aside for sidebar content, and footer for closing information. Semantic HTML creates a meaningful document structure that assistive technologies can understand and search engines can better index. Using semantic elements instead of generic divs makes your code more readable and maintainable. It also helps create a logical content hierarchy that benefits both users and automated systems that process web content."
          },
          {
            title: "Forms and Input Elements",
            content: "HTML forms enable user interaction by collecting and submitting data to servers. Forms are created using the form element with action and method attributes to specify where and how data should be sent. Input elements come in various types including text for general input, email for email validation, password for hidden text, number for numeric input, and date for date selection. Textarea elements handle multi-line text input. Labels should always be associated with form controls using the for attribute to improve accessibility. Required attributes make fields mandatory, while placeholder text provides input hints. Proper form structure with fieldsets and legends can group related inputs and improve usability for all users."
          },
          {
            title: "Tables",
            content: "HTML tables organize data into rows and columns for easy comparison and analysis. Tables should only be used for tabular data, not for layout purposes. The table element serves as the container, while thead groups header content, tbody contains the main data, and tfoot holds summary information. Table rows are created with tr elements, header cells use th tags, and data cells use td tags. Header cells should include scope attributes to specify whether they relate to columns or rows, improving accessibility. Tables can include captions for descriptions and colgroups for column styling. When properly structured with appropriate headers and semantic markup, tables provide an accessible way to present complex data relationships."
          },
          {
            title: "Best Practices and Tips",
            content: "Following HTML best practices ensures your code is maintainable, accessible, and performs well. Always include a DOCTYPE declaration to trigger standards mode in browsers. Use proper indentation and consistent formatting for readability. Close all tags properly and use lowercase for tag names and attributes. Quote all attribute values even when not strictly required. For accessibility, use semantic elements appropriately, include alt text for images, maintain proper heading hierarchy, and associate labels with form inputs. SEO benefits come from descriptive title tags, meta descriptions, and meaningful content structure. Validate your HTML regularly using tools like the W3C Markup Validator to catch errors early. These practices create robust, professional websites that work well across different browsers and devices."
          }
        ]
      }
    },
    {
      id: 2,
      title: "CSS Styling Fundamentals",
      description: "Learn CSS fundamentals including selectors, properties, layouts, and responsive design to create beautiful and professional web pages.",
      readTime: "30 min read",
      image: "/src/assets/articlepics/2.jpg",
      category: "Web Development",
      content: {
        introduction: "CSS (Cascading Style Sheets) is the language that brings life and beauty to HTML documents. While HTML provides the structure and content of web pages, CSS controls the visual presentation, layout, colors, fonts, and overall design. CSS transforms plain HTML into visually appealing, professional websites that engage users and provide excellent user experiences across all devices.",
        sections: [
          {
            title: "What is CSS?",
            content: "CSS stands for Cascading Style Sheets and is a stylesheet language used to describe the presentation of HTML documents. Created by Håkon Wium Lie in 1994, CSS separates content from presentation, allowing developers to maintain clean HTML while applying sophisticated styling. The 'cascading' nature refers to how styles flow down from parent elements to child elements and how multiple stylesheets can be combined with a specific order of precedence. CSS works by targeting HTML elements with selectors and applying styling rules through properties and values. This separation of concerns makes websites more maintainable, accessible, and easier to update across multiple pages."
          },
          {
            title: "CSS Syntax and Structure",
            content: "CSS follows a simple yet powerful syntax structure consisting of selectors, properties, and values. A CSS rule begins with a selector that targets specific HTML elements, followed by a declaration block enclosed in curly braces. Within the declaration block, properties define what aspect of the element to style, while values specify how to style it. Each declaration ends with a semicolon, and multiple declarations can be included in a single rule. Comments can be added using the forward slash and asterisk syntax to document your code. Understanding this fundamental syntax is essential for writing effective CSS that creates the desired visual effects while maintaining clean, readable code."
          },
          {
            title: "CSS Selectors",
            content: "CSS selectors are patterns used to target specific HTML elements for styling. Element selectors target all instances of a particular HTML tag, while class selectors use a dot prefix to target elements with specific class attributes. ID selectors use a hash symbol to target unique elements with specific ID attributes. Attribute selectors can target elements based on their attributes and values. Pseudo-class selectors target elements in specific states, such as hover or focus, while pseudo-element selectors target specific parts of elements like first letters or lines. Combinators allow you to select elements based on their relationship to other elements, including descendant, child, adjacent sibling, and general sibling selectors. Mastering selectors enables precise control over which elements receive styling."
          },
          {
            title: "Colors and Typography",
            content: "Colors and typography form the foundation of visual design in CSS. Colors can be specified using various formats including named colors, hexadecimal values, RGB values, HSL values, and newer formats like RGB with alpha transparency. The color property controls text color, while background-color sets element backgrounds. Typography properties include font-family for choosing typefaces, font-size for text size, font-weight for boldness, font-style for italics, and line-height for spacing between lines. Text properties control alignment, decoration, transformation, and spacing. Web fonts can be imported from services like Google Fonts or loaded locally. Good typography hierarchy using different font sizes, weights, and spacing creates readable, professional designs that guide users through content effectively."
          },
          {
            title: "Box Model and Layout",
            content: "The CSS box model is fundamental to understanding how elements are sized and positioned on web pages. Every element is essentially a rectangular box consisting of content, padding, border, and margin areas. The content area holds the actual content, padding provides space between content and border, borders create visible boundaries, and margins provide space between elements. The box-sizing property controls how total element size is calculated, with border-box being particularly useful for predictable sizing. Understanding the box model is crucial for creating precise layouts and avoiding common spacing issues. Modern CSS also provides powerful layout systems including Flexbox for one-dimensional layouts and CSS Grid for two-dimensional layouts, revolutionizing how developers approach web page structure."
          },
          {
            title: "Positioning and Display",
            content: "CSS positioning and display properties control how elements are placed and behave within the document flow. The display property determines whether elements behave as block-level, inline, or other specialized types like flex or grid containers. Block elements stack vertically and take full width, while inline elements flow horizontally within text. The position property offers static, relative, absolute, fixed, and sticky positioning options, each serving different layout needs. Static positioning follows normal document flow, relative positioning moves elements from their normal position, absolute positioning removes elements from flow entirely, fixed positioning creates viewport-relative placement, and sticky positioning combines relative and fixed behaviors. Z-index controls stacking order for positioned elements. Understanding these concepts enables complex layouts and interactive element positioning."
          },
          {
            title: "Flexbox Layout",
            content: "Flexbox is a powerful one-dimensional layout system that makes it easy to distribute space and align items within containers. Flex containers are created by setting display to flex or inline-flex, turning child elements into flex items. The main axis runs in the primary direction while the cross axis runs perpendicular to it. Flex-direction controls the main axis direction, flex-wrap determines whether items wrap to new lines, and justify-content aligns items along the main axis. Align-items controls cross-axis alignment for all items, while align-self allows individual item alignment. Flex items can grow and shrink using flex-grow, flex-shrink, and flex-basis properties. Flexbox excels at creating responsive navigation bars, centering content, distributing space evenly, and handling dynamic content sizes. It solves many traditional CSS layout challenges with clean, intuitive syntax."
          },
          {
            title: "CSS Grid Layout",
            content: "CSS Grid is a two-dimensional layout system that provides unprecedented control over web page structure. Grid containers are created using display grid, establishing both rows and columns simultaneously. Grid tracks are defined using grid-template-rows and grid-template-columns, accepting various units including pixels, percentages, fractions, and the flexible fr unit. Grid items can be placed explicitly using grid-column and grid-row properties or positioned by line numbers and named areas. Grid areas can be defined using grid-template-areas for intuitive layout design. Gap properties control spacing between grid tracks. Grid supports both explicit grids with defined tracks and implicit grids that expand automatically. This system excels at creating complex page layouts, image galleries, card-based designs, and responsive layouts that adapt seamlessly across different screen sizes."
          },
          {
            title: "Responsive Design",
            content: "Responsive design ensures websites work effectively across all devices and screen sizes. Media queries are the cornerstone of responsive CSS, allowing different styles based on device characteristics like screen width, height, orientation, and resolution. Mobile-first design approaches start with styles for small screens and progressively enhance for larger displays. Flexible units like percentages, viewport units, and em or rem units create layouts that adapt to different contexts. Flexible images using max-width ensure graphics scale appropriately. Container queries, a newer addition, allow styling based on container size rather than viewport size. Responsive typography uses fluid scaling techniques to maintain readability across devices. Testing across multiple devices and using browser developer tools helps ensure consistent experiences. Modern responsive design combines these techniques to create websites that feel native on any device."
          },
          {
            title: "CSS Best Practices",
            content: "Following CSS best practices creates maintainable, performant, and scalable stylesheets. Organize CSS using consistent naming conventions like BEM methodology for classes, keeping selectors specific but not overly complex to maintain good specificity balance. Use external stylesheets rather than inline styles for better maintainability and performance. Group related styles together and use comments to document complex sections. Minimize HTTP requests by combining CSS files and optimize file sizes through minification. Use CSS preprocessors like Sass or Less for advanced features like variables, nesting, and mixins. Validate CSS regularly to catch errors and ensure cross-browser compatibility. Consider using CSS methodologies like OOCSS, SMACSS, or Atomic CSS for large projects. Performance optimization includes eliminating unused styles, using efficient selectors, and leveraging browser caching. These practices result in professional, maintainable code that performs well and scales effectively."
          }
        ]
      }
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features",
      description: "Master modern JavaScript with ES6+ features including arrow functions, destructuring, modules, async/await, and other powerful language enhancements.",
      readTime: "35 min read",
      image: "/src/assets/articlepics/3.jpg",
      category: "Programming",
      content: {
        introduction: "JavaScript ES6 (ECMAScript 2015) and subsequent versions have revolutionized how we write JavaScript code. These modern features provide cleaner syntax, better performance, and more powerful programming paradigms that make JavaScript development more efficient and enjoyable. From arrow functions to async/await, these enhancements have become essential tools for modern web development, enabling developers to write more readable, maintainable, and robust applications.",
        sections: [
          {
            title: "Introduction to ES6+ and Modern JavaScript",
            content: "ECMAScript 6, released in 2015, marked the biggest update to JavaScript since its creation. Officially known as ECMAScript 2015, ES6 introduced numerous features that addressed long-standing limitations and added powerful new capabilities. Subsequent annual releases (ES2016, ES2017, ES2018, and beyond) have continued to enhance the language with incremental improvements. Modern JavaScript development relies heavily on these features, which are now widely supported across browsers and JavaScript environments. Understanding ES6+ is crucial for working with modern frameworks like React, Vue, and Angular, as well as for writing clean, efficient code in any JavaScript project. The transition from ES5 to ES6+ represents a fundamental shift in JavaScript programming patterns and best practices."
          },
          {
            title: "Variable Declarations: let and const",
            content: "ES6 introduced let and const as alternatives to var, solving many scoping issues that plagued JavaScript developers. The let keyword creates block-scoped variables that cannot be redeclared in the same scope, preventing common bugs caused by variable hoisting and accidental redeclaration. The const keyword creates block-scoped constants that must be initialized at declaration and cannot be reassigned, though objects and arrays declared with const can still have their contents modified. Both let and const eliminate the temporal dead zone issues associated with var and provide more predictable behavior. Block scoping means variables declared with let and const are only accessible within the nearest enclosing block, making code more predictable and reducing the risk of variable collision. Modern JavaScript best practices recommend using const by default and let when reassignment is necessary, avoiding var entirely."
          },
          {
            title: "Arrow Functions and Lexical This",
            content: "Arrow functions provide a concise syntax for writing functions while introducing important behavioral differences from traditional function expressions. The syntax uses the fat arrow operator and can be extremely compact for simple expressions, eliminating the need for explicit return statements in single-expression functions. More importantly, arrow functions do not have their own this binding and instead inherit this from the enclosing scope, solving many context-related issues in event handlers and callback functions. Arrow functions also lack arguments object, super, and new.target bindings, making them unsuitable as constructors or methods that need these features. They excel in functional programming scenarios, array methods like map and filter, and situations where preserving lexical scope is important. The concise syntax makes code more readable, especially when chaining array methods or working with higher-order functions."
          },
          {
            title: "Template Literals and String Interpolation",
            content: "Template literals revolutionize string handling in JavaScript by providing multiline strings and embedded expressions using backtick syntax. String interpolation using dollar sign and curly braces allows variables and expressions to be embedded directly within strings, eliminating the need for complex concatenation. Template literals preserve line breaks and indentation, making it easy to create multiline strings for HTML templates, SQL queries, or formatted text output. Tagged template literals enable custom processing of template strings through special functions, allowing for advanced use cases like internationalization, HTML escaping, or custom formatting. This feature significantly improves code readability when working with dynamic strings and reduces the likelihood of syntax errors common with traditional string concatenation. Template literals have become essential for modern JavaScript development, particularly in frontend frameworks and template rendering."
          },
          {
            title: "Destructuring Assignment",
            content: "Destructuring assignment provides elegant syntax for extracting values from arrays and properties from objects into distinct variables. Array destructuring allows elements to be unpacked into variables based on position, with support for default values, rest elements, and skipping values. Object destructuring extracts properties by name, supports renaming variables, default values, and nested destructuring for complex data structures. This feature dramatically simplifies common patterns like swapping variables, extracting function parameters, and working with API responses. Destructuring works seamlessly with function parameters, enabling clean parameter handling for functions that accept objects or arrays. It also supports rest patterns for collecting remaining elements or properties. The syntax makes code more declarative and reduces boilerplate when working with complex data structures, leading to more readable and maintainable code."
          },
          {
            title: "Enhanced Object Literals",
            content: "ES6 enhanced object literal syntax with several convenience features that make object creation more concise and powerful. Property shorthand allows variables to be used as object properties without repeating the property name when the variable name matches the desired property name. Method shorthand eliminates the need for the function keyword when defining methods within objects. Computed property names using square brackets enable dynamic property names based on expressions or variables. These enhancements make object creation more flexible and reduce repetitive code. The new syntax is particularly useful when creating objects from existing variables, defining objects with dynamic properties, or working with factory functions. Enhanced object literals integrate seamlessly with destructuring and other ES6 features, creating more expressive and concise code patterns that improve developer productivity and code readability."
          },
          {
            title: "Spread and Rest Operators",
            content: "The spread and rest operators use the same three-dot syntax but serve opposite purposes in JavaScript code. The spread operator expands iterables like arrays or objects into individual elements, enabling easy array concatenation, object merging, and function argument passing. It provides immutable ways to copy arrays and objects, create new arrays with additional elements, and pass array elements as individual function arguments. The rest operator collects multiple elements into arrays or objects, commonly used in function parameters to handle variable numbers of arguments and in destructuring to collect remaining elements. Rest parameters replace the need for the arguments object in functions, providing a true array with all array methods available. These operators enable functional programming patterns, immutable data operations, and flexible function interfaces. They are essential for modern JavaScript patterns and are widely used in frameworks and libraries."
          },
          {
            title: "Classes and Inheritance",
            content: "ES6 classes provide syntactic sugar over JavaScript's prototype-based inheritance, offering a more familiar and cleaner syntax for object-oriented programming. Class declarations define constructors, methods, and static methods using syntax similar to other programming languages while maintaining JavaScript's prototype chain underneath. The extends keyword enables inheritance, allowing classes to inherit properties and methods from parent classes. The super keyword provides access to parent class constructors and methods, enabling proper inheritance patterns. Classes support getters and setters for property access control and can define static methods that belong to the class itself rather than instances. Private fields and methods, introduced in later versions, provide true encapsulation. While classes are primarily syntactic sugar, they make JavaScript's object-oriented features more accessible and provide a cleaner foundation for complex inheritance hierarchies used in large applications."
          },
          {
            title: "Modules and Import/Export",
            content: "ES6 modules provide a standardized way to organize and share code across JavaScript files, replacing various module systems like CommonJS and AMD. Export statements make functions, classes, objects, or primitives available to other modules, with support for both named exports and default exports. Import statements bring functionality from other modules into the current scope, with syntax for importing specific named exports, default exports, or entire modules. Module imports are statically analyzable, enabling build tools to perform tree shaking and optimize bundle sizes. Modules create their own scope, preventing global namespace pollution and providing better encapsulation. Dynamic imports enable lazy loading of modules at runtime, improving application performance. The module system integrates with modern build tools and bundlers, making it essential for contemporary JavaScript development and enabling better code organization in large applications."
          },
          {
            title: "Promises and Async/Await",
            content: "Promises revolutionized asynchronous JavaScript programming by providing a cleaner alternative to callback patterns and eliminating callback hell. Promises represent eventual completion or failure of asynchronous operations, with states of pending, fulfilled, or rejected. The then method handles successful resolution while catch handles errors, enabling chainable asynchronous operations. Promise.all, Promise.race, and other utility methods provide powerful patterns for handling multiple asynchronous operations. Async/await syntax, introduced in ES2017, makes asynchronous code look and behave more like synchronous code while maintaining non-blocking behavior. Async functions automatically return promises, and await expressions pause function execution until promises resolve. Error handling with async/await uses familiar try/catch blocks instead of promise rejection handlers. This evolution has made asynchronous JavaScript programming more intuitive and maintainable, especially for complex workflows involving multiple API calls or asynchronous operations."
          },
          {
            title: "Advanced ES6+ Features and Best Practices",
            content: "Modern JavaScript continues evolving with features like optional chaining for safe property access, nullish coalescing for default value assignment, and array methods like includes, find, and flatMap for more expressive data manipulation. Symbols provide unique identifiers for object properties, while Map and Set collections offer alternatives to plain objects and arrays with better performance characteristics for specific use cases. Generators enable pausable functions and iterator protocols, useful for creating custom iteration behavior and handling asynchronous sequences. Proxy objects enable meta-programming by intercepting operations on other objects. Best practices for modern JavaScript include using const by default, preferring arrow functions for callbacks, leveraging destructuring for cleaner parameter handling, and adopting functional programming patterns. Modern tooling like Babel enables using cutting-edge features while maintaining browser compatibility. Understanding these features and following modern patterns leads to more maintainable, performant, and readable JavaScript code."
          }
        ]
      }
    },
    {
      id: 4,
      title: "React Hooks Deep Dive",
      description: "Master React Hooks including useState, useEffect, useContext, custom hooks, and advanced patterns for building modern React applications.",
      readTime: "40 min read",
      image: "/src/assets/articlepics/4.jpg",
      category: "Web Development",
      content: {
        introduction: "React Hooks revolutionized how we write React components by enabling state and lifecycle features in functional components. Introduced in React 16.8, hooks provide a more direct API to React concepts and eliminate many complexities associated with class components. They enable better code reuse through custom hooks, reduce component hierarchy depth, and make testing easier. Understanding hooks is essential for modern React development, as they have become the preferred way to build React applications and are fundamental to the React ecosystem.",
        sections: [
          {
            title: "Introduction to React Hooks",
            content: "React Hooks are special functions that allow you to hook into React features from functional components. They follow specific naming conventions, always starting with 'use', and must be called at the top level of React functions, never inside loops, conditions, or nested functions. This rule ensures hooks are called in the same order every time a component renders, maintaining consistent state between renders. Hooks solve several problems that existed with class components, including wrapper hell from higher-order components, complex lifecycle methods, and difficulties in sharing stateful logic between components. They provide a more functional approach to React development, making components easier to understand, test, and reuse. The introduction of hooks has fundamentally changed React development patterns and has become the foundation for modern React applications."
          },
          {
            title: "useState Hook - Managing Component State",
            content: "The useState hook is the most fundamental hook for adding state to functional components. It returns an array with two elements: the current state value and a setter function to update that value. Unlike class component state, useState can hold any type of value including primitives, objects, or arrays, and you can have multiple useState calls in a single component for different pieces of state. The setter function can accept either the new state value directly or a function that receives the previous state and returns the new state, which is useful for updates based on previous values. State updates are asynchronous and may be batched for performance, so multiple state updates in the same event handler might not trigger multiple re-renders. When updating objects or arrays, you must create new instances rather than mutating existing ones to ensure React detects the change and re-renders the component. Understanding useState is crucial as it forms the foundation for managing local component state in modern React applications."
          },
          {
            title: "useEffect Hook - Side Effects and Lifecycle",
            content: "The useEffect hook handles side effects in functional components, replacing multiple lifecycle methods from class components with a single, more flexible API. It runs after every render by default, making it perfect for data fetching, subscriptions, DOM manipulation, and cleanup tasks. The hook accepts a callback function and an optional dependency array that controls when the effect runs. An empty dependency array means the effect runs only once after the initial render, similar to componentDidMount. Including values in the dependency array causes the effect to run only when those values change. The effect callback can return a cleanup function that runs before the component unmounts or before the effect runs again, handling cleanup tasks like removing event listeners or canceling network requests. Multiple useEffect hooks can be used in a single component to separate different concerns, leading to better code organization. Understanding useEffect is essential for handling asynchronous operations and managing component lifecycle in functional components."
          },
          {
            title: "useContext Hook - Consuming React Context",
            content: "The useContext hook provides a clean way to consume React Context values without nesting components in Consumer components. It accepts a context object created with React.createContext and returns the current context value for that context. The context value is determined by the nearest Context Provider above the calling component in the component tree. When the context value changes, components using useContext will re-render with the new value. This hook eliminates the need for render prop patterns or higher-order components when consuming context, making the code more readable and reducing component nesting. useContext is particularly useful for theme systems, user authentication state, language preferences, and other global application state. It works seamlessly with useState and useReducer to create powerful state management patterns. Multiple contexts can be consumed in a single component by calling useContext multiple times. The hook provides a more intuitive API for accessing shared state across component hierarchies."
          },
          {
            title: "useReducer Hook - Complex State Management",
            content: "The useReducer hook provides an alternative to useState for managing complex state logic, especially when state updates depend on previous state or involve multiple sub-values. It accepts a reducer function and initial state, returning the current state and a dispatch function. The reducer function receives the current state and an action object, returning the new state based on the action type. This pattern is similar to Redux but built into React, making it perfect for local component state that has complex update logic. useReducer is preferable to useState when you have complex state logic involving multiple sub-values, when the next state depends on the previous one, or when you want to optimize performance by passing dispatch down instead of callbacks. The reducer pattern makes state updates more predictable and easier to test since the logic is centralized in pure functions. Combined with useContext, useReducer can create powerful state management solutions for medium-sized applications without external libraries."
          },
          {
            title: "useCallback and useMemo - Performance Optimization",
            content: "The useCallback and useMemo hooks are performance optimization tools that help prevent unnecessary re-renders and expensive calculations. useCallback returns a memoized callback function that only changes when its dependencies change, preventing child components from re-rendering when passed as props if the child component is wrapped with React.memo. useMemo returns a memoized value and only recalculates when its dependencies change, useful for expensive computations that don't need to run on every render. Both hooks accept a dependency array similar to useEffect, and the cached values are invalidated when dependencies change. These hooks should be used judiciously, as they have their own overhead and can sometimes hurt performance if overused. They are most beneficial when passing callbacks to optimized child components, performing expensive calculations, or when referential equality is important. Understanding when and how to use these optimization hooks is crucial for building performant React applications, especially those with complex component hierarchies or computationally intensive operations."
          },
          {
            title: "useRef Hook - Accessing DOM and Persistent Values",
            content: "The useRef hook provides a way to access DOM elements directly and store mutable values that persist across renders without causing re-renders when changed. It returns a mutable ref object with a current property that can hold any value. When used with JSX elements, useRef provides direct access to DOM nodes for operations like focusing inputs, measuring dimensions, or integrating with third-party libraries. Unlike state variables, changing a ref's current value doesn't trigger a re-render, making it perfect for storing values that need to persist but don't affect the UI. Common use cases include storing previous values, keeping timers or intervals, maintaining references to DOM elements, and storing any mutable value that shouldn't trigger re-renders. useRef is essential for imperative DOM operations, performance optimizations, and integrating React with non-React code. The ref object remains the same throughout the component's lifetime, providing a stable reference that can be safely used in effects and event handlers."
          },
          {
            title: "Custom Hooks - Reusable Stateful Logic",
            content: "Custom hooks are JavaScript functions that start with 'use' and can call other hooks, enabling the extraction and reuse of stateful logic between components. They provide a way to share logic without changing component hierarchy, solving the wrapper hell problem that existed with higher-order components and render props. Custom hooks can encapsulate complex state management, API calls, form handling, or any other stateful behavior that might be reused across components. They follow the same rules as built-in hooks and can use any combination of useState, useEffect, and other hooks internally. The power of custom hooks lies in their ability to abstract complex logic while maintaining the flexibility to customize behavior through parameters. They can return values, functions, or objects containing multiple pieces of state and handlers. Well-designed custom hooks make components cleaner, more focused, and easier to test. They represent a fundamental shift toward composition over inheritance in React development and are essential for building maintainable, reusable code."
          },
          {
            title: "Advanced Hook Patterns",
            content: "Advanced hook patterns enable sophisticated state management and component behavior through creative combinations of basic hooks. The useReducer with useContext pattern creates global state management similar to Redux but with less boilerplate. Compound hooks combine multiple hooks to create complex behaviors, such as combining useEffect with useState for data fetching with loading states. The useImperativeHandle hook, used with forwardRef, customizes the instance value exposed to parent components when using refs. useLayoutEffect runs synchronously after all DOM mutations but before the browser paints, useful for measurements and DOM manipulations that need to happen before the user sees changes. The useDebugValue hook provides labels for custom hooks in React DevTools, improving the debugging experience. Hook composition patterns allow building complex functionality from simple, focused hooks. Conditional hook calls can be achieved through careful design while maintaining hook call order. These patterns enable building sophisticated applications while maintaining clean, readable code."
          },
          {
            title: "Hook Best Practices and Common Pitfalls",
            content: "Following React Hook best practices ensures optimal performance and maintainable code. Always call hooks at the top level of functions, never inside loops, conditions, or nested functions to maintain consistent hook ordering. Use the ESLint plugin for React hooks to catch common mistakes and enforce best practices. When using useEffect, always include all values from component scope that are used inside the effect in the dependency array to prevent stale closures. For performance optimization, use useCallback and useMemo sparingly and only when there's a measurable performance benefit. When updating state based on previous state, use the functional form of state setters to avoid stale state issues. Create custom hooks for reusable logic but avoid over-abstracting simple operations. Use meaningful names for custom hooks that clearly indicate their purpose. Handle cleanup properly in useEffect to prevent memory leaks and race conditions. Test custom hooks in isolation using testing utilities designed for hooks. Understanding these practices and common pitfalls helps developers write robust, performant React applications that leverage hooks effectively."
          }
        ]
      }
    },
    {
      id: 5,
      title: "Python Data Analysis",
      description: "Master Python data analysis using pandas, NumPy, and matplotlib to clean, manipulate, analyze, and visualize data for insights and decision-making.",
      readTime: "45 min read",
      image: "/src/assets/articlepics/5.jpg",
      category: "Data Science",
      content: {
        introduction: "Python has become the leading language for data analysis due to its powerful libraries, readable syntax, and extensive ecosystem. Data analysis involves collecting, cleaning, transforming, and modeling data to discover useful information and support decision-making. Python's rich ecosystem of libraries like pandas, NumPy, matplotlib, and scikit-learn makes it an ideal choice for everything from simple data exploration to complex machine learning projects. This comprehensive approach to data analysis enables businesses and researchers to extract meaningful insights from raw data.",
        sections: [
          {
            title: "Introduction to Python for Data Analysis",
            content: "Python's popularity in data analysis stems from its combination of simplicity and power, making it accessible to beginners while providing advanced capabilities for experts. The language's clear syntax allows analysts to focus on solving problems rather than wrestling with complex code. Python's interpreted nature enables interactive data exploration through Jupyter notebooks, which have become the standard environment for data analysis projects. The vast ecosystem includes specialized libraries for every aspect of data work, from data manipulation with pandas to statistical analysis with scipy and machine learning with scikit-learn. Python integrates seamlessly with databases, web APIs, and other data sources, making it ideal for end-to-end data pipelines. The active community contributes continuously to the ecosystem, ensuring that new methods and best practices are quickly available. Understanding Python for data analysis opens doors to careers in data science, business intelligence, research, and analytics across virtually every industry."
          },
          {
            title: "NumPy - Numerical Computing Foundation",
            content: "NumPy forms the foundation of Python's scientific computing ecosystem, providing efficient operations on large arrays and matrices of numerical data. Its ndarray object offers significant performance improvements over Python lists for numerical computations, thanks to optimized C implementations and vectorized operations. NumPy arrays support broadcasting, allowing operations between arrays of different shapes without explicit loops, making code both faster and more readable. The library includes comprehensive mathematical functions covering trigonometry, logarithms, exponentials, and linear algebra operations. Random number generation capabilities support various probability distributions essential for statistical analysis and simulation. NumPy's memory-efficient storage and fast element access make it ideal for processing large datasets that wouldn't fit efficiently in standard Python data structures. Array indexing and slicing provide powerful ways to select and manipulate data subsets. Understanding NumPy is crucial because it underlies most other data analysis libraries, and mastering its concepts leads to more efficient and effective data analysis workflows."
          },
          {
            title: "Pandas - Data Manipulation and Analysis",
            content: "Pandas is the cornerstone of Python data analysis, providing high-level data structures and operations for manipulating structured data. The DataFrame and Series objects offer intuitive ways to work with tabular data, similar to spreadsheets or SQL tables but with much more power and flexibility. DataFrames handle mixed data types, missing values, and hierarchical indexing naturally, making real-world data analysis straightforward. Pandas excels at data input and output, supporting numerous file formats including CSV, Excel, JSON, SQL databases, and web APIs. Data cleaning capabilities include handling missing values, removing duplicates, and transforming data types. Groupby operations enable split-apply-combine workflows essential for aggregating and analyzing data by categories. Merging and joining operations allow combining data from multiple sources using database-like operations. Time series functionality provides specialized tools for working with dates, times, and temporal data. The library's integration with matplotlib enables quick data visualization directly from DataFrames. Mastering pandas is essential for any serious data analysis work in Python."
          },
          {
            title: "Data Loading and Input/Output Operations",
            content: "Efficient data loading is the first step in any data analysis project, and Python provides numerous options for accessing data from various sources. Pandas offers comprehensive file reading capabilities with functions like read_csv, read_excel, read_json, and read_sql that handle most common data formats. These functions include extensive parameters for handling different file structures, encodings, missing values, and data type specifications. Web scraping using libraries like requests and BeautifulSoup enables data collection from websites and APIs. Database connectivity through SQLAlchemy allows direct access to relational databases with the ability to execute complex queries and load results into DataFrames. For large datasets, chunked reading and iterator-based approaches prevent memory issues by processing data in manageable pieces. Cloud storage integration enables working with data stored in services like AWS S3 or Google Cloud Storage. Data export capabilities allow saving processed data in various formats for sharing or further analysis. Understanding these input/output operations is crucial for building robust data pipelines that can handle diverse data sources and formats encountered in real-world projects."
          },
          {
            title: "Data Cleaning and Preprocessing",
            content: "Data cleaning is often the most time-consuming part of data analysis, involving identifying and correcting errors, inconsistencies, and missing values in datasets. Missing data handling strategies include deletion, imputation with mean or median values, forward filling, backward filling, or more sophisticated interpolation methods depending on the data's nature and the analysis requirements. Duplicate detection and removal ensure data quality and prevent skewed analysis results. Data type conversion and validation ensure that numerical data is properly formatted and categorical data is consistently encoded. Outlier detection and treatment involve identifying extreme values that might represent errors or genuine but unusual observations requiring special handling. Text data cleaning includes standardizing case, removing special characters, handling encoding issues, and parsing dates from string formats. Data validation involves checking for logical consistency, range constraints, and referential integrity across related datasets. Regular expressions provide powerful pattern matching for complex text cleaning tasks. Establishing reproducible cleaning pipelines ensures consistent data quality across different datasets and time periods. Proper documentation of cleaning steps maintains transparency and enables others to understand and validate the preprocessing decisions."
          },
          {
            title: "Exploratory Data Analysis Techniques",
            content: "Exploratory Data Analysis is the critical process of investigating datasets to discover patterns, spot anomalies, test hypotheses, and check assumptions through statistical summaries and visualizations. Descriptive statistics including measures of central tendency, dispersion, and distribution shape provide initial insights into data characteristics. Data profiling involves examining data types, missing value patterns, unique value counts, and basic statistics for each variable. Correlation analysis reveals relationships between variables, helping identify potential predictive features and multicollinearity issues. Distribution analysis using histograms, box plots, and probability plots helps understand data spread and identify skewness or unusual patterns. Cross-tabulation and contingency tables explore relationships between categorical variables. Groupby analysis examines how metrics vary across different categories or segments. Time series exploration identifies trends, seasonality, and cyclical patterns in temporal data. Outlier analysis uses statistical methods and visualizations to identify unusual observations that might require special attention. The goal of EDA is to build intuition about the data, formulate hypotheses for deeper analysis, and ensure data quality before applying more sophisticated analytical techniques."
          },
          {
            title: "Data Visualization with Matplotlib and Seaborn",
            content: "Data visualization transforms numerical data into visual representations that make patterns, trends, and insights immediately apparent to analysts and stakeholders. Matplotlib provides the foundational plotting capabilities with fine-grained control over every aspect of chart creation, from basic line plots and scatter plots to complex multi-panel figures. Seaborn builds on matplotlib with high-level statistical plotting functions and attractive default styles that make creating publication-ready visualizations straightforward. Different chart types serve specific purposes: line plots for time series, scatter plots for relationships between continuous variables, bar charts for categorical comparisons, histograms for distributions, and box plots for comparing distributions across groups. Customization options include colors, fonts, labels, legends, and annotations that enhance clarity and visual appeal. Interactive plotting libraries like Plotly enable creating dynamic visualizations for web applications and presentations. Effective data visualization follows principles of clarity, accuracy, and efficiency, avoiding chart junk and misleading representations. Multiple visualization techniques often work together to tell a complete story about the data, supporting different aspects of the analysis and making findings accessible to diverse audiences."
          },
          {
            title: "Statistical Analysis and Hypothesis Testing",
            content: "Statistical analysis provides the mathematical foundation for drawing reliable conclusions from data and making evidence-based decisions. Descriptive statistics summarize and describe data characteristics, while inferential statistics allow generalizing findings from samples to larger populations. Hypothesis testing frameworks provide structured approaches for evaluating claims about data, including null and alternative hypotheses, significance levels, and p-values. Common tests include t-tests for comparing means, chi-square tests for categorical associations, ANOVA for comparing multiple groups, and correlation tests for measuring linear relationships. Non-parametric tests provide alternatives when data doesn't meet the assumptions of parametric tests. Confidence intervals quantify uncertainty around estimates and provide ranges of plausible values for population parameters. Effect size measures complement significance tests by indicating the practical importance of findings. Statistical power analysis helps determine appropriate sample sizes for detecting meaningful effects. Libraries like scipy.stats provide comprehensive statistical testing capabilities, while statsmodels offers more advanced econometric and statistical modeling functions. Understanding statistical concepts prevents common misinterpretations and ensures that analytical conclusions are statistically sound and practically meaningful."
          },
          {
            title: "Time Series Analysis",
            content: "Time series analysis deals with data points collected over time, requiring specialized techniques to handle temporal dependencies and extract meaningful patterns from sequential data. Time series data presents unique challenges including trend, seasonality, cyclical patterns, and autocorrelation that standard statistical methods don't address adequately. Pandas provides excellent time series functionality with datetime indexing, resampling, rolling window calculations, and lag operations. Trend analysis identifies long-term directional changes in data, while seasonal decomposition separates cyclical patterns from underlying trends and irregular fluctuations. Moving averages and exponential smoothing provide simple forecasting methods and help identify underlying patterns by reducing noise. Autocorrelation and partial autocorrelation functions reveal the degree to which current values depend on past values, informing model selection for forecasting. Stationarity testing ensures that statistical properties remain constant over time, a requirement for many time series models. Advanced techniques include ARIMA models for forecasting, state space models for complex temporal relationships, and machine learning approaches for non-linear patterns. Time series analysis is essential for forecasting sales, predicting market trends, monitoring system performance, and any application where temporal patterns provide valuable insights."
          },
          {
            title: "Advanced Analysis Techniques and Best Practices",
            content: "Advanced data analysis techniques build upon foundational skills to tackle complex analytical challenges and extract deeper insights from data. Machine learning integration using scikit-learn enables predictive modeling, classification, clustering, and dimensionality reduction within data analysis workflows. Feature engineering creates new variables from existing data to improve model performance and reveal hidden patterns. Cross-validation techniques ensure that analytical results generalize beyond the specific dataset used for analysis. A/B testing frameworks provide statistical methods for comparing different treatments or interventions. Advanced visualization techniques including dimensionality reduction plots, network graphs, and geographic visualizations reveal complex data structures. Performance optimization strategies including vectorization, parallel processing, and memory-efficient operations enable analysis of larger datasets. Version control and reproducible analysis practices ensure that analytical work can be validated, shared, and built upon by others. Documentation and code organization make complex analyses maintainable and understandable. Automated reporting and dashboard creation enable regular monitoring and stakeholder communication. These advanced techniques transform data analysis from simple descriptive statistics into comprehensive analytical solutions that drive business decisions and scientific discoveries."
          }
        ]
      }
    },
    {
      id: 6,
      title: "Docker Container Basics",
      description: "Learn Docker fundamentals including containerization concepts, image creation, container management, and deployment strategies for modern application development.",
      readTime: "40 min read",
      image: "/src/assets/articlepics/6.jpg",
      category: "DevOps",
      content: {
        introduction: "Docker has revolutionized software development and deployment by providing a lightweight, portable containerization platform that packages applications with their dependencies into isolated containers. Containerization solves the classic 'it works on my machine' problem by ensuring consistent environments across development, testing, and production. Docker containers share the host operating system kernel while maintaining process isolation, making them more efficient than traditional virtual machines. The technology enables microservices architecture, continuous integration/deployment pipelines, and scalable cloud-native applications. Understanding Docker is essential for modern software development, as it streamlines development workflows, simplifies deployment processes, and enables efficient resource utilization in both local development and production environments.",
        sections: [
          {
            title: "Introduction to Containerization and Docker",
            content: "Containerization represents a paradigm shift from traditional application deployment methods, providing lightweight virtualization at the operating system level rather than hardware level. Unlike virtual machines that require separate operating systems, containers share the host OS kernel while maintaining complete application isolation. Docker emerged as the de facto standard for containerization, simplifying container creation, management, and distribution through intuitive commands and a comprehensive ecosystem. The Docker platform consists of the Docker Engine (runtime), Docker Images (templates), Docker Containers (running instances), and Docker Hub (registry service). Containers encapsulate applications with all dependencies, libraries, and configuration files, ensuring consistent behavior across different environments. This approach eliminates environment-specific bugs, reduces deployment complexity, and enables rapid scaling. The immutable nature of containers promotes infrastructure as code practices, where environment configurations are version-controlled and reproducible. Docker's layered file system optimizes storage and network efficiency by sharing common layers across images. Understanding these fundamental concepts is crucial for leveraging Docker's full potential in modern software development workflows."
          },
          {
            title: "Docker Architecture and Components",
            content: "Docker's architecture follows a client-server model with several key components working together to provide containerization services. The Docker Daemon (dockerd) runs on the host system and manages containers, images, networks, and volumes, responding to requests from the Docker client. The Docker Client provides the command-line interface that communicates with the daemon through REST API calls, allowing users to build, run, and manage containers. Docker Images serve as read-only templates containing application code, runtime, libraries, and dependencies needed to create containers. The layered file system uses Union File Systems to efficiently stack image layers, enabling sharing and reuse of common components. Docker Registries store and distribute images, with Docker Hub serving as the default public registry while private registries support enterprise requirements. Container runtime environments provide isolation through Linux namespaces for process separation, cgroups for resource allocation, and seccomp profiles for security restrictions. Docker Networks enable communication between containers and external systems through various networking modes including bridge, host, and overlay networks. Volume management provides persistent data storage that survives container lifecycle events. Understanding these architectural components enables effective Docker utilization and troubleshooting."
          },
          {
            title: "Working with Docker Images",
            content: "Docker images form the foundation of containerization, serving as immutable templates that define container environments and applications. Images consist of multiple layers stacked using a union file system, where each layer represents a change or addition to the previous layer. The base layer typically contains a minimal operating system or runtime environment, while subsequent layers add application code, dependencies, and configuration. Image creation begins with a Dockerfile, a text file containing instructions that define how to build the image step by step. Common Dockerfile instructions include FROM for base image selection, RUN for executing commands, COPY for adding files, EXPOSE for port declarations, and CMD for default execution commands. Layer caching optimizes build performance by reusing unchanged layers, making incremental builds significantly faster. Image tagging provides versioning and identification mechanisms, enabling multiple versions of the same application to coexist. Docker Hub and other registries facilitate image sharing and distribution across teams and environments. Image inspection commands reveal layer structure, metadata, and security information. Best practices include using official base images, minimizing layer count, removing unnecessary files, and implementing multi-stage builds for smaller production images. Effective image management is crucial for maintaining secure, efficient, and maintainable containerized applications."
          },
          {
            title: "Container Lifecycle Management",
            content: "Container lifecycle management encompasses creating, running, monitoring, and maintaining containers throughout their operational lifespan. Container creation begins with running an image, which instantiates a new container with its own filesystem, networking, and process space. Runtime configuration options include environment variables, port mappings, volume mounts, resource limits, and restart policies that determine container behavior. Container states include created, running, paused, stopped, and deleted, with transitions managed through Docker commands. Process monitoring within containers involves tracking resource usage, log output, and health status to ensure optimal performance. Container networking configuration enables communication between containers and external systems through various network modes and port publishing options. Volume management provides data persistence and sharing capabilities between containers and the host system. Container updates typically involve replacing containers with new versions rather than modifying running instances, supporting immutable infrastructure principles. Cleanup operations remove stopped containers, unused images, and orphaned volumes to maintain system efficiency. Container orchestration platforms like Docker Compose manage multi-container applications with coordinated lifecycle operations. Automated restart policies ensure container availability during system reboots or failures. Understanding lifecycle management enables reliable, scalable container operations in both development and production environments."
          },
          {
            title: "Dockerfile Best Practices and Optimization",
            content: "Writing effective Dockerfiles requires understanding optimization techniques, security considerations, and maintainability principles that result in smaller, faster, and more secure images. Layer optimization involves ordering instructions to maximize cache utilization, placing frequently changing instructions last to avoid invalidating cached layers. Multi-stage builds enable using different base images for build and runtime environments, significantly reducing final image size by excluding build tools and temporary files. Base image selection impacts security, size, and functionality, with options ranging from full operating systems to minimal distributions like Alpine Linux or distroless images. Dependency management includes installing only necessary packages, using package managers efficiently, and cleaning up temporary files and caches in the same layer. Security hardening involves running containers with non-root users, using specific version tags instead of 'latest', scanning images for vulnerabilities, and minimizing attack surface through minimal base images. Build context optimization reduces build time and image size by using .dockerignore files to exclude unnecessary files and directories. Environment variable management provides configuration flexibility while maintaining security through secrets management. Health check instructions enable container monitoring and automatic recovery in orchestrated environments. Documentation through comments and labels improves maintainability and provides metadata for automation tools. These best practices result in production-ready images that are secure, efficient, and maintainable."
          },
          {
            title: "Container Networking and Communication",
            content: "Docker networking enables containers to communicate with each other, host systems, and external networks through various networking models and configurations. The default bridge network provides basic connectivity for containers on the same host, with automatic DNS resolution and port mapping capabilities. Custom bridge networks offer improved isolation, automatic DNS resolution by container name, and better security through network segmentation. Host networking mode provides maximum performance by bypassing Docker's network isolation, allowing containers to use the host's network stack directly. Overlay networks enable multi-host communication in Docker Swarm clusters, supporting distributed applications across multiple Docker hosts. Port publishing exposes container services to external networks through port mapping, enabling external access to containerized applications. Network aliases provide multiple DNS names for containers, supporting service discovery and load balancing scenarios. Container linking, though deprecated, demonstrates early approaches to container communication and service discovery. Network policies and security groups control traffic flow between containers and external networks, implementing security boundaries. Service mesh integration provides advanced networking features including traffic management, security policies, and observability for microservices architectures. Network troubleshooting involves inspecting network configurations, testing connectivity, and analyzing traffic patterns. Understanding Docker networking is essential for building distributed applications and implementing proper security boundaries in containerized environments."
          },
          {
            title: "Data Management with Volumes and Bind Mounts",
            content: "Data persistence in Docker requires understanding storage options that survive container lifecycle events and enable data sharing between containers and host systems. Docker volumes provide the preferred method for persistent data storage, managed entirely by Docker with automatic lifecycle management and cross-platform compatibility. Named volumes offer easy sharing between containers and persist independently of container lifecycles, making them ideal for database storage and application data. Anonymous volumes provide temporary storage that Docker manages automatically but removes when containers are deleted. Bind mounts directly map host filesystem paths into containers, providing real-time synchronization useful for development environments and configuration file sharing. tmpfs mounts create temporary filesystems in memory, ideal for sensitive data that shouldn't persist to disk. Volume drivers extend storage capabilities to network storage systems, cloud storage services, and specialized storage solutions. Data backup and restore strategies ensure data protection through volume snapshots, exports, and migrations between environments. Performance considerations include choosing appropriate storage drivers, optimizing I/O patterns, and understanding the performance implications of different mount types. Security aspects involve file permissions, user mapping between containers and hosts, and access control for sensitive data. Container data sharing enables microservices architectures where multiple containers access common data stores. Understanding Docker storage options is crucial for building stateful applications and maintaining data integrity in containerized environments."
          },
          {
            title: "Docker Compose for Multi-Container Applications",
            content: "Docker Compose simplifies the management of multi-container applications through declarative YAML configuration files that define services, networks, and volumes in a single, version-controlled specification. The compose file format provides a comprehensive syntax for describing complex application architectures with multiple interconnected services, dependency relationships, and shared resources. Service definitions specify container configuration including image selection, environment variables, port mappings, volume mounts, and restart policies. Network configuration creates custom networks for service communication while maintaining isolation from other applications. Volume definitions provide shared storage resources that multiple services can access for data persistence and sharing. Environment variable management supports different deployment environments through variable substitution and environment-specific files. Service scaling capabilities enable running multiple instances of services for load distribution and high availability. Dependency management ensures services start in the correct order through depends_on specifications and health checks. Override files provide environment-specific configurations without modifying the base compose file. Development workflows benefit from compose's ability to quickly spin up entire application stacks with a single command. Production considerations include security hardening, resource limits, and monitoring integration. Docker Compose serves as the foundation for more advanced orchestration platforms and provides an essential skill for modern application deployment."
          },
          {
            title: "Container Security and Best Practices",
            content: "Container security requires a comprehensive approach addressing image security, runtime protection, network isolation, and access control throughout the container lifecycle. Image security begins with using trusted base images from official repositories, regularly updating images to include security patches, and scanning images for known vulnerabilities using tools like Docker Scout or third-party scanners. Runtime security involves running containers with non-root users, implementing resource limits to prevent resource exhaustion attacks, and using read-only filesystems where possible. Secrets management protects sensitive information like passwords, API keys, and certificates through dedicated secret management systems rather than environment variables or image layers. Network security implements proper segmentation through custom networks, restricts unnecessary port exposure, and uses encrypted communication between services. Access control includes implementing least-privilege principles, using role-based access control for Docker daemon access, and securing the Docker socket. Container isolation leverages security profiles like AppArmor or SELinux to restrict container capabilities and system calls. Monitoring and logging provide visibility into container behavior, security events, and potential threats. Compliance frameworks provide guidelines for secure container deployments in regulated environments. Security scanning should be integrated into CI/CD pipelines to catch vulnerabilities early in the development process. Understanding these security aspects is essential for deploying containers safely in production environments."
          },
          {
            title: "Deployment Strategies and Production Considerations",
            content: "Production container deployment requires careful planning of deployment strategies, monitoring, scaling, and maintenance procedures that ensure reliable, performant applications. Blue-green deployment strategies minimize downtime by maintaining two identical production environments and switching traffic between them during updates. Rolling updates gradually replace old container versions with new ones, maintaining service availability while updating applications. Canary deployments test new versions with a small subset of traffic before full rollout, reducing risk of widespread issues. Container orchestration platforms like Kubernetes or Docker Swarm provide automated deployment, scaling, and management capabilities for production workloads. Health checks and readiness probes ensure containers are functioning correctly before receiving traffic and enable automatic recovery from failures. Resource management includes setting appropriate CPU and memory limits, implementing horizontal pod autoscaling, and monitoring resource utilization. Logging and monitoring strategies provide visibility into application performance, error rates, and system health through centralized logging and metrics collection. Backup and disaster recovery procedures ensure data protection and business continuity through regular backups, cross-region replication, and tested recovery procedures. Performance optimization involves tuning container resources, optimizing image sizes, and implementing caching strategies. Security hardening includes regular security updates, vulnerability scanning, and compliance monitoring. These production considerations ensure that containerized applications operate reliably and securely at scale."
          }
        ]
      }
    },
    {
      id: 7,
      title: "Machine Learning Fundamentals",
      description: "Explore machine learning concepts, algorithms, and implementation techniques using Python libraries like scikit-learn, TensorFlow, and PyTorch for predictive modeling and AI applications.",
      readTime: "50 min read",
      image: "/src/assets/articlepics/7.jpg",
      category: "Machine Learning",
      content: {
        introduction: "Machine Learning represents a transformative approach to problem-solving that enables computers to learn patterns from data without explicit programming for every scenario. This field combines statistics, computer science, and domain expertise to create systems that can make predictions, classify information, and discover insights from complex datasets. Modern machine learning powers everything from recommendation systems and image recognition to autonomous vehicles and natural language processing. The field encompasses various learning paradigms including supervised learning for prediction tasks, unsupervised learning for pattern discovery, and reinforcement learning for decision-making scenarios. Python has emerged as the dominant language for machine learning due to its extensive ecosystem of libraries like scikit-learn, TensorFlow, PyTorch, and pandas that provide powerful tools for data preprocessing, model development, and deployment. Understanding machine learning fundamentals is essential for data scientists, software engineers, and researchers who want to leverage AI technologies to solve real-world problems and drive innovation across industries.",
        sections: [
          {
            title: "Introduction to Machine Learning Concepts",
            content: "Machine Learning represents a paradigm shift from traditional programming where algorithms are explicitly coded to solve specific problems, instead enabling systems to automatically improve performance through experience with data. The fundamental premise involves feeding algorithms training data to identify patterns, relationships, and structures that can generalize to new, unseen data. This approach excels in scenarios where explicit rule-based programming is impractical or impossible, such as image recognition, natural language understanding, or complex pattern detection. Machine learning systems operate through iterative processes where models learn from examples, make predictions, receive feedback, and adjust their internal parameters to improve accuracy. The field draws from multiple disciplines including statistics for probability theory and inference, computer science for algorithmic efficiency and computational methods, and domain expertise for feature engineering and problem formulation. Success in machine learning requires understanding both the mathematical foundations and practical implementation considerations. The iterative nature of ML projects involves data collection, exploratory analysis, feature engineering, model selection, training, validation, and deployment phases. Modern applications demonstrate ML's transformative potential across industries, from healthcare diagnosis and financial fraud detection to autonomous systems and personalized recommendations. Understanding these foundational concepts provides the framework for approaching any machine learning problem systematically."
          },
          {
            title: "Types of Machine Learning and Problem Formulation",
            content: "Machine learning problems are categorized into distinct types based on the nature of available data and desired outcomes, each requiring different algorithmic approaches and evaluation strategies. Supervised learning uses labeled training data where both input features and correct outputs are provided, enabling algorithms to learn mapping functions for prediction tasks. Classification problems predict discrete categories or classes, such as email spam detection, medical diagnosis, or customer segmentation. Regression problems predict continuous numerical values like house prices, stock market trends, or temperature forecasting. Unsupervised learning discovers hidden patterns in data without labeled examples, including clustering for grouping similar data points, dimensionality reduction for data compression and visualization, and anomaly detection for identifying unusual patterns. Semi-supervised learning combines small amounts of labeled data with larger unlabeled datasets, useful when labeling is expensive or time-consuming. Reinforcement learning enables agents to learn optimal behavior through interaction with environments, receiving rewards or penalties for actions taken. This approach powers game-playing AI, robotic control systems, and recommendation engines. Problem formulation involves defining objectives, identifying available data, choosing appropriate evaluation metrics, and understanding constraints like computational resources and interpretability requirements. The choice of learning type fundamentally shapes the entire project approach, from data preparation and algorithm selection to performance evaluation and deployment strategies."
          },
          {
            title: "Data Preprocessing and Feature Engineering",
            content: "Data preprocessing transforms raw data into formats suitable for machine learning algorithms, addressing quality issues and ensuring optimal model performance through systematic cleaning and preparation procedures. Data quality assessment identifies missing values, outliers, inconsistencies, and errors that could negatively impact model training and predictions. Missing data handling strategies include deletion for small amounts of missing data, imputation using statistical measures like mean or median, or advanced techniques like multiple imputation or model-based approaches. Outlier detection and treatment involve identifying extreme values through statistical methods or domain knowledge, then deciding whether to remove, transform, or retain them based on their nature and impact. Data transformation includes normalization and standardization to ensure features have similar scales, preventing algorithms from being biased toward features with larger numerical ranges. Categorical data encoding converts text or categorical variables into numerical representations using techniques like one-hot encoding, label encoding, or target encoding. Feature engineering creates new variables from existing data to better represent underlying patterns, including polynomial features, interaction terms, binning continuous variables, or domain-specific transformations. Feature selection identifies the most relevant variables for prediction tasks, reducing dimensionality and improving model interpretability through statistical tests, correlation analysis, or model-based selection methods. Text preprocessing for natural language data involves tokenization, removing stop words, stemming or lemmatization, and vectorization techniques. Proper preprocessing is crucial for model success and often determines the difference between poor and excellent performance."
          },
          {
            title: "Supervised Learning Algorithms",
            content: "Supervised learning algorithms form the backbone of predictive modeling, learning from labeled training data to make accurate predictions on new, unseen examples across classification and regression tasks. Linear algorithms including linear regression for continuous outcomes and logistic regression for binary classification provide interpretable models with clear mathematical foundations and efficient computation. Decision trees create hierarchical rule-based models that are highly interpretable and handle both numerical and categorical features naturally, though they can suffer from overfitting without proper regularization. Ensemble methods like Random Forest combine multiple decision trees to improve accuracy and reduce overfitting through voting mechanisms, while Gradient Boosting builds models sequentially to correct previous errors. Support Vector Machines find optimal decision boundaries by maximizing margins between classes, handling non-linear relationships through kernel tricks and providing robust performance across diverse datasets. K-Nearest Neighbors makes predictions based on similarity to training examples, offering simplicity and flexibility but requiring careful consideration of distance metrics and computational efficiency. Naive Bayes applies probabilistic reasoning based on feature independence assumptions, performing exceptionally well for text classification and scenarios with limited training data. Neural networks provide universal function approximation capabilities through interconnected layers of artificial neurons, enabling complex pattern recognition but requiring larger datasets and more computational resources. Algorithm selection depends on factors including dataset size, feature types, interpretability requirements, computational constraints, and performance objectives. Understanding the strengths and limitations of each algorithm enables appropriate selection for specific problem domains."
          },
          {
            title: "Unsupervised Learning and Pattern Discovery",
            content: "Unsupervised learning extracts hidden patterns and structures from data without labeled examples, providing powerful tools for exploratory data analysis, dimensionality reduction, and automated pattern discovery. Clustering algorithms group similar data points together, with K-means being the most popular approach for creating spherical clusters by minimizing within-cluster variance. Hierarchical clustering builds tree-like structures showing relationships between data points at different granularity levels, useful for understanding data organization and creating taxonomies. DBSCAN identifies clusters of varying shapes and sizes while automatically detecting outliers, making it robust for real-world datasets with noise and irregular patterns. Dimensionality reduction techniques like Principal Component Analysis (PCA) project high-dimensional data onto lower-dimensional spaces while preserving maximum variance, enabling visualization and computational efficiency. t-SNE specializes in creating 2D or 3D visualizations that preserve local neighborhood structures, revealing complex non-linear patterns in high-dimensional data. Association rule mining discovers relationships between different items or features, commonly used in market basket analysis and recommendation systems. Anomaly detection identifies unusual patterns that deviate significantly from normal behavior, crucial for fraud detection, system monitoring, and quality control. Gaussian Mixture Models provide probabilistic clustering by modeling data as combinations of Gaussian distributions, offering soft clustering assignments and density estimation capabilities. These techniques are essential for data exploration, feature engineering, and preprocessing steps in supervised learning pipelines, often revealing insights that guide subsequent modeling decisions."
          },
          {
            title: "Model Evaluation and Validation Techniques",
            content: "Model evaluation and validation provide systematic approaches for assessing machine learning model performance, ensuring reliable predictions and preventing overfitting through rigorous testing methodologies. Cross-validation techniques like k-fold cross-validation provide robust performance estimates by training and testing models on different data subsets, reducing dependency on particular train-test splits. Stratified cross-validation maintains class distribution proportions across folds for classification problems, ensuring representative evaluation across imbalanced datasets. Performance metrics vary by problem type, with classification using accuracy, precision, recall, F1-score, and ROC-AUC, while regression employs mean squared error, mean absolute error, and R-squared values. Confusion matrices provide detailed breakdowns of classification performance, revealing specific error patterns and model strengths across different classes. Learning curves plot training and validation performance against dataset size or model complexity, helping diagnose overfitting, underfitting, and data sufficiency issues. Bias-variance tradeoff analysis helps understand model behavior, where high bias indicates underfitting and high variance suggests overfitting, guiding model selection and regularization decisions. Validation curves examine how hyperparameter changes affect performance, enabling systematic parameter tuning and model optimization. Statistical significance testing ensures that performance differences between models are not due to random variation. Hold-out validation reserves separate test sets for final model evaluation, providing unbiased performance estimates for production deployment decisions. Proper evaluation methodology is crucial for building trustworthy models that perform reliably in real-world applications."
          },
          {
            title: "Overfitting, Underfitting, and Regularization",
            content: "Understanding and managing the bias-variance tradeoff through overfitting and underfitting concepts is fundamental to building machine learning models that generalize well to new data. Overfitting occurs when models learn training data too specifically, including noise and irrelevant patterns that don't generalize to new examples, resulting in high training accuracy but poor test performance. Common causes include model complexity exceeding dataset size, insufficient training data, or lack of regularization constraints. Underfitting happens when models are too simple to capture underlying data patterns, resulting in poor performance on both training and test sets due to high bias. Regularization techniques prevent overfitting by adding penalty terms to loss functions that discourage model complexity. L1 regularization (Lasso) adds absolute value penalties that promote sparsity by driving some coefficients to zero, effectively performing feature selection. L2 regularization (Ridge) adds squared coefficient penalties that shrink parameters toward zero without eliminating them entirely, reducing model sensitivity to individual features. Elastic Net combines L1 and L2 penalties, providing balanced regularization that handles correlated features effectively. Early stopping monitors validation performance during training and halts when performance stops improving, preventing overfitting in iterative algorithms. Dropout randomly deactivates neurons during neural network training, forcing models to rely on multiple pathways and improving generalization. Cross-validation helps identify optimal regularization strength by evaluating performance across multiple data splits. Understanding these concepts enables building robust models that perform reliably on new data while avoiding common pitfalls that lead to poor generalization."
          },
          {
            title: "Introduction to Deep Learning and Neural Networks",
            content: "Deep learning represents a subset of machine learning using artificial neural networks with multiple layers to automatically learn hierarchical feature representations from raw data. Neural networks consist of interconnected nodes (neurons) organized in layers, where each connection has adjustable weights that determine the network's behavior. The fundamental building block is the perceptron, which computes weighted sums of inputs and applies activation functions to introduce non-linearity essential for learning complex patterns. Feedforward networks process information in one direction from input to output layers, suitable for standard classification and regression tasks. Backpropagation algorithm enables training by computing gradients of loss functions with respect to network parameters, allowing systematic weight updates through gradient descent optimization. Deep networks with multiple hidden layers can learn increasingly abstract representations, with early layers detecting simple features and deeper layers combining them into complex patterns. Activation functions like ReLU, sigmoid, and tanh provide non-linear transformations that enable networks to approximate complex functions. Common architectures include fully connected networks for tabular data, convolutional neural networks (CNNs) for image processing, and recurrent neural networks (RNNs) for sequential data. Modern deep learning frameworks like TensorFlow and PyTorch provide high-level APIs that simplify network construction, training, and deployment. GPU acceleration enables training large networks on massive datasets within reasonable timeframes. Deep learning has achieved breakthrough performance in computer vision, natural language processing, speech recognition, and game playing, often surpassing human-level performance on specific tasks."
          },
          {
            title: "Machine Learning Pipeline and Workflow",
            content: "Machine learning pipelines provide systematic workflows that ensure reproducible, maintainable, and scalable model development from initial data exploration through production deployment. The pipeline begins with problem definition and data collection, establishing clear objectives, success metrics, and data acquisition strategies. Exploratory data analysis follows, involving statistical summaries, visualizations, and initial pattern discovery to understand data characteristics and inform subsequent decisions. Data preprocessing includes cleaning, transformation, feature engineering, and splitting data into training, validation, and test sets while maintaining data integrity and preventing information leakage. Model development involves algorithm selection, hyperparameter tuning, and iterative refinement based on validation performance, often experimenting with multiple approaches simultaneously. Model evaluation uses rigorous testing methodologies to assess performance, interpretability, and robustness across different scenarios and edge cases. Pipeline automation tools like scikit-learn's Pipeline class ensure consistent preprocessing steps are applied to training and prediction data, preventing common errors and improving reproducibility. Version control systems track code changes, data versions, and model iterations, enabling collaboration and rollback capabilities when needed. Model deployment considerations include scalability requirements, latency constraints, monitoring strategies, and maintenance procedures for production systems. Continuous integration and deployment (CI/CD) practices automate testing, validation, and deployment processes, reducing errors and enabling rapid iteration. Documentation and code organization ensure that pipelines are maintainable, understandable, and can be extended by team members. Well-designed pipelines accelerate development cycles, improve model quality, and facilitate the transition from research prototypes to production systems."
          },
          {
            title: "Practical Applications and Industry Use Cases",
            content: "Machine learning applications span virtually every industry, transforming how organizations solve problems and create value through data-driven insights and automated decision-making systems. In healthcare, ML enables medical image analysis for cancer detection, drug discovery through molecular modeling, personalized treatment recommendations, and electronic health record analysis for clinical decision support. Financial services leverage ML for fraud detection, algorithmic trading, credit scoring, risk assessment, and regulatory compliance monitoring. E-commerce platforms use recommendation systems, price optimization, demand forecasting, customer segmentation, and personalized marketing campaigns to enhance user experience and drive revenue. Manufacturing implements predictive maintenance to prevent equipment failures, quality control through automated inspection, supply chain optimization, and production planning. Transportation benefits from route optimization, autonomous vehicle development, traffic management, and logistics coordination. Technology companies deploy ML for search engines, natural language processing, computer vision, speech recognition, and content moderation at massive scales. Marketing and advertising utilize customer lifetime value prediction, churn analysis, A/B testing, and targeted advertising optimization. Agriculture applies ML for crop monitoring, yield prediction, precision farming, and pest detection through satellite imagery and sensor data. Each application requires domain-specific considerations including data availability, regulatory requirements, interpretability needs, and performance constraints. Success factors include understanding business context, ensuring data quality, selecting appropriate algorithms, and building robust deployment infrastructure. These real-world applications demonstrate ML's transformative potential while highlighting the importance of combining technical expertise with domain knowledge to create valuable solutions."
          }
        ]
      }
    },
    {
      id: 8,
      title: "AWS Cloud Services",
      description: "Master Amazon Web Services fundamentals including compute, storage, networking, and database services for building scalable cloud applications and infrastructure.",
      readTime: "20 min read",
      image: "/src/assets/articlepics/8.jpg",
      category: "Cloud Computing",
      content: {
        introduction: "Amazon Web Services (AWS) is the world's most comprehensive and widely adopted cloud platform, offering over 200 fully featured services from data centers globally. AWS provides on-demand access to computing resources, storage, databases, networking, and analytics, enabling organizations to build sophisticated applications without significant upfront infrastructure investments. The cloud-first approach transforms how businesses operate by providing scalability, reliability, and cost-effectiveness that traditional on-premises solutions cannot match. AWS serves millions of customers including startups, enterprises, and government agencies, powering everything from simple websites to complex machine learning applications. Key benefits include pay-as-you-go pricing, global infrastructure, enterprise-grade security, and rapid deployment capabilities. Understanding AWS fundamentals is essential for modern software development, as cloud computing has become the standard for application hosting, data storage, and service delivery across industries.",
        sections: [
          {
            title: "AWS Global Infrastructure and Core Concepts",
            content: "AWS operates a massive global infrastructure consisting of Regions, Availability Zones, and Edge Locations that provide the foundation for cloud services worldwide. Regions are separate geographic areas containing multiple isolated data centers called Availability Zones, which are connected through low-latency links for high availability and fault tolerance. Each Availability Zone operates independently with its own power, cooling, and networking to prevent single points of failure. Edge Locations extend AWS services closer to end users through content delivery networks and caching services. The shared responsibility model defines security boundaries where AWS secures the infrastructure while customers secure their applications and data. Core AWS concepts include elasticity for automatic scaling, pay-as-you-go pricing for cost optimization, and service-oriented architecture enabling modular application design. The AWS Management Console provides a web-based interface for service management, while CLI and SDKs enable programmatic access. Identity and Access Management (IAM) controls user permissions and service access through fine-grained policies. Understanding these foundational concepts is crucial for effectively leveraging AWS services and building resilient cloud applications."
          },
          {
            title: "EC2 - Elastic Compute Cloud",
            content: "Amazon EC2 provides resizable compute capacity in the cloud, offering virtual servers with various configurations to meet diverse application requirements. Instance types are optimized for different use cases including general purpose, compute optimized, memory optimized, storage optimized, and accelerated computing with GPU support. Instance families like t3 for burstable performance, m5 for balanced workloads, c5 for compute-intensive tasks, and r5 for memory-intensive applications provide specialized hardware configurations. AMIs (Amazon Machine Images) serve as templates containing operating systems, applications, and configurations for launching instances. Security groups act as virtual firewalls controlling inbound and outbound traffic at the instance level. Key pairs provide secure SSH access to Linux instances and RDP access to Windows instances. Auto Scaling Groups automatically adjust instance counts based on demand, ensuring application availability while optimizing costs. Elastic Load Balancers distribute traffic across multiple instances for high availability and fault tolerance. Spot Instances offer significant cost savings by using spare AWS capacity with flexible scheduling. Reserved Instances provide capacity reservations with substantial discounts for predictable workloads. EC2 forms the foundation for most AWS applications and understanding its capabilities is essential for cloud computing success."
          },
          {
            title: "S3 - Simple Storage Service",
            content: "Amazon S3 provides object storage with industry-leading scalability, data availability, security, and performance for storing and retrieving any amount of data from anywhere. S3 organizes data into buckets, which are containers for objects with globally unique names and regional placement for latency optimization. Storage classes optimize costs and performance for different access patterns, including Standard for frequently accessed data, Infrequent Access for less frequently accessed data, Glacier for long-term archival, and Intelligent Tiering for automatic cost optimization. Versioning maintains multiple versions of objects, providing protection against accidental deletion or modification. Cross-Region Replication automatically copies objects across AWS regions for compliance and disaster recovery. Server-side encryption protects data at rest using AWS managed keys, customer managed keys, or customer provided keys. Access control includes bucket policies, IAM policies, and Access Control Lists for fine-grained permissions. S3 Transfer Acceleration uses Amazon CloudFront edge locations to speed up uploads and downloads. Event notifications trigger automated workflows when objects are created, deleted, or modified. S3 integrates with numerous AWS services and serves as the backbone for data lakes, backup solutions, content distribution, and static website hosting."
          },
          {
            title: "VPC - Virtual Private Cloud",
            content: "Amazon VPC enables provisioning of logically isolated sections of AWS cloud where resources can be launched in a virtual network with complete control over networking configuration. Subnets divide VPC IP address ranges into smaller segments, with public subnets having internet access through Internet Gateways and private subnets remaining isolated or accessing internet through NAT Gateways. Route tables control traffic routing between subnets, internet gateways, and other network resources. Security Groups provide stateful firewall rules at the instance level, while Network ACLs offer stateless filtering at the subnet level. VPC Peering connects multiple VPCs for resource sharing and communication across different networks or AWS accounts. VPN connections establish secure tunnels between on-premises networks and VPCs for hybrid cloud architectures. Direct Connect provides dedicated network connections from on-premises to AWS for consistent performance and reduced bandwidth costs. Elastic IP addresses provide static IPv4 addresses that can be associated with instances or load balancers. Flow logs capture network traffic information for monitoring, troubleshooting, and security analysis. Understanding VPC networking is crucial for designing secure, scalable cloud architectures that meet compliance and performance requirements."
          },
          {
            title: "RDS - Relational Database Service",
            content: "Amazon RDS simplifies database administration by providing managed relational database services with automated backups, software patching, monitoring, and scaling capabilities. Supported database engines include MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Amazon Aurora, each optimized for different use cases and performance requirements. Multi-AZ deployments provide high availability through synchronous replication to standby instances in different Availability Zones with automatic failover. Read Replicas improve read performance by creating read-only copies of databases that can be promoted to standalone instances if needed. Automated backups create point-in-time recovery snapshots with configurable retention periods, while manual snapshots provide long-term backup solutions. Database parameter groups enable fine-tuning database configuration without direct server access. Security features include encryption at rest and in transit, VPC isolation, and integration with IAM for access control. Performance monitoring through CloudWatch metrics and Performance Insights helps identify bottlenecks and optimize query performance. RDS Proxy provides connection pooling and improved application scalability for serverless and highly concurrent applications. Aurora offers cloud-native performance with up to 5x MySQL and 3x PostgreSQL performance, automatic scaling, and global database capabilities for multi-region applications."
          },
          {
            title: "Lambda - Serverless Computing",
            content: "AWS Lambda enables running code without provisioning or managing servers, automatically scaling applications by running code in response to triggers with millisecond metering and pay-per-request pricing. Lambda functions execute in secure, isolated runtime environments supporting multiple programming languages including Python, Node.js, Java, C#, Go, and Ruby. Event-driven architecture allows Lambda functions to respond to triggers from S3 uploads, DynamoDB changes, API Gateway requests, CloudWatch events, and other AWS services. Function configuration includes memory allocation, timeout settings, environment variables, and execution roles that determine AWS service permissions. Layers provide shared code, libraries, and dependencies that can be reused across multiple functions, reducing deployment package sizes and improving maintainability. Versions and aliases enable safe deployment strategies including blue-green deployments and gradual traffic shifting. Cold starts occur when functions haven't been invoked recently, requiring initialization time that can be minimized through provisioned concurrency. Lambda integrates seamlessly with other AWS services for building serverless applications including API Gateway for HTTP endpoints, Step Functions for workflow orchestration, and EventBridge for event routing. Cost optimization strategies include right-sizing memory allocation, optimizing function duration, and using provisioned concurrency judiciously. Serverless architecture with Lambda reduces operational overhead while providing automatic scaling and high availability."
          },
          {
            title: "IAM - Identity and Access Management",
            content: "AWS Identity and Access Management provides secure control over access to AWS services and resources through users, groups, roles, and policies that enforce the principle of least privilege. IAM users represent individual people or applications that need AWS access, while groups simplify permission management by organizing users with similar access requirements. Roles enable secure cross-service communication and temporary access delegation without sharing long-term credentials. Policies define permissions using JSON documents that specify allowed or denied actions on specific resources under certain conditions. AWS managed policies provide pre-built permissions for common use cases, while customer managed policies enable custom access control requirements. Multi-Factor Authentication adds security layers requiring additional verification beyond passwords. Access keys provide programmatic access to AWS APIs and CLI tools with rotation capabilities for security best practices. IAM Access Analyzer helps identify resources shared with external entities and suggests policy improvements. Service Control Policies at the organization level provide guardrails for account-level permissions. Cross-account access enables secure resource sharing between different AWS accounts through role assumption. Identity providers integration supports SAML and OpenID Connect for federated access from existing identity systems. Proper IAM configuration is fundamental to AWS security and compliance requirements."
          },
          {
            title: "API Gateway and Application Integration",
            content: "Amazon API Gateway provides fully managed service for creating, publishing, maintaining, monitoring, and securing REST and WebSocket APIs at scale. API Gateway handles traffic management, authorization, access control, monitoring, and API version management for backend services including Lambda functions, EC2 instances, and external web services. Request and response transformations enable data format conversion, header manipulation, and request routing based on content or parameters. Authentication and authorization options include IAM roles, Cognito user pools, Lambda authorizers, and API keys for different security requirements. Throttling controls protect backend services from traffic spikes by limiting request rates at the API or client level. Caching improves performance and reduces backend load by storing frequently requested responses at edge locations. Stage management enables multiple API versions for development, testing, and production environments with independent configurations. CloudWatch integration provides detailed metrics, logging, and alerting for API performance monitoring. CORS configuration enables cross-origin requests for web applications consuming APIs from different domains. WebSocket APIs support real-time bidirectional communication for chat applications, live updates, and collaborative tools. API Gateway integrates with other AWS services including Step Functions for workflow orchestration, SQS for message queuing, and SNS for pub/sub messaging patterns, enabling comprehensive application integration solutions."
          },
          {
            title: "CloudFormation and Infrastructure as Code",
            content: "AWS CloudFormation enables infrastructure as code by providing declarative templates for provisioning and managing AWS resources in a predictable and repeatable manner. CloudFormation templates written in JSON or YAML describe the desired state of infrastructure including resources, properties, dependencies, and outputs. Stacks represent collections of related resources managed as single units with create, update, and delete operations that handle dependencies automatically. Change sets preview infrastructure modifications before execution, enabling safe updates with rollback capabilities if errors occur. Parameters enable template reusability by accepting input values at stack creation time, while outputs provide information about created resources for use by other stacks or applications. Nested stacks enable modular template organization by referencing other templates as resources, promoting reusability and maintainability. Stack sets manage stacks across multiple AWS accounts and regions from a central location, useful for enterprise deployments and compliance requirements. Drift detection identifies differences between actual resource configurations and template definitions, helping maintain infrastructure consistency. Custom resources extend CloudFormation capabilities by integrating with external services or custom logic through Lambda functions. Template validation ensures syntax correctness and resource compatibility before deployment. CloudFormation integrates with CI/CD pipelines for automated infrastructure deployment and enables version control of infrastructure changes, making it essential for DevOps practices and scalable cloud architectures."
          },
          {
            title: "Monitoring, Security, and Best Practices",
            content: "AWS provides comprehensive monitoring and security services that enable building robust, secure, and well-monitored cloud applications following industry best practices. Amazon CloudWatch collects and monitors metrics, logs, and events from AWS services and applications, providing dashboards, alarms, and automated responses to operational issues. CloudTrail logs all API calls and user actions across AWS accounts for security auditing, compliance monitoring, and troubleshooting. AWS Config tracks resource configurations and compliance with organizational policies, providing configuration history and change notifications. Security best practices include implementing defense in depth with multiple security layers, encrypting data in transit and at rest, regularly rotating credentials, and following the principle of least privilege for access control. Cost optimization strategies involve right-sizing resources, using appropriate storage classes, implementing auto-scaling, leveraging spot instances, and monitoring usage patterns through Cost Explorer and budgets. Well-Architected Framework provides guidance across five pillars: operational excellence, security, reliability, performance efficiency, and cost optimization. Tagging strategies enable resource organization, cost allocation, and automated management policies. Backup and disaster recovery planning ensures business continuity through automated backups, cross-region replication, and tested recovery procedures. These practices ensure AWS environments are secure, cost-effective, and operationally excellent while meeting compliance and governance requirements."
          }
        ]
      }
    },
    {
      id: 9,
      title: "SQL Database Design",
      description: "Learn to design robust, scalable, and efficient relational databases using SQL, covering normalization, indexing, constraints, and best practices for modern applications.",
      readTime: "20 min read",
      image: "/src/assets/articlepics/9.jpg",
      category: "Database Systems",
      content: {
        introduction: "SQL Database Design is the process of structuring a relational database to ensure data integrity, efficiency, scalability, and ease of maintenance. Good design reduces redundancy, prevents anomalies, and supports reliable transaction processing. Core principles include understanding data relationships, applying normalization techniques, defining primary and foreign keys, enforcing data integrity through constraints, and optimizing queries with indexing strategies. Well-designed databases form the foundation of reliable applications by ensuring consistent data, efficient access, and adaptability to changing requirements. Whether building a small app or a large enterprise system, mastering SQL database design is essential for any developer, database administrator, or architect.",
        sections: [
          {
            title: "Relational Model and Data Modeling",
            content: "The relational model organizes data into tables (relations) consisting of rows (tuples) and columns (attributes), with each table representing an entity or relationship in the domain. Data modeling begins with requirements gathering and conceptual design using Entity-Relationship (ER) diagrams that identify entities, relationships, and attributes. Logical modeling maps ER diagrams to relational schemas, defining tables and their keys. Relationships are represented through foreign keys, which enforce referential integrity between tables. Proper data modeling ensures a clear, accurate representation of the domain and reduces design flaws."
          },
          {
            title: "Normalization and Normal Forms",
            content: "Normalization organizes data to minimize redundancy and dependency issues by decomposing tables according to a series of normal forms. First Normal Form (1NF) eliminates repeating groups; Second Normal Form (2NF) removes partial dependencies; Third Normal Form (3NF) eliminates transitive dependencies; Boyce-Codd Normal Form (BCNF) further refines design for functional dependencies. Denormalization may be applied selectively for performance in read-heavy systems. Balancing normalization and performance is key to effective database design."
          },
          {
            title: "Primary and Foreign Keys",
            content: "Primary keys uniquely identify each record in a table, ensuring entity integrity by preventing duplicate rows. Foreign keys establish relationships between tables by referencing primary keys in other tables, maintaining referential integrity and enabling join operations. Choosing meaningful, stable primary keys—often surrogate keys like auto-incremented IDs—avoids complications from natural keys that may change over time. Composite keys, consisting of multiple columns, are useful when no single attribute can serve as a unique identifier."
          },
          {
            title: "Constraints and Data Integrity",
            content: "Constraints enforce data integrity and business rules at the database level. Common constraints include UNIQUE (enforcing unique values), NOT NULL (preventing missing data), CHECK (validating column values against expressions), and DEFAULT (assigning default values). Constraints ensure consistent, valid data and reduce the need for validation in application code. Referential constraints defined by foreign keys prevent orphan records by enforcing valid relationships between parent and child tables."
          },
          {
            title: "Indexing for Performance",
            content: "Indexes improve query performance by allowing faster data retrieval based on key columns. B-tree indexes are commonly used for equality and range queries, while bitmap indexes suit low-cardinality columns in data warehouses. Composite indexes cover multiple columns, supporting complex queries efficiently. Covering indexes include all columns needed by a query, avoiding table lookups. Proper indexing balances performance improvements against increased storage and maintenance overhead during data modifications."
          },
          {
            title: "Schema Design Best Practices",
            content: "Best practices include designing schemas based on clear business requirements, avoiding over-normalization that complicates queries, and anticipating future data growth. Naming conventions should be consistent and descriptive, using lowercase or snake_case for identifiers. Avoid reserved keywords and special characters in table or column names. Use schema diagrams for documentation and communication. Plan for partitioning or sharding strategies for large-scale databases. Regularly review and refactor schema design as application requirements evolve."
          },
          {
            title: "Query Optimization Considerations",
            content: "Database design directly affects query performance. Denormalization, indexing strategies, materialized views, and proper schema organization can all reduce query complexity and execution time. Analyze execution plans to identify bottlenecks and optimize joins, filtering, and aggregations. Avoid SELECT * in production queries to limit data transfer. Normalize data where it benefits consistency and denormalize where it improves read-heavy performance, always guided by query patterns."
          },
          {
            title: "Security and Compliance in Database Design",
            content: "Design databases with security in mind, including access controls, role-based permissions, and encryption for sensitive data at rest and in transit. Data masking and tokenization techniques help protect personally identifiable information (PII). Compliance requirements such as GDPR, HIPAA, or PCI DSS may influence schema design decisions, including data retention policies and audit logging. Always apply the principle of least privilege when granting database access."
          },
          {
            title: "Backup, Recovery, and Maintenance",
            content: "Design considerations should include backup strategies such as full, incremental, and point-in-time recovery options. Plan maintenance tasks like index rebuilding, statistics updates, and archiving old data. Use database monitoring tools to track performance, errors, and growth trends. Document schema changes and version control SQL scripts for reliable deployment and rollback procedures. Proper planning ensures database resilience, high availability, and quick recovery in case of failures."
          }
        ]
      }
    },
    {
      id: 10,
      title: "Cybersecurity Best Practices",
      description: "Understand the essential cybersecurity principles, techniques, and tools to protect systems, networks, and data from threats, vulnerabilities, and breaches.",
      readTime: "30 min read",
      image: "/src/assets/articlepics/10.jpg",
      category: "Cybersecurity",
      content: {
        introduction: "Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage. In today’s interconnected world, where cyber threats are becoming more sophisticated and frequent, implementing strong cybersecurity best practices is critical for individuals, businesses, and governments alike. From securing personal devices to enforcing organizational policies and safeguarding cloud environments, cybersecurity covers a wide range of strategies and technologies. Key areas include risk assessment, threat prevention, access control, encryption, endpoint protection, incident response, and user awareness. Adopting a proactive and layered security approach minimizes the risk of breaches and supports compliance with legal and regulatory requirements. This guide introduces fundamental cybersecurity best practices that form the foundation of any effective security posture.",
        sections: [
          {
            title: "Understanding Threats and Attack Vectors",
            content: "Cyber threats come in many forms, including malware, ransomware, phishing, social engineering, denial-of-service (DoS) attacks, insider threats, and advanced persistent threats (APTs). Attack vectors refer to the paths or means through which attackers gain unauthorized access, such as email attachments, unsecured networks, outdated software, or misconfigured systems. Understanding common threats and how they operate helps organizations build stronger defenses and respond effectively to incidents."
          },
          {
            title: "Network Security Fundamentals",
            content: "Network security involves protecting the integrity, confidentiality, and availability of data transmitted across networks. Key measures include using firewalls to filter traffic, deploying intrusion detection and prevention systems (IDS/IPS), segmenting networks with VLANs, and securing wireless networks with strong encryption (WPA3). Virtual Private Networks (VPNs) are used to encrypt remote connections, especially for remote workers. Regular vulnerability scans and network monitoring tools help identify and mitigate threats in real-time."
          },
          {
            title: "Strong Authentication and Access Control",
            content: "Access control ensures that only authorized users can access systems and data. Implement the principle of least privilege (PoLP) by granting users the minimum level of access needed. Use multi-factor authentication (MFA) to add an additional layer of security beyond passwords. Role-based access control (RBAC) and attribute-based access control (ABAC) provide scalable and flexible ways to manage permissions. Password policies should enforce complexity, rotation, and storage best practices using password managers or vaults."
          },
          {
            title: "Endpoint Security and Device Hardening",
            content: "Endpoints such as laptops, desktops, and mobile devices are often the first targets for attackers. Ensure all devices use updated antivirus and anti-malware software, enable operating system firewalls, and apply security patches regularly. Disable unused ports and services, enforce device encryption, and use mobile device management (MDM) solutions in enterprise environments. Device hardening reduces the attack surface and strengthens defense against exploits."
          },
          {
            title: "Data Protection and Encryption",
            content: "Protecting data both at rest and in transit is essential. Use encryption standards like AES-256 for data storage and TLS for secure communication over networks. Implement secure backup solutions and data loss prevention (DLP) tools to prevent accidental or malicious data exfiltration. Classify data based on sensitivity and apply controls accordingly. Secure disposal of data and hardware is also critical to prevent information leakage."
          },
          {
            title: "Security Awareness and Training",
            content: "Human error remains one of the biggest cybersecurity risks. Conduct regular training sessions to educate users about phishing scams, social engineering, safe browsing practices, and reporting suspicious activities. Simulated phishing campaigns can reinforce learning. A security-aware culture empowers employees to act as a strong line of defense and reduces the likelihood of successful attacks due to negligence or ignorance."
          },
          {
            title: "Application and Web Security",
            content: "Secure application development follows the Secure Software Development Lifecycle (SSDLC), incorporating security checks from planning to deployment. Common vulnerabilities like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF) should be mitigated using input validation, secure coding practices, and security headers. Web Application Firewalls (WAFs) help protect online applications from malicious traffic. Regular code reviews, static analysis tools, and penetration testing help identify and fix security flaws."
          },
          {
            title: "Cloud Security Considerations",
            content: "Cloud environments introduce new security challenges. Apply shared responsibility models, where cloud providers secure infrastructure and customers secure data and configurations. Use Identity and Access Management (IAM) roles, security groups, and key management services (KMS) to protect cloud resources. Monitor cloud activity with tools like AWS CloudTrail, Azure Monitor, or GCP Audit Logs. Leverage cloud-native security services and encryption to secure workloads, storage, and networks."
          },
          {
            title: "Incident Response and Recovery Planning",
            content: "An effective incident response plan outlines the steps to detect, contain, and recover from security incidents. It includes roles, communication protocols, evidence preservation, and root cause analysis. Regular drills and tabletop exercises ensure teams are prepared. Recovery planning involves backups, disaster recovery sites, and system restoration processes to minimize downtime and data loss. Document lessons learned to improve future resilience."
          },
          {
            title: "Compliance, Auditing, and Governance",
            content: "Organizations must comply with security standards and regulations such as GDPR, HIPAA, PCI DSS, and ISO/IEC 27001. Implement audit logs, access tracking, and reporting mechanisms to support transparency and accountability. Establish a governance framework that defines security policies, roles, and responsibilities. Periodic audits and assessments help maintain compliance and continuously improve the security posture."
          }
        ]
      }
    },
    {
      id: 11,
      title: "Git Version Control",
      description: "Master the fundamentals of Git, a distributed version control system used to track changes in source code, collaborate on projects, and manage codebase history effectively.",
      readTime: "20 min read",
      image: "/src/assets/articlepics/11.jpg",
      category: "Software Engineering",
      content: {
        introduction: "Git is a distributed version control system that enables developers to track code changes, collaborate efficiently, and manage project history. Originally created by Linus Torvalds for Linux kernel development, Git has become the standard for source code management in both open-source and enterprise environments. With Git, every contributor has a full copy of the repository, allowing offline work and resilient backups. Key features include branching and merging, commit history, remote repositories, and collaboration workflows like GitFlow. Git powers platforms like GitHub, GitLab, and Bitbucket, serving as the foundation for modern DevOps practices, continuous integration, and open-source collaboration. Understanding Git is essential for managing code effectively, avoiding conflicts, and ensuring project integrity.",
        sections: [
          {
            title: "How Git Works: Basics and Architecture",
            content: "Git operates as a distributed system, meaning each clone of a repository is a full copy including code, history, and metadata. Git tracks changes through snapshots (commits), not file differences, ensuring efficient storage and retrieval. The three main areas are the working directory (where files are edited), the staging area (index), and the repository (where commits are saved). Git uses SHA-1 hashes to uniquely identify each commit, ensuring integrity. The architecture promotes collaboration, fault tolerance, and fast performance even on large projects."
          },
          {
            title: "Installing and Configuring Git",
            content: "To get started, install Git from the official website or package manager. After installation, configure user information using `git config --global user.name` and `user.email`. Git supports both global and project-level settings for customization. You can also set up a preferred text editor and line ending preferences. SSH keys can be configured for secure access to remote repositories like GitHub or GitLab."
          },
          {
            title: "Basic Git Commands",
            content: "Core Git commands include `git init` to initialize a repository, `git clone` to copy a remote repo, `git add` to stage changes, and `git commit` to save them. Use `git status` to check current state, and `git log` to view commit history. `git diff` shows changes between states, while `git reset` and `git checkout` allow you to undo changes or switch branches. These commands form the foundation of daily Git workflows."
          },
          {
            title: "Branching and Merging",
            content: "Git’s powerful branching model allows multiple development lines. Use `git branch` to create new branches and `git checkout` or `git switch` to navigate between them. Merging combines changes from different branches, with `git merge` for fast-forward or three-way merges. Conflicts may arise during merges and require manual resolution. Effective use of branches facilitates parallel development, experimentation, and clean collaboration without disrupting the main codebase."
          },
          {
            title: "Working with Remote Repositories",
            content: "Remote repositories enable collaboration across teams. Add a remote using `git remote add origin <url>`, and use `git push` to upload changes, or `git pull`/`git fetch` to retrieve updates. Git supports HTTPS and SSH protocols. Keeping your local and remote repositories synchronized is critical in team environments. Services like GitHub also support pull requests (PRs), which enable code review and discussion before merging changes."
          },
          {
            title: "Undoing Changes and History Rewriting",
            content: "Git offers multiple ways to undo changes. Use `git restore` for working directory changes, `git reset` to unstage or remove commits, and `git revert` to undo commits while preserving history. Rewriting history with `git rebase` or `git commit --amend` should be done cautiously, especially in shared branches. Understanding the difference between these options helps maintain a clean, understandable commit history."
          },
          {
            title: "Git Workflows and Collaboration Models",
            content: "Different workflows suit different team sizes and project types. Centralized workflow mimics traditional version control, while feature branching and GitFlow enable structured development with separate branches for features, releases, and hotfixes. Fork-and-pull request workflows are popular in open-source projects, where contributors fork a repo, make changes, and submit a pull request for review. Choosing the right workflow improves collaboration, code quality, and release management."
          },
          {
            title: "Stashing, Tags, and Submodules",
            content: "Use `git stash` to temporarily save changes that aren’t ready to commit, allowing quick context switching. Tags mark specific commits (e.g., release versions) and can be lightweight or annotated. Submodules enable the inclusion of one Git repository inside another, useful for managing dependencies or third-party code. While powerful, submodules require careful management to avoid complications."
          },
          {
            title: "Using Git with GitHub",
            content: "GitHub enhances Git with a web-based platform for hosting, sharing, and collaborating on repositories. Key features include pull requests, issues, wikis, GitHub Actions for CI/CD, and project boards for task tracking. Contributions are tracked via commits and branches, and repositories can be public or private. GitHub also supports markdown for documentation and .gitignore templates to filter files. Understanding GitHub workflows is essential for team-based development and open-source contributions."
          }
        ]
      }
    },
    {
      id: 12,
      title: "Neural Networks Introduction",
      description: "Understand the fundamentals of neural networks, including architecture, activation functions, and how these models learn from data.",
      readTime: "30 min read",
      image: "/src/assets/articlepics/12.jpg",
      category: "Artificial Intelligence",
      content: {
        introduction: "Neural networks are a foundational concept in modern artificial intelligence and machine learning. Inspired by the structure of the human brain, they consist of interconnected layers of nodes (neurons) that process and learn patterns from data. Neural networks can approximate complex functions, making them suitable for tasks like image classification, speech recognition, and language translation. Understanding their components, training process, and architecture is key to grasping how AI systems make intelligent decisions.",
        sections: [
          {
            title: "Understanding Neurons and Layers",
            content: "At the core of a neural network is the artificial neuron, which receives input, multiplies it by weights, adds a bias, and passes the result through an activation function. These neurons are organized into layers: the input layer, hidden layers, and the output layer. Each layer transforms the data and passes it forward, allowing the network to learn abstract representations at each level."
          },
          {
            title: "Activation Functions",
            content: "Activation functions introduce non-linearity into neural networks, enabling them to model complex patterns. Common activation functions include ReLU (Rectified Linear Unit), Sigmoid, and Tanh. ReLU is widely used due to its simplicity and effectiveness in deep networks. Activation functions are crucial for a network's ability to learn non-trivial mappings from inputs to outputs."
          },
          {
            title: "Forward Propagation",
            content: "Forward propagation is the process by which input data is passed through the network layer by layer to generate an output. Each neuron computes a weighted sum of its inputs, applies the activation function, and passes the output to the next layer. This chain continues until the final prediction is made at the output layer."
          },
          {
            title: "Loss Functions and Optimization",
            content: "To measure how far off the network's prediction is from the actual result, a loss function is used. Common loss functions include Mean Squared Error for regression and Cross-Entropy for classification. During training, the network seeks to minimize this loss using optimization algorithms like Stochastic Gradient Descent (SGD), Adam, or RMSProp."
          },
          {
            title: "Backpropagation and Training",
            content: "Backpropagation is the key algorithm used to train neural networks. It calculates the gradient of the loss function with respect to each weight by applying the chain rule in reverse through the network. These gradients are then used by the optimizer to update the weights, gradually improving the model's performance on the training data."
          },
          {
            title: "Overfitting and Regularization",
            content: "Neural networks can easily overfit to training data, especially when they are deep or complex. Techniques like L1/L2 regularization, dropout, and early stopping help prevent overfitting by reducing model complexity or halting training once performance degrades on validation data."
          },
          {
            title: "Applications of Neural Networks",
            content: "Neural networks are used in a wide range of domains: convolutional neural networks (CNNs) for image and video processing, recurrent neural networks (RNNs) for sequence prediction and natural language processing, and multi-layer perceptrons (MLPs) for general-purpose classification and regression. Their flexibility and power make them indispensable in modern AI."
          },
          {
            title: "Tools and Frameworks",
            content: "Popular libraries for building neural networks include TensorFlow, PyTorch, and Keras. These frameworks provide high-level APIs to define and train models efficiently, with built-in support for GPU acceleration and automatic differentiation. They are widely used in both research and industry for deep learning tasks."
          }
        ]
      }
    }
          
    
  ];

  const article = articles.find(a => a.id === parseInt(id));

  // Mapping between articles and their corresponding quizzes
  const articleToQuizMapping = {
    1: 1, 
    2: 2, 
    3: 3, 
    4: 4, 
    5: 5, 
    6: 6,  
    7: 7, 
    8: 8, 
    9: 9, 
    10: 10, 
    11: 11, 
    12: 12 
  };

  const handleTakeQuiz = () => {
    const quizId = articleToQuizMapping[article.id];
    if (quizId) {
      navigate(`/quiz/${quizId}`);
    } else {
      // If no specific quiz exists, navigate to quizzes page
      navigate('/quizzes');
    }
  };

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

        {/* Action Buttons */}
        <div className="article-actions">
          <div className="article-actions-buttons">
            <button onClick={() => navigate(-1)} className="back-button">
              ← Back to Articles
            </button>
            <button onClick={handleTakeQuiz} className="take-quiz-button">
              🧠 Take Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail; 