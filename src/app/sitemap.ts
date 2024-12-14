import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.gavindhondt.com",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1
		},
		{
			url: "https://www.gavindhondt.com/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		}
	];
}
