import TestOptionInput from "@/components/inputs/tests/TestOptionInput";
import { Button } from "@/components/ui/button";
// import Button from "@/components/buttons/Button";
import { useSubmitTestMutation } from "@/features/rtk/app/mcqTestApi";
import { Test } from "@/types/app/freelancer/tests";
import { Form, Formik } from "formik";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface MCQTestProps {
  test: Test;
}

const TestOverview: React.FC<MCQTestProps> = ({ test }) => {
  const params = useParams();
  const questionId = params?.id;
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [submitTest, { isLoading }] = useSubmitTestMutation();

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const stepEnded = currentStep < test?.questions?.length - 1;

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setSelectedOption(null);
  };

  const initialValues = {
    answers: [],
  };
  const handleSubmitTest = async (data: typeof initialValues) => {
    const payload = {
      id: questionId,
      body: data,
    };
    const res = await submitTest(payload);
    if (res?.data?.status === "success") {
      toast.success(res?.data?.message);
    }
  };

  const isNextDisabled = selectedOption === null;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{test?.name ?? "NA"}</h2>
      <p className="text-gray-600 mb-4">{test?.description ?? "NA"}</p>

      <div>
        <h3 className="text-lg font-semibold mb-2">
          Question {currentStep + 1}
        </h3>
        <p className="text-gray-700 mb-4">
          {test?.questions[currentStep]?.text ?? "NA"}
        </p>

        <Formik
          initialValues={initialValues}
          onSubmit={(data) => {
            console.log("stepEnded", stepEnded);

            if (stepEnded) {
              handleNextStep();
            } else {
              handleSubmitTest(data);
            }
          }}
        >
          {({ values }) => {
            console.log("values", values);

            return (
              <Form>
                <ul>
                  {test?.questions[currentStep]?.options?.map((option) => (
                    <TestOptionInput
                      currentStep={currentStep}
                      option={option}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                    />
                  ))}
                </ul>

                <Button
                  // onClick={handleNextStep}
                  disabled={isNextDisabled}
                  type="submit"
                  // className={`mt-4 px-4 py-2 text-white rounded-md ${
                  //   isNextDisabled
                  //     ? "bg-gray-400 cursor-not-allowed"
                  //     : "bg-blue-500 hover:bg-blue-600"
                  // }`}
                >
                  {currentStep < test?.questions?.length - 1
                    ? "Next"
                    : "Submit"}
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default TestOverview;
