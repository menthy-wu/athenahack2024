/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [ "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
 
  theme: {
    extend: {
      colors: {
        athena: {
          "gray-100": "#EFEFF2",
          "gray-200": "#E7E7EB",
          "gray-400": "#7F7F7F",
          "gray-500": "#545454",
          "light-purple":"#F8EBFF",
          "bright-purple": "#CC7AFF",
          "dark-purple":"#B080FF",
          "light-red":"#FFEBEB",
          red: "#FF7A7A",
          blue: "#30C1FF"
        },
      },
      fontFamily: {
        
      },

    },
  },
  plugins: [],
}

