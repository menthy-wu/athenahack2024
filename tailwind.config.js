/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        athena: {
          // outer card border
          "gray-25": "#ECECEF",
          // inner card border
          "gray-50": "#DBDBE0",
          "gray-100": "#EFEFF2",
          "gray-200": "#E7E7EB",
          "gray-500": "#545454",
          "light-purple": "#F8EBFF",
          "bright-purple": "#CC7AFF",
          "pastel-purple": "#B080FF",
          "light-red": "#FFEBEB",
          red: "#FF7A7A",
        },
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
