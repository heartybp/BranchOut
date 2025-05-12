import React from "react";
import AboutMeSection from "./AboutMeSection.jsx";
import EducationSection from "./EducationSection.jsx";
import OrganizationSection from "./OrganizationSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import ConnectionSection from "./ConnectionSection.jsx";

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

const Edit = () => {
  return (
    <div>
      <AboutMeSection user={user} />
      <EducationSection />
      <OrganizationSection />
      <ExperienceSection />
      <ConnectionSection />
    </div>
  );
};

export default Edit;
