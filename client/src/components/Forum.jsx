import React, { useState } from 'react';

const Forum = () => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionBody, setQuestionBody] = useState('');
  const [questions, setQuestions] = useState([]);
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [comment, setComment] = useState('');

};

export default Forum;