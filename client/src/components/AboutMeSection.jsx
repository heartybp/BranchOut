import React from "react";

const AboutMeSection = ({user}) => {
    return (
        <div className="flex flex-col w-full mx-auto p-20 bg-white items-center">
            <h1 className="text-3xl mx-80 font-bold text-gray-800 mb-4">About Me</h1>
            <p className="text-sm text-gray-600 leading-relaxed mx-60 justify-center">{user.aboutMe}</p>
      </div>
    );
};

export default AboutMeSection;