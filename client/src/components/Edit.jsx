import React from "react";
import AboutMeSection from "./AboutMeSection.jsx";
import EducationSection from "./EducationSection.jsx";
import OrganizationSection from "./OrganizationSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import ConnectionSection from "./ConnectionSection.jsx";

const Edit = ({ user, onSave }) => {
  return (
    <div className="w-full">
      <AboutMeSection user={user} />
      <EducationSection />
      <OrganizationSection />
      <ExperienceSection />
      <ConnectionSection />

      <div className="flex justify-center bg-white pb-10">
        <button
          onClick={onSave}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
        >
          Finished Editing
        </button>
      </div>
    </div>
  );
};

export default Edit;
