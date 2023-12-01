/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    theme: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
    },
    extend: {
      colors: {
        green1: "#C5D926",
        green2: "#A6CD8E",
        green3: "#26432F",
        gray1: "#3D3D3D",
        gray2: "#c3c3c3",
        bg: "#FBFEE1",
      },
    },
  },
  plugins: [],
};
