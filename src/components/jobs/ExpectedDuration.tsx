import { useGetJobDurationsQuery } from "@/features/rtk/app/jobApi";
import { Radio, Text } from "@mantine/core";
import { useFormikContext } from "formik";
import Select from "../ui/inputs/Select";
import GridWrapper from "../ui/GridWrapper";

const ExpectedDuration = () => {
  const { data: projectDurations } = useGetJobDurationsQuery("");

  const { values, setFieldValue } = useFormikContext();
  const projectEstimateDurations = projectDurations?.data;

  const projectExpectedTimeOptions = [
    {
      label: "1 - 3 Months",
      value: "1_to_3_months",
    },
    {
      label: "3 - 6 Months",
      value: "3_to_6_months",
    },
    {
      label: "6 - 12 Months",
      value: "6_to_12_months",
    },
  ];
  return (
    <div className="border-b border-border-primary pb-4">
      <GridWrapper title={"Select Duration"}>
        <div className="flex gap-2 mt-2">
          {projectEstimateDurations?.map((duration) => {
            return (
              <Radio
                key={duration?._id}
                checked={values?.expected_duration_id === duration?._id}
                variant="outline"
                onChange={(e) => {
                  console.log("event", e);
                  setFieldValue("expected_duration_id", e.target?.name);
                }}
                name={duration?._id}
                label={duration?.duration}
              />
            );
          })}
        </div>
      </GridWrapper>
     <GridWrapper title="Duration" description="How long your work take?">
     <div className="py-3 mt-2">

        <Select
          options={projectExpectedTimeOptions}
          className="w-1/3"
          placeholder="Ex.1-6 months"
        />
      </div>
     </GridWrapper>
    </div>
  );
};

export default ExpectedDuration;
