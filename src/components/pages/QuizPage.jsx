import React, { useState, useEffect } from 'react';
import Question from '../Question';
import  Result  from '../Result';


const QuizPage = ({currentQuestion,startQuiz,handleNextQuestion,onAnswerClick,resetQuiz,title,exitQuiz,correctAnswers}) => {
  return (
    <div  
      className={`bg-gray-50 h-[100vh]`}
    >
     
      {currentQuestion < startQuiz?.length &&(  <Question question={startQuiz[currentQuestion]} onAnswerClick={handleNextQuestion} title={title} exitQuiz={exitQuiz} questionsLeft={startQuiz} />)}

        {currentQuestion === startQuiz?.length && (<Result 
          userAnswers={onAnswerClick}
          questions={startQuiz}
          resetQuiz={resetQuiz}
           exitQuiz={exitQuiz}
       correctAnswers={correctAnswers}
          />)}
    </div>
  );
};

export default QuizPage;