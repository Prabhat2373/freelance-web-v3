import Select from "@/components/ui/inputs/Select";
import SelectSkills from "@/components/ui/inputs/select/SelectSkills";
import { useCreateJobMutation } from "@/features/rtk/app/jobApi";
import { isSuccess } from "@/utils/utils";
import { Box, Container, Input, Paper, Radio, Textarea } from "@mantine/core";
import { Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import { Text } from "@mantine/core";

const CreateJobForm = () => {
  const [createJob, { isLoading: isJobCreating }] = useCreateJobMutation();
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

  const projectEstimateDurations = ["small", "medium", "large"];

  const projectPaymentModes = ["fixed_price", "hourly"];
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
                      name="title"
                      onChange={handleChange}
                      placeholder="ex, need Web devloper for figma"
                    />
                  </Input.Wrapper>
                </div>
                <div>
                  <Textarea
                    name="description"
                    label="Describe about the project"
                    onChange={handleChange}
                    placeholder="writer here"
                  />
                </div>
                <div>
                  <SelectSkills />
                </div>
                <div>
                  <Text>Estimate your timeline here</Text>
                  <div className="flex gap-2">
                    {projectEstimateDurations?.map((duration) => {
                      return (
                        <Radio
                          key={duration}
                          checked={values?.project_type === duration}
                          variant="outline"
                          onChange={(e) => {
                            console.log("event", e);
                            setFieldValue("project_type", e.target?.name);
                          }}
                          name={duration}
                          label={duration}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Text>Tell us about your budget?</Text>
                  <div>
                    {projectPaymentModes?.map((mode) => {
                      return (
                        <Radio
                          key={mode}
                          checked={values?.project_mode === mode}
                          variant="outline"
                          onChange={(e) => {
                            setFieldValue("project_mode", e.target?.name);
                          }}
                          name={mode}
                          label={mode}
                        />
                      );
                    })}
                  </div>
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
