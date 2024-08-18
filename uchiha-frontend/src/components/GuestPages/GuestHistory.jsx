import React from "react";
import GuestComponent from "./GuestComponent";
import { icons } from "../../assets/icons";
function GuestHistory() {
  return (
    <GuestComponent
      title="Keep track of what you watch"
      subtitle="Watch history isn't viewable when signed out."
      icon={icons.history}
    />
  );
}

export default GuestHistory;
