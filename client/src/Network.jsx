import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BrandName from "./assets/brand-name.png";
import TreeImage from "./assets/100ConnectionsTree.png";
import MentorImage from "./assets/mentor.png";
import ConnectionImage from "./assets/connection-photo.png";

const BranchOut = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // Add state to track which page is displayed
  const [currentPage, setCurrentPage] = useState("home"); // "home" or "connections"

  // Sample data for mentors and connections
  const suggestedMentors = [
    { id: 1, name: "Josh Doe", position: "UX/UX @ UCI", connections: "95+ mutual connections" },
    { id: 2, name: "Josh Doe", position: "UX/UX @ UCI", connections: "95+ mutual connections" },
    { id: 3, name: "Josh Doe", position: "UX/UX @ UCI", connections: "95+ mutual connections" },
    { id: 4, name: "Josh Doe", position: "UX/UX @ UCI", connections: "95+ mutual connections" }
  ];

  const suggestedConnections = [
    { id: 1, name: "Josh Doe", position: "UX/UX @ UCI", connections: "95+ mutual connections" },
    { id: 2, name: "Josh Doe", position: "UX/UX @ UCI", connections: "95+ mutual connections" },
    { id: 3, name: "Josh Doe", position: "UX/UX @ UCI", connections: "95+ mutual connections" },
    { id: 4, name: "Josh Doe", position: "UX/UX @ UCI", connections: "95+ mutual connections" }
  ];

  // Extended connections data for the connections page
  const connections = [
    { id: 1, name: "John Doe", position: "Bio major first year student", school: "Undergrad", looking: "Mentor in school resources & Finding Research" },
    { id: 2, name: "John Doe", position: "Bio major first year student", school: "Undergrad", looking: "Mentor in school resources & Finding Research" },
    { id: 3, name: "John Doe", position: "Bio major first year student", school: "Undergrad", looking: "Mentor in school resources & Finding Research" },
    { id: 4, name: "John Doe", position: "Bio major first year student", school: "Undergrad", looking: "Mentor in school resources & Finding Research" },
    { id: 5, name: "John Doe", position: "Bio major first year student", school: "Undergrad", looking: "Mentor in school resources & Finding Research" },
    { id: 6, name: "John Doe", position: "Bio major first year student", school: "Undergrad", looking: "Mentor in school resources & Finding Research" }
  ];

  // Current mentor
  const currentMentor = { name: "Josh Doe" };

  // Header component reused across pages
  const Header = () => (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <img src={BrandName} alt="Brand Name" className="h-8 mr-2" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            className="pl-8 pr-4 py-2 border rounded-md w-64 bg-white"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="w-5 h-5 absolute left-2 top-2.5 text-gray-500"
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
        <button className="p-2 border rounded-md bg-white">
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
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <button className="p-2 border rounded-md bg-white">
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
      </div>
    </div>
  );

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
              <img src={TreeImage} alt="Tree with connections" className="w-44 h-auto mx-auto" />
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
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
          <h3 className="font-medium mb-3 text-sm text-center">Current Mentor</h3>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
              <img src={MentorImage} alt="Mentor" className="w-full h-full object-cover" />
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
                  <img src={MentorImage} alt="Mentor" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm">{mentor.name}</p>
                  <p className="text-xs text-gray-600">{mentor.position}</p>
                  <p className="text-xs text-gray-600">{mentor.connections}</p>
                </div>
              </div>
              <button className="w-full bg-green-800 text-white rounded-md py-1 px-2 text-xs flex items-center justify-center">
                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="white">
                  <path d="M12 5V19M5 12H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Connect</span>
              </button>
            </div>
          ))}
        </div>

        {/* Suggested connections in Irvine, CA */}
        <h2 className="font-medium mb-4">Suggested connections in Irvine, CA</h2>
        <div className="grid grid-cols-4 gap-4">
          {suggestedConnections.map((connection) => (
            <div key={connection.id} className="border rounded-lg p-3 bg-gray-50">
              <div className="flex flex-col items-center mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <img src={ConnectionImage} alt="Connection" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm">{connection.name}</p>
                  <p className="text-xs text-gray-600">{connection.position}</p>
                  <p className="text-xs text-gray-600">{connection.connections}</p>
                </div>
              </div>
              <button className="w-full bg-green-800 text-white rounded-md py-1 px-2 text-xs flex items-center justify-center">
                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="white">
                  <path d="M12 5V19M5 12H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
  const ConnectionsPage = () => (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <button
            className="p-2 border rounded-md bg-white hover:bg-gray-100"
            onClick={() => setCurrentPage("home")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h2 className="font-medium text-lg flex items-center">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
          <div key={connection.id} className="border rounded-lg p-4 flex items-center justify-between bg-gray-50">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src={ConnectionImage} alt="Connection" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="font-medium text-md">{connection.name}</h3>
                  <span className="text-xs text-gray-500 mx-2">|</span>
                  <span className="text-xs text-gray-500">{connection.school}</span>
                </div>
                <p className="text-xs text-gray-600">I am a {connection.position}. I want to know more about the school</p>
                <p className="text-xs text-gray-600">I am looking for {connection.looking}</p>
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

  return (
    <div className="flex min-h-screen">
      <Navbar />
      {/* Main Content */}
      <div className="flex-1 p-4 bg-slate-50">
        <Header />

        {/* Conditional rendering based on current page */}
        {currentPage === "home" ? <HomePage /> : <ConnectionsPage />}
      </div>
    </div>
  );
};

export default BranchOut;