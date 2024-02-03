"use client";

import AddEducationForm from "@/components/onboarding/form/AddEducationForm"; // Import the modified AddEducationForm
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useOnboardingForm } from "@/contexts/FormContext";
import StepLayout from "@/layout/freelancer/StepLayout";
import { addEducationValidation } from "@/validators/onboarding/onboardingValidator"; // Import the relevant validation schema
import { Button } from "@mantine/core";
import { Form, Formik } from "formik";
import { useState } from "react";

const EducationFormContainer = () => {
  const { formData, handleFormSubmit } = useOnboardingForm();
  const [educations, setEducations] = useState(
    formData?.education_history?.length
      ? formData?.education_history?.map((history) => ({
          institution: history?.institution ?? "",
          degree: history?.degree ?? "",
          fieldOfStudy: history?.fieldOfStudy ?? "",
          startYear: history?.startYear ?? undefined,
          endYear: history?.endYear ?? undefined,
          description: history?.description ?? "",
        }))
      : [
          {
            institution: "",
            degree: "",
            fieldOfStudy: "",
            startYear: undefined,
            endYear: undefined,
            description: "",
          },
        ]
  );

  const initialValues = {
    education: educations,
  };

  const handleAddClick = () => {
    setEducations([...educations, initialValues.education]);
  };

  const handleDeleteForm = async (deletedIndex: number) => {
    const updatedEducation = educations.filter(
      (_, idx) => idx !== deletedIndex
    );
    setEducations(updatedEducation);
  };

  const handleNoEducation = () => {
    setEducations([]);
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

        return (
          <Form>
            <>
              {educations.map((education, index) => (
                <AddEducationForm
                  key={index}
                  education={education}
                  handleDeleteForm={handleDeleteForm}
                  index={index}
                />
              ))}

              <div className="flex flex-col">
                <Button
                  variant="outlined"
                  onClick={handleAddClick}
                  className="flex px-24"
                  type="button"
                >
                  + Add Education
                </Button>
              </div>
              <div>
                <Checkbox
                  id="education"
                  onCheckedChange={(checked) => {
                    if (checked) {
                      handleNoEducation();
                    } else {
                      handleAddClick();
                    }
                  }}
                />
                <Label htmlFor="education">No Education</Label>
              </div>
              <div className="flex justify-center items-center py-12">
                <Button
                  width="60%"
                  variant="filled"
                  className="flex px-24"
                  type="submit"
                >
                  Next
                </Button>
              </div>
            </>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EducationFormContainer;
