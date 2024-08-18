import React, { useRef } from "react";
import { StatusAtom, UploadVideo } from "../index";

function ChannelState({ channelStates = null }) {
  const uploadRef = useRef();

  // Skeleton Effect for loading
  if (!ChannelState) {
    return (
      <>
        <div className="flex flex-wrap justify-between gap-4">
          {/* Welcoming Headers */}
          <div className="block">
            <h1 className=" w-64 h-6 rounded bg-gray-300/65 animate-pulse font-bold"></h1>
            <p className=" w-96 h-6 mt-2 rounded bg-gray-300/65 animate-pulse"></p>
          </div>
          {/* Video Upload Button */}
          <div className="block">
            <div className="inline-flex w-36 items-center gap-x-2 bg-gray-300/65 h-12 rounded animate-pulse px-3 py-2 font-semibold text-black"></div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
          <div className="border rounded bg-gray-300/10 animate-pulse p-4">
            <div className="mb-4 block h-16"></div>
            <h6 className="text-gray-300 h-8"></h6>
            <p className=" h-8"></p>
          </div>
          <div className="border rounded bg-gray-300/10 animate-pulse p-4">
            <div className="mb-4 block h-16"></div>
            <h6 className="text-gray-300 h-8"></h6>
            <p className=" h-8"></p>
          </div>
          <div className="border rounded bg-gray-300/10 animate-pulse p-4">
            <div className="mb-4 block h-16"></div>
            <h6 className="text-gray-300 h-8"></h6>
            <p className=" h-8"></p>
          </div>
          <div className="border rounded bg-gray-300/10 animate-pulse p-4">
            <div className="mb-4 block h-16"></div>
            <h6 className="text-gray-300 h-8"></h6>
            <p className=" h-8"></p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Headers */}
      <div className="flex flex-wrap justify-between gap-4">
        {/* Welcoming Headers */}
        <div className="block">
          <h1 className="text-2xl font-bold">Welcome Back, {channelStates?.ownerName}</h1>
          <p className="text-sm dark:text-gray-300 text-zinc-500  ">Seamless Video Management, Elevated Results.</p>
        </div>
        {/* Video Upload Button */}
        <div className="block">
          {<UploadVideo ref={uploadRef} />}
          <button
            onClick={() => uploadRef.current?.open()}
            className="inline-flex items-center gap-x-2 rounded dark:bg-[#ae7aff] bg-red-400  dark:hover:bg-[#ae7aff]/95 hover:bg-red-300  border border-transparent hover:border-dotted hover:border-white px-3 py-2 font-semibold text-white dark:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>{" "}
            Upload video
          </button>
        </div>
      </div>
      {/* Channel States Components */}
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
        <StatusAtom
          key="total-videos"
          title="Total Videos"
          value={channelStates.totalVideos}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
              <rect x="2" y="6" width="14" height="12" rx="2" />
            </svg>
          }
        />
        <StatusAtom
          key="total-views"
          title="Total views"
          value={channelStates.totalViews}
          icon={
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
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          }
        />
        <StatusAtom
          key="total-subscribers"
          title="Total subscribers"
          value={channelStates.totalSubscribers}
          icon={
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              ></path>
            </svg>
          }
        />
        <StatusAtom
          key="total-likes"
          title="Total likes"
          value={channelStates.totalLikes}
          icon={
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              ></path>
            </svg>
          }
        />
      </div>
    </>
  );
}

export default ChannelState;
