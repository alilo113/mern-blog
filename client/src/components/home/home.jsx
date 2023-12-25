import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageUrl from "../../img/pexels-luis-gomes-546819.jpg";
import axios from "axios";

export function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/posts");
        const postsData = response.data;
        setPosts(postsData); // Update state with fetched data
        console.log("Data:", postsData);
        // Handle the data here
      } catch (error) {
        console.error("Fetch error:", error);
        // Handle error cases
      }
    }

    fetchData();
  }, []);

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
      {posts.map(post => (
        <div key={post._id} className="border border-black p-2 m-5 flex">
          <div>
            <h2 className="text-xl font-bold">{post.Title}</h2>
            <p className="text-gray-700">{post.Summary}</p>
            <Link to={`/blog/${post._id}`} className="bg-blue-500 text-white font-semibold px-4 py-2 mt-4 inline-block hover:bg-blue-600 rounded">
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}