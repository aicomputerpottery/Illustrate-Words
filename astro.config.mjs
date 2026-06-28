import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: Swap this with your target domain before launch if needed
  site: 'https://illustratewords.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/_icons') && !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
