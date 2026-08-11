import type { Metadata } from "next";
import { Backdrop } from "@/components/effects/backdrop";
import { LiquidFilter } from "@/components/effects/liquid-filter";
import { Reveal } from "@/components/effects/reveal";
import { Footer } from "@/components/layout/footer";
import { IslandNav } from "@/components/layout/island-nav";
import { CTAButton } from "@/components/ui/cta-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GlassCard } from "@/components/ui/glass-card";
import { FaqDeck } from "@/components/sections/faq-deck";
import { FaqStructuredData } from "@/components/seo/structured-data";
import {
	HOW_IT_WORKS,
	LINKS,
	META,
	SETUP_SEO,
	SETUP_STEPS,
} from "@/lib/content";

export const metadata: Metadata = {
	title: SETUP_SEO.title,
	description: SETUP_SEO.description,
	alternates: { canonical: "/setup" },
	openGraph: {
		title: SETUP_SEO.title,
		description: SETUP_SEO.description,
		type: "article",
		url: "/setup",
	},
};

export default function SetupPage() {
	return (
		<>
			<FaqStructuredData />
			<Backdrop />
			<LiquidFilter />
			<IslandNav />
			<main id="main-content" className="relative z-10 flex-1">
				<section className="px-4 pb-16 pt-40 md:px-8 md:pt-48">
					<div className="mx-auto w-full max-w-3xl">
						<Reveal eager>
							<Eyebrow>Setup · {META.version}</Eyebrow>
						</Reveal>
						<Reveal eager delay={100}>
							<h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-balance md:text-6xl">
								Set up text-to-speech for Claude Code.
							</h1>
						</Reveal>
						<Reveal eager delay={200}>
							<p className="mt-6 max-w-2xl text-lg text-ink-dim md:text-xl">
								Three steps to hear Claude Code speak on Windows. The free path
								needs no account and no API key.
							</p>
						</Reveal>
						<Reveal eager delay={300}>
							<div className="mt-10 flex flex-wrap items-center gap-4">
								<CTAButton href={LINKS.releases} external>
									Download {META.version} for Windows
								</CTAButton>
								<CTAButton href={LINKS.repo} external variant="ghost">
									View on GitHub
								</CTAButton>
							</div>
						</Reveal>
					</div>
				</section>

				<section
					id="install"
					aria-labelledby="steps-head"
					className="px-4 py-16 md:px-8 md:py-24"
				>
					<div className="mx-auto w-full max-w-3xl">
						<h2
							id="steps-head"
							className="font-display text-3xl font-medium tracking-tight md:text-4xl"
						>
							Install in three steps
						</h2>
						<ol className="mt-10 flex flex-col gap-4">
							{SETUP_STEPS.map((step, i) => (
								<li key={step.n}>
									<Reveal delay={i * 100}>
										<GlassCard variant="still" innerClassName="p-8">
											<span className="font-mono text-xs tracking-widest text-accent">
												{step.n}
											</span>
											<h3 className="mt-4 font-display text-xl font-medium tracking-tight md:text-2xl">
												{step.title}
											</h3>
											<p className="mt-3 text-ink-dim">{step.body}</p>
										</GlassCard>
									</Reveal>
								</li>
							))}
						</ol>
					</div>
				</section>

				<section
					id="how-it-works"
					aria-labelledby="how-head"
					className="px-4 py-16 md:px-8 md:py-24"
				>
					<div className="mx-auto w-full max-w-3xl">
						<Reveal>
							<h2
								id="how-head"
								className="font-display text-3xl font-medium tracking-tight md:text-4xl"
							>
								How it works
							</h2>
						</Reveal>
						<ul className="mt-10 flex flex-col gap-6">
							{HOW_IT_WORKS.map((line, i) => (
								<li key={line}>
									<Reveal delay={i * 75}>
										<p className="border-l border-hairline pl-6 text-ink-dim">
											{line}
										</p>
									</Reveal>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section
					id="questions"
					aria-labelledby="faq-head"
					className="px-4 py-16 md:px-8 md:py-24"
				>
					<div className="mx-auto w-full max-w-3xl">
						<Reveal>
							<h2
								id="faq-head"
								className="font-display text-3xl font-medium tracking-tight md:text-4xl"
							>
								Questions
							</h2>
						</Reveal>
						<Reveal delay={80}>
							<FaqDeck />
						</Reveal>
					</div>
				</section>

				<section className="px-4 pb-24 md:px-8">
					<div className="mx-auto w-full max-w-3xl">
						<Reveal>
							<GlassCard
								variant="frost"
								innerClassName="scrim px-6 py-14 text-center md:px-16"
							>
								<h2 className="font-display text-3xl font-medium tracking-tight text-balance md:text-4xl">
									Hear Claude Code work.
								</h2>
								<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
									<CTAButton href={LINKS.releases} external>
										Download for Windows
									</CTAButton>
									<CTAButton href="/" variant="ghost">
										Back to overview
									</CTAButton>
								</div>
							</GlassCard>
						</Reveal>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
