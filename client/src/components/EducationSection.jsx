import React, { useState } from "react";
import { UserCircle } from "lucide-react";

const EducationSection = () => {
  const [education] = useState({
    school: "University of California",
    degree: "Bachelor of Science in Computer Science",
    duration: "2019 – 2024",
    gpa: "GPA: 3.8",
    activities: "Computer Science Club, Robotics Team",
  });

  return (
    <div className="w-full bg-white flex flex-col items-center py-10">
      <div className="w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Education</h2>
          <button className="px-4 py-1 text-white bg-green-800 rounded-md hover:bg-green-700">
            Save
          </button>
        </div>

        <div className="flex items-start space-x-3">
          <UserCircle className="text-gray-600" size={24} />
          <div className="space-y-2 w-full">
            {Object.values(education).map((item, index) => (
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

export default EducationSection;
