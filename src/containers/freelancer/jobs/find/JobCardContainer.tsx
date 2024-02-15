"use client";
import JobListCard from "@/components/listing/JobListCard";
import {
  useGetJobListingQuery,
  useLazyGetJobListingQuery,
} from "@/features/rtk/app/mainApi";
import React, { useEffect } from "react";

const JobCardContainer = () => {
  const [getJobs, { data: jobsData }] = useLazyGetJobListingQuery();

  const jobs = jobsData?.data ?? [];
  useEffect(() => {
    getJobs("");
  }, []);

  console.log("jobs", jobs);

  return (
    <div>
      {jobs?.map((job) => {
        return <JobListCard data={job} />;
      })}
    </div>
  );
};

export default JobCardContainer;
