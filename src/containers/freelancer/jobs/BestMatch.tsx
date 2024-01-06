import JobCard from "@/components/listing/JobCard";
import { useGetJobListingQuery } from "@/features/rtk/app/mainApi";
import React from "react";

const BestMatch = () => {
  const { data: jobListings } = useGetJobListingQuery("");
  console.log("jobListings", jobListings);

  const jobs = jobListings?.data;

  return (
    <div className="flex w-full">
      <div>
        {jobs?.length ? (
          jobs?.map((job) => {
            return <JobCard data={job} />;
          })
        ) : (
          <>No Jobs Matching</>
        )}
      </div>
    </div>
  );
};

export default BestMatch;
