import { CTAButton } from "../ui/cta-button";
import { LINKS, META, TAGLINE } from "../../lib/content";
import { Eyebrow } from "../ui/eyebrow";
import { HeroDial } from "../ui/hero-dial";
import { PanelMock } from "../ui/panel-mock";
import { Reveal } from "../effects/reveal";

export function Hero() {
	return (
		<section className="flex min-h-[100dvh] items-center px-4 pb-16 pt-36 md:px-8">
			<div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
				<div className="scrim rounded-[3rem] py-8 lg:pr-8">
					<Reveal>
						<Eyebrow>Windows · Tauri v2 · Open source</Eyebrow>
					</Reveal>
					<Reveal delay={100}>
						<h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-balance md:text-7xl xl:text-8xl">
							{TAGLINE.head}
						</h1>
					</Reveal>
					<Reveal delay={200}>
						<p className="mt-6 max-w-xl text-lg text-ink-dim md:text-xl">
							{TAGLINE.sub}
						</p>
					</Reveal>
					<Reveal delay={300}>
						<div className="mt-10 flex flex-wrap items-center gap-4">
							<CTAButton href={LINKS.releases} external>
								Download for Windows
							</CTAButton>
							<CTAButton href={LINKS.repo} external variant="ghost">
								View on GitHub
							</CTAButton>
						</div>
						<p className="mt-6 font-mono text-xs tracking-wide text-ink-dim">
							{META.version} · {META.license} · {META.platform}
						</p>
					</Reveal>
				</div>
				<Reveal delay={200}>
					<div className="relative flex flex-col items-center gap-10 lg:items-end">
						<HeroDial className="lg:absolute lg:-right-4 lg:-top-8 lg:z-10" />
						<PanelMock />
					</div>
				</Reveal>
			</div>
		</section>
	);
}
