import React from "react";
import { Link } from "react-router-dom";

export function Home(){
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
        </div>
      );
}