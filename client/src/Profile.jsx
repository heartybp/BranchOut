import React from "react";
import Navbar from "./components/Navbar.jsx";
import ProfileSection from "./components/ProfileSection.jsx";
import TopBarSection from "./components/TopBarSection.jsx";
import AboutMeSection from "./components/AboutMeSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import OrganizationSection from "./components/OrganizationSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ConnectionSection from "./components/ConnectionSection.jsx";
import Header from "./components/Header.jsx";

const user = {
  firstName: "Jane",
  lastName: "Doe",
  school: "University of California, Irvine",
  avatar: "src/assets/jane-doe.png",
  joinDate: "2025-03-08",
  treeImage: "src/assets/tree.png",
  aboutMe:
    "I'm a results-driven marketing specialist with 5+ years of digital marketing, specializing in content creation, social media strategy, and data-driven campaigns. I have a passion for helping brands grow by crafting compelling stories and driving measurable results.",
};

const Profile = () => {
  return (
    <div className="flex max-h-screen bg-gray-200">
      <Navbar />

      <div className="flex flex-col ">
        <Header />
        <TopBarSection />
        <div className="w-3/4 flex flex-col items-center bg-red-200">
          <ProfileSection user={user} />
          <AboutMeSection user={user} />
          <EducationSection />
          <OrganizationSection />
          <ExperienceSection />
          <ConnectionSection />
        </div>
      </div>
    </div>
  );
};

export default Profile;
