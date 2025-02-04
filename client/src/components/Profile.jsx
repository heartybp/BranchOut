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
    <div className="absolute overflow-hidden top-10 h-full w-full bg-gradient-to-b from-gray-900 to-gray-800">
    	<div className="absolute top-10 left-64 h-full w-3/5 bg-white rounded-xl border border-solid border-gray-300">
    	</div>

		{/* ----- BANNER ----- */}
		<img src="https://static.vecteezy.com/system/resources/thumbnails/054/506/874/small/lush-forest-floor-with-ferns-and-sunlight-free-photo.jpg"
			className="absolute top-10 left-64 h-60 w-3/5 bg-emerald-900 rounded-t-xl border border-solid border-gray-300"/>
		{/* ----- PROFILE PHOTO ----- */}
		<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
			className="absolute top-40 left-80 w-44 h-44 rounded-full border-8 border-solid border-white" />
		
		<div className="absolute top-96 left-80 w-2/5">
			{/* ----- FULL NAME ----- */}
			<span className="relative -top-10 font-sans font-semibold text-3xl text-gray-800" >Mike B. Wazowski</span> 
			{/* ----- EDIT BUTTON ----- */}
			<div className="absolute top-18 -right-40 w-12 h-12 opacity-35" >
				<span><img src="https://static.thenounproject.com/png/65482-200.png"/></span> 
			</div>
			{/* ----- FOLLOW BUTTON (Change this for viewing home profile) ----- */}
			<div className="relative w-40 h-10 rounded-full bg-gray-800 text-white font-semibold text-xl text-center p-1" >
				Follow
			</div>
			{/* ----- MESSAGE BUTTON (Change this for viewing home profile) ----- */}
			<div className="relative -top-10 left-44 w-40 h-10 rounded-full bg-white border border-gray-800 border-2 text-gray-800 font-semibold text-xl text-center p-1" >
				Message
			</div>
			<div className="absolute -top-16 right-0">
				<div className="font-bold text-gray-800">
					Followers
					<span className="relative top-8 -left-16 font-normal text-2xl text-gray-800">100</span>
				</div>
				<div className="relative -top-8 -right-40 font-bold text-gray-800">
					Following
					<span className="relative top-8 -left-16 font-normal text-2xl text-gray-800">100</span>
				</div>
			</div>

		</div>

    </div>
  )

}

export default Profile
