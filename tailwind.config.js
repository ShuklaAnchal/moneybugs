/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "10rem",  // desktop default
          "2xl": "10rem",
          xl: "6rem",
          lg: "4rem",
          md: "2rem",
          sm: "1rem",
          xs: "0.5rem",       // your custom xs breakpoint
          xxs: "0.25rem",     // your custom xxs breakpoint
        },
        screens: {
          xxs: "100px",
          xs: "420px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1512px",
        },
      },
      colors: {
        primary: "#ff494A",
        texthearder: "#83888B",
        textsecondry: "#797979",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
