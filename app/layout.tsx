import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Space_Mono } from "next/font/google";
import { LINKS, SEO } from "@/lib/content";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { Scrollbar } from "@/components/effects/scrollbar";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

const spaceMono = Space_Mono({
	variable: "--font-space-mono",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL(LINKS.site),
	title: SEO.title,
	description: SEO.description,
	applicationName: "Companion TTS",
	keywords: [
		"Claude Code text to speech",
		"Claude Code TTS",
		"Claude Code voice",
		"text to speech Windows",
		"Piper TTS",
		"ElevenLabs",
		"AI coding agent",
		"developer tools",
	],
	authors: [{ name: "kleenpulse", url: LINKS.repo }],
	creator: "kleenpulse",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: SEO.ogTitle,
		description: SEO.ogDescription,
		type: "website",
		siteName: "Companion TTS",
		url: "/",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: SEO.ogTitle,
		description: SEO.ogDescription,
	},
};

export const viewport: Viewport = {
	themeColor: "#050505",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-ground text-ink font-sans">
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:border focus:border-hairline focus:bg-surface focus:px-5 focus:py-2.5 focus:text-sm focus:text-ink"
				>
					Skip to content
				</a>
				<ThemeProvider>
					<SmoothScroll />
					<Scrollbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
