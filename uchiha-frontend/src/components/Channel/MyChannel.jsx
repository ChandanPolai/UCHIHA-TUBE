import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { channelProfile } from "../../app/Slices/userSlice";
import { useNavigate } from "react-router-dom";

function MyChannel() {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(channelProfile(username)).then((res) => setProfile(res.payload));
  }, [username]);

  return profile ? (
    <section className="relative w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      {/* Cover Image */}
      <div className="relative min-h-[150px]  w-full pt-[16.28%]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={profile?.coverImage} alt={profile?.username} />
        </div>
      </div>

      <div className=" px-4 pb-4">
        {/* Channel Metadata */}
        <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
            <img src={profile?.avatar} alt="Channel" className="h-full w-full" />
          </span>
          <div className="mr-auto inline-block">
            <h1 className="font-bolg text-xl">{profile?.fullName}</h1>
            <p className="text-sm text-gray-400">@{profile?.username}</p>
            <p className="text-sm text-gray-400">
              {profile?.subscribersCount} Subscribers · {profile.channelsSubscribedToCount}{" "}
              Subscribed
            </p>
          </div>
          <div className="inline-block">
            <button
              onClick={() => navigate("/settings")}
              className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto"
            >
              <span className="inline-block w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  ></path>
                </svg>
              </span>
              Edit
            </button>
          </div>
        </div>
        {/* Tab List */}
        <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
          <li className="w-full">
            <NavLink to={""}>
              <button className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">
                Videos
              </button>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"playlists"}>
              <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                Playlist
              </button>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"tweets"}>
              <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                Tweets
              </button>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"subscribed"}>
              <button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
                Subscribed
              </button>
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  ) : (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      {/* Cover Image Skeleton */}
      <div className="relative min-h-[150px] w-full pt-[16.28%] bg-gray-800 animate-pulse">
        <div className="absolute inset-0 overflow-hidden">
          {/* Placeholder for the cover image */}
        </div>
      </div>

      <div className="px-4 pb-4">
        {/* Channel Metadata Skeleton */}
        <div className="flex flex-wrap gap-4 pb-4 pt-6">
          <div className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full bg-gray-800 animate-pulse"></div>
          <div className="mr-auto inline-block">
            <div className="h-5 w-32 bg-gray-800 rounded animate-pulse"></div>
            <div className="mt-2 h-3 w-24 bg-gray-800 rounded animate-pulse"></div>
            <div className="mt-2 h-3 w-40 bg-gray-800 rounded animate-pulse"></div>
          </div>
          <div className="inline-block">
            <div className="inline-flex min-w-[145px] justify-end">
              <div className="h-10 w-32 bg-gray-800 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* List Options Skeleton */}
        <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
          <li className="w-full">
            <div className="h-10 w-full bg-gray-800 rounded animate-pulse"></div>
          </li>
          <li className="w-full">
            <div className="h-10 w-full bg-gray-800 rounded animate-pulse"></div>
          </li>
          <li className="w-full">
            <div className="h-10 w-full bg-gray-800 rounded animate-pulse"></div>
          </li>
          <li className="w-full">
            <div className="h-10 w-full bg-gray-800 rounded animate-pulse"></div>
          </li>
        </ul>

        {/* Outlet Skeleton */}
        <div className="h-64 w-full bg-gray-800 rounded animate-pulse"></div>
      </div>
    </section>
  );
}

export default MyChannel;
