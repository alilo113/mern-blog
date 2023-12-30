import React from "react";
import { Link } from "react-router-dom"

export function Post({ post }) {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">{post.Title}</h1>
      {post.Image && (
        <img src={`http://localhost:3000${post.Image}`} alt="" className="max-w-ls mb-3" />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.Content }} className="mb-5"/>
      <Link to="/" className="text-white bg-sky-500 p-3 rounded hover:bg-sky-300">Back to home page</Link>
    </div>
  );
}
