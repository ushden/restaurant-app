module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		boxShadow: {
			rest: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px #FF651C',
		},
		colors: {
			restOrange: '#FF651C',
			restDark: '#212121',
			restLight: '#AEAEAE',
			restGray: '#EEEEEE',
			restBg: '#F6F6F6',
			restWhite: '#FFFFFF',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
