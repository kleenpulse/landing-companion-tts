import { CTAButton } from "../ui/cta-button";
import { LINKS, OSS } from "../../lib/content";
import { Eyebrow } from "../ui/eyebrow";
import { Reveal } from "../effects/reveal";

export function OpenSourceStrip() {
	return (
		<section
			id="open-source"
			className="scroll-mt-28 border-y border-hairline bg-surface/60 px-4 py-24 md:px-8"
		>
			<div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
				<Reveal className="max-w-2xl">
					<Eyebrow>Open source</Eyebrow>
					<p className="mt-6 text-lg text-ink md:text-xl">{OSS.line}</p>
					<div className="mt-6 flex flex-wrap gap-2">
						{OSS.chips.map((chip) => (
							<span
								key={chip}
								className="rounded-full border border-hairline px-3 py-1 font-label text-[10px] tracking-[0.15em] text-ink-dim"
							>
								{chip}
							</span>
						))}
					</div>
				</Reveal>
				<Reveal delay={150}>
					<CTAButton href={LINKS.repo} external variant="ghost">
						View source on GitHub
					</CTAButton>
				</Reveal>
			</div>
		</section>
	);
}
