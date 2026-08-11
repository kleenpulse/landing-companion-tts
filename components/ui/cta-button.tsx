import type { ReactNode } from "react";
import { ArrowUpRight } from "../layout/icons";

/*
	Island CTA — pill with the trailing icon nested in its own circular wrapper,
	which drifts diagonally on hover for internal kinetic tension.
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
	return (
		<a
			href={href}
			{...(external ? { target: "_blank", rel: "noreferrer" } : {})}
			className={`group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-medium transition-[transform,background-color] duration-300 ease-glass active:scale-[0.98] ${
				variant === "solid"
					? "bg-accent text-on-accent hover:bg-accent-hover"
					: "glass-still glass-ring text-ink hover:bg-ink/5"
			} ${className}`}
		>
			<span>{children}</span>
			<span
				className={`grid h-8 w-8 place-items-center rounded-full transition-transform duration-300 ease-glass group-hover:translate-x-[1px] group-hover:-translate-y-[1px] group-hover:scale-105 ${
					variant === "solid" ? "bg-white/15" : "bg-ink/10"
				}`}
			>
				<ArrowUpRight size={14} />
			</span>
		</a>
	);
}
