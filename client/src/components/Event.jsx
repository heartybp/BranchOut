import React from 'react'
import eventImage from "../assets/event-cover.png"

const Event = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
        <div>
            <img src={eventImage} alt="" className="w-[210px] gap-5"/>
        </div>
        
        <div className="w-[13rem] bg-white py-3 px-5 rounded-xl shadow-md -mt-4">
            <h1 className='font-semibold mb-2'>Women in Tech Mentor Matching</h1>
            <p className='text-xs text-gray-500 mb-2'> Do you need to grow your network? Come chat, network, and connect with a mentor or mentee!
            </p>
            <p className='text-xs font-semibold text-gray-800'> 
              <span>Live Now</span>
              <span className="text-blue-500 font-semibold cursor-pointer ml-12">Read More</span>
              <span className="ml-1"></span>
            </p>
        </div>
    </div>
    </>
  )
}

export default Event
