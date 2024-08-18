import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createTweet, getAllTweets } from "../app/Slices/tweetSlice";
import { TweetAtom, EmptyTweet, LoginPopup } from "../components/index";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function FeedTweets({ owner = false }) {
  const dispatch = useDispatch();
  const loginPopupDialog = useRef();

  const { data, status } = useSelector(({ tweet }) => tweet);
  const { status: authStatus } = useSelector(({ auth }) => auth);

  const [localTweets, setLocalTweets] = useState(null);
  const { register, handleSubmit, reset, setFocus } = useForm();

  useEffect(() => {
    dispatch(getAllTweets()).then((res) => {
      if (res.payload) setLocalTweets(res.payload);
    });
  }, [authStatus]);

  function addTweet(data) {
    if (!authStatus) return loginPopupDialog.current?.open();
    if (!data.tweet.trim()) {
      toast.error("Content is required");
      setFocus("tweet");
      return;
    } else if (data.tweet.trim()?.length < 10) {
      toast.error("Minimum 10 characters are required");
      setFocus("tweet");
      return;
    } else if (data.tweet.trim()?.length > 500) {
      toast.error("Maximum 500 characters are allowed");
      setFocus("tweet");
      return;
    }
    dispatch(createTweet({ data })).then(() => {
      dispatch(getAllTweets());
      reset();
    });
  }

  if (!localTweets) {
    return (
      <section className="w-full py-1 px-3 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="mt-2 border pb-2 text-transparent dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse">
          <div className="mb-2 h-12 w-full resize-none border-none px-3 pt-2"></div>

          <div className="flex items-center justify-end gap-x-3 px-3">
            <div className="w-20 h-10 bg-slate-100/20 rounded animate-pulse"></div>
          </div>
        </div>
        <hr className=" border-[#ae7aff]/80 animate-pulse mt-4 mb-4" />
        <div className=" px-1">
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
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-44 h-6 mr-1"></span>
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-16 h-6"></span>
                </div>
                <div className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-32 mt-1 h-4"></div>
                <p className="my-1 text-[14px]">
                  <div className="text-transparent h-6 dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                </p>
              </div>
            </span>
          </div>
          <hr className="my-2 border-slate-100/50 animate-pulse" />
        </div>{" "}
        <div className=" px-1">
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
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-44 h-6 mr-1"></span>
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-16 h-6"></span>
                </div>
                <div className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-32 mt-1 h-4"></div>
                <p className="my-1 text-[14px]">
                  <div className="text-transparent h-6 dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                </p>
              </div>
            </span>
          </div>
          <hr className="my-2 border-slate-100/50 animate-pulse" />
        </div>{" "}
        <div className=" px-1">
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
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-44 h-6 mr-1"></span>
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-16 h-6"></span>
                </div>
                <div className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-32 mt-1 h-4"></div>
                <p className="my-1 text-[14px]">
                  <div className="text-transparent h-6 dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                </p>
              </div>
            </span>
          </div>
          <hr className="my-2 border-slate-100/50 animate-pulse" />
        </div>{" "}
        <div className=" px-1">
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
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-44 h-6 mr-1"></span>
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-16 h-6"></span>
                </div>
                <div className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-32 mt-1 h-4"></div>
                <p className="my-1 text-[14px]">
                  <div className="text-transparent h-6 dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                </p>
              </div>
            </span>
          </div>
          <hr className="my-2 border-slate-100/50 animate-pulse" />
        </div>{" "}
        <div className=" px-1">
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
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-44 h-6 mr-1"></span>
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-16 h-6"></span>
                </div>
                <div className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-32 mt-1 h-4"></div>
                <p className="my-1 text-[14px]">
                  <div className="text-transparent h-6 dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                </p>
              </div>
            </span>
          </div>
          <hr className="my-2 border-slate-100/50 animate-pulse" />
        </div>{" "}
        <div className=" px-1">
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
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-44 h-6 mr-1"></span>
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-16 h-6"></span>
                </div>
                <div className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-32 mt-1 h-4"></div>
                <p className="my-1 text-[14px]">
                  <div className="text-transparent h-6 dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                </p>
              </div>
            </span>
          </div>
          <hr className="my-2 border-slate-100/50 animate-pulse" />
        </div>{" "}
        <div className=" px-1">
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
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-44 h-6 mr-1"></span>
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-16 h-6"></span>
                </div>
                <div className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-32 mt-1 h-4"></div>
                <p className="my-1 text-[14px]">
                  <div className="text-transparent h-6 dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                </p>
              </div>
            </span>
          </div>
          <hr className="my-2 border-slate-100/50 animate-pulse" />
        </div>
        <div className=" px-1">
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
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-44 h-6 mr-1"></span>
                  <span className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-16 h-6"></span>
                </div>
                <div className="dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-32 mt-1 h-4"></div>
                <p className="my-1 text-[14px]">
                  <div className="text-transparent h-6 dark:bg-slate-100/10 bg-zinc-300 rounded animate-pulse w-[50%] outline-none border-b-[1px] border-transparent"></div>
                </p>
              </div>
            </span>
          </div>
          <hr className="my-2 border-slate-100/50 animate-pulse" />
        </div>
      </section>
    );
  }

  let tweets = data || localTweets;

  // Something went wrong
  if (!status && !tweets) {
    return (
      <div className="flex w-full h-screen flex-col gap-y-4 px-16 py-4 rounded dark:bg-slate-100/10 bg-zinc-300 animate-pulse"></div>
    );
  }

  return (
    <>
      <LoginPopup ref={loginPopupDialog} message="Sign in to Tweet..." />

      <section className="w-full py-1 px-3 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0 bg-white dark:bg-black  ">
        <form onSubmit={handleSubmit(addTweet)} className="mt-2 dark:border-[#ae7aff] border-red-200 border rounded  pb-2">
          <textarea
            {...register("tweet")}
            className="mb-2 h-10 w-full resize-none border-none bg-transparent px-3 pt-2 outline-none"
            placeholder="Whats in your mind today..."
          ></textarea>

          <div className="flex items-center justify-end gap-x-3 px-3">
            {/* Emoji button */}
            {/* <button type="button" className="inline-block h-5 w-5 hover:text-[#ae7aff]"></button> */}
            {/* Cancel button */}
            <button
              type="button"
              onClick={() => reset()}
              className="py-2 rounded-xl px-3 drop-shadow-sm bg-[#ffefef] dark:bg-transparent  dark:hover:text-white dark:hover:bg-slate-500 hover:bg-[#ed9f9f]"
            >
              cancel
            </button>
            {/* send button */}
            <button type="submit" className="dark:bg-[#ae7aff] bg-red-500 dark:text-black text-white rounded px-3 py-2 drop-shadow-sm font-semibold dark:focus:bg-[#602db2] focus:bg-red-700 ">
              Send
            </button>
          </div>
        </form>

        <hr className=" dark:border-[#ae7aff] border-red-200  mt-6 mb-4" />

        {tweets?.length > 0 ? (
          <ul>
            {tweets.map((tweet) => (
              <TweetAtom key={tweet._id} tweet={tweet} owner={tweet.isOwner} />
            ))}
          </ul>
        ) : (
          <EmptyTweet />
        )}
      </section>
    </>
  );
}

export default FeedTweets;
