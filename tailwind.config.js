/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "estilo": "#e33d33"
      },
      fontFamily:{
        ubuntu: ['Ubuntu', 'sans-serif']
      },
      backgroundImage:{
        'hero-background': "url('/src/assets/background.png')"
      },
      rotate:{
        "360": "360deg"
      }
    },
  },
  plugins: [],
}
