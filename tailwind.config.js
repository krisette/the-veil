/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./ui/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				inconsolata: ['Inconsolata_400Regular'],
				inconsolataBold: ['Inconsolata_700Bold'],
				spectral: ['Spectral_400Regular'],
			},
			colors: {
				background: '#1C1C1C',
				secondaryBackground: '#292929',
				tertiaryBackground: '#756D82',
				primary: '#B8860B',
				secondary: '#D1A9B7',
				tertiary: '#D8D4DC',
				error: '#B67267',
				success: '#89A97D',
			},
		},
	},
	plugins: [],
};
