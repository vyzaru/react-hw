import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import { NewPostForm } from './components/NewPostForm';
import './App.css';
import { PostsDetails } from './components/PostsDetails';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  const handleNewPostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <Routes>
        <Route path="/new" element={<NewPostForm handleNewPostCreated={handleNewPostCreated} />} />
        <Route path="/" element={<Posts posts={posts} />} />
        <Route path="/post/:postId" element={<PostsDetails />} />
      </Routes>
    </div>
  );
}

export default App;