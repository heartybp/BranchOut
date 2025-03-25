import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx'

const Forum = () => {
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionBody, setQuestionBody] = useState('');
    const [questions, setQuestions] = useState([]);
    const [showCommentPopup, setShowCommentPopup] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [comment, setComment] = useState('');

    const handleSubmitQuestion = () => {
    if (questionTitle && questionBody) {
        const newQuestion = {
        title: questionTitle,
        body: questionBody,
        comments: []
        };
        setQuestions([newQuestion, ...questions]);
        setQuestionTitle('');
        setQuestionBody('');
    }
    };

    const handleCommentClick = (question) => {
    setSelectedQuestion(question);
    setShowCommentPopup(true);
    };

    const handleAddComment = () => {
    if (comment) {
        selectedQuestion.comments.push(comment);
        setQuestions([...questions]);
        setComment('');
    }
    };

    return (
        <div className="flex">
        <Navbar />
        <div className="w-full bg-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ask a Question</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Question Title"
                        value={questionTitle}
                        onChange={(e) => setQuestionTitle(e.target.value)}
                    />
                    <textarea
                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe your question"
                        value={questionBody}
                        onChange={(e) => setQuestionBody(e.target.value)}
                        rows="4"
                    />
                    <button
                        onClick={handleSubmitQuestion}
                        disabled={!questionTitle || !questionBody}
                        className="w-full p-3 bg-blue-600 text-white rounded-md disabled:opacity-50 hover:bg-blue-700 focus:outline-none"
                    >
                        Post Question
                    </button>
                </div>
            </div>

            <div className="mt-10 max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold text-gray-700 mb-6">Existing Questions</h2>
                {questions.length === 0 ? (
                    <p className="text-center text-gray-500">No questions posted yet</p>
                ) : (
                    questions.map((question, index) => (
                        <div key={index} className="bg-white p-5 mb-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800">{question.title}</h3>
                            <p className="text-gray-600 mt-2">{question.body}</p>
                            <div className="flex items-center mt-4">
                                <button
                                    className="text-blue-600 flex items-center"
                                    onClick={() => handleCommentClick(question)}
                                >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12h3m-3 0h-3m3 0v3m0-3v-3m-4 4h-3m3 0v3m0-3h3m-3 0v-3m3 3h3m0 0v-3m-3 0v3"
                                    />
                                </svg>
                                Comment
                            </button>
                        </div>
                    </div>
                ))
                )}
            </div>

            {/* Comment Popup */}
            {showCommentPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Comments</h3>
                    <h4 className="text-lg text-gray-800">{selectedQuestion.title}</h4>
                    <p className="text-gray-600 mt-2">{selectedQuestion.body}</p>
                    <div className="mt-4">
                        {selectedQuestion.comments.length === 0 ? (
                            <p className="text-gray-500">No comments yet</p>
                        ) : (
                            selectedQuestion.comments.map((comment, index) => (
                                <div key={index} className="text-gray-700 mt-2">
                                    <p>{comment}</p>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="mt-4">
                        <textarea
                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add a comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows="3"
                        />
                        <button
                        onClick={handleAddComment}
                        disabled={!comment}
                        className="w-full mt-3 p-3 bg-blue-600 text-white rounded-md disabled:opacity-50 hover:bg-blue-700 focus:outline-none"
                        >
                            Post Comment
                        </button>
                    </div>
                    <button
                        onClick={() => setShowCommentPopup(false)}
                        className="mt-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                        Close
                    </button>
                </div>
            </div>
            )}
        </div>
        </div>
    );
};

export default Forum;