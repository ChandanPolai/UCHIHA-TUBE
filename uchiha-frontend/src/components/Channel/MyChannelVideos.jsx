import React, { useState } from "react";
import {MyChannelEmptyVideo} from "../index";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllVideos } from "../../app/Slices/videoSlice";
import { formatTimestamp, formatVideoDuration } from "../../helpers/formatFigures";
import { Link } from "react-router-dom";
function MyChannelVideos() {
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userData?._id);

  useEffect(() => {
    dispatch(getAllVideos(userId)).then((res) => {
      setVideos(res.payload);
      setIsLoading(false);
    });
  }, [userId]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 pt-4">
        <div className="w-full">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
            <span className="absolute bottom-1 right-1 inline-block rounded bg-gray-800 animate-pulse w-16 h-6"></span>
          </div>
          <div className="mb-1 font-semibold bg-gray-800 animate-pulse h-6 w-full"></div>
          <div className="flex text-sm text-gray-200 bg-gray-800 animate-pulse h-4 w-full"></div>
        </div>
        <div className="w-full">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
            <span className="absolute bottom-1 right-1 inline-block rounded bg-gray-800 animate-pulse w-16 h-6"></span>
          </div>
          <div className="mb-1 font-semibold bg-gray-800 animate-pulse h-6 w-full"></div>
          <div className="flex text-sm text-gray-200 bg-gray-800 animate-pulse h-4 w-full"></div>
        </div>
        <div className="w-full">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
            <span className="absolute bottom-1 right-1 inline-block rounded bg-gray-800 animate-pulse w-16 h-6"></span>
          </div>
          <div className="mb-1 font-semibold bg-gray-800 animate-pulse h-6 w-full"></div>
          <div className="flex text-sm text-gray-200 bg-gray-800 animate-pulse h-4 w-full"></div>
        </div>
        <div className="w-full">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
            <span className="absolute bottom-1 right-1 inline-block rounded bg-gray-800 animate-pulse w-16 h-6"></span>
          </div>
          <div className="mb-1 font-semibold bg-gray-800 animate-pulse h-6 w-full"></div>
          <div className="flex text-sm text-gray-200 bg-gray-800 animate-pulse h-4 w-full"></div>
        </div>
      </div>
    );
  }

  // FIXME On refreshing it is redirecting to home

  return videos && videos?.length < 1 ? (
    <MyChannelEmptyVideo />
  ) : (
    <>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 pt-2">
        {videos.map((video) => (
          <li key={video._id} className="w-full">
            <Link to={`/watch/${video?._id}`}>
              <div className="relative mb-2 w-full pt-[56%]">
                <div className="absolute inset-0">
                  <img src={video?.thumbnail} alt={video?.title} className="h-full w-full" />
                </div>
                <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                  {formatVideoDuration(video?.duration)}
                </span>
              </div>
              <h6 className="mb-1 font-semibold">{video?.title}</h6>
              <p className="flex text-sm text-black dark:text-gray-200">
                {video?.views} Views · {formatTimestamp(video?.createdAt)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      {/* <UploadVideo/> */}
    </>
  );
}

export default MyChannelVideos;
