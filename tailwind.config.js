/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        textColorBlack: "rgba(0, 0, 0, 1)",
        textColorBlue: "rgba(33, 80, 254, 1)",
      },

      fontFamily: {
        body: ['"Hanken Grotesk"', "sans-serif"],
      },

      backgroundImage: {
        sectionOneDiv2: "url('/Section-One-Assets/Rectangle 1.png')",
      },
    },
  },
  plugins: [],
};
