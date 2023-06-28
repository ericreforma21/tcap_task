import { createSlice } from "@reduxjs/toolkit";
import AuthReducer from './Auth.reducer';
import AuthExtraReducer from "./Auth.extraReducers";

const initialState = {
  isLogin: false,
  userData: {},
  authPending: false,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: AuthReducer,
  extraReducers: AuthExtraReducer
});
export const { loginUser, logoutUser } = authSlice.actions;
export const isLogin = (state) => state.auth.isLogin;

export default authSlice.reducer;
