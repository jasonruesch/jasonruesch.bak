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
            backgroundPosition: '85% 85%',
          },
          '25%': {
            backgroundPosition: '85% 85%',
          },
          '100%': {
            backgroundPosition: '15% 15%',
          },
        },
      },
      animation: {
        gradient: 'gradient 12s linear infinite',
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      backgroundImage: (theme) => ({
        'gradient-500': `linear-gradient(145deg, ${theme('colors.primary-500')} 45%, ${theme('colors.secondary-500')}, ${theme('colors.white')}, ${theme('colors.secondary-500')}, ${theme('colors.primary-500')} 55%)`,
        'gradient-400': `linear-gradient(145deg, ${theme('colors.primary-400')} 45%, ${theme('colors.secondary-400')}, ${theme('colors.black')}, ${theme('colors.secondary-400')}, ${theme('colors.primary-400')} 55%)`,
        'gradient-500-sm': `linear-gradient(145deg, ${theme('colors.primary-500')} 45%, ${theme('colors.secondary-500')} 49%, ${theme('colors.white')}, ${theme('colors.secondary-500')} 51%, ${theme('colors.primary-500')} 55%)`,
        'gradient-400-sm': `linear-gradient(145deg, ${theme('colors.primary-400')} 45%, ${theme('colors.secondary-400')} 49%, ${theme('colors.black')}, ${theme('colors.secondary-400')} 51%, ${theme('colors.primary-400')} 55%)`,
      }),
    },
  },
  plugins: [],
};
