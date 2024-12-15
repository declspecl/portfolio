export enum BlogPostTag {
	Technical = "Technical",
	Personal = "Personal",
	Educational = "Educational",
	Sad = "Sad",
	Philosophical = "Philosophical"
}

export interface BlogPostMetadata {
	title: string;
	description: string;
	createdAt: Date;
	href: string;
	tags: BlogPostTag[];
}
