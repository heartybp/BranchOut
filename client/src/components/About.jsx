import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import ConnectionSection from "./ConnectionSection.jsx";
import MentorSection from "./MentorSection.jsx";

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
 [x] summary
 [x] Social media / Contacts
*/

/*
WORK / PROJECT EXPERIENCE (Niva)
- LinkedIn reference
- work/project
*/

/*
EDUCATION (Einar)
- Institution
- Degree
- Dates
*/

// displayed in experiences section
const WorkItem = ({
  title,
  jobType,
  companyName,
  startDate,
  endDate,
  location,
  description,
}) => (
  <div classname="mb:6 last mb-0">
    <div className="flex items-start gap-4">
      <Briefcase className="w-12 h-12 text-gray-600 bg-gray-100 p-2 rounded-full" />

      <div className="flex-1">
        <p className="text-lg font-medium">
          {companyName}, {location}
        </p>
        <p className="text-lg">{title}</p>
        <p className="text-md text-gray-500">
          {startDate} - {endDate}
        </p>
        <p className="text-md text-gray-600 font-extralight">{description}</p>
      </div>
    </div>
  </div>
);

const EducationItem = ({
  school,
  degree,
  field,
  startYear,
  endYear,
  gpa,
  activities,
}) => (
  <div className="mb:6 last:mb-0">
    <div className="flex">
      <div className="flex flex-row items-start space-x-3">
        <div className="mt-4">
          <GraduationCap className="w-12 h-12 bg-gray-100 rounded-full text-gray-600 p-2" />
        </div>

        <div className="mt-3">
          <p className="text-lg">
            {degree} {field && `in ${field}`}
          </p>
          <p className="text-md text-gray-500">
            {startYear} — {endYear || "Present"}
          </p>
          {gpa && <p className="text-md text-gray-500">GPA: {gpa}</p>}
          {activities && (
            <p className="text-md font-extralight text-gray-500">
              {activities}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

// ORGANIZATIONS
const SkillsItem = ({ skill }) => (
  <div className="mb:6 last:mb-0">
    <div className="flex items-center gap-4">
      <GraduationCap className="w-12 h-12 text-gray-600 bg-gray-100 p-2 rounded-full" />
      <div className="flex-1">
        <p className="text-lg">{skill}</p>
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
        <p className="text-xs text-gray-400">
          {mutualConnections} mutual connections
        </p>
      </div>
      <button className="px-1 py-1 text-sm font-semibold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50">
        Connect
      </button>
    </div>
  );
};

/*
SKILLS SECTION (Einar)
- smart
*/

const About = () => {
  const skills = [{ skill: "Fusion @ UCI" }];

  const recommendations = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Software Engineer at Tech Co",
      profilePic: "/api/placeholder/40/40",
      mutualConnections: 12,
    },
  ];

  const work = [
    {
      title: "Software Engineer Intern",
      jobType: "Internship",
      companyName: "Microsoft",
      startDate: "August 2020",
      endDate: "August 2022",
      location: "Irvine",
      description: "Working with the CoPilot team.",
    },
  ];

  const education = [
    {
      school: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startYear: "2019",
      endYear: "2023",
      gpa: "3.8",
      activities: "Computer Science Club, Robotics Team, Hackathon Organizer",
    },
    {
      school: "City Community College",
      degree: "Associate's Degree",
      field: "General Studies",
      startYear: "2017",
      endYear: "2019",
      activities: "Student Government, Debate Club",
    },
  ];
  return (
    <div className="bg-white w-full pt-20 h-max">
      {/* centered profile photo */}

      <MentorSection />
      <div className="flex justify-center">
        {/* ----- SUMMARY DESCRIPTION ----- */}
        <ul className="w-4/5">
          {/* ABOUT SECTION */}
          <li className="h-3/8 rounded-lg mb-5 p-4">
            <h1 className="text-2xl font-semibold">About Me</h1>

            {/* start horizontal line */}
            <div className="flex-grow h-px bg-slate-200 my-3"></div>

            <div className="text-gray-500 font-extralight">
              <p className="text-center mx-12">
                I'm a dedicated computer science student developing my technical
                skills through coursework, personal projects, and hackathons,
                I've developed strong skills in problem-solving and creating
                efficient code. I'm eager to apply my technical knowledge in
                real-world settings and connect with industry professionals as I
                prepare to enter the field.
              </p>
            </div>

            {/* end horizontal line */}
            <div className="flex-grow h-px mx-20 bg-slate-200 my-3"></div>
          </li>

          {/* EDUCATION SECTION */}
          <li className="rounded-lg mb-5 p-4">
            <h1 className="text-2xl font-semibold">Education</h1>
            {/* start horizontal line */}
            <div className="flex-grow h-px bg-slate-200 my-3"></div>
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

          {/* ORGANIZATIONS SECTION */}
          <li className="rounded-lg mb-5 p-4">
            <h1 className="text-2xl font-semibold">Organizations</h1>
            <div className="flex-grow h-px bg-slate-200 my-3"></div>
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

          {/* EXPERIENCES SECTION */}
          <li className="rounded-lg mb-5 p-4">
            <h1 className="text-2xl font-semibold">Experiences</h1>
            <div className="flex-grow h-px bg-slate-200 my-3"></div>
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

      <div className="flex flex-col justify-center items-center">
        <div className="w-4/5">
          <div className="">
            <div className="p-4">
              <span className="text-2xl font-semibold">Contact Info</span>
              <div className="flex-grow h-px bg-slate-200 my-3"></div>
              <div alt="Phone" className="p-2">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-phone-icon-download-in-svg-png-gif-file-formats--call-logo-telephone-receiver-user-interface-pack-icons-1502142.png?f=webp&w=256"
                  className="w-4 h-4 inline opacity-50 mr-2"
                />
                <span className="left-2">(323) 123-4567</span>
              </div>
              <div alt="Email" className="p-2">
                <img
                  src="https://i.pinimg.com/736x/a1/84/0a/a1840a14b487ef2bee618d080221ec13.jpg"
                  className="w-4 h-4 inline opacity-50 mr-2"
                />
                <span className="left-2">janedoe@outlook.com</span>
              </div>
              <div alt="Website" className="p-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3037/3037366.png"
                  className="w-4 h-4 inline opacity-50 mr-2"
                />
                <span className="left-2">jane-doe.com</span>
              </div>
              <div alt="Birthday" className="p-2">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-phone-icon-download-in-svg-png-gif-file-formats--call-logo-telephone-receiver-user-interface-pack-icons-1502142.png?f=webp&w=256"
                  className="w-4 h-4 inline opacity-50 mr-2"
                />
                <span className="left-2">October 3, 2005</span>
              </div>
            </div>
          </div>
        </div>

        <ConnectionSection />

        {/* ----- SUMMARY DESCRIPTION ----- */}
        {/* <ul className="right-10 w-2/3">
            <li className="bg-gray-100 h-3/8 rounded-lg mb-5 p-4">
              <span className="text-2xl font-semibold">About</span>
              <div className="">
                I’m a results-driven marketing specialist with 5+ years of
                experience in digital marketing, specializing in content
                creation, social media strategy, and data-driven campaigns. I
                have a passion for helping brands grow by crafting compelling
                stories and driving measurable results. Throughout my career,
                I’ve led cross-functional teams and executed successful
                campaigns that boosted engagement and sales. Always eager to
                learn and innovate, I am excited to connect with like-minded
                professionals and explore new opportunities in digital
                marketing.
              </div>
            </li>

            <li className="bg-gray-100 rounded-lg mb-5 p-4">
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

            <li className="bg-gray-100 rounded-lg mb-5 p-4">
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

            <li className="bg-gray-100 rounded-lg mb-5 p-4">
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
          </ul> */}
      </div>
    </div>
  );
};

export default About;
