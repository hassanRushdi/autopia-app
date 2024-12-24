/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-1": "#021407",
        "dark-2": "#0F2013",
        "primary": "#00E300",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
