/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-gray': '#F6F6F6',
        silver: '#C7CBD1',
        'mid-gray': '#8B9097',
        charcoal: '#3B3E42',
        'text-main': '#4A4A4A',
        border: '#E5E7EB',
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
