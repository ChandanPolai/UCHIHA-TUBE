import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { formatDate, formatTimestamp } from "../../helpers/formatFigures";
import { Link } from "react-router-dom";
import { deleteVideo, togglePublish } from "../../app/Slices/videoSlice";
import { ConfirmPopup, UploadVideo } from "../index";
import { getChannelVideos } from "../../app/Slices/dashboardSlice";
import { icons } from "../../assets/icons";

function AdminVideoAtom({ video }) {
  const dispatch = useDispatch();
  const confirmDialog = useRef();
  const editDialog = useRef();

  const [publishedStatus, setPublishedStatus] = useState(video.isPublished);

  // EXTRA Update video update to dashboard slice

  function handleTogglePublish() {
    dispatch(togglePublish(video._id)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") setPublishedStatus((pre) => !pre);
      dispatch(getChannelVideos());
    });
  }

  function handleDeleteVideo(isConfirm) {
    if (isConfirm) {
      dispatch(deleteVideo(video._id));
      dispatch(getChannelVideos());
    }
  }

  return (
    <tr key={video._id} className="group border">
      {/* Publish-Unpublished toggle box */}
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex justify-center">
          <label
            htmlFor={"vid-pub-" + video._id}
            className="relative inline-block w-12 cursor-pointer overflow-hidden"
          >
            <input
              onChange={handleTogglePublish}
              type="checkbox"
              id={"vid-pub-" + video._id}
              defaultChecked={video.isPublished}
              className="peer sr-only"
            />
            <span className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 dark:peer-checked:bg-[#ae7aff] peer-checked:bg-red-200 peer-checked:after:left-7"></span>
          </label>
        </div>
      </td>
      {/* Publish-Unpublished label */}
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex justify-center">
          <span
            className={`inline-block rounded-2xl border px-1.5 py-0.5 ${
              publishedStatus
                ? "border-green-600 text-green-600"
                : "border-orange-600 text-orange-600"
            } `}
          >
            {publishedStatus ? "Published" : "Unpublished"}
          </span>
        </div>
      </td>

      {/* Thumbnail & Title*/}
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex items-center gap-4">
          {publishedStatus ? (
            <Link to={`/watch/${video._id}`} className="hover:text-gray-300">
              <img className="h-10 w-10 rounded-full" src={video.thumbnail} alt={video.title} />
            </Link>
          ) : (
            <img className="h-10 w-10 rounded-full" src={video.thumbnail} alt={video.title} />
          )}
          <h3 className="font-semibold">
            {publishedStatus ? (
              <Link to={`/watch/${video._id}`} className="hover:text-gray-300">
                {video.title?.length > 35 ? video.title.substr(0, 35) + "..." : video.title}
              </Link>
            ) : video.title?.length > 35 ? (
              video.title.substr(0, 35) + "..."
            ) : (
              video.title
            )}
          </h3>
        </div>
      </td>

      {/* upload date */}
      <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
        {formatDate(video.createdAt)}
      </td>

      {/* Views */}
      <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
        {video.views}
      </td>

      {/* Comments Count */}
      <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
        {video.commentsCount}
      </td>

      {/* Like-Dislike Count */}
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <div className="flex justify-center gap-4">
          <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
            {video.likesCount} likes
          </span>
          <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
            {video.dislikesCount} dislikes
          </span>
        </div>
      </td>

      {/* Video Manipulation*/}
      <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
        <ConfirmPopup
          title={"Permanently delete this video?"}
          subtitle={`${video.title} - total views: ${video.views}`}
          confirm="Delete"
          cancel="Cancel"
          critical
          checkbox="I understand that deleting is permanent, and can't be undone"
          ref={confirmDialog}
          actionFunction={handleDeleteVideo}
        />
        <UploadVideo ref={editDialog} video={video} />
        <div className="flex gap-4">
          {/* Delete Button */}
          <button
            onClick={() => confirmDialog.current?.open()}
            className="h-5 w-5 hover:text-red-500"
          >
            {icons.delete}
          </button>
          {/* Edit Button */}
          <button
            onClick={() => editDialog.current?.open()}
            className="h-5 w-5 hover:text-[#ae7aff]"
          >
            {icons.edit}
          </button>
        </div>
      </td>
    </tr>
  );
}

export default AdminVideoAtom;
