import React from "react";
import Connection, { studentProfiles } from "./Connection";

const SuggestedConnections = () => {
  const suggestedProfiles = studentProfiles.slice(0, 3);

  return (
    <>
      <h1 className="text-2xl font-bold pl-14 my-8">
        Suggested Connections based on your career goals:
      </h1>
      <div className="flex flex-col gap-y-4 bg-white items-center">
        {/* map through the first 3 student profiles */}
        {suggestedProfiles.map((profile) => (
          <Connection key={profile.id} profile={profile} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-gray-700 text-white px-6 py-2 rounded-md font-medium">
          See More
        </button>
      </div>
    </>
  );
};

export default SuggestedConnections;
