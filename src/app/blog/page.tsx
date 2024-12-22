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
				<SectionTitle text="Blog Post Gallery" />

				<p className="mb-2">My blog are where I talk about stuff I find interesting. Stop by here to think and potentially learn something!</p>

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

			<div className="my-8 sm:my-12" />

			{/* <section>
				<SectionTitle text="Journal Gallery" />

				<p>
					My journal posts are where I talk about my personal life, specifically more intimate topics. Check them out if you feel similarly and enjoy
					thinking about life.
				</p>
				<p className="mb-2">
					This is definitely the sappier, cringier half; if you&apos;d like to read about happy things, check the above blog posts!
				</p>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{journalPosts.map((post, i) => (
						<BlogPostCard
							key={`journal-post-${post.title}`}
							post={post}
							className={clsx("col-span-1", { "col-span-2": journalPosts.length % 2 !== 0 && i === journalPosts.length - 1 })}
						/>
					))}
				</div>
			</section> */}
		</main>
	);
}
