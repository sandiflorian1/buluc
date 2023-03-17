/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/assets/images/main-bg.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
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
        DEFAULT: '#c7362c',
        dark: '#0e7490',
      },
      white: '#ffffff',
    },
    fontSize: {
      sm: '1rem',
      base: '1.5rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}
