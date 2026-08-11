import { ImageResponse } from "next/og";
import { META } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
	"Companion TTS — Text-to-Speech for Claude Code on Windows";

/*
	Satori (next/og) supports flexbox and a subset of CSS only — no grid, and
	conic-gradient is unreliable, so the brand grainient is approximated with
	radial/linear gradients. Uses the bundled default font on purpose: pulling
	Space Grotesk would add a network fetch that can fail the build.
*/
export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					backgroundColor: "#050505",
					padding: "72px",
					position: "relative",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: -280,
						right: -220,
						width: 860,
						height: 860,
						borderRadius: "50%",
						display: "flex",
						backgroundImage:
							/* Fade out well inside the element bounds — a stop at the edge
							   leaves the circle's own rim visible as a hard arc. */
							"radial-gradient(circle at 50% 50%, #f754f1 0%, #6d28d9 32%, rgba(34,211,238,0.26) 54%, rgba(5,5,5,0) 70%)",
						opacity: 0.55,
					}}
				/>

				<div style={{ display: "flex", alignItems: "center", gap: 22 }}>
					<div
						style={{
							width: 58,
							height: 58,
							borderRadius: "50%",
							border: "3px solid #a855f7",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								width: 20,
								height: 20,
								borderRadius: "50%",
								display: "flex",
								backgroundImage: "linear-gradient(135deg, #f754f1, #22d3ee)",
							}}
						/>
					</div>
					<div
						style={{
							display: "flex",
							fontSize: 25,
							color: "#a1a1aa",
							letterSpacing: "0.26em",
						}}
					>
						COMPANION TTS
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							display: "flex",
							fontSize: 82,
							color: "#fafafa",
							letterSpacing: "-0.03em",
							lineHeight: 1.05,
						}}
					>
						Hear Claude Code work.
					</div>
					<div
						style={{
							display: "flex",
							marginTop: 26,
							fontSize: 34,
							color: "#a1a1aa",
							maxWidth: 900,
							lineHeight: 1.35,
						}}
					>
						{/* No hyphenated compounds: Satori opens a break at the hyphen and
					    leaves a visible gap after the token wherever it sits. */}
						{"Speaks Claude Code's output aloud, and pings you the moment it needs you."}
					</div>
				</div>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 16,
						fontSize: 24,
						color: "#71717a",
						letterSpacing: "0.1em",
					}}
				>
					<div style={{ display: "flex" }}>{META.platform}</div>
					<div style={{ display: "flex", color: "#3f3f46" }}>·</div>
					<div style={{ display: "flex" }}>FREE &amp; OPEN SOURCE</div>
					<div style={{ display: "flex", color: "#3f3f46" }}>·</div>
					<div style={{ display: "flex" }}>{META.license}</div>
				</div>
			</div>
		),
		{ ...size },
	);
}
