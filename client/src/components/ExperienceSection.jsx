import React, { useState } from "react";
import { UserCircle } from "lucide-react";

const ExperienceSection = () => {
  const [experience] = useState({
    company: "CoolCompany Co. Irvine",
    title: "Electrical Engineer",
    period: "Aug 2020 – Jul 2021",
    description: "Job Description Here",
  });

  return (
    <div className="w-full bg-white flex flex-col items-center py-10">
      <div className="w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Experiences</h2>
          <button className="px-4 py-1 text-white bg-green-800 rounded-md hover:bg-green-700">
            Save
          </button>
        </div>

        <div className="flex items-start space-x-3">
          <UserCircle className="text-gray-600 " size={24} />
          <div className="space-y-2 w-full">
            {Object.values(experience).map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 px-4 py-2 rounded-md text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
