/*
	Liquid-glass refraction filters.
	#liquid-glass — animated churn for the hero dial (.liquid class).
	#liquid-lens — static thick-glass lens for the nav pill's backdrop-filter:
	displacement + frost + saturation in one chain. Content scrolling beneath
	bends through it; no animation needed, so the backdrop only repaints on scroll.
*/
export function LiquidFilter() {
	return (
		<svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
			<filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
				<feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="3" result="n">
					<animate
						attributeName="baseFrequency"
						dur="18s"
						values="0.008 0.012;0.012 0.008;0.008 0.012"
						repeatCount="indefinite"
					/>
				</feTurbulence>
				<feDisplacementMap in="SourceGraphic" in2="n" scale="12" xChannelSelector="R" yChannelSelector="G" />
			</filter>
			<filter id="liquid-lens" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
				{/*
					Structured lens map (feImage): R encodes x-shift, G encodes y-shift,
					neutral at center — real magnifying-glass refraction, blended with
					15% turbulence ripple for the liquid churn.
				*/}
				<feImage
					href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='56'%3E%3Cdefs%3E%3ClinearGradient id='x' x1='0' x2='1' y1='0' y2='0'%3E%3Cstop offset='0' stop-color='%23ff0000'/%3E%3Cstop offset='1' stop-color='%23000000'/%3E%3C/linearGradient%3E%3ClinearGradient id='y' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2300ff00'/%3E%3Cstop offset='1' stop-color='%23000000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='56' fill='url(%23x)'/%3E%3Crect width='200' height='56' fill='url(%23y)' style='mix-blend-mode:screen'/%3E%3C/svg%3E"
					x="0%"
					y="0%"
					width="100%"
					height="100%"
					preserveAspectRatio="none"
					result="map"
				/>
				<feTurbulence type="fractalNoise" baseFrequency="0.015 0.025" numOctaves="2" seed="7" result="noise" />
				<feComposite in="map" in2="noise" operator="arithmetic" k1="0" k2="0.85" k3="0.15" k4="0" result="mix" />
				<feDisplacementMap
					in="SourceGraphic"
					in2="mix"
					scale="56"
					xChannelSelector="R"
					yChannelSelector="G"
					result="displaced"
				/>
				<feGaussianBlur in="displaced" stdDeviation="2" result="frosted" />
				<feColorMatrix in="frosted" type="saturate" values="1.7" />
			</filter>
		</svg>
	);
}
