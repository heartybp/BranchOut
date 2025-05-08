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
                <div>
                  <img src={Tree} alt="" width={500} />
                </div>

                <div className="flex flex-col justify-between w-72">
                  <div className="flex flex-col bg-gray-100 p-9 rounded-lg border border-gray-300">
                    <p className="text-3xl font-semibold">20</p>
                    <p className="font-semibold">days checked in</p>
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
