import { Speaker } from "../layout/icons";

/*
	The floating dial, product-accurate at 64px, wearing the signature
	grainient ring. The .liquid wrapper is the page's single refraction
	element — the ring churns like thick glass.
*/
export function HeroDial({ className = "" }: { className?: string }) {
	return (
		<div className={`liquid relative h-16 w-16 ${className}`}>
			<div
				aria-hidden
				className="grainient absolute -inset-2 rounded-full opacity-40 blur-xl"
			/>
			<div
				aria-hidden
				className="animate-pulse-dial absolute inset-0 rounded-full"
			/>
			<div
				aria-hidden
				className="grainient animate-ring absolute inset-0 rounded-full"
			/>
			<div className="absolute inset-[3px] grid place-items-center rounded-full bg-panel">
				<Speaker size={20} className="text-ink" />
			</div>
		</div>
	);
}
