import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/home/home";
import { Newpost } from "./components/newpost/newpost";
import { Post } from "./components/post/post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/newPost" element={<Newpost/>}/>
    </Routes>
  )
}

export default App
