module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		backgroundPosition: {
			'corner-position': 'top -16px left -16px, top -16px right -16px, bottom -16px left -16px, bottom -16px right -16px',
		},
		extend: {
			keyframes: {
				'heart': {
					'100%': { transform: 'scale(1.2)' }
				}
			},
			animation: {
				'heart': 'heart .25s infinite alternate',
			},
			backgroundImage: {
				'corner-image': "url('/images/corner.webp'), url('/images/corner.webp'), url('/images/corner.webp'), url('/images/corner.webp')",
			}
		}
	},
	plugins: [],
}