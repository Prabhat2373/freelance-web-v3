import Select from "@/components/ui/inputs/Select";
import SelectSkills from "@/components/ui/inputs/select/SelectSkills";
import { useCreateJobMutation } from "@/features/rtk/app/jobApi";
import { isSuccess } from "@/utils/utils";
import { Box, Container, Paper } from "@mantine/core";
import { Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";

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
  return (
    <Container>
      <Paper shadow="sm" p="xl">
        <Formik initialValues={initialValues} onSubmit={handleCreateJob}>
          {({}) => {
            return (
              <Form>
                <div>
                  <SelectSkills />
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
