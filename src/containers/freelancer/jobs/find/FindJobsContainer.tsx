import React from "react";
import JobsFilterContainer from "./JobsFilterContainer";
import JobSearchContainer from "./JobSearchContainer";
import JobCardContainer from "./JobCardContainer";
import Container from "@/components/ui/Container";

const FindJobsContainer = () => {
  return (
    <div>
      <Container className="w-full">
        <div className="grid grid-cols-8 gap-3">
          <div className="col-span-2">
            <JobsFilterContainer />
          </div>
          <div className="col-span-6">
            <JobSearchContainer />
            <JobCardContainer />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FindJobsContainer;
