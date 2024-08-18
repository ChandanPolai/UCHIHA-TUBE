import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatTimestamp, formatVideoDuration } from "../../helpers/formatFigures";
import { addVideoToPlaylist, removeVideoFromPlaylist } from "../../app/Slices/playlistSlice";
import { useDispatch } from "react-redux";
import { icons } from "../../assets/icons";

function PlaylistVideoAtom({ video, playlistId, owner = false }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();

  function handleButtonClick() {
    if (isDeleted)
      dispatch(addVideoToPlaylist({ playlistId, videoId: video._id })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") setIsDeleted(false);
      });
    else
      dispatch(removeVideoFromPlaylist({ playlistId, videoId: video._id })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") setIsDeleted(true);
      });
  }

  return (
    <li key={video._id} className="border">
      <div className="w-full gap-x-4 sm:flex">
        {/* Video Thumbnail */}
        <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
          <Link to={`/watch/${video?._id}`}>
            <div className="w-full pt-[56%]">
              <div className="absolute inset-0">
                <img src={video.thumbnail} alt={video.title} className="h-full w-full" />
              </div>
              <span className="absolute bottom-1 right-1 inline-block rounded dark:bg-black bg-white px-1.5 text-sm">
                {formatVideoDuration(video.duration)}
              </span>
            </div>
          </Link>
        </div>
        {/* Video Data */}
        <div className=" flex relative gap-x-2 px-2 sm:w-7/12 sm:px-0">
          <div className="h-10 w-10 shrink-0 sm:hidden">
            <img
              src={video.owner?.avatar}
              alt={video.owner?.fullName}
              className="h-full w-full rounded-full"
            />
          </div>
          {/* Video Details */}
          <div className="w-full mt-2">
            {/* title */}
            <h6 className="mb-1 text-lg font-semibold sm:max-w-[75%]">{video.title}</h6>
            {/* views and date */}
            <p className="flex text-sm dark:text-gray-200 text-black sm:mt-3">
              {video.views} View{video.views > 1 ? "s" : ""} · {formatTimestamp(video.createdAt)}
            </p>
            {/* Owner Details */}
            <div className="flex items-center gap-x-4">
              <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block">
                <Link to={`/user/${video.owner?.username}`}>
                  <img
                    src={video.owner?.avatar}
                    alt={video.owner?.fullName}
                    className="h-full w-full rounded-full"
                  />
                </Link>
              </div>
              <p className="text-sm hover:text-gray-300 dark:text-gray-200 text-black">
                <Link to={`/user/${video.owner?.username}`}>{video.owner?.fullName}</Link>
              </p>
            </div>
          </div>
          {/* Delete button */}
          {owner && (
            <span className="absolute right-2 top-2">
              <button onClick={handleButtonClick} className="h-5 justify-self-end  text-xl mr-1">
                {/* Remove */}
                {!isDeleted && (
                  <span title="remove video" className="h-4 text-red-400 hover:text-red-600">
                    {icons.emptyDelete}
                  </span>
                )}
                {/* Undo */}
                {isDeleted && (
                  <span title="undo changes" className="h-4">
                    {icons.undo}
                  </span>
                )}
              </button>
            </span>
          )}
        </div>
      </div>
      {/* <Link to={`/watch/${video?._id}`}>
    </Link> */}
    </li>
  );
}

export default PlaylistVideoAtom;
