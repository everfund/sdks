const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './markdoc/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
        pj: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        quincy: ['Quincy CF', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: '#009681',
        'light-green': '#66D9A1',
        'light-blue': '#D8F1FF',
        blue: '#8AD4FF',
        navy: '#000F4D',
        gold: '#F5C266',
        ever: {
          DEFAULT: '#009681',
          50: '#4FFFE6',
          100: '#3AFFE3',
          200: '#11FFDE',
          300: '#00E8C7',
          400: '#00BFA4',
          500: '#009681',
          600: '#005E51',
          700: '#002621',
          800: '#000000',
          900: '#000000',
        },
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
