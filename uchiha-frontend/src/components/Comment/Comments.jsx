import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getVideoComments } from "../../app/Slices/commentSlice";
import { CommentAtom, LikesComponent, LoginPopup } from "../index";
import { toast } from "react-toastify";

function Comments({ videoId, ownerAvatar }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const loginPopupDialog = useRef();

  const { status: authStatus } = useSelector(({ auth }) => auth);

  const { status, data } = useSelector((state) => state.comment);
  const [localCommentData, setLocalCommentData] = useState(null);

  useEffect(() => {
    if (!videoId) return;
    dispatch(getVideoComments(videoId)).then((res) => {
      setLocalCommentData(res.payload);
    });
  }, [videoId, navigate, dispatch]);

  function handleAddComment(event) {
    event.preventDefault();
    if (!authStatus) return loginPopupDialog.current?.open();
    const content = event.target.content.value;
    if (!content) {
      toast.warning("Please Enter some message...");
      return;
    }
    // OPTIMIZEME Optimize my performance by making a very small network request or no request for adding new comment
    setLocalCommentData(data);
    dispatch(addComment({ videoId, content }));
    inputRef.current.value = "";
  }

  if (!localCommentData)
    return (
      <div className="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-[#121212] p-4 duration-200 hover:top-[67px]  peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
        {/* add comment */}
        <div className="block">
          <h6 className="mb-2 dark:bg-slate-100/10 bg-zinc-300 w-36 h-8 rounded animate-pulse"></h6>
          <div className="w-full rounded-lg border border-slate-100/50 p-[6px] flex items-center dark:bg-slate-100/10 bg-zinc-300 animate-pulse">
            <div className=" w-full h-6 "></div>
          </div>
        </div>
        <hr className="my-4 border-slate-100/50" />

        {/* comments */}
        <div>
          <div className="flex justify-between ">
            {/* comment content */}
            <span className="flex w-full gap-x-4 ">
              {/* avatar */}
              <div className="mt-2 h-12 w-12 shrink-0 ">
                <div className="h-full w-full rounded-full border-white dark:bg-slate-100/10 bg-zinc-300 animate-pulse"></div>
              </div>
              {/* Content */}
              <div className="block w-full">
                <div className="flex items-center">
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-44 h-4 mr-1"></span>
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-16 h-4"></span>
                </div>
                <div className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-32 mt-1 h-4"></div>
                <p className="my-1 text-[14px]">
                  <div className="text-transparent h-5 dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-[70%] outline-none border-b-[1px] border-transparent"></div>
                </p>
              </div>
            </span>
          </div>
          <hr className="my-2 border-slate-100/50" />
          <div className="flex justify-between ">
            {/* comment content */}
            <span className="flex w-full gap-x-4 ">
              {/* avatar */}
              <div className="mt-2 h-12 w-12 shrink-0 ">
                <div className="h-full w-full rounded-full border-white dark:bg-slate-100/10 bg-zinc-300 animate-pulse"></div>
              </div>
              {/* Content */}
              <div className="block w-full">
                <div className="flex items-center">
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-44 h-4 mr-1"></span>
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-16 h-4"></span>
                </div>
                <div className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-32 mt-1 h-4"></div>
                <p className="my-1 text-[14px]">
                  <div className="text-transparent h-5 dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-[70%] outline-none border-b-[1px] border-transparent"></div>
                </p>
              </div>
            </span>
          </div>
          <hr className="my-2 border-slate-100/50" />
        </div>
      </div>
    );

  const comments = data || localCommentData;

  // Something went wrong Comments...
  if (!status && !comments)
    return (
      <div className="flex w-full h-screen flex-col gap-y-4 px-16 py-4 rounded dark:bg-slate-100/10 bg-zinc-300 animate-pulse"></div>
    );

  return (
    <div className="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border dark:bg-[#121212] bg-[#f2f2f2db] p-4 duration-200 hover:top-[67px]  peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
      <LoginPopup ref={loginPopupDialog} message="Sign in to Comment on Video..." />
      {/* add comment */}
      <div className="block">
        <h6 className="mb-4 font-semibold">
          {comments?.length > 0 ? comments.length : "No"} Comments
        </h6>
        <form
          onSubmit={handleAddComment}
          className="w-full rounded-lg border px-1 py-1 flex items-center"
        >
          <input
            type="text"
            name="content"
            ref={inputRef}
            className=" w-4/5 bg-transparent  focus:outline-none px-2 py-1 dark:placeholder-white placeholder:black "
            placeholder="Add a Comment"
          />
          <span className="w-1/5 flex justify-end mr-1">
            <button
              type="button"
              onClick={() => (inputRef.current.value = "")}
              className="rounded-3xl hover:border hover:border-b-white disabled:cursor-not-allowed dark:hover:bg-gray-700 dark:bg-transparent bg-[#fbebeb] text-black dark:text-white text-sm font-semibold px-2 pb-1 mr-2"
            >
              cancel
            </button>
            <button
              type="submit"
              className="rounded-3xl dark:bg-[#ae7aff] bg-green-400 disabled:bg-gray-800 dark:hover:bg-[#b48ef1] hover:bg-green-600  text-sm text-black font-semibold border border-b-white px-2 pb-1"
            >
              Comment
            </button>
          </span>
        </form>
      </div>
      <hr className="my-4 border-white" />

      {/* comments */}
      {comments?.map((comment) => (
        <div key={comment._id}>
          <CommentAtom comment={comment} ownerAvatar={ownerAvatar} videoId={videoId} />
          <hr className="my-2 border-white" />
        </div>
      ))}
    </div>
  );
}

export default Comments;
