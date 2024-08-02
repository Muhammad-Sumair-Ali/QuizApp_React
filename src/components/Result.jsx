
import '../assests/style.css'
import ReactConfetti from 'react-confetti';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import Background from '../assests/result.svg'

const Result = ({ userAnswers, questions, resetQuiz, exitQuiz, correctAnswers }) => {
  const correctAnswerCount = userAnswers.filter((answer, index) => answer === correctAnswers[index]?.isCorrect).length;

  const answerResults = questions.map((question, index) => {
    const isCorrect = userAnswers[index] === correctAnswers[index]?.isCorrect;
    return {
      question: question.question,
      userAnswer: isCorrect ? "Correct" : "Incorrect",
      isCorrect,
      correctAnswer: correctAnswers[index]?.text || "No correct answer provided",
    };
  });

  return (
    <>
      <ReactConfetti
        height={window.innerHeight}
        width={window.innerWidth}
        recycle={false}
        numberOfPieces={500}
        className='fixed top-0 left-0 w-full h-full z-0'
      />
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100vw",
        }}
        className="relative bg-transparent backdrop-blur-md text-gray-100 p-4"
      >
        <div className="bg-gray-800/25 backdrop-blur-md shadow-xl p-2 rounded-lg max-w-4xl mx-auto z-10">
          <div className="flex align-center justify-between gap-4 mb-4">
            <h2 className="font-bold bg-gradient-to-r from-fuchsia-600 via-blue-500 to-violet-400  text-transparent bg-clip-text mb-4 text-2xl">Quiz Result</h2>
            <div>
              <button
                onClick={resetQuiz}
                className="cursor-pointer text-fuchsia-700 rounded-lg py-2 px-2 hover:bg-fuchsia-700 hover:text-gray-100 shadow-md border-2 border-fuchsia-700"
              >
                Retry Quiz
              </button>
              <button
                onClick={exitQuiz}
                className="text-fuchsia-700 rounded-lg py-2 px-2 hover:bg-fuchsia-700 hover:text-gray-100 shadow-md border-2 border-fuchsia-700 ml-2"
              >
                Close Quiz
              </button>
            </div>
          </div>
          <h2 className="text-center text-2xl mb-4">
            You got <span className='text-fuchsia-600'>{correctAnswerCount}</span> out of {questions.length} questions correct.
          </h2>
          <ul className="result text-left">
            {answerResults.map((result, index) => (
              <li key={index} className="mb-4">
                <div className="bg-gray-100/25 p-4 rounded-lg">
                  <strong className="text-blue-700">Q{index + 1}: {result.question}</strong>
                  <div className="text-gray-500">
                    Your Answer: <span className={result.isCorrect ? 'text-green-600' : 'text-red-600'}>{result.userAnswer}</span>
                  </div>
                  <div className="text-green-600 text-md flex items-center mt-2">
                    <IoCheckmarkDoneCircleOutline className="text-green-500 mr-2" size={25} />
                    <b className="text-green-700">Correct Answer: </b> <p className='text-green-700 ml-1 text-bold'>
                      {result.correctAnswer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Result;
