import { useFormikContext } from "formik";
import { useParams } from "next/navigation";
import React from "react";

const TestOptionInput = ({
  option,
  currentStep,
  selectedOption,
  setSelectedOption,
}) => {
  const { id: questionId } = useParams();
  const { values, setFieldValue } = useFormikContext();
  const handleOptionChange = (optionId: string) => {
    console.log("optionId", optionId);

    setSelectedOption(optionId);
    setFieldValue("answers", [
      ...values.answers,
      {
        questionId,
        selectedOption: optionId,
      },
    ]);
  };
  return (
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
  );
};

export default TestOptionInput;
