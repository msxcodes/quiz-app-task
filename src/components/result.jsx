import React from "react";

const Result = ({ score, totalQuestions }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold mb-4">
        You scored {score} out of {totalQuestions}
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 font-medium
       text-white px-4 py-2 rounded-md"
        onClick={handleClick}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
