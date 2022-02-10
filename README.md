for screen responsiveness add this max width breakpoints in tailwind.config.js below extend and inside theme.
screens: {
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

In this project I have used react-router-dom version 6.

Footer and header components comes into layout and the body comes into layout as children props and displayed between the header and footer components in layout.

for nav I have added a md:hidden , max: "767px" so below 767px screens the nav items will be hidden
