import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import lit from '@astrojs/lit';
import NetlifyCMS from 'astro-netlify-cms';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.empoweredhealingwa.com',
	// Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
	integrations: [
		sitemap({
			// Force single sitemap file instead of sitemap-index
			entryLimit: 50000, // This sets a high limit to keep everything in one file
			// OR you can set it to a lower number if you want multiple files
		}),
		mdx(),
		lit(),
		robotsTxt({
			sitemapBaseFileName: 'sitemap',
		}),
		partytown({
			// Adds dataLayer.push as a forwarding-event.
			config: {
				forward: ['dataLayer.push'],
			},
		}),
		NetlifyCMS({
			config: {
				backend: {
					name: 'git-gateway',
					branch: 'main',
				},
				media_folder: 'public/assets/cms/images',
				public_folder: '/assets/cms/',
				collections: [
					{
						name: 'pageContent',
						label: 'Page Content',
						delete: false,
						editor: {
							preview: false,
						},
						files: [
							{
								name: 'home',
								label: 'Home',
								file: '/theme/public/cms/home.json',
								description: 'Home Page Content',
								fields: [
									{
										name: 'title',
										widget: 'string',
										label: 'Site Title',
									},
									{
										name: 'description',
										widget: 'string',
										label: 'Site Description',
									},
									{
										name: 'quote',
										widget: 'string',
										label: 'Quote',
									},
									{
										name: 'quoteAuthor',
										widget: 'string',
										label: 'Quote Author',
									},
									{
										name: 'introTitle',
										widget: 'string',
										label: 'Intro Title',
									},
									{
										name: 'introDescription',
										widget: 'text',
										label: 'Intro Description',
									},
									{
										name: 'telehealth',
										widget: 'text',
										label: 'Telehealth Description',
									},
									{
                                        name: 'inPerson',
                                        widget: 'text',
                                        label: 'In Person Description',
									},
								],
							},
							{
								name: 'about',
								label: 'About',
								file: '/theme/public/cms/about.json',
								description: 'Home Page Content',
								fields: [
									{
										name: 'aboutBlurb',
										widget: 'string',
										label: 'About Blurb',
									},
									{
										name: 'aboutContent',
										widget: 'text',
										label: 'About Content',
									},
									{
										name: 'education',
										widget: 'text',
										label: 'Education',
									},
									{
										name: 'training',
										widget: 'text',
										label: 'Training',
									},
									{
										name: 'licenseNumber',
										widget: 'string',
										label: 'License Number',
									},
									{
										name: 'quote',
										widget: 'string',
										label: 'Quote',
									},
									{
										name: 'quoteAuthor',
										widget: 'string',
										label: 'Quote Author',
									},
								],
							},
							{
								name: 'ratesAndInsurance',
								label: 'Rates and Insurance',
								file: '/theme/public/cms/ratesandinsurance.json',
								description: 'Rates and Insurance Content',
								fields: [
									{
										name: 'phoneConsultation',
										widget: 'text',
										label: 'Phone Consultation',
									},
									{
										name: 'medicalInsurance',
										widget: 'text',
										label: 'Medical Insurance',
									},
									{
										name: 'payments',
										widget: 'text',
										label: 'Credit Card & HSAs',
									},
									{
										name: 'cancelationPolicy',
										widget: 'text',
										label: 'Cancelation Policy',
									},
									{
										name: 'quote',
										widget: 'string',
										label: 'Quote',
									},
									{
										name: 'quoteAuthor',
										widget: 'string',
										label: 'Quote Author',
									},
								],
							},
							{
								name: 'somaticExperiencing',
								label: 'Somatic Experiencing',
								file: '/theme/public/cms/somaticExperiencing.json',
								description: 'Rates and Insurance Content',
								fields: [
									{
										name: 'quote',
										widget: 'string',
										label: 'Quote',
									},
									{
										name: 'quoteAuthor',
										widget: 'string',
										label: 'Quote Author',
									},
									{
										name: 'whatIsSE',
										widget: 'text',
										label: 'What is Somatic Experiencing?',
									},
									{
										name: 'whySE',
										widget: 'text',
										label: 'Why Somatic Experiencing?',
									},
								],
							},
							{
								name: 'resources',
								label: 'Resources Content',
								file: '/theme/public/cms/resources.json',
								description: 'Resources & Helpful links Content',
								fields: [
									{
										name: 'quote',
										widget: 'string',
										label: 'Quote',
									},
									{
										name: 'quoteAuthor',
										widget: 'string',
										label: 'Quote Author',
									},
								],
							},
						],
					},
					{
						name: 'resourceLinks',
						label: 'Resource Link',
						folder: '/theme/public/cms/ResourceLinks',
						slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
						create: true,
						extension: 'json',
						description: 'Resource Links',
						fields: [
							{
								name: 'title',
								widget: 'string',
								label: 'Resource Title',
								required: true,
							},
							{
								name: 'resourceLink',
								widget: 'string',
								required: true,
								label: 'Link',
							},
							{
								name: 'description',
								widget: 'text',
								label: 'Description',
								required: false,
							},
						],
					},
				],
			},
		}),
	],
	// Add renderers to the config
	// This is for the astro-icon package. You can find more about the package here: https://www.npmjs.com/package/astro-icon
	vite: {
		ssr: {
			external: ['svgo'],
		},
		build: {
			rollupOptions: {
				onwarn(warning, warn) {
					// Suppress eval warnings from netlify-cms-app
					if (warning.code === 'EVAL' && warning.id?.includes('netlify-cms-app')) {
						return;
					}
					warn(warning);
				},
			},
		},
	},
});
