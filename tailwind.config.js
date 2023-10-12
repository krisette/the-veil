/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require('./colors');

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
      colors,
    },
  },
  plugins: [],
};
