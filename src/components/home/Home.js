import React from "react";
import Articles from "../Articles";
import BestSeller from "../BestSeller";
import { Books } from "../BooksData";
// import { Link } from 'react-router-dom'
import Latest from "../Latest";
import Trending from "../Trending";

const Home = () => {
  return (
    <div className="mt-20">
      {/* adding the latest component  */}
      <Latest />
      {/* Adding Trending component  */}
      <Trending />
      {/* Adding Article component  */}
      <Articles />
      {/* Adding the best sellers component  */}
      <BestSeller books={Books} title="Best sellers of the month" />
    </div>
  );
};

export default Home;
