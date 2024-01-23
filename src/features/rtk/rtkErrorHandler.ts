import { globalRoutes } from "@/constants/app.constant";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    console.log("action", action);

    // if (isRejectedWithValue(action)) {
    //   console.warn("We got a rejected action!")
    //   toast.warn(action.error.data.message)
    // }
    if (action.payload?.status === 400) {
      toast.error(action?.payload?.data?.message);
      console.log("errorr");
    }
    if (action.payload?.status === 401) {
      toast.error(
        action?.payload?.data?.error ?? action?.payload?.data?.message
      );
      if (!globalRoutes?.includes(window?.location?.pathname))
        window.location.href = "/auth/login";
      console.log("errorr");
    }

    return next(action);
  };
