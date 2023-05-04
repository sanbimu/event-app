/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
      },
      boxShadow: {
        custom: '4px 4px 0px rgb(213, 193, 174)',
      },
      colors: {
        background: '#F3ECE8',
        black: '#1E1E1E',
        'dark-grey': '#323030',
        beige: '#D5C1AE',
        'beige-muted': '#DFD1C3',
        aubergine: '#6F4B4F',
        pink: '#D48F84',
        'dark-pink': '#B67668',
        'dark-pink-muted': '#BE857A',
        'dark-pink-transparent': '#E4BDB6',
        orange: '#CB730D',
        'orange-muted': '#D99C59',
        brown: '#6A563F',
        'brown-muted': '#8B7C69',
        facebook: '#405A93',
      },
      fontFamily: {
        franklin: ['libre-franklin', 'sans-serif'],
        fields: ['fields-display', 'sans-serif'],
        fromage: ['fromage', 'sans-serif'],
      },
      screens: {},
    },
  },
  plugins: [],
  important: true,
};
