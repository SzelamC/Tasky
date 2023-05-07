import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "homepage-pattern": "url('/homepage_bg.svg')",
      },
      minHeight: {
        "screen-h": "50vh",
      },
      fontFamily: {
        "open-sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
