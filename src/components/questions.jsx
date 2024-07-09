import React from "react";

const Question = ({ question, options, onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-2xl text-center font-bold mb-4">{question}</h1>
      <ul className="list-none grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer border-2 w-[150px] text-center border-neutral-600 hover:bg-gray-300 transition-all duration-300 p-2 rounded-md"
          >
            <button className="size-full" onClick={() => onSelect(index)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
