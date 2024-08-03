import React, { useState, useEffect } from "react";
import { javascriptQues, htmlQues, cssQues,reactJsQuestions } from "./constants/questions.js";
import Question from "./components/Question";
import Result from "./components/Result";
import "./index.css";
import "./assests/style.css";
import Hero from "./bg.svg";
import Navbar from "./components/common/Navbar.jsx";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import QuizPage from "./components/pages/QuizPage.jsx";
import Footer from "./components/common/Footer.jsx";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [startQuiz, setStartQuiz] = useState(null);
  const [title, setTitle] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const handleNextQuestion = (isCorrect, userCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
      correctAnswers.push(userCorrect);
    // console.log(userCorrect);
  };
  // console.log(CorrectAnswers, "saved  array");

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setStartQuiz(null);
    setCorrectAnswers([{text: "",isCorrect: null,}]);
  };

  const exitQuiz = () => {
    setCurrentQuestion(0);
    setStartQuiz(null);
    setTitle(null);
    setCorrectAnswers([{text: "",isCorrect: null,}]);
  };

  if (startQuiz)
    return (
      <>
        <QuizPage
          onAnswerClick={userAnswers}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
          startQuiz={startQuiz}
          resetQuiz={resetQuiz}
          title={title}
          exitQuiz={exitQuiz}
          correctAnswers={correctAnswers}
        />
      </>
    );

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Hero && Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Navbar />

        <div className="flex w-full flex-col">
          
       
        </div>
        <div className="container mt-24 md:mt-20">
          <div
            data-text="HTML QUIZ"
            style={{ "--r": -25 }}
            className="glass w-40 md:w-48 flex flex-col"
          >
            <FaHtml5 size={55} className="m-0 fill-fuchsia-700" />
            <button>
              <span
                onClick={() => {
                  setStartQuiz(htmlQues);
                  setTitle("HTML QUIZ");
                }}
              >
                Start Quiz
              </span>
            </button>
          </div>
          <div
            data-text="CSS QUIZ"
            style={{ "--r": -25 }}
            className="glass w-40 md:w-48 flex flex-col"
          >
            <FaCss3Alt size={55} className="m-0 fill-cyan-600" />
            <button>
              <span
                onClick={() => {
                  setStartQuiz(cssQues);
                  setTitle("CSS QUIZ");
                }}
              >
                Start Quiz
              </span>
            </button>
          </div>
          <div
            data-text="JAVASCRIPT QUIZ"
            style={{ "--r": -25 }}
            className="glass w-40 md:w-48 flex flex-col"
          >
            <IoLogoJavascript size={55} className="m-0 fill-yellow-600" />
            <button>
              <span
                onClick={() => {
                  setStartQuiz(javascriptQues);
                  setTitle("JAVASCRIPT QUIZ");
                }}
              >
                Start Quiz
              </span>
            </button>
          </div>
          <div
            data-text="REACT QUIZ"
            style={{ "--r": -25 }}
            className="glass w-40 md:w-48 flex flex-col"
          >
            <FaReact size={55} className="m-0 fill-indigo-700" />
            <button>
              <span  onClick={() => {
                  setStartQuiz(reactJsQuestions);
                  setTitle("REACT JS QUIZ");
                }}>Start Quiz</span>
            </button>
          </div>
        </div>
      <Footer/>
      </div>
    </>
  );
}
