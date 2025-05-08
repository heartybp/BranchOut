import React from 'react'
import eventImage from "../assets/event-cover.png"

const Event = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
        <div>
            <img src={eventImage} alt="" width={200} />
        </div>
        
        <div className="w-44 bg-white py-3 px-5 rounded-xl shadow-md">
            <h1 className='font-semibold mb-2'>Women in Tech Mentor Matching</h1>
            <p className='text-xs'>Are you a woman in tech? Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Assumenda possimus itaque
            </p>
        </div>
    </div>
    </>
  )
}

export default Event
