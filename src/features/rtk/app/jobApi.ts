// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
import { ResponseTransformer } from "@/helper/ResponseTransformer";

// Define a service using a base URL and expected endpoints
export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getJobById: builder.query({
      query: (args) => ({
        url: `jobs/${args}`,
      }),
    }),
    createJob: builder.mutation<any, string>({
      query: (body) => ({
        url: `jobs/create`,
        method: "POST",
        body,
      }),
    }),
    getSkills: builder.query({
      query: () => ({
        url: `/skills`,
      }),
    }),
    getJobDurations: builder.query({
      query: () => ({
        url: `/exected-durations`,
      }),
    }),
    getComplexities: builder.query({
      query: () => ({
        url: `/complexities`,
      }),
    }),
    getPaymentTypes: builder.query({
      query: () => ({
        url: `/payment-types`,
      }),
      transformResponse: ResponseTransformer,
    }),
    getExperienceLevels: builder.query({
      query: () => ({
        url: `experience-levels`,
      }),
      transformResponse: ResponseTransformer,
    }),
    getClientJobs: builder.query({
      query: (params) => ({
        url: `/client/jobs`,
        params: params,
      }),
      // transformResponse: ResponseTransformer,
    }),
  }),
});

export const {
  useGetJobByIdQuery,
  useCreateJobMutation,
  useLazyGetSkillsQuery,
  useGetSkillsQuery,
  useGetJobDurationsQuery,
  useGetComplexitiesQuery,
  useGetPaymentTypesQuery,
  useGetExperienceLevelsQuery,
  useLazyGetClientJobsQuery,
  useGetClientJobsQuery,
} = jobApi;
