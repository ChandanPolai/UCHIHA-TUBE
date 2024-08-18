import React from "react";

function MyChannelEmptyPlaylist({ onClickBtn }) {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-sm text-center">
        <p className="mb-3 w-full">
          <span className="inline-flex rounded-full bg-red-500 text-red-300 dark:bg-[#E4D3FF] p-2 dark:text-[#AE7AFF]">
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
        <h5 className="mb-2 font-semibold">No Playlists Created</h5>
        <p>
          Your Channel has yet to create a playlist. <br /> create a playlist and add some videos.
        </p>
        <button
          onClick={() => onClickBtn()}
          className="mt-4 inline-flex items-center gap-x-2 bg-red-300 rounded dark:bg-[#ae7aff] border border-transparent hover:border-dotted hover:border-white px-3 py-2 font-semibold text-white dark:text-black"
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
          </svg>
          Create New Playlist
        </button>
      </div>
    </div>
  );
}

export default MyChannelEmptyPlaylist;
