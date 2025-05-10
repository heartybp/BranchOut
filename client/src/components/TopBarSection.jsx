import React from "react";
import { Users, Pencil } from "lucide-react";

const TopBarSection = () => {
  return (
    <div className="w-full h-[60px] flex justify-end  bg-red-200 ">
      {/* Top Bar */}
      <div className="flex items-center space-x-10 w-full p-4 px-10">
        <Users className="w-7 h-7" />
        <Pencil className="w-7 h-7" />
      </div>
    </div>
  );
};

export default TopBarSection;
