import { BlogPostMetadata, BlogPostTag } from "./model";

export const blogPosts: BlogPostMetadata[] = [
	{
		title: "Writing Java Can Actually be Enjoyable!",
		description:
			"How I learned to actually enjoy writing Java code after disliking it for so long. And why I'm using Java for my many of my personal projects instead of Rust.",
		createdAt: new Date(2024, 11, 14),
		tags: [BlogPostTag.Technical, BlogPostTag.Educational],
		href: "/blog/post/making-java-enjoyable"
	}
];

export const journalPosts: BlogPostMetadata[] = [
	{
		title: "Why am I afraid of the things I yearn for?",
		description: "Some things that I want to do but am afraid to, and a small retrospective on why this might be.",
		createdAt: new Date(2024, 11, 15),
		tags: [BlogPostTag.Personal, BlogPostTag.Sad],
		href: "/blog/post/afraid-of-yearning"
	}
];
