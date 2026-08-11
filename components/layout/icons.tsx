import type { ReactNode } from "react";

/*
	Hand-rolled ultra-light line icons — stroke 1.25, no icon dependency.
*/

type IconProps = {
	className?: string;
	size?: number;
};

function Svg({ className, size = 16, children }: IconProps & { children: ReactNode }) {
	return (
		<svg
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill="none"
			stroke="currentColor"
			strokeWidth={1.25}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			aria-hidden="true"
		>
			{children}
		</svg>
	);
}

export function Speaker(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M11 5 6 9H3v6h3l5 4V5Z" />
			<path d="M15.5 8.5a5 5 0 0 1 0 7" />
			<path d="M18 6a8.5 8.5 0 0 1 0 12" />
		</Svg>
	);
}

export function Bell(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9" />
			<path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
		</Svg>
	);
}

export function FileText(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z" />
			<path d="M14 3v5h5" />
			<path d="M9 13h6" />
			<path d="M9 17h6" />
		</Svg>
	);
}

export function Pencil(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M17 3a2.85 2.85 0 0 1 4 4L7.5 20.5 3 21l.5-4.5Z" />
		</Svg>
	);
}

export function VolumeX(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M11 5 6 9H3v6h3l5 4V5Z" />
			<path d="m16.5 9.5 5 5" />
			<path d="m21.5 9.5-5 5" />
		</Svg>
	);
}

export function Pause(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M9 5v14" />
			<path d="M15 5v14" />
		</Svg>
	);
}

export function SkipForward(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="m5 5 8 7-8 7V5Z" />
			<path d="M19 5v14" />
		</Svg>
	);
}

export function Stop(props: IconProps) {
	return (
		<Svg {...props}>
			<rect x="7" y="7" width="10" height="10" rx="1" />
		</Svg>
	);
}

export function ArrowUpRight(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M7 17 17 7" />
			<path d="M8 7h9v9" />
		</Svg>
	);
}

export function ArrowRight(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M4 12h15" />
			<path d="m13 6 6 6-6 6" />
		</Svg>
	);
}

export function Download(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M12 3v12" />
			<path d="m7 10 5 5 5-5" />
			<path d="M4 19h16" />
		</Svg>
	);
}

export function Sun(props: IconProps) {
	return (
		<Svg {...props}>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2" />
			<path d="M12 20v2" />
			<path d="m4.9 4.9 1.4 1.4" />
			<path d="m17.7 17.7 1.4 1.4" />
			<path d="M2 12h2" />
			<path d="M20 12h2" />
			<path d="m4.9 19.1 1.4-1.4" />
			<path d="m17.7 6.3 1.4-1.4" />
		</Svg>
	);
}

export function Moon(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
		</Svg>
	);
}

export function Waveform(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M4 10v4" />
			<path d="M8 7v10" />
			<path d="M12 4v16" />
			<path d="M16 7v10" />
			<path d="M20 10v4" />
		</Svg>
	);
}

export function GitHub({ className, size = 16 }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
			<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.35.77 1.05.77 2.12 0 1.54-.01 2.77-.01 3.15 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
		</svg>
	);
}
