/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}","./ui/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata_400Regular"],
        inconsolataBold: ["Inconsolata_700Bold"],
        spectral: ["Spectral_400Regular"],
      },
    },
  },
  plugins: [],
}

