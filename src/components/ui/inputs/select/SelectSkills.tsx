// import { useGetSkillsQuery } from "@/features/rtk/app/mainApi";
import React from "react";
import Select from "../Select";
import { useGetSkillsQuery } from "@/features/rtk/app/jobApi";
import { useFormikContext } from "formik";

const SelectSkills = ({ name, ...props }) => {
  const { data: skillsData } = useGetSkillsQuery("");
  const { setFieldValue, values } = useFormikContext();
  console.log("skillsData", skillsData);

  const skillsOptions = skillsData?.data?.map((skill) => {
    return {
      label: skill?.skill_name,
      value: skill?._id,
    };
  });
  console.log("skillsOptions", skillsOptions);

  return (
    <>
      <Select
        isMulti
        options={skillsOptions}
        label={"Skills"}
        placeholder={"Select Skills"}
        onChange={(val) => {
          console.log("selectVal", val);
          setFieldValue(name, val);
        }}
        {...props}
      />
    </>
  );
};

export default SelectSkills;
