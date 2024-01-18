"use client";
import McqTestCard from "@/components/ui/cards/McqTestCard";
import { useGetAllTestsQuery } from "@/features/rtk/app/mcqTestApi";
import React from "react";

const TestsCardContainer = () => {
  const { data: testsData } = useGetAllTestsQuery("");
  console.log("testsData", testsData);

  return (
    <div className="flex gap-3">
      {testsData?.data?.map((test) => {
        return <McqTestCard data={test} />;
      })}
    </div>
  );
};

export default TestsCardContainer;
