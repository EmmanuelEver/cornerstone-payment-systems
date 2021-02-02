module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#AB5F39",
        secondary: {
          100: "#5F5F5F", //grey body text
          200: "#8F8F8F", //grey footer text
          300: "#363636", //grey bg 
        },
      },
      fontFamily: {
        primary : ["Lato",]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
