import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import ProfileSection from "./components/ProfileSection.jsx";
import TopBarSection from "./components/TopBarSection.jsx";
import AboutMeSection from "./components/AboutMeSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import OrganizationSection from "./components/OrganizationSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ConnectionSection from "./components/ConnectionSection.jsx";
import Header from "./components/Header.jsx";
import Edit from "./components/Edit.jsx";
import About from "./components/About.jsx";

const user = {
  firstName: "Jane",
  lastName: "Doe",
  school: "University of California, Irvine",
  avatar: "src/assets/jane-doe.png",
  joinDate: "2025-03-08",
  treeImage: "src/assets/tree.png",
  aboutMe:
    "I'm a dedicated computer science student developing my technical skills through coursework, personal projects, and hackathons, I've developed strong skills in problem-solving and creating efficient code. I'm eager to apply my technical knowledge in real-world settings and connect with industry professionals as I prepare to enter the field.",
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex max-h-screen bg-gray-200">
      <Navbar />
      <div className="flex flex-col items-center overflow-scroll w-full">
        <Header />
        <div className="w-3/4 flex flex-col items-center ">
          <ProfileSection user={user} onEditClick={handleEditClick} />
          {isEditing ? (
            <Edit onSave={handleSaveClick} user={user} />
          ) : (
            <About />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
