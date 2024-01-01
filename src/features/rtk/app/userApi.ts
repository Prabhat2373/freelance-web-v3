// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseQuery } from "../baseQuery"

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: () => "/account",
    }),
    updateAccount: builder.mutation({
      query: (body) => ({
        url: "/account",
        method: "PUT",
        body,
      }),
    }),
    deleteExperience: builder.query({
      query: (id: string) => ({
        url: `/employment-history/${id}`,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLazyGetAccountQuery,
  useGetAccountQuery,
  useUpdateAccountMutation,
  useLazyDeleteExperienceQuery,
} = userApi
