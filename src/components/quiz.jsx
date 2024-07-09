import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import questions from "../data/questions.json";
import Question from "./questions";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  // const history = useHistory();

  const handleNextQuestion = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // history.push("/score");
    }
  };

  return (
    <div>
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onNextQuestion={handleNextQuestion}
      />
    </div>
  );
}

export default Quiz;
