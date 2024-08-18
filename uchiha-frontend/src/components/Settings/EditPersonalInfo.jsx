import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../app/Slices/authSlice";

function EditPersonalInfo({ userData }) {
  const defaultValues = {
    firstname: (userData?.fullName.split(" ", 2))[0] || "",
    lastname: (userData?.fullName.split(" ", 2))[1] || "",
    email: userData?.email || "",
  };

  const [data, setData] = useState(defaultValues);
  const dispatch = useDispatch();

  const handleSaveChange = (event) => {
    event.preventDefault();
    const formData = { fullName: data.firstname + " " + data.lastname, email: data.email };
    dispatch(updateProfile(formData)).then((res) => {
    });
  };

  const handleCancle = () => setData(defaultValues);

  return (
    <div className="flex flex-wrap justify-center gap-y-4 py-4">
      {/* heading */}
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <h5 className="font-semibold">Personal Info</h5>
        <p className="dark:text-gray-300 text-zinc-600  ">Update your photo and personal details.</p>
      </div>
      {/* Update Box */}
      <div className="w-full sm:w-1/2 lg:w-2/3">
        <form onSubmit={handleSaveChange} className="rounded-lg border">
          {/* Form Inputs */}
          <div className="flex flex-wrap gap-y-4 p-4">
            {/* Fields */}
            <div className="w-full lg:w-1/2 lg:pr-2">
              <label htmlFor="firstname" className="mb-1 inline-block">
                First name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                id="firstname"
                name="firstname"
                placeholder="Enter first name"
                onChange={(e) =>
                  setData((pre) => {
                    return { ...pre, firstname: e.target.value };
                  })
                }
                value={data?.firstname}
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-2">
              <label htmlFor="lastname" className="mb-1 inline-block">
                Last name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                id="lastname"
                name="lastname"
                placeholder="Enter last name"
                onChange={(e) => setData((pre) => ({ ...pre, lastname: e.target.value }))}
                value={data?.lastname}
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastname" className="mb-1 inline-block">
                Email address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    ></path>
                  </svg>
                </div>
                <input
                  type="email"
                  className="w-full rounded-lg border bg-transparent py-1.5 pl-10 pr-2"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  onChange={(e) => setData((pre) => ({ ...pre, email: e.target.value }))}
                  value={data?.email}
                />
              </div>
            </div>
          </div>
          <hr className="border border-gray-300" />
          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 p-4">
            <button
              type="button"
              onClick={handleCancle}
              disabled={data == defaultValues}
              className="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10 disabled:cursor-not-allowed"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={data == defaultValues}
              className="inline-block rounded dark:bg-[#ae7aff] bg-green-600 text-white dark:text-black px-3 py-1.5  disabled:cursor-not-allowed"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPersonalInfo;
