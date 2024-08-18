import React from "react";
import { Header } from "./index";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        id="scrollable_results_screen"
        className="h-screen overflow-y-auto dark:bg-[#121212] bg-white dark:text-white text-black "
      >
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default Home;
