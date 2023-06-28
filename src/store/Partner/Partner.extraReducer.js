import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPartnerNumberBlockList as  getPartnerNumberBlockListAPI} from "../../services/PartnerAPI";

export const getPartnerNumberBlockList = createAsyncThunk(
  "Partner/getNumberBlock",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getPartnerNumberBlockListAPI(data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
