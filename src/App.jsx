import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import NewPostForm from './components/NewPostForm';
import './App.css';
import {PostsDetails} from './components/PostsDetails'

function App() {
  const [posts, setPosts] = useState([]);

  const handleNewPostCreated = (newPost) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <div>
      <Routes>
        <Route path="/new" element={<NewPostForm onNewPostCreated={handleNewPostCreated} />} />
        <Route path="/" element={<Posts posts={posts} />} />
        <Route path="/post/:postId" element={<PostsDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
