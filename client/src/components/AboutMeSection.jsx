import React, { useState } from "react";

const AboutMeSection = ({ user }) => {
  const [aboutText, setAboutText] = useState(user.aboutMe);

  return (
    <div className="w-full bg-white flex flex-col items-center py-10">
      <div className="w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-black">About Me</h1>
          <button className="px-4 py-1 text-white bg-brandGreen rounded-md hover:bg-green-700">
            Save
          </button>
        </div>

        <textarea
          value={aboutText}
          onChange={(e) => setAboutText(e.target.value)}
          className="bg-gray-200 rounded-md px-6 py-4 text-sm text-gray-700 leading-relaxed w-full resize-none outline-none"
        />
      </div>
    </div>
  );
};

export default AboutMeSection;
