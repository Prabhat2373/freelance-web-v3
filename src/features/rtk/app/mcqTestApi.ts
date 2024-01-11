import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

export const mcqTestApi = createApi({
  reducerPath: "mcqTestApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getAllTests: build.query({
      query: () => `/tests`,
    }),
    getTestById: build.query({
      query: (id) => ({
        url: `/tests/${id}`,
      }),
    }),
    submitTest: build.mutation({
      query: ({ id, body }) => ({
        url: `/tests/${id}/submit`,
        method: "POST",
        body,
      }),
    }),
    getTestResults: build.query({
      query: (id) => ({
        url: `/tests/${id}/result`,
      }),
    }),
  }),
});

export const {
  useGetAllTestsQuery,
  useLazyGetAllTestsQuery,
  useLazyGetTestByIdQuery,
  useGetTestByIdQuery,
  useSubmitTestMutation,
  useLazyGetTestResultsQuery,
} = mcqTestApi;
