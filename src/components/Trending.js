import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Link, useLocation } from "react-router-dom";
import { Blogs } from "./Data";

const Trending = () => {
  const location = useLocation();

  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);

  setTimeout(() => {
    setIsPending(false);
    setData(Blogs);
  }, 3000);

  const sliderRef = useRef();

  // Function for next button
  const next = () => {
    sliderRef.current.slickNext();
  };
  // function for previous button
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  // Slider settings
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="md:px-2 mt-32 px-3" data-aos="zoom-in">
      {/* Display of trending posts  */}
      <div className="flex justify-between items-center py-8 border-y-2 ">
        <h1 className="font-light text-gray-800 font-serif text-2xl md:text-3xl lg:text-4xl  border-gray-400 uppercase">
          Today's Trending
          <span class="h-3 w-3 ml-2 animate-bounce inline-block relative rounded-full bg-gray-700">
            <span className="absolute w-full h-full inline-block -z-10 animate-ping bg-gray-600 rounded-full"></span>
          </span>
        </h1>
        {location.pathname === "/" ? (
          <Link to="/blog" className="underline text-sm uppercase">
            View All
          </Link>
        ) : (
          " "
        )}
      </div>

      {/* Buttons for horizontals scroll  */}
      <div className="flex justify-between items-center py-8 px-8">
        <button
          onClick={previous}
          id="prev"
          className="bg-transparent border-none outline-none cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-white transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>

        <button
          onClick={next}
          id="next"
          className="bg-transparent border-none outline-none cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-white transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>

      {/* Trending blogs slides  */}

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
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {/* First  */}

          {data.slice(3, 9).map((blog) => (
            <div className="md:px-4 px-2" key={blog.id}>
              <div className="w-full md:h-cardsm h-80">
                <img
                  src={blog.image}
                  alt="Blog Image1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex justify-between items-center py-4 px-2">
                <p className="uppercase text-xs text-gray-500"> {blog.time}</p>
              </div>

              <h1 className="font-bold text-gray-800 md:text-xl text-lg capitalize tracking-wide font-serif py-3">
                {blog.title.length > 45
                  ? blog.title.slice(0, 45) + "..."
                  : blog.title}
              </h1>

              <Link
                to={`/blogs/${blog.id}`}
                className='flex ml-4 text-gray-600 mt-2 group hover:text-gray-800 relative before:content[""] before:absolute before:h-full before:w-3 before:bg-gray-800 before:-left-4 hover:underline transition-all duration-300'
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
          ))}
        </Slider>
      )}
    </section>
  );
};

export default Trending;
