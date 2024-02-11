"use client";
import StepsButtonLayout from "@/components/onboarding/steps/StepsButtonLayout";
import Money from "@/components/ui/payment/Money";
import { useOnboardingForm } from "@/contexts/FormContext";
import { Input } from "@mantine/core";
import { Field, Form, Formik } from "formik";
import React from "react";

const RateFormContainer = () => {
  const { formData, handleFormSubmit } = useOnboardingForm();
  const initialValues = {
    hourly_rate: formData?.hourly_rate ?? "",
  };
  const handleSubmit = (data) => {
    handleFormSubmit(data);
  };
  return (
    <div>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values }) => {
            return (
              <Form>
                <div>
                  <div className="py-2">
                    <Input.Wrapper className="flex gap-2 w-1/2 items-center">
                      <Money />
                      <Field
                        as={Input}
                        name="hourly_rate"
                        placeholder="Enter Hourly Rate"
                        type="number"
                      />
                      <span>/per Hour</span>
                    </Input.Wrapper>
                  </div>
                  <div>
                    <StepsButtonLayout />
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default RateFormContainer;
