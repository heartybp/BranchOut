import React from "react";
import Navbar from "./components/Navbar.jsx";
import Post from "./components/Post.jsx";
import Tree from "./assets/tree.png";
import ScrollEvents from "./components/ScrollEvents.jsx";
import SuggestedConnections from "./components/SuggestedConnections.jsx";
import SeeMoreButton from "./components/SeeMoreButton.jsx";
import Header from "./components/Header.jsx";
import Assignments from "./components/Assignments.jsx";
import mentorImage from "./assets/mentor.png";
import WaterDropIcon from "./assets/Water_Drop.png";
import TreeWithTiers from "./assets/tree_with_tiers.png";
import GrowingSinceText from "./assets/growing_since_text.png";


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

          <div className="flex bg-white mb-10">
            {/* left side */}

            <div className="bg-white justify-center w-[940px] flex-row ">
              {/* tree, checked in, + mentor */}
              <div className="flex justify-center gap-x-5 bg-blue-200">
                {/* jane's tree */}
                <div className="relative w-[500px]">
                  <img src={Tree} alt="" className="absolute w-[500px] h-[338px]"/>
                  <img src={TreeWithTiers} alt="" className="absolute w-[250px] h-[250px]" style={{top:"45%", left: "50%", transform: "translate(-50%, -50%)"}}/>
                  <img src={GrowingSinceText} alt="" className="absolute w-[175px] h-[15px]" style={{bottom: "3%", right: "3%"}}/>
                </div>

                <div className="flex flex-col justify-between w-72">
                  <div className="flex flex-col bg-gray-100 p-9 rounded-lg border border-gray-300 items-center justify-center">
                    <div className="flex items-center gap-0.01">
                    {/* Icon */}
                    <img src={WaterDropIcon} alt="Water Drop Icon" className="w-12 h-12"/>
                    {/* Number */}
                    <p className="text-4xl font-bold">20</p>
                  </div>
                    <p className="font-semibold">days checked in!</p>
                  </div>

                  <div className="bg-gray-100 p-5 rounded-lg border border-gray-300 flex flex-col items-center">
                    <p className="font-semibold">Current Mentor</p>
                    <img
                      src={mentorImage}
                      alt=""
                      width={100}
                      className="my-2"
                    />
                    <p className="font-semibold">Josh Doe</p>
                  </div>
                </div>
              </div>

              <ScrollEvents ScrollEventsTitle="Ongoing Mentor Matchings" />
              <SeeMoreButton />

              <ScrollEvents ScrollEventsTitle="Upcoming Mentor Matchings" />
              <SeeMoreButton />

              <SuggestedConnections />
              <SeeMoreButton />
            </div>

            {/* right side */}
            <div className="bg-white flex justify-center">
              <div className="flex flex-col bg-gray-100 rounded-md border border-gray-300 w-[390px] mx-6">
                <h2>This Week:</h2>
                <p className="rounded-3xl w-36 h-48 bg-blue-200">
                  placeholder for progress bar
                </p>

                {/* component */}
                <Assignments
                  title="Complete"
                  assignments={toCompleteAssignments}
                />

                <Assignments
                  title="Upcoming"
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
