import type { MetadataRoute } from "next";
import { SEO } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Companion TTS — Text-to-Speech for Claude Code",
		short_name: "Companion TTS",
		description: SEO.description,
		start_url: "/",
		display: "browser",
		/* Matches viewport.themeColor: the app is dark-canonical, enableSystem={false}. */
		background_color: "#050505",
		theme_color: "#050505",
		icons: [
			{ src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
			{ src: "/apple-icon", type: "image/png", sizes: "180x180" },
		],
	};
}
