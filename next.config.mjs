import createMdx from "@next/mdx";

/** @type {import("next").NextConfig} */
const config = {
	output: "export",
	pageExtensions: ["tsx", "mdx"],
	reactStrictMode: true,
	images: {
		unoptimized: true
	}
};

const withMdx = createMdx({});

export default withMdx(config);
