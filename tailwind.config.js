module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#AB5F39",
        secondary: {
          50: "#F8F8F8",
          100: "#5F5F5F", //grey body text
          200: "#8F8F8F", //grey footer text
          300: "#363636", //grey bg 
          400: "#838383",
          500: "#BCBCBC",
          600: "#343434",
          700: "#C4C4C4",
          800: "#DCDCDC",
        },
        tertiary: {
					100: '#FAFAFC', // Homepage light blue color
					200: '#F0EFEA'
				},
				quad: '#AB5F39' // Brown bg
      },
      fontFamily: {
        primary : ["Lato",]
      },
      fontSize: {
        '3.5xl': ['2rem', { lineHeight: '2.375rem' }],
      },
      screens:{
        xxl: '1440px',
      },
      backgroundImage:{
        "hero-sm" : "url(../images/home-hero-bg-sm.jpg)",
        hero: "url(../images/home-hero-bg.jpeg)",
         "about-hero-sm" : "url(../images/about-hero-bg-sm.png)",
        "about-hero": "url(../images/about-hero-bg.jpeg)",
        'solutions-lg': "url('../images//credit-card-on-hand-lg.png')",
				'solutions-sm': "url('../images//credit-card-on-hand-sm.png')",
				'mhctp-sm':
					"url('../images//mother-helping-children-to-paint-sm.png')",
				'mhctp-lg': "url('../images//mother-helping-children-to-paint-lg.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
