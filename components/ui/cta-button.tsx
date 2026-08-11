import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "../layout/icons";

/*
	Island CTA — pill with the trailing icon nested in its own circular wrapper,
	which drifts diagonally on hover for internal kinetic tension.

	Internal hrefs route through next/link so in-site navigation prefetches
	instead of doing a full document load; external ones stay plain anchors.
*/
export function CTAButton({
	href,
	children,
	variant = "solid",
	external = false,
	className = "",
}: {
	href: string;
	children: ReactNode;
	variant?: "solid" | "ghost";
	external?: boolean;
	className?: string;
}) {
	const classes = `group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-medium transition-[transform,background-color] duration-300 ease-glass active:scale-[0.98] ${
		variant === "solid"
			? "bg-accent text-on-accent hover:bg-accent-hover"
			: "glass-still glass-ring text-ink hover:bg-ink/5"
	} ${className}`;

	const inner = (
		<>
			<span>{children}</span>
			<span
				className={`grid h-8 w-8 place-items-center rounded-full transition-transform duration-300 ease-glass group-hover:translate-x-[1px] group-hover:-translate-y-[1px] group-hover:scale-105 ${
					variant === "solid" ? "bg-white/15" : "bg-ink/10"
				}`}
			>
				<ArrowUpRight size={14} />
			</span>
		</>
	);

	if (external) {
		return (
			<a href={href} target="_blank" rel="noreferrer" className={classes}>
				{inner}
			</a>
		);
	}

	return (
		<Link href={href} className={classes}>
			{inner}
		</Link>
	);
}
