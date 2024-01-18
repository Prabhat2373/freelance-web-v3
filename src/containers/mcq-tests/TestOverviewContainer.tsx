"use client";
import { useLazyGetTestByIdQuery } from "@/features/rtk/app/mcqTestApi";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import TestOverview from "./TestOverview";

const TestOverviewContainer = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [getTestById, { data: testData }] = useLazyGetTestByIdQuery();
  console.log("testData", testData);

  useEffect(() => {
    if (id) {
      getTestById(id);
    }
  }, [id]);

  return (
    <div>
      <TestOverview test={testData?.data} />
    </div>
  );
};

export default TestOverviewContainer;
