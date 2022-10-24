import React, { useState, useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isPending, setIsPending] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
    }, 3000);
  };

  return (
    <div className="mt-28">
      <h1
        className="font-bold md:text-5xl lg:text-8xl text-4xl text-gray-800 font-serif pl-4"
        data-aos="zoom-in"
      >
        Contact Us
      </h1>

      <section
        aria-labelledby="map"
        class="grid lg:grid-cols-2 gap-6 md:px-8 px-3 mt-8"
      >
        <img
          src={require("../../img/map.png")}
          alt="Map"
          width="400"
          class="grow md:flex-1 justify-self-center"
          loading="lazy"
          data-aos="fade-right"
        />
        <div
          class="grid gap-4 text-center md:text-left grow md:flex-1"
          data-aos="fade-left"
        >
          <div class="relative text-gray-800">
            <div class="hidden md:block absolute w-8 bg-gray-300 -left-4 -z-10 h-full "></div>
            <small class="tracking-widest font-roboto text-accent uppercase">
              Information is power
            </small>
            <h2 id="map" class="text-3xl font-serif font-bold tracking-wide">
              Best Information Hub <br /> coming from all over the world
            </h2>
          </div>
          <p class="text-muted max-w-2xl text-justify font-roboto tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem at
            aliquid obcaecati expedita earum laboriosam impedit, laudantium
            dolore voluptatibus reprehenderit, tenetur consectetur! Atque,
            doloremque veniam? Minima maiores maxime est praesentium corrupti
            sit quia nostrum deserunt quisquam non consectetur, amet porro cum
            placeat vero animi debitis voluptatum inventore ipsum facilis nulla
            aut rerum ipsa necessitatibus. Laborum ea exercitationem
          </p>
        </div>
      </section>

      <h1 className="capitalize text-gray-800 font-bold font-serif mt-16 md:mt-28 text-center md:text-4xl text-2xl pb-12">
        Get in touch with us!
      </h1>
      <section className="grid md:grid-cols-3 gap-10 md:gap-0 md:justify-items-center py-4 lg:px-20">
        <div
          className="flex flex-col gap-3 justify-center text-gray-800 items-center"
          data-aos="fade-up"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <h3 className="font-bold font-roboto text-gray-800 uppercase">
            Phone
          </h3>
          <p className="text-gray-800 font-medium font-serif">
            Phone:{" "}
            <a href="javascript(0)" className="hover:underline">
              (+234)7067324566
            </a>
          </p>
          <p className="text-gray-800 font-medium font-serif">
            Phone:{" "}
            <a href="javascript(0)" className="hover:underline">
              (+233)9067324566
            </a>
          </p>
        </div>

        <div
          className="flex flex-col gap-3 justify-center px-6 md:border-x-2 md:border-gray-700 text-gray-800 items-center"
          data-aos="fade-up"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <h3 className="font-bold font-roboto text-gray-800 uppercase">
            address
          </h3>
          <p className="text-gray-800 font-medium text-center font-serif tracking-wide">
            Plot #34b Caster Road opposite Old Biza Factory by New Terrace Road,
            Ikeja, Lagos State.
          </p>
        </div>

        <div
          className="flex flex-col gap-3 justify-center text-gray-800 items-center"
          data-aos="fade-up"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <h3 className="font-bold font-roboto text-gray-800 uppercase">
            Email
          </h3>
          <a
            href="javascript(0)"
            className="hover:underline text-gray-800 font-medium font-serif"
          >
            information@qblog.com
          </a>
          <a
            href="javascript(0)"
            className="hover:underline text-gray-800 font-medium font-serif"
          >
            support@qblog.com
          </a>
        </div>
      </section>
      <section className="my-24 px-4 lg:px-0 md:px-16">
        <h2
          className="text-center lg:max-w-lg mx-autoverce text-gray-800 font-roboto text-xl md:text-2xl"
          data-aos="fade-up"
        >
          If you got any questions or inquiries ? Please do not hesitate to send
          us a message.
        </h2>

        {/* Contact form  */}
        <form
          className="mx-auto lg:w-2/4 mt-12"
          onSubmit={handleSubmit}
          ref={form}
        >
          <label
            for="name"
            class="block mb-2 text-md font-medium text-gray-700"
          >
            Your Name
          </label>
          <div class="relative mb-6">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-800 text-md rounded-lg focus:ring-gray-300 outline-none focus:border-gray-800 block w-full pl-10 p-2.5"
              placeholder="your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label
            for="email"
            class="block mb-2 text-md font-medium text-gray-700"
          >
            Your Email
          </label>
          <div class="relative mb-6">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-800 text-md rounded-lg focus:ring-gray-300 outline-none focus:border-gray-800 block w-full pl-10 p-2.5"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label
            for="subject"
            class="block mb-2 text-md font-medium text-gray-700"
          >
            Your Subject
          </label>
          <div class="relative mb-6">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="subject"
              class="bg-gray-50 border border-gray-300 text-gray-800 text-md rounded-lg focus:ring-gray-300 outline-none focus:border-gray-800 block w-full pl-10 p-2.5"
              placeholder="your subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <label
            for="message"
            class="block mb-2 text-md font-medium text-gray-700"
          >
            Your Message
          </label>
          <div class="relative mb-6">
            <div class="flex absolute left-0 top-3 items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
            </div>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 pl-10 w-full bg-gray-50 text-gray-800 text-md rounded-lg focus:ring-gray-300 border outline-none focus:border-gray-800"
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center uppercase mt-6"
          >
            {!isPending && <span>Send message</span>}
            {isPending && (
              <span className="flex items-center gap-0">
                <i class="ri-loader-4-line animate-spin relative top-3"></i>
                <span>Sending...</span>
              </span>
            )}
          </button>
        </form>
      </section>

      <section className="flex flex-col items-center gap-8">
        <h2
          className="text-center text-gray-800 capitalize text-xl md:text-3xl font-serif font-bold"
          data-aos="fade-down"
        >
          Connect with Us
        </h2>
        <ul className="flex gap-4" data-aos="fade-up">
          <li className="bg-gray-700 hover:bg-gray-900 transition duration-300 px-2 py-1 rounded-lg">
            <a href="javascript(0)" className="text-white">
              <i class="ri-instagram-line text-2xl"></i>
            </a>
          </li>
          <li className="bg-gray-700 hover:bg-gray-900 transition duration-300 px-2 py-1 rounded-lg">
            <a href="javascript(0)" className="text-white">
              <i class="ri-facebook-line text-2xl"></i>
            </a>
          </li>
          <li className="bg-gray-700 hover:bg-gray-900 transition duration-300 px-2 py-1 rounded-lg">
            <a href="javascript(0)" className="text-white">
              <i class="ri-linkedin-line text-2xl"></i>
            </a>
          </li>
          <li className="bg-gray-700 hover:bg-gray-900 transition duration-300 px-2 py-1 rounded-lg">
            <a href="javascript(0)" className="text-white">
              <i class="ri-youtube-line text-2xl"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
