import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/home/home";
import { Newpost } from "./components/newpost/newpost";
import { Post } from "./components/post/post";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('http://localhost:3000/api/posts');
        const postsData = response.data;
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
      <Routes>
        {posts.map(post => (
          <Route
            key={post._id}
            path={`/post/${post._id}`}
            element={<Post post={{ ...post, image: post.Image }} />} // Ensure consistent property naming
          />
        ))}
        <Route path="/" element={<Home/>}/>  
        <Route path="/newpost" element={<Newpost/>}/>  
      </Routes>
  );
}

export default App;