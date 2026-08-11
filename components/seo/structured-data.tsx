import { BENTO, FAQ, LINKS, META, SEO, SITE_URL } from "@/lib/content";

function jsonLd(payload: unknown) {
	return (
		<script
			type="application/ld+json"
			// Escape `<` so the payload cannot terminate the script element early.
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(payload).replace(/</g, "\\u003c"),
			}}
		/>
	);
}

/*
	Sourced entirely from the content contract so the schema can never drift
	from what the page actually claims.

	Deliberately no aggregateRating/review: there are zero real reviews, and
	fabricating them violates Google's structured-data policy.
*/
const softwareApplication = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Companion TTS",
	alternateName: "Companion Text-to-Speech for Claude Code",
	description: SEO.description,
	url: SITE_URL,
	applicationCategory: "DeveloperApplication",
	applicationSubCategory: "Text-to-Speech",
	operatingSystem: "Windows",
	softwareVersion: META.version.replace(/^v/, ""),
	license: LINKS.license,
	downloadUrl: LINKS.releases,
	codeRepository: LINKS.repo,
	isAccessibleForFree: true,
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD",
	},
	author: {
		"@type": "Organization",
		name: "kleenpulse",
		url: LINKS.repo,
	},
	featureList: BENTO.map((item) => item.title),
	sameAs: [LINKS.repo],
};

export function StructuredData() {
	return jsonLd(softwareApplication);
}

/*
	FAQPage on /setup. Google restricted FAQ *rich results* to authoritative
	gov/health sites in 2023, so this is not a SERP-decoration play — it is here
	because assistants and AI search parse it directly, which is the channel
	that actually matters for this product.
*/
const faqPage = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQ.map((item) => ({
		"@type": "Question",
		name: item.q,
		acceptedAnswer: { "@type": "Answer", text: item.a },
	})),
};

export function FaqStructuredData() {
	return jsonLd(faqPage);
}
