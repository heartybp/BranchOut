import React, { useState } from "react";
import { MessageCircle, Heart, X, Send, Plus } from "lucide-react";
import Avatar1 from "./assets/avatar1.png";
import Avatar2 from "./assets/avatar2.png";
import Avatar3 from "./assets/avatar3.png";
import Avatar4 from "./assets/avatar4.png";

const Forum = () => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showAskQuestion, setShowAskQuestion] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [newQuestionText, setNewQuestionText] = useState("");
  const [newComment, setNewComment] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Jane Doe",
      content: "Hi! This is my first post!",
      avatar: Avatar1,
      comments: [],
      liked: false,
    },
    {
      id: 2,
      author: "Jessica S.",
      content:
        "Hello! I would love to be a mentor to anyone interested in biology!",
      avatar: Avatar2,
      comments: [
        {
          id: 1,
          author: "Cathie Ryans",
          content:
            "Hey, just send a connection requestion. I would love to be a mentee.",
          avatar: Avatar3,
        },
        {
          id: 2,
          author: "Jackie Sanchez",
          content: "What fields of biology do you have experience with?.",
          avatar: Avatar4,
        },
        {
          id: 3,
          author: "Rose M.",
          content: "Interested!",
          avatar: Avatar2,
        },
      ],
      liked: false,
    },
    {
      id: 3,
      author: "Christie Snow",
      content:
        "I'm so stressed about my upcoming project. Any advice for doing UI/UX projects? I don't know where to start. I did do some small projects in the past, but more help would always be welcome.",
      avatar: Avatar3,
      comments: [],
      liked: false,
    },
  ]);

  const handleAskQuestion = () => {
    if (newQuestionText.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: "Jane Doe",
        content: newQuestionText,
        avatar: "/api/placeholder/40/40",
        comments: [],
        liked: false,
      };
      setPosts([newPost, ...posts]);
      setNewQuestionText("");
      setShowAskQuestion(false);
    }
  };

  const handleCommentClick = (post) => {
    setCurrentPost(post);
    setShowCommentModal(true);
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const handleNewComment = (postId) => {
    if (newComment.trim()) {
      setPosts(
        posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: post.comments.length + 1,
                  author: "You",
                  content: newComment,
                  avatar: "/api/placeholder/40/40",
                },
              ],
            };
          }
          return post;
        })
      );
      setNewComment("");
      setShowCommentModal(false);
    }
  };

  const toggleAskQuestion = () => {
    setShowAskQuestion(!showAskQuestion);
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <main className="flex-1 p-4 max-w-4xl mx-auto w-full">
        {/* Existing Questions Section - Always visible */}
        <div className="mb-8">
          {posts.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
              No questions posted yet
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  {/* Post Header with User Info */}
                  <div className="p-4 border-b">
                    <div className="flex items-center">
                      <img
                        src={post.avatar}
                        alt={`${post.author}'s avatar`}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{post.author}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-4">
                    <p>{post.content}</p>
                  </div>

                  {/* Post Actions */}
                  <div className="flex justify-end p-2 border-t">
                    <button
                      onClick={() => handleCommentClick(post)}
                      className="p-2 text-gray-600 hover:text-gray-900 mr-2"
                    >
                      <MessageCircle size={20} />
                    </button>
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`p-2 ${
                        post.liked
                          ? "text-red-500"
                          : "text-gray-600 hover:text-red-500"
                      }`}
                    >
                      <Heart
                        size={20}
                        fill={post.liked ? "currentColor" : "none"}
                      />
                    </button>
                  </div>

                  {/* Comments Section (if there are comments) */}
                  {post.comments.length > 0 && (
                    <div className="bg-gray-50 p-4 border-t">
                      {post.comments.map((comment) => (
                        <div
                          key={comment.id}
                          className="flex items-start mb-3 last:mb-0"
                        >
                          <img
                            src={comment.avatar}
                            alt={`${comment.author}'s avatar`}
                            className="w-8 h-8 rounded-full mr-2 mt-1"
                          />
                          <div>
                            <h4 className="font-medium">{comment.author}</h4>
                            <p className="text-gray-700">{comment.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Comment Modal */}
      {showCommentModal && currentPost && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center">
                <img
                  src={currentPost.avatar}
                  alt={`${currentPost.author}'s avatar`}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <h3 className="font-semibold">{currentPost.author}</h3>
              </div>
              <button
                onClick={() => setShowCommentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4">
              <div>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Comment on this post..."
                  className="w-full p-3 border-b-2 focus:outline-none focus:border-blue-400"
                  autoFocus
                />
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => handleNewComment(currentPost.id)}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simplified Ask Question Modal */}
      {showAskQuestion && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg overflow-hidden">
            {/* Header with user info and close button */}
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center">
                <img
                  src={Avatar1}
                  alt="Jane Doe's avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <h3 className="font-semibold">Jane Doe</h3>
              </div>
              <button
                onClick={() => setShowAskQuestion(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Single text input field */}
            <div className="p-4">
              <input
                type="text"
                value={newQuestionText}
                onChange={(e) => setNewQuestionText(e.target.value)}
                placeholder="Enter text here..."
                className="w-full p-3 border-b focus:outline-none focus:border-blue-400"
                autoFocus
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleAskQuestion}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button - Pressing this shows the Ask Question form */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={toggleAskQuestion}
          className="bg-green-700 hover:bg-green-800 text-white rounded-lg p-4 shadow-lg transition-colors"
        >
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
};

export default Forum;
