// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/v1/",
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "authorization",
        `bearer ${String(localStorage.getItem("token"))}`
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    getJobById: builder.query({
      query: (args) => ({
        url: `job/${args}`,
      }),
    }),
  }),
})

export const { useGetJobByIdQuery } = jobApi
