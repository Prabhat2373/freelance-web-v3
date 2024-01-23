// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

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
  }),
});

export const {
  useGetJobByIdQuery,
  useCreateJobMutation,
  useLazyGetSkillsQuery,
  useGetSkillsQuery,
} = jobApi;
