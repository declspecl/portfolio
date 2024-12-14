import { BlogPostPreview, BlogPostTag } from "./model";

export const blogPosts: BlogPostPreview[] = [
	{
		title: "Sample Blog Post",
		description: "This is a sample blog post. It's just a placeholder for now.",
		createdAt: new Date(2024, 11, 13),
		tags: Object.keys(BlogPostTag) as BlogPostTag[],
		href: "/blog/post/sample"
	}
];
