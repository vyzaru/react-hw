import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPostForm = ({ addNewPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const handleNavigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      userId: 'Egorov Ivan Alekseevich'
    };
    addNewPost(newPost);
    handleNavigate('/');
  };

  return (
    <div className="container">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit} className="new-post-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="input-title"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
          className="textarea-body"
        ></textarea>
        <button type="submit" className="submit-button">Publish</button>
      </form>
    </div>
  );
};