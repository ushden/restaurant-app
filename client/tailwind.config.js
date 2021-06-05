module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			restOrange: '#FF651C',
			restDark: '#212121',
			restLight: '#AEAEAE',
			restGray: '#EEEEEE',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
