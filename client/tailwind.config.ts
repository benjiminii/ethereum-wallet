/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        background: "url('/background.png')",
      }),
      colors: {
        main1: "#080808",
        main2: "#131313",
        neon: "#68ff5b",
        pink1: "#d36492",
        green1: "#5ada86",

        dark: "#131313",
        saaral: "#e6e6e6",
      },
    },
  },
  plugins: [require("daisyui")],
};
