// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    content: ['./src/**/*.js'],
    options: {
      defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
    },
  },
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['visby', ...defaultTheme.fontFamily.sans],
      },
      colors: {

        coral: {
          light: '#FF6070',
          default: '#FF4154',
          dark: '#EB2135',
        },
        heart: {
          50: '#FEF7F7',
          100: '#FDEFF0',
          200: '#F9D7D9',
          300: '#F5BFC2',
          400: '#EE8F94',
          500: '#E65F66',
          600: '#CF565C',
          700: '#8A393D',
          800: '#682B2E',
          900: '#451D1F',
        },
        buttercup: {
          100: '#FEF7E6',
          200: '#FDEBBF',
          300: '#FBDF99',
          400: '#F8C84D',
          500: '#F5B000',
          600: '#DD9E00',
          700: '#936A00',
          800: '#6E4F00',
          900: '#4A3500',
        },
        lilac: {
          100: '#F9F4F9',
          200: '#EFE4F0',
          300: '#E6D4E7',
          400: '#D3B4D5',
          500: '#C094C3',
          600: '#AD85B0',
          700: '#735975',
          800: '#564358',
          900: '#3A2C3B',
        },
        monty: {
          100: '#F1F9F8',
          200: '#DDF1EE',
          300: '#C8E8E4',
          400: '#9ED6CF',
          500: '#75C5BB',
          600: '#69B1A8',
          700: '#467670',
          800: '#355954',
          900: '#233B38',
        },

        "leafy": {
          "100": "#f2fdfa",
          "200": "#9feedd",
          "300": "#51e1c2",
          "400": "#1fb292",
          "500": "#116452",
          "600": "#0e5344",
          "700": "#0c4639",
          "800": "#0a382e",
          "900": "#082b24"
        },
        ivy: "#011410",
        sunny: {
          "50": "#fffdfa",
          "100": "#fefaf0",
          "200": "#fef3d8",
          "300": "#fdebbf",
          "400": "#fce4a6",
          "500": "#fbdc8e",
          "600": "#f8c23a",
          "700": "#d99e08",
          "800": "#856105",
          "900": "#312402"
        }
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },
    rotate: {
      ...defaultTheme.rotate,
      '-30': '-30deg',
    },
    container: {
      padding: '1rem',
    },
    customForms: theme => ({
      sm: {
        'input, textarea, multiselect, select': {
          fontSize: theme('fontSize.sm'),
          padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
        },
        select: {
          paddingRight: `${theme('spacing.4')}`,
        },
        'checkbox, radio': {
          width: theme('spacing.3'),
          height: theme('spacing.3'),
        },
      },
    }),
  },
  variants: {},
}
