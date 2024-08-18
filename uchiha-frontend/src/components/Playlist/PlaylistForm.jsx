import React, { useEffect, useState } from "react";
import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPlaylist, updatePlaylist } from "../../app/Slices/playlistSlice";
import { icons } from "../../assets/icons";

function PlaylistForm({ playlist }, ref) {
  const dialog = useRef();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: playlist?.name || "",
      description: playlist?.description || "",
    },
  });
  const [showPopup, setShowPopup] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open() {
        setShowPopup(true);
      },
      close() {
        dialog.current.close();
      },
    };
  });

  useEffect(() => {
    if (showPopup) {
      dialog.current.showModal();
    }
  }, [showPopup]);

  const handleClose = () => {
    dialog.current.close();
    setShowPopup(false);
  };

  function handleUpdatePlaylist(data) {
    if (playlist) {
      dispatch(updatePlaylist({ playlistId: playlist._id, data })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") dialog.current.close();
      });
    } else {
      dispatch(createPlaylist({ data })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") dialog.current.close();
      });
    }
  }

  return (
    <div className="absolute">
      {showPopup &&
        createPortal(
          <dialog
            ref={dialog}
            className="h-full items-center backdrop:backdrop-blur-sm"
            onClose={handleClose}
          >
            <div className="relative flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
              <div className="fixed inset-0 top-[calc(66px)] z-10 flex flex-col bg-white/ dark:bg-black/50 px-4 pb-[86px] pt-4 sm:top-[calc(82px)] sm:px-14 sm:py-8">
                <form
                  onSubmit={handleSubmit(handleUpdatePlaylist)}
                  className="mx-auto w-full max-w-lg overflow-auto rounded-lg border border-gray-700 dark:text-white text-black bg-white dark:bg-[#121212] p-4"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <h2 className="text-xl font-semibold">
                      {playlist ? "Edit" : "Create"} Playlist
                      <span className="block text-sm dark:text-gray-300 text-zinc-400">
                        Share where you&#x27;ve worked on your profile.
                      </span>
                    </h2>
                    <button
                      autoFocus
                      type="button"
                      onClick={() => dialog.current.close()}
                      className="h-6 w-6 focus:border focus:border-dotted hover:border-dotted hover:border"
                    >
                      {icons.cross}
                    </button>
                  </div>
                  {/* Inputs  */}
                  <div className="mb-6 flex flex-col gap-y-4">
                    {/* title */}
                    <div className="w-full">
                      <label htmlFor="name" className="mb-1 inline-block">
                        Title
                        <span className=" text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter name of the Playlist"
                        {...register("name", { required: true })}
                        className="w-full border bg-transparent px-2 py-1 outline-none"
                      />
                      {errors.name?.type === "required" && (
                        <p className="text-red-600">Title is required!!!</p>
                      )}
                    </div>
                    {/* description */}
                    <div className="w-full">
                      <label htmlFor="desc" className="mb-1 inline-block">
                        Description
                        {/* <span className=" text-red-600">*</span> */}
                      </label>
                      <textarea
                        id="desc"
                        placeholder="Enter some description of the Playlist"
                        {...register("description", { required: false })}
                        className="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
                      ></textarea>
                      {errors.description?.type === "required" && (
                        <p className="text-red-600">Description is required!!!</p>
                      )}
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => dialog.current.close()}
                      className="border px-4 py-3 dark:hover:bg-[#212121FF] hover:bg-red-500 hover:border-dotted dark:border-white border-black rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={errors.name}
                      className="dark:bg-[#ae7aff] bg-green-400 dark:hover:bg-[#ae7aff]/90 hover:bg-green-600 hover:border-dotted border border-black rounded dark:border-white px-4 py-3 dark:text-black text-white disabled:bg-[#E4D3FF] disabled:cursor-not-allowed"
                    >
                      {playlist ? "Update" : "Create"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>,
          document.getElementById("popup-models")
        )}
    </div>
  );
}

export default React.forwardRef(PlaylistForm);
