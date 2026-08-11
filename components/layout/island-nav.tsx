"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
	AnimatePresence,
	LazyMotion,
	MotionConfig,
	domAnimation,
	m,
	stagger,
} from "motion/react";
import type { Variants } from "motion/react";
import { CTAButton } from "../ui/cta-button";
import { LINKS, NAV_LINKS } from "../../lib/content";
import { Download } from "./icons";
import { getLenis, scrollToHash } from "../../lib/lenis-store";
import { ThemeToggle } from "./theme-toggle";

const EASE_GLASS: [number, number, number, number] = [0.32, 0.72, 0, 1];

/*
	The overlay unmounts when closed so its fullscreen backdrop-filter costs
	nothing at rest; close is a single quick fade instead of a reverse stagger.
*/
const overlayVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: EASE_GLASS,
			delayChildren: stagger(0.06, { startDelay: 0.08 }),
		},
	},
	exit: { opacity: 0, transition: { duration: 0.22, ease: EASE_GLASS } },
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 32 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 320, damping: 30, mass: 0.9 },
	},
};

/*
	Floating glass island, detached from the top edge. The hamburger morphs
	into an X; the mobile menu is a fullscreen glass overlay with a spring
	stagger reveal. Anchor travel rides Lenis when it's alive.
*/
export function IslandNav() {
	const [open, setOpen] = useState(false);
	const burgerRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!open) return;
		const burger = burgerRef.current;
		getLenis()?.stop();
		document.documentElement.style.overflow = "hidden";
		/* Freeze the orb field so the overlay's backdrop blur stops re-sampling
		   a moving background every frame — see globals.css */
		document.body.dataset.menuOpen = "true";
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("keydown", onKey);
			document.documentElement.style.overflow = "";
			delete document.body.dataset.menuOpen;
			getLenis()?.start();
			burger?.focus();
		};
	}, [open]);

	const go = (hash: string) => (e: MouseEvent) => {
		e.preventDefault();
		setOpen(false);
		requestAnimationFrame(() =>
			requestAnimationFrame(() => scrollToHash(hash)),
		);
	};

	const goTop = (e: MouseEvent) => {
		e.preventDefault();
		setOpen(false);
		requestAnimationFrame(() =>
			requestAnimationFrame(() => {
				const lenis = getLenis();
				if (lenis) lenis.scrollTo(0);
				else window.scrollTo({ top: 0 });
			}),
		);
	};

	return (
		<LazyMotion features={domAnimation} strict>
			<MotionConfig reducedMotion="user">
				<header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
					<nav
						aria-label="Main"
						className="glass-liquid justify-between glass-ring pointer-events-auto mx-4 mt-6 flex w-full sm:w-max items-center gap-1 rounded-full p-2"
					>
						<a
							href="#"
							onClick={goTop}
							className="flex items-center gap-2 rounded-full px-3 py-1.5"
						>
							<span
								aria-hidden
								className="grainient block h-2 w-2 rounded-full"
							/>
							<span className="font-display text-sm font-medium tracking-tight">
								Companion TTS
							</span>
						</a>
						<div className="hidden items-center md:flex">
							{NAV_LINKS.map((link) => (
								<a
									key={link.hash}
									href={link.hash}
									onClick={go(link.hash)}
									className="rounded-full px-3 py-1.5 text-sm text-ink-dim transition-colors duration-300 ease-glass hover:bg-ink/5 hover:text-ink"
								>
									{link.label}
								</a>
							))}
						</div>
						<ThemeToggle className="hidden sm:flex" />
						<a
							href={LINKS.releases}
							target="_blank"
							rel="noreferrer"
							className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-on-accent transition-colors duration-300 ease-glass hover:bg-accent-hover sm:flex"
						>
							<Download size={13} />
							Download
						</a>
						<button
							ref={burgerRef}
							type="button"
							onClick={() => setOpen(!open)}
							aria-expanded={open}
							aria-controls="mobile-menu"
							aria-label={open ? "Close menu" : "Open menu"}
							className="relative h-9 w-9 rounded-full text-ink transition-colors duration-300 ease-glass hover:bg-ink/5 md:hidden"
						>
							<span
								aria-hidden
								className="absolute left-1/2 top-1/2 h-[1.5px] w-4 bg-current transition-transform duration-300 ease-glass"
								style={{
									transform: open
										? "translate(-50%, -50%) rotate(45deg)"
										: "translate(-50%, calc(-50% - 3px))",
								}}
							/>
							<span
								aria-hidden
								className="absolute left-1/2 top-1/2 h-[1.5px] w-4 bg-current transition-transform duration-300 ease-glass"
								style={{
									transform: open
										? "translate(-50%, -50%) rotate(-45deg)"
										: "translate(-50%, calc(-50% + 3px))",
								}}
							/>
						</button>
					</nav>
				</header>

				<AnimatePresence>
					{open && (
						<m.div
							id="mobile-menu"
							variants={overlayVariants}
							initial="hidden"
							animate="show"
							exit="exit"
							className="glass-frost-deep fixed inset-0 z-40 flex flex-col items-center justify-center gap-3 md:hidden"
						>
							{NAV_LINKS.map((link) => (
								<m.a
									key={link.hash}
									variants={itemVariants}
									href={link.hash}
									onClick={go(link.hash)}
									className="font-display text-4xl font-medium text-ink"
								>
									{link.label}
								</m.a>
							))}
							<m.div
								variants={itemVariants}
								className="mt-8 flex items-center gap-3"
							>
								<ThemeToggle />
								<CTAButton href={LINKS.releases} external>
									Download for Windows
								</CTAButton>
							</m.div>
						</m.div>
					)}
				</AnimatePresence>
			</MotionConfig>
		</LazyMotion>
	);
}
