import React, { useState, useEffect } from "react";
import { Blogs } from "../Data";
import BlogComp from "./BlogComp";
import ReactPaginate from "react-paginate";

const BlogLists = () => {
  // We start with an empty list of Blogs.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(Blogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(Blogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Blogs.length;
    setItemOffset(newOffset);
  };

  return (
    <main>
      <BlogComp title="Breaking News" data={currentItems} />

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center mt-24 md:gap-0 gap-1"
        pageLinkClassName="py-2 md:px-4 px-3 md:text-sm text-xs font-medium text-gray-900 bg-white border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
        previousLinkClassName="py-2 md:px-4 px-3 md:text-sm text-xs font-medium text-gray-900 bg-white border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
        nextLinkClassName="py-2 md:px-4 px-3 md:text-sm text-xs font-medium text-gray-900 bg-white border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
        activeLinkClassName="bg-gray-900 text-gray-100"
      />
    </main>
  );
};

export default BlogLists;
