"use client";

import { useRef } from "react";
import { useReducedMotion } from "motion/react";
import Elastic, { type ElasticHandle } from "@/components/ui/elastic";
import { FAQ } from "@/lib/content";

// Echoes GlassCard's double-bezel silhouette but with an opaque core — the deck
// fades back cards via opacity, and translucent glass stacked on itself reads muddy.
function FaqFace({
	index,
	total,
	q,
	a,
}: {
	index: number;
	total: number;
	q: string;
	a: string;
}) {
	return (
		<div className="bezel w-[min(88vw,26rem)] rounded-shell p-1.5 lg:w-120">
			<div className="glass-ring flex h-88 flex-col rounded-core border border-hairline bg-panel p-6 shadow-[0_8px_32px_var(--ambient)] md:p-8 lg:h-96">
				<span className="font-label text-xs tracking-widest text-accent lg:text-sm">
					{String(index + 1).padStart(2, "0")} /{" "}
					{String(total).padStart(2, "0")}
				</span>
				<h3 className="mt-4 font-display text-lg font-medium tracking-tight md:text-xl lg:text-2xl">
					{q}
				</h3>
				<p className="mt-3 text-sm leading-relaxed wrap-break-word text-ink-dim md:text-base lg:text-lg">
					{a}
				</p>
			</div>
		</div>
	);
}

export function FaqDeck() {
	const reduced = useReducedMotion() ?? false;
	const deck = useRef<ElasticHandle>(null);

	return (
		<div className="mt-10">
			{/* Canonical copy for crawlers and screen readers — the deck is pointer theatre. */}
			<dl className="sr-only">
				{FAQ.map((item) => (
					<div key={item.q}>
						<dt>{item.q}</dt>
						<dd>{item.a}</dd>
					</div>
				))}
			</dl>

			<div aria-hidden="true">
				<Elastic
					handleRef={deck}
					className="h-112 md:h-120 lg:h-128"
					items={FAQ.map((item, i) => (
						<FaqFace
							key={item.q}
							index={i}
							total={FAQ.length}
							q={item.q}
							a={item.a}
						/>
					))}
					stiffness={260}
					damping={24}
					mass={1.1}
					bounds={160}
					throwThreshold={100}
					cards={3}
					reducedMotion={reduced}
				/>
			</div>

			<div className="mt-6 flex items-center justify-center gap-6">
				<p
					aria-hidden="true"
					className="font-label text-xs uppercase tracking-widest text-ink-dim"
				>
					Flick a card to cycle
				</p>
				<button
					type="button"
					onClick={() => deck.current?.next()}
					className="font-label text-xs uppercase tracking-widest text-accent transition-colors hover:text-accent-hover"
				>
					Next question →
				</button>
			</div>
		</div>
	);
}
