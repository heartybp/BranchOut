import React from 'react'
import Connection from './Connection'

const SuggestedConnections = () => {
  return (
    <>
        <h1 className="text-3xl font-bold pl-10 my-8">Suggested Connections based on your career goals</h1>
        <div className='flex flex-col gap-y-4 bg-red-200 items-center'>
            <Connection />
            <Connection />
            <Connection />
        </div>
    </>
  )
}

export default SuggestedConnections
