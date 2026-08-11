"use client";

import { useEffect, useRef } from "react";
import { getLenis } from "../../lib/lenis-store";

const IDLE_MS = 1000;
const MIN_THUMB = 40;
const GUTTER = 8;

/*
	Thumb-only overlay scrollbar. The native bar is hidden in globals.css and
	this fixed element is drawn in its place, fading out once scrolling stops.

	Reads native scroll rather than subscribing to Lenis: Lenis doesn't
	virtualize — it drives real window.scrollY — so scroll events fire on both
	the smooth and reduced-motion paths, and the instance may be null either way.
	getLenis() is only consulted on drag, to write position back through it.
*/
export function Scrollbar() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		/* Touch platforms already ship transient overlay scrollbars. */
		if (window.matchMedia("(pointer: coarse)").matches) return;

		let idleTimer = 0;
		let hovering = false;
		let dragging = false;
		let scrollSpan = 0; // document px left to scroll
		let trackSpan = 0; // px of travel available to the thumb
		let dragOriginY = 0;
		let dragOriginScroll = 0;

		const armIdle = () => {
			window.clearTimeout(idleTimer);
			if (hovering || dragging) return;
			idleTimer = window.setTimeout(() => {
				el.dataset.visible = "false";
			}, IDLE_MS);
		};

		const show = () => {
			el.dataset.visible = "true";
			armIdle();
		};

		const sync = () => {
			const y = scrollSpan > 0 ? (window.scrollY / scrollSpan) * trackSpan : 0;
			el.style.setProperty("--sb-y", `${GUTTER + y}px`);
		};

		const measure = () => {
			const vh = window.innerHeight;
			const doc = document.documentElement.scrollHeight;
			scrollSpan = doc - vh;
			if (scrollSpan <= 1) {
				el.dataset.active = "false";
				return;
			}
			el.dataset.active = "true";
			const height = Math.max(MIN_THUMB, (vh / doc) * vh);
			trackSpan = Math.max(0, vh - height - GUTTER * 2);
			el.style.setProperty("--sb-h", `${height}px`);
			sync();
		};

		const onScroll = () => {
			sync();
			show();
		};

		const onEnter = () => {
			hovering = true;
			show();
		};

		const onLeave = () => {
			hovering = false;
			armIdle();
		};

		const onPointerDown = (event: PointerEvent) => {
			if (event.button !== 0) return;
			dragging = true;
			dragOriginY = event.clientY;
			dragOriginScroll = window.scrollY;
			el.dataset.dragging = "true";
			el.setPointerCapture(event.pointerId);
			document.body.style.userSelect = "none";
			event.preventDefault();
			show();
		};

		const onPointerMove = (event: PointerEvent) => {
			if (!dragging || trackSpan <= 0) return;
			const delta = ((event.clientY - dragOriginY) / trackSpan) * scrollSpan;
			const target = Math.min(Math.max(dragOriginScroll + delta, 0), scrollSpan);
			const lenis = getLenis();
			if (lenis) {
				lenis.scrollTo(target, { immediate: true });
			} else {
				window.scrollTo(0, target);
			}
		};

		const onPointerUp = (event: PointerEvent) => {
			if (!dragging) return;
			dragging = false;
			el.dataset.dragging = "false";
			el.releasePointerCapture(event.pointerId);
			document.body.style.userSelect = "";
			armIdle();
		};

		/* Sections reveal on scroll and fonts swap late — both move scrollHeight. */
		const ro = new ResizeObserver(measure);
		ro.observe(document.body);

		measure();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", measure);
		el.addEventListener("pointerenter", onEnter);
		el.addEventListener("pointerleave", onLeave);
		el.addEventListener("pointerdown", onPointerDown);
		el.addEventListener("pointermove", onPointerMove);
		el.addEventListener("pointerup", onPointerUp);
		el.addEventListener("pointercancel", onPointerUp);

		return () => {
			window.clearTimeout(idleTimer);
			ro.disconnect();
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", measure);
			el.removeEventListener("pointerenter", onEnter);
			el.removeEventListener("pointerleave", onLeave);
			el.removeEventListener("pointerdown", onPointerDown);
			el.removeEventListener("pointermove", onPointerMove);
			el.removeEventListener("pointerup", onPointerUp);
			el.removeEventListener("pointercancel", onPointerUp);
			document.body.style.userSelect = "";
		};
	}, []);

	return (
		<div
			ref={ref}
			aria-hidden="true"
			data-scrollbar-thumb=""
			data-active="false"
			data-visible="false"
			data-dragging="false"
		/>
	);
}
