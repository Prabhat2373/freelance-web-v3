import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../slices/userReducer";
// import { mainApi } from "@rtk/app/mainApi"
import onboardingSlice from "../slices/onboardingSlice";
// import { jobApi } from "@rtk/app/jobApi"
import { userApi } from "../rtk/app/userApi";
import { rtkQueryErrorLogger } from "../rtk/rtkErrorHandler";
import { mainApi } from "../rtk/app/mainApi";
import { jobApi } from "../rtk/app/jobApi";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: rootReducer,
    onboarding: onboardingSlice,
    // Add the generated reducer as a specific top-level slice
    [mainApi.reducerPath]: mainApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(mainApi.middleware)
      .concat(userApi.middleware)
      .concat(rtkQueryErrorLogger)
      .concat(jobApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
