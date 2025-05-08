import React, { useState } from "react";
import brandName from "../assets/brand-name.png";
import notifIcon from "../assets/notif_icon.png";
import windowCheck from "../assets/window_check.png";
import paperStar from "../assets/paper_star.png";
import unclickedBell from "../assets/unclicked_bell.png";
import janeDoe from "../assets/jane_doe.png";
import jamesDoe from "../assets/james_doe.png";
import mortyDoe from "../assets/morty_doe.png";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAIResumeFeedback, setShowAIResumeFeedback] = useState(false); // State to toggle AI Resume Feedback

  const notifications = [
    {
      id: 1,
      name: "Jane Doe",
      message: "made a post.",
      profilePhoto: janeDoe,
    },
    {
      id: 2,
      name: "James Doe",
      message: "wants to connect.",
      profilePhoto: jamesDoe,
      action: "connect",
    },
    {
      id: 3,
      name: "Morty Doe",
      message: "made a mentee request.",
      profilePhoto: mortyDoe,
      status: "accepted",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="pl-12 bg-white mt-10 mb-20 w-full flex justify-between items-center">
        {/* Brand Name */}
        <img src={brandName} alt="Brand Name" width={160} />

        {/* Icons and Search Bar Section */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
                />
              </svg>
            </button>
          </div>

          {/* Window Check Icon */}
          <button>
            <img src={windowCheck} alt="Window Check" className="h-10" />
          </button>

          {/* Paper Star Icon */}
          <button onClick={() => setShowAIResumeFeedback(!showAIResumeFeedback)}>
            <img src={paperStar} alt="AI Resume Feedback" className="h-8" />
          </button>

          {/* Notifications Icon */}
          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)}>
              <img
                src={showNotifications ? notifIcon : unclickedBell}
                alt="Notifications"
                className="h-10"
              />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {notifications.length}
              </span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-[40rem] bg-white shadow-lg rounded-lg border border-gray-300 z-50">
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4">Notifications</h3>
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-center gap-4 mb-4 last:mb-0"
                    >
                      <img
                        src={notification.profilePhoto}
                        alt={notification.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-lg">
                          <span className="font-bold">{notification.name}</span>{" "}
                          {notification.message}
                        </p>
                      </div>
                      {notification.action === "connect" && (
                        <div className="flex gap-2">
                          <button className="bg-green-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-800">
                            Accept
                          </button>
                          <button className="bg-gray-300 text-sm px-4 py-2 rounded-lg hover:bg-gray-400">
                            Decline
                          </button>
                        </div>
                      )}
                      {notification.status === "accepted" && (
                        <button className="bg-green-700 text-white text-sm px-4 py-2 rounded-lg cursor-default">
                          Accepted
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Resume Feedback Section */}
      {showAIResumeFeedback && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-10">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-6">
            Choose the resume you would like to be reviewed:
          </h1>

          {/* Containers for Current Resume and Upload */}
          <div className="flex gap-10">
            {/* Current Resume Container */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
              <h2 className="text-lg font-semibold mb-4">Current Resume</h2>
              <p className="text-gray-500">No file uploaded yet.</p>
            </div>

            {/* Upload a File Container */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
              <h2 className="text-lg font-semibold mb-4">Upload a File</h2>
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-700 file:text-white hover:file:bg-green-800"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={() => setShowAIResumeFeedback(false)} // Close AI Resume Feedback
            className="mt-8 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
};

export default Header;