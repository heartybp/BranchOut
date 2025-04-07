import React from "react";
import Navbar from "./components/Navbar.jsx";
import Post from "./components/Post.jsx";
import Tree from "./assets/tree.png";

const Home = () => {
  return (
    <div className="flex max-h-screen">
      <Navbar />

      <div className="bg-white justify-center w-full flex-col">
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
        
        <div className="flex bg-yellow-200">

          <h1>Ongoing Mentor Matchings:</h1>

          {/* EVENT COMPONENT START */}
          <div className="flex flex-col items-center justify-center">
            <div>
              <img src={Tree} alt="" width={300} />
            </div>
            
            <div className="w-60 bg-blue-200">
              <h1>Women in Tech Mentor Matching</h1>
              <p>Are you a woman in tech? Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Assumenda possimus itaque
                ad necessitatibus accusamus officia quos maxime. Beatae, 
                illo praesentium</p>
            </div>
          </div>
          {/* EVENT COMPONENT END */}

          <div className="flex flex-col items-center justify-center">
            <div>
              <img src={Tree} alt="" width={300} />
            </div>
            
            <div className="w-60 bg-blue-200">
              <h1>Women in Tech Mentor Matching</h1>
              <p>Are you a woman in tech? Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Assumenda possimus itaque
                ad necessitatibus accusamus officia quos maxime. Beatae, 
                illo praesentium</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div>
              <img src={Tree} alt="" width={300} />
            </div>
            
            <div className="w-60 bg-blue-200">
              <h1>Women in Tech Mentor Matching</h1>
              <p>Are you a woman in tech? Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Assumenda possimus itaque
                ad necessitatibus accusamus officia quos maxime. Beatae, 
                illo praesentium</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="p-2 bg-brandGreen">See more</button>
        </div>

        

        {/* this week */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
