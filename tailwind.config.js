/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        whisper: ["Whisper"],
        roboto: ["Roboto"],
      },
      height: {
        pseudo: "0.15rem",
        card: "700px",
        img: "450px",
        cardsm: "200px",
        article: "250px",
        book: "320px",
        bkcard: "500px",
      },
      width: {
        pseudo: "0.15rem",
      },
      colors: {
        brown: "#b5734c",
      },
      fontSize: {
        xxs: ["0.55rem", { lineHeight: "1rem" }],
      },
    },
  },
  plugins: [],
};
