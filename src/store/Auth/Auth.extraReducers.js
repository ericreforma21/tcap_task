import { createAsyncThunk } from "@reduxjs/toolkit";
import { authLogin } from "../../services/AuthAPI";
import { setXRequestScope, setRequestHeaderToken } from "../../services/useApi";
import { Scope } from "../../constants/Scope";

export const login = createAsyncThunk(
  "Auth/login",
  async (data, { rejectWithValue }) => {
    try {
      setXRequestScope(Scope.CompanyAdmin);
      const payload = { username: data?.username, password: data?.password, code: data?.code };
      const response = await authLogin(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const handleFulFilled = (state, action) => {
  const userData = action.payload;
  state.authPending = false;
  state.userData = userData;
};

const hanldePending = (state) => {
  state.authPending = true;
};

const handleRejected = (state) => {
  state.authPending = false;
};
const AuthExtraReducer = (builder) => {
  builder
    .addCase(login.pending, hanldePending)
    .addCase(login.fulfilled, handleFulFilled)
    .addCase(login.rejected, handleRejected);
};

export default AuthExtraReducer;
