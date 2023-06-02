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
      },
      flexGrow: {
        "2": "2",
        "3": "3",
      },
      boxShadow:{
        "card": "1px 2px 10px 1px rgba(238, 51, 51, 0.5);"
      },
      backgroundColor:{
        "sidebar": "rgba(1, 1, 1, 0.85)"
      }
    },
  },
  plugins: [],
}
