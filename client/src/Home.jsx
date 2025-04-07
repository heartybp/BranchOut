import React from "react";
import Navbar from "./components/Navbar.jsx";
import Post from "./components/Post.jsx";
import Tree from "./assets/tree.png";

const Home = () => {
  return (
    <div className="flex max-h-screen">
      <Navbar />

      <div className="bg-white justify-center w-full">
        {/* tree, checked in, + mentor */}
        <div className="flex">
          <img src={Tree} alt="" width={400} />

          <div className="flex-col ">

            <div className="flex-col bg-gray-200 p-20">
              <p>20 days</p>
              <p>checked in</p>
            </div>

            <div className="bg-gray-400 p-20">
              <p>current mentor: josh doe</p>
            </div>
          </div>
        </div>

        {/* this week */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
