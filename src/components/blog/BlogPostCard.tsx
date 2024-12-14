import Link from "next/link";
import { LuCalendar } from "react-icons/lu";
import { Button } from "@/components/ui/Button";
import { BlogPostPreview } from "@/lib/blog/model";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { BlogPostBadge } from "./BlogPostBadge";

interface BlogPostCardProps {
	post: BlogPostPreview;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{post.title}</CardTitle>
				<CardDescription className="inline-flex flex-row items-center gap-1">
					<LuCalendar /> Created: {post.createdAt.toDateString()}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="mb-2">{post.description}</p>

				<div className="flex flex-row flex-wrap items-center gap-2">
					{post.tags.map((tag) => (
						<BlogPostBadge key={tag} tag={tag} />
					))}
				</div>
			</CardContent>
			<CardFooter className="justify-end">
				<Button asChild>
					<Link href={post.href}>Read more</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
