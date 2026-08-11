import type { MetadataRoute } from "next";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = CONTENT_UPDATED;

	return [
		{
			url: SITE_URL,
			lastModified,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${SITE_URL}/setup`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];
}
