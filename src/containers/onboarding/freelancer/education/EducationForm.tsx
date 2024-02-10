"use client";

import AddEducationForm from "@/components/onboarding/form/AddEducationForm"; // Import the modified AddEducationForm
import StepsButtonLayout from "@/components/onboarding/steps/StepsButtonLayout";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@mantine/core";
import { Form, useFormikContext } from "formik";

const EducationForm = () => {
  const formik = useFormikContext();

  const educations = formik.values?.education;

  const handleAddEducation = () => {
    const newEducations = [
      ...educations,
      {
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startYear: undefined,
        endYear: undefined,
        description: "",
      },
    ];

    formik.setFieldValue("education", newEducations);
  };

  const handleDeleteForm = async (deletedIndex: number) => {
    const updatedEducations = educations.filter(
      (_, idx) => idx !== deletedIndex
    );
    formik.setFieldValue("education", updatedEducations);
  };

  const handleNoEducation = () => {
    formik.setFieldValue("education", formik.initialValues?.education);
  };

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
            onClick={handleAddEducation}
            className="flex px-24"
            type="button"
          >
            + Add Education
          </Button>
        </div>
        <div className="flex gap-2 my-4">
          <Checkbox
            id="education"
            onCheckedChange={(checked) => {
              if (checked) {
                handleNoEducation();
              } else {
                handleAddEducation();
              }
            }}
          />
          <Label htmlFor="education">No Education</Label>
        </div>
        {/* <div className="flex justify-center items-center py-12">
          <Button
            width="60%"
            variant="filled"
            className="flex px-24"
            type="submit"
          >
            Next
          </Button>
        </div> */}
        <StepsButtonLayout />
      </>
    </Form>
  );
};

export default EducationForm;
