"use client";

import { useOnboardingForm } from "@/contexts/FormContext";
import { addEducationValidation } from "@/validators/onboarding/onboardingValidator"; // Import the relevant validation schema
import { Formik } from "formik";
import { useState } from "react";
import EducationForm from "./EducationForm";

const EducationFormContainer = () => {
  const { formData, handleFormSubmit } = useOnboardingForm();
  // const [educations, setEducations] = useState(
  //   formData?.education_history?.length
  //     ? formData?.education_history?.map((history) => ({
  //         institution: history?.institution ?? "",
  //         degree: history?.degree ?? "",
  //         fieldOfStudy: history?.fieldOfStudy ?? "",
  //         startYear: history?.startYear ?? undefined,
  //         endYear: history?.endYear ?? undefined,
  //         description: history?.description ?? "",
  //       }))
  //     : [
  //         {
  //           institution: "",
  //           degree: "",
  //           fieldOfStudy: "",
  //           startYear: undefined,
  //           endYear: undefined,
  //           description: "",
  //         },
  //       ]
  // );

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

  // const handleAddClick = () => {
  //   setEducations([...educations, initialValues.education]);
  // };

  // const handleDeleteForm = async (deletedIndex: number) => {
  //   const updatedEducation = educations.filter(
  //     (_, idx) => idx !== deletedIndex
  //   );
  //   setEducations(updatedEducation);
  // };

  // const handleNoEducation = () => {
  //   setEducations([]);
  // };

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
