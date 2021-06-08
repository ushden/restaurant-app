module.exports = {
	// mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				rest: "url('/images/bg.png')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
