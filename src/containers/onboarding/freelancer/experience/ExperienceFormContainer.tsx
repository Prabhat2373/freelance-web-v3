"use client";
import AddExperienceForm from "@/components/onboarding/form/AddExperienceForm";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useOnboardingForm } from "@/contexts/FormContext";
import { addExperienceValidation } from "@/validators/onboarding/onboardingValidator";
import { Form, Formik } from "formik";
import { useState } from "react";

import {
  useLazyDeleteExperienceQuery,
  useUpdateAccountMutation,
} from "@/features/rtk/app/userApi";
import { Button } from "@mantine/core";

const ExperienceFormContainer = () => {
  const {
    formData,

    handleFormSubmit,
  } = useOnboardingForm();
  const [experiences, setExperiences] = useState(
    formData?.employment_history?.length
      ? formData?.employment_history?.map((history) => ({
          company_name: history?.company_name ?? "",
          position: history?.position ?? "",
          employment_type: history?.employment_type ?? "",
          start_date: history?.start_date ?? undefined,
          end_date: history?.end_date ?? undefined,
          currently_working: history?.currently_working ?? false,
          description: history?.description ?? "",
          skills_used: history?.skills_used ?? [],
        }))
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
        ]
  );
  const [updateAccont] = useUpdateAccountMutation();
  const [deleteExperience, { isLoading: isDeleteExperienceLoading }] =
    useLazyDeleteExperienceQuery();

  console.log("formData", formData);

  const initialValues = {
    experience: experiences,
  };

  const handleAddClick = () => {
    // setShowForm(true)
    setExperiences([...experiences, initialValues.experience]);
  };

  const handleDeleteForm = async (deletedIndex: number) => {
    const updatedExperience = experiences.filter(
      (_, idx) => idx !== deletedIndex
    );
    setExperiences(updatedExperience);
  };

  const handleNoExperience = () => {
    setExperiences([]);
  };

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
                  onClick={handleAddClick}
                  className="flex px-24"
                  type="button"
                >
                  + Add Experience
                </Button>
              </div>
              <div>
                <Checkbox
                  id="experience"
                  onCheckedChange={(checked) => {
                    if (checked) {
                      handleNoExperience();
                    } else {
                      handleAddClick();
                    }
                  }}
                  // onClick={handleNoExperience}
                  name="experience"
                />
                <Label htmlFor="experience">No Experience</Label>
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

export default ExperienceFormContainer;
