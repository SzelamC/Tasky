import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
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
