import Heading from "@/components/elements/Heading";
import AttachmentDropzoneContainer from "@/components/jobs/AttachmentDropzoneContainer";
import ExpectedDuration from "@/components/jobs/ExpectedDuration";
import ExperienceLevelContainer from "@/components/jobs/ExperienceLevelContainer";
import JobBudgetContainer from "@/components/jobs/JobBudgetContainer";
import GridWrapper from "@/components/ui/GridWrapper";
import { Button } from "@/components/ui/button";
import SelectSkills from "@/components/ui/inputs/select/SelectSkills";
import {
  useCreateJobMutation,
  useGetComplexitiesQuery,
  useGetJobDurationsQuery,
  useGetPaymentTypesQuery,
} from "@/features/rtk/app/jobApi";
import { isSuccess } from "@/utils/utils";
import {
  // Button,
  Container,
  Input,
  Paper,
  Radio,
  Text,
  Textarea,
} from "@mantine/core";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";

const CreateJobForm = () => {
  const [createJob, { isLoading: isJobCreating }] = useCreateJobMutation();
  const { data: projectDurations } = useGetJobDurationsQuery("");
  const { data: complexitiesData } = useGetComplexitiesQuery("");
  const { data: paymentTypes } = useGetPaymentTypesQuery("");
  const initialValues = {
    job_title: "",
    job_description: "",
    required_skills: [],
    expected_duration_id: "",
    complexity_id: "",
    payment_type_id: "",
    payment_amount: "",
    location: "",
    experience_level: "",
    payment_mode: {
      fixed: "",
      hourly: "",
    },
  };

  const handleCreateJob = async (data: typeof initialValues) => {
    const res = await createJob(data);

    if (isSuccess(res)) {
      toast.success(res?.data?.message);
    }
  };

  const projectEstimateDurations = projectDurations?.data;
  const complexities = complexitiesData?.data;

  return (
    <Container>
      <Paper shadow="sm" p="xl">
        <Formik initialValues={initialValues} onSubmit={handleCreateJob}>
          {({ handleChange, values, setFieldValue, handleSubmit }) => {
            console.log("values", values);

            return (
              <Form>
                <div className="flex flex-col gap-4">
                  <GridWrapper
                    title={"Job Title"}
                    description={"A job title must describe one position only"}
                  >
                    <Field
                      as={Input}
                      name="job_title"
                      // onChange={handleChange}
                      placeholder="ex, need Web devloper for figma"
                    />
                  </GridWrapper>

                  <div>
                    <GridWrapper
                      title={"Description"}
                      description={` Provide a short description about the job. Keep it
                          short and to the point.`}
                    >
                      <Textarea
                        name="job_description"
                        // label="Describe about the project"
                        onChange={handleChange}
                        placeholder="writer here"
                      />
                    </GridWrapper>
                  </div>
                  <GridWrapper title={"Skills"} description={"Select Skills"}>
                    <SelectSkills name={"required_skills"} />
                  </GridWrapper>
                  <ExpectedDuration />
                  <ExperienceLevelContainer />

                  <GridWrapper
                    title="Complexity"
                    description="Choose the relavant Complexity"
                  >
                    <div className="flex gap-2 py-2">
                      {complexities?.map((mode) => {
                        return (
                          <Radio
                            key={mode?._id}
                            checked={values?.complexity_id === mode?._id}
                            variant="outline"
                            onChange={(e) => {
                              setFieldValue("complexity_id", e.target?.name);
                            }}
                            name={mode?._id}
                            label={mode?.complexity_text}
                          />
                        );
                      })}
                    </div>
                  </GridWrapper>
                  <JobBudgetContainer />
                  <AttachmentDropzoneContainer />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button
                    type="submit"
                    onClick={() => setFieldValue("draft", false)}
                  >
                    Post Now
                  </Button>
                  <Button
                    variant="outline"
                    type="submit"
                    onClick={() =>
                      setFieldValue("draft", true).then(() => {
                        // handleSubmit();
                      })
                    }
                  >
                    Save as Draft
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Paper>
    </Container>
  );
};

export default CreateJobForm;
