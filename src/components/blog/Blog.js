import React from "react";
import Trending from "../Trending";
import BlogLists from "./BlogLists";

const Blog = () => {
  return (
    <div className="mt-28">
      <h1
        className="font-bold md:text-5xl lg:text-8xl text-4xl text-gray-800 font-serif pl-4 -mb-20"
        data-aos="zoom-in"
      >
        Blog
      </h1>
      {/* Adding Trending component  */}
      <Trending />

      {/* Blog List component  */}
      <BlogLists />
    </div>
  );
};

export default Blog;
