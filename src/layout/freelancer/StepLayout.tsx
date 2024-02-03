"use client";
import Button from "@/components/buttons/Button";
import Stepper from "@/components/onboarding/Stepper";
import { useOnboardingForm } from "@/contexts/FormContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import GuestLayout from "../GuestLayout";
import Container from "@/components/ui/Container";

const StepLayout = ({ title, subTitle, children }) => {
  return (
    <>
      <Container>
        <div className="w-[50%]">
          <Stepper />
          {/* <div>
            <h1 className="text-gray-900 text-xl font-medium font-montserrat">
              {title}
            </h1>
            <p>{subTitle}</p>
          </div> */}
          {children}
        </div>
      </Container>
      {/* <div className="flex justify-center items-center py-12">
        <Button
          width="60%"
          variant="filled"
          className="flex px-24"
          type="submit"
          onClick={() => handleNext()}
        >
          Next
        </Button>
      </div> */}
    </>
  );
};

export default StepLayout;
