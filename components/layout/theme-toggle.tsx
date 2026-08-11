"use client";

import { useRef } from "react";
import { useThemeTransition } from "@/hooks/use-theme-transition";
import { Moon, Sun } from "./icons";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className = "" }: { className?: string }) {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { resolvedTheme, pickTheme } = useThemeTransition();

	return (
		<button
			ref={buttonRef}
			type="button"
			aria-label="Toggle color theme"
			onClick={() =>
				pickTheme(
					resolvedTheme === "dark" ? "light" : "dark",
					buttonRef.current,
				)
			}
			className={cn(
				`flex size-9 items-center justify-center rounded-full text-ink-dim transition-colors duration-300 ease-glass hover:bg-ink/5 hover:text-ink `,
				className,
			)}
		>
			<span className="hidden dark:block">
				<Sun size={15} />
			</span>
			<span className="dark:hidden">
				<Moon size={15} />
			</span>
		</button>
	);
}
