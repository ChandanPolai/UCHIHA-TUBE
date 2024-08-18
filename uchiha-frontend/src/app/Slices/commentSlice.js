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

export const getVideoComments = createAsyncThunk("comment/getVideoComments", async (videoId) => {
  try {
    const response = await axiosInstance.get(`/comment/get/${videoId}`);
    // toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});

export const addComment = createAsyncThunk("comment/addComment", async ({ videoId, content }) => {
  try {
    const response = await axiosInstance.post(`/comment/add/${videoId}`, { content });
    // toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});

export const updateComment = createAsyncThunk(
  "comment/updateComment",
  async ({ commentId, data }) => {
    try {
      const response = await axiosInstance.patch(`/comment/${commentId}`, data);
      toast.success(response.data.message);
      return response.data.data;
    } catch (error) {
      toast.error(parseErrorMessage(error.response.data));
      console.log(error);
      throw error;
    }
  }
);

export const deleteComment = createAsyncThunk("comment/deleteComment", async ({ commentId }) => {
  try {
    const response = await axiosInstance.delete(`/comment/${commentId}`);
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response.data));
    console.log(error);
    throw error;
  }
});

const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: (builder) => {
    // get Video Comments
    builder.addCase(getVideoComments.pending, (state) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(getVideoComments.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(getVideoComments.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // add Comment
    builder.addCase(addComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.loading = false;
      state.data.unshift(action.payload);
      state.status = true;
    });
    builder.addCase(addComment.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // update Comment
    builder.addCase(updateComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      state.loading = false;
      // state.data = action.payload;
      state.status = true;
    });
    builder.addCase(updateComment.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });

    // delete Comment
    builder.addCase(deleteComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.loading = false;
      // state.data = action.payload;
      state.status = true;
    });
    builder.addCase(deleteComment.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });
  },
});

export default commentSlice.reducer;
