import React from "react";
import { Technology } from "@/lib/common";

export interface Picture {
	src: string;
	width: number;
	height: number;
}

export interface ProjectScreenshot {
	name: string;
	mobile: Picture;
	desktop: Picture;
	magnified: Picture;
}

export interface ProjectDetails {
	name: string;
	summary: string;
	technologies: Technology[];
	links?: {
		github?: string;
		live?: string;
	};
	screenshots: ProjectScreenshot[];
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
