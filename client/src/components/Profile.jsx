import React from 'react'


// ---------- Use LinkedIn as reference --------- //

/*
PROFILE (Niva)
 [x] name 
 [x] pic/avatar (editable)
 [x] follow/message button
 [x] follower / connections
*/



/*
BIO SECTION (Einar)
- description (editable)
*/



/*
ABOUT SECTION (Niva)
 [] summary
 [] Social media / Contacts
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
    	<div className="absolute top-10 left-64 h-3/5 w-3/5 bg-white rounded-xl border border-solid border-gray-500">
    	</div>

		{/* ----- BANNER ----- */}
		<img src="https://static.vecteezy.com/system/resources/thumbnails/054/506/874/small/lush-forest-floor-with-ferns-and-sunlight-free-photo.jpg"
			className="absolute top-10 left-64 h-60 w-3/5 bg-emerald-900 rounded-t-xl border border-solid border-gray-500"/>
		{/* ----- PROFILE PHOTO ----- */}
		<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
			className="absolute top-32 left-80 w-44 h-44 rounded-full border-8 border-solid border-white" />
		
		<div className="absolute top-96 left-80 w-2/5">
			{/* ----- FULL NAME ----- */}
			<span className="relative -top-14 font-sans font-semibold text-3xl text-gray-800" >Mike B. Wazowski</span> 
			{/* ----- EDIT BUTTON ----- */}
			<div className="absolute top-18 -right-52 w-8 h-8 opacity-35" >
				<span><img src="https://static.thenounproject.com/png/65482-200.png"/></span> 
			</div>
			<div className="absolute top-18 left-96">
				{/* ----- FOLLOW BUTTON (Change this for viewing home profile) ----- */}
				<div className="absolute top-0 left-20 w-32 h-8 rounded-full bg-gray-800 text-white font-semibold text-lg text-center" >
					Follow
				</div>
				{/* ----- MESSAGE BUTTON (Change this for viewing home profile) ----- */}
				<div className="absolute top-0 left-56 w-32 h-8 rounded-full bg-white border border-gray-800 border-2 text-gray-800 font-semibold text-xl text-center" >
					Message
				</div>
			</div>
			{/* ----- FOLLOWERS / FOLLOWING COUNT ----- */}
			<div className="absolute -top-20 left-96">
				<div className="absolute top-0 left-20 font-bold text-gray-800">
					Connections
					<span className="absolute top-6 left-0 font-normal text-2xl text-gray-800">123</span>
				</div>
				<div className="absolute top-0 left-60 font-bold text-gray-800">
					Following
					<span className="absolute top-6 left-0 font-normal text-2xl text-gray-800">456</span>
				</div>
			</div>
			{/* ----- USER BIO ----- */}
			<div className="absolute top-0 left-0 flex text-gray-400">
				<span>Some short user bio here.  (Ex: Senior Mechanical <br/>Engineer at WacDonald's)</span>
			</div>

		</div>

    </div>
  )

}

export default Profile
