import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import rehypeStarryNight from "rehype-starry-night";
import remarkGfm from "remark-gfm";

const config: NextConfig = {
    output: "export",
    pageExtensions: ["ts", "tsx", "md", "mdx"],
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeStarryNight],
    },
});

export default withMDX(config);
