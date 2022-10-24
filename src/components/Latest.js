import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Blogs } from "./Data";

const Latest = () => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);

  setTimeout(() => {
    setIsPending(false);
    setData(Blogs);
  }, 3000);

  return (
    <section className="md:px-2">
      {/* Displaying latest posts using grid layout  */}
      <h1 className="font-light text-gray-800 font-serif text-2xl md:text-3xl lg:text-4xl mx-2 py-8 border-b-2 border-gray-400 uppercase">
        Today's Headline
        <span class="h-3 w-3 ml-2 animate-bounce inline-block relative rounded-full bg-gray-700">
          <span className="absolute w-full h-full inline-block -z-10 animate-ping bg-gray-600 rounded-full"></span>
        </span>
      </h1>

      {isPending && (
        <div className="flex justify-center items-center h-60">
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
      )}

      {data && (
        <div className="grid md:grid-cols-3 lg:px-3 gap-6 px-2 ">
          <div
            className="md:col-span-2 h-auto pb-8 md:pb-0 border-b-2 md:border-r-2 border-gray-400 md:pr-6 border-r-0 md:border-b-0"
            data-aos="fade-up"
            key={data[0].id}
          >
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

            <h1 className="font-bold text-gray-800 md:text-3xl text-2xl capitalize tracking-wide font-serif py-3">
              {data[0].title}
            </h1>
            <p className="font-roboto text-justify tracking-wide">
              {data[0].description}
            </p>
            <Link
              to={`/blogs/${data[0].id}`}
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

          <div className="col-span-1 flex md:flex-col flex-row gap-4 md:gap-6 pt-2 md:pt-0">
            <div className="w-full h-auto " data-aos="fade-up" key={data[1].id}>
              <div className="w-full h-52">
                <img
                  src={data[1].image}
                  alt="Blog Image2"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-1 md:gap-0 py-2 px-1">
                <p className="uppercase text-xs text-gray-500">
                  {data[1].time}
                </p>
              </div>

              <h1 className="font-bold text-gray-800 text-md capitalize font-serif py-1">
                {data[1].title}
              </h1>
              <p className="font-roboto text-justify text-sm hidden md:block">
                {data[1].description}{" "}
              </p>
              <Link
                to={`/blogs/${data[1].id}`}
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

            <div className="w-full h-auto" data-aos="fade-up" key={data[2].id}>
              <div className="w-full h-52">
                <img
                  src={data[2].image}
                  alt="Blog Image2"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-1 md:gap-0 py-2 px-1">
                <p className="uppercase text-xs text-gray-500">
                  {data[2].time}
                </p>
              </div>

              <h1 className="font-bold text-gray-800 text-md capitalize font-serif py-1">
                {data[2].title}
              </h1>
              <p className="font-roboto text-justify text-sm hidden md:block">
                {data[2].description}{" "}
              </p>
              <Link
                to={`/blogs/${data[2].id}`}
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
        </div>
      )}
    </section>
  );
};

export default Latest;
