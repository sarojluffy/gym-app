/** @type {import('tailwindcss').Config} */

// import dasda from "./public/photoes/EvolveText.png";
// import dasda from "./public/photoes/HomePageText.png";
// import dasda from "./public/photoes/image3";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },

      // the font family enlisted here can be selected and  used anytime and the font in indexedDB.css are the ones that are by default applied
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetxt: "url('/photoes/EvolveText.png') ",
        // abc: "url('/photoes/image3.png') ",
      },
    },
  },
  plugins: [],
};
