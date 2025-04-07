import React from "react";
import Navbar from "./components/Navbar.jsx";
import Post from "./components/Post.jsx";
import Tree from "./assets/tree.png";
import ScrollEvents from "./components/ScrollEvents.jsx";
import SuggestedConnections from "./components/SuggestedConnections.jsx";
import SeeMoreButton from "./components/SeeMoreButton.jsx";
import Header from "./components/Header.jsx";
import Assignments from "./components/Assignments.jsx";


const Home = () => {

  const toCompleteAssignments = [
    { 
      resource: "Read Chapter 5", 
      assignedBy: "John Smith", 
      assignedDate: "04/02", 
      dueIn: "3 days" 
    },
    { 
      resource: "Complete Quiz", 
      assignedBy: "Jane Doe", 
      assignedDate: "04/01", 
      dueIn: "2 days" 
    }
  ];

  const upcomingAssignments = [
    { 
      resource: "Read Chapter 6", 
      assignedBy: "John Smith", 
      assignedDate: "04/08", 
      dueIn: "9 days" 
    },
    { 
      resource: "Written Homework", 
      assignedBy: "Jane Doe", 
      assignedDate: "04/05", 
      dueIn: "6 days" 
    }
  ];

  return (
    <div className="flex max-h-screen">
      <Navbar />

      {/* left side */}
      <div className="bg-white justify-center w-[940px] flex-row">
        <Header />
        {/* tree, checked in, + mentor */}
        <div className="flex bg-blue-200">
          <div>
            <img src={Tree} alt="" width={500} />
          </div>
          
          <div className="flex flex-col ">
            <div className="flex flex-col bg-gray-200 p-16">
              <p>20 days</p>
              <p>checked in</p>
            </div>

            <div className="bg-gray-400 p-16">
              <p>current mentor: josh doe</p>
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
        <div className="flex flex-col bg-gray-100 rounded-md border border-gray-300 w-[390px] m-6"> 
          <h2>This Week:</h2>
          <p className="rounded-3xl w-36 h-48 bg-blue-200">placeholder for progress bar</p>

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
  );
};

export default Home;
