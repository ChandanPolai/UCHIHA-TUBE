import React from "react";
import GuestComponent from "./GuestComponent";
import { icons } from "../../assets/icons";

function GuestSubscribers() {
  return (
    <GuestComponent
      title="Connect with your audience"
      subtitle="Sign in to see your subscribers and grow your community."
      icon={<span className="p-4 w-full">{icons.Subscribers}</span>}
    />
  );
}
export default GuestSubscribers;
