// import React from 'react'
import Navbar from './components/Navbar';
import React, { useState } from 'react';

const Network = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [searchTerm, setSearchTerm] = useState('');
  const [connectionSearchTerm, setConnectionSearchTerm] = useState('');

  const connections = [
    'Connection 1',
    'Connection 2',
    'Connection 3',
    'Connection 4',
    'Connection 5',
    'Connection 6',
    'Connection 7',
    'Connection 8',
    'Connection 9',
    // Add more connections here
  ];

  const students = [
    'Student 1',
    'Student 2',
    'Student 3',
    // Add more students here
  ];

  const mentors = [
    'Mentor 1',
    'Mentor 2',
    'Mentor 3',
    // Add more mentors here
  ];

  const filteredConnections = connections.filter(connection =>
    connection.toLowerCase().includes(connectionSearchTerm.toLowerCase())
  );

  const filteredStudents = students.filter(student =>
    student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMentors = mentors.filter(mentor =>
    mentor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 text-xl min-h-screen flex flex-col">
        <div className="grid grid-cols-3 gap-4 flex-grow">
          <div className="col-span-2 pl-4 flex-col">
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setActiveTab('students')}
                className={`px-4 py-2 rounded ${activeTab === 'students' ? 'border-b-4 border-green-900 text-green-900 text-xl font-bold' : 'border-slate-400 text-slate-400'}`}
              >
                Students
              </button>
              <button
                onClick={() => setActiveTab('mentors')}
                className={`px-4 py-2 rounded ${activeTab === 'mentors' ? 'border-b-4 border-green-900 text-green-900 text-xl font-bold' : 'border-slate-400 text-slate-400'}`}
              >
                Mentors
              </button>
            </div>
            <div className="border-2 p-8 rounded-lg bg-gray-50 flex-grow">
              <input
                type="text"
                placeholder={`Search ${activeTab}`}
                className="w-full mb-4 p-2 border rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {activeTab === 'students' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Search for Students</h2>
                  <div className="space-y-4">
                    {filteredStudents.map((student, index) => (
                      <div key={index} className="flex items-center border rounded p-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                        <div className="flex-1">
                          <p className="text-xl font-bold">{student}</p>
                          <button className="ml-2 px-2 py-1 bg-green-800 text-white rounded text-lg">Connect</button>
                          <button className="ml-2 px-2 py-1 bg-gray-200 rounded text-lg">View Profile</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'mentors' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Search for Mentors</h2>
                  <div className="space-y-4">
                    {filteredMentors.map((mentor, index) => (
                      <div key={index} className="flex items-center border rounded p-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                        <div className="flex-1">
                          <p className="text-xl font-bold">{mentor}</p>
                          <p className="text-sm text-gray-600">Current Position / Headline</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="ml-2 px-2 py-1 bg-green-800 text-white rounded text-lg">Connect</button>
                          <button className="ml-2 px-2 py-1 bg-gray-200 rounded text-lg">View Profile</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-1 border-l pl-4 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Connections</h2>
            <input
              type="text"
              placeholder="Search connections"
              className="w-full mb-4 p-2 border rounded"
              value={connectionSearchTerm}
              onChange={(e) => setConnectionSearchTerm(e.target.value)}
            />
            <ul className="overflow-y-auto h-3/4 space-y-4">
              {filteredConnections.sort().map((connection, index) => (
                <li key={index} className="flex items-center border rounded p-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <p className="text-xl font-bold">{connection}</p>
                    <p className="text-sm text-gray-600">Current Position / Headline</p>
                  </div>
                  <div className="ml-auto">
                    <button className="px-2 py-1 bg-gray-200 rounded">View Profile</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Network;