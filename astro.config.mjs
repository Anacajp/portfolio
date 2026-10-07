import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://anacajp.github.io',
  base: '/portfolio',

  vite: {
    plugins: [tailwindcss()],
  },
});