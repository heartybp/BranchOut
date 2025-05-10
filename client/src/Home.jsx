import React from "react";
import Navbar from "./components/Navbar.jsx";
import Post from "./components/Post.jsx";
import Tree from "./assets/tree.svg";
import ScrollEvents from "./components/ScrollEvents.jsx";
import SuggestedConnections from "./components/SuggestedConnections.jsx";
import SeeMoreButton from "./components/SeeMoreButton.jsx";
import Header from "./components/Header.jsx";
import Assignments from "./components/Assignments.jsx";
import mentorImage from "./assets/mentor.png";
import WaterDropIcon from "./assets/Water_Drop.png";
import TreeWithTiers from "./assets/tree_with_tiers.png";
// import GrowingSinceText from "./assets/growing_since_text.png";
import TaskBar from "./assets/task_bar.png";

const Home = () => {
  const toCompleteAssignments = [
    {
      resource: "Read Chapter 5",
      assignedBy: "John Smith",
      assignedDate: "04/02",
      dueIn: "3 days",
    },
    {
      resource: "Complete Quiz",
      assignedBy: "Jane Doe",
      assignedDate: "04/01",
      dueIn: "2 days",
    },
  ];

  const upcomingAssignments = [
    {
      resource: "Read Chapter 6",
      assignedBy: "John Smith",
      assignedDate: "04/08",
      dueIn: "9 days",
    },
    {
      resource: "Written Homework",
      assignedBy: "Jane Doe",
      assignedDate: "04/05",
      dueIn: "6 days",
    },
  ];

  return (
    <>
      <div className="flex max-h-screen">
        <Navbar />

        <div className="flex flex-col overflow-y-scroll bg-white">
          <Header />

          <div className="mb-10"></div>

          <div className="flex bg-white mb-10">
            {/* left side */}

            <div className="bg-white justify-center flex-row ">
              {/* tree, checked in, + mentor */}
              <div className="flex justify-center">
                {/* jane's tree */}
                <div className="relative w-[500px] h-[352px] flex-shrink-0">
                  <img
                    src={Tree}
                    alt=""
                    className="absolute w-[490px] h-[335px] pl-5"
                  />
                </div>

                <div className="flex flex-col  w-[330px]">
                  <div className="flex flex-col bg-gray-100 p-8 rounded-lg border border-gray-300 items-center justify-center mb-4 w-80">
                    <div className="flex items-center gap-0.01">
                      {/* Icon */}
                      <img
                        src={WaterDropIcon}
                        alt="Water Drop Icon"
                        className="w-12 h-12"
                      />
                      {/* Number */}
                      <p className="text-4xl font-bold">20</p>
                    </div>
                    <p className="font-bold">days checked in!</p>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg border border-gray-300 flex flex-col items-center w-80">
                    <p className="font-bold">Current Mentor</p>
                    <img
                      src={mentorImage}
                      alt=""
                      width={100}
                      className="my-2"
                    />
                    <p className="font-bold">Josh Doe</p>
                  </div>
                </div>
              </div>

              <ScrollEvents
                ScrollEventsTitle="Ongoing Mentor Matchings:"
                status="Live Now"
              />
              <SeeMoreButton />

              <ScrollEvents
                ScrollEventsTitle="Upcoming Mentor Matchings:"
                status="Sat, Mar 8"
              />
              <SeeMoreButton />

              <SuggestedConnections />
              <SeeMoreButton />
            </div>

            {/* right side */}
            <div className="bg-white flex justify-center">
              <div className="flex flex-col bg-gray-100 rounded-md border border-gray-300 w-[390px] mx-6">
                <div className="flex flex-col my-2">
                  <h2 className="pl-6 pt-4 font-semibold mb-2 text-xl">
                    This Week:
                  </h2>
                </div>
                <div className="flex justify-center items-center ">
                  <img src={TaskBar} alt="" className="w-72 h-72" />
                </div>

                {/* component */}
                <Assignments
                  title="Complete:"
                  assignments={toCompleteAssignments}
                />

                <Assignments
                  title="Upcoming:"
                  assignments={upcomingAssignments}
                />

                <SeeMoreButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
