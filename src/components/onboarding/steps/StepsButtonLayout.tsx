import Button from "@/components/buttons/Button";
import { useOnboardingForm } from "@/contexts/FormContext";
import React from "react";

const StepsButtonLayout = ({ isLoading }) => {
  const { handleBack } = useOnboardingForm();
  return (
    <div className="flex justify-center gap-4 items-center py-12">
      <Button
        width="60%"
        variant="outlined"
        className="flex px-24"
        type="button"
        onClick={handleBack}
      >
        Back
      </Button>
      <Button
        width="60%"
        variant="filled"
        isLoading={isLoading}
        className="flex px-24"
        type="submit"
      >
        Next
      </Button>
    </div>
  );
};

export default StepsButtonLayout;
