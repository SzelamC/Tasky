import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      green: {
        900: "#235C23",
        800: "#35853A",
        700: "#4AAD54",
        600: "#60D172",
        500: "#79F292",
        400: "#91FF8D",
        300: "#C2FFA8",
        200: "#E9FFC9",
        100: "#FEFFF2",
      },
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
