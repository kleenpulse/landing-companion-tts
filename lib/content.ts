/*
	Content contract — every user-facing string on the landing page lives here,
	and every claim is verified against the companion-tts codebase. Zero invention.
*/

export const LINKS = {
	site: "https://landing-companion-tts.vercel.app",
	repo: "https://github.com/kleenpulse/companion-tts",
	releases: "https://github.com/kleenpulse/companion-tts/releases",
	license: "https://github.com/kleenpulse/companion-tts/blob/main/LICENSE",
	coffee: "https://buymeacoffee.com/Vxrcel",
} as const;

export const TAGLINE = {
	head: "Hear Claude Code work.",
	sub: "A floating companion that speaks agent output aloud and pings you when it needs you.",
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
	line: "GPL-3.0. Built with Tauri v2, Rust, and React — running on the system WebView2, a tiny footprint, not an Electron app. Windows-only for now.",
	chips: ["TAURI V2", "RUST", "REACT", "GPL-3.0", "WEBVIEW2"],
} as const;
