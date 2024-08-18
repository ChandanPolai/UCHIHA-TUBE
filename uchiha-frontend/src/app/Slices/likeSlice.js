import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseErrorMessage } from "../../helpers/parseErrMsg.helper";
import { axiosInstance } from "../../helpers/axios.helper";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  status: false,
  data: null,
};

export const getLikedVideos = createAsyncThunk("like/getLikedVideos", async () => {
  try {
    const response = await axiosInstance.get(`/like/videos`);
    //toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

export const toggleLike = createAsyncThunk("like/toggleLike", async ({ qs, toggleLike }) => {
  try {
    const response = await axiosInstance.patch(`/like?toggleLike=${toggleLike}&${qs}`);
    //toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});
export const toggleCommentLike = createAsyncThunk(
  "like/toggleCommentLike",
  async ({ commentId, toggleLike }) => {
    try {
      const response = await axiosInstance.patch(
        `/like/comment/${commentId}?toggleLike=${toggleLike}`
      );
      //toast.success(response.data.message);
      return response.data.data;
    } catch (error) {
      toast.error(parseErrorMessage(error.response.data));
      console.log(error);
    }
  }
);

export const toggleTweetLike = createAsyncThunk("like/toggleTweetLike", async (tweetId) => {
  try {
    const response = await axiosInstance.patch(`/like/tweet/${tweetId}`);
    //toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

export const toggleVideoLike = createAsyncThunk("like/toggleVideoLike", async (videoId) => {
  try {
    const response = await axiosInstance.patch(`/like/video/${videoId}`);
    //toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
  }
});

const likeSlice = createSlice({
  name: "like",
  initialState,
  extraReducers: (builder) => {
    // get Liked Videos
    builder.addCase(getLikedVideos.pending, (state) => {
      state.loading = true;
      state.data = null;
    });
    builder.addCase(getLikedVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(getLikedVideos.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // toggle like
    builder.addCase(toggleLike.pending, (state) => {
      state.loading = true;
      state.data = null;
    });
    builder.addCase(toggleLike.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(toggleLike.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // toggle Comment Like
    builder.addCase(toggleCommentLike.pending, (state) => {
      state.loading = true;
      state.data = null;
    });
    builder.addCase(toggleCommentLike.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(toggleCommentLike.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // toggle TweetLike
    builder.addCase(toggleTweetLike.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(toggleTweetLike.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(toggleTweetLike.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // toggle Video Like
    builder.addCase(toggleVideoLike.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(toggleVideoLike.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(toggleVideoLike.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });
  },
});

export default likeSlice.reducer;
