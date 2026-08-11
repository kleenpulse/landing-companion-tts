"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/*
	The one IntersectionObserver on the page. Children are server-rendered;
	this wrapper only flips a data attribute — all motion lives in CSS.

	`eager` is for above-the-fold content: it ships data-reveal="eager" in the
	server HTML and lets CSS animate at first paint, so the element never waits
	on hydration to become visible. Anything that could be the LCP element must
	use it — the observer path holds content at opacity 0 until React boots.
*/
export function Reveal({
	children,
	delay = 0,
	className = "",
	eager = false,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	eager?: boolean;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (eager) return;
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						el.setAttribute("data-reveal", "in");
						io.disconnect();
					}
				}
			},
			{ threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
		);
		io.observe(el);
		return () => io.disconnect();
	}, [eager]);

	return (
		<div
			ref={ref}
			data-reveal={eager ? "eager" : ""}
			className={className}
			style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
		>
			{children}
		</div>
	);
}
