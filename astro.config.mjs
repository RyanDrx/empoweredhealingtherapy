import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.empoweredhealingwa.com',
    output: "server",
    adapter: netlify(),
    compressHTML: true,
    integrations: [
        sitemap({
            // Configuration for both sitemap.xml and sitemap-index.xml compatibility
            customPages: [
                'https://www.empoweredhealingwa.com/',
                'https://www.empoweredhealingwa.com/about',
                'https://www.empoweredhealingwa.com/contact',
                'https://www.empoweredhealingwa.com/rates-and-insurance',
                'https://www.empoweredhealingwa.com/somatic-experiencing',
                'https://www.empoweredhealingwa.com/resources',
            ],
        }),
        robotsTxt({
            sitemapBaseFileName: 'sitemap',
        }),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ]
});