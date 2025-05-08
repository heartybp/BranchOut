import React from "react";
import brandName from "../assets/brand-name.png";

const Header = () => {
  return (
    // <div className="pl-12 bg-white mt-10 mb-20 w-full">
    //   <img src={brandName} alt="" width={160} />
    // </div>
    <div className="pl-12 bg-white mt-10 mb-20 w-full flex justify-between items-center">
      {/* Brand Name */}
      <img src={brandName} alt="Brand Name" width={160} />

      {/* Search Bar */}
      <div className="relative mr-12">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg py-2 px-4 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-2 top-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
