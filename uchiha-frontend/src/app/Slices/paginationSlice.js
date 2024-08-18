import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseErrorMessage } from "../../helpers/parseErrMsg.helper";
import { axiosInstance } from "../../helpers/axios.helper";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  status: false,
  data: { videos: [], pagingInfo: {} },
};

export const getAllVideosByOption = createAsyncThunk(
  "pagingVideos/getAllVideosByOption",
  async ({ ...queryData }, { signal }) => {
    try {
      // Structure Query
      const queryString =
        "?" +
        Object.entries(queryData)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join("&");

      const controller = new AbortController();
      signal.addEventListener("abort", () => {
        controller.abort();
      });

      const response = await axiosInstance.get(`/videos/all/option${queryString}`, {
        signal: controller.signal,
      });
      // toast.success(response.data.message);
      return response.data.data;
    } catch (error) {
      toast.error(parseErrorMessage(error.response.data));
      console.log(error);
      throw error;
    }
  }
);

const paginationSlice = createSlice({
  name: "pagingVideos",
  initialState,
  reducers: {
    emptyPagingVideosData: (state, action) => {
      state.data = { videos: [], pagingInfo: {} };
    },
  },
  extraReducers: (builder) => {
    // Get All Videos By Option
    builder.addCase(getAllVideosByOption.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllVideosByOption.fulfilled, (state, action) => {
      state.loading = false;
      const { videos, pagingInfo } = action.payload;
      state.data.videos = action.meta.arg.page == 1 ? videos : [...state.data.videos, ...videos];
      state.data.pagingInfo = pagingInfo;
      state.status = true;
    });
    builder.addCase(getAllVideosByOption.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });
  },
});

export default paginationSlice.reducer;
export const { emptyPagingVideosData } = paginationSlice.actions;
