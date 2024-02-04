"use client";
import { useOnboardingForm } from "@/contexts/FormContext";
import { addExperienceValidation } from "@/validators/onboarding/onboardingValidator";
import { Formik } from "formik";
import { useMemo } from "react";

import ExperienceForm from "./ExperienceForm";

const ExperienceFormContainer = () => {
  const {
    formData,

    handleFormSubmit,
  } = useOnboardingForm();

  console.log("formData", formData);

  const initialValues = useMemo(() => {
    return {
      experience: formData?.employment_history?.length
        ? formData?.employment_history?.map((data, index) => {
            return {
              ...data,
              _id: undefined,
            };
          })
        : [
            {
              company_name: "",
              position: "",
              employment_type: "",
              start_date: undefined,
              end_date: undefined,
              currently_working: false,
              description: "",
              skills_used: [],
            },
          ],
    };
  }, [formData]);

  console.log("initialValues", initialValues);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addExperienceValidation}
      enableReinitialize
      onSubmit={(data) => {
        const payload = { employment_history: [...data.experience] };
        handleFormSubmit(payload);
      }}
    >
      {({ values, errors }) => {
        console.log("values", values);
        console.log("errors", errors);

        return <ExperienceForm />;
      }}
    </Formik>
  );
};

export default ExperienceFormContainer;
