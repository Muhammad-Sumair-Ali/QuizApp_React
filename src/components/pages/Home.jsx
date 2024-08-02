import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import { FaHtml5,FaCss3Alt,FaReact  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { javascriptQues ,htmlQues, cssQues} from "../../constants/questions";
import Question from "../Question";
import Result from "../Result";
// import ThemeToggle from "./components/panel/ThemeToggle.jsx";
import Hero from "../../assests/bg.svg";
import HeroDark from "../../assests/darkbg.svg";

const Home = () => {

  const [startQuiz, setStartQuiz] = useState(null);

  return (

      <>
        <div
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
          }}
          className=" dark:text-gray-100 "
        >
          <Navbar />

          <h2 className="dark:text-cyan-400 mx-5">Javascript Quiz</h2>

          <div className="container mt-24 md:mt-20">
            <div
              data-text="HTML QUIZ"
              style={{ "--r": -25 }}
              className="glass w-40 md:w-48 flex flex-col"
            >
              <FaHtml5 size={55} className="m-0 fill-fuchsia-700" />
              <button>
                <span onClick={() => setStartQuiz(htmlQues)}>Start Quiz</span>
              </button>
            </div>
            <div
              data-text="CSS QUIZ"
              style={{ "--r": -25 }}
              className="glass w-40 md:w-48 flex flex-col"
            >
              <FaCss3Alt size={55} className="m-0 fill-cyan-600" />
              <button>
                 <span onClick={() => setStartQuiz(cssQues)}>Start Quiz</span>
              </button>
            </div>
            <div
              data-text="JAVASCRIPT QUIZ"
              style={{ "--r": -25 }}
              className="glass w-40 md:w-48 flex flex-col"
            >
              <IoLogoJavascript size={55} className="m-0 fill-yellow-600" />
              <button>
                 <span onClick={() => setStartQuiz(javascriptQues)}>Start Quiz</span>
              </button>
            </div>
            <div
              data-text="REACT QUIZ"
              style={{ "--r": -25 }}
              className="glass w-40 md:w-48 flex flex-col"
            >
              <FaReact size={55} className="m-0 fill-indigo-700" />
              <button>
                <span>Start Quiz</span>
              </button>
            </div>




          </div>


        </div>
      </>

  );
};

export default Home;