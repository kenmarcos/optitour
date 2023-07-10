/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#DDD5EA",
          primary: "#590BD8",
          dark: "#312A4F",
        },
        gray: {
          light: "#F5F5F5",
          primary: "#BBBFBF",
          dark: "#717171",
        },
        red: {
          primary: "#FE3838",
        },
      },
      backgroundImage: {
        hero: "url(/world-map.png)",
      },
    },
  },
  plugins: [],
};
