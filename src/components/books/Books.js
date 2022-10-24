import React from "react";
import BestSeller from "../BestSeller";
import { Books as ListofBooks } from "../BooksData";
import BookLists from "./BookLists";
const Books = () => {
  return (
    <div className="mt-28">
      <h1
        className="font-bold md:text-5xl lg:text-8xl text-4xl text-gray-800 font-serif pl-4 -mb-20"
        data-aos="zoom-in"
      >
        Books
      </h1>
      {/* Adding BestSeller's component  */}
      <BestSeller books={ListofBooks} title="Best sellers of the month" />
      <BookLists />
    </div>
  );
};

export default Books;
