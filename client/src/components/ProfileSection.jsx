import React from "react";
import { Leaf } from "lucide-react";
import { useState } from "react";

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


const ProfileSection = ({user}) => {
  return (
      <div className="flex flex-col items-center bg-white w-full mx-auto p-10">

        {/* Profile Banner */}
        <div className="w-full h-[400px] bg-brandGreen relative" >
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
          <h1 className = "text-gray-600">{user.firstName} {user.lastName}</h1>
          <p className="text-gray-600">{user.school}</p>
          <div className="mt-3 flex flex-coljustify-center space-x-2">
            <button className="bg-brandGreen text-white px-4 py-1 rounded">Connect</button>
            <button className="border border-brandGreen text-brandGreen px-4 py-1 rounded">Message</button>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="mt-6 border-b w-full text-center">
          <button className="px-4 pb-2 border-b-2 border-black font-medium">Profile</button>
          <button className="px-4 pb-2 text-gray-500">Posts</button>
        </div>

        {/* User Profile Tree */}
        <div className="mt-6 bg-white rounded-lg shadow p-4 w-80 text-center">
          <h2 className="text-left font-semibold text-sm">{user.firstName}'s Tree:</h2>
          <img 
            src={user.treeImage}
            className="mx-auto mt-2 mb-2"
          />
          <p className="text-sm text-green-800 font-semibold">Growing since {new Date(user.joinDate).toLocaleDateString()}</p>
        </div>
      </div>
  );
};

export default ProfileSection;
