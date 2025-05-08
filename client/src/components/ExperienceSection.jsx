import React from "react";
import {useState} from "react";

const ExperienceSection = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [experience, setExperience] = useState({
        companyName: "CoolCompany Co. Irvine",
        degree: "Electrical Engineer",
        timePeriod: "Aug 2020 - July 2021",
        description: "Did super cool stuff!!"
    });


    const handleChange = (e) => {
        setExperience ({ ...experience, [e.target.name]: e.target.value });
    };

    return (
        <div className="px-80 mx-auto bg-white w-full flex flex-col">
            <h2 className="text-2xl mt-20 font-bold mb-4">Experience</h2>
            <div className="space-y-3">
                {Object.entries(experience).map(([key, value]) => (
                <div key={key} className="bg-gray-200 px-4 py-2 rounded-md flex justify-between items-center">
                    {isEditing ? (
                        <input
                            type="text"
                            name={key}
                            value={value}
                            onChange={handleChange}
                            placeholder="Job Description Here"
                            className="bg-gray-200 px-4 py-2 rounded-md flex justify-between items-center"
                        />
                    ) : (
                        <span>{value}</span>
                    )}
                </div>
                ))}
                <button onClick={() => setIsEditing(!isEditing)} className="mt-4 px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 flex items-center space-x-2">
                    {isEditing ? (
                        <span>Save</span>
                    ) : (
                        <span>Edit</span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ExperienceSection;