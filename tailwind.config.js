const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@jasonruesch/tailwind')],
  content: [
    join(__dirname, 'index.html'),
    join(__dirname, 'src/**/*!(*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '50% 50%',
          },
          '25%': {
            backgroundPosition: '70% 70%',
          },
          '50%': {
            backgroundPosition: '50% 50%',
          },
          '75%': {
            backgroundPosition: '30% 30%',
          },
          '100%': {
            backgroundPosition: '50% 50%',
          },
        },
      },
      animation: {
        gradient: 'gradient 15s linear infinite',
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      backgroundImage: (theme) => ({
        'gradient-500': `linear-gradient(to right bottom, ${theme('colors.primary-500')} 45%, ${theme('colors.secondary-500')}, ${theme('colors.white')}, ${theme('colors.secondary-500')}, ${theme('colors.primary-500')} 55%)`,
        'gradient-400': `linear-gradient(to right bottom, ${theme('colors.primary-400')} 45%, ${theme('colors.secondary-400')}, ${theme('colors.black')}, ${theme('colors.secondary-400')}, ${theme('colors.primary-400')} 55%)`,
      }),
    },
  },
  plugins: [],
};
