/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': 'Inter',
      },
      colors: {
        gray: {
          '100': '#f2f2f2',
          '200': '#d9d9d9',
          '300': '#808080',
          '400': '#333333',
          '500': '#262626',
          '600': '#1a1a1a',
          '700': '#0d0d0d',
        },
        purple: '#8284fa',
        purpleDark: '#5e60ce',
        blue: '#4ea8de',
        blueDark: '#1e6f9f',
        danger: '#e25858'
      },
    },
  },
  plugins: [],
}