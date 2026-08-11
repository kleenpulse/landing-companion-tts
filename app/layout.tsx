import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Space_Mono } from "next/font/google";
import { LINKS } from "@/lib/content";
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
	title: "Companion TTS — Hear Claude Code work",
	description:
		"Hear Claude Code work. A floating companion that speaks agent output aloud and pings you when it needs you.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Companion TTS — Hear Claude Code work",
		description:
			"A floating companion that speaks agent output aloud and pings you when it needs you.",
		type: "website",
		siteName: "Companion TTS",
		url: "/",
	},
	twitter: {
		card: "summary",
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
				<ThemeProvider>
					<SmoothScroll />
					<Scrollbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
