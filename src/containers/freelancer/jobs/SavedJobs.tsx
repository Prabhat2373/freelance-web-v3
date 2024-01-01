import JobCard from "@/components/listing/JobCard"
import { useGetJobListingQuery } from "@/features/rtk/app/mainApi"
import React, { useEffect } from "react"

const SavedJobs = () => {
  const { data: jobListings, refetch } = useGetJobListingQuery("")
  useEffect(() => {
    refetch()
  }, [])

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

export default SavedJobs
