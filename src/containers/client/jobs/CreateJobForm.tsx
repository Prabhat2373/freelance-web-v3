import AttachmentDropzoneContainer from "@/components/jobs/AttachmentDropzoneContainer";
import ExperienceLevelContainer from "@/components/jobs/ExperienceLevelContainer";
import JobBudgetContainer from "@/components/jobs/JobBudgetContainer";
import SelectSkills from "@/components/ui/inputs/select/SelectSkills";
import {
  useCreateJobMutation,
  useGetComplexitiesQuery,
  useGetJobDurationsQuery,
  useGetPaymentTypesQuery,
} from "@/features/rtk/app/jobApi";
import { isSuccess } from "@/utils/utils";
import {
  Button,
  Container,
  Input,
  Paper,
  Radio,
  Text,
  Textarea,
} from "@mantine/core";
import { Form, Formik } from "formik";
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
          {({ handleChange, values, setFieldValue }) => {
            console.log("values", values);

            return (
              <Form>
                <div>
                  <Input.Wrapper label="Job title">
                    <Input
                      name="job_title"
                      onChange={handleChange}
                      placeholder="ex, need Web devloper for figma"
                    />
                  </Input.Wrapper>
                </div>
                <div>
                  <Textarea
                    name="job_description"
                    label="Describe about the project"
                    onChange={handleChange}
                    placeholder="writer here"
                  />
                </div>
                <div>
                  <SelectSkills name={"required_skills"} />
                </div>
                <div>
                  <Text>Estimate your timeline here</Text>
                  <div className="flex gap-2">
                    {projectEstimateDurations?.map((duration) => {
                      return (
                        <Radio
                          key={duration?._id}
                          checked={
                            values?.expected_duration_id === duration?._id
                          }
                          variant="outline"
                          onChange={(e) => {
                            console.log("event", e);
                            setFieldValue(
                              "expected_duration_id",
                              e.target?.name
                            );
                          }}
                          name={duration?._id}
                          label={duration?.duration}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Text>Complexity</Text>
                  <div className="flex gap-2">
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
                </div>
                <JobBudgetContainer />
                <ExperienceLevelContainer />
                <AttachmentDropzoneContainer />

                <div className="flex gap-2">
                  <Button type="submit">Post Now</Button>
                  <Button variant="outline">Save as Draft</Button>
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
