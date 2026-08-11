/*
	Fixed mesh-orb field in the product's grainient hues, vignetted back to the
	ground color, plus the single anti-banding grain layer. Orbs are pre-faded
	radial gradients — cheaper than filter blur and band-free under grain.
*/
export function Backdrop() {
	return (
		<>
			<div aria-hidden className="fixed inset-0 -z-10 overflow-hidden blur-3xl">
				<div
					className="animate-orb absolute -left-[15%] -top-[12%] aspect-square w-[55vw] min-w-[26rem] rounded-full"
					style={{
						background:
							"radial-gradient(closest-side, var(--color-gr-violet), transparent 70%)",
						opacity: "var(--orb-opacity)",
					}}
				/>
				<div
					className="animate-orb absolute -right-[12%] top-[28%] aspect-square w-[45vw] min-w-[22rem] rounded-full"
					style={{
						background:
							"radial-gradient(closest-side, var(--color-gr-cyan), transparent 70%)",
						opacity: "var(--orb-opacity)",
						animationDelay: "-14s",
						animationDirection: "alternate-reverse",
					}}
				/>
				<div
					className="animate-orb absolute -bottom-[18%] left-[22%] aspect-square w-[50vw] min-w-[24rem] rounded-full"
					style={{
						background:
							"radial-gradient(closest-side, var(--color-gr-magenta), transparent 70%)",
						opacity: "var(--orb-opacity)",
						animationDelay: "-28s",
					}}
				/>
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(120% 100% at 50% 35%, transparent 45%, var(--ground) 100%)",
					}}
				/>
			</div>
			<div aria-hidden className="grain" />
		</>
	);
}
