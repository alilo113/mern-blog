import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export function Newpost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState(null); // Initialize image state with null
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("summary", summary);
      
      // Check if an image is present before appending it to the form data
      if (image) {
        formData.append("image", image);
      }
  
      const res = await axios.post("http://localhost:3000/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log(res.data);
      setTitle("");
      setContent("");
      setSummary("");
      setImage(null);
      nav("/");
    } catch (error) {
      console.error("Post creation error:", error);
      // Handle error: display error message to the user or perform necessary actions
    }
  }
  
  return (
    <form className="bg-gray-100 min-h-screen" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold p-4">Create a New Post</h1>
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
            Content
          </label>
          <div className="quill-container">
            <ReactQuill
                value={content}
                onChange={(value) => setContent(value)}
                // other props...
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">
            Summary
          </label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            id="summary"
            className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
            placeholder="Enter summary"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])} // Update the image state on file change
            type="file"
            id="image"
            name="image"
            className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="image/*"
          />
        </div>
        <div className="flex items-center">
        <button
          type="submit"
          className="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Post
        </button>
        <Link to="/">Go to home page</Link>
        </div>
      </div>
    </form>
  );  
}