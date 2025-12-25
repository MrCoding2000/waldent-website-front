/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#009975",
        },
        gray: {
          100: "#F5F5F5",
          150: "#F7F9FB",
          200: "#E0E0E0",
          850: "#222222",
        },
      },
    },
  },
  plugins: [],
}
