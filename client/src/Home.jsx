import React from 'react';
import Navbar from './components/Navbar.jsx';
import Post from './components/Post.jsx';

const Home = () => {
  // Example posts data - in a real app, this might come from an API
  const posts = [
    {
      id: 1,
      username: 'johndoe',
      content: 'This is my first post!',
      profilePhoto: null
    },
    {
      id: 2,
      username: 'janedoe',
      content: 'React is amazing!',
      profilePhoto: null
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-green-700 flex justify-center items-center py-8">
        {/* Container for posts */}
        <div className="w-full max-w-2xl space-y-4">
          {posts.map(post => (
            <Post 
              key={post.id}
              username={post.username}
              content={post.content}
              profilePhoto={post.profilePhoto}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;