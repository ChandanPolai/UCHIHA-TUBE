import React from "react";
import GuestComponent from "./GuestComponent";
import { icons } from "../../assets/icons";

function GuestLikedVideos() {
  return (
    <GuestComponent
      title="Save your favorite moments"
      subtitle=" Discover new videos you'll love by signing in and liking them."
      icon={<span className="w-full h-full flex items-center p-4 pb-5">{icons.Like}</span>}
    />
  );
}
export default GuestLikedVideos;
