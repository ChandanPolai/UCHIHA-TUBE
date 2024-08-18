import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePlaylist, getPlaylistById } from "../../app/Slices/playlistSlice";
import { formatTimestamp } from "../../helpers/formatFigures";
import { PlaylistForm, EmptyPlaylist, ConfirmPopup } from "../index";
import PlaylistVideoAtom from "./PlaylistVideoAtom";
import { icons } from "../../assets/icons";

function PlaylistVideos() {
  const dispatch = useDispatch();
  const dialog = useRef();
  const deletePlaylistDialog = useRef();
  const removeVideoDialog = useRef();
  const navigate = useNavigate();
  const { playlistId } = useParams();

  const { data: playList } = useSelector((state) => state.playlist);
  const currentUser = useSelector((state) => state.auth.userData?._id);

  useEffect(() => {
    if (!playlistId) return;
    dispatch(getPlaylistById(playlistId));
  }, [playlistId]);

  function handleDeletePlaylist(isConfirm) {
    if (isConfirm) {
      dispatch(deletePlaylist(playlistId)).then(() => {});
      navigate(`/`);
    }
  }

  if (!playList) {
    return (
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="flex flex-wrap gap-x-4 gap-y-10 p-4 xl:flex-nowrap">
          <div className="w-full shrink-0 sm:max-w-md xl:max-w-sm">
            <div className="relative mb-2 w-full pt-[56%]">
              <div className="absolute inset-0">
                {/* Skeleton for the image */}
                <div className="h-full w-full bg-white/10 animate-pulse"></div>
                <div className="absolute inset-x-0 bottom-0 ">
                  <div className="relative border-t border-t-slate-600 bg-white/10 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                    <div className="relative z-[1] ">
                      {/* Skeleton for the text */}
                      <div className="h-4 dark:bg-gray-700 bg-zinc-300 rounded w-3/4 mb-2 animate-pulse"></div>
                      <div className="h-4 dark:bg-gray-700 bg-zinc-300 rounded w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Skeleton for the title */}
            <div className="h-4 dark:bg-gray-700 bg-zinc-300 rounded w-3/4 mb-1 animate-pulse"></div>
            {/* Skeleton for the description */}
            <div className="h-4 dark:bg-gray-700 bg-zinc-300 rounded w-full mb-2 animate-pulse"></div>
            <div className="mt-6 flex items-center gap-x-3">
              {/* Skeleton for the avatar */}
              <div className="h-16 w-16 shrink-0">
                <div className="h-full w-full dark:bg-gray-700 bg-zinc-300 rounded-full animate-pulse"></div>
              </div>
              <div className="w-full">
                {/* Skeleton for the owner's name and subscribers */}
                <div className="h-4 dark:bg-gray-700 bg-zinc-300 rounded w-3/4 mb-1 animate-pulse"></div>
                <div className="h-4 dark:bg-gray-700 bg-zinc-300 rounded w-1/4 animate-pulse"></div>
              </div>
            </div>
          </div>
          <ul className="flex w-full flex-col gap-y-4">
            <div className="border border-slate-600">
              <div className="w-full max-w-3xl gap-x-4 sm:flex">
                <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                  <div className="w-full pt-[56%]">
                    <div className="absolute inset-0 dark:bg-gray-700 bg-zinc-300 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                  <div className="h-10 w-10 shrink-0 sm:hidden dark:bg-gray-700 bg-zinc-300 rounded-full animate-pulse"></div>
                  <div className="w-full">
                    <div className="my-4 font-semibold sm:max-w-[75%] dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse"></div>
                    <p className="flex text-sm text-gray-200 sm:mt-3 dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse w-3/4"></p>
                    <div className="flex items-center gap-x-4 my-4">
                      <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block dark:bg-gray-700 bg-zinc-300 rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-200 dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-slate-600">
              <div className="w-full max-w-3xl gap-x-4 sm:flex">
                <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                  <div className="w-full pt-[56%]">
                    <div className="absolute inset-0 dark:bg-gray-700 bg-zinc-300 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                  <div className="h-10 w-10 shrink-0 sm:hidden dark:bg-gray-700 bg-zinc-300 rounded-full animate-pulse"></div>
                  <div className="w-full">
                    <div className="my-4 font-semibold sm:max-w-[75%] dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse"></div>
                    <p className="flex text-sm text-gray-200 sm:mt-3 dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse w-3/4"></p>
                    <div className="flex items-center gap-x-4 my-4">
                      <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block dark:bg-gray-700 bg-zinc-300 rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-200 dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-slate-600">
              <div className="w-full max-w-3xl gap-x-4 sm:flex">
                <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                  <div className="w-full pt-[56%]">
                    <div className="absolute inset-0 dark:bg-gray-700 bg-zinc-300 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                  <div className="h-10 w-10 shrink-0 sm:hidden dark:bg-gray-700 bg-zinc-300 rounded-full animate-pulse"></div>
                  <div className="w-full">
                    <div className="my-4 font-semibold sm:max-w-[75%] dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse"></div>
                    <p className="flex text-sm text-gray-200 sm:mt-3 dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse w-3/4"></p>
                    <div className="flex items-center gap-x-4 my-4">
                      <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block dark:bg-gray-700 bg-zinc-300 rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-200 dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-slate-600">
              <div className="w-full max-w-3xl gap-x-4 sm:flex">
                <div className="relative mb-2 w-full sm:mb-0 sm:w-5/12">
                  <div className="w-full pt-[56%]">
                    <div className="absolute inset-0 dark:bg-gray-700 bg-zinc-300 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-x-2 px-2 sm:w-7/12 sm:px-0">
                  <div className="h-10 w-10 shrink-0 sm:hidden dark:bg-gray-700 bg-zinc-300 rounded-full animate-pulse"></div>
                  <div className="w-full">
                    <div className="my-4 font-semibold sm:max-w-[75%] dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse"></div>
                    <p className="flex text-sm text-gray-200 sm:mt-3 dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse w-3/4"></p>
                    <div className="flex items-center gap-x-4 my-4">
                      <div className="mt-2 hidden h-10 w-10 shrink-0 sm:block dark:bg-gray-700 bg-zinc-300 rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-200 dark:bg-gray-700 bg-zinc-300 h-4 animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </section>
    );
  }

  let isOwner = currentUser === playList.owner?._id;

  return (
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      {/* TODO: All POPUP - this is rendering before the popup-model div renders */}

      <div className="flex flex-wrap gap-x-4 gap-y-10 p-4 xl:flex-nowrap">
        {/* Playlist Info */}
        <div className="w-full shrink-0 sm:max-w-md xl:max-w-sm">
          <div className="relative mb-2 w-full pt-[56%]">
            <div className="absolute inset-0">
              <img
                src={
                  playList?.thumbnail
                    ? playList?.thumbnail
                    : "https://res.cloudinary.com/df6ztmktu/image/upload/v1717336091/videotube/photos/iqqvkshu1a14wfbr56lh.png"
                }
                alt={playList.name}
                className="h-full w-full"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="relative border-t bg-white/30 p-4 dark:text-white text-black backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                  <div className="relative z-[1]">
                    <p className="flex justify-between">
                      <span className="inline-block">Playlist</span>
                      <span className="inline-block">
                        {playList.videosCount} video{playList.videosCount > 1 ? "s" : ""}
                      </span>
                    </p>
                    <p className="text-sm dark:text-gray-200 text-black">
                      {playList.totalViews} view{playList.totalViews > 1 ? "s" : ""} ·{" "}
                      {formatTimestamp(playList.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Playlist Controls */}
          {isOwner && (
            <div className="flex justify-evenly py-1 gap-x-5 mb-2 mt-3">
              <div className="flex items-center justify-center">
                <button
                  onClick={() => deletePlaylistDialog.current?.open()}
                  className=" w-28 rounded inline-flex items-center justify-center gap-x-2 dark:bg-[#ae7aff] bg-red-400 hover:bg-red-500  dark:hover:bg-gray-900 dark:hover:text-red-500 border border-transparent hover:border-dotted hover:border-white px-3 py-2 font-semibold text-white dark:text-black"
                >
                  <span className="h-5">{icons.delete}</span>
                  Delete
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => dialog.current?.open()}
                  className=" w-28 rounded inline-flex items-center justify-center gap-x-2 dark:bg-[#ae7aff] bg-green-400 dark:hover:bg-gray-900 hover:bg-green-500 dark:hover:text-[#ae7aff] border border-transparent hover:border-dotted hover:border-white px-3 py-2 font-semibold text-white dark:text-black"
                >
                  <span className="h-5">{icons.edit}</span>
                  Edit
                </button>
              </div>
              <ConfirmPopup
                ref={deletePlaylistDialog}
                title={`Confirm to Delete '${playList.name}'?`}
                subtitle="Once playlist is deleted that cannot be undone."
                message="Note: The videos within the playlist won't be deleted."
                confirm="Delete"
                cancel="Cancel"
                critical
                actionFunction={handleDeletePlaylist}
              />
              <PlaylistForm ref={dialog} playlist={playList} />
            </div>
          )}
          <h2 className="mb-1 text-2xl font-semibold">{playList?.name}</h2>
          {/* Owner Detail */}
          <div className="mt-4 flex items-center gap-x-3">
            <div className="h-12 w-12 shrink-0">
              <Link to={`/user/${playList?.owner?.username}`}>
                <img
                  src={playList?.owner?.avatar}
                  alt={playList?.owner?.fullName}
                  className="h-full w-full rounded-full"
                />
              </Link>
            </div>
            <div className="w-full">
              <h6 className="font-semibold">{playList?.owner?.fullName}</h6>
              <p className="text-sm text-gray-300 hover:text-gray-400">
                <Link to={`/user/${playList?.owner?.username}`}>@{playList?.owner?.username}</Link>
              </p>
              {/* <p className="text-sm text-gray-300">757K Subscribers</p> */}
            </div>
          </div>
          <p className="flex mt-3 text-sm text-gray-200">{playList?.description}</p>
        </div>
        {/* Playlist videos */}
        <ul className="flex w-full flex-col gap-y-4">
          {playList.videos?.length > 0 || (
            <div className="w-full h-full flex items-center justify-center">
              <EmptyPlaylist playlistVideos />
            </div>
          )}
          {playList?.videos?.map((video) => (
            <PlaylistVideoAtom
              key={video._id}
              video={video}
              playlistId={playlistId}
              owner={isOwner}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PlaylistVideos;
