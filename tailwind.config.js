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
        'title-black-60': '#635352',
        'title-black-87': '#34201F',
        'yellow-layout': '#F59A1B',
        'red-layout': '#F43127',
        'text-layout': '#1D0605E5',
      },
    },
  },
  plugins: [],
}

