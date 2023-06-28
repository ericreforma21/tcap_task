import { createSlice } from "@reduxjs/toolkit";
import PageReducer from './Page.reducer';

const initialState = {
  activePage: '/login',
  authPageHeight: 0,
};

export const pageSlice = createSlice({
  name: "Page",
  initialState,
  reducers: PageReducer,
});

export const { setCurrentPage, setPageHeight, setDailyBackground } = pageSlice.actions;
export const activePage = (state) => state.page.activePage;
export const authPageHeight = (state) => state.page.authPageHeight;
export default pageSlice.reducer;
