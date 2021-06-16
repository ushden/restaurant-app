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
				showAlert: 'showAlert 0.5s linear',
				hideAlert: 'hideAlert 0.5s linear',
			},
			keyframes: {
				showCart: {
					'0%': { transform: 'translateX(50px)', opacity: '0' },
					'50%': { transform: 'translateX(25px)', opacity: '0.5' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				showAlert: {
					'0%': { right: '-200px', opacity: '0' },
					'50%': { right: '-100px', opacity: '0.5' },
					'100%': { right: '0', opacity: '1' },
				},
				hideAlert: {
					'0%': { right: '0', opacity: '1' },
					'50%': { right: '100px', opacity: '0.5' },
					'100%': { right: '200px', opacity: '0' },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
