import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import lit from '@astrojs/lit';
import NetlifyCMS from 'astro-netlify-cms';
import critters from "astro-critters";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://odyssey-theme.littlesticks.dev/',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), image(), lit(), critters(), compress(),  NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main'
      },
      collections: [{
        name: 'pageContent',
        label: 'Page Content',
        delete: false,
        editor: {
          preview: false
        },
        files: [{
          name: 'home',
          label: 'Home',
          file: 'src/cms/home.json',
          description: 'Home Page Content',
          fields: [{
            name: 'title',
            widget: 'string',
            label: 'Site Title'
          }, {
            name: 'description',
            widget: 'string',
            label: 'Site Description'
          }, {
            name: 'quote',
            widget: 'string',
            label: 'Quote'
          }, {
            name: 'quoteAuthor',
            widget: 'string',
            label: 'Quote Author'
          }, {
            name: 'introTitle',
            widget: 'string',
            label: 'Intro Title'
          }, {
            name: 'introDescription',
            widget: 'text',
            label: 'Intro Description'
          }, {
            name: 'telehealth',
            widget: 'text',
            label: 'Telehealth Description'
          }]
        }, {
          name: 'about',
          label: 'About',
          file: 'src/cms/about.json',
          description: 'Home Page Content',
          fields: [{
            name: 'aboutBlurb',
            widget: 'string',
            label: 'About Blurb'
          }, {
            name: 'aboutContent',
            widget: 'text',
            label: 'About Content'
          }, {
            name: 'education',
            widget: 'text',
            label: 'Education'
          }, {
            name: 'training',
            widget: 'text',
            label: 'Training'
          }, {
            name: 'licenseNumber',
            widget: 'string',
            label: 'License Number'
          }]
        }, {
          name: 'ratesAndInsurance',
          label: 'Rates and Insurance',
          file: 'src/cms/ratesandinsurance.json',
          description: 'Rates and Insurance Content',
          fields: [{
            name: 'phoneConsultation',
            widget: 'text',
            label: 'Phone Consultation'
          }, {
            name: 'medicalInsurance',
            widget: 'text',
            label: 'Medical Insurance'
          }, {
            name: 'payments',
            widget: 'text',
            label: 'Credit Card & HSAs'
          }, {
            name: 'cancelationPolicy',
            widget: 'text',
            label: 'Cancelation Policy'
          }, {
            name: 'quote',
            widget: 'string',
            label: 'Quote'
          }, {
            name: 'quoteAuthor',
            widget: 'string',
            label: 'Quote Author'
          }]
        }, {
          name: 'somaticExperiencing',
          label: 'Somatic Experiencing',
          file: 'src/cms/somaticExperiencing.json',
          description: 'Rates and Insurance Content',
          fields: [{
            name: 'quote',
            widget: 'string',
            label: 'Quote'
          }, {
            name: 'quoteAuthor',
            widget: 'string',
            label: 'Quote Author'
          }, {
            name: 'whatIsSE',
            widget: 'text',
            label: 'What is Somatic Experiencing?'
          }, {
            name: 'whySE',
            widget: 'text',
            label: 'Why Somatic Experiencing?'
          }]
        }]
      }]
    }
  })],
  // Add renderers to the config
  // This is for the astro-icon package. You can find more about the package here: https://www.npmjs.com/package/astro-icon
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});