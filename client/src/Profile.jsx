import React from "react";
import Navbar from "./components/Navbar.jsx";
import ProfileSection from "./components/ProfileSection.jsx";

const Profile = () => {
  return (
    <div className="flex">
      <Navbar />

      <div className="w-full flex justify-center bg-gray-300">
        <ProfileSection />
      </div>
    </div>
  );
};

export default Profile;
