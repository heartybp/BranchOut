import React from 'react'
import Connection from './Connection'

const SuggestedConnections = () => {
  return (
    <div className='flex flex-col gap-y-4 bg-red-200 items-center'>
        <Connection />
        <Connection />
        <Connection />
    </div>
  )
}

export default SuggestedConnections
