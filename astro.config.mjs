// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://shoaibibrahim17.github.io',
  base: '/al-falah-school/',
  vite: {
    plugins: [tailwindcss()],
  },
});
