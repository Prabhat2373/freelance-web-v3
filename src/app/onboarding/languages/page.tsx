import { useOnboardingForm } from "@/contexts/FormContext"
import { addExperienceValidation } from "@/validators/onboarding/onboardingValidator"
import { Field, Form, Formik } from "formik"

import Button from "../../../components/buttons/Button"
import StepLayout from "../../../layout/freelancer/StepLayout"

import Select from "react-select"
import { useMemo } from "react"
import ErrorField from "@/components/inputs/ErrorField"

const Languages = () => {
  const {
    formData,

    handleFormSubmit,
  } = useOnboardingForm()

  console.log("formData", formData)

  const initialValues = {
    language: formData.language ?? "",
  }
  //   const handleSubmit = (data: typeof initialValues) => {
  //     const payload = { employment_history: [...data.experience] }
  //     handleFormSubmit(payload)
  //   }
  console.log("initialValues", initialValues)

  const languageOptions = useMemo(() => {
    return [
      { label: "English", value: "english" },
      { label: "Spanish", value: "spanish" },
      { label: "French", value: "french" },
      // Add more languages as needed
    ]
  }, [])

  return (
    <StepLayout
      title={"Add work your experiences."}
      subTitle={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod."
      }
    >
      <Formik
        initialValues={initialValues}
        validationSchema={addExperienceValidation}
        enableReinitialize
        onSubmit={handleFormSubmit}
      >
        {({ values, errors }) => {
          console.log("values", values)
          console.log("errors", errors)

          return (
            <Form>
              <>
                <div>
                  <label htmlFor="language">Select Language:</label>
                  <Select
                    name="language"
                    options={languageOptions}
                    placeholder="Select a language"
                  />
                  <ErrorField name="language" />
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
          )
        }}
      </Formik>
      {/* </Container> */}
    </StepLayout>
  )
}

export default Languages
