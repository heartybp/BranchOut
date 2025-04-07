import React from 'react'
import Event from './Event.jsx'

const ScrollEvents = ({ScrollEventsTitle}) => {
  return (
    <>
        <div className='py-10 bg-green-100'>
        <h1 className='text-3xl font-bold pl-10 mb-8'>{ScrollEventsTitle}:</h1>
        <div className='flex gap-x-20 justify-center'>
            <Event />
            <Event />
            <Event />
        </div>
        </div>
    </>
  )
}

export default ScrollEvents
