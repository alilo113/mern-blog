import React from "react";
import { Link } from "react-router-dom";
export function Newpost(){
    return (
        <div className="bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold p-4">Create a New Post</h1>
          <div className="container mx-auto p-4">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter title"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
                Content
              </label>
              <textarea
                id="content"
                className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="6"
                placeholder="Enter content"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">
                Summary
              </label>
              <textarea
                id="summary"
                className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
                placeholder="Enter summary"
              ></textarea>
            </div>
            <Link
               to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Post
            </Link>
          </div>
        </div>
      );      
}