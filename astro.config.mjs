import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bomray-lab.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
