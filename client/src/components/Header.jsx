import React from "react";
import brandName from "../assets/brand-name.svg";
import { Bell, FileText, Star, CalendarCheck, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-12 py-4 bg-white w-full border-b">
      <div className="flex items-center space-x-2">
        <img src={brandName} width={160} />
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={16}
          />
        </div>

        <div className="flex items-center space-x-4 text-black">
          <CalendarCheck className="cursor-pointer" />
          <FileText className="cursor-pointer" />
          <Bell className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
