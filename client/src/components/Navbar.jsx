import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  const navigateHome = () => navigate('/home');
  const navigateNetwork = () => navigate('/network');
  const navigateForum = () => navigate('/forum');
  const navigateProfile = () => navigate('/profile');


  return (
    <div className="flex p-3 bg-emerald-900 text-white justify-center" >
        <ul className="flex space-x-20">
            <li className="p-2 font-semibold cursor-pointer" onClick={navigateHome}>Home</li>

            <li className="p-2 font-semibold cursor-pointer" onClick={navigateNetwork}>Network</li>

            <li className="p-2 font-semibold cursor-pointer" onClick={navigateForum}>Forum</li>
 
            <li className="p-2 font-semibold cursor-pointer" onClick={navigateProfile}>Profile</li>
        </ul>
    </div>
  )
}

export default Navbar

