import { GlassCard } from "./glass-card";
import { META } from "../../lib/content";
import {
	Bell,
	FileText,
	Pause,
	Pencil,
	SkipForward,
	Stop,
	VolumeX,
} from "../layout/icons";

/*
	Stylized recreation of the Companion panel — every string is a real UI
	string from the product. Pure illustration: labelled as a figure, the
	interior is aria-hidden so screen readers never meet fake controls.
*/
export function PanelMock() {
	return (
		<figure
			aria-label="The Companion panel — session feed, transport deck, and cost meter"
			className="w-full max-w-sm"
		>
			<GlassCard variant="frost" innerClassName="relative overflow-hidden p-4">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 overflow-hidden rounded-core"
				>
					<div className="sweep animate-sweep" />
				</div>
				<div aria-hidden className="relative">
					<div className="flex items-center justify-between border-b border-hairline pb-3">
						<span className="font-label text-[11px] font-bold uppercase tracking-[0.2em] text-ink-dim">
							Companion
						</span>
						<span className="flex items-center gap-1.5 font-mono text-[10px] text-ink-dim">
							<span className="animate-caret h-1.5 w-1.5 rounded-full bg-accent" />
							speaking
						</span>
					</div>

					<div className="space-y-1 py-3">
						<div className="flex items-center gap-2.5 px-2 py-1.5 text-ink-dim">
							<FileText size={14} className="shrink-0" />
							<span className="font-mono text-xs">reading index.ts</span>
						</div>
						<div className="flex items-center gap-2.5 rounded-lg bg-ink/5 px-2 py-1.5 text-ink">
							<Pencil size={14} className="shrink-0" />
							<span className="font-mono text-xs">editing 3 files</span>
							<span className="ml-auto flex items-center gap-1">
								{[0, 1, 2].map((i) => (
									<span
										key={i}
										className="animate-caret h-1 w-1 rounded-full bg-ink-dim"
										style={{ animationDelay: `${i * 200}ms` }}
									/>
								))}
							</span>
						</div>
						<div className="flex items-center gap-2.5 px-2 py-1.5 text-ink-dim">
							<Bell size={14} className="shrink-0 text-accent" />
							<span className="truncate font-mono text-xs">
								Claude needs your approval to run a command.
							</span>
						</div>
					</div>

					<div className="flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-hairline pb-3 pt-3">
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
						<span className="ml-auto flex h-4 items-end gap-[3px]">
							{[55, 80, 100, 70, 45].map((height, i) => (
								<span
									key={i}
									className="animate-meter w-[3px] origin-bottom rounded-full bg-accent"
									style={{
										height: `${height}%`,
										animationDelay: `${-i * 180}ms`,
									}}
								/>
							))}
						</span>
						<span className="flex items-center gap-0.5 font-mono text-[10px] text-ink-dim">
							<span className="rounded-full px-1.5 py-0.5">0.75×</span>
							<span className="rounded-full bg-ink/10 px-1.5 py-0.5 text-ink">
								1×
							</span>
							<span className="rounded-full px-1.5 py-0.5">1.25×</span>
							<span className="rounded-full px-1.5 py-0.5">1.5×</span>
						</span>
					</div>

					<div className="border-t border-hairline pt-3 font-mono text-[10px] tracking-wide text-ink-dim">
						{META.meter} · {META.version}
					</div>
				</div>
			</GlassCard>
		</figure>
	);
}
