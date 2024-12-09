import { Project } from "./model";
import { Technology } from "@/lib/common";

export const projects: Project[] = [
	{
		name: "UniFit",
		summary: "Full-stack meal planning solution for university students",
		technologies: [
			Technology.React,
			Technology.TypeScript,
			Technology.NextJS,
			Technology.TailwindCSS,
			Technology.PostgreSQL,
			Technology.Rust,
			Technology.Vercel,
			Technology.Figma
		],
		links: {
			live: "https://www.unifit.me"
		},
		screenshots: [
			{
				src: "/unifit-home.png",
				alt: "UniFit home page",
				width: 1280,
				height: 1020
			},
			{
				src: "/unifit-account.png",
				alt: "UniFit account and meal plans page",
				width: 1280,
				height: 1020
			},
			{
				src: "/unifit-builder.png",
				alt: "UniFit meal plan preferences builder page",
				width: 1280,
				height: 1020
			}
		],
		type: "bullets",
		bullets: [
			"Engineered an optimal meal plan generation algorithm using dynamic programming, reducing computation time and memory footprint both by over 90% compared to brute force approaches",
			"Architected a REST API to efficiently query ~800k meal plans considering various user preferences"
		]
	},
	{
		name: "Personle!",
		summary: "Full-stack daily guessing game for characters from the Persona video game series",
		technologies: [
			Technology.React,
			Technology.TypeScript,
			Technology.TailwindCSS,
			Technology.Java,
			Technology.SpringBoot,
			Technology.AWS,
			Technology.Rust,
			Technology.Nginx,
			Technology.Figma
		],
		links: {
			github: "https://github.com/declspecl/personle",
			live: "https://www.personle.app"
		},
		screenshots: [
			{
				src: "/personle-home.png",
				alt: "Personle! home page",
				width: 1280,
				height: 1020
			},
			{
				src: "/personle-daily.png",
				alt: "Personle! daily play page",
				width: 1280,
				height: 1020
			},
			{
				src: "/personle-compendium.png",
				alt: "Personle! compendium page",
				width: 1280,
				height: 1020
			}
		],
		type: "bullets",
		bullets: [
			"Scaled application from launch to 600 peak DAU with a performant REST API and NoSQL database",
			"Achieved 99.9% uptime through automated CDK IaC pipelines on a self-hosted VPS",
			"Applied creative and accessible UI styling techniques to mimic the complex art style of Persona 5"
		]
	}
];
