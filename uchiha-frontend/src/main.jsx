import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import {
  ChannelPlaylist,
  ChannelSubscribed,
  ChannelTweets,
  ChannelVideos,
  Feed,
  Home,
  Login,
  SignUp,
  VideoDetail,
  PlaylistVideos,
  AuthLayout,
  AboutChannel,
  GuestHistory,
  GuestLikedVideos,
  GuestSubscription,
  GuestAdmin,
  GuestMyChannel,
  GuestSubscribers,
  GuestTweets,
  PageNotFound,
} from "./components/index.js";

import FeedVideos from "./pages/FeedVideos.jsx";
import Channel from "./pages/Channel.jsx";
import History from "./pages/History.jsx";
import LikedVideos from "./pages/LikedVideos.jsx";
import Settings from "./pages/Settings.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FeedTweets from "./pages/FeedTweets.jsx";
import Support from "./pages/Support.jsx";
import SearchResult from "./pages/SearchResult.jsx";






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}>
        <Route path="" element={<Feed />}>
          {/* Home Page Feed Videos */}
          <Route path="" element={<FeedVideos />} />



          {/* Home Page Feed Tweets */}
          <Route
            path="tweets"
            element={
              <AuthLayout authentication guestComponent={<GuestTweets />}>
                <FeedTweets />
              </AuthLayout>
            }
          />

          {/* Playlists */}
          <Route path="playlist/:playlistId" element={<PlaylistVideos />} />

          {/* All Other Channels */}
          <Route path="user/:username" element={<Channel />}>
            <Route path="" element={<ChannelVideos owner={false} />} />
            <Route path="playlists" element={<ChannelPlaylist owner={false} />} />
            <Route path="tweets" element={<ChannelTweets />} owner={false} />
            <Route path="subscribed" element={<ChannelSubscribed owner={false} />} />
            <Route path="about" element={<AboutChannel owner={false} />} />
          </Route>

          {/* Owning My Channel(currently Logged in user) */}
          <Route
            path="channel/:username"
            element={
              <AuthLayout authentication guestComponent={<GuestMyChannel />}>
                <Channel owner />
              </AuthLayout>
            }
          >
            <Route path="" element={<ChannelVideos owner />} />
            <Route path="tweets" element={<ChannelTweets owner />} />
            <Route path="playlists" element={<ChannelPlaylist owner />} />
            <Route path="subscribed" element={<ChannelSubscribed owner />} />
            <Route path="about" element={<AboutChannel owner />} />
          </Route>

          {/* Search Results */}
          <Route path="/results" element={<SearchResult />} />

          {/* User Feeds */}
          <Route
            path="feed/history"
            element={
              <AuthLayout authentication guestComponent={<GuestHistory />}>
                <History />
              </AuthLayout>
            }
          />

          {/* Liked Videos */}
          <Route
            path="feed/liked"
            element={
              <AuthLayout authentication guestComponent={<GuestLikedVideos />}>
                <LikedVideos />
              </AuthLayout>
            }
          />

          {/* <Subscribers /> */}
          <Route
            path="feed/subscribers"
            element={
              <AuthLayout authentication guestComponent={<GuestSubscribers />}>
                <ChannelSubscribed owner isSubscribers />
              </AuthLayout>
            }
          />

          {/* Settings */}
          <Route
            path="settings"
            element={
              <AuthLayout authentication>
                <Settings />
              </AuthLayout>
            }
          />

          {/* Support */}
          <Route path="support" element={<Support />} />
        </Route>

        {/* Video Watching */}
        <Route path="/watch/:videoId" element={<VideoDetail />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <AuthLayout authentication guestComponent={<GuestAdmin />}>
              <Dashboard />
            </AuthLayout>
          }
        />
      </Route>

      {/* Login  */}
      <Route
        path="/login"
        element={
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        }
      />

      {/* Sign up */}
      <Route
        path="/signup"
        element={
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        }
      />

      {/* 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Route>


  )
);



ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
