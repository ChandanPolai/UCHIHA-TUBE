import React, { useRef, useState } from "react";
import { icons } from "../../assets/icons";
import { LoginPopup } from "../index";

function GuestComponent({
  icon,
  title = "Sign in to view this page",
  subtitle = "",
  route,
  guest = true,
}) {
  const LoginPopupDialog = useRef();

  return (
    <section className="w-full bg-white dark:bg-black flex justify-center pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <div className="flex relative top-20 justify-center p-4">
        <div className="w-full max-w-fit text-center">
          <p className="mb-3 w-full">
            {/* Icon */}
            <span className="inline-flex w-36 h-36 rounded-full drop-shadow-2xl  dark:bg-[#E4D3FF] p-2 bg-[#ffefef] dark:text-[#AE7AFF] text-red-500 ">
              {icon}
            </span>
          </p>
          <h5 className="mt-6 mb-2 text-2xl dark:text-white text-[#fe6060] font-semibold">{title}</h5>
          <p className="dark:text-white text-red-500 " >{subtitle}</p>
          {guest && (
            <>
              <LoginPopup ref={LoginPopupDialog} route={route || ""} />
              <button
                onClick={() => LoginPopupDialog.current.open()}
                className="mt-4 inline-flex items-center gap-x-2 rounded text-white dark:bg-[#ae7aff] bg-red-500 hover:bg-red-600 dark:hover:bg-[#ae7aff]/95 hover:border-dotted border border-transparent dark:hover:border-white hover:border-black px-3 py-2 font-semibold dark:text-black"
              >
                <span className="w-5 ">{icons.Login}</span>
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default GuestComponent;
