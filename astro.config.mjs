import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arthur-reynaud-chanon.be',

  integrations: [sitemap()]
});