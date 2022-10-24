import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Blogs } from "../Data";

const BlogDetails = () => {
  const { id } = useParams();
  const idNum = parseInt(id);

  const [isPending, setIsPending] = useState(true);

  setTimeout(() => {
    setIsPending(false);
  }, 3000);

  //Using filter Array method to pick only the id of an object in the array that matches the id in the url parameter
  const data = Blogs.filter((Blog) => Blog.id === idNum);

  //Picking arrays that doesn't have the id found in the parameter
  const other = Blogs.filter((Blog) => Blog.id !== idNum);

  return (
    <section className="mt-28">
      {isPending ? (
        <div className="flex justify-center items-center h-96">
          <h1 className="font-bold text-center text-gray-800 font-roboto text-xl md:text-2xl lg:text-3xl mx-2 uppercase">
            Loading
            <span class="h-3 w-3 ml-3 animate-bounce inline-block relative rounded-full bg-gray-700">
              <span className="absolute w-full h-full inline-block -z-10 animate-ping bg-gray-600 rounded-full"></span>
            </span>
            <span class="h-3 w-3 ml-3 animate-bounce inline-block relative rounded-full bg-gray-700">
              <span className="absolute w-full h-full inline-block -z-10 animate-ping bg-gray-600 rounded-full"></span>
            </span>
            <span class="h-3 w-3 ml-3 animate-bounce inline-block relative rounded-full bg-gray-700">
              <span className="absolute w-full h-full inline-block -z-10 animate-ping bg-gray-600 rounded-full"></span>
            </span>
          </h1>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 lg:px-3 gap-6 px-2 ">
          <div
            className="lg:col-span-2 h-auto pb-8 md:pb-0 px-2 md:px-3"
            data-aos="fade-up"
            key={data[0].id}
          >
            <h1 className="font-bold md:text-3xl lg:text-4xl text-2xl text-gray-800 font-serif md:py-8 py-4 tracking-wide">
              {data[0].title}
            </h1>

            <div className="w-full md:h-img h-80">
              <img
                src={data[0].image}
                alt="Blog Image1"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-center py-4 px-2">
              <p className="uppercase text-xs text-gray-500">{data[0].time}</p>
            </div>

            <h4 className="font-light text-gray-800 md:text-2xl text-xl capitalize tracking-wide font-roboto py-3">
              {data[0].description}
            </h4>
            <p className="font-roboto text-justify tracking-wider">
              {data[0].body}
            </p>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-4 pt-2 md:pt-0">
            <h1 className="font-bold md:text-2xl lg:text-3xl text-xl text-gray-800 font-roboto lg:mt-40 md:pb-6 pb-3 tracking-wide">
              Related Posts
            </h1>

            {other.slice(0, 7).map((blog) => (
              <Link
                to={`/blogs/${blog.id}`}
                className="w-full h-auto group transition-all duration-300 grid grid-cols-3 gap-2 md:gap-4 lg:gap-2"
                key={blog.id}
              >
                <div className="w-full h-24 col-span-1">
                  <img
                    src={blog.image}
                    alt="Blog Image2"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-2 group-hover:underline gap-1 md:gap-0 px-1">
                  <p className="uppercase text-xs text-gray-500 lg:pb-1">
                    {blog.time}
                  </p>
                  <h1 className="font-bold text-gray-800 text-sm md:text-xl lg:text-sm capitalize font-serif">
                    {blog.title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogDetails;
