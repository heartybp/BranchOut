import React from "react";
import Event from "./Event.jsx";
import LeftArrow from "../assets/left_arrow.png";
import RightArrow from "../assets/right_arrow.png";

const ScrollEvents = ({ ScrollEventsTitle, status }) => {
  return (
    <>
      <div className="py-10">
        <h1 className="text-2xl font-bold pl-14 mb-8">{ScrollEventsTitle}</h1>

        {/* Scrolling Events Container */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <img
            src={LeftArrow}
            alt="Left Arrow"
            className="absolute left-[2.5rem] top-40 transform -translate-y-1/2 w-4 h-6 cursor-pointer"
          />
          <img
            src={RightArrow}
            alt="Right Arrow"
            className="absolute right-[2.5rem] top-40 transform -translate-y-1/2 w-4 h-6 cursor-pointer"
          />
        </div>
        <div className="flex gap-x-16 justify-center">
          <Event status={status} />
          <Event status={status} />
          <Event status={status} />
        </div>
      </div>
    </>
  );
};

export default ScrollEvents;
