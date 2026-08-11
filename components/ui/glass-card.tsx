import type { ReactNode } from "react";

/*
	Double-bezel glass: an outer machined shell holding an inner glass core
	with concentric radii. Only the inner core ever carries backdrop-filter.
*/
export function GlassCard({
	variant = "frost",
	hover = false,
	className = "",
	innerClassName = "",
	children,
}: {
	variant?: "frost" | "still";
	hover?: boolean;
	className?: string;
	innerClassName?: string;
	children: ReactNode;
}) {
	return (
		<div className={`bezel rounded-shell p-1.5 ${hover ? "glass-hover" : ""} ${className}`}>
			<div
				className={`glass-ring rounded-core h-full ${variant === "frost" ? "glass-frost" : "glass-still"} ${innerClassName}`}
			>
				{children}
			</div>
		</div>
	);
}
