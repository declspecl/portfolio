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
