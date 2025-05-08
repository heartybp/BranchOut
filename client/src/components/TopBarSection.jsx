import React from "react";
import { Users, Pencil } from "lucide-react";


const TopBarSection = () => {
  return (
    <div className="w-3/4 flex justify-end p-2 bg-white fixed top-0 left- z-10">
        {/* Top Bar */}
        <div className="flex items-center space-x-10 w-fullp-4 px-10">
            <Users className="w-7 h-7"/>
            <Pencil className="w-7 h-7"/>
        </div>
    </div>
  );
};

export default TopBarSection;
