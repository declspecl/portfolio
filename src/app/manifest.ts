import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Gavin D'Hondt Portfolio - Jr. SDE at Amazon and CS Student at Oakland University",
		short_name: "Gavin D'Hondt Portfolio",
		description: "I'm Gavin D'Hondt. I'm a Jr. SDE at Amazon and Computer Science student at Oakland University",
		start_url: "/",
		display: "standalone",
		background_color: "#070809",
		theme_color: "#070809",
		icons: [
			{
				type: "image/x-icon",
				src: "/favicon.ico",
				sizes: "32x32"
			},
			{
				type: "image/png",
				src: "/icon.png",
				sizes: "512x512"
			}
		]
	};
}
