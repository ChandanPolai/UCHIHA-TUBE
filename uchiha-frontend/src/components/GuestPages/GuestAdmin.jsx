import React from "react";
import GuestComponent from "./GuestComponent";
import { icons } from "../../assets/icons";

function GuestAdmin() {
  return (
    <GuestComponent
      title="Manage your content with ease"
      subtitle="Sign in to access moderation tools and channel settings."
      icon={<span className="">{icons.Admin}</span>}
    />
  );
}

export default GuestAdmin;
