import React from 'react'
import { GraduationCap, Briefcase } from 'lucide-react';

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

const WorkItem = ({title, jobType, companyName, startDate, endDate, location, description})=> (
	<div classname="mb:6 last mb-0">
		<div className="flex items-start gap-4">
			<div className="bg-gray-100 p2 rounded-lg">
				<Briefcase className="w-6 h-6 text-gray-600" />
			</div>
			<div className="flex-1">
				<h3 className="font-semibold text-lg"></h3>
				<p className="">
					{title} <span className="text-sm text-gray-500"> {jobType} </span>
				</p>
				<p className="text-sm">
					{companyName}, {location}
				</p>
				<p className="text-sm text-gray-500">
					{startDate} - {endDate}
				</p>
				<p className="text-sm text-black">
					{description}
				</p>
			</div>
		</div>
	</div>
)

const EducationItem = ({ school, degree, field, startYear, endYear, gpa, activities }) => (
	<div className="mb:6 last:mb-0">
		<div className="flex items-start gap-4">
			<div className="bg-gray-100 p2 rounded-lg">
				<GraduationCap className="w-6 h-6 text-gray-600" />
			</div>
			<div className="flex-1">
				<h3 className="font-semibold text-lg"></h3>
				<p className="">
					{degree} {field && `in ${field}`}
				</p>
				<p className="text-sm">
					{startYear} - {endYear || 'Present'}
				</p>
				{gpa && <p className=" text-sm mt-1">GPA: {gpa}</p>}
				{activities && (
					<div className="mt-2">
						<p className="text-sm">{activities}</p>
					</div>
				)}
			</div>
		</div>
	</div>
);

const SkillsItem = ({ skill }) => (
	<div className="mb:6 last:mb-0">
		<div className="flex items-start gap-4">
			<div className="bg-gray-100 p2 rounded-lg">
				<GraduationCap className="w-6 h-6 text-gray-600" />
			</div>
			<div className="flex-1">
				<h3 className="font-semibold text-lg"></h3>
				<p className="">
					{skill}
				</p>
			</div>
		</div>
	</div>
);

const RecommendedFriend = ({ name, title, profilePic, mutualConnections }) => {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <img 
        src={profilePic || "/api/placeholder/40/40"} 
        alt={name}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xs text-gray-400">{mutualConnections} mutual connections</p>
      </div>
      <button className="px-4 py-1 text-sm font-semibold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50">
        Connect
      </button>
    </div>
  );
};


/*
SKILLS SECTION (Einar)
- smart
*/

const Profile = () => {
  const skills = [
    {skill: "Software Development"}
  ];
  
  const recommendations = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Software Engineer at Tech Co",
      profilePic: "/api/placeholder/40/40",
      mutualConnections: 12
    },
  ];

  const work = [
	{
		title: "Electrical Engineer Intern",
		jobType: "Internship",
		companyName: "CoolCompany Co.",
		startDate: "August 2020",
		endDate: "August 2022",
		location: "Irvine",
		description: "Description of job"
	}
  ]
  
  const education = [
    {
      school: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startYear: "2019",
      endYear: "2023",
      gpa: "3.8",
      activities: "Computer Science Club, Robotics Team, Hackathon Organizer"
    },
    {
      school: "City Community College",
      degree: "Associate's Degree",
      field: "General Studies",
      startYear: "2017",
      endYear: "2019",
      activities: "Student Government, Debate Club"
    }
  ];
  return (
    <>
      {/* ----- PROFILE HEADER ----- */}
      <div className="relative top-10 mx-auto h-full w-3/5 bg-white rounded-t-xl gray">
        {/* ----- BANNER ----- */}
        <img src="https://static.vecteezy.com/system/resources/thumbnails/054/506/874/small/lush-forest-floor-with-ferns-and-sunlight-free-photo.jpg"
          className="relative h-1/2 w-full rounded-t-xl border border-solid border-gray-500"/>
        {/* ----- PROFILE PHOTO ----- */}
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
          className="absolute top-24 left-20 w-44 h-44 rounded-full border-8 border-solid border-white" />
        
        <div className="relative h-1/2 w-full p-10">
          <div className="flex h-full">
            <div className="w-7/12 h-full space-y-4">
              <span className="font-sans font-semibold text-3xl text-gray-800" >Mike B. Wazowski</span> 
              <div className="flex text-gray-400">
                <span>Marketing Specialist | Digital Strategy | Content Creation</span>
              </div>
              <div className="flex gap-4">
                <button className='w-32 rounded-full bg-gray-800 text-white font-semibold text-lg text-center'>Follow</button>
                <button className='w-32 rounded-full bg-gray-800 text-white font-semibold text-lg text-center'>Message</button>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="font-bold text-gray-800">
                <h1 className='text-2xl'>Connections</h1>
                <span className="font-normal text-2xl text-gray-800">123</span>
              </div>
              <div className="font-bold text-gray-800">
                <h1 className='text-2xl'>Following</h1>
                <span className="font-normal text-2xl text-gray-800">456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="relative flex h-screen mx-auto w-3/5 rounded-b-xl bg-white gap-32 top-10">
        <div className='relative bg-white rounded-xl left-10 w-1/3'>
          <div className="relative bg-gray-100 h-3/12 p-4 rounded-xl w-full" >
            <div>
              <span className="text-2xl font-semibold p-2">Contact Info</span>
              <div alt="Phone" className="p-2"> 
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-phone-icon-download-in-svg-png-gif-file-formats--call-logo-telephone-receiver-user-interface-pack-icons-1502142.png?f=webp&w=256" 
                  className="w-4 h-4 inline opacity-50"/> 
                <span className="relative left-2">(323) 123-4567</span>
              </div>
              <div alt="Email" className="p-2"> 
                <img src="https://i.pinimg.com/736x/a1/84/0a/a1840a14b487ef2bee618d080221ec13.jpg" 
                  className="w-4 h-4 inline opacity-50"/> 
                <span className="relative left-2">wazowski@outlook.com</span>
              </div>
              <div alt="Website" className="p-2"> 
                <img src="https://cdn-icons-png.flaticon.com/512/3037/3037366.png" 
                  className="w-4 h-4 inline opacity-50"/> 
                <span className="relative left-2">mike-wazowski.com</span>
              </div>
              <div alt="Birthday" className="p-2"> 
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-phone-icon-download-in-svg-png-gif-file-formats--call-logo-telephone-receiver-user-interface-pack-icons-1502142.png?f=webp&w=256" 
                  className="w-4 h-4 inline opacity-50"/> 
                <span className="relative left-2">October 3, 2005</span>
              </div>
            </div>
          </div>
          <div className='relative bg-gray-100 mt-4 p-4 rounded-xl w-full'>
              <span className="text-2xl font-semibold p-2">People You May Know</span>
              {recommendations.length > 0 ? (
              <div className="p-2">
                {recommendations.map((friend) => (
                  <RecommendedFriend 
                    key={friend.id}
                    {...friend}
                  />
                ))}
              </div>
              ) : (
                <div className="text-gray-500 text-center py-4">
                  No Skills added yet
                </div>
              )}
            </div>
        </div>
        {/* ----- SUMMARY DESCRIPTION ----- */}
        <ul className='relative right-10 w-2/3'>
          <li className='bg-gray-100 h-3/8 rounded-lg mb-5 p-4'>
            <span className="text-2xl font-semibold">About</span>
            <div className=""> 
              I’m a results-driven marketing specialist with 5+ years of experience in digital marketing,
              specializing in content creation, social media strategy, and data-driven campaigns. I have a
              passion for helping brands grow by crafting compelling stories and driving measurable results. 
              Throughout my career, I’ve led cross-functional teams and executed successful campaigns that
              boosted engagement and sales.
              Always eager to learn and innovate, I am excited to connect with like-minded professionals
              and explore new opportunities in digital marketing.
            </div>
          </li>
            
          <li className='bg-gray-100 rounded-lg mb-5 p-4'>
            <span className="text-2xl font-semibold">Education</span>
            {education.length > 0 ? (
            <div className="p-2">
              {education.map((item, index) => (
                <EducationItem key={index} {...item} />
              ))}
            </div>
            ) : (
              <div className="text-gray-500 text-center py-4">
                No education history added yet
              </div>
            )}
          </li>

          <li className='bg-gray-100 rounded-lg mb-5 p-4'>
            <span className="text-2xl font-semibold">Skills</span>
            {skills.length > 0 ? (
            <div className="p-2">
              {skills.map((item, index) => (
                <SkillsItem key={index} {...item} />
              ))}
            </div>
            ) : (
              <div className="text-gray-500 text-center py-4">
                No Skills added yet
              </div>
            )}
          </li>

		  <li className='bg-gray-100 rounded-lg mb-5 p-4'>
            <span className="text-2xl font-semibold">Work Experience</span>
            {work.length > 0 ? (
            <div className="p-2">
              {work.map((item, index) => (
                <WorkItem key={index} {...item} />
              ))}
            </div>
            ) : (
              <div className="text-gray-500 text-center py-4">
                No work experience added yet
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  )

}

export default Profile
