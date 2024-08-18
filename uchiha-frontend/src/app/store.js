import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";
import videoSlice from "./Slices/videoSlice";
import playlistSlice from "./Slices/playlistSlice";
import subscriptionSlice from "./Slices/subscriptionSlice";
import tweetSlice from "./Slices/tweetSlice";
import likeSlice from "./Slices/likeSlice";
import commentSlice from "./Slices/commentSlice";
import dashboardSlice from "./Slices/dashboardSlice";
import paginationSlice from "./Slices/paginationSlice";
import darkModeReducer from './Slices/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    video: videoSlice,
    tweet: tweetSlice,
    subscription: subscriptionSlice,
    playlist: playlistSlice,
    like: likeSlice,
    comment: commentSlice,
    dashboard: dashboardSlice,
    pagingVideos: paginationSlice,
    darkMode: darkModeReducer,
    
  },
});
