import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPostForm = ({ onNewPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const handleNavigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      userId: 11,
      id: 101
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });

      if (!response.ok) {
        throw new Error('Failed to add new post');
      }

      const data = await response.json();
      onNewPostCreated(data); 
      handleNavigate('/');
    } catch (error) {
      console.error('Error adding new post:', error);
    }
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
          required
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
          className="textarea-body"
          required
        ></textarea>
        <button type="submit" className="submit-button">Publish</button>
      </form>
    </div>
  );
};

export default NewPostForm;
