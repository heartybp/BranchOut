import React from 'react'

const Navbar = () => {
  return (
    <div className="flex p-1 bg-blue-300" >
        <ul className="flex">
            <li className="p-1"><a href="">Home</a></li>
            <li className="p-1"><a href="">About</a></li>
            <li className="p-1"><a href="">Profile</a></li>
        </ul>
    </div>
  )
}

export default Navbar
