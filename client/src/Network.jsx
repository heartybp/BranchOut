import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BrandName from "./assets/brand-name.svg";
import TreeImage from "./assets/100ConnectionsTree.png";
import MentorImage from "./assets/mentor.png";
import Avatar2 from "./assets/avatar2.png";
import Avatar3 from "./assets/avatar3.png";
import Avatar4 from "./assets/avatar4.png";
import Avatar5 from "./assets/avatar5.png";
import Avatar6 from "./assets/avatar6.png";
import Avatar7 from "./assets/avatar7.png";
import Avatar9 from "./assets/avatar9.png";
import ConnectionImage from "./assets/connection-photo.png";
import Header from "./components/Header.jsx";
import { Bell, FileText, CalendarCheck, Search } from "lucide-react";

const BranchOut = () => {
  const [currentPage, setCurrentPage] = useState("home"); // "home" or "connections"

  // Updated data for mentors with different names and positions
  const suggestedMentors = [
    {
      id: 1,
      name: "Emma Chen",
      position: "UX/UI @ UCI",
      connections: "95+ mutual connections",
      avatar: Avatar2,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CS Professor @ UCI",
      connections: "72+ mutual connections",
      avatar: Avatar4,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Product @ Google",
      connections: "63+ mutual connections",
      avatar: Avatar3,
    },
    {
      id: 4,
      name: "David Kim",
      position: "UX Research @ UCI",
      connections: "58+ mutual connections",
      avatar: MentorImage,
    },
  ];

  // Updated data for suggested connections with different names and positions
  const suggestedConnections = [
    {
      id: 1,
      name: "Priya Patel",
      position: "CS major @ UCI",
      connections: "48+ mutual connections",
      avatar: Avatar5,
    },
    {
      id: 2,
      name: "Alex Thompson",
      position: "Business Admin @ UCI",
      connections: "36+ mutual connections",
      avatar: Avatar6,
    },
    {
      id: 3,
      name: "Maria Garcia",
      position: "Data Science @ UCI",
      connections: "29+ mutual connections",
      avatar: ConnectionImage,
    },
    {
      id: 4,
      name: "James Wilson",
      position: "EECS @ UCI",
      connections: "45+ mutual connections",
      avatar: Avatar7,
    },
  ];

  // Updated connections data for the connections page with different names and interests
  const connections = [
    {
      id: 1,
      name: "Olivia Martinez",
      position: "Bio major first year student",
      school: "Undergrad",
      looking: "Mentor in school resources & Finding Research",
      avatar: Avatar2,
    },
    {
      id: 2,
      name: "Ethan Williams",
      position: "CS major sophomore",
      school: "Undergrad",
      looking: "Internship opportunities & Algorithm practice",
      avatar: Avatar4,
    },
    {
      id: 3,
      name: "Sophia Lee",
      position: "Psychology major junior",
      school: "Undergrad",
      looking: "Research opportunities & Graduate school advice",
      avatar: Avatar3,
    },
    {
      id: 4,
      name: "Michelle Brown",
      position: "Engineering major senior",
      school: "Undergrad",
      looking: "Industry connections & Job referrals",
      avatar: Avatar5,
    },
    {
      id: 5,
      name: "Ava Johnson",
      position: "Business major sophomore",
      school: "Undergrad",
      looking: "Networking events & Case competition teams",
      avatar: Avatar6,
    },
    {
      id: 6,
      name: "Liam Davis",
      position: "Art major first year student",
      school: "Undergrad",
      looking: "Portfolio review & Exhibition opportunities",
      avatar: Avatar7,
    },
  ];

  const currentMentor = { name: "Aaron Smith", avatar: Avatar9 };

  // Home page content
  const HomePage = () => (
    <div className="grid grid-cols-5 gap-6">
      {/* Left Column - My Network */}
      <div className="bg-white rounded-lg shadow p-4 col-span-2">
        <h2 className="font-medium mb-4">My network:</h2>

        {/* Network Stats */}
        <div className="bg-gray-50 border rounded-lg mb-4">
          <div className="flex flex-col items-center py-4">
            <div className="relative mb-2">
              <img
                src={TreeImage}
                alt="Tree with connections"
                className="w-44 h-auto mx-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-sm text-gray-600">connections!</p>
            </div>
          </div>
        </div>

        {/* View Connections Button */}
        <div className="mb-4">
          <button
            className="w-full border rounded-lg py-2 px-4 flex items-center justify-center space-x-2 bg-gray-50 hover:bg-gray-100"
            onClick={() => setCurrentPage("connections")}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm">View connections</span>
          </button>
        </div>

        {/* Current Mentor */}
        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="font-medium mb-3 text-sm text-center">
            Current Mentor
          </h3>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
              <img
                src={currentMentor.avatar}
                alt="Mentor"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium text-sm">{currentMentor.name}</span>
          </div>
        </div>
      </div>

      {/* Right Column - Suggestions */}
      <div className="bg-white rounded-lg shadow p-4 col-span-3">
        <h2 className="font-medium mb-4">Suggested mentors:</h2>
        <div className="grid grid-cols-4 gap-4 mb-6">
          {suggestedMentors.map((mentor) => (
            <div key={mentor.id} className="border rounded-lg p-3 bg-gray-50">
              <div className="flex flex-col items-center mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <img
                    src={mentor.avatar}
                    alt="Mentor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm">{mentor.name}</p>
                  <p className="text-xs text-gray-600">{mentor.position}</p>
                  <p className="text-xs text-gray-600">{mentor.connections}</p>
                </div>
              </div>
              <button className="w-full bg-green-800 text-white rounded-md py-1 px-2 text-xs flex items-center justify-center">
                <svg
                  className="w-3 h-3 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Connect</span>
              </button>
            </div>
          ))}
        </div>

        {/* Suggested connections in Irvine, CA */}
        <h2 className="font-medium mb-4">
          Suggested connections in Irvine, CA
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {suggestedConnections.map((connection) => (
            <div
              key={connection.id}
              className="border rounded-lg p-3 bg-gray-50"
            >
              <div className="flex flex-col items-center mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <img
                    src={connection.avatar}
                    alt="Connection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm">{connection.name}</p>
                  <p className="text-xs text-gray-600">{connection.position}</p>
                  <p className="text-xs text-gray-600">
                    {connection.connections}
                  </p>
                </div>
              </div>
              <button className="w-full bg-green-800 text-white rounded-md py-1 px-2 text-xs flex items-center justify-center">
                <svg
                  className="w-3 h-3 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Connect</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Connections page content
  const ConnectionsPage = () => {
    const [connectionSearchTerm, setConnectionSearchTerm] = useState("");

    const handleConnectionSearch = (e) => {
      setConnectionSearchTerm(e.target.value);
    };

    return (
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <button
              className="p-2 border rounded-md bg-white hover:bg-gray-100"
              onClick={() => setCurrentPage("home")}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h2 className="font-medium text-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              427 connections
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2 text-sm">Sort by:</span>
              <button className="border rounded-md py-1 px-3 bg-white flex items-center">
                <span className="text-sm mr-2">Recently Added</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                className="pl-8 pr-4 py-1 border rounded-md w-48 bg-white"
                placeholder="Search by name"
                value={connectionSearchTerm}
                onChange={handleConnectionSearch}
              />
              <svg
                className="w-4 h-4 absolute left-2 top-2 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Connection List */}
        <div className="space-y-4">
          {connections.map((connection) => (
            <div
              key={connection.id}
              className="border rounded-lg p-4 flex items-center justify-between bg-gray-50"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={connection.avatar}
                    alt="Connection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium text-md">{connection.name}</h3>
                    <span className="text-xs text-gray-500 mx-2">|</span>
                    <span className="text-xs text-gray-500">
                      {connection.school}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    I am a {connection.position}. I want to know more about the
                    school
                  </p>
                  <p className="text-xs text-gray-600">
                    I am looking for {connection.looking}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="border rounded-md py-1 px-3 bg-white text-xs">
                  <span>Message</span>
                </button>
                <button className="bg-green-800 text-white rounded-md py-1 px-3 text-xs">
                  <span>Connect</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen">
      <Navbar />
      {/* Main Content */}
      <div className="flex-1 bg-slate-50 flex flex-col">
        <Header />
        <div className="p-4 flex-1">
          {/* Conditional rendering based on current page */}
          {currentPage === "home" ? <HomePage /> : <ConnectionsPage />}
        </div>
      </div>
    </div>
  );
};

export default BranchOut;
