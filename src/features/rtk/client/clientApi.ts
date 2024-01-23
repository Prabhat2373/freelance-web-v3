// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

// Define a service using a base URL and expected endpoints
export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
  // getSkills:builder.query({

  // })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {} = clientApi;
