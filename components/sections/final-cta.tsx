import { CTAButton } from "../ui/cta-button";
import { FINAL_CTA, LINKS, META } from "../../lib/content";
import { GlassCard } from "../ui/glass-card";
import { Reveal } from "../effects/reveal";

export function FinalCTA() {
	return (
		<section
			aria-labelledby="final-cta-head"
			className="px-4 pt-24 pb-10 md:px-8 md:pt-40 md:pb-16"
		>
			<div className="mx-auto w-full max-w-3xl">
				<Reveal>
					<GlassCard
						variant="frost"
						innerClassName="scrim px-6 py-16 text-center md:px-16 md:py-20"
					>
						<h2
							id="final-cta-head"
							className="font-display text-4xl font-medium tracking-tight text-balance md:text-6xl"
						>
							{FINAL_CTA.head}
						</h2>
						<p className="mx-auto mt-6 max-w-md text-ink-dim md:text-lg">
							{FINAL_CTA.sub}
						</p>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
							<CTAButton href={LINKS.releases} external>
								Download {META.version} for Windows
							</CTAButton>
							<CTAButton href={LINKS.repo} external variant="ghost">
								GitHub
							</CTAButton>
						</div>
						<p className="mt-8 font-label text-[10px] uppercase tracking-[0.2em] text-ink-dim">
							{META.platform} · {META.license} · {META.version}
						</p>
					</GlassCard>
				</Reveal>
			</div>
		</section>
	);
}
