import { Fragment } from "react";
import { PROVIDERS } from "../../lib/content";
import { Eyebrow } from "../ui/eyebrow";
import { GlassCard } from "../ui/glass-card";
import { ArrowRight } from "../layout/icons";
import { Reveal } from "../effects/reveal";

export function ProviderChain() {
	return (
		<section
			id="providers"
			aria-labelledby="providers-head"
			className="scroll-mt-28 px-4 py-24 md:px-8 md:py-40"
		>
			<div className="mx-auto w-full max-w-6xl">
				<div className="mx-auto max-w-2xl text-center">
					<Reveal>
						<Eyebrow>Provider chain</Eyebrow>
					</Reveal>
					<Reveal delay={100}>
						<h2
							id="providers-head"
							className="mt-6 font-display text-4xl font-medium tracking-tight text-balance md:text-5xl"
						>
							Four providers. Zero config required.
						</h2>
					</Reveal>
					<Reveal delay={200}>
						<p className="mt-6 text-ink-dim">
							Automatic fallback — the chain switches after 3 consecutive
							failures, and the free path works with no API key at all.
						</p>
					</Reveal>
				</div>
				<div className="mt-16 flex flex-col items-stretch gap-3 md:flex-row">
					{PROVIDERS.map((provider, i) => (
						<Fragment key={provider.rank}>
							{i > 0 && (
								<span
									aria-hidden
									className="grid shrink-0 place-items-center self-center text-ink-dim"
								>
									<ArrowRight size={14} className="rotate-90 md:rotate-0" />
								</span>
							)}
							<Reveal delay={i * 100} className="flex-1">
								<GlassCard
									variant="still"
									hover
									className="h-full"
									innerClassName={`p-5 ${i === PROVIDERS.length - 1 ? "border-accent/40" : ""}`}
								>
									<span className="font-mono text-xs text-ink-dim">
										{provider.rank}
									</span>
									<h3 className="mt-3 font-display text-lg font-medium">
										{provider.name}
									</h3>
									<p
										className={`mt-1 font-label text-[10px] uppercase tracking-[0.15em] ${
											i === PROVIDERS.length - 1
												? "text-accent"
												: "text-ink-dim"
										}`}
									>
										{provider.tag}
									</p>
									<p className="mt-3 text-sm text-ink-dim">{provider.note}</p>
								</GlassCard>
							</Reveal>
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
}
