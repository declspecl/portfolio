import React from "react";
import { Technology } from "@/lib/common";

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
