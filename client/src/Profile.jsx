import React from 'react'
import Navbar from './components/Navbar.jsx'
import ProfileSection from './components/ProfileSection.jsx'

const Profile = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-center mt-20">
          <ProfileSection />
      </div>
    </>
  )
}

export default Profile