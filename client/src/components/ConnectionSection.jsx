import React from "react";

const ConnectionCard = ({name, image}) => {
    return (
        <div className="flex flex-col items-center text-center">
            <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-2" />
            <p className="text-sm font-medium">{name}</p>
        </div>
    );
};

const connections = [
    {name: "Annie", image: "src/assets/connection-photo.png"},
    {name: "Jacob", image: "src/assets/connection-photo.png"},
    {name: "Jessica S.", image: "src/assets/connection-photo.png"},
    // They use the same pic for now
];

const ConnectionSection = () => {
    return (
        <div className="w-full mx-auto p-40 bg-white space-y-10">
            <h2 className="text-3xl font-bold text-center mb-6">Connections</h2>
            <div className="flex flex-row justify-center gap-10 p-10 mb-6 border-t border-gray-300 my-4">
                {connections.map(
                    (connection , index) =>(
                        <ConnectionCard key={index} name={connection.name} image={connection.image} />
                    )
                )}
            </div>
            <div className="text=sm text-gray-500 text-right pr-4">
                <a href="" className="px-20 mt-40 hover:underline">See 150+ Other Connections →</a>
            </div>
        </div>
    );
};

export default ConnectionSection;
