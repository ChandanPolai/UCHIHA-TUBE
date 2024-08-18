import React, { useRef, useState } from "react";
import { toggleSubscription } from "../../app/Slices/subscriptionSlice";
import { formatSubscription } from "../../helpers/formatFigures";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginPopup from "../Auth/LoginPopup";

function ChannelProfileAtom({ profile, owner = false }) {
  const dispatch = useDispatch();
  const [isSubscribed, setIsSubscribed] = useState(profile.isSubscribed);
  const navigate = useNavigate();
  const loginPopupDialog = useRef();

  const { status: authStatus } = useSelector(({ auth }) => auth);

  function handleClick() {
    if (!authStatus) return loginPopupDialog.current?.open();
    dispatch(toggleSubscription(profile?._id));
    setIsSubscribed((pre) => !pre);
  }

  return (
    <div className="flex flex-wrap gap-4 pb-2 pt-2 sm:pb-4 sm:pt-6">
      <LoginPopup ref={loginPopupDialog} message="Sign in to Subscribe..." />
      <span className="relative -mt-4 sm:-mt-12 inline-block size-24 sm:size-28 shrink-0 overflow-hidden rounded-full border-2">
        <img src={profile?.avatar} alt="Channel" className="h-full w-full" />
      </span>
      <div className="mr-auto inline-block">
        <h1 className="font-bolg text-xl">{profile?.fullName}</h1>
        <p className="text-sm text-gray-400">@{profile?.username}</p>
        <p className="text-sm text-gray-400">
          {formatSubscription(profile?.subscribersCount)} · {profile.channelsSubscribedToCount}{" "}
          Subscribed
        </p>
      </div>
      {/* Subscribe/Edit Button */}
      <div className="inline-block">
        {owner ? (
          <button
            onClick={() => navigate("/settings")}
            className="group/btn mr-1 flex w-full items-center gap-x-2 dark:bg-[#ae7aff] bg-[#ff6767] px-3 py-2 text-white rounded text-center font-bold dark:text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto"
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
        ) : (
          <button
            onClick={handleClick}
            className={`${
              isSubscribed ? "dark:bg-[#ae7aff] bg-red-600  " : "dark:bg-white bg-zinc-400 "
            } group/btn mr-1 flex w-full items-center gap-x-2 px-3 py-2 text-center font-bold dark:text-black text-white rounded shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto`}
          >
            <span className="inline-block w-5">
              {isSubscribed ? (
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
            <span className={`${isSubscribed ? "hidden" : ""}`}>Subscribe</span>
            <span className={`${isSubscribed ? "" : "hidden"}`}>Subscribed</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default ChannelProfileAtom;
