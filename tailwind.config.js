/** @type {import('tailwindcss').Config} */
module.exports = {
  /* corePlugins: {
    preflight: false,
  }, */

  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      "gm-black": "#1D2225",
      "gm-ash": "#2F2F2F",
      "gm-orange": "#B85332",
      "gm-beige": "#C6B58C",
      },
    },
  },
  plugins: [],
}

