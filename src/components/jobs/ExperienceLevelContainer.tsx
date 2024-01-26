import { useGetExperienceLevelsQuery } from "@/features/rtk/app/jobApi";
import { Radio, Text } from "@mantine/core";
import { useFormikContext } from "formik";
import React from "react";

const ExperienceLevelContainer = () => {
  const { data: experienceLevels } = useGetExperienceLevelsQuery("");
  const { setFieldValue, values } = useFormikContext();
  console.log("experienceLevels", experienceLevels);

  return (
    <div>
      <Text>Choose Experience Level</Text>

      <div className="flex gap-2 py-2">
        {experienceLevels?.map((experience) => {
          return (
            <Radio
              key={experience?._id}
              checked={values?.experience_level === experience?._id}
              variant="outline"
              onChange={(e) =>
                setFieldValue("experience_level", e.target?.name)
              }
              name={experience?._id}
              label={experience?.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceLevelContainer;
