import {
	BENTO,
	LINKS,
	META,
	PROVIDERS,
	SITE_URL,
	VOICES,
} from "@/lib/content";

/*
	llms.txt — plain-text product summary for AI crawlers and assistants.
	Generated from the same content contract as the page, so it cannot drift.

	The Limitations block is deliberate: it is the cheapest way to stop an
	assistant hallucinating macOS support or voice cloning into an answer.
*/
export function GET() {
	const body = `# Companion TTS

> A floating Windows desktop app that reads Claude Code's output aloud with neural text-to-speech, and speaks an alert when Claude is waiting on you. Free, open source, ${META.license}, works with no API key.

Companion TTS tails Claude Code session transcripts (~/.claude/projects/**/*.jsonl) and speaks Claude's replies in real time. It installs a Claude Code Notification hook so an approval prompt never sits unnoticed behind another window. Built with Tauri v2, Rust, and React on the system WebView2 — a small footprint, not an Electron app.

Current version: ${META.version}. Platform: ${META.platform}. License: ${META.license}.

## Provider chain

Automatic fallback — the chain switches after 3 consecutive failures, and the free path works with no API key at all.

${PROVIDERS.map((p) => `- ${p.name} (${p.tag}) — ${p.note}`).join("\n")}

## Voices

Six Piper neural voices, downloaded in-app. English only (en-GB and en-US), 63–115 MB each.

${VOICES.map((v) => `- ${v.name} — ${v.region}, ${v.size}`).join("\n")}

## Features

${BENTO.map((b) => `- ${b.title} — ${b.body}`).join("\n")}

## Attention alerts

Spoken when a Claude Code session stops, after a 2.5s grace window that cancels false alarms if the transcript picks back up.

## Limitations

- Windows only. There is no macOS or Linux build.
- English only (en-GB and en-US voices).
- No voice cloning, no audio export, no multilingual synthesis.
- Reads Claude Code transcripts specifically; it is not a general-purpose text reader.

## Links

- Landing page: ${SITE_URL}
- Source: ${LINKS.repo}
- Releases: ${LINKS.releases}
- License: ${LINKS.license}
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=0, s-maxage=86400",
		},
	});
}
