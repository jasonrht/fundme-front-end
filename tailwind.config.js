module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx}"]
}
