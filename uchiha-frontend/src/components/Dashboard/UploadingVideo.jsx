import React, { useRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import ConfirmPopup from "../Atoms/ConfirmPopup";
import { icons } from "../../assets/icons";

function UploadingVideo({ video, abort, updating = false }, ref) {
  const dialog = useRef();
  const confirmCancelDialog = useRef();

  // const [isUploading, setIsUploading] = useState(true);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  function handleCancel(isConfirm) {
    if (isConfirm) abort();
  }
  
  return createPortal(
    <dialog
      ref={dialog}
      onClose={() => confirmCancelDialog.current?.close()}
      className="h-full dark:text-white text-black backdrop:backdrop-blur-sm"
    >
      <div className="relative flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        <div className="fixed inset-0 top-[calc(66px)] z-10 flex flex-col bg-black/50 px-4 pb-[86px] pt-4 sm:top-[calc(82px)] sm:px-14 sm:py-8">
          <div className="absolute inset-x-0 top-0 z-10 flex h-[calc(100vh-66px)] items-center justify-center bg-black/50 px-4 pb-[86px] pt-4 sm:h-[calc(100vh-82px)] sm:px-14 sm:py-8">
            <div className="w-full max-w-lg overflow-auto rounded-lg border border-gray-700 dark:bg-[#121212] bg-white p-4">
              <div className="mb-4 flex items-start justify-between">
                <h2 className="text-xl font-semibold">
                  {updating ? "Updating" : "Uploading"} Video...
                  <span className="block text-sm text-zinc-500 dark:text-gray-300">
                    Track your video {updating ? "Updating" : "Uploading"} process.
                  </span>
                </h2>
                <button onClick={() => dialog.current?.close()} className="h-6 w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-6 flex gap-x-2 border p-3">
                <div className="w-8 shrink-0">
                  <span className="inline-block w-full rounded-full bg-[#E4D3FF] p-1 text-[#AE7AFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="flex flex-col">
                  <h6>
                    {updating
                      ? "Updating " + video.title
                      : video?.videoFile?.length > 0 && video?.videoFile[0].name}
                  </h6>
                  {!updating && (
                    <p className="text-sm">
                      {video?.videoFile?.length > 0 &&
                        (video?.videoFile[0].size / 1000000).toFixed(2)}{" "}
                      MB
                    </p>
                  )}
                  <div className="mt-2   ">
                    {icons.loading}
                    {updating ? "Updating" : "Uploading"}...
                  </div>
                </div>
              </div>
              {!updating && (
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => dialog.current.close()} className="border px-4 py-3">
                    Close
                  </button>
                  <ConfirmPopup
                    ref={confirmCancelDialog}
                    actionFunction={handleCancel}
                    title="Are you sure to cancel the Upload?"
                  />
                  <button
                    onClick={() => confirmCancelDialog.current.open()}
                    className="dark:bg-[#ae7aff] bg-red-500 rounded px-4 py-3 dark:text-black text-white dark:disabled:bg-[#E4D3FF] disabled:bg-[#f1d5c8]"
                  >
                    Cancel Upload
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>,
    document.getElementById("popup-models")
  );
}

export default React.forwardRef(UploadingVideo);
