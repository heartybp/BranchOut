import React from 'react'
import connectionPhoto from '../assets/connection-photo.png'

const Connection = () => {
  return (
    <div className='flex bg-white rounded-xl p-5 shadow-md items-center w-11/12'>
        <div className='mr-4'>
            <img src={connectionPhoto} alt="" />
        </div>
        <div>
            <div className='flex items-center gap-x-2'>
                <h1 className='text-2xl font-semibold mb-1'>John Doe</h1>
                <h2 className='text-gray-500'><i>1st</i></h2>
                <p className='text-gray-500'>•</p>
                <h2 className='text-gray-500'><i>Sophomore</i></h2>
            </div>
            
            <p>I am a Bio major first year student; I want to know more about
                school. I am looking for a mentor in school resources & finding research
            </p>
        </div>
        <div className='flex flex-col gap-y-2'>
            <button className='w-36 py-2 bg-gray-100 border border-gray-300 rounded-lg'>Message</button>
            <button className='w-36 py-2 bg-brandGreen border border-gray-300 rounded-lg'>Connect</button>
        </div>
      
    </div>
  )
}

export default Connection
