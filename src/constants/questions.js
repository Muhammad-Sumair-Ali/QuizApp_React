export const javascriptQues = [
  {
    question:
      "What is the correct syntax to output 'Hello World' in JavaScript?",
    answerOptions: [
      { text: "print('Hello World');", isCorrect: false },
      { text: "console.log('Hello World');", isCorrect: true },
      { text: "echo('Hello World');", isCorrect: false },
      { text: "document.write('Hello World');", isCorrect: false },
    ],
  },
  {
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    answerOptions: [
      { text: "==", isCorrect: false },
      { text: "===", isCorrect: false },
      { text: "=", isCorrect: true },
      { text: ":", isCorrect: false },
    ],
  },
  {
    question: "What is the result of `typeof null` in JavaScript?",
    answerOptions: [
      { text: "null", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "object", isCorrect: true },
      { text: "number", isCorrect: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answerOptions: [
      { text: "function myFunction() {}", isCorrect: true },
      { text: "function:myFunction() {}", isCorrect: false },
      { text: "create myFunction() {}", isCorrect: false },
      { text: "function = myFunction() {}", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the `const` keyword in JavaScript?",
    answerOptions: [
      {
        text: "To declare a variable that can be reassigned",
        isCorrect: false,
      },
      { text: "To declare a function", isCorrect: false },
      {
        text: "To declare a constant variable that cannot be reassigned",
        isCorrect: true,
      },
      { text: "To declare a class", isCorrect: false },
    ],
  },
  {
    question: "How do you comment a single line in JavaScript?",
    answerOptions: [
      { text: "<!-- This is a comment -->", isCorrect: false },
      { text: " // This is a comment", isCorrect: true },
      { text: "# This is a comment", isCorrect: false },
      { text: "/* This is a comment */", isCorrect: false },
    ],
  },
  {
    question: "What does `NaN` stand for in JavaScript?",
    answerOptions: [
      { text: "Name and Number", isCorrect: false },
      { text: "Null and Nothing", isCorrect: false },
      { text: "Not a Number", isCorrect: true },
      { text: "Not a Node", isCorrect: false },
    ],
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answerOptions: [
      { text: "variable myVariable;", isCorrect: false },
      { text: "declare myVariable;", isCorrect: false },
      { text: "var myVariable;", isCorrect: true },
      { text: "myVariable := ;", isCorrect: false },
    ],
  },
  {
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    answerOptions: [
      { text: "JSON.stringify()", isCorrect: false },
      { text: "JSON.parse()", isCorrect: true },
      { text: "JSON.convert()", isCorrect: false },
      { text: "JSON.object()", isCorrect: false },
    ],
  },
  {
    question:
      "What will the following code output: `console.log(0.1 + 0.2 === 0.3);`?",
    answerOptions: [
      { text: "false", isCorrect: true },
      { text: "true", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "NaN", isCorrect: false },
    ],
  },
  {
    question: "What is the output of `typeof []` in JavaScript?",
    answerOptions: [
      { text: "Array", isCorrect: false },
      { text: "list", isCorrect: false },
      { text: "object", isCorrect: true },
      { text: "undefined", isCorrect: false },
    ],
  },
  {
    question: "How do you check if a variable is an array in JavaScript?",
    answerOptions: [
      { text: "variable instanceof Array", isCorrect: false },
      { text: "variable.constructor === Array", isCorrect: false },
      { text: "Array.isArray(variable)", isCorrect: true },
      { text: "typeof variable === 'array'", isCorrect: false },
    ],
  },
  {
    question:
      "What will the following code output: `console.log('5' + 1 - 1);`?",
    answerOptions: [
      { text: "5", isCorrect: false },
      { text: "NaN", isCorrect: false },
      { text: "51", isCorrect: true },
      { text: "1", isCorrect: false },
    ],
  },
  {
    question:
      "What will be the value of `x` after the following code executes?\n\n```javascript\nlet x = 10;\nfunction addFive(a) {\n  return a + 5;\n}\nx = addFive(x);\n```",
    answerOptions: [
      { text: "10", isCorrect: false },
      { text: "15", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "20", isCorrect: false },
    ],
  },
  {
    question: "Which construct do we use with errors?",
    answerOptions: [
      { text: " do....while", isCorrect: false },
      { text: "if....else", isCorrect: false },
      { text: "try....catch....finally", isCorrect: true },
      { text: "switch....case....default", isCorrect: false },
    ],
  },
];

export const htmlQues = [
  {
    question: "What is the correct HTML element for inserting a line break?",
    answerOptions: [
      { text: "<break>", isCorrect: false },
      { text: "<br>", isCorrect: true },
      { text: "<lb>", isCorrect: false },
      { text: "<newline>", isCorrect: false },
    ],
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answerOptions: [
      { text: "alt", isCorrect: true },
      { text: "title", isCorrect: false },
      { text: "src", isCorrect: false },
      { text: "description", isCorrect: false },
    ],
  },
  {
    question: "What does the `<head>` element contain in an HTML document?",
    answerOptions: [
      { text: "Main content of the page", isCorrect: false },
      { text: "Navigation links", isCorrect: false },
      { text: "Metadata, links to CSS, scripts", isCorrect: true },
      { text: "Footer information", isCorrect: false },
    ],
  },
  {
    question:
      "How do you select an element with the class name `highlight` in CSS?",
    answerOptions: [
      { text: "highlight", isCorrect: false },
      { text: "#highlight", isCorrect: false },
      { text: ".highlight", isCorrect: true },
      { text: "*highlight", isCorrect: false },
    ],
  },
  {
    question: "What is the default value of the `position` property in CSS?",
    answerOptions: [
      { text: "relative", isCorrect: false },
      { text: "static", isCorrect: true },
      { text: "absolute", isCorrect: false },
      { text: "fixed", isCorrect: false },
    ],
  },
  {
    question: "How can you center a block element horizontally in CSS?",
    answerOptions: [
      { text: "margin: 0 auto;", isCorrect: true },
      { text: "text-align: center;", isCorrect: false },
      { text: "position: center;", isCorrect: false },
      { text: "padding: 0 auto;", isCorrect: false },
    ],
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    answerOptions: [
      { text: "<h6>", isCorrect: false },
      { text: "<h1>", isCorrect: true },
      { text: "<heading>", isCorrect: false },
      { text: "<head>", isCorrect: false },
    ],
  },
  {
    question:
      "Which attribute is used to specify a unique identifier for an HTML element?",
    answerOptions: [
      { text: "class", isCorrect: false },
      { text: "name", isCorrect: false },
      { text: "id", isCorrect: true },
      { text: "unique", isCorrect: false },
    ],
  },
  {
    question: "How do you create a hyperlink in HTML?",
    answerOptions: [
      { text: "<a href='url'>Link text</a>", isCorrect: true },
      { text: "<link src='url'>Link text</link>", isCorrect: false },
      { text: "<a url='url'>Link text</a>", isCorrect: false },
      { text: "<a src='url'>Link text</a>", isCorrect: false },
    ],
  },
  {
    question: "Which HTML element is used to define a table row?",
    answerOptions: [
      { text: "<td>", isCorrect: false },
      { text: "<table>", isCorrect: false },
      { text: "<tr>", isCorrect: true },
      { text: "<row>", isCorrect: false },
    ],
  },
  {
    question: "How do you add a background color in HTML?",
    answerOptions: [
      {
        text: "Use the `style` attribute with `background-color` property",
        isCorrect: true,
      },
      { text: "Use the `bgcolor` attribute", isCorrect: false },
      { text: "Use the `background` attribute", isCorrect: false },
      { text: "Use the `color` attribute", isCorrect: false },
    ],
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answerOptions: [
      { text: "class", isCorrect: false },
      { text: "styles", isCorrect: false },
      { text: "style", isCorrect: true },
      { text: "css", isCorrect: false },
    ],
  },
  {
    question: "How do you create an ordered list in HTML?",
    answerOptions: [
      { text: "<ul>", isCorrect: false },
      { text: "<ol>", isCorrect: true },
      { text: "<list>", isCorrect: false },
      { text: "<order>", isCorrect: false },
    ],
  },
  {
    question: "Which HTML element is used to define an unordered list?",
    answerOptions: [
      { text: "<ol>", isCorrect: false },
      { text: "<li>", isCorrect: false },
      { text: "<ul>", isCorrect: true },
      { text: "<list>", isCorrect: false },
    ],
  },
  {
    question: "What does the `<!DOCTYPE html>` declaration do?",
    answerOptions: [
      { text: "It links to the HTML document", isCorrect: false },
      { text: "It defines the document type and version", isCorrect: true },
      { text: "It specifies the character encoding", isCorrect: false },
      { text: "It defines the HTML version as 5", isCorrect: false },
    ],
  },
];

export const cssQues = [
  {
    question: "What property is used to change the font size in CSS?",
    answerOptions: [
      { text: "font-size", isCorrect: true },
      { text: "text-size", isCorrect: false },
      { text: "font-style", isCorrect: false },
      { text: "text-style", isCorrect: false },
    ],
  },
  {
    question:
      "Which CSS property is used to control the spacing between lines of text?",
    answerOptions: [
      { text: "line-height", isCorrect: true },
      { text: "letter-spacing", isCorrect: false },
      { text: "word-spacing", isCorrect: false },
      { text: "text-spacing", isCorrect: false },
    ],
  },
  {
    question:
      "How do you apply a CSS style to an element with the ID `header`?",
    answerOptions: [
      { text: "#header { /* styles */ }", isCorrect: true },
      { text: ".header { /* styles */ }", isCorrect: false },
      { text: "header { /* styles */ }", isCorrect: false },
      { text: "id-header { /* styles */ }", isCorrect: false },
    ],
  },
  {
    question:
      "What CSS property is used to set the background color of an element?",
    answerOptions: [
      { text: "background-color", isCorrect: true },
      { text: "bgcolor", isCorrect: false },
      { text: "color", isCorrect: false },
      { text: "background", isCorrect: false },
    ],
  },
  {
    question:
      "How do you select all `<p>` elements inside a `<div>` with the class name `container`?",
    answerOptions: [
      { text: ".container p { /* styles */ }", isCorrect: true },
      { text: "div p { /* styles */ }", isCorrect: false },
      { text: "#container p { /* styles */ }", isCorrect: false },
      { text: "p.container { /* styles */ }", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the `z-index` property in CSS?",
    answerOptions: [
      { text: "It specifies the stack order of elements", isCorrect: true },
      { text: "It sets the vertical position of an element", isCorrect: false },
      {
        text: "It controls the horizontal alignment of text",
        isCorrect: false,
      },
      { text: "It adjusts the size of elements", isCorrect: false },
    ],
  },
  {
    question:
      "How do you make a list display horizontally instead of vertically using CSS?",
    answerOptions: [
      { text: "display: inline; or display: inline-block;", isCorrect: true },
      { text: "list-style-type: horizontal;", isCorrect: false },
      { text: "float: left;", isCorrect: false },
      { text: "display: block;", isCorrect: false },
    ],
  },
  {
    question: "Which property is used to make text bold in CSS?",
    answerOptions: [
      { text: "font-weight", isCorrect: true },
      { text: "font-style", isCorrect: false },
      { text: "text-transform", isCorrect: false },
      { text: "font-size", isCorrect: false },
    ],
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    answerOptions: [
      { text: "color", isCorrect: true },
      { text: "font-color", isCorrect: false },
      { text: "text-color", isCorrect: false },
      { text: "background-color", isCorrect: false },
    ],
  },
  {
    question: "What is the default display value for `<div>` elements?",
    answerOptions: [
      { text: "block", isCorrect: true },
      { text: "inline", isCorrect: false },
      { text: "inline-block", isCorrect: false },
      { text: "none", isCorrect: false },
    ],
  },
  {
    question: "How do you create a CSS class selector?",
    answerOptions: [
      { text: ".classname { /* styles */ }", isCorrect: true },
      { text: "#classname { /* styles */ }", isCorrect: false },
      { text: "classname { /* styles */ }", isCorrect: false },
      { text: "*classname { /* styles */ }", isCorrect: false },
    ],
  },
  {
    question:
      "Which property is used to set the space between the border and the content of an element?",
    answerOptions: [
      { text: "padding", isCorrect: true },
      { text: "margin", isCorrect: false },
      { text: "border-spacing", isCorrect: false },
      { text: "spacing", isCorrect: false },
    ],
  },
  {
    question:
      "What CSS property is used to change the background image of an element?",
    answerOptions: [
      { text: "background-image", isCorrect: true },
      { text: "bg-image", isCorrect: false },
      { text: "image", isCorrect: false },
      { text: "background", isCorrect: false },
    ],
  },
  {
    question: "How do you make an element's text italic in CSS?",
    answerOptions: [
      { text: "font-style: italic;", isCorrect: true },
      { text: "font-variant: italic;", isCorrect: false },
      { text: "text-style: italic;", isCorrect: false },
      { text: "font-weight: italic;", isCorrect: false },
    ],
  },
  {
    question: "What property is used to change the alignment of text in CSS?",
    answerOptions: [
      { text: "text-align", isCorrect: true },
      { text: "align-text", isCorrect: false },
      { text: "text-alignment", isCorrect: false },
      { text: "alignment", isCorrect: false },
    ],
  },
];

export const reactJsQuestions = [
  {
    question: "What method is used to create a new React component?",
    answerOptions: [
      { text: "createComponent()", isCorrect: false },
      { text: "new Component()", isCorrect: false },
      { text: "React.createElement()", isCorrect: false },
      { text: "function Component() { }", isCorrect: true },
    ],
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    answerOptions: [
      { text: "useEffect", isCorrect: false },
      { text: "useState", isCorrect: true },
      { text: "useContext", isCorrect: false },
      { text: "useReducer", isCorrect: false },
    ],
  },
  {
    question: "How do you access props in a class component?",
    answerOptions: [
      { text: "props.this", isCorrect: false },
      { text: "this.getProps()", isCorrect: false },
      { text: "this.props", isCorrect: true },
      { text: "getProps()", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the 'key' prop in React?",
    answerOptions: [
      {
        text: "To identify which items have changed, are added, or are removed",
        isCorrect: true,
      },
      { text: "To specify the CSS class for an element", isCorrect: false },
      { text: "To bind a function to an event", isCorrect: false },
      { text: "To handle state updates", isCorrect: false },
    ],
  },
  {
    question:
      "Which method in React component lifecycle is called after the component is first rendered?",
    answerOptions: [
      { text: "componentWillUnmount()", isCorrect: false },
      { text: "componentDidMount()", isCorrect: true },
      { text: "componentDidUpdate()", isCorrect: false },
      { text: "componentWillUpdate()", isCorrect: false },
    ],
  },

  {
    question: "What is the purpose of React's 'useMemo' hook?",
    answerOptions: [
      { text: "To handle side effects", isCorrect: false },
      { text: "To manage component state", isCorrect: false },
      { text: "To provide context values", isCorrect: false },
      { text: "To memoize expensive function results", isCorrect: true },
    ],
  },
  {
    question:
      "How can you optimize performance for a large list of items in React?",
    answerOptions: [
      { text: "Use the 'key' prop properly", isCorrect: false },
      { text: "Use React.lazy() and Suspense", isCorrect: false },
      { text: "Use React.memo()", isCorrect: false },
      {
        text: "Use Virtualization libraries like react-window or react-virtualized",
        isCorrect: true,
      },
    ],
  },
  {
    question: "What is a 'Higher-Order Component' (HOC) in React?",
    answerOptions: [
      {
        text: "A function that takes a component and returns a new component with enhanced functionality",
        isCorrect: true,
      },
      { text: "A component that can manage its own state", isCorrect: false },
      {
        text: "A component that uses hooks for side effects",
        isCorrect: false,
      },
      {
        text: "A component that interacts with the Redux store",
        isCorrect: false,
      },
    ],
  },
  {
    question: "How do you handle asynchronous operations in a React component?",
    answerOptions: [
      { text: "Use the 'useState' hook with Promises", isCorrect: false },
      {
        text: "Use the 'useEffect' hook with async functions",
        isCorrect: true,
      },
      {
        text: "Use the 'componentDidMount' lifecycle method with async/await",
        isCorrect: false,
      },
      {
        text: "Use the 'useCallback' hook with async operations",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What does 'React.Fragment' do?",
    answerOptions: [
      {
        text: "It groups multiple elements without adding extra nodes to the DOM",
        isCorrect: true,
      },
      { text: "It provides a way to handle component state", isCorrect: false },
      { text: "It optimizes rendering performance", isCorrect: false },
      { text: "It allows for conditional rendering", isCorrect: false },
    ],
  },

  {
    question: "What is the purpose of React's 'useCallback' hook?",
    answerOptions: [
      {
        text: "To store values that persist between renders",
        isCorrect: false,
      },
      { text: "To handle side effects", isCorrect: false },
      {
        text: "To memoize callback functions to avoid unnecessary re-renders",
        isCorrect: true,
      },
      { text: "To manage form inputs", isCorrect: false },
    ],
  },
  {
    question: "In React, what is the purpose of the 'useEffect' hook?",
    answerOptions: [
      { text: "To manage component state", isCorrect: false },
      {
        text: "To handle side effects like data fetching or subscriptions",
        isCorrect: true,
      },
      { text: "To create memoized values", isCorrect: false },
      { text: "To handle event binding", isCorrect: false },
    ],
  },
  {
    question: "What is 'React Context' used for?",
    answerOptions: [
      { text: "To manage local component state", isCorrect: false },
      { text: "To optimize rendering performance", isCorrect: false },
      {
        text: "To share state between components without passing props down manually",
        isCorrect: true,
      },
      { text: "To handle asynchronous data fetching", isCorrect: false },
    ],
  },
  {
    question: "How does React handle events in components?",
    answerOptions: [
      {
        text: "By directly attaching event listeners to DOM elements",
        isCorrect: false,
      },
      {
        text: "Using synthetic events that wrap native browser events",
        isCorrect: true,
      },
      { text: "By using jQuery event handlers", isCorrect: false },
      { text: "By delegating events to a global event bus", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the 'useReducer' hook in React?",
    answerOptions: [
      {
        text: "To handle side effects in functional components",
        isCorrect: false,
      },
      { text: "To memoize values and avoid re-renders", isCorrect: false },
      { text: "To provide context values to components", isCorrect: false },
      {
        text: "To manage complex state logic and state transitions",
        isCorrect: true,
      },
    ],
  },
];
