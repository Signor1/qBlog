import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);

  const msg = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      msg.current.classList.remove("invisible");
    } else {
      msg.current.classList.add("invisible");
      setIsPending(true);
      setEmail("");

      setTimeout(() => {
        setIsPending(false);
      }, 3000);
    }
  };

  return (
    <footer className=" mt-32 border-t-2 border-gray-200 bg-gray-300">
      <section className="md:px-2 mx-3 md:py-28 py-10 grid lg:grid-cols-2 content-start md:gap-16">
        <div className="col-span-1 flex flex-col gap-8">
          <h1 className="capitalize text-2xl text-gray-800 font-serif font-light">
            Send Me News
          </h1>
          <form className="relative" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="peer block w-full h-14 pl-3 pr-32 py-2 bg-gray-200 border border-slate-400 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none  focus:ring-1 focus:ring-gray-600 focus:invalid:ring-red-600 invalid:text-red-600 transition-all duration-200"
            />
            <p
              ref={msg}
              class="mt-2 invisible peer-invalid:visible transition duration-200 text-red-600 text-sm"
            >
              Please provide a valid email address.
            </p>

            {!isPending && (
              <button className="absolute right-3 cursor-pointer rounded bg-gray-800 hover:bg-gray-900 hover:shadow-md text-white transition-all duration-300 py-2 px-3 z-20 top-2 flex items-center gap-2">
                <span>Subscribe</span>
                <i class="ri-send-plane-line"></i>
              </button>
            )}

            {isPending && (
              <button className="absolute right-3 cursor-pointer rounded bg-gray-800 hover:bg-gray-900 hover:shadow-md text-white transition-all duration-300 py-2 px-4 z-20 top-2 group flex items-center gap-0">
                <i class="ri-loader-4-line animate-spin relative top-3"></i>
                <span>Sending...</span>
              </button>
            )}
          </form>
        </div>

        <div className="col-span-1 self-center grid grid-cols-2 md:grid-cols-3 md:gap-12 justify-items-center lg:justify-items-start gap-6">
          <div className="flex flex-col justify-start items-start">
            <h1 className="capitalize text-2xl text-gray-800 font-serif font-light mb-3">
              Content
            </h1>
            <ul className="list-none">
              <li>
                <Link
                  to="/blog"
                  className="font-roboto hover:underline transition-all duration-200 hover:ml-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className="font-roboto hover:underline transition-all duration-200 hover:ml-1"
                >
                  Books
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start">
            <h1 className="capitalize text-2xl text-gray-800 font-serif font-light mb-3">
              Company
            </h1>
            <ul className="list-none">
              <li>
                <Link
                  to="/about"
                  className="font-roboto hover:underline transition-all duration-200 hover:ml-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="font-roboto hover:underline transition-all duration-200 hover:ml-1"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start">
            <h1 className="capitalize text-2xl text-gray-800 font-serif font-light mb-3">
              Social
            </h1>
            <ul className="list-none">
              <li>
                <Link
                  to="/"
                  className="font-roboto hover:underline transition-all duration-200 hover:ml-1"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-roboto hover:underline transition-all duration-200 hover:ml-1"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-roboto hover:underline transition-all duration-200 hover:ml-1"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-roboto hover:underline transition-all duration-200 hover:ml-1"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col gap-4 md:gap-0 md:justify-between justify-center items-center pb-8 px-8">
        <Link
          to="/"
          className="font-bold text-3xl md:text-3xl text-gray-900 font-serif focus:outline-none"
        >
          Q.
          <span className="font-bold text-gray-800 font-whisper italic">
            Blog
          </span>
        </Link>

        <p className="font-roboto text-gray-800 text-sm md:text-md">
          &copy;2022 Q.Studio By Signor. All Rights Reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
