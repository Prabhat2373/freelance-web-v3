import * as Yup from "yup"

export const titleStepValidation = Yup.object().shape({
  title: Yup.string().required("Title is Required"),
})

export const addExperienceValidation = Yup.object().shape({
  experience: Yup.array().of(
    Yup.object().shape({
      company_name: Yup.string().required("Company name is required"),
      position: Yup.string().required("Position is required"),
      description: Yup.string(),
      skills_used: Yup.array().of(Yup.string()),
      start_date: Yup.date().required("Start date is required"),
      end_date: Yup.date().when(
        "currently_working",
        (currentlyWorking, schema) => {
          return !currentlyWorking
            ? schema.required("End date is required")
            : schema.nullable()
        }
      ),
      currently_working: Yup.boolean(),
    })
  ),
})

export const addEducationValidation = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      institution: Yup.string().required("Institution is required"),
      degree: Yup.string().required("Degree is required"),
      fieldOfStudy: Yup.string().required("Field of Study is required"),
      startYear: Yup.string().required("Start year is required"),
      endYear: Yup.string().nullable(),
      description: Yup.string().required("Description is required"),
    })
  ),
})

export const onboardingLanguageValidation = Yup.object().shape({
  language: Yup.string().required("Please Select Language"),
})
