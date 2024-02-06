"use client";
import AddExperienceForm from "@/components/onboarding/form/AddExperienceForm";
// import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useOnboardingForm } from "@/contexts/FormContext";
import { addExperienceValidation } from "@/validators/onboarding/onboardingValidator";
import { Form, Formik, useFormikContext } from "formik";
import { useState } from "react";

import {
  useLazyDeleteExperienceQuery,
  useUpdateAccountMutation,
} from "@/features/rtk/app/userApi";
import { Button, Checkbox } from "@mantine/core";
import StepsButtonLayout from "@/components/onboarding/steps/StepsButtonLayout";
const ExperienceForm = () => {
  const { values, setFieldValue, ...formik } = useFormikContext();
  const experiences = values?.experience;

  const handleAddExperience = () => {
    const newExperiences = [
      ...experiences,
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
    ];
    console.log("newExperiences", newExperiences);

    setFieldValue("experience", newExperiences);
  };

  const handleDeleteForm = async (deletedIndex: number) => {
    const updatedExperience = experiences.filter(
      (_, idx) => idx !== deletedIndex
    );
    setFieldValue("experience", updatedExperience);
  };

  const handleNoExperience = () => {
    setFieldValue("experience", formik.initialValues?.experience);
  };

  return (
    <Form>
      <>
        {experiences.map((experience, index) => (
          <AddExperienceForm
            key={index}
            experience={experience}
            handleDeleteForm={handleDeleteForm}
            index={index}
          />
        ))}

        <div className="flex flex-col">
          {/* <label htmlFor="experience">Add Experience:</label> */}
          <Button
            variant="outlined"
            onClick={handleAddExperience}
            className="flex px-24"
            type="button"
          >
            + Add Experience
          </Button>
        </div>
        <div className="my-3">
          <Checkbox
            id="experience"
            onChange={(checked) => {
              if (checked) {
                handleNoExperience();
              } else {
                handleAddExperience();
              }
            }}
            // onClick={handleNoExperience}
            name="experience"
            label="No Experience"
          />
          {/* <Label htmlFor="experience">No Experience</Label> */}
        </div>
        <StepsButtonLayout />
      </>
    </Form>
  );
};

export default ExperienceForm;
