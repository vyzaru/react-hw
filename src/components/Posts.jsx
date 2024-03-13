import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : 'Unknown';
  };

  return (
    <div className="container">
      <h2 className="head">Posts</h2>
      <div className="post-list">
        <div className="create-post-btn-container">
          <Link to="/new" className="create-post-btn">Create New Post</Link>
        </div>
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <h3>{post.title}</h3>
              <p className="author">Author: {getUserName(post.userId)}</p>
            </div>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`} className="read-more-link">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;