"use client";

import { useOnboardingForm } from "@/contexts/FormContext";
import { addEducationValidation } from "@/validators/onboarding/onboardingValidator"; // Import the relevant validation schema
import { Formik } from "formik";
import { useState } from "react";
import EducationForm from "./EducationForm";

const EducationFormContainer = () => {
  const { formData, handleFormSubmit } = useOnboardingForm();

  const initialValues = {
    education: formData?.education_history?.length
      ? formData?.education_history?.map((education) => {
          return {
            ...education,
            _id: undefined,
          };
        })
      : [
          {
            institution: "",
            degree: "",
            fieldOfStudy: "",
            startYear: undefined,
            endYear: undefined,
            description: "",
          },
        ],
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addEducationValidation}
      enableReinitialize
      onSubmit={(data) => {
        const payload = { education_history: [...data.education] };
        handleFormSubmit(payload);
      }}
    >
      {({ values, errors }) => {
        console.log("values", values);
        console.log("errors", errors);

        return <EducationForm />;
      }}
    </Formik>
  );
};

export default EducationFormContainer;
