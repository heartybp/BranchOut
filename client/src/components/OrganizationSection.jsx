import React from "react";
import {useState} from "react";

const OrganizationSection = () => {
    const [orgs, setOrgs] = useState([
        'Computer Science Club',
        'Robotics Team'
    ]);
    const [newOrg, setNewOrg] = useState('');

    const addOrg = () => {
        if (newOrg.trim() !== '') {
            setOrgs ([...orgs, newOrg])
            setNewOrg('');
        }
    }


    return (
        <div className="px-80 mx-auto p-20 bg-white w-full flex flex-col">
            <h2 className="text-2xl mt-20 flex flex-col font-bold mb-4">Organizations</h2>
            <div className="space-y-3">
                <ul>
                    {orgs.map((org, index) => (
                        <li key={index} className="bg-gray-200 px-4 py-2 mt-2 rounded-md flex justify-between items-center">{org}</li>
                    ))}
                </ul>

                <button onClick={addOrg} className="mt-8 px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 flex items-center space-x-2">Add New</button>
                <input
                    type="text"
                    value={newOrg}
                    onChange={(e) => setNewOrg(e.target.value)}
                    placeholder="Enter new organization..."
                    className="bg-gray-200 px-4 py-2 rounded-md flex justify-between items-center"
                />
            </div>
        </div>
    );
};

export default OrganizationSection;