// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config.ts';

export default defineConfig({
  site: 'https://www.delaport.be',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Infrastructure blijft uit de sitemap zolang die sectie niet publiek is.
      filter: (page) =>
        !page.includes('/bedankt/') && (site.infrastructurePublic || !page.includes('/infrastructure/')),
    }),
  ],
});
