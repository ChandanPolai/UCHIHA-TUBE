import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { channelProfile } from "../../app/Slices/userSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formatSubscription } from "../../helpers/formatFigures";
import { toggleSubscription } from "../../app/Slices/subscriptionSlice";
import { LoginPopup } from "..";

function UserProfile({ userId }) {
  const loginPopupDialog = useRef();
  const dispatch = useDispatch();

  const { userData, loading } = useSelector((state) => state.user);
  const { status: authStatus } = useSelector(({ auth }) => auth);

  const [localData, setLocalData] = useState(null);

  useEffect(() => {
    if (!userId) return;
    dispatch(channelProfile(userId)).then((res) => setLocalData(res.payload));
  }, [userId, dispatch]);

  async function handleToggleSubscription(channelId) {
    if (!authStatus) return loginPopupDialog.current?.open();
    setLocalData((pre) => ({ ...pre, isSubscribed: !pre.isSubscribed }));
    dispatch(toggleSubscription(channelId)).then(() => dispatch(channelProfile(userId)));
  }

  if ((!localData && loading) || !userId)
    return (
      <div className="mt-4 flex items-center justify-between">
        {/* Owner Data */}
        <div key="owner-data" className="flex items-center gap-x-4">
          <div className="mt-2 h-12 w-12 shrink-0">
            <div className="h-full w-full rounded-full bg-slate-100/10 animate-pulse"></div>
          </div>
          <div className="block mt-2">
            <p className="text-transparent sm:w-52 h-5 mb-1 bg-slate-100/10 rounded animate-pulse"></p>
            <p className="text-sm text-transparent w-32 h-5 bg-slate-100/10 rounded animate-pulse"></p>
          </div>
        </div>
        <div key="subscribe-btn" className="block">
          <div
            className={`group/btn mr-1 flex w-full items-center gap-x-2 px-3 py-2 text-center font-bold text-transparent bg-slate-100/10 rounded animate-pulse sm:w-auto`}
          >
            <span className="inline-block w-16 sm:w-32 h-8"></span>
          </div>
        </div>
      </div>
    );

  let profileData = userData || localData;

  // Something went wrong Profile...
  if (!profileData)
    return (
      <div className="flex w-full h-screen flex-col gap-y-4 px-16 py-4 rounded bg-slate-100/10 animate-pulse"></div>
    );

  return (
    <div className="mt-4 flex items-center justify-between">
      <LoginPopup ref={loginPopupDialog} message="Sign in to Subscribe..." />
      {/* Owner Data */}
      <div key="owner-data" className="flex items-center gap-x-4">
        <div className="mt-2 h-12 w-12 shrink-0">
          <Link to={`/user/${profileData?.username}`}>
            <img
              src={profileData?.avatar}
              alt="reactpatterns"
              className="h-full w-full rounded-full"
            />
          </Link>
        </div>
        <div className="block">
          <p className="dark:text-gray-200 text-black dark:hover:text-gray-300 hover:text-[#333]">
            <Link to={`/user/${profileData?.username}`}>{profileData?.fullName}</Link>
          </p>
          <p className="text-sm dark:text-gray-400 text-[#333]">
            {formatSubscription(profileData?.subscribersCount)}
          </p>
        </div>
      </div>
      {/* Subscribe Button */}
      <div
        key="subscribe-btn"
        onClick={() => handleToggleSubscription(profileData?._id)}
        className="block"
      >
        <button
          className={`group/btn mr-1 flex w-full items-center gap-x-2 ${
            profileData?.isSubscribed ? "dark:bg-[#ae7aff] bg-red-500 " : "dark:bg-white bg-red-100 "
          } px-2 py-2 sm:px-3 sm:py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto`}
        >
          <span className="inline-block w-5">
            {profileData?.isSubscribed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-check-big"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            ) : (
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
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                ></path>
              </svg>
            )}
          </span>
          <span className={` ${profileData?.isSubscribed ? "hidden " : "block "}`}>Subscribe</span>
          <span className={`${profileData?.isSubscribed ? "block " : "hidden "}`}>Subscribed</span>
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
