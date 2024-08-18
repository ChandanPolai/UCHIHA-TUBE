import React from "react";
import GuestComponent from "./GuestComponent";
import { icons } from "../../assets/icons";

function GuestSubscription() {
  return (
    <GuestComponent
      title="Subscribe to Stay Updated"
      subtitle="Sign in to Sign in to follow creators and see updates from your favorite channels."
      icon={icons.Subscription}
    />
  );
}

export default GuestSubscription;
