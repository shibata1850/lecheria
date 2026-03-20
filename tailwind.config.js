/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-gray': '#F8F7F5',
        silver: '#C7CBD1',
        'mid-gray': '#8B9097',
        charcoal: '#2E2E2E',
        'text-main': '#3A3A3A',
        border: '#E8E6E3',
        gold: '#B8965A',
        'gold-light': '#D4B87C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Serif JP"', 'Georgia', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
};
