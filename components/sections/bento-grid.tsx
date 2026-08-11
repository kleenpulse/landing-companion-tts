import { BENTO, HOTKEYS, META, type BentoItem } from "../../lib/content";
import { Eyebrow } from "../ui/eyebrow";
import { GlassCard } from "../ui/glass-card";
import {
	FileText,
	Pause,
	Pencil,
	SkipForward,
	Stop,
	VolumeX,
} from "../layout/icons";
import { Reveal } from "../effects/reveal";

function BentoVisual({ item }: { item: BentoItem }) {
	switch (item.key) {
		case "feed":
			return (
				<div
					aria-hidden
					className="space-y-1.5 rounded-xl border border-hairline bg-ink/[0.03] p-3 font-mono text-xs text-ink-dim"
				>
					<div className="flex items-center gap-2">
						<FileText size={13} className="shrink-0" />
						reading index.ts
					</div>
					<div className="flex items-center gap-2">
						<Pencil size={13} className="shrink-0" />
						editing alpha.ts
					</div>
					<div className="flex items-center gap-2 text-ink">
						<Pencil size={13} className="shrink-0" />
						editing 3 files
						<span className="animate-caret ml-1 inline-block h-3 w-[5px] rounded-[1px] bg-accent" />
					</div>
				</div>
			);
		case "transport":
			return (
				<div aria-hidden className="flex flex-col gap-4">
					<div className="flex items-center gap-2">
						<span className="grid h-8 w-8 place-items-center rounded-full bg-ink/5 text-ink-dim">
							<VolumeX size={13} />
						</span>
						<span className="grid h-8 w-8 place-items-center rounded-full bg-ink/5 text-ink-dim">
							<Pause size={13} />
						</span>
						<span className="grid h-8 w-8 place-items-center rounded-full bg-ink/5 text-ink-dim">
							<SkipForward size={13} />
						</span>
						<span className="grid h-8 w-8 place-items-center rounded-full bg-ink/5 text-ink-dim">
							<Stop size={13} />
						</span>
					</div>
					<div className="flex h-5 items-end gap-[3px]">
						{[40, 65, 90, 100, 75, 55, 35].map((height, i) => (
							<span
								key={i}
								className="animate-meter w-[3px] origin-bottom rounded-full bg-accent"
								style={{
									height: `${height}%`,
									animationDelay: `${-i * 160}ms`,
								}}
							/>
						))}
					</div>
					<div className="flex flex-wrap gap-1 font-mono text-[10px] text-ink-dim">
						<span className="rounded-full px-1.5 py-0.5">0.75×</span>
						<span className="rounded-full bg-ink/10 px-1.5 py-0.5 text-ink">
							1×
						</span>
						<span className="rounded-full px-1.5 py-0.5">1.25×</span>
						<span className="rounded-full px-1.5 py-0.5">1.5×</span>
					</div>
				</div>
			);
		case "hotkeys":
			return (
				<div className="flex flex-col gap-2">
					{HOTKEYS.map((hotkey) => (
						<div
							key={hotkey.action}
							className="flex flex-wrap items-center gap-1.5"
						>
							{hotkey.keys.map((key) => (
								<kbd key={key} className="keycap">
									{key}
								</kbd>
							))}
							<span className="ml-1 text-xs text-ink-dim">{hotkey.action}</span>
						</div>
					))}
				</div>
			);
		case "verbatim":
			return (
				<p aria-hidden className="font-mono text-xs text-ink-dim">
					<span className="text-ink">```ts</span> → “Code block.”
				</p>
			);
		case "cache":
			return (
				<p aria-hidden className="font-mono text-xs text-ink-dim">
					{META.meter}
				</p>
			);
		case "viz":
			return (
				<div
					aria-hidden
					className="flex gap-1 font-label text-[10px] uppercase tracking-[0.15em]"
				>
					<span className="rounded-full bg-ink/10 px-2.5 py-1 text-ink">
						Waves
					</span>
					<span className="rounded-full px-2.5 py-1 text-ink-dim">Strands</span>
				</div>
			);
		default:
			return null;
	}
}

export function BentoGrid() {
	return (
		<section
			id="features"
			aria-labelledby="features-head"
			className="scroll-mt-28 px-4 py-24 md:px-8 md:py-40"
		>
			<div className="mx-auto w-full max-w-6xl">
				<div className="max-w-2xl">
					<Reveal>
						<Eyebrow>Everything in the dial</Eyebrow>
					</Reveal>
					<Reveal delay={100}>
						<h2
							id="features-head"
							className="mt-6 font-display text-4xl font-medium tracking-tight text-balance md:text-5xl"
						>
							Small window. Full transport.
						</h2>
					</Reveal>
				</div>
				<div className="mt-16 grid auto-rows-[minmax(9rem,auto)] grid-cols-1 gap-3 md:grid-cols-6">
					{BENTO.map((item, i) => (
						<Reveal
							key={item.key}
							delay={i * 75}
							className={`h-full ${item.span}`}
						>
							<GlassCard
								variant={item.glass}
								hover
								className="h-full"
								innerClassName="flex h-full flex-col p-5"
							>
								<h3 className="font-display text-lg font-medium">
									{item.title}
								</h3>
								<p className="mt-2 text-sm text-ink-dim">{item.body}</p>
								<div className="mt-auto pt-5">
									<BentoVisual item={item} />
								</div>
							</GlassCard>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
