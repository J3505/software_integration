/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        'baseP':'0px',
        'minP': '360px',
        'maxP': '1800px'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

