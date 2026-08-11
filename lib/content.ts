/*
	Content contract — every user-facing string on the landing page lives here,
	and every claim is verified against the companion-tts codebase. Zero invention.
*/

/* Single source for the canonical origin — swap the domain in one place. */
export const SITE_URL =
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://landing-companion-tts.vercel.app";

/*
	Sitemap <lastmod>. A literal, not new Date(): under cacheComponents a
	request-time date forces sitemap.xml to render dynamically, and lastmod
	should track content changes anyway, not deploys. Bump when copy changes.
*/
export const CONTENT_UPDATED = "2026-08-11";

export const LINKS = {
	site: SITE_URL,
	repo: "https://github.com/kleenpulse/companion-tts",
	releases: "https://github.com/kleenpulse/companion-tts/releases",
	license: "https://github.com/kleenpulse/companion-tts/blob/main/LICENSE",
	coffee: "https://buymeacoffee.com/Vxrcel",
} as const;

export const TAGLINE = {
	head: "Hear Claude Code work.",
	sub: "A floating Windows companion that reads Claude Code's output aloud with neural text-to-speech — and pings you when it needs you.",
} as const;

/* Search-facing strings. Deliberately spell out "text-to-speech": the brand
   abbreviates it, so the category term appears nowhere else on the page. */
export const SEO = {
	title: "Companion TTS — Text-to-Speech for Claude Code on Windows",
	description:
		"Hear Claude Code work. Companion TTS is a free, open-source Windows app that speaks Claude Code's output aloud — ElevenLabs, Mistral, or offline Piper voices.",
	ogTitle: "Companion TTS — Text-to-Speech for Claude Code",
	ogDescription:
		"A floating Windows companion that reads Claude Code's output aloud and pings you when it needs you. Free, open source, works with no API key.",
} as const;

export const META = {
	version: "v0.4.0",
	license: "GPL-3.0",
	platform: "Windows",
	meter: "12.4K chars · ~$0.62 mo",
} as const;

export const NAV_LINKS = [
	{ label: "Alerts", hash: "#alerts" },
	{ label: "Providers", hash: "#providers" },
	{ label: "Features", hash: "#features" },
	{ label: "Voices", hash: "#voices" },
	{ label: "Open source", hash: "#open-source" },
] as const;

export const SETUP_NAV_LINKS = [
	{ label: "Install", hash: "#install" },
	{ label: "How it works", hash: "#how-it-works" },
	{ label: "Questions", hash: "#questions" },
] as const;

/* Route → section links the island nav shows there. */
export const NAV_BY_ROUTE: Record<
	string,
	ReadonlyArray<{ label: string; hash: string }>
> = {
	"/": NAV_LINKS,
	"/setup": SETUP_NAV_LINKS,
};

/* Exact spoken strings from src/speech/attention.ts */
export const ALERT_LINES = [
	"Claude needs your approval to run a command.",
	"Claude is waiting for your input.",
	"Claude has a question for you.",
	"Claude drafted a plan and awaits your approval.",
] as const;

/* Fallback chain order from src-tauri/src/synth.rs PROVIDERS table */
export const PROVIDERS = [
	{
		rank: "01",
		name: "ElevenLabs",
		tag: "ELEVEN_FLASH_V2_5",
		note: "Cloud voice, first seat in the chain.",
	},
	{
		rank: "02",
		name: "Mistral Voxtral",
		tag: "VOXTRAL-MINI-TTS",
		note: "Cloud fallback when the first seat fails.",
	},
	{
		rank: "03",
		name: "Piper",
		tag: "NEURAL · OFFLINE · FREE",
		note: "In-process ONNX inference. No network, no key.",
	},
	{
		rank: "04",
		name: "Windows on-device",
		tag: "NO KEY NEEDED",
		note: "System voices. Always available.",
	},
] as const;

/* Piper voice catalog from src-tauri/src/piper_tts.rs */
export const VOICES = [
	{ name: "Alba", region: "EN-GB", size: "63 MB" },
	{ name: "Cori", region: "EN-GB", size: "104 MB" },
	{ name: "Northern English", region: "EN-GB", size: "63 MB" },
	{ name: "Lessac", region: "EN-US", size: "63 MB" },
	{ name: "Amy", region: "EN-US", size: "63 MB" },
	{ name: "Ryan", region: "EN-US", size: "115 MB" },
] as const;

export type BentoItem = {
	key: string;
	title: string;
	body: string;
	span: string;
	glass: "frost" | "still";
};

export const BENTO: BentoItem[] = [
	{
		key: "feed",
		title: "Live transcript feed",
		body: "A typewriter reveal synced to the audio actually playing. Double-click any row to re-speak it.",
		span: "md:col-span-4 md:row-span-2",
		glass: "frost",
	},
	{
		key: "transport",
		title: "Transport deck",
		body: "Mute, pause, skip, or stop and clear the queue. Volume meter, rate from 0.75× to 1.5×.",
		span: "md:col-span-2 md:row-span-2",
		glass: "frost",
	},
	{
		key: "hotkeys",
		title: "Global hotkeys",
		body: "Mute or pause from any window — no need to find the dial.",
		span: "md:col-span-2",
		glass: "still",
	},
	{
		key: "verbatim",
		title: "Verbatim contract",
		body: "Prose is never dropped or reordered. Markdown melts away; code fences become “Code block.”",
		span: "md:col-span-2",
		glass: "still",
	},
	{
		key: "tray",
		title: "Tray & startup",
		body: "Lives in the system tray, starts with Windows, second launch focuses the running dial.",
		span: "md:col-span-2",
		glass: "still",
	},
	{
		key: "private",
		title: "Private by design",
		body: "API keys live Rust-side — they never touch the webview. With local voices, nothing leaves your machine.",
		span: "md:col-span-2",
		glass: "still",
	},
	{
		key: "cache",
		title: "Synthesis cache",
		body: "Repeat phrases cost zero API characters, with a live monthly character and cost meter.",
		span: "md:col-span-2",
		glass: "still",
	},
	{
		key: "viz",
		title: "WebGL visualizers",
		body: "Two dial styles rendered with WebGL, breathing with the audio.",
		span: "md:col-span-2",
		glass: "still",
	},
];

export const HOTKEYS = [
	{ keys: ["Ctrl", "Alt", "M"], action: "mute" },
	{ keys: ["Ctrl", "Alt", "P"], action: "pause / resume" },
] as const;

export const OSS = {
	head: "GPL-3.0. Tauri v2, not Electron.",
	line: "GPL-3.0. Built with Tauri v2, Rust, and React — running on the system WebView2, a tiny footprint, not an Electron app. Windows-only for now.",
	chips: ["TAURI V2", "RUST", "REACT", "GPL-3.0", "WEBVIEW2"],
} as const;

/* Distinct from TAGLINE.head — the closing h2 previously duplicated the h1
   verbatim, spending both prominent headings on the same string. */
export const FINAL_CTA = {
	head: "Free text-to-speech for Claude Code.",
	sub: "Free and open source. Works with no API key at all.",
} as const;

/* /setup — every step verified against the product README and src-tauri. */
export const SETUP_SEO = {
	title: "Setup — Companion TTS for Claude Code on Windows",
	description:
		"Install Companion TTS and hear Claude Code speak in three steps: run the Windows installer, pick a voice (no API key required), and enable the Notification hook for spoken alerts.",
} as const;

export const SETUP_STEPS = [
	{
		n: "01",
		title: "Install on Windows",
		body: "Download the installer from GitHub Releases and run it. Windows only — there is no macOS or Linux build yet.",
	},
	{
		n: "02",
		title: "Pick a voice",
		body: "On first launch, add an ElevenLabs or Mistral API key in settings — or skip keys entirely and use a Piper neural voice, downloaded in-app, or the built-in Windows voice. The free path needs no account.",
	},
	{
		n: "03",
		title: "Turn on attention alerts",
		body: "Companion TTS installs a Claude Code Notification hook so it can speak up the moment a session blocks on you — an approval prompt, a question, or a plan awaiting review.",
	},
] as const;

export const HOW_IT_WORKS = [
	"Rust watches ~/.claude/projects/**/*.jsonl — the transcript files Claude Code writes as it works — and tails them incrementally, so noise never reaches the UI.",
	"Claude's messages become speakable phrases: paths shrink to basenames, code blocks summarize, markdown melts away. They queue and play through the provider chain in order.",
	"Synthesis happens in Rust, so API keys stay native-side and never enter a webview.",
	"Pre-existing sessions are never narrated. The tailer primes at end-of-file, so it only speaks what happens after it starts watching.",
] as const;

export const FAQ = [
	{
		q: "What does the Notification hook change?",
		a: "It adds a hook entry to ~/.claude/settings.json that appends notification events to a local file the app tails. Your original settings are backed up once to settings.json.companion-bak, and nothing else is touched.",
	},
	{
		q: "Does it send my transcripts anywhere?",
		a: "Only the text being spoken goes to the TTS provider you configured. With a Piper voice or the Windows voice, nothing leaves your machine at all.",
	},
	{
		q: "Do I need an API key?",
		a: "No. Piper runs fully offline as in-process ONNX inference, and the Windows on-device voice is always available. API keys are only needed for the ElevenLabs and Mistral cloud voices.",
	},
	{
		q: "Does it work on macOS or Linux?",
		a: "Not yet. Companion TTS is Windows-only for now — it runs on the system WebView2 via Tauri v2.",
	},
	{
		q: "Which languages are supported?",
		a: "English only. The six Piper voices cover en-GB and en-US.",
	},
	{
		q: "Why GPL-3.0?",
		a: "The offline Piper provider compiles in espeak-ng (GPL-3.0) for phonemization, which makes distributed builds a GPL combined work.",
	},
] as const;
