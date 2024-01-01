import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface BillingInfo {
  billing_first_name: string
  billing_last_name: string
  billing_email: string
  billing_phone: string
  billing_address_line1: string
  billing_address_line2: string
  billing_city: string
  billing_state: string
  billing_zip: string
  billing_country: string
}

export interface UserType {
  user: any
  avatar: Avatar
  role: string
  _id: string
  name: string
  email: string
  password: string
  createdAt: string
  __v: number
  billing_info: BillingInfo
  resetPasswordExpire: string
  resetPasswordToken: string
  user_account: any
}

export interface Avatar {
  public_id: string
  url: string
}

const initialState = {
  isLoggedIn: false,
  user: {},
  role: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginUser: (state, action: PayloadAction<UserType>) => {
      state.isLoggedIn = true
      state.user = action.payload
      state.role = action.payload.user_account?.role
    },
    LogoutUser: (state) => {
      state.isLoggedIn = false
      state.user = []
      state.role = ""
    },
    setStoreUser: (state, action: PayloadAction<UserType>) => {
      const user = action.payload
      console.log("userInSlice", user)
      state.user = user
    },
  },
})

export const { LogoutUser, LoginUser, setStoreUser } = userSlice.actions

export default userSlice.reducer
