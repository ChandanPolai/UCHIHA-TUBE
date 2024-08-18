import React from "react";
import { Aside } from "./index";
import { Outlet } from "react-router-dom";

function Feed() {
  return (
    <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
      <Aside />
      <Outlet/>
    </div>
  );
}

export default Feed;
