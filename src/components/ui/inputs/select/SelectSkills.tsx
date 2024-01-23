// import { useGetSkillsQuery } from "@/features/rtk/app/mainApi";
import React from "react";
import Select from "../Select";
import { useGetSkillsQuery } from "@/features/rtk/app/jobApi";

const SelectSkills = () => {
  const { data: skillsData } = useGetSkillsQuery("");
  console.log("skillsData", skillsData);

  const skillsOptions = skillsData?.data?.map((skill) => skill?.skill_name);
  console.log("skillsOptions", skillsOptions);

  return (
    <>
      <Select
        options={skillsOptions}
        label={"Skills"}
        placeholder={"Select Skills"}
        onChange={(val) => {
          console.log("selectVal", val);
        }}
      />
    </>
  );
};

export default SelectSkills;
