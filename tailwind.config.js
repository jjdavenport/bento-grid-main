import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}", "./index.html"],
    extract,
  },
  theme: {
    screens,
    extend: {
      fontSize: {
        twoFour: ["clamp(1.5rem, 0.38rem + 2.34vw, 2.25rem)"],
        threeFour: ["clamp(1.875rem, 1.313rem + 1.172vw, 2.25rem)"],
      },
      fontFamily: {
        custom: ["dm sans", "sans-serif"],
      },
      colors: {
        purple100: "hsl(254, 88%, 90%)",
        purple500: "hsl(256, 67%, 59%)",
        yellow100: "hsl(31, 66%, 93%)",
        yellow500: "hsl(39, 100%, 71%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 7%)",
        main: "hsl(0, 0%, 96%)",
      },
    },
    fontFamily: {
      custom: ["dm sans", "sans-serif"],
    },
  },
  plugins: [fluid],
};
