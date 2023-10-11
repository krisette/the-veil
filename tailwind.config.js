/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './ui/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['Inconsolata_400Regular'],
        inconsolataBold: ['Inconsolata_700Bold'],
        spectral: ['Spectral_400Regular'],
        spectralBold: ['Spectral_700Bold'],
        libreBaskerville: ['LibreBaskerville_400Regular'],
        libreBaskervilleBold: ['LibreBaskerville_700Bold'],
      },
      colors: {
        backgroundDark: '#1C1C1C',
        secondaryBackgroundDark: '#292929',
        tertiaryBackgroundDark: '#756D82',
        defaultDark: '#F0F0F0',
        primaryDark: '#B8860B',
        secondaryDark: '#D1A9B7',
        tertiaryDark: '#D8D4DC',
        error: '#B67267',
        success: '#89A97D',
        outlineDark: '#55555F',
        background: '#FDF6F0',
        secondaryBackground: '#F7F7F7',
        tertiaryBackground: '#E0DBE3',
        default: '#5A534F',
        primary: '#B1810B',
        secondary: '#5A534F',
        tertiary: '#635A5F',
      },
    },
  },
  plugins: [],
};
