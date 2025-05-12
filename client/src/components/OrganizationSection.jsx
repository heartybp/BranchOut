import React, { useState } from "react";
import { UserCircle } from "lucide-react";

const OrganizationSection = () => {
  const [orgs, setOrgs] = useState(["Fusion @UCI"]);

  const handleChange = (index, value) => {
    const updated = [...orgs];
    updated[index] = value;
    setOrgs(updated);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center py-10">
      <div className="w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Organizations</h2>
          <button className="px-4 py-1 text-white bg-brandGreen rounded-md hover:bg-green-700">
            Save
          </button>
        </div>

        <div className="space-y-2">
          {orgs.map((org, index) => (
            <div key={index} className="flex items-center space-x-3">
              <UserCircle className="text-gray-600" size={24} />
              <input
                type="text"
                value={org}
                onChange={(e) => handleChange(index, e.target.value)}
                className="bg-gray-200 px-4 py-2 rounded-md w-full text-sm outline-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationSection;
