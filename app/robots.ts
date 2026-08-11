import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
	/*
		Guard on "preview" specifically, not on "!== production" — a local or
		self-hosted build has no VERCEL_ENV and must not disallow-all.
	*/
	if (process.env.VERCEL_ENV === "preview") {
		return { rules: { userAgent: "*", disallow: "/" } };
	}

	return {
		rules: { userAgent: "*", allow: "/" },
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}
