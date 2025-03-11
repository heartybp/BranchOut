import React from 'react'
import Navbar from './components/Navbar.jsx'

const Home = () => {

  return (
    <>
      <Navbar />
      
      <div className=" bg-green-700 flex justify-center items-center">

        {/* post ui component */}
        <div className="w-1/3 h-20 flex flex-col justify-center items-center bg-white rounded-md shadow-sm shadow-gray-500">
          
          <div className="flex">
            <div>profile photo holder</div>
            <h3>@username</h3>
          </div>

          {/* text content of post */}
          <div className='w-10/12 bg-white rounded-md  border-2 '>
            <p>lorem ipsum dolor</p>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default Home