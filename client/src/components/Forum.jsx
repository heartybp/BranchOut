import React, { useState } from 'react';

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

  
};

export default Forum;