import React from "react";
import { formatTimestamp, formatVideoDuration } from "../../helpers/formatFigures";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../assets/icons";

function VideoView({ videos = [], loading = true, fetching = false }) {
  const navigate = useNavigate();

  if (loading)
    return (
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="flex flex-col gap-4 p-4">
          <div className="w-full max-w-3xl gap-x-4 md:flex">
            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
              <div className="w-full pt-[56%]">
                <div className="absolute inset-0">
                  <div className="h-full w-full dark:bg-slate-100/10 bg-zinc-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 md:w-7/12">
              <div className="h-10 w-10 shrink-0 md:hidden">
                <div className="h-full w-full rounded-full dark:bg-slate-100/10 bg-zinc-200 animate-pulse"></div>
              </div>
              <div className="w-full">
                <h6 className="mb-1 font-semibold h-7 rounded dark:bg-slate-100/10 bg-zinc-200 animate-pulse md:min-w-[75%]"></h6>
                <p className="flex dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded h-6 w-60 max-w-full mb-1 sm:mt-1"></p>
                <div className="flex items-center text-transparent gap-x-4">
                  <div className="mt-2 hidden h-10 w-10 max-w-full shrink-0 md:block">
                    <div className="h-full w-full rounded-full dark:bg-slate-100/10 bg-zinc-200 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-transparent max-w-full w-40 dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded">
                    Code Master
                  </p>
                </div>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[80%] dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded md:block"></p>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[40%] dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded md:block"></p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl gap-x-4 md:flex">
            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
              <div className="w-full pt-[56%]">
                <div className="absolute inset-0">
                  <div className="h-full w-full dark:bg-slate-100/10 bg-zinc-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 md:w-7/12">
              <div className="h-10 w-10 shrink-0 md:hidden">
                <div className="h-full w-full rounded-full dark:bg-slate-100/10 bg-zinc-200 animate-pulse"></div>
              </div>
              <div className="w-full">
                <h6 className="mb-1 font-semibold h-7 rounded dark:bg-slate-100/10 bg-zinc-200 animate-pulse md:min-w-[75%]"></h6>
                <p className="flex dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded h-6 w-60 max-w-full mb-1 sm:mt-1"></p>
                <div className="flex items-center text-transparent gap-x-4">
                  <div className="mt-2 hidden h-10 w-10 max-w-full shrink-0 md:block">
                    <div className="h-full w-full rounded-full dark:bg-slate-100/10 bg-zinc-200 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-transparent max-w-full w-40 dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded">
                    Code Master
                  </p>
                </div>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[80%] dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded md:block"></p>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[40%] dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded md:block"></p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl gap-x-4 md:flex">
            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
              <div className="w-full pt-[56%]">
                <div className="absolute inset-0">
                  <div className="h-full w-full dark:bg-slate-100/10 bg-zinc-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 md:w-7/12">
              <div className="h-10 w-10 shrink-0 md:hidden">
                <div className="h-full w-full rounded-full dark:bg-slate-100/10 bg-zinc-200 animate-pulse"></div>
              </div>
              <div className="w-full">
                <h6 className="mb-1 font-semibold h-7 rounded dark:bg-slate-100/10 bg-zinc-200 animate-pulse md:min-w-[75%]"></h6>
                <p className="flex dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded h-6 w-60 max-w-full mb-1 sm:mt-1"></p>
                <div className="flex items-center text-transparent gap-x-4">
                  <div className="mt-2 hidden h-10 w-10 max-w-full shrink-0 md:block">
                    <div className="h-full w-full rounded-full dark:bg-slate-100/10 bg-zinc-200 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-transparent max-w-full w-40 dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded">
                    Code Master
                  </p>
                </div>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[80%] dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded md:block"></p>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[40%] dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded md:block"></p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl gap-x-4 md:flex">
            <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
              <div className="w-full pt-[56%]">
                <div className="absolute inset-0">
                  <div className="h-full w-full dark:bg-slate-100/10 bg-zinc-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 md:w-7/12">
              <div className="h-10 w-10 shrink-0 md:hidden">
                <div className="h-full w-full rounded-full dark:bg-slate-100/10 bg-zinc-200 animate-pulse"></div>
              </div>
              <div className="w-full">
                <h6 className="mb-1 font-semibold h-7 rounded dark:bg-slate-100/10 bg-zinc-200 animate-pulse md:min-w-[75%]"></h6>
                <p className="flex dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded h-6 w-60 max-w-full mb-1 sm:mt-1"></p>
                <div className="flex items-center text-transparent gap-x-4">
                  <div className="mt-2 hidden h-10 w-10 max-w-full shrink-0 md:block">
                    <div className="h-full w-full rounded-full dark:bg-slate-100/10 bg-zinc-200 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-transparent max-w-full w-40 dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded">
                    Code Master
                  </p>
                </div>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[80%] dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded md:block"></p>
                <p className="mt-2 h-5 hidden text-sm text-transparent max-w-[40%] dark:bg-slate-100/10 bg-zinc-200 animate-pulse rounded md:block"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section className="w-full pb-[70px] sm:ml-[70px]  sm:pb-0 lg:ml-0">
      <ul className="flex flex-col gap-4 p-4  ">
        {videos?.length > 0 &&
          videos.map((video) => (
            <li key={video._id} className="w-full dark:hover:bg-white/10 hover:bg-zinc-200 dark:bg-white/5 bg-zinc-100 drop-shadow ">
              <Link to={`/watch/${video._id}`}>
                <div className="w-full text-black dark:text-white max-w-3xl lg:max-w-4xl gap-x-4 md:flex">
                  <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                    <div className="w-full pt-[56%]">
                      <div className="absolute inset-0">
                        <img src={video.thumbnail} alt={video.title} className="h-full w-full" />
                      </div>
                      <span className="absolute bottom-1 right-1 inline-block rounded dark:bg-black bg-white  px-1.5 text-sm">
                        {formatVideoDuration(video.duration)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-x-2 md:w-7/12">
                    <div className="h-10 w-10 shrink-0 md:hidden  ">
                      <button onClick={() => navigate(`/user/${video.owner?.username}`)}>
                        <img
                          src={video.owner?.avatar}
                          alt={video.owner?.username}
                          className="h-full w-full  rounded-full"
                        />
                      </button>
                    </div>
                    <div className="w-full">
                      <h6 className="mb-1 font-semibold md:max-w-[75%]">{video.title}</h6>
                      <p className="flex text-sm text-black dark:text-gray-200 sm:mt-3">
                        {video.views} Views · {formatTimestamp(video.createdAt)}
                      </p>
                      <div className="flex items-center gap-x-4">
                        <div className="mt-2 hidden h-10 w-10 shrink-0 md:block">
                          <img
                            src={video.owner?.avatar}
                            alt={video.owner?.username}
                            className="h-full w-full rounded-full"
                          />
                        </div>
                        <p className="text-sm text-black dark:text-gray-200">{video.owner?.fullName}</p>
                      </div>
                      <p className="mt-2 hidden text-sm md:block">
                        {video.description.substr(0, 170) +
                          (video.description.length > 170 ? "..." : "")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        {fetching && (
          <>
            <div className="mt-2 flex items-center justify-center text-xl">
              {icons.loading}
              Please wait...
            </div>
          </>
        )}
      </ul>
    </section>
  );
}

export default VideoView;
