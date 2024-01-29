import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { createThemes } from 'tw-colors';
import colors from '../base/colors';
import headings from '../base/headings';
import buttons from '../components/buttons';
import grid from '../components/grid';

export const tailwindPreset = {
  theme: {
    colors: {
      current: colors.current,
      inherit: colors.inherit,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
    },
    extend: {
      lineHeight: {
        cap: 'calc(1cap - 1px)',
      },
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      backgroundImage: ({ theme }: any) => ({
        'gradient-500': `linear-gradient(145deg, ${theme('colors.primary-500')} 45%, ${theme('colors.secondary-500')}, ${theme('colors.white')}, ${theme('colors.secondary-500')}, ${theme('colors.primary-500')} 55%)`,
        'gradient-400': `linear-gradient(145deg, ${theme('colors.primary-400')} 45%, ${theme('colors.secondary-400')}, ${theme('colors.black')}, ${theme('colors.secondary-400')}, ${theme('colors.primary-400')} 55%)`,
        'gradient-500-sm': `linear-gradient(145deg, ${theme('colors.primary-500')} 45%, ${theme('colors.secondary-500')} 49%, ${theme('colors.white')}, ${theme('colors.secondary-500')} 51%, ${theme('colors.primary-500')} 55%)`,
        'gradient-400-sm': `linear-gradient(145deg, ${theme('colors.primary-400')} 45%, ${theme('colors.secondary-400')} 49%, ${theme('colors.black')}, ${theme('colors.secondary-400')} 51%, ${theme('colors.primary-400')} 55%)`,
      }),
    },
  },
  plugins: [
    forms,
    require('tailwindcss-safe-area'),
    createThemes(
      ({ light, dark }) => ({
        light: light({
          primary: colors.cyan,
          secondary: colors.fuchsia,
          neutral: colors.neutral,
          success: colors.green,
          warning: colors.yellow,
          danger: colors.red,
          info: colors.blue,
        }),
        dark: dark({
          primary: colors.violet,
          secondary: colors.teal,
          neutral: colors.neutral,
          success: colors.green,
          warning: colors.yellow,
          danger: colors.red,
          info: colors.blue,
        }),
      }),
      {
        defaultTheme: {
          light: 'light',
          dark: 'dark',
        },
        strict: true,
        produceThemeClass: (themeName) => `theme-${themeName}`,
        produceThemeVariant: (themeName) => `theme-${themeName}`,
      },
    ),
    plugin(({ addBase, addComponents }) => {
      addBase(headings);

      addComponents(grid);
      addComponents(buttons);

      addComponents({
        '.gradient-heading': {
          '@apply py-4 text-center text-xl font-normal uppercase !leading-cap sm:text-5xl lg:max-w-screen-lg lg:text-6xl bg-gradient-500-sm md:bg-gradient-500 dark:bg-gradient-400-sm dark:md:bg-gradient-400 bg-300% animate-gradient bg-clip-text text-transparent scale-110 sm:scale-100 motion-reduce:animate-none':
            '',
        },
      });
    }),
  ],
} satisfies Omit<Config, 'content'>;

export default tailwindPreset;
