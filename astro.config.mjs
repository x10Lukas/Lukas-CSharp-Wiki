// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://x10Lukas.github.io',
	base: '/',

	integrations: [
		starlight({
			title: 'Lukas Wiki',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Programmiersprachen Übersicht',
					link: 'overview', 
				},
				{
					label: 'C#',
					items: [
						{
							label: 'Einführung',
							items: [
							'csharp/einfuehrung/01-was-ist-csharp',
							'csharp/einfuehrung/02-dotnet-bedeutung',
							],
							collapsed: true,
						},
						{
							label: 'Grundlagen',
							items: [
							'csharp/grundlagen/01-variablen-datentypen',
							'csharp/grundlagen/02-operatoren-ausdruecke',
							'csharp/grundlagen/03-kontrollstrukturen',
							'csharp/grundlagen/04-arrays-und-dictionaries'
							],
							collapsed: true,
						},
						{
							label: 'Methoden und Funktionen',
							items: [
							'csharp/methoden/01-methoden-erstellen',
							'csharp/methoden/02-parameter-rueckgabewerte',
							'csharp/methoden/03-ueberladung-rekursion',
							],
							collapsed: true,
						},
						{
							label: 'Objektorientierte Programmierung (OOP)',
							items: [
							'csharp/oop/01-klassen-objekte',
							'csharp/oop/02-konstruktoren-destruktoren',
							'csharp/oop/03-vererbung-polymorphismus',
							],
							collapsed: true,
						},
						{
							label: 'Erweiterte Konzepte',
							items: [
							'csharp/erweiterte-konzepte/01-delegates-events',
							'csharp/erweiterte-konzepte/02-linq',
							'csharp/erweiterte-konzepte/03-fehlerbehandlung',
							],
							collapsed: true,
						},
						{
							label: 'Datenverarbeitung',
							items: [
							'csharp/datenverarbeitung/01-arrays-listen-dictionaries',
							'csharp/datenverarbeitung/02-dateien-lesen-schreiben',
							'csharp/datenverarbeitung/03-datenbanken-entity-framework',
							],
							collapsed: true,
						},
					],
					collapsed: true,
				},
				{
					label: 'JavaScript',
					items: [
						{
							label: 'Einführung',
							items: [
								'javascript/einfuehrung/01-was-ist-javascrip',
							],
							collapsed: true,
						}
					],
					collapsed: true,
				},
				{
					label: 'Python',
					items: [
						{
							label: 'Einführung',
							items: [
							'python/einfuehrung/01-was-ist-python',
							],
							collapsed: true,
						},
					],
					collapsed: true,
				}, 		  
			],
		}),
	],
});
