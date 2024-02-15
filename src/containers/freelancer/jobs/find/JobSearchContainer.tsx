import JobListSearchInput from "@/components/inputs/jobs/JobListSearchInput";
import JobSelectCountryInput from "@/components/inputs/jobs/JobSelectCountryInput";
import { Button } from "@mantine/core";
import React from "react";

const JobSearchContainer = () => {
  return (
    <div className="border border-border-primary rounded-md flex justify-between p-4">
      <div className="flex w-full">
        <div className="border-r w-full flex items-center border-border-primary mr-3">
          <JobListSearchInput />
        </div>
        <JobSelectCountryInput />
      </div>
      <div>
        <Button color="green" className="text-white bg-green-300">
          Find Jobs
        </Button>
      </div>
    </div>
  );
};

export default JobSearchContainer;
