/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        anybody: ['anybody-regular', 'sans-serif'],
        jakartaRegular: ['jakarta-regular', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '9rem' }],
      },
      colors: {
        detDark: {
          300: '#cadbe1',
          400: '#89a2ab',
          500: '#59727b',
          600: '#344951',
          700: '#142126',
          800: '#091417',
        },
        agave: {
          100: '#f4f4fc',
          200: '#e6f0f4',
          300: '#cadbe1',
          400: '#89a2ab',
          500: '#59727b',
          600: '#344951',
          700: '#142c39',
          800: '#142126',
          900: '#091417',
        },
        limon: {
          100: '#fafbea',
          200: '#ebevbb',
          300: '#e6e98e',
          400: '#cfd526',
          500: '#b8c60e',
          600: '#a7ad13',
          700: '#777f0b',
          800: '#5e6605',
          900: '#464c02',
        },
        granada: {
          50: '#fafbea',
          100: '#ebevbb',
          300: '#e6e98e',
          500: '#b8c60e',
          700: '#777f0b',
          900: '#464c02',
        },
      },
    },
  },
  plugins: [],
};
