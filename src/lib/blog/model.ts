export enum BlogPostTag {
	Technical = "Technical",
	Personal = "Personal",
	Educational = "Educational",
	Sad = "Sad",
	Philosophical = "Philosophical"
}

export interface BlogPostPreview {
	title: string;
	description: string;
	createdAt: Date;
	href: string;
	tags: BlogPostTag[];
}
