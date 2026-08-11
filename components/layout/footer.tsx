import { LINKS } from "../../lib/content";

export function Footer() {
	return (
		<footer className="border-t border-hairline px-4 py-12 md:px-8">
			<div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 text-sm text-ink-dim md:flex-row md:items-center">
				<div>
					<p>Companion TTS — a floating companion for Claude Code.</p>
					<p className="mt-1 font-mono text-xs">
						tails ~/.claude/projects/**/*.jsonl
					</p>
				</div>
				<nav aria-label="Footer" className="flex items-center gap-5">
					<a
						className="transition-colors duration-300 ease-glass hover:text-ink"
						href={LINKS.repo}
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
					<a
						className="transition-colors duration-300 ease-glass hover:text-ink"
						href={LINKS.releases}
						target="_blank"
						rel="noreferrer"
					>
						Releases
					</a>
					<a
						className="transition-colors duration-300 ease-glass hover:text-ink"
						href={LINKS.license}
						target="_blank"
						rel="noreferrer"
					>
						License
					</a>
					<a
						className="transition-colors duration-300 ease-glass hover:text-ink"
						href={LINKS.coffee}
						target="_blank"
						rel="noreferrer"
					>
						Buy me a coffee
					</a>
				</nav>
			</div>
		</footer>
	);
}
