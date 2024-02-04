import Button from "@/components/buttons/Button";
import { useOnboardingForm } from "@/contexts/FormContext";
import React from "react";

const StepsButtonLayout = () => {
  const { handleBack } = useOnboardingForm();
  return (
    <div className="flex justify-center items-center py-12">
      <Button
        width="60%"
        variant="outlined"
        className="flex px-24"
        type="button"
        onClick={handleBack}
      >
        Back
      </Button>
      <Button width="60%" variant="filled" className="flex px-24" type="submit">
        Next
      </Button>
    </div>
  );
};

export default StepsButtonLayout;
