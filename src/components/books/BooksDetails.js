import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BestSeller from "../BestSeller";
import { Books } from "../BooksData";

const BooksDetails = () => {
  const { id } = useParams();
  const idNum = parseInt(id);

  const [isPending, setIsPending] = useState(true);

  setTimeout(() => {
    setIsPending(false);
  }, 3000);

  //Using filter Array method to pick only the id of an object in the array that matches the id in the url parameter
  const data = Books.filter((Blog) => Blog.id === idNum);

  //Picking arrays that doesn't have the id found in the parameter
  const other = Books.filter((Blog) => Blog.id !== idNum);

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
        <main>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-12 md:gap-6 lg:px-16 md:px-6 px-4">
            <div className="lg:col-span-1">
              <img
                src={data[0].image}
                alt="Blog Image1"
                className="w-full h-full object-center"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-2">
              <h1 className="font-bold font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide py-4 md:pb-4 lg:py-4 md:py-0 text-gray-800 ">
                {data[0].title}
              </h1>
              <p className="font-light font-roboto text-gray-800 uppercase mb:pb-12 pb-8">
                - By {data[0].author}
              </p>
              <a
                href="#/"
                className="inline-block px-4 py-3 bg-gray-800 hover:bg-gray-900 transition duration-300 text-white w-auto lg:mb-12 mb-8"
              >
                <i class="ri-download-2-line mr-1"></i>
                Download
              </a>
              <h3 className="font-bold font-serif uppercase text-xl tracking-wider pb-4 text-gray-800">
                Description
              </h3>
              <p className="font-light font-roboto text-gray-800 tracking-wider text-justify">
                {data[0].description}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-12 md:gap-6 lg:px-16 md:px-6 px-4 pt-6">
            <div className="lg:col-span-2">
              <h3 className="font-bold font-serif uppercase text-xl tracking-wider pb-4 text-gray-800">
                Summary
              </h3>
              <p className="font-light font-roboto text-gray-800 tracking-wider text-justify">
                {data[0].summary}
              </p>
            </div>
            <div className="lg:col-span-1">
              <h3 className="font-bold font-serif uppercase text-xl tracking-wider pt-6 md:pt-0 pb-4 text-gray-800">
                Product Details
              </h3>
              <ul className="list-none text-gray-800">
                <li className="font-light mb-1">
                  Publisher:
                  <span className="font-semibold font-serif ml-2">
                    {data[0].publisher}
                  </span>
                </li>
                <li className="font-light mb-1">
                  Released Date:
                  <span className="font-semibold font-serif ml-2">
                    {data[0].published_At}
                  </span>
                </li>
                <li className="font-light mb-1">
                  Pages:
                  <span className="font-semibold font-serif ml-2">
                    {data[0].pages}
                  </span>
                </li>
                <li className="font-light mb-1">
                  Languages:
                  <span className="font-semibold font-serif ml-2">
                    {data[0].languages}
                  </span>
                </li>
                <li className="font-light mb-1">
                  Format:
                  <span className="font-semibold font-serif ml-2">
                    {data[0].format}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      )}
      <BestSeller books={other} title="Other Related Books" />
    </section>
  );
};

export default BooksDetails;
