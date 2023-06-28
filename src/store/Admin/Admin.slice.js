import { createSlice } from "@reduxjs/toolkit";
import AdminReducer from "./Admin.reducer";

const initialState = {
  adminData: {}
};

export const adminSlice = createSlice({
  name: "Admin",
  initialState,
  reducers: AdminReducer,
});
export const { setAdminData } = adminSlice.actions;
export const adminData = (state) => state.admin.adminData;

export default adminSlice.reducer;
