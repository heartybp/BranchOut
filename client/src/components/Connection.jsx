import React from "react";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import Avatar4 from "../assets/avatar4.png";
import Avatar5 from "../assets/avatar5.png";
import Avatar6 from "../assets/avatar6.png";
import Avatar7 from "../assets/avatar7.png";
import chatIcon from "../assets/chat_icon.png";
import linkIcon from "../assets/link_icon.png";

export const studentProfiles = [
  {
    id: 1,
    name: "Sophia Chen",
    year: "1st",
    status: "Sophomore",
    major: "Computer Science",
    interest: "AI and machine learning research opportunities",
    avatar: Avatar2,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    year: "2nd",
    status: "Junior",
    major: "Biology",
    interest: "lab research positions and internships in healthcare",
    avatar: Avatar3,
  },
  {
    id: 3,
    name: "Aisha Patel",
    year: "1st",
    status: "Freshman",
    major: "Chemistry",
    interest: "study groups and academic resources for STEM courses",
    avatar: Avatar4,
  },
  {
    id: 4,
    name: "Diego Rodriguez",
    year: "3rd",
    status: "Senior",
    major: "Engineering",
    interest: "industry connections and capstone project collaboration",
    avatar: Avatar5,
  },
  {
    id: 5,
    name: "Olivia Kim",
    year: "2nd",
    status: "Junior",
    major: "Psychology",
    interest: "research experience in cognitive psychology labs",
    avatar: Avatar6,
  },
  {
    id: 6,
    name: "Jamal Washington",
    year: "1st",
    status: "Sophomore",
    major: "Business",
    interest: "networking opportunities and internship guidance",
    avatar: Avatar7,
  },
];

const Connection = ({ profile }) => {
  const studentProfile = profile || studentProfiles[0];

  return (
    <div className="flex bg-white rounded-xl p-5 shadow-md items-center w-10/12">
      <div className="mr-4">
        <img
          src={studentProfile.avatar}
          alt={studentProfile.name}
          className="w-[130px] rounded-full object-cover"
        />
      </div>
      <div>
        <div className="flex items-center gap-x-2">
          <h1 className="text-2xl font-semibold mb-1">{studentProfile.name}</h1>
          <h2 className="text-gray-500">
            <i>{studentProfile.year}</i>
          </h2>
          <p className="text-gray-500">•</p>
          <h2 className="text-gray-500">
            <i>{studentProfile.status}</i>
          </h2>
        </div>
        <p>
          I am a {studentProfile.major} major{" "}
          {studentProfile.status.toLowerCase()} student; I want to know more
          about school. I am looking for a mentor in {studentProfile.interest}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <button className="w-36 py-2 bg-gray-100 border border-gray-300 rounded-lg font-bold flex items-center justify-center gap-x-1">
          <img src={chatIcon} alt="Chat Icon" className="w-4 h-4" />
          Message
        </button>
        <button className="w-36 py-2 bg-green-800 border border-gray-300 rounded-lg font-bold text-white flex items-center justify-center gap-x-1">
          <img src={linkIcon} alt="Link Icon" className="w-4 h-4" />
          Connect
        </button>
      </div>
    </div>
  );
};

export default Connection;
