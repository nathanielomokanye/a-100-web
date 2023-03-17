/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],

  plugins: [require('flowbite/plugin')],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      backgroundColor: {
        'main-bg': '#FFFFFF',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        primary: '#0066FF'
      },
      color: {
        gray1: '#333333',
        primary: '#0066FF',
        gray5: '#E0E0E0',
        gray3: '#828282'
      }
    }
  }
};
