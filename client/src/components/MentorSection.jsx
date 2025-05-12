import React from "react";
import Avatar9 from "../assets/avatar9.png";
import Avatar3 from "../assets/avatar3.png";
import { Sprout } from "lucide-react";

const MentorCard = ({ name, image, role }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-2"
      />
      <p className="text-sm font-medium">{name}</p>
      {role && <p className="text-xs text-gray-500">{role}</p>}
    </div>
  );
};

// mentors data
const mentors = [
  {
    name: "Annie",
    image: Avatar3,
    role: null,
  },
  {
    name: "Aaron",
    image: Avatar9,
    role: null,
  },
];

const MentorSection = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center">
      <div className="flex justify-center mb-2">
        <Sprout color="#3E5742" strokeWidth={2} size={50} />
      </div>
      <h2 className="text-2xl font-bold text-center">Mentors</h2>

      <div className="flex flex-row justify-center w-3/4 gap-10 p-10 border-t border-gray-300 my-4">
        {mentors.map((mentor, index) => (
          <MentorCard
            key={index}
            name={mentor.name}
            image={mentor.image}
            role={mentor.role}
          />
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
