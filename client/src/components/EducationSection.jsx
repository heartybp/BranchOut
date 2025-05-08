import React from "react";
import {useState} from "react";

const EducationSection = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [education, setEducation] = useState({
        school: "University of California",
        degree: "Bachelor of Science in Computer Science",
        yearStart: "2019",
        yearEnd: "2024",
        gpa: "3.8",
        activities: ["CS Club", "Robotics Team"]
    });


    const handleChange = (e) => {
        setEducation ({ ...education, [e.target.name]: e.target.value });
    };

    return (
        <div className="px-80 mx-auto bg-white w-full flex flex-col">
            <h2 className="text-2xl mt-20 font-bold mb-4">Education</h2>
            <div className="space-y-3">
                {Object.entries(education).map(([key, value]) => (
                <div key={key} className="bg-gray-200 px-4 py-2 rounded-md flex justify-between items-center">
                    {isEditing ? (
                        <input
                            type="text"
                            name={key}
                            value={value}
                            onChange={handleChange}
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

export default EducationSection;