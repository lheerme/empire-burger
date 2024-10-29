/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'lilita-one': ['Lilita One', 'sans-serif']
      },
      colors: {
        'title-black-87': '#34201F',
        'title-black-60': '#635352',
        'title-black-38': '#1D0605',
        'yellow-layout': '#F59A1B',
        'red-layout': '#F43127',
        'beige': '#FAE4D0',
        'brown': '#3B200B',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'scroll-left-slow': 'scroll-left 30s linear infinite',
        'scroll-left-fast': 'scroll-left 10s linear infinite',
      }
    },
  },
  plugins: [],
}

