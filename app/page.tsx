import { Backdrop } from "@/components/effects/backdrop";
import { LiquidFilter } from "@/components/effects/liquid-filter";
import { Footer } from "@/components/layout/footer";
import { IslandNav } from "@/components/layout/island-nav";
import { AlertsSection } from "@/components/sections/alerts-section";
import { BentoGrid } from "@/components/sections/bento-grid";
import { FinalCTA } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { OpenSourceStrip } from "@/components/sections/open-source-strip";
import { ProviderChain } from "@/components/sections/provider-chain";
import { VoicesSection } from "@/components/sections/voices-section";

export default function Home() {
	return (
		<>
			<Backdrop />
			<LiquidFilter />
			<IslandNav />
			<main className="relative z-10 flex-1">
				<Hero />
				<AlertsSection />
				<ProviderChain />
				<BentoGrid />
				<VoicesSection />
				<OpenSourceStrip />
				<FinalCTA />
			</main>
			<Footer />
		</>
	);
}
