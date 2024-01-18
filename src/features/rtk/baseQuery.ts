// import { getToken, getTokenCookie } from "@/utils/Utils"
import { getToken } from "@/utils/utils";
import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const baseQuery = retry(
  fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
    // credentials: "include",
    prepareHeaders: async (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${Cookies.get("token") ?? getToken()}`
      );
      headers.set("accept", "application/json");
      //   headers.set("Cookies", Cookies.get("token") || getToken())
      return headers;
    },
  }),
  {
    maxRetries: 0,
  }
);
