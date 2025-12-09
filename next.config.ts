import createMDX from "@next/mdx";
import type { NextConfig } from "next";

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
        remarkPlugins: ["remark-gfm"],
        rehypePlugins: ["rehype-starry-night"],
    },
});

export default withMDX(config);
