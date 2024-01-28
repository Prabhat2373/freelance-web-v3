"use client";

import JobCard from "@/components/listing/JobCard";
import JobListCard from "@/components/listing/JobListCard";
import Page from "@/components/page/Page";
import TablePagination from "@/components/table/TablePagination";
import { GradientSegmentedControl } from "@/components/ui/tabs/GradientSegmentedControl";
import { ACTIVE_JOB_MENU } from "@/constants/jobs.constant";
import {
  useGetClientJobsQuery,
  useLazyGetClientJobsQuery,
} from "@/features/rtk/app/jobApi";
import { capitalizeFirst } from "@/utils/utils";
import { ActionIcon, Text, Title, Tooltip } from "@mantine/core";
import { IconPlus, IconRefresh } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ClientMyJobsContainer = () => {
  const [activeMenu, setActiveMenu] = useState(ACTIVE_JOB_MENU.ALL);
  // const { data: clientJobs } = useGetClientJobsQuery("");
  const [jobs, setJobs] = useState([]);
  const [getClientJobs, { data: clientJobsData }] = useLazyGetClientJobsQuery();

  const menuTabLinks = [
    capitalizeFirst(ACTIVE_JOB_MENU.ALL),
    capitalizeFirst(ACTIVE_JOB_MENU.DRAFTS),
  ];

  const refetchJobs = (params?: any) => {
    getClientJobs({
      drafts: activeMenu === ACTIVE_JOB_MENU.DRAFTS,
      ...params,
    }).then((res) => setJobs(res?.data?.data ?? []));
  };
  useEffect(() => {
    refetchJobs();
  }, [activeMenu]);
  console.log("clientJobsData", clientJobsData);

  return (
    <Page withBg={false}>
      <div className="flex justify-between items-center">
        <Title>Your Jobs</Title>
        <GradientSegmentedControl
          onChange={(menu) => setActiveMenu(menu?.toLowerCase())}
          tabs={menuTabLinks}
        />
        <div className="flex gap-2">
          <Tooltip label="Refresh" withArrow>
            <ActionIcon variant="subtle" onClick={refetchJobs}>
              <IconRefresh />
            </ActionIcon>
          </Tooltip>
          <Link href={"/cl/jobs/create"}>
            <Tooltip label="Upload New Job" withArrow>
              <ActionIcon variant="subtle">
                <IconPlus />
              </ActionIcon>
            </Tooltip>
          </Link>
        </div>
      </div>
      <div className="mx-4">
        {jobs?.map((job) => {
          return <JobListCard data={job} key={job?._id} withClient />;
        })}
        {/* <JobListCard /> */}
      </div>
      <TablePagination
        meta={clientJobsData}
        total={clientJobsData?.data?.length}
        onPageChange={(pageIndex) => {
          refetchJobs({
            page: pageIndex,
          });
        }}
      />
    </Page>
  );
};

export default ClientMyJobsContainer;
