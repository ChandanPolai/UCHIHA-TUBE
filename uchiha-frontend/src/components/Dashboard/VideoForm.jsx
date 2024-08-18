import React, { useEffect, useState } from "react";
import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { publishVideo, updateVideo } from "../../app/Slices/videoSlice";
import { UploadSuccess, UploadingVideo } from "../index";

function VideoForm({ video = false }, ref) {
  const dialog = useRef();
  const uploadingDialog = useRef();
  const successDialog = useRef();
  const dispatch = useDispatch();

  const [promise, setPromise] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: video?.title || "",
      description: video?.description || "",
    },
  });

  useImperativeHandle(ref, () => {
    return {
      open() {
        setShowPopup(true);
        dialog.current?.showModal();
      },
      close() {
        dialog.current?.close();
      },
    };
  });

  useEffect(() => {
    if (showPopup) {
      dialog.current.showModal();
    }
  }, [showPopup]);

  async function handleVideo(data) {
    // OPTIMIZEME do not submit if details are not modified
    console.log("data: ", data);

    let uploadPromise;
    if (video) {
      uploadPromise = dispatch(updateVideo({ videoId: video._id, data }));
    } else {
      uploadPromise = dispatch(publishVideo({ data }));
    }
    uploadPromise.then((res) => {
      if (res.meta.requestStatus == "fulfilled") {
        uploadingDialog.current.close();
        successDialog.current.open();
      } else if (res.meta.requestStatus == "rejected") {
        uploadingDialog.current.close();
      }
    });

    setPromise(uploadPromise);
    dialog.current?.close();
    uploadingDialog.current?.open();
  }

  const handleAbort = () => promise.abort();

  return (
    <div>
      {showPopup &&
        createPortal(
          <dialog ref={dialog} className="h-fit backdrop:backdrop-blur-lg lg:w-[40%] md:w-2/3 rounded ">
            <UploadingVideo
              ref={uploadingDialog}
              abort={handleAbort}
              video={video || getValues()}
              updating={video ? true : false}
            />
            <UploadSuccess
              ref={successDialog}
              video={video || getValues()}
              updating={video ? true : false}
            />
            <div className=" dark:bg-black/85 p-2 sm:p-2 dark:text-white bg-[#fff8f8] text-black rounded ">
              <form onSubmit={handleSubmit(handleVideo)} className="h-fit border  bg-white dark:bg-[#121212] rounded ">
                {/* Close Buttons */}
                <div className="flex items-center justify-between border-b px-2 py-1 md:p-3">
                  <h2 className="text-xl font-semibold">{video ? "Update" : "Upload"} Video</h2>
                  <button
                    type="button"
                    autoFocus
                    onClick={() => dialog.current.close()}
                    className=" rounded group/btn mr-1 flex w-auto items-center gap-x-2 dark:bg-[#ae7aff] bg-red-500/70 text-white  px-3 py-2 text-center font-bold dark:text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                  >
                    Close
                  </button>
                </div>

                {/* Form Input */}
                <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-2 md:gap-y-3 p-4">
                  {/* Video File */}
                  {!video && (
                    <>
                      <div className="w-full border-2 border-dashed px-2 py-5 text-center">
                        <span className="mb-2 md:mb-4 inline-block md:w-12 w-12 rounded-full bg-[#E4D3FF] p-3 text-[#AE7AFF]">
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
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="mb-1 md:mb-2 font-semibold text-sm md:text:lg">
                          Select video file to upload
                          {/* Drag and drop video files to upload */}
                        </h6>
                        <p className="text-gray-400 text-sm md:text:lg">
                          Your videos will be public until you un-publish them.
                          {/* Your videos will be private until you publish them. */}
                        </p>
                        <label
                          htmlFor="upload-video"
                          className="group/btn mt-3 md:mt-3 inline-flex w-auto cursor-pointer items-center gap-x-2 dark:bg-[#ae7aff] rounded bg-[#f67a7a] px-3 py-2 text-xs md:text-sm md:px-3 md:py-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                        >
                          <input
                            type="file"
                            {...register("videoFile", {
                              required: true,
                              validate: (file) => {
                                const allowedExtensions = ["video/mp4"];
                                const fileType = file[0].type;
                                return allowedExtensions.includes(fileType)
                                  ? true
                                  : "Invalid file type! Only .mp4 files are accepted";
                              },
                            })}
                            id="upload-video"
                            className="sr-only"
                          />
                          Select Files
                        </label>
                      </div>
                      {errors.videoFile?.type === "required" && (
                        <div className="text-red-500">*VideoFile is required</div>
                      )}
                      {errors.videoFile?.type === "validate" && (
                        <div className="text-red-500">
                          *Invalid file type! Only .mp4 files are accepted
                        </div>
                      )}
                    </>
                  )}

                  {/* TODO: add thumbnail preview if exist */}
                  {/* Thumbnail */}
                  <div className="w-full">
                    <label htmlFor="thumbnail" className="mb-1 inline-block hover:cursor-pointer">
                      Thumbnail
                      {!video && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      id="thumbnail"
                      type="file"
                      {...register("thumbnail", {
                        required: !video,
                        validate: (file) => {
                          if (video) return true;
                          if (!file[0]) return true;
                          const allowedExtensions = ["image/jpeg", "image/png", "image/jpg"];
                          const fileType = file[0]?.type;
                          return allowedExtensions.includes(fileType)
                            ? true
                            : "Invalid file type! Only .png .jpg and .jpeg files are accepted";
                        },
                      })}
                      className="w-full border p-1 file:mr-4 file:border-none dark:file:bg-[#ae7aff] file:bg-[#f78964] file:px-3 file:py-1.5 file:rounded    "
                    />
                  </div>
                  {errors.thumbnail?.type === "required" && (
                    <div className=" text-red-500">*Thumbnail is required</div>
                  )}
                  {errors.thumbnail?.type === "validate" && (
                    <div className=" text-red-500">
                      *Only .png .jpg and .jpeg files are accepted
                    </div>
                  )}

                  {/* Title */}
                  <div className="w-full">
                    <label htmlFor="title" className="mb-1 inline-block">
                      Title
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="title"
                      {...register("title", { required: true })}
                      type="text"
                      className="w-full border focus:border-[#ae7aff] bg-transparent px-2 py-1 outline-none"
                    />
                  </div>
                  {errors.title?.type === "required" && (
                    <div className=" text-red-500">*Title is required</div>
                  )}

                  {/* Description */}
                  <div className="w-full">
                    <label htmlFor="desc" className="mb-1 inline-block">
                      Description
                    </label>
                    <textarea
                      id="desc"
                      {...register("description")}
                      className="h-24 md:h-32 w-full resize-none border focus:border-[#ae7aff] bg-transparent px-2 py-1 outline-none"
                    ></textarea>
                  </div>

                  {/* Control Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Cancel button */}
                    <button
                      type="button"
                      onClick={() => dialog.current.close()}
                      className="border px-4 py-2 md:px-4 md:py-3 rounded hover:bg-zinc-500  dark:hover:bg-[#212121FF]"
                    >
                      Cancel
                    </button>
                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={errors.title || errors.videoFile || (!video && errors.thumbnail)}
                      className="dark:bg-[#ae7aff] rounded bg-[#f78964] px-4 py-2 md:px-4 md:py-3 text-black hover:font-semibold hover:border dark:disabled:bg-[#E4D3FF] disabled:bg-[#e8bdb8] disabled:cursor-not-allowed"
                    >
                      {video ? "Update" : "Publish"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </dialog>,
          document.getElementById("popup-models")
        )}
    </div>
  );
}

export default React.forwardRef(VideoForm);
