/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "custom-main": "#544a89",
        "custom-secondary": "#F7931A",
        "custom-grey": "#dbdbdb",
        "custom-floppy": "#7dfc7b",
        "custom-footer": '#383838'
        // "custom-yellow": "#F9D533",
        // "custom-grey": "#F5F5F5",
        // "custom-grey-dark": "#707070",
        // "custom-grey-text": "#AFAFAF",
        // // "custom-grey-sub-text": "#B7B7B7"
      },
      fontSize: {
        'custom-xsm': '0.4rem',
        'custom-sm': '0.5rem',
        'custom-sm-1': '0.6rem',
        'custom-sm-2': '0.7rem',
        'custom-sm-3': '0.8rem',
        'custom-sm-4': '0.9rem',

      },
    },
  },
  plugins: [],
};

