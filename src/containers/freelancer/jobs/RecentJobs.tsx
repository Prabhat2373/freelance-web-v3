import JobCard from "@/components/listing/JobCard"
import { useGetJobListingQuery } from "@/features/rtk/app/mainApi"
import React, { useEffect } from "react"

const RecentJobs = () => {
  const { data: jobListings, refetch } = useGetJobListingQuery({
    sort: "-created_at",
  })
  console.log("jobListings", jobListings)
  useEffect(() => {
    refetch().then((res) => console.log("res", res))
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

export default RecentJobs
