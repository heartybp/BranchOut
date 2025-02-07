import React from 'react'

const Navbar = () => {
  return (
    <div className="flex p-3 bg-blue-950 text-white justify-center" >
        <ul className="flex space-x-20">
            <li className="p-2 font-semibold ">
              <a href="">Home</a>
              </li>
            <li className="p-2 font-semibold "><a href="">About</a></li>
            <li className="p-2 font-semibold "><a href="">Profile</a></li>
            <li className="p-2 font-semibold "><a href="">Search</a></li>
        </ul>
    </div>
  )
}

export default Navbar

