import React from "react";

function EmptyChannelVideo() {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-sm text-center">
        <p className="mb-3 w-full">
          <span className="inline-flex rounded-full  dark:bg-[#E4D3FF] bg-red-700 p-2 text-red-500 dark:text-[#AE7AFF]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              ></path>
            </svg>
          </span>
        </p>
        <h5 className="mb-2 font-semibold">No videos uploaded</h5>
        <p>
          This page has yet to upload a video. Search another page in order to find more videos.
        </p>
      </div>
    </div>
  );
}

export default EmptyChannelVideo;
