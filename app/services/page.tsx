import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
    title: "Services — 21 Blockchain & Crypto Solutions | Simha Fintech",
    description:
        "Explore Simha Fintech&apos;s 21 institutional-grade services across Financial, Technical, and Consulting verticals — crypto exchange infrastructure, smart contract development, regulatory compliance, and more.",
    keywords: [
        "blockchain services",
        "crypto services",
        "exchange infrastructure",
        "smart contract development",
        "DeFi development",
        "regulatory compliance crypto",
        "token creation",
        "crypto custody",
        "OTC trading",
        "blockchain consulting",
    ],
    openGraph: {
        title: "21 Blockchain & Crypto Solutions — Simha Fintech",
        description:
            "Financial, Technical, and Consulting services for the digital asset economy. EU-regulated, enterprise-ready.",
    },
};

export default function ServicesPage() {
    return <ServicesPageClient />;
}
