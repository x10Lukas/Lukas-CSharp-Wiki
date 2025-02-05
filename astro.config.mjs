// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Lukas C# / CSharp Wiki',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Einführung',
					autogenerate: { directory: 'einfuehrung'}
				},
				{
					label: 'Grundlagen',
					autogenerate: { directory: 'grundlagen'}
				},
				{
					label: 'Methoden und Funktionen',
					autogenerate: { directory: 'methoden'}
				},
				{
					label: 'Objektorientierte Programmierung (OOP)',
					autogenerate: { directory: 'oop'}
				},
				{
					label: 'Erweiterte Konzepte',
					autogenerate: { directory: 'erweiterte-konzepte'}
				},
				{
					label: 'Datenverarbeitung',
					autogenerate: { directory: 'grudatenverarbeitungndlagen'}
				},
				{
					label: 'Projekt- und Best Practices',
					autogenerate: { directory: 'best-practices'}
				},
			],
		}),
	],
});
