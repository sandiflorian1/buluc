/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/assets/images/main-bg.png')",
      },
      screens: {
        'mb': { 'raw': '(max-width: 700px)' },
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'orange': {
        light: '#67e8f9',
        DEFAULT: '#f6772b',
        dark: '#0e7490',
      },
      'red': {
        light: '#67e8f9',
        DEFAULT: '#f05252',
        dark: '#0e7490',
      },
      white: '#fdfdfb',
      black: '#000000',
    },
    fontSize: {
      sm: '1.04vw',
      base: '1.5625vw',
      xl: '1.3020vw',
      '2xl': '1.5625vw',
      '3xl': '2.0833vw',
      '4xl': '2.6041vw',
      '5xl': '3.125vw',
    },
  },
}
