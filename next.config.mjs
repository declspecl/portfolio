import createMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const config = {
	output: "export",
	pageExtensions: ["tsx", "mdx"],
	reactStrictMode: true,
	images: {
		unoptimized: true
	}
};

const withMDX = createMDX({});

export default withMDX(config);
