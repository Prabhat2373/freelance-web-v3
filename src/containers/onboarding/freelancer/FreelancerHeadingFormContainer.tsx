"use client";

import Button from "@/components/buttons/Button";
import InputField from "@/components/inputs/InputField";
import { useOnboardingForm } from "@/contexts/FormContext";
import { useUpdateAccountMutation } from "@/features/rtk/app/userApi";
import StepLayout from "@/layout/freelancer/StepLayout";
import { statusHandler } from "@/utils/utils";
import { titleStepValidation } from "@/validators/onboarding/onboardingValidator";
import { Input } from "@mantine/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import InputField from "../../components/inputs/InputField";

const FreelancerHeadingFormContainer = () => {
  const { handleNext, handleFormSubmit, formData } = useOnboardingForm();

  const initialValues = { title: formData?.title ?? "" };
  const [updateAccont, { isLoading }] = useUpdateAccountMutation();

  console.log("formData", formData);

  return (
    <div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        enableReinitialize
        validationSchema={titleStepValidation}
      >
        {({ values, errors, handleChange }) => {
          console.log("errors", errors);

          return (
            <Form>
              {/* <Field
                as={Input}
                placeholder="Give title"
                // onChange={handleChange}
                name="title"
                id="title"
                value={values.title}
                // error={errors.title}
              /> */}
              <Input.Wrapper label="Title">
                <Input
                  onChange={handleChange}
                  name="title"
                  value={values?.title}
                  placeholder="Ex. Figma Developer, Frontend Developer"
                />
              </Input.Wrapper>
              <ErrorMessage
                className="text-red-500"
                component={"div"}
                name="title"
              />
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FreelancerHeadingFormContainer;
