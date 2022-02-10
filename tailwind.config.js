// for responsiveness added the max width screens from tailwind breakpoints

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#2A2A2A",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      "3xl": { max: "2535px" },
      // => @media (max-width: 1535px) { ... }
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },

  plugins: [],
};
