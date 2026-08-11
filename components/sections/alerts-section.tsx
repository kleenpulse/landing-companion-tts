import { ALERT_LINES } from "../../lib/content";
import { Eyebrow } from "../ui/eyebrow";
import { GlassCard } from "../ui/glass-card";
import { Bell } from "../layout/icons";
import { Reveal } from "../effects/reveal";

export function AlertsSection() {
	return (
		<section id="alerts" className="scroll-mt-28 px-4 py-24 md:px-8 md:py-40">
			<div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
				<div>
					<Reveal>
						<Eyebrow>Attention alerts</Eyebrow>
						<h2 className="mt-6 font-display text-4xl font-medium tracking-tight text-balance md:text-5xl">
							It speaks up when Claude blocks.
						</h2>
					</Reveal>
					<Reveal delay={100}>
						<p className="mt-6 max-w-lg text-ink-dim">
							Claude Code goes silent exactly when it needs you most. The
							companion installs a Claude Code Notification hook, hears the
							moment a session stops, and tells you out loud — so an approval
							prompt never sits unnoticed behind another window.
						</p>
						<p className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-dim">
							<span className="rounded-full border border-hairline px-3 py-1 font-label text-[10px] uppercase tracking-[0.15em] text-ink">
								2.5s grace window
							</span>
							cancels false alarms when the transcript picks back up.
						</p>
					</Reveal>
				</div>
				<Reveal delay={150}>
					<GlassCard variant="frost" innerClassName="p-4 md:p-5">
						<ul className="space-y-1">
							{ALERT_LINES.map((line, i) => (
								<li key={line}>
									<Reveal delay={i * 100}>
										<div
											className={`flex items-center gap-3 rounded-xl px-3 py-3 ${
												i === 0 ? "bg-ink/5 text-ink" : "text-ink-dim"
											}`}
										>
											<Bell size={15} className="shrink-0 text-accent" />
											<span className="text-sm">“{line}”</span>
											{i === 0 && (
												<span
													aria-hidden
													className="ml-auto flex h-3.5 shrink-0 items-end gap-[3px]"
												>
													{[60, 100, 75].map((height, j) => (
														<span
															key={j}
															className="animate-meter w-[3px] origin-bottom rounded-full bg-accent"
															style={{
																height: `${height}%`,
																animationDelay: `${-j * 180}ms`,
															}}
														/>
													))}
												</span>
											)}
										</div>
									</Reveal>
								</li>
							))}
						</ul>
					</GlassCard>
				</Reveal>
			</div>
		</section>
	);
}
