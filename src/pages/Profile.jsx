import React from "react";
import ModalComponent from "../components/ModalComponent";
import ProfilePfp from "../components/ProfilePfp";

const Profile = () => {
  return (
    <div className="hero-header">
      <ProfilePfp />
      <ModalComponent />
    </div>
  );
};

export default Profile;
