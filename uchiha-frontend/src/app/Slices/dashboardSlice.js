import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseErrorMessage } from "../../helpers/parseErrMsg.helper";
import { axiosInstance } from "../../helpers/axios.helper";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  status: false,
  data: {},
};

export const getChannelStats = createAsyncThunk("dashboard/getChannelStats", async () => {
  try {
    const response = await axiosInstance.get(`/dashboard/states`);
    //toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});

export const getChannelVideos = createAsyncThunk("dashboard/getChannelVideos", async () => {
  try {
    const response = await axiosInstance.get(`/dashboard/videos`);
    //toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers: (builder) => {
    // get Channel Stats
    builder.addCase(getChannelStats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getChannelStats.fulfilled, (state, action) => {
      state.loading = false;
      state.data.channelStates = action.payload;
      state.status = true;
    });
    builder.addCase(getChannelStats.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // get Channel Videos
    builder.addCase(getChannelVideos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getChannelVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.data.channelVideos = action.payload;
      state.status = true;
    });
    builder.addCase(getChannelVideos.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });
  },
});

export default dashboardSlice.reducer;
