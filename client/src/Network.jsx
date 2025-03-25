// import React from 'react'
import Navbar from "./components/Navbar";
import React, { useState } from "react";

const Network = () => {
  const [activeTab, setActiveTab] = useState("students");
  const [searchTerm, setSearchTerm] = useState("");
  const [connectionSearchTerm, setConnectionSearchTerm] = useState("");

  const connections = [
    "Connection 1",
    "Connection 2",
    "Connection 3",
    "Connection 4",
    "Connection 5",
    "Connection 6",
    "Connection 7",
    "Connection 8",
    "Connection 9",
    // Add more connections here
  ];

  const students = [
    "Student 1",
    "Student 2",
    "Student 3",
    // Add more students here
  ];

  const mentors = [
    "Mentor 1",
    "Mentor 2",
    "Mentor 3",
    // Add more mentors here
  ];

  const filteredConnections = connections.filter((connection) =>
    connection.toLowerCase().includes(connectionSearchTerm.toLowerCase())
  );

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMentors = mentors.filter((mentor) =>
    mentor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Navbar />

      <div className="w-full container mx-auto p-4 text-xl min-h-screen flex flex-col">
        <div className="grid grid-cols-3 gap-4 flex-grow">
          <div className="col-span-2 pl-4 flex-col">
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setActiveTab("students")}
                className={`px-4 py-2 rounded ${
                  activeTab === "students"
                    ? "border-b-4 border-green-900 text-green-900 text-xl font-bold"
                    : "border-slate-400 text-slate-400"
                }`}
              >
                Students
              </button>
              <button
                onClick={() => setActiveTab("mentors")}
                className={`px-4 py-2 rounded ${
                  activeTab === "mentors"
                    ? "border-b-4 border-green-900 text-green-900 text-xl font-bold"
                    : "border-slate-400 text-slate-400"
                }`}
              >
                Mentors
              </button>
            </div>
            <div className="border-2 p-8 rounded-lg bg-gray-50 flex-grow">
              <h2 className="text-xl font-medium mb-4">
                Search for {activeTab}
              </h2>
              <input
                type="text"
                placeholder={`Search ${activeTab}`}
                className="w-full mb-4 p-2 border rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {activeTab === "students" && (
                <div>
                  <div className="space-y-4">
                    {filteredStudents.map((student, index) => (
                      <div
                        key={index}
                        className="flex flex-col border rounded bg-white py-4"
                      >
                        <div className="flex flex-row px-5">
                          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                          <div className="flex-1">
                            <p className="text-lg font-medium">{student}</p>
                            <p className="text-sm text-gray-500">
                              Current Position / Headline
                            </p>
                          </div>
                        </div>

                        <p className="px-5 my-3 text-sm text-gray-600">
                          Looking for career guidance
                        </p>

                        <div className="px-4">
                          <ul className="flex gap-2">
                            <li className="bg-green-100 w-fit rounded-full text-xs py-1 px-3 font-semibold text-green-800">
                              Machine Learning
                            </li>
                            <li className="bg-green-100 w-fit rounded-full text-xs py-1 px-3 font-semibold text-green-800">
                              UX / UI Design
                            </li>
                          </ul>
                        </div>

                        {/* horizontal line */}
                        <div className="flex-grow h-px bg-gray-200 my-4"></div>

                        <div className="flex space-x-2 px-4">
                          <button className="px-3 py-2 bg-green-600 text-white rounded text-sm">
                            Connect
                          </button>
                          <button className="px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm">
                            View Profile
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "mentors" && (
                <div>
                  <div className="space-y-4">
                    {filteredMentors.map((mentor, index) => (
                      <div
                        key={index}
                        className="flex flex-col border rounded bg-white py-4"
                      >
                        <div className="flex flex-row px-5">
                          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                          <div className="flex-1">
                            <p className="text-lg font-medium">{mentor}</p>
                            <p className="text-sm text-gray-500">
                              Current Position / Headline
                            </p>
                          </div>
                        </div>

                        <p className="px-5 my-3 text-sm text-gray-600">
                          10+ years of experience in field
                        </p>

                        <div className="px-4">
                          <ul className="flex gap-2">
                            <li className="bg-sky-100 w-fit rounded-full text-xs py-1 px-3 font-semibold text-sky-800">
                              Product Design
                            </li>
                            <li className="bg-sky-100 w-fit rounded-full text-xs py-1 px-3 font-semibold text-sky-800">
                              Strategy
                            </li>
                          </ul>
                        </div>

                        {/* horizontal line */}
                        <div className="flex-grow h-px bg-gray-200 my-4"></div>

                        <div className="flex space-x-2 px-4">
                          <button className="px-3 py-2 bg-sky-600 text-white rounded text-sm">
                            Request
                          </button>
                          <button className="px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm">
                            View Profile
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-1 border-l pl-4 flex flex-col">
            <h2 className="text-2xl font-semibold mt-2 mb-4">Connections</h2>
            <input
              type="text"
              placeholder="Search connections"
              className="w-full mb-4 p-2 border rounded"
              value={connectionSearchTerm}
              onChange={(e) => setConnectionSearchTerm(e.target.value)}
            />
            <ul className="overflow-y-auto h-3/4 space-y-4">
              {filteredConnections.sort().map((connection, index) => (
                <li
                  key={index}
                  className="flex items-center bg-white border rounded p-4"
                >
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <p className="text-lg font-medium">{connection}</p>
                    <p className="text-sm text-gray-500">
                      Current Position / Headline
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button className="px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm">
                      View Profile
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
