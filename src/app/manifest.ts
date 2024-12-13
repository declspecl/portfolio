import { MetadataRoute } from "next";

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
				src: "/icon1.png",
				sizes: "16x16"
			},
			{
				type: "image/png",
				src: "/icon2.png",
				sizes: "32x32"
			},
			{
				type: "image/png",
				src: "/icon3.png",
				sizes: "48x48"
			},
			{
				type: "image/png",
				src: "/icon4.png",
				sizes: "64x64"
			},
			{
				type: "image/png",
				src: "/icon5.png",
				sizes: "180x180"
			},
			{
				type: "image/png",
				src: "/icon6.png",
				sizes: "512x512"
			}
		]
	};
}
