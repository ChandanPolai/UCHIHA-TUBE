import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAboutChannel } from "../../app/Slices/userSlice";
import { icons } from "../../assets/icons";
import { formatDate } from "../../helpers/formatFigures";

const AboutChannel = ({ owner = false }) => {
  const { username } = useParams();
  const dispatch = useDispatch();
  let channelId = useSelector((state) => state.user.userData?._id);
  let currentUserId = useSelector((state) => state.auth.userData?._id);
  const aboutChannel = useSelector(({ user }) => user.userData?.about);

  useEffect(() => {
    if (owner) channelId = currentUserId;
    dispatch(getAboutChannel(channelId));
  }, [username]);

  if (!aboutChannel) {
    return (
      <div className=" dark:text-white text-black px-6 py-4 mt-3 rounded-lg shadow-lg text-transparent w-full h-full dark:bg-slate-100/10 bg-zinc-300 animate-pulse">
        <div className="flex items-center mb-2">
          <h2 className="text-3xl w-56 h-10 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-lg"></h2>
        </div>

        <div className="mb-4">
          <h2 className=" w-1/2 h-6 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-lg"></h2>
        </div>

        {/* Channel Details */}
        <div className="mb-6">
          <div className=" w-40 h-9 mb-3 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-lg"></div>
          <p className="ml-1 mb-[6px] flex">
            <div className="font-bold inline-block h-6 w-6 mr-2 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-full"></div>
            <div className=" w-48 h-6 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-lg"></div>
          </p>
          <p className="ml-1 mb-[6px] flex">
            <div className="font-bold inline-block h-6 w-6 mr-2 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-full"></div>
            <div className=" w-48 h-6 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-lg"></div>
          </p>
          <p className="ml-1 mb-[6px] flex">
            <div className="font-bold inline-block h-6 w-6 mr-2 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-full"></div>
            <div className=" w-48 h-6 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-lg"></div>
          </p>
          <p className="ml-1 mb-[6px] flex">
            <div className="font-bold inline-block h-6 w-6 mr-2 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-full"></div>
            <div className=" w-48 h-6 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-lg"></div>
          </p>
          <p className="ml-1 mb-[6px] flex">
            <div className="font-bold inline-block h-6 w-6 mr-2 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-full"></div>
            <div className=" w-48 h-6 dark:bg-slate-100/10 bg-zinc-300 animate-pulse rounded-lg"></div>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" dark:text-white text-black px-8 py-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <h2 className="text-3xl font-semibold">@{aboutChannel.username}</h2>
      </div>

      <div className="mb-4">
        <p className="ml-1">{aboutChannel.description}</p>
      </div>

      {/* Channel Details */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">Channel Details</h3>
        <p className="ml-1 mb-[6px]">
          <span className="font-bold inline-block h-4 w-6 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>{" "}
          <a
            href={`mailto:${aboutChannel.email}`}
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            {aboutChannel.email}
          </a>
        </p>
        <p className="ml-1 mb-[6px]">
          <span className="font-bold inline-block h-4 w-6 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </span>{" "}
          <a
            href={`/user/${aboutChannel.username}`}
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            {`https/uchiha-Tube/user/${aboutChannel.username}`}
          </a>
        </p>
        <p className="ml-1 mb-[6px]">
          <span className="font-semibold inline-block h-4 w-6 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </span>{" "}
          <span>
            <span className="font-semibold">{aboutChannel.totalVideos}</span> Videos
          </span>
        </p>
        <p className="ml-1 mb-[6px]">
          <span className="font-semibold inline-block h-4 w-6 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-eye"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>{" "}
          <span>
            <span className="font-semibold">{aboutChannel.totalViews}</span> Views
          </span>
        </p>
        <p className="ml-1 mb-[8px]">
          <span className="font-semibold inline-block h-4 w-6 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </span>{" "}
          <span>
            <span className="font-semibold">{aboutChannel.totalTweets}</span> Tweets
          </span>
        </p>
        <p className="ml-1 mb-[6px]">
          <span className="font-bold inline-block h-4 w-6 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </span>{" "}
          <span>
            Joined on <span className="font-semibold">{formatDate(aboutChannel.createdAt)}</span>
          </span>
        </p>
      </div>

      {/* Links */}
      {/* <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">Links</h3>
        <ul className="ml-1 space-y-2">
          {aboutChannel.links?.map((item) => (
            <li key={item._id} className="flex items-center">
              <span className="w-5 h-5 rounded-full mr-4">{icons.link}</span>

              <div className="h-full">
                <h2 className="text-xs font-bold my-0">{item.name}</h2>
                <a href="#" target="_blank" className="text-blue-500 text-xs hover:text-blue-400 ">
                  {item.url}
                </a>
              </div>
            </li>
          ))}
          <li className="flex items-center">
            <span className="w-5 h-5 rounded-full mr-4">{icons.link}</span>
            <div className="h-full">
              <h2 className="text-xs font-bold my-0">Twitter</h2>
              <a href="#" target="_blank" className="text-blue-500 text-xs hover:text-blue-400 ">
                www.twitter.com/yashpz
              </a>
            </div>
          </li>
          <li className="flex items-center">
            <span className="w-5 h-5 rounded-full mr-4">{icons.link}</span>
            <div className="h-full">
              <h2 className="text-xs font-bold my-0">Instagram</h2>
              <a href="#" target="_blank" className="text-blue-500 text-xs hover:text-blue-400 ">
                www.instagram.com/yashpz
              </a>
            </div>
          </li>
          <li className="flex items-center">
            <span className="w-5 h-5 rounded-full mr-4">{icons.link}</span>
            <div className="h-full">
              <h2 className="text-xs font-bold my-0">Discord</h2>
              <a href="#" target="_blank" className="text-blue-500 text-xs hover:text-blue-400 ">
                www.discord.com/yashpz
              </a>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default AboutChannel;
