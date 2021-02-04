module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				xxl: '1440px'
			},
			backgroundImage: () => ({
				'solutions-lg': "url('/public/credit-card-on-hand-lg.png')",
				'solutions-sm': "url('/public/credit-card-on-hand-sm.png')",
				'mhctp-sm':
					"url('/public/mother-helping-children-to-paint-sm.png')",
				'mhctp-lg': "url('/public/mother-helping-children-to-paint-lg.png')"
			}),
			colors: {
				primary: '#AB5F39',
				secondary: {
					100: '#5F5F5F', //grey body text
					200: '#8F8F8F', //grey footer text
					300: '#363636' //grey bg
				},
				tertiary: {
					100: '#FAFAFC', // Homepage light blue color
					200: '#F0EFEA'
				},
				quad: '#AB5F39' // Brown bg
			},
			fontFamily: {
				primary: ['Lato']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
