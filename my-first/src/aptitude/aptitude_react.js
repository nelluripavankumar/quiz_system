import React, { useState, useEffect } from 'react';
import './App.css';

const questions = [
  {question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid", "Rome"], correctAnswer: "Paris"},
  {question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4"},
  {question: "Who is the president of the USA?", options: ["Barack Obama", "Joe Biden", "Donald Trump", "George Bush"], correctAnswer: "Joe Biden"},
  // Add 17 more questions here...
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timer, setTimer] = useState(30 * 60); // 30 minutes in seconds
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(interval);
        submitQuiz();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswerChange = (e) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setSelectedAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const saveAnswer = () => {
    const selectedOption = selectedAnswers[currentQuestionIndex];
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  };

  const submitQuiz = () => {
    setIsQuizSubmitted(true);
    alert(`Quiz submitted! You got ${correctAnswersCount} correct answers out of ${questions.length}.`);
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  if (isQuizSubmitted) {
    return (
      <div className="quiz-container">
        <h2>Your quiz has been submitted!</h2>
        <p>You got {correctAnswersCount} out of {questions.length} questions correct.</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div id="timer" className="timer">
        Time: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>

      <div className="question-container">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <div className="question-text">
          {questions[currentQuestionIndex].question}
        </div>

        <div className="answers">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswers[currentQuestionIndex] === option}
                onChange={handleAnswerChange}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>

        <div className="buttons">
          <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
          <button onClick={goToNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
          <button onClick={saveAnswer}>Save Answer</button>
        </div>
      </div>
    </div>
  );
}

export default App;
