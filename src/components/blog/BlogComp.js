import React from "react";
import { Link } from "react-router-dom";

const BlogComp = ({ title, data }) => {
  return (
    <section className="md:px-2 mt-32">
      {/* Display of article posts  */}
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-center py-8 border-y-2 mx-3">
        <h1 className="font-light text-gray-800 font-serif text-2xl md:text-3xl lg:text-4xl  border-gray-400 uppercase">
          {title}
          <span class="h-3 w-3 ml-2 animate-bounce inline-block relative rounded-full bg-gray-700">
            <span className="absolute w-full h-full inline-block -z-10 animate-ping bg-gray-600 rounded-full"></span>
          </span>
        </h1>
      </div>

      {data && (
        <main className="flex flex-col gap-14 w-full px-4 lg:mt-12 md:mt-8 mt-6">
          {/* First Article  */}
          {data.map((blog) => (
            <div
              className="grid md:grid-cols-3 md:gap-8 lg:gap-12 gap-6 w-full"
              data-aos="fade-up"
              key={blog.id}
            >
              <div className="md:h-article h-80 md:col-span-1">
                <img
                  src={blog.image}
                  alt="data Image1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="md:col-span-2 block self-center">
                <p className="uppercase text-xs text-gray-500">{blog.time}</p>
                <h1 className="font-bold text-gray-800 md:text-xl lg:text-2xl text-lg capitalize tracking-wide font-serif py-3">
                  {blog.title}
                </h1>
                <p className="font-roboto text-justify tracking-wide">
                  {blog.description}
                </p>

                <Link
                  to={`/blogs/${blog.id}`}
                  className='flex ml-4 text-gray-600 mt-4 group hover:text-gray-800 relative before:content[""] before:absolute before:h-full before:w-3 before:bg-gray-800 before:-left-4 hover:underline transition-all duration-300'
                >
                  <span>Read</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:ml-1 transition duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </main>
      )}
    </section>
  );
};

export default BlogComp;
