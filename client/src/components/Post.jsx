import React from 'react';
import { UserCircle } from 'lucide-react';

const Post = ({ username, content, profilePhoto }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-md shadow-sm shadow-gray-500 p-4">
      <div className="flex items-center gap-2 w-full mb-3">
        {profilePhoto ? (
          <img 
            src={profilePhoto} 
            alt={`${username}'s profile`} 
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <UserCircle className="w-10 h-10 text-gray-400" />
        )}
        <h3 className="font-medium text-gray-800">@{username}</h3>
      </div>
      
      {/* text content of post */}
      <div className="w-full bg-white rounded-md border-2 border-gray-200 p-3">
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default Post;