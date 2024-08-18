import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLink, deleteLink, updateLink, updateProfile } from "../../app/Slices/authSlice";

function EditChannelInfo({ userData }) {
  const defaultValues = {
    username: userData?.username || "",
    description: userData?.description || "",
  };
  const dispatch = useDispatch();
  const [data, setData] = useState(defaultValues);

  function handleLink(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let linkId = event.target;
    console.log("linkId: ", linkId);
    console.log("formData: ", formData);

    if (linkId) dispatch(updateLink({ linkId, formData }));
    else dispatch(addLink({ formData }));
  }
  function handleDeleteLink(event) {
    let linkId = event.target.dataset.linkId;
    dispatch(deleteLink(linkId));
  }

  const handleSaveChange = (event) => {
    event.preventDefault();

    let formData = {}; //= { username: data?.username, description: data?.description };
    if (defaultValues.username !== data.username) formData.username = data?.username;
    if (defaultValues.description !== data.description) formData.description = data?.description;

    dispatch(updateProfile(formData)).then((res) => {
      if (res.type != "auth/updateProfile/rejected") {
        setData(res.payload);
      }
    });
  };

  const handleCancle = () => setData(defaultValues);

  return (
    <div className="flex flex-wrap justify-center gap-y-4 mt-4">
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <h5 className="font-semibold">Channel Info</h5>
        <p className="dark:text-gray-300 text-zinc-400 ">Update your Channel details here.</p>
      </div>
      <div className="w-full sm:w-1/2 lg:w-2/3">
        <form onSubmit={handleSaveChange} className="rounded-lg border">
          <div className="flex flex-wrap gap-y-4 p-4">
            <div className="w-full">
              <label className="mb-1 inline-block" htmlFor="username">
                Username
              </label>
              <div className="flex rounded-lg border">
                <p className="flex shrink-0 items-center border-r border-white px-3 align-middle">
                  Uchiha-Tube/.com
                </p>
                <input
                  type="text"
                  className="w-full bg-transparent px-2 py-1.5"
                  id="username"
                  name="username"
                  placeholder="@username"
                  onChange={(e) => setData((pre) => ({ ...pre, username: e.target.value }))}
                  value={data?.username}
                />
              </div>
            </div>

            {/* Description */}
            <div className="w-full">
              <label className="mb-1 inline-block" htmlFor="desc">
                Description
              </label>
              <textarea
                className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                rows="4"
                id="desc"
                name="description"
                defaultValue={data?.description}
                onChange={(e) => setData((pre) => ({ ...pre, description: e.target.value }))}
                placeholder="Channel Description"
              ></textarea>
              <p className="mt-0.5 text-sm dark:text-gray-300 text-zinc-500">275 characters left</p>
            </div>

            {/* links */}
          </div>
          <hr className="border border-gray-300" />
          <div className="flex items-center justify-end gap-4 p-4">
            <button
              type="button"
              disabled={data == defaultValues}
              onClick={() => handleCancle()}
              className="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={data == defaultValues}
              className="inline-block dark:bg-[#ae7aff] bg-green-600 text-white dark:text-black  px-3 py-1.5 rounded disabled:cursor-not-allowed"
            >
              Save changes
            </button>
          </div>
        </form>
        {/* Links Form */}
        {/* <div className="rounded-lg mt-2 border">
          <div className="w-full p-3">
            <label className="mb-2 text-lg inline-block" htmlFor="username">
              External Links
            </label>
            <div>
              <form
                name={userData?.links?.length > 0 ? userData.links[0]._id : null}
                onSubmit={handleLink}
                className="flex rounded-lg gap-x-2"
              >
                <label className="mr-5 text-lg inline-block" htmlFor="username">
                  Link 1
                </label>
                <div className=" mr-2">
                  <label className=" mb-1 mr-3 inline-block">Name</label>
                  <input
                    type="text"
                    className="border bg-transparent px-2 py-0.5 rounded"
                    name="name"
                    required
                    placeholder="Enter name of link"
                    defaultValue={userData?.links?.length > 0 ? userData.links[0].name : ""}
                  />
                </div>
                <div className="">
                  <label className=" mb-1 mr-3 inline-block">URL</label>
                  <input
                    type="url"
                    className="border bg-transparent px-2 py-0.5 rounded"
                    name="url"
                    required
                    placeholder="url you want to add"
                    defaultValue={userData?.links?.length > 0 ? userData.links[0].url : ""}
                  />
                </div>
                <button
                  type="submit"
                  className=" px-4 rounded-sm mb-1 ml-3 bg-[#ae7aff] text-black border border-transparent hover:border-dotted hover:border-white"
                >
                  {userData?.links?.length > 0 ? "Update" : "Add"}
                </button>
              </form>

              <form
                data-linkId={userData?.links?.length > 1 ? userData.links[1]._id : null}
                onSubmit={handleLink}
                className="flex rounded-lg gap-x-2"
              >
                <label className="mr-5 text-lg inline-block" htmlFor="username">
                  Link 2
                </label>
                <div className=" mr-2">
                  <label className=" mb-1 mr-3 inline-block">Name</label>
                  <input
                    type="text"
                    className="border bg-transparent px-2 py-0.5 rounded"
                    name="name"
                    required
                    placeholder="Enter name of link"
                    defaultValue={userData?.links?.length > 1 ? userData.links[1].name : ""}
                  />
                </div>
                <div className="">
                  <label className=" mb-1 mr-3 inline-block">URL</label>
                  <input
                    type="url"
                    className="border bg-transparent px-2 py-0.5 rounded"
                    name="url"
                    required
                    placeholder="url you want to add"
                    defaultValue={userData?.links?.length > 1 ? userData.links[1].url : ""}
                  />
                </div>
                <button
                  type="submit"
                  className=" px-4 rounded-sm mb-1 ml-3 bg-[#ae7aff] text-black border border-transparent hover:border-dotted hover:border-white"
                >
                  {userData?.links?.length > 1 ? "Update" : "Add"}
                </button>
              </form>

              <form
                data-linkId={userData?.links?.length > 2 ? userData.links[2]._id : null}
                onSubmit={handleLink}
                className="flex rounded-lg gap-x-2"
              >
                <label className="mr-5 text-lg inline-block" htmlFor="username">
                  Link 3
                </label>
                <div className=" mr-2">
                  <label className=" mb-1 mr-3 inline-block">Name</label>
                  <input
                    type="text"
                    className="border bg-transparent px-2 py-0.5 rounded"
                    name="name"
                    required
                    placeholder="Enter name of link"
                    defaultValue={userData?.links?.length > 2 ? userData.links[2].name : ""}
                  />
                </div>
                <div className="">
                  <label className=" mb-1 mr-3 inline-block">URL</label>
                  <input
                    type="url"
                    className="border bg-transparent px-2 py-0.5 rounded"
                    name="url"
                    required
                    placeholder="url you want to add"
                    defaultValue={userData?.links?.length > 2 ? userData.links[2].url : ""}
                  />
                </div>
                <button
                  type="submit"
                  className=" px-4 rounded-sm mb-1 ml-3 bg-[#ae7aff] text-black border border-transparent hover:border-dotted hover:border-white"
                >
                  {userData?.links?.length > 1 ? "Update" : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default EditChannelInfo;
