import React from "react";
import { Link } from "react-router-dom";

export function Post({ post }) {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">{post.Title}</h1>
      {post.Image && (
        <img src={post.Image} alt="Post Image" className="mb-4 rounded-lg" />
      )}
      <p className="text-gray-700">{post.Content}</p>
      {/* Display other post details as needed */}
      <Link to="/" className="block mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );  
}