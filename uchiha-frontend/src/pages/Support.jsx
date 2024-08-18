import React from "react";
import { icons } from "../assets/icons";
import { GuestComponent } from "../components";

function Support() {
  return (
    <>
      <section className="w-full flex justify-center pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="flex relative top-20 justify-center p-4">
          <div className="w-full max-w-fit text-center">
            <p className="mb-3 w-full drop-shadow-2xl ">
              <span className="inline-flex w-36 h-36 rounded-full dark:bg-[#E4D3FF] bg-[#ffefef] text-red-500  p-2 dark:text-[#AE7AFF]">
                {icons.support}
              </span>
            </p>
            <h5 className="mt-6 mb-7 text-2xl font-semibold dark:text-white  text-red-400 ">
              Contact me for any issue or Support
            </h5>
            <ul className="text-center flex flex-col items-center space-y-2">
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full">
                  <h2 className="text-lg font-bold my-0">Twitter</h2>
                  <a
                    href=" https://x.com/Chandanpolai26?t=lLvLSTy_wm4IZkGItPScZw&s=08"
                    target="_blank"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    /chandan polai
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full">
                  <h2 className="text-lg font-bold my-0">LikedIn</h2>
                  <a
                    href="https://www.linkedin.com/in/chandan-polai-835063270/"
                    target="_blank"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    /chandan polai
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full">
                  <h2 className="text-lg font-bold my-0">GitHub</h2>
                  <a
                    href="https://github.com/ChandanPolai"
                    target="_blank"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    /chandan polai
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full">
                  <h2 className="text-lg font-bold my-0">Youtube</h2>
                  <a
                    href="https://www.youtube.com/@tgrpolai"
                    target="_blank"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    @tgrpolai
                  </a>
                  {/* <p className="text-blue-500 text-sm hover:text-blue-400 ">@tgrpolai</p> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
