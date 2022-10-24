import React from "react";
import { Link } from "react-router-dom";

const BooksComp = ({ title, books }) => {
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

      {books && (
        <main className="flex flex-col gap-14 w-full px-4 lg:mt-12 md:mt-8 mt-6">
          {/* First Article  */}
          {books.map((book) => (
            <div
              className="grid md:grid-cols-3 md:gap-8 lg:gap-12 gap-6 w-full"
              data-aos="fade-up"
              key={book.id}
            >
              <div className="md:h-article h-80 md:col-span-1">
                <img
                  src={book.image}
                  alt="books Image1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="md:col-span-2 block self-center">
                <p className="uppercase text-xs text-gray-500">{book.author}</p>
                <h1 className="font-bold text-gray-800 md:text-xl lg:text-2xl text-lg capitalize tracking-wide font-serif py-3">
                  {book.title}
                </h1>
                <p className="font-roboto text-justify tracking-wide mb-3">
                  {book.description.slice(0, 300)}...
                </p>

                <Link
                  to={`/books/${book.id}`}
                  className="font-light font-roboto text-sm px-8 py-3 text-center inline-block w-auto border-2 border-gray-800 mt-3 hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </main>
      )}
    </section>
  );
};

export default BooksComp;
