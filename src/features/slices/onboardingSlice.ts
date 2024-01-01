import { PayloadAction } from "@reduxjs/toolkit";
// onboardingSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    motive: "",
    title: "",
    email: "",
    educationDetails: "",
    experience: "",
    language: "",
    skills: "",
    description: "",
    hourly_rate: "",
    contact_info: {
      first_name: "",
      last_name: "",
      address: "",
      city_name: "",
      country: "",
      zip: "",
      phone: "",
    },
  },
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setOnboardingValues: (
      state,
      action: PayloadAction<typeof initialState>
    ) => {
      state.values = action.payload;
    },
  },
});

export const { setOnboardingValues } = onboardingSlice.actions;

export default onboardingSlice.reducer;
