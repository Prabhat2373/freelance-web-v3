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
import IconNoExperience from "@/components/icons/onboarding/IconNoExperience";
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
    setFieldValue("experience", []);
  };

  return (
    <Form>
      <>
        {!values?.experience?.length ? (
          <div className="flex justify-center items-center">
            <div className="w-1/2">
              <IconNoExperience />
            </div>
          </div>
        ) : null}
        {experiences.map((experience, index) => (
          <AddExperienceForm
            key={index}
            experience={experience}
            handleDeleteForm={handleDeleteForm}
            index={index}
          />
        ))}

        {!values?.with_no_experience ? (
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
        ) : null}
        <div className="my-3">
          <Checkbox
            id="experience"
            onChange={(e) => {
              if (e?.target?.checked) {
                handleNoExperience();
                setFieldValue("with_no_experience", true);
              } else {
                setFieldValue("with_no_experience", false);
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
