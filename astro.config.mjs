import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://visualcraft.pages.dev',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [tailwind()],
});
