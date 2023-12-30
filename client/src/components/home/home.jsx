import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/posts");
        const postsData = response.data;
        setPosts(postsData);
      } catch (error) {
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4 max-h-screen">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Personal Blog</h1>
          <Link to={'/newpost'} className="hover:underline">
            Create New Post
          </Link>
        </div>
      </nav>
      <div className="container mx-auto">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {posts.length === 0 && !loading && !error && <></>}
        {posts.map((post) => (
          <div key={post._id} className="m-3 w-fit border border-solid border-gray-300 p-4 flex flex-wrap md:flex-nowrap">
            <div className="mb-4 mr-4 flex-shrink-0">
              {post.Image ? (
              <img src={`http://localhost:3000${post.Image}`} alt="" className="max-w-xs mb-2" />
              ) : (
              <></>
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold">{post.Title}</h2>
              <p className="text-gray-700">{post.Summary}</p>
              <Link
                to={`/post/${post._id}`}
                className="bg-blue-500 text-white font-semibold px-4 py-2 mt-4 inline-block hover:bg-blue-600 rounded"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}