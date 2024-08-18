import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword as changePWD } from "../../app/Slices/authSlice";
import { toast } from "react-toastify";

function ChangePassword() {
  const defaultValues = { oldPassword: "", newPassword: "", confPassword: "" };

  const [data, setData] = useState(defaultValues);
  const dispatch = useDispatch();

  const handleSaveChange = (event) => {
    event.preventDefault();

    if (!data?.confPassword || !data?.newPassword || !data?.oldPassword) {
      toast.error("All fields required!!!");
      return;
    }
    if (data?.confPassword !== data?.newPassword) {
      toast.error("confirm password not matching");
      return;
    }
    
    const formData = { oldPassword: data?.oldPassword, newPassword: data?.newPassword };
    dispatch(changePWD(formData)).then((res) => {
      if (res.type != "auth/changePassword/rejected") {
        setData(defaultValues);
      }
    });
  };

  const handleCancle = () => setData(defaultValues);

  return (
    <div className="flex flex-wrap justify-center gap-y-4 py-4">
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <h5 className="font-semibold">Password</h5>
        <p className="dark:text-gray-300 text-zinc-500 ">Please enter your current password to change your password.</p>
      </div>
      <div className="w-full sm:w-1/2 lg:w-2/3">
        <form onSubmit={handleSaveChange} className="rounded-lg border">
          <div className="flex flex-wrap gap-y-4 p-4">
            <div className="w-full">
              <label className="mb-1 inline-block" htmlFor="old-pwd">
                Current password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                id="old-pwd"
                placeholder="Current password"
                name="oldPassword"
                onChange={(e) => setData((pre) => ({ ...pre, oldPassword: e.target.value }))}
                value={data?.oldPassword}
              />
            </div>
            <div className="w-full">
              <label className="mb-1 inline-block" htmlFor="new-pwd">
                New password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                id="new-pwd"
                placeholder="New password"
                name="newPassword"
                onChange={(e) => setData((pre) => ({ ...pre, newPassword: e.target.value }))}
                value={data?.newPassword}
              />
              <p className="mt-0.5 text-sm dark:text-gray-300 text-zinc-500 ">
                Your new password must be more than 8 characters.
              </p>
            </div>
            <div className="w-full">
              <label className="mb-1 inline-block" htmlFor="cnfrm-pwd">
                Confirm password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                id="cnfrm-pwd"
                placeholder="Confirm password"
                name="confPassword"
                onChange={(e) => setData((pre) => ({ ...pre, confPassword: e.target.value }))}
                value={data?.confPassword}
              />
            </div>
          </div>
          <hr className="border border-gray-300" />
          <div className="flex items-center justify-end gap-4 p-4">
            <button
              type="button"
              onClick={() => handleCancle()}
              className="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10"
            >
              Cancel
            </button>
            <button type="submit" className="inline-block rounded dark:bg-[#ae7aff] bg-green-600 text-white dark:text-black px-3 py-1.5 ">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
