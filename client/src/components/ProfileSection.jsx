import React from "react";
import { Leaf } from "lucide-react";
import { useState } from "react";
import { Users, Pencil } from "lucide-react";
import Tree from "../assets/tree.svg";

// ---------- Use LinkedIn as reference --------- //

/*
PROFILE (Niva)
 [x] name 
 [x] pic/avatar (editable)
 [x] follow/message button
 [x] follower / connections
*/

/*
BIO SECTION (Einar)
- description (editable)
*/

/*
ABOUT SECTION (Niva)
 [x] summary
 [x] Social media / Contacts
*/

/*
WORK / PROJECT EXPERIENCE (Niva)
- LinkedIn reference
- work/project
*/

/*
EDUCATION (Einar)
- Institution
- Degree
- Dates
*/

// displayed in experiences section

const ProfileSection = ({ user }) => {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      {/* white icon section before banner */}
      <div className="flex items-center justify-end space-x-6 w-full py-4 px-4 bg-white">
        <Users className="w-8 h-8" />
        <Pencil className="w-7 h-7" />
      </div>

      {/* Profile Banner */}
      <div className="w-full h-[400px] bg-brandGreen relative">
        <img
          src={user.avatar}
          className="w-60 h-60 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 bottom-[-4rem] object-cover"
        />
        <div className="w-[80px] h-[80px] flex flex-col justify-center items-center absolute right-[450px] translate-x-16 bottom-[-4rem] bg-brandGreen p-0 rounded-full border-4 border-white">
          <Leaf color="white" strokeWidth={3} size={40} />
        </div>
      </div>

      {/* User Info Section */}
      <div className="mt-20 text-center">
        <h1 className="text-gray-600">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-gray-600">{user.school}</p>
        <div className="mt-3 flex flex-coljustify-center space-x-2">
          <button className="bg-brandGreen text-white px-4 py-1 rounded">
            Connect
          </button>
          <button className="border border-brandGreen text-brandGreen px-4 py-1 rounded">
            Message
          </button>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="mt-6 border-b w-full pl-10">
        <button className="px-4 pb-2 border-b-2 border-black font-medium">
          Profile
        </button>
        <button className="px-4 pb-2 text-gray-500">Posts</button>
      </div>

      {/* User Profile Tree */}
      <div className="mt-6 p-4 w-[450px]">
        <img src={Tree} className="mx-auto mt-2 mb-2" />
      </div>
    </div>
  );
};

export default ProfileSection;
