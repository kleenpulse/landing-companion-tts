import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* Generated rather than committed as a binary, so the mark stays in one place. */
export default function AppleIcon() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#050505",
				}}
			>
				<div
					style={{
						width: 112,
						height: 112,
						borderRadius: "50%",
						border: "14px solid #a855f7",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							width: 38,
							height: 38,
							borderRadius: "50%",
							display: "flex",
							backgroundImage: "linear-gradient(135deg, #f754f1, #22d3ee)",
						}}
					/>
				</div>
			</div>
		),
		{ ...size },
	);
}
