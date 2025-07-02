import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.empoweredhealingwa.com',
  output: "server",
  adapter: netlify(),
  compressHTML: true,
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ]
});