import React from 'react'
import Navbar from './components/Navbar.jsx'

const Home = () => {

  return (
    <>
      <Navbar />
      
      <div className=" bg-green-700 flex justify-center items-center">

        {/* post ui component */}
        <div className="w-1/2 h-20 flex-col bg-blue-200 rounded-md shadow-sm shadow-gray-500">
          
          <div className="flex justify-center">
            <div>profile photo holder</div>
            <h3>@username</h3>
          </div>

          {/* text content of post */}
          <div className='flex justify-center border-gray-200 border-2 w-10/12 bg-green-200'>
            <p>lorem ipsum dolor</p>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default Home