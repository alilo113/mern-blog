import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/home/home";
import { Newpost } from "./components/newpost/newpost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/newPost" element={<Newpost/>}/>
    </Routes>
  )
}

export default App
