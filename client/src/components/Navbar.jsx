import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Leaf, House, UsersRound, MessageCircleQuestion, CircleUserRound, Archive } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  
  const navigateHome = () => navigate('/home');
  const navigateNetwork = () => navigate('/network');
  const navigateForum = () => navigate('/forum');
  const navigateProfile = () => navigate('/profile');


  return (
    <div className="flex justify-center text-white min-w-28 w-28 h-screen bg-brandGreen">
        <ul className="flex flex-col space-y-10">

            <Leaf size={70} className="pl-2 mt-10 mb-14"/>

            <div className="flex flex-col justify-center items-center space-y-1 cursor-pointer" onClick={navigateProfile}>
              <CircleUserRound size={40}/>
              <li className="">Profile</li>
            </div>

            <div className="flex flex-col justify-center items-center space-y-1 cursor-pointer" onClick={navigateHome}>
              <House size={40}/>
              <li className="">Home</li>
            </div>

            <div className="flex flex-col justify-center items-center space-y-1 cursor-pointer" onClick={navigateNetwork}>
              <UsersRound size={40}/>
              <li className="">Network</li>
            </div>

            <div className="flex flex-col justify-center items-center space-y-1 cursor-pointer" onClick={navigateForum}>
              <MessageCircleQuestion size={40}/>
              <li className="">Forum</li>
            </div>

            <div className="flex flex-col justify-center items-center space-y-1 cursor-pointer" onClick={navigateForum}>
              <Archive size={40}/>
              <li className="">Resources</li>
            </div>
        </ul>
    </div>
  )
}

export default Navbar

