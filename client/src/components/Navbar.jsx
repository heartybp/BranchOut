import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  House,
  UsersRound,
  MessageCircleQuestion,
  CircleUserRound,
  Archive,
} from "lucide-react";
import treeNav from "../assets/treeNav.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateHome = () => navigate("/home");
  const navigateNetwork = () => navigate("/network");
  const navigateForum = () => navigate("/forum");
  const navigateProfile = () => navigate("/profile");
  const navigateResources = () => navigate("/resources");

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-center text-white min-w-28 w-28 h-screen bg-brandGreen z-20">
      <ul className="flex flex-col space-y-10">
        <img src={treeNav} alt="Tree Logo" className="pl-1 mt-10" width="100" />

        <div
          className={`flex flex-col justify-center items-center space-y-1 cursor-pointer rounded-md p-2 transition-colors duration-200 ${
            isActive("/profile")
              ? "bg-amber-200 bg-opacity-30 text-amber-100"
              : "hover:bg-amber-200 hover:bg-opacity-20"
          }`}
          onClick={navigateProfile}
        >
          <CircleUserRound size={40} />
          <li className="">Profile</li>
        </div>

        <div
          className={`flex flex-col justify-center items-center space-y-1 cursor-pointer rounded-md p-2 transition-colors duration-200 ${
            isActive("/home")
              ? "bg-amber-200 bg-opacity-30 text-amber-100"
              : "hover:bg-amber-200 hover:bg-opacity-20"
          }`}
          onClick={navigateHome}
        >
          <House size={40} />
          <li className="">Home</li>
        </div>

        <div
          className={`flex flex-col justify-center items-center space-y-1 cursor-pointer rounded-md p-2 transition-colors duration-200 ${
            isActive("/network")
              ? "bg-amber-200 bg-opacity-30 text-amber-100"
              : "hover:bg-amber-200 hover:bg-opacity-20"
          }`}
          onClick={navigateNetwork}
        >
          <UsersRound size={40} />
          <li className="">Network</li>
        </div>

        <div
          className={`flex flex-col justify-center items-center space-y-1 cursor-pointer rounded-md p-2 transition-colors duration-200 ${
            isActive("/forum")
              ? "bg-amber-200 bg-opacity-30 text-amber-100"
              : "hover:bg-amber-200 hover:bg-opacity-20"
          }`}
          onClick={navigateForum}
        >
          <MessageCircleQuestion size={40} />
          <li className="">Feed</li>
        </div>

        <div
          className={`flex flex-col justify-center items-center space-y-1 cursor-pointer rounded-md p-2 transition-colors duration-200 ${
            isActive("/resources")
              ? "bg-amber-200 bg-opacity-30 text-amber-100"
              : "hover:bg-amber-200 hover:bg-opacity-20"
          }`}
          onClick={navigateResources}
        >
          <Archive size={40} />
          <li className="">Resources</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
