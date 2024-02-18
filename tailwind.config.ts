import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ...createGlobPatternsForDependencies('.'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
