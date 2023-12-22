import React from "react";
import { Link } from "react-router-dom";
import imageUrl from "../../img/pexels-luis-gomes-546819.jpg";

export function Home() {
  const blogSummary = "Welcome to my personal blog. Explore articles on various topics and get inspired!";
  const blogTitle = "Explore My Personal Blog";

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Personal Blog</h1>
          <Link to={'/newpost'} className="hover:underline">
            Create New Post
          </Link>
        </div>
      </nav>

      <div className="border border-black p-2 m-5 flex">
        <img src={imageUrl} alt="" className="max-w-xs mr-4" />
        <div>
          <h2 className="text-xl font-bold">{blogTitle}</h2>
          <p className="text-gray-700">{blogSummary}</p>
          <Link to={'/blog'} className="bg-blue-500 text-white font-semibold px-4 py-2 mt-4 inline-block hover:bg-blue-600 rounded">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}