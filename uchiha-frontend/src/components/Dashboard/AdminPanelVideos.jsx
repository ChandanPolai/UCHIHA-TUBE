import React, { useState } from "react";
import { AdminVideoAtom } from "../index";

function AdminPanelVideos({ channelVideos = null }) {
  const [filteredVideos, setFilteredVideos] = useState(null);

  // Skeleton Effect for loading
  if (!channelVideos) {
    return (
      <>
        <div className="flex items-start">
          <div className="relative w-full max-w-2xl overflow-hidden">
            <input
              className="w-full animate-pulse bg-gray-400/10 border py-1 pl-8 pr-3 outline-none sm:py-2"
              disabled
            />
            <span className="absolute left-2.5 top-1/2 inline-block -translate-y-1/2"></span>
          </div>
          <div className=" border-r border-b border-t rounded-r-xl px-3 py-1 animate-pulse bg-gray-400/10">
            <div className=" size-6 sm:size-8 flex items-center "></div>
          </div>
        </div>
        <div className="w-full overflow-auto">
          <table className="w-full min-w-[1200px] border-collapse border text-white">
            <thead>
              <tr className="h-11">
                <th className="border-collapse border-b h-4 w-7 bg-slate-100/5 p-4 animate-pulse"></th>
                <th className="border-collapse border-b h-4 w-7 bg-slate-100/5 p-4 animate-pulse"></th>
                <th className="border-collapse border-b h-4 w-7 bg-slate-100/5 p-4 animate-pulse"></th>
                <th className="border-collapse border-b h-4 w-7 bg-slate-100/5 p-4 animate-pulse"></th>
                <th className="border-collapse border-b h-4 w-7 bg-slate-100/5 p-4 animate-pulse"></th>
                <th className="border-collapse border-b h-4 w-7 bg-slate-100/5 p-4 animate-pulse"></th>
                <th className="border-collapse border-b h-4 w-7 bg-slate-100/5 p-4 animate-pulse"></th>
                <th className="border-collapse border-b h-4 w-7 bg-slate-100/5 p-4 animate-pulse"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="group border">
                {/* Publish-Unpublished toggle box */}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex justify-center">
                    <label className="relative inline-block w-14 cursor-pointer overflow-hidden">
                      <span className="inline-block border h-7 w-full rounded-2xl bg-gray-200/50 animate-pulse duration-50 mt-2"></span>
                    </label>
                  </div>
                </td>
                {/* Publish-Unpublished label */}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex justify-center">
                    <span className="inline-block bg-slate-50/30 animate-pulse duration-50 rounded-2xl w-20 h-8 px-1.5 py-0.5"></span>
                  </div>
                </td>

                {/* Thumbnail & Title*/}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex items-center gap-4">
                    <span className="h-10 w-10 rounded-full bg-slate-50/30 animate-pulse duration-50"></span>
                    <h3 className=" w-64 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></h3>
                  </div>
                </td>

                {/* upload date */}
                <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className=" w-24 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></div>
                </td>

                <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className=" w-24 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></div>
                </td>

                <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className=" w-10 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></div>
                </td>

                {/* Like-Dislike Count */}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex justify-center gap-4">
                    <span className="inline-block w-20 h-8 rounded-xl bg-green-200/50 animate-pulse duration-50 px-1.5 py-0.5"></span>
                    <span className="inline-block w-20 h-8 rounded-xl bg-red-200/50 animate-pulse duration-50 px-1.5 py-0.5"></span>
                  </div>
                </td>

                {/* Video Manipulation*/}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex gap-4">
                    <div className="h-7 w-7 animate-pulse bg-slate-50/30 duration-50 rounded"></div>
                    <div className="h-7 w-7 animate-pulse bg-slate-50/30 duration-50 rounded"></div>
                  </div>
                </td>
              </tr>
              <tr className="group border">
                {/* Publish-Unpublished toggle box */}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex justify-center">
                    <label className="relative inline-block w-14 cursor-pointer overflow-hidden">
                      <span className="inline-block border h-7 w-full rounded-2xl bg-gray-200/50 animate-pulse duration-50 mt-2"></span>
                    </label>
                  </div>
                </td>
                {/* Publish-Unpublished label */}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex justify-center">
                    <span className="inline-block bg-slate-50/30 animate-pulse duration-50 rounded-2xl w-20 h-8 px-1.5 py-0.5"></span>
                  </div>
                </td>

                {/* Thumbnail & Title*/}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex items-center gap-4">
                    <span className="h-10 w-10 rounded-full bg-slate-50/30 animate-pulse duration-50"></span>
                    <h3 className=" w-64 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></h3>
                  </div>
                </td>

                {/* upload date */}
                <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className=" w-24 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></div>
                </td>

                <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className=" w-24 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></div>
                </td>

                <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className=" w-10 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></div>
                </td>

                {/* Like-Dislike Count */}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex justify-center gap-4">
                    <span className="inline-block w-20 h-8 rounded-xl bg-green-200/50 animate-pulse duration-50 px-1.5 py-0.5"></span>
                    <span className="inline-block w-20 h-8 rounded-xl bg-red-200/50 animate-pulse duration-50 px-1.5 py-0.5"></span>
                  </div>
                </td>

                {/* Video Manipulation*/}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex gap-4">
                    <div className="h-7 w-7 animate-pulse bg-slate-50/30 duration-50 rounded"></div>
                    <div className="h-7 w-7 animate-pulse bg-slate-50/30 duration-50 rounded"></div>
                  </div>
                </td>
              </tr>
              <tr className="group border">
                {/* Publish-Unpublished toggle box */}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex justify-center">
                    <label className="relative inline-block w-14 cursor-pointer overflow-hidden">
                      <span className="inline-block border h-7 w-full rounded-2xl bg-gray-200/50 animate-pulse duration-50 mt-2"></span>
                    </label>
                  </div>
                </td>
                {/* Publish-Unpublished label */}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex justify-center">
                    <span className="inline-block bg-slate-50/30 animate-pulse duration-50 rounded-2xl w-20 h-8 px-1.5 py-0.5"></span>
                  </div>
                </td>

                {/* Thumbnail & Title*/}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex items-center gap-4">
                    <span className="h-10 w-10 rounded-full bg-slate-50/30 animate-pulse duration-50"></span>
                    <h3 className=" w-64 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></h3>
                  </div>
                </td>

                {/* upload date */}
                <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className=" w-24 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></div>
                </td>

                <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className=" w-24 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></div>
                </td>

                <td className="border-collapse text-center border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className=" w-10 h-7 bg-slate-50/30 animate-pulse duration-50 rounded"></div>
                </td>

                {/* Like-Dislike Count */}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex justify-center gap-4">
                    <span className="inline-block w-20 h-8 rounded-xl bg-green-200/50 animate-pulse duration-50 px-1.5 py-0.5"></span>
                    <span className="inline-block w-20 h-8 rounded-xl bg-red-200/50 animate-pulse duration-50 px-1.5 py-0.5"></span>
                  </div>
                </td>

                {/* Video Manipulation*/}
                <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                  <div className="flex gap-4">
                    <div className="h-7 w-7 animate-pulse bg-slate-50/30 duration-50 rounded"></div>
                    <div className="h-7 w-7 animate-pulse bg-slate-50/30 duration-50 rounded"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function handleInputChange(input) {
    if (!input.trim()) {
      setFilteredVideos(channelVideos);
      return;
    }
    const filtered = channelVideos.filter((video) =>
      video.title.toLowerCase().startsWith(input.toLowerCase().trim())
    );
    setFilteredVideos(filtered);
  }

  let videos = filteredVideos || channelVideos;

  return (
    <>
      {/* Search bar */}
      <div className="flex items-start">
        <div className="relative w-full max-w-lg  overflow-hidden">
          <input
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-full peer rounded-r-[20px] border dark:focus:border-[#ae7aff] focus:border-[#ff9d7a] bg-transparent py-1 pl-9 pr-3 dark:placeholder-white placeholder:black outline-none sm:py-2"
            placeholder="Search"
          />
          <span className="absolute dark:peer-focus:text-[#ae7aff] peer-focus:text-[#ff957a] left-2.5 top-1/2 inline-block -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className=" h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </span>
        </div>
      </div>

      {/* Video Manipulation Table */}
      <div className="w-full overflow-auto">
        <table className="w-full min-w-[1200px] border-collapse border text-zinc-500 dark:text-white">
          <thead>
            <tr>
              <th className="border-collapse border-b p-4">Status</th>
              <th className="border-collapse border-b p-4">Status</th>
              <th className="border-collapse border-b p-4">Video</th>
              <th className="border-collapse border-b p-4">Date uploaded</th>
              <th className="border-collapse border-b p-4">Views</th>
              <th className="border-collapse border-b p-4">Comments</th>
              <th className="border-collapse border-b p-4">Ratings</th>
              <th className="border-collapse border-b p-4">Options</th>
            </tr>
          </thead>
          <tbody>
            {videos?.map((video) => (
              <AdminVideoAtom key={video._id} video={video} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPanelVideos;
