import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
	instance = lenis;
}

export function getLenis() {
	return instance;
}

export function scrollToHash(hash: string) {
	if (instance) {
		instance.scrollTo(hash, { offset: -96 });
	} else {
		document.querySelector(hash)?.scrollIntoView({ block: "start" });
	}
}
