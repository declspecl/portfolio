import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from "rehype-starry-night";

/** @type {import("next").NextConfig} */
const config = {
	output: "export",
	pageExtensions: ["tsx", "mdx"],
	reactStrictMode: true,
	images: {
		unoptimized: true
	}
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeStarryNight]
	}
});

export default withMDX(config);
