"use client";
import StepsButtonLayout from "@/components/onboarding/steps/StepsButtonLayout";
import { useOnboardingForm } from "@/contexts/FormContext";
import { Text, Textarea } from "@mantine/core";
import { Form, Formik } from "formik";
import React, { useMemo } from "react";

const DescriptionFormContainer = () => {
  const { formData, handleFormSubmit } = useOnboardingForm();

  const initialValues = useMemo(() => {
    return {
      description: formData?.description ?? "",
    };
  }, [formData]);
  console.log("formData", formData);

  const handleSubmit = (data) => {
    handleFormSubmit(data);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({}) => {
        return (
          <Form>
            <div>
              {/* <div>
        <Text>Add A Bio For Your Profile.</Text>
      </div> */}
              <div>
                <Textarea
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod."
                  label="Profile Bio."
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.Lorem 
ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.Lorem ipsum 
dolor sit amet, consectetur adipiscing elit,sed do eiusmod."
                  rows={8}
                />
              </div>
            </div>
            <StepsButtonLayout />
          </Form>
        );
      }}
    </Formik>
  );
};

export default DescriptionFormContainer;
