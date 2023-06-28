import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentAdminUser as adminUserAPI } from "../../services/AdminUserAPI";

export const getCurrentAdmin = createAsyncThunk(
  "Admin/Me",
  async (data, { rejectWithValue }) => {
    try {
      const response = await adminUserAPI(data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
