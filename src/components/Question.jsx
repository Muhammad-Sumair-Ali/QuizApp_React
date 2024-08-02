import React, { useState ,useEffect} from "react";
import Navbar from "./common/Navbar";

const Question = ({ question, onAnswerClick, title, exitQuiz,questionsLeft }) => {
  const [leftQues, setLeftQues] = useState(15);
  const wrongAns = question?.answerOptions.find((item) => {
    if(item.isCorrect === true) return item
  })

  return (
    <div className="h-[100vh]">
      <Navbar />
    
      <div className="flex align-center justify-center p-4">
        <div
          className="flex flex-col sm:flex-wrap sm:flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap 2xl:flex-row 2xl:flex-wrap xl:flex-row xl:flex-wrap align-center justify-center space-y-4 w-full md:w-2/3 pb-2 p-4 shadow-2xl rounded-xl mt-14 md:mt-0 lg:mt-2  bg-sky-100/25 backdrop-blur-lg  ">
          <div className="flex align-center justify-between block px-3">
            <h2 className="mb-0 text-2xl pt-3 font-bold bg-gradient-to-r from-fuchsia-600 via-blue-500 to-violet-400 inline-block text-transparent bg-clip-text ">
              {title}
            </h2>
            
            <button
              className="text-fuchsia-700 rounded-lg p-1 hover:bg-fuchsia-700 hover:text-gray-100 shadow-md mt-2 border-2 border-fuchsia-700 md:ml-4"
              onClick={exitQuiz}
            >
              Close Quiz
            </button>
          </div>
            <h3 className="text-xl font-bold text-gray-900 w-full text-center"> {leftQues} / {questionsLeft.length} Total</h3>
          <h2 className="mb-4 text-xl font-bold text-gray-900 px-2 w-full text-center">
            <span className="text-indigo-700 text-2xl w-full ">Q: </span>{" "}
            {question?.question}
          </h2>

          {question?.answerOptions?.map((option, idx) => (
            <button
              key={idx}
              onClick={() => {onAnswerClick(option.isCorrect,wrongAns); setLeftQues(leftQues -1) }}
              className="w-full md:w-56 lg:w-60 xl:w-72 2xl:w-80 md:mx-2 md:h-[65px] p-2 text-left bg-white border border-fuchsia-700 rounded-lg shadow-md hover:bg-gray-100 "
            >
              <span className="font-medium text-gray-900">
                <span className="text-indigo-700 text-md  ">({idx + 1}) </span>{" "}
                {option.text}
              </span>
            </button>
          ))}
          
          <small className="inline-block w-full text-center pt-2 text-bold">please check your answer before you click </small>

        </div>
      </div>
    </div>
  );
};

export default Question;
