"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/*
	The one IntersectionObserver on the page. Children are server-rendered;
	this wrapper only flips a data attribute — all motion lives in CSS.
*/
export function Reveal({
	children,
	delay = 0,
	className = "",
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
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
	}, []);

	return (
		<div
			ref={ref}
			data-reveal=""
			className={className}
			style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
		>
			{children}
		</div>
	);
}
