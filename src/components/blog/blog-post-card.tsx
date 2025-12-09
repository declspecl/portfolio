import { BlogPostBadge } from "./blog-post-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPostMetadata } from "@/lib/blog/model";
import Link from "next/link";
import { LuCalendar } from "react-icons/lu";

interface BlogPostCardProps {
    post: BlogPostMetadata;
    className?: string;
}

export function BlogPostCard({ post, className }: BlogPostCardProps) {
    return (
        <Card className={className}>
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
