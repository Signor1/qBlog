import React, { useRef } from "react";
import Slider from "react-slick";
import { Link, useLocation } from "react-router-dom";
// import { Books } from "./BooksData";

const BestSeller = ({ books, title }) => {
  const location = useLocation();
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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
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
    <section className="md:px-2 mt-32" data-aos="zoom-in">
      {/* Display of article posts  */}
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-center py-8 border-y-2 mx-3">
        <h1 className="font-light text-gray-800 font-serif text-2xl md:text-3xl lg:text-4xl  border-gray-400 uppercase">
          {title}
          <span class="h-3 w-3 ml-2 animate-bounce inline-block relative rounded-full bg-gray-700">
            <span className="absolute w-full h-full inline-block -z-10 animate-ping bg-gray-600 rounded-full"></span>
          </span>
        </h1>
        {location.pathname === "/" ? (
          <Link to="/books" className="underline text-sm uppercase">
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

      {/* Books Display  */}
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {/* First  */}

        {books.slice(9, 15).map((book) => (
          <div className="md:px-4 h-auto flex flex-col px-8 transition-all duration-300">
            <div className="w-full h-book" key={book.id}>
              <img
                src={book.image}
                alt="Blog Image1"
                className="w-full h-full object-center"
                loading="lazy"
              />
            </div>

            <h1 className="font-bold text-gray-800 md:text-xl text-lg capitalize tracking-wide font-serif py-3">
              {book.title.length > 15
                ? book.title.slice(0, 15) + "..."
                : book.title}
            </h1>
            <p className="uppercase text-xs text-gray-500">By {book.author}</p>
            <Link
              to={`/books/${book.id}`}
              className="font-light font-roboto text-md px-4 py-4 text-center block border-2 border-gray-800 mt-3 hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              View
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BestSeller;
