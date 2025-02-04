import React from 'react'


// ---------- Use LinkedIn as reference --------- //

/*
PROFILE (Niva)
 - name
 - pic/avatar (editable)
 - follow/message button
 - follower / connections
*/



/*
BIO SECTION (Einar)
- description (editable)
*/



/*
ABOUT SECTION (Niva)
- summary
- reference figma profile
- Social media / Contacts
*/




/*
WORK / PROJECT EXPERIENCE (Niva)
- LinkedIn reference
- work
- project
*/



/*
EDUCATION (Einar)
- Institution
- Degree
- Dates
*/



/*
SKILLS SECTION (Einar)
- smart
*/

const Profile = () => {

  return (
    <div className="absolute overflow-hidden top-10 h-full w-full bg-gradient-to-b from-gray-100 to-gray-200">
    	<div className="absolute top-10 left-52 h-full w-3/5 bg-white rounded-xl border border-solid border-gray-300">
    	</div>

		{/* ----- BANNER ----- */}
		<img src="https://static.vecteezy.com/system/resources/thumbnails/054/506/874/small/lush-forest-floor-with-ferns-and-sunlight-free-photo.jpg" className="absolute top-10 left-52 h-2/5 w-3/5 bg-emerald-900 rounded-t-xl border border-solid border-gray-300"/>
		{/* ----- PROFILE PHOTO ----- */}
		<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="absolute top-36 left-60 w-20 h-20 rounded-full border-4 border-solid border-white" />

    </div>
  )

}

export default Profile
