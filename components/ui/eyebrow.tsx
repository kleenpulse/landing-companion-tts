import type { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
	return (
		<p
			className={`inline-flex items-center gap-2 rounded-full border border-hairline bg-ink/[0.04] px-3 py-1 font-label text-[10px] font-medium uppercase tracking-[0.2em] text-ink-dim ${className}`}
		>
			<span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
			{children}
		</p>
	);
}
