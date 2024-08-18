import React, { useEffect, useRef, useState } from "react";
import { getChannelStats, getChannelVideos } from "../app/Slices/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { UploadVideo, ChannelState, AdminPanelVideos } from "../components/index";

function Dashboard() {
  const dispatch = useDispatch();

  const { channelStates, channelVideos } = useSelector(({ dashboard }) => dashboard.data);

  useEffect(() => {
    dispatch(getChannelStats());
    dispatch(getChannelVideos());
  }, []);

  // Skeleton Effect for loading
  if (!channelStates && !channelVideos)
    return (
      <h1 className="size-full text-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-6 px-4 py-8">
          {/* Wel-Coming header */}
          <div className="flex flex-wrap justify-between gap-4">
            {/* Welcoming Headers */}
            <div className="block">
              <h1 className=" w-64 h-6 rounded bg-gray-300/65 animate-pulse font-bold"></h1>
              <p className=" w-96 h-6 mt-2 rounded bg-gray-300/65 animate-pulse"></p>
            </div>
            {/* Video Upload Button */}
            <div className="block">
              <div className="inline-flex w-36 items-center gap-x-2 bg-gray-300/65 h-12 rounded animate-pulse px-3 py-2 font-semibold text-black"></div>
            </div>
          </div>
          {/* channel States */}
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
            <div className="border rounded bg-gray-300/10 animate-pulse p-4">
              <div className="mb-4 block h-16"></div>
              <h6 className="text-gray-300 h-8"></h6>
              <p className=" h-8"></p>
            </div>
            <div className="border rounded bg-gray-300/10 animate-pulse p-4">
              <div className="mb-4 block h-16"></div>
              <h6 className="text-gray-300 h-8"></h6>
              <p className=" h-8"></p>
            </div>
            <div className="border rounded bg-gray-300/10 animate-pulse p-4">
              <div className="mb-4 block h-16"></div>
              <h6 className="text-gray-300 h-8"></h6>
              <p className=" h-8"></p>
            </div>
            <div className="border rounded bg-gray-300/10 animate-pulse p-4">
              <div className="mb-4 block h-16"></div>
              <h6 className="text-gray-300 h-8"></h6>
              <p className=" h-8"></p>
            </div>
          </div>
          {/* search bar */}
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
          {/* video Table */}
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
        </div>
      </h1>
    );

  return (
    channelStates && (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-6 px-4 py-8">
        <ChannelState channelStates={channelStates} />
        <AdminPanelVideos channelVideos={channelVideos} />
      </div>
    )
  );
}

export default Dashboard;
