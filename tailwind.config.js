/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "serif"],
      overlock: ["Overlock", "serif"],
    },
    extend: {
      colors: {
        primary: "#E85489",
        grey: "#F8F8F8",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Default padding
          sm: "1rem", // Padding for small screens
          md: "0rem", // Padding for medium screens
          lg: "0rem", // Padding for large screens
          xl: "0rem", // Padding for extra-large screens
        },
        screens: {
          sm: "100%", // Full width for small screens
          md: "100%", // Full width for medium screens
          lg: "1024px", // Width for large screens
          xl: "1240px", // Max width for extra-large screens
        },
      },
      animation: {
        rotate: "spin 5s linear infinite", // Clockwise rotation
        "reverse-rotate": "reverseSpin 5s linear infinite", // Counterclockwise rotation
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        reverseSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
