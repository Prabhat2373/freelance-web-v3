import JobCard from "@/components/listing/JobCard"
import { useGetJobListingQuery } from "@/features/rtk/app/mainApi"
import React from "react"

const BestMatch = () => {
  const { data: jobListings } = useGetJobListingQuery("")
  console.log("jobListings", jobListings)

  return (
    <div className="flex w-full">
      <div>
        {jobListings?.data?.map((job) => {
          return <JobCard data={job} />
        })}
      </div>
    </div>
  )
}

export default BestMatch
