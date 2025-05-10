import brandName from "../assets/brand-name.svg";
import { Bell, FileText, Star, CalendarCheck, Search } from "lucide-react";

import { useState, useEffect } from "react";
import notifIcon from "../assets/notif_icon.png";
import windowCheck from "../assets/window_check.png";
import paperStar from "../assets/paper_star.png";
import unclickedBell from "../assets/unclicked_bell.png";
import janeDoe from "../assets/jane_doe.png";
import jamesDoe from "../assets/james_doe.png";
import mortyDoe from "../assets/morty_doe.png";
import cloudUpload from "../assets/cloud_upload.png";
import myResume from "../assets/my_resume.png";
import highlightedResume from "../assets/highlighted_resume.png";
import resultCircle from "../assets/result_circle.png"; // Placeholder for progress circle image

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("home"); // State to manage screens
  const [progress, setProgress] = useState(0); // State for progress percentage

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

  // Increment progress dynamically when on the "progress" screen
  useEffect(() => {
    if (currentScreen === "progress" && progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => Math.min(prev + 30, 100)); // Increment by 30% every 500ms
      }, 500);
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [currentScreen, progress]);

  return (
    <>
      {/* header*/}
      <div className="flex items-center justify-between px-12 py-6 bg-white w-full border-b">
        <div className="flex-shrink-0">
          <img src={brandName} alt="Brand Name" width={160} />
        </div>

        {/* icons and search bar*/}
        <div className="flex items-center gap-8">
          {/* search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 w-96 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
            />
          </div>

          {/* navigation icons */}
          <div className="flex items-center gap-6">
            <button
              className="focus:outline-none text-gray-700 hover:text-green-700"
              onClick={() => setCurrentScreen("calendar")}
            >
              <CalendarCheck size={24} />
            </button>

            <button
              onClick={() => setCurrentScreen("aiResumeFeedback")}
              className="focus:outline-none text-gray-700 hover:text-green-700"
            >
              <FileText size={24} />
            </button>

            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="focus:outline-none relative text-gray-700 hover:text-green-700"
              >
                <Bell
                  size={24}
                  className={showNotifications ? "text-green-700" : ""}
                />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-[30rem] bg-white shadow-lg rounded-lg border border-gray-200 z-50">
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
                            <span className="font-bold">
                              {notification.name}
                            </span>{" "}
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
                          <span className="bg-green-700 text-white text-sm px-4 py-2 rounded-lg">
                            Accepted
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* AI resume feedback */}
      {currentScreen === "aiResumeFeedback" && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-10">
          <h1 className="text-2xl font-bold mb-6">
            Choose the resume you would like to be reviewed:
          </h1>

          {/* Horizontal Layout for Boxes */}
          <div className="flex gap-10">
            {/* Current Resume Section */}
            <div className="flex flex-col items-center">
              <div className="bg-stone-200 shadow-md rounded-lg p-6 w-80 h-80 flex flex-col items-center justify-center">
                <h2 className="text-lg font-semibold mb-2">My Resume 2025</h2>
                <img
                  src={myResume}
                  alt="Resume Preview"
                  className="w-40 h-40 object-cover mb-2"
                />
                <p className="text-gray-500">Uploaded: Feb 7, 2025</p>
              </div>
              {/* Text Below the Box */}
              <p className="text-center mt-4 text-xl font-semibold">
                Current Resume
              </p>
            </div>

            {/* Upload a File Section */}
            <div className="flex flex-col items-center">
              <div className="bg-stone-200 shadow-md rounded-lg p-6 w-80 h-80 flex flex-col items-center justify-center">
                <img
                  src={cloudUpload}
                  alt="Upload Icon"
                  className="w-40 h-30 mb-2"
                />
              </div>
              {/* Text Below the Box */}
              <p className="text-center mt-4 text-xl font-semibold">
                Upload a File
              </p>
            </div>
          </div>

          <button
            onClick={() => setCurrentScreen("progress")}
            className="mt-8 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
          >
            Continue
          </button>
        </div>
      )}

      {/* Progress Screen */}
      {currentScreen === "progress" && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="w-40 h-40 border-8 border-gray-300 border-t-green-700 rounded-full animate-spin"></div>
          <h1 className="text-xl font-bold mt-6">
            Harvesting insights... {progress}%
          </h1>
          {progress === 100 && (
            <button
              onClick={() => setCurrentScreen("analysis")}
              className="mt-8 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
            >
              View Results
            </button>
          )}
        </div>
      )}

      {/* Analysis Result Screen */}
      {currentScreen === "analysis" && (
        <div className="flex flex-row justify-center items-start min-h-screen bg-gray-100 p-10 gap-10">
          {/* Left Container: Progress + Recommendations */}
          <div className="bg-white shadow-md rounded-lg p-6 w-1/2">
            <h1 className="text-3xl font-bold mb-6 ml-6 mt-6">
              Analysis Result
            </h1>
            <div className="flex items-center justify-center text-2xl font-bold mx-auto">
              {/* 85% */}
              <img
                src={resultCircle}
                alt="Progress Circle"
                className="w-90 h-60 mt-2 rounded-full"
              />
            </div>
            <h1 className="text-xl font-bold mt-10 ml-20 mr-20 mb-20 text-center">
              Your resume is well-structured and highlights relevant experience
              for an entry-level role! Still, I see some room for improvement.
              Here's how to fine-tune it:
            </h1>
            <ul className="mt-6 space-y-4">
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm text-lg">
                1. Remove unnecessary info like SAT score.
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm text-lg">
                2. Use stronger action verbs to communicate.
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm text-lg">
                3. Be specific on how you improved experiences.
              </li>
            </ul>
          </div>

          {/* Right Container: Highlighted Resume */}
          <div className="bg-white shadow-md rounded-lg p-6 w-1/2 flex items-center justify-center">
            <img
              src={highlightedResume}
              alt="Highlighted Resume"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
