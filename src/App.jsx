import React, { useState } from "react";
import questionsData from "./data/questions.json";
import Result from "./components/result";
import Question from "./components/questions";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleSelect = (selectedOption) => {
    if (selectedOption === questionsData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const isLastQuestion = currentQuestion === questionsData.length;
  console.log(currentQuestion);

  return (
    <div className="container mx-auto px-4">
      {isLastQuestion ? (
        <Result score={score} totalQuestions={questionsData.length} />
      ) : (
        <Question
          question={questionsData[currentQuestion].question}
          options={questionsData[currentQuestion].options}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default App;
