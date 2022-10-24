import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { animateScroll } from "react-scroll";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Blog from "./components/blog/Blog";
import Books from "./components/books/Books";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// importing AOS Files
import AOS from "aos";
import "aos/dist/aos.css";
import BlogDetails from "./components/blog/BlogDetails";
import BooksDetails from "./components/books/BooksDetails";

function App() {
  const directory = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);
  return (
    <div className="container mx-auto">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/books/:id">
          <BooksDetails />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact-us">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
AOS.init();
export default App;
