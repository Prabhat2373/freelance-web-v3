import React from "react";

const TestOptionsContainer = ({ tests }) => {
  return (
    <ul>
      {test?.questions[currentStep]?.options?.map((option) => (
        <li key={option?._id} className="mb-2">
          <label className="flex items-center">
            <input
              type="radio"
              name={`question_${currentStep}`}
              value={option?._id}
              checked={selectedOption === option?._id}
              onChange={() => handleOptionChange(option?._id)}
              className="mr-2"
            />
            <span className="text-gray-700">{option?.name}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TestOptionsContainer;
