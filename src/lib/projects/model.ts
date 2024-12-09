import React from "react";

export enum Technology {
	React = "React",
	TypeScript = "TypeScript",
	Vite = "Vite",
	NextJS = "Next.js",
	TailwindCSS = "TailwindCSS",
	PostgreSQL = "PostgreSQL",
	Rust = "Rust",
	Vercel = "Vercel",
	Figma = "Figma",
	Java = "Java",
	SpringBoot = "Spring Boot",
	AWS = "AWS",
	Nginx = "Nginx"
}

export interface Screenshot {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export interface ProjectDetails {
	name: string;
	summary: string;
	technologies: Technology[];
	links?: {
		github?: string;
		live?: string;
	};
	screenshots: Screenshot[];
}

interface BulletedProjectDetails extends ProjectDetails {
	type: "bullets";
	bullets: string[];
}

interface ContentProjectDetails extends ProjectDetails {
	type: "content";
	content: React.ReactNode;
}

export type Project = BulletedProjectDetails | ContentProjectDetails;
