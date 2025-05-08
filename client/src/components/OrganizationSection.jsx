import React, { useState } from "react";
import { UserCircle } from "lucide-react";

const OrganizationSection = () => {
  const [orgs] = useState(["Hiking Club @UCI", "AI Club @UCI"]);

  return (
    <div className="w-full bg-white flex flex-col items-center py-10">
      <div className="w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Organizations</h2>
          <button className="px-4 py-1 text-white bg-green-800 rounded-md hover:bg-green-700">
            Save
          </button>
        </div>

        <div className="space-y-2">
          {orgs.map((org, index) => (
            <div key={index} className="flex items-center space-x-3">
              <UserCircle className="text-gray-600" size={24} />
              <div className="bg-gray-200 px-4 py-2 rounded-md w-full text-sm">
                {org}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationSection;
