"use client";

import { useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import PlusGrid from "../effects/plus-grid";

export function PlusGridSection() {
	const { resolvedTheme } = useTheme();
	const reducedMotion = useReducedMotion();

	return (
		<section aria-hidden className="relative h-72 w-full md:h-96">
			<PlusGrid
				className="absolute inset-0"
				config={{
					color: resolvedTheme === "light" ? "#000000" : "#ffffff",
					baseOpacity: 0.4,
					scrollSensitivity: 0.9,
				}}
				autoPulse={false}
				paused={!!reducedMotion}
			/>
		</section>
	);
}
