module.exports = {
	// mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				rest: "url('/images/bg.png')",
			}),
			animation: {
				showCart: 'showCart 0.5s linear',
			},
			keyframes: {
				showCart: {
					'0%': { transform: 'translateX(50px)', opacity: '0' },
					'50%': { transform: 'translateX(25px)', opacity: '0.5' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
