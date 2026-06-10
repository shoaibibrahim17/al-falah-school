// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

/* Sanity integration is conditional.
   It only loads when both env vars are present, so local builds without
   a CMS pass cleanly. The website always renders from src/data/school.ts
   as a fallback; Sanity takes over when configured (e.g. on Cloudflare). */
const sanityProjectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = process.env.PUBLIC_SANITY_DATASET;
const sanityEnabled = Boolean(sanityProjectId && sanityDataset);

const integrations = [react()];
if (sanityEnabled) {
  integrations.push(
    sanity({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: true,
      apiVersion: process.env.PUBLIC_SANITY_API_VERSION || '2025-01-01',
    })
  );
}

export default defineConfig({
  site: 'https://shoaibibrahim17.github.io',
  base: '/al-falah-school/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations,
});