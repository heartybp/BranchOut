import React from "react";
import Navbar from "./components/Navbar.jsx";
import ProfileSection from "./components/ProfileSection.jsx";

const Profile = () => {
  return (
    <div className="flex max-h-screen">
      <Navbar />

      <div className="flex justify-center overflow-y-scroll bg-gray-200">
        <ProfileSection />
      </div>
    </div>
  );
};

export default Profile;
