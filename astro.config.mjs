import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ← à remplacer par l'URL de production
  site: 'https://votre-domaine.com',

  integrations: [sitemap()]
});