// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://chloe-openclaw.github.io/openclaw-news-blog',
  base: '/openclaw-news-blog',
  vite: {
    plugins: [tailwindcss()]
  }
});