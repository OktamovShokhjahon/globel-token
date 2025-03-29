/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      nav: "1140px",
      xl: "1280px",
      nxl: "1350px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('./public/images/banner.png')",
        hero2: "url('./public/images/banner-2.png')",
        hero3: "url('./public/images/banner-3.png')",
      },
    },
  },
  plugins: [],
};
