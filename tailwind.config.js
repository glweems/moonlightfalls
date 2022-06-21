const themes = require("daisyui/src/colors/themes");
const theme = require("daisyui/src/colors/themes")["[data-theme=emerald]"];
console.log("theme: ", theme);
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: 0,
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        emerald: {
          ...themes["[data-theme=dark]"],
          primary: "#b29e59",
        },
        dark: { ...themes["[data-theme=dark]"], primary: "#b29e59" },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    theme: "dark",
    // darkTheme: "dark",
  },
};
