import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['var(--font-spaceGrotesk)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
