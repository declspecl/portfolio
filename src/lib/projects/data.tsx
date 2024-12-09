import { Project } from "./model";
import { FaAws, FaFigma, FaJava, FaReact } from "react-icons/fa6";
import { SiNginx, SiSpringboot, SiTypescript } from "react-icons/si";

export const projects: Project[] = [
	{
		name: "Personle!",
		summary: "Full-stack daily guessing game for characters from the Persona video game series",
		technologies: [
			{ name: "React", icon: <FaReact /> },
			{ name: "TypeScript", icon: <SiTypescript /> },
			{ name: "Java", icon: <FaJava /> },
			{ name: "Spring Boot", icon: <SiSpringboot /> },
			{ name: "AWS", icon: <FaAws /> },
			{ name: "Figma", icon: <FaFigma /> },
			{ name: "Nginx", icon: <SiNginx /> }
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
