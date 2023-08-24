/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-ash' : '#1B1B1B',
        'my-green': '#0CE85D',
        'my-gray': '#79878D',
      },
      animation: {
        'shadow-pulse': 'pulse 8s cubic-bezier(0.4, 0, 0.7, 1) infinite', 
      },
      fontFamily: {
        ubuntu: ['Ubuntu']
      }

    },
  },
  plugins: [],
}