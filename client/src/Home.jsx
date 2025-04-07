import React from "react";
import Navbar from "./components/Navbar.jsx";
import Post from "./components/Post.jsx";
import Tree from "./assets/tree.png";
import ScrollEvents from "./components/ScrollEvents.jsx";

const Home = () => {
  return (
    <div className="flex max-h-screen">
      <Navbar />

      <div className="bg-white justify-center w-[950px] flex-col">
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
        <ScrollEvents ScrollEventsTitle="Upcoming Mentor Matchings" />

        <div className="flex justify-center">
          <button className="p-2 bg-brandGreen rounded-lg">See more</button>
        </div>

        

        {/* this week */}
        <div>
          <p>hi</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
