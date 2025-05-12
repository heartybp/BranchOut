import React from "react";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import Avatar4 from "../assets/avatar4.png";
import Avatar5 from "../assets/avatar5.png";
import Avatar6 from "../assets/avatar6.png";
import Avatar7 from "../assets/avatar7.png";
import Avatar9 from "../assets/avatar9.png";

const ConnectionCard = ({ name, image, role }) => {
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

const connections = [
  {
    name: "Annie Park",
    image: Avatar2,
    role: "UX Designer",
  },
  {
    name: "Jacob Rodriguez",
    image: Avatar3,
    role: "Software Engineer",
  },
  {
    name: "Jessica Smith",
    image: Avatar4,
    role: "Product Manager",
  },
  {
    name: "Michael Chen",
    image: Avatar5,
    role: "Data Scientist",
  },
  {
    name: "Sarah Johnson",
    image: Avatar6,
    role: "Marketing Lead",
  },
  {
    name: "Raj Patel",
    image: Avatar7,
    role: "Full Stack Developer",
  },
  {
    name: "Aaron Smith",
    image: Avatar9,
    role: "UI Designer",
  },
];

const ConnectionSection = () => {
  // Show only the first 5 connections to avoid overcrowding
  const displayedConnections = connections.slice(0, 5);

  return (
    <div className="w-full bg-white flex flex-col items-center justify-center py-8">
      <h2 className="text-2xl font-bold text-center">Connections</h2>
      <div className="flex flex-row justify-center w-3/4 gap-10 p-10 border-t border-gray-300 my-4">
        {displayedConnections.map((connection, index) => (
          <ConnectionCard
            key={index}
            name={connection.name}
            image={connection.image}
            role={connection.role}
          />
        ))}
      </div>
      <div className="text-sm text-gray-500 text-right pr-4 pb-12">
        <a href="" className="px-20 mt-40 hover:underline">
          See 150+ Other Connections →
        </a>
      </div>
    </div>
  );
};

export default ConnectionSection;
