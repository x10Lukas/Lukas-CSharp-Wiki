// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://x10Lukas.github.io',
	base: '/Lukas-CSharp-Wiki/',

	integrations: [
		starlight({
			title: 'Lukas C# / CSharp Wiki',
			social: {
				github: 'https://github.com/withastro/starlight',
				discord: 'https://discord.com/invite/DnJjec3KcP',
				youtube: 'https://www.youtube.com/',
			},
			sidebar: [
				{
					label: 'Einführung',
					autogenerate: { directory: 'einfuehrung'},
					collapsed: true
				},
				{
					label: 'Grundlagen',
					autogenerate: { directory: 'grundlagen'},
					collapsed: true
				},
				{
					label: 'Methoden und Funktionen',
					autogenerate: { directory: 'methoden'},
					collapsed: true
				},
				{
					label: 'Objektorientierte Programmierung (OOP)',
					autogenerate: { directory: 'oop'},
					collapsed: true
				},
				{
					label: 'Erweiterte Konzepte',
					autogenerate: { directory: 'erweiterte-konzepte'},
					collapsed: true
				},
				{
					label: 'Datenverarbeitung',
					autogenerate: { directory: 'datenverarbeitung'},
					collapsed: true
				},
				{
					label: 'Projekt- und Best Practices',
					autogenerate: { directory: 'best-practices'},
					collapsed: true
				},
			],
		}),
	],
});
