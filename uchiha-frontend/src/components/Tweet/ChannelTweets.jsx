import React, { useRef, useState } from "react";
import EmptyTweet from "./EmptyTweet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTweet, createTweet } from "../../app/Slices/tweetSlice";
import { formatTimestamp } from "../../helpers/formatFigures";
import { LikesComponent, LoginPopup, MyChannelEmptyTweet, TweetAtom } from "../index";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// OPTIMIZEME: Optimize this tweets

function ChannelTweets({ owner = false }) {
  const dispatch = useDispatch();
  let { username } = useParams();

  const { data, status } = useSelector(({ tweet }) => tweet);
  let userId = useSelector(({ user }) => user.userData?._id);
  const { status: authStatus, userData: currentUser } = useSelector(({ auth }) => auth);

  const [localTweets, setLocalTweets] = useState(null);
  const { register, handleSubmit, reset, setFocus } = useForm();

  useEffect(() => {
    if (owner) {
      userId = currentUser?._id;
    }
    if (!userId) return;
    dispatch(getTweet(userId)).then((res) => {
      if (res.meta.requestStatus == "fulfilled") setLocalTweets(res.payload);
    });
  }, [username, userId, authStatus]);

  function addTweet(data) {
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
      getTweet(currentUser?._id);
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
        <hr className=" border-[#ae7aff]/0 animate-pulse my-2" />
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

  // TODO: Check all something went wrong
  if (!status && !tweets) {
    return (
      <div className="flex w-full h-screen flex-col gap-y-4 px-16 py-4 rounded dark:bg-slate-100/10 bg-zinc-300 animate-pulse"></div>
    );
  }

  return (
    <>
      {owner && (
        <form onSubmit={handleSubmit(addTweet)} className="mt-2 border pb-2">
          <textarea
            {...register("tweet")}
            className="mb-2 h-10 w-full resize-none border-none bg-transparent px-3 pt-2 outline-none"
            placeholder="Write a tweet"
          ></textarea>

          <div className="flex items-center justify-end gap-x-3 px-3">
            {/* Emoji button */}
            <button type="button" className="inline-block h-5 w-5 hover:text-[#ae7aff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                ></path>
              </svg>
            </button>
            {/* Cancel button */}
            <button
              type="button"
              onClick={() => reset()}
              className="py-1 rounded-xl px-3 hover:text-black hover:bg-slate-500"
            >
              cancel
            </button>
            {/* send button */}
            <button type="submit" className="bg-[#ae7aff] px-3 py-2 font-semibold text-black">
              Send
            </button>
          </div>
        </form>
      )}
      {tweets?.length > 0 ? (
        <ul className="py-4">
          {tweets.map((tweet) => (
            <TweetAtom key={tweet._id} tweet={tweet} owner={owner} />
          ))}
        </ul>
      ) : owner ? (
        <MyChannelEmptyTweet />
      ) : (
        <EmptyTweet />
      )}
    </>
  );
}

export default ChannelTweets;

{
  /* <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="React Patterns"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">React Patterns</span> 
            <span className="inline-block text-sm text-gray-400">5 hours ago</span>
          </h4>
          <p className="mb-2">
            Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡
            #JavaScript #ES11
          </p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count="425"
              data-like-count-alt="424"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-[#ae7aff] group-focus:text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count="87"
              data-dislike-count-alt="88"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="React Patterns"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">React Patterns</span> 
            <span className="inline-block text-sm text-gray-400">6 hours ago</span>
          </h4>
          <p className="mb-2">
            Embracing the benefits of TypeScript for stronger, more reliable code. 🚀 #TypeScript
            #Programming
          </p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count="425"
              data-like-count-alt="426"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count="87"
              data-dislike-count-alt="88"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="React Patterns"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">React Patterns</span> 
            <span className="inline-block text-sm text-gray-400">7 hours ago</span>
          </h4>
          <p className="mb-2">
            Styling made easy with Tailwind CSS! Rapidly build beautiful, responsive interfaces. 🎨
            #TailwindCSS #WebDev
          </p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count="425"
              data-like-count-alt="426"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count="87"
              data-dislike-count-alt="88"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="React Patterns"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">React Patterns</span> 
            <span className="inline-block text-sm text-gray-400">8 hours ago</span>
          </h4>
          <p className="mb-2">
            Building dynamic user interfaces with React! The go-to library for modern web
            development. 🚀 #React #WebDev
          </p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count="425"
              data-like-count-alt="424"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-[#ae7aff] group-focus:text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count="87"
              data-dislike-count-alt="88"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="React Patterns"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">React Patterns</span> 
            <span className="inline-block text-sm text-gray-400">9 hours ago</span>
          </h4>
          <p className="mb-2">
            Next.js makes server-side rendering a breeze! Boost your React app&#x27;s performance
            with ease. 🚀 #Nextjs #React
          </p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count="425"
              data-like-count-alt="426"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count="87"
              data-dislike-count-alt="86"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-[#ae7aff] group-focus:text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="React Patterns"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">React Patterns</span> 
            <span className="inline-block text-sm text-gray-400">10 hours ago</span>
          </h4>
          <p className="mb-2">
            Dive into advanced JavaScript concepts like closures and prototypes. Level up your
            coding skills! 🔍 #AdvancedJS #CodingTips
          </p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count="425"
              data-like-count-alt="424"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-[#ae7aff] group-focus:text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count="87"
              data-dislike-count-alt="88"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="TS Scripter"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">TS Scripter</span> 
            <span className="inline-block text-sm text-gray-400">11 hours ago</span>
          </h4>
          <p className="mb-2">
            Mastering TypeScript: From basics to advanced concepts. Boost your development workflow
            with strong typing! 🚀 #TypeScript #Development
          </p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count="425"
              data-like-count-alt="424"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-[#ae7aff] group-focus:text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count="87"
              data-dislike-count-alt="88"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Tailwind Wizard"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">Tailwind Wizard</span> 
            <span className="inline-block text-sm text-gray-400">12 hours ago</span>
          </h4>
          <p className="mb-2">
            Simplify your CSS workflow with Tailwind CSS. Effortless styling for modern web
            development! 🎨 #TailwindCSS #WebDev
          </p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count="425"
              data-like-count-alt="424"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-[#ae7aff] group-focus:text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count="87"
              data-dislike-count-alt="88"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="React Patterns"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">React Patterns</span> 
            <span className="inline-block text-sm text-gray-400">13 hours ago</span>
          </h4>
          <p className="mb-2">
            Building dynamic UIs with React - A comprehensive guide for developers. Get started with
            React today! 🚀 #React #WebDevelopment
          </p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count="425"
              data-like-count-alt="424"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-[#ae7aff] group-focus:text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count="87"
              data-dislike-count-alt="88"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="React Patterns"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">React Patterns</span> 
            <span className="inline-block text-sm text-gray-400">14 hours ago</span>
          </h4>
          <p className="mb-2">
            Optimize server-side rendering with Next.js. Improve performance and SEO for your React
            applications! 🚀 #Nextjs #React
          </p>
          <div className="flex gap-4">
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)]"
              data-like-count="425"
              data-like-count-alt="424"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-[#ae7aff] group-focus:text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
            </button>
            <button
              className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-dislike-count)] focus:after:content-[attr(data-dislike-count-alt)]"
              data-dislike-count="87"
              data-dislike-count-alt="88"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-inherit group-focus:text-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div> */
}
