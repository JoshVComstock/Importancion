/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9747FF",
        primary100: "rgba(151, 71, 255, 0.2)",
        secundary: "#99BEE8",
        secundary100: "#C2C5FB",
        danger: "#F4CBDF",
        customWhite: "#fff",
      },
    },
  },
  plugins: [],
};
