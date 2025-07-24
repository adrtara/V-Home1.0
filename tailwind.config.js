/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Font personalizzati
        'dm-serif-text': ['DM Serif Text', 'serif'],
        'zain': ['Zain', 'sans-serif'],
        
        // Override dei font di default per renderli più sottili
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};