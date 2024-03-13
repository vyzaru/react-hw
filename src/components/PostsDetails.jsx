import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const PostsDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (postId) {
      getPost(postId);
      getComments(postId);
    } else {
      console.error('postId is empty or undefined');
    }
  }, [postId]);

  const getPost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }

  const getComments = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data));
  }

  return (
    <div className="container">
      {post && (
        <div className="post-details-card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
      <h4>Comments:</h4>
      <ul className="comment-list">
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};
