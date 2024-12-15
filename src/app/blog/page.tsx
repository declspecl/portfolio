import clsx from "clsx";
import { blogPosts } from "@/lib/blog/data";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { SectionTitle } from "@/components/typography/SectionTitle";

export default function BlogPage() {
	return (
		<main>
			<div>
				<SectionTitle text="Welcome to my blog!" />
				<p>Let this be your fair warning to turn away while you still can... who knows what might be lurking in my unfiltered thoughts 😱</p>
			</div>

			<div className="my-8 sm:my-12" />

			<section>
				<SectionTitle text="Post Gallery" />

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{blogPosts.map((post, i) => (
						<BlogPostCard
							key={`blog-post-${post.title}`}
							post={post}
							className={clsx("col-span-1", { "col-span-2": blogPosts.length % 2 !== 0 && i === blogPosts.length - 1 })}
						/>
					))}
				</div>
			</section>
		</main>
	);
}
