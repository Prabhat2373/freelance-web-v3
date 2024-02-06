"use client";
import StepsButtonLayout from "@/components/onboarding/steps/StepsButtonLayout";
import SkillsList from "@/components/profile/skills/SkillsList";
import SelectSkills from "@/components/ui/inputs/select/SelectSkills";
import { useOnboardingForm } from "@/contexts/FormContext";
import { Form, Formik } from "formik";
import React from "react";

const OnboardingSkillsContainer = () => {
  const {
    formData,

    handleFormSubmit,
  } = useOnboardingForm();

  const initialValues = {
    skills: formData?.skills || [],
  };

  const onSubmit = (data) => {
    handleFormSubmit(data);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values }) => {
          return (
            <Form>
              <SelectSkills
                name={"skills"}
                value={values?.skills?.map((skill) => {
                  return {
                    label: skill?.skill_name,
                    value: skill?._id,
                  };
                })}
              />
              <StepsButtonLayout isLoading={false} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default OnboardingSkillsContainer;
