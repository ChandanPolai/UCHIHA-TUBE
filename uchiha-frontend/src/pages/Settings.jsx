import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditPersonalInfo, EditChannelInfo, ChangePassword } from "../components/index";
import { useDispatch } from "react-redux";
import { uploadAvatar, uploadCoverImage } from "../app/Slices/authSlice";

function Settings() {
  const [currentTab, setCurrentTab] = useState(0);
  const userData = useSelector((state) => state.auth?.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      {/* CoverImage */}
      <div className="relative min-h-[150px] w-full pt-[16.28%]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={userData?.coverImage} alt="cover-photo" />
        </div>
        {/* coverImage Upload */}
        <form
          name="cover-image-form"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <input
            type="file"
            onChange={() =>
              dispatch(uploadCoverImage({ data: new FormData(document.forms["cover-image-form"]) }))
            }
            id="cover-image"
            name="coverImage"
            className="hidden"
          />
          <label
            htmlFor="cover-image"
            className="inline-block h-10 w-10 cursor-pointer rounded-lg bg-white/70 p-1 text-[#ae7aff] hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              ></path>
            </svg>
          </label>
        </form>
      </div>

      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-4 pb-4 pt-6">
          {/* avatar */}
          <div className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
            <img src={userData?.avatar} alt="Channel" className="h-full w-full" />
            <form
              name="avatar-image-form"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <input
                onChange={() =>
                  dispatch(
                    uploadAvatar({ data: new FormData(document.forms["avatar-image-form"]) })
                  )
                }
                type="file"
                name="avatar"
                id="profile-image"
                className="hidden"
              />
              <label
                htmlFor="profile-image"
                className="inline-block h-8 w-8 cursor-pointer rounded-lg bg-white/70 p-1 text-[#ae7aff] hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  ></path>
                </svg>
              </label>
            </form>
          </div>
          {/* Channel Metadata */}
          <div className="mr-auto inline-block">
            <h1 className="font-bolg text-xl">{userData?.fullName}</h1>
            <p className="text-sm text-gray-400">@{userData?.username}</p>
          </div>
          {/* View channel Button */}
          <div className="inline-block">
            <button
              onClick={() => navigate(`/channel/${userData?.username}`)}
              className=" rounded group/btn mr-1 flex w-full items-center gap-x-2 dark:bg-[#ae7aff] dark:text-black text-white bg-red-500 px-3 py-2 text-center font-bold  shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto"
            >
              View channel
            </button>
          </div>
        </div>
        {/* Tabs List */}
        <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 dark:bg-[#121212]  py-2 sm:top-[82px]">
          <li key="personel-info" className="w-full">
            <button
              onClick={() => setCurrentTab(0)}
              className={`w-full border-b-2 ${
                currentTab === 0
                  ? "border-[#ae7aff] dark:text-[#ae7aff] dark:bg-white bg-red-500 text-white px-3"
                  : "border-transparent text-gray-400"
              } py-1.5 `}
            >
              Personal Information
            </button>
          </li>
          <li key="channel-info" className="w-full">
            <button
              onClick={() => setCurrentTab(1)}
              className={`w-full border-b-2 px-3 py-1.5 ${
                currentTab === 1
                  ? "border-[#ae7aff] dark:text-[#ae7aff] dark:bg-white bg-red-500 text-white"
                  : "border-transparent text-gray-400"
              } `}
            >
              Channel Information
            </button>
          </li>
          <li key="change-pwd" className="w-full">
            <button
              onClick={() => setCurrentTab(2)}
              className={`w-full border-b-2 px-3 py-1.5 ${
                currentTab === 2
                  ? "border-[#ae7aff] dark:text-[#ae7aff] dark:bg-white bg-red-500 text-white"
                  : "border-transparent text-gray-400"
              } `}
            >
              Change Password
            </button>
          </li>
        </ul>

        {currentTab === 0 && <EditPersonalInfo userData={userData} />}
        {currentTab === 1 && <EditChannelInfo userData={userData} />}
        {currentTab === 2 && <ChangePassword userData={userData} />}
        {/* <Outlet /> */}
      </div>
    </section>
  );
}

export default Settings;
