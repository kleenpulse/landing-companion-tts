import { VOICES } from "../../lib/content";
import { Eyebrow } from "../ui/eyebrow";
import { GlassCard } from "../ui/glass-card";
import { Waveform } from "../layout/icons";
import { Reveal } from "../effects/reveal";

export function VoicesSection() {
	return (
		<section id="voices" className="scroll-mt-28 px-4 py-24 md:px-8 md:py-40">
			<div className="mx-auto w-full max-w-6xl">
				<div className="mx-auto max-w-2xl text-center">
					<Reveal>
						<Eyebrow>Piper voices</Eyebrow>
					</Reveal>
					<Reveal delay={100}>
						<h2 className="mt-6 font-display text-4xl font-medium tracking-tight text-balance md:text-5xl">
							Six neural voices. Downloaded in-app.
						</h2>
					</Reveal>
				</div>
				<div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3">
					{VOICES.map((voice, i) => (
						<Reveal key={voice.name} delay={i * 75} className="h-full">
							<GlassCard
								variant="still"
								hover
								className="h-full"
								innerClassName="flex h-full flex-col p-5"
							>
								<Waveform size={16} className="text-ink-dim" />
								<h3 className="mt-3 font-display text-lg font-medium">
									{voice.name}
								</h3>
								<div className="mt-1 flex flex-wrap items-center gap-2">
									<span className="font-label text-[10px] uppercase tracking-[0.15em] text-ink-dim">
										{voice.region}
									</span>
									<span className="font-mono text-[10px] text-ink-dim">
										{voice.size}
									</span>
								</div>
								{voice.name === "Alba" && (
									<div aria-hidden className="mt-auto pt-5">
										<div className="h-1 overflow-hidden rounded-full bg-ink/10">
											<div className="h-full w-[70%] rounded-full bg-accent" />
										</div>
										<p className="mt-2 font-mono text-[10px] text-ink-dim">
											downloading 70%
										</p>
									</div>
								)}
							</GlassCard>
						</Reveal>
					))}
				</div>
				<Reveal>
					<p className="mt-10 text-center text-sm text-ink-dim">
						63–115 MB each. English only — en-GB and en-US.
					</p>
				</Reveal>
			</div>
		</section>
	);
}
