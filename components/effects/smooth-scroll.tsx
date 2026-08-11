"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { setLenis } from "../../lib/lenis-store";

/*
	Lenis owns page smoothing. Never initialized under prefers-reduced-motion,
	and torn down live if the preference flips mid-session.
*/
export function SmoothScroll() {
	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		let lenis: Lenis | null = null;
		let raf = 0;

		const start = () => {
			if (lenis) return;
			lenis = new Lenis({ duration: 1.1 });
			setLenis(lenis);
			const loop = (time: number) => {
				lenis?.raf(time);
				raf = requestAnimationFrame(loop);
			};
			raf = requestAnimationFrame(loop);
		};

		const stop = () => {
			cancelAnimationFrame(raf);
			lenis?.destroy();
			lenis = null;
			setLenis(null);
		};

		if (!mq.matches) start();
		const onChange = () => (mq.matches ? stop() : start());
		mq.addEventListener("change", onChange);

		return () => {
			mq.removeEventListener("change", onChange);
			stop();
		};
	}, []);

	return null;
}
